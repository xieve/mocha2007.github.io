/* jshint esversion: 6, strict: true, strict: global, eqeqeq: true, nonew: false */
/* exported main */
/* globals cookie, random */
'use strict';
const version = 'a200506';
const clickerName = 'cellgame';

// classes
const resources = [];
class Resource {
	/**
	 * @param {string} name
	 * @param {number} density kg/m^3
	 */
	constructor(name, imgUrl = ''){
		this.name = name;
		this.imgUrl = imgUrl;
		resources.push(this);
	}
	get img(){
		const image = document.createElement('img');
		image.classList.add('chem');
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
}

const materials = [];
class Material extends Resource {
	/**
	 * @param {string} name
	 * @param {number} density kg/m^3
	 */
	constructor(name, density, imgUrl = ''){
		super(name, imgUrl);
		this.density = density;
		materials.push(this);
	}
}

/** @type {Chem[]} */
const chems = [];
class Chem extends Material {
	/**
	 * @param {string} name
	 * @param {number} molarMass g/mol
	 * @param {string} imgUrl
	 */
	constructor(name, density, molarMass, imgUrl = ''){
		super(name, density, imgUrl); // todo
		this.molarMass = molarMass;
		chems.push(this);
	}
	/** @return {0|2|3|4} de facto */
	get rarity(){
		return Math.max(2, Math.floor(Math.log(this.molarMass))) - 2;
	}
	get rarityDiv(){
		const div = document.createElement('div');
		div.classList.add('rarity' + this.rarity);
		div.innerHTML = 'Rarity: ' + this.rarity;
		return div;
	}
}
new Chem('Water', 1000, 18.01528, 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Water_molecule_3D.svg');
new Chem('Cytosine', 1.55e3, 111.1, 'https://upload.wikimedia.org/wikipedia/commons/7/73/Cytosine-3D-balls.png');
new Chem('Uracil', 1.32e3, 112.08676, 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Uracil-3D-balls.png');
new Chem('Thymine', 1.223e3, 126.115, 'https://upload.wikimedia.org/wikipedia/commons/8/88/Thymine-3D-balls.png');
new Chem('Adenine', 1.6e3, 135.13, 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Adenine-3D-balls.png');
new Chem('Guanine', 2.2e3, 151.13, 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Guanine-3D-balls.png');
new Chem('Glucose', 1.54e3, 180.156, 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Alpha-D-glucose-from-xtal-1979-3D-balls.png');
new Chem('ATP', 1.04e3, 507.18, 'https://upload.wikimedia.org/wikipedia/commons/2/22/ATP-3D-vdW.png');

// constants

const Game = {
	action: {
		/** @param {Chem} chem */
		addToPlayer(chem, amount = 1){
			const nameMap = Game.player.inventory.map(item => item[0]);
			if (nameMap.includes(chem.name))
				Game.player.inventory[nameMap.indexOf(chem.name)][1] += amount;
			else
				Game.player.inventory.push([chem.name, amount]);
		},
		mine(){
			const c = Game.chem.random();
			this.addToPlayer(c);
			const l = document.getElementById('miningLog');
			l.innerHTML = 'mined ' + c.name;
			l.appendChild(c.rarityDiv);
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
	player: {
		/** @type {[string, number][]} [name, count] of chems */
		inventory: [],
		lastSave: 0,
		lifetimeSnueg: 0,
		snueg: 0,
		startTime: +new Date(),
	},
	save: {
		load(){
			const saveFile = cookie.read(clickerName);
			Game.player = saveFile.player;
			Game.settings = saveFile.settings;
		},
		/**
		 * @param {boolean} isManual is this save manually triggered, or automatic?
		*/
		save(isManual = false){
			clearTimeout(Game.debug.autosaveTimeout);
			const saveFile = {};
			saveFile.settings = Game.settings;
			Game.player.lastSave = +new Date();
			saveFile.player = Game.player;
			cookie.write(clickerName, saveFile);
			Game.debug.lastSave = new Date();
			if (isManual)
				Game.log('Successfully manually saved Game!');
			Game.debug.autosaveTimeout = setTimeout(Game.save.save, Game.settings.autosaveInterval);
		},
	},
	settings: {
		autosaveInterval: 30 * 1000,
	},
};

// functions

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
	// notification
	Game.log(clickerName + ' v. ' + version + ' loaded successfully.');
}