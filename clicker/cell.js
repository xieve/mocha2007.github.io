/* jshint esversion: 6, strict: true, strict: global, eqeqeq: true, nonew: false */
/* exported main */
/* globals cookie, random */
'use strict';
const version = 'a200511';
const clickerName = 'cellgame';

// constants
/** mol^-1; exact; Avogadro's Constant */
const avogadro = 6.02214076e23;

// classes

class Particle {
	/**
	 * Aesthetic Particles
	 * @param {HTMLElement} element - element to animate
	 * @param {(elem: HTMLElement) => void} tick - animation function (runs every tick, takes element as argument)
	 * @param {number} lifespan - animation time (s)
	*/
	constructor(element, tick, lifespan){
		element.id = +new Date();
		element.classList.add('particle');
		document.getElementById('left').appendChild(element);
		this.element = element;
		this.tick = tick;
		this.lifespan = lifespan;
		setIntervalX(() => tick(element), 1000/Game.settings.fps, lifespan*Game.settings.fps);
		setTimeout(() => {
			try {
				document.getElementById(element.id).remove();
			}
			catch (TypeError){
				// if a click-removable particle is defined and clicked, this block will trigger
			}
		}, lifespan*1000);
		Game.particles.push(this);
	}
}

class Interactable {
	/** things with names, descs, and images
	 * @param {string} name
	 * @param {string} desc
	 * @param {string} imgUrl
	 * @param {string[]} tags
	 */
	constructor(name, desc = '', imgUrl = '', tags = []){
		this.name = name;
		this.desc = desc;
		this.imgUrl = imgUrl;
		this.tags = tags.map(tagName => Tag.fromString(tagName));
	}
	/** @return {Tag[]} a flat array of all categories and supercategories it is a member of */
	get categories(){
		return this.tags.concat(...this.tags.map(t => t.categories));
	}
	get img(){
		const image = document.createElement('img');
		image.src = this.imgUrl;
		image.title = this.name;
		image.alt = this.name;
		return image;
	}
	get wikilink(){
		const a = document.createElement('a');
		a.href = 'https://en.wikipedia.org/wiki/' + this.name;
		a.innerHTML = this.name;
		return a;
	}
	/**
	 * @param {Tag} tag
	 * @return {boolean}
	 */
	hasTag(tag){
		return this.tags.some(t => t === tag || t.hasTag(t));
	}
}

/** @type {Tag[]} */
const tagList = [];
class Tag extends Interactable {
	/** things with names, descs, and images
	 * @param {string} name
	 * @param {string[]} tags - implications, like how FPS => first person, shooter
	 * @param {string} desc
	 * @param {string} imgUrl
	 */
	constructor(name, tags = [], desc = '', imgUrl = ''){
		super(name, desc, imgUrl, tags);
		tagList.push(this);
	}
	/** @param {string} string */
	static fromString(string){
		return tagList.filter(t => t.name === string)[0];
	}
}

/** @type {Item[]} */
const items = [];
class Item extends Interactable {
	/** physical, tangible objects
	 * @param {string} name
	 * @param {number} mass
	 * @param {number} volume
	 * @param {Material[]} composition
	 * @param {string[]} tags
	 */
	constructor(name, mass, volume, imgUrl = '', tags = []){
		super(name, undefined, imgUrl, tags);
		this.mass = mass;
		this.volume = volume;
		this.rarity = 0;
		items.push(this);
	}
	get amount(){
		return Game.p.amount(this);
	}
	get density(){
		return this.mass / this.volume;
	}
	get elem(){
		const elemId = 'item' + this.name;
		/** @type {HTMLLIElement} */
		let li = document.getElementById(elemId);
		if (!li){
			li = document.createElement('li');
			li.id = elemId;
			li.appendChild(this.span);
			document.getElementById('invList').appendChild(li);
		}
		// update amount
		if (this.amount)
			li.classList.remove('invisible');
		else
			li.classList.add('invisible');
		li.value = this.amount;
		// return
		return li;
	}
	get itemId(){
		return items.indexOf(this);
	}
	/** inline representation of an item */
	get span(){
		const elem = document.createElement('span');
		// icon
		const img = this.img;
		img.style.height = '20px';
		img.style.marginBottom = '-5px';
		elem.appendChild(img);
		// name
		const name = document.createElement('span');
		name.innerHTML = this.name;
		elem.appendChild(name);
		// styling
		elem.style.color = Game.rarity.colors[this.rarity];
		elem.title = this.name + '\n' +
			'ID: ' + this.itemId + '\n' +
			'Rarity: ' + Game.rarity.names[this.rarity] + ' (' + this.rarity + ')\n' +
			this.desc;
		return elem;
	}
	createParticle(){
		const p = this.img;
		p.style.opacity = 1;
		p.style.width = '200px';
		return new Particle(p, e => {
			e.style.opacity = parseFloat(e.style.opacity) * 0.9;
			e.style.width = parseFloat(e.style.width.slice(0, -2)) * 0.9 + 'px';
		}, 1);
	}
	/** @param {number} v */
	kinetic(v){
		return 1/2 * this.mass * v*v;
	}
}

