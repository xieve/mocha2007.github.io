/* jshint esversion: 6, strict: true, strict: global, eqeqeq: true, nonew: false */
/* exported main */
/* globals cookie, random, sum */
'use strict';
const version = 'a200506';
const clickerName = 'cellgame';

// classes
/** @type {Chem[]} */
const chems = [];
class Chem {
	/**
	 * @param {string} name
	 * @param {number} molarMass g/mol
	 */
	constructor(name, molarMass, imgUrl = ''){
		this.name = name;
		this.mass = molarMass;
		this.imgUrl = imgUrl;
		chems.push(this);
	}
	get img(){
		const image = document.createElement('img');
		image.classList.add('chem');
		image.src = this.imgUrl;
		image.title = this.name;
		image.alt = this.name;
		return image;
	}
}
new Chem('Water', 18.01528, 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Water_molecule_3D.svg');
new Chem('Cytosine', 111.1, 'https://upload.wikimedia.org/wikipedia/commons/7/73/Cytosine-3D-balls.png');
new Chem('Uracil', 112.08676, 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Uracil-3D-balls.png');
new Chem('Adenine', 135.13, 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Adenine-3D-balls.png');
new Chem('Guanine', 151.13, 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Guanine-3D-balls.png');
new Chem('Glucose', 180.156, 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Alpha-D-glucose-from-xtal-1979-3D-balls.png');

// constants

const Game = {
	action: {
		mine(){
			// todo
		},
	},
	chem: {
		chems,
		random(){
			return random.weightedChoice(this.chems, this.weights);
		},
		get weights(){
			return this.chems.map(c => 1/c.mass);
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