/** @type {Chem[]} */
const chems = [];
class Chem extends Item {
	/**
	 * @param {string} name
	 * @param {number} density g/cm^3
	 * @param {number} molarMass g/mol
	 * @param {string} imgUrl
	 * @param {string[]} tags
	 */
	constructor(name, density, molarMass, imgUrl = '', tags = []){
		super(name, molarMass/avogadro,
			// volume estimate from https://physics.stackexchange.com/a/67721
			molarMass / density / avogadro,
			imgUrl, tags);
		// super(name, density*1000, imgUrl, tags);
		/** kg/mol */
		this.molarMass = molarMass / 1000;
		chems.push(this);
	}
	/** @return {number} integer in [1, 4] */
	get rarity(){
		return Math.max(0, Math.floor(Math.log(this.molarMass)) + 4);
	}
	set rarity(_){}
	/** @param {string} name */
	static find(name){
		return chems.filter(c => c.name === name)[0];
	}
}

/** @type {Recipe[]} */
const recipes = [];
class Recipe {
	/**
	 * @param {[Item, number][]} reagents
	 * @param {[Item, number][]} products
	 */
	constructor(reagents, products){
		this.reagents = reagents;
		this.products = products;
		recipes.push(this);
		// create element
		this.elem;
	}
	get elem(){
		const elemId = this.elemId;
		/** @type {HTMLLIElement} */
		let li = document.getElementById(elemId);
		if (!li){
			li = document.createElement('li');
			li.id = elemId;
			li.appendChild(this.span);
			li.onclick = () => this.make();
			li.title = 'Make this recipe';
			document.getElementById('recipeList').appendChild(li);
		}
		return li;
	}
	get elemId(){
		return 'recipe' + this.id;
	}
	get id(){
		return recipes.indexOf(this);
	}
	get makable(){
		return this.reagents.every(i => i[1] <= i[0].amount);
	}
	get span(){
		const span = document.createElement('span');
		this.reagents.forEach((x, i) => {
			span.innerHTML += x[1] + ' ';
			span.appendChild(x[0].span);
			if (i !== this.reagents.length - 1)
				span.innerHTML += ', ';
		});
		span.innerHTML += ' &rarr; ';
		this.products.forEach((x, i) => {
			span.innerHTML += x[1] + ' ';
			span.appendChild(x[0].span);
			if (i !== this.products.length - 1)
				span.innerHTML += ', ';
		});
		return span;
	}
	make(){
		Game.log('Attempted to craft recipe' + this.id);
		if (!this.makable)
			return false;
		this.reagents.forEach(i => Game.p.add(i[0], -i[1]));
		this.products.forEach(i => Game.p.add(i[0], i[1]));
		return true;
	}
}

/** @type {Tech[]} */
const techs = [];
class Tech extends Interactable {
	/**
	 * @param {string} name
	 * @param {string} desc
	 * @param {Tech[]} prereqs
	 * @param {[Item, number][]} cost
	 * @param {string[]} tags
	 */
	constructor(name, desc, prereqs = [], cost = [], tags = []){
		super(name, desc, undefined, tags);
		this.prereqs = prereqs;
		this.cost = cost;
		techs.push(this);
		// create element
		this.elem;
	}
	get elem(){
		const elemId = 'tech' + this.name;
		/** @type {HTMLLIElement} */
		let li = document.getElementById(elemId);
		if (!li){
			li = document.createElement('li');
			li.id = elemId;
			li.innerHTML = this.name;
			li.onclick = () => this.unlock();
			li.title = 'Buy this upgrade';
			document.getElementById('techList').appendChild(li);
		}
		return li;
	}
	get unlockable(){
		return this.prereqs.every(t => t.unlocked) &&
			this.cost.every(x => x[1] <= x[0].amount);
	}
	get unlocked(){
		return Game.player.unlockedTechs.includes(this.name);
	}
	/** @return {boolean} Was the unlock successful? */
	unlock(){
		if (!this.unlockable || this.unlocked)
			return false;
		this.cost.forEach(x => Game.p.add(x[0], -x[1]));
		Game.player.unlockedTechs.push(this.name);
		return true;
	}
}

// constants

const Game = {
	action: {
		mine(){
			const c = Game.chem.random();
			Game.p.add(c);
			const l = document.getElementById('miningLog');
			l.innerHTML = 'mined ';
			l.appendChild(c.span);
			l.appendChild(document.createElement('br'));
			l.appendChild(Game.rarity.elem(c.rarity));
			c.createParticle();
			c.elem; // create inventory element
		},
	},
	chem: {
		chems,
		/** @return {Chem} */
		random(){
			return random.weightedChoice(this.chems, this.weights);
		},
		get weights(){
			// -1 too big, -2 too small... but realistic...
			return this.chems.map(c => Math.pow(c.molarMass, -2));
		},
	},
	debug: {
		/** @type {number} */
		autosaveTimeout: undefined,
		loadTime: new Date(),
		/** @type {string[]} */
		log: [],
		version,
	},
	/** @param {string} string string to log */
	log(string){
		Game.debug.log.push(string);
		console.log(string);
	},
	/** shit that can't go into a savefile */
	p: {
		/** @param {Item} item */
		add(item, amount = 1){
			if (this.hasItem(item)){
				const nameMap = Game.player.inventory.map(i => i[0]);
				Game.player.inventory[nameMap.indexOf(item.name)][1] += amount;
			}
			else
				Game.player.inventory.push([item.name, amount]);
			// update count
			item.elem;
		},
		/** @param {Item} item */
		amount(item){
			return this.hasItem(item) &&
				Game.player.inventory.filter(i => i[0] === item.name)[0][1] ||
				0;
		},
		/** @param {Item} item */
		hasItem(item){
			return Game.player.inventory.some(i => i[0] === item.name);
		},
	},
	/** @type {Particle[]} */
	particles: [],
	player: {
		/** @type {[string, number][]} [name, count] of Item */
		inventory: [],
		lastSave: 0,
		/** @type {number[]} tech ids */
		unlockedTechs: [],
		startTime: +new Date(),
	},
	powerOverwhelming(){
		Game.p.add(water, 100);
		automineTech.unlock();
	},
	rarity: {
		colors: 'White CornflowerBlue PaleGreen BurlyWood IndianRed'.split(' '),
		names: 'Common Uncommon Rare Epic Legendary'.split(' '),
		/** @param {number} n */
		elem(n){
			const span = document.createElement('span');
			span.id = 'rarity';
			span.innerHTML = this.names[n];
			span.style.color = this.colors[n];
			return span;
		},
	},
	save: {
		load(){
			const saveFile = cookie.read(clickerName);
			Game.player = saveFile.player;
			Game.settings = saveFile.settings;
		},
		reset(){
			cookie.delete(clickerName);
			location.reload();
		},
		save(){
			clearTimeout(Game.debug.autosaveTimeout);
			const saveFile = {};
			saveFile.settings = Game.settings;
			Game.player.lastSave = +new Date();
			saveFile.player = Game.player;
			cookie.write(clickerName, saveFile);
			Game.debug.lastSave = new Date();
			Game.log('Game saved.');
			Game.debug.autosaveTimeout = setTimeout(Game.save.save, Game.settings.autosaveInterval);
		},
	},
	settings: {
		autosaveInterval: 30 * 1000,
		fps: 20,
	},
	tick(){
		// automine
		if (automineTech.unlocked)
			Game.action.mine();
		// fade / unfade recipes
		recipes.forEach(r => {
			const c = document.getElementById(r.elemId).classList;
			if (r.makable)
				c.remove('faded');
			else
				c.add('faded');
		});
	},
};

// ITEM, RECIPE, ETC DEFS (MUST COME AFTER GAME)
// Tier 0 - no reqs
new Tag('Organic', [], 'Molecules containing a carbon-hydrogen bond'); // must contain H C

// Tier 1 - requires something from Tier 0
new Tag('Carboxylic Acid', ['Organic'], 'Molecules with a carboxyl group'); // must contain H C O
new Tag('Carbohydrate', ['Organic'], 'Molecules of Carbon, Oxygen, and Hydrogen'); // must contain H C O and only those
new Tag('Nucleobase', ['Organic']);

// Tier 2
new Tag('Amino Acid', ['Carboxylic Acid'], 'Molecules with an amine and carboxyl group'); // must contain H C N O
new Tag('Monosaccharide', ['Carbohydrate']);

// chems - ball-and-stick models preferred
const water = new Chem('Water', 1, 18.01528, 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Water_molecule_3D.svg');
new Chem('Nitrogen', 1.2506e-3, 28, 'https://upload.wikimedia.org/wikipedia/commons/2/20/Dinitrogen-3D-vdW.png');
new Chem('Phosphorus', 1.823, 30.973761998, 'https://cdn0.iconfinder.com/data/icons/3D-shapes-psd/256/ball-6x6.png');
new Chem('Oxygen', 1.429e-3, 32, 'https://upload.wikimedia.org/wikipedia/commons/5/57/Oxygen_molecule.svg');
new Chem('Carbon Dioxide', 1.429e-3, 44.009, 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Carbon_dioxide_3D_ball.png');
new Chem('Sodium Chloride', 2.17, 58.443, 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Sodium-chloride-3D-ionic.png');
new Chem('Glycine', 1.1607, 75.067, 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Glycine-3D-balls.png', ['Amino Acid']);
new Chem('Pyruvic Acid', 1.25, 88.06, 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Pyruvic-acid-3D-balls.png', ['Carboxylic Acid']);
new Chem('Cytosine', 1.55, 111.1, 'https://upload.wikimedia.org/wikipedia/commons/7/73/Cytosine-3D-balls.png', ['Nucleobase']);
new Chem('Uracil', 1.32, 112.08676, 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Uracil-3D-balls.png', ['Nucleobase']);
new Chem('Thymine', 1.223, 126.115, 'https://upload.wikimedia.org/wikipedia/commons/8/88/Thymine-3D-balls.png', ['Nucleobase']);
new Chem('Adenine', 1.6, 135.13, 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Adenine-3D-balls.png', ['Nucleobase']);
new Chem('Guanine', 2.2, 151.13, 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Guanine-3D-balls.png', ['Nucleobase']);
new Chem('Vitamin C', 1.694, 176.12, 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Ascorbic-acid-from-xtal-1997-3D-balls.png', ['Organic']);
new Chem('Glucose', 1.54, 180.156, 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Alpha-D-glucose-from-xtal-1979-3D-balls.png', ['Monosaccharide']);
new Chem('Citric Acid', 1.665, 192.123, 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Citric-acid-3D-balls.png', ['Carboxylic Acid']);
new Chem('ADP', 2.49, 427.201, 'https://upload.wikimedia.org/wikipedia/commons/9/99/Adenosine-diphosphate-3D-balls.png', ['Organic']);
new Chem('ATP', 1.04, 507.18, 'https://upload.wikimedia.org/wikipedia/commons/2/22/ATP-3D-vdW.png', ['Organic']);
new Chem('NAD+', undefined, 663.43, 'https://upload.wikimedia.org/wikipedia/commons/4/4c/NAD%2B-from-xtal-2003-3D-balls.png', ['Organic']);
new Chem('NADH', undefined, 663.43, 'https://upload.wikimedia.org/wikipedia/commons/4/4c/NAD%2B-from-xtal-2003-3D-balls.png', ['Organic']);

// recipes
const glycolysisTest = new Recipe(
	[
		[Chem.find('Glucose'), 1],
		[Chem.find('NAD+'), 2],
		[Chem.find('ADP'), 2],
		[Chem.find('Phosphorus'), 2],
	],
	[
		[Chem.find('Pyruvic Acid'), 2],
		[Chem.find('NADH'), 2],
		[Chem.find('ATP'), 2],
		[Chem.find('Water'), 2],
	]
);

const automineTech = new Tech('Automine', 'Automatically mine for resources', undefined, [[water, 100]]);

// functions

// https://stackoverflow.com/a/2956980/2579798
function setIntervalX(callback, delay, repetitions){
	let x = 0;
	const intervalID = window.setInterval(function(){
		callback();
		if (++x === repetitions){
			window.clearInterval(intervalID);
		}
	}, delay);
}

// main only beyond here

function main(){
	// update version div
	document.getElementById('version').innerHTML = 'v. ' + Game.debug.version;
	// load save
	if (cookie.read(clickerName))
		Game.save.load();
	else
		Game.save.save();
	// set up ticks
	setTimeout(Game.save.save, Game.settings.autosaveInterval);
	setInterval(Game.tick, 1000);
	// notification
	Game.log(clickerName + ' v. ' + version + ' loaded successfully.');
}