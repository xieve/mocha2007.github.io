/* exported main */
/* global data, phones, random */
'use strict';


class Phone {
	/**
	 * individual phones usable by languages as phonemes or allophones
	 * @param {string} name eg 'p'
	 * @param {object} properties info about c/v, voicedness, ...
	*/
	constructor(name, properties){
		this.name = name;
		this.properties = properties;
		Phone.list.push(this);
	}
	get html(){
		const elem = document.createElement('span');
		elem.classList.add('phone');
		elem.innerHTML = this.name;
		return elem;
	}
	testIfGenerates(){
		return random.random() < this.properties.freq;
	}
	static load(){
		// todo
		phones.forEach(phoneDatum => {
			new Phone(phoneDatum.name, phoneDatum.properties);
		});
	}
}
/** @type {Phone[]} */
Phone.list = [];


class Phoneme {
	/**
	 * phonemes of a language
	 * @param {Phone} primary eg 'p'
	 * @param {Allophone[]} allophones allophones and their conditions
	*/
	constructor(primary, allophones){
		this.primary = primary;
		this.allophones = allophones;
	}
	static generatePhonology(){
		// todo
		return Phone.list.filter(p => p.testIfGenerates()).map(p => {
			return new Phoneme(p);
		});
	}
	/** @param {Phoneme[]} phonology */
	static generateHTML(phonology){
		// todo
		const div = document.createElement('div');
		div.id = 'phonology';
		const consonantTable = document.createElement('table');
		div.appendChild(consonantTable);
		consonantTable.id = 'consonants';
		// determine necessary columns (POA) and rows (MOA)
		const moa = data.MOA.filter(
			manner => phonology.some(p => p.primary.properties.manner === manner));
		const poa = data.POA.filter(
			place => phonology.some(p => p.primary.properties.place === place));
		// create cells for that...
		// create headers...
		const headerRow = document.createElement('tr');
		consonantTable.appendChild(headerRow);
		headerRow.appendChild(document.createElement('th')); // blank corner
		poa.forEach(place => {
			const cell = document.createElement('th');
			cell.innerHTML = place;
			headerRow.appendChild(cell);
		});
		// create rows...
		moa.forEach(manner => {
			const row = document.createElement('tr');
			consonantTable.appendChild(row);
			const header = document.createElement('th');
			header.innerHTML = manner;
			row.appendChild(header);
			// now create each cell in this row...
			poa.forEach(place => {
				const cell = document.createElement('td');
				row.appendChild(cell);
				// put all applicable phones in this cell...
				phonology.filter(p => p.primary.properties.manner === manner
					&& p.primary.properties.place === place).forEach(p => {
					cell.appendChild(p.primary.html);
				});
			});
		});
		return div;
	}
}

class Language {
	/**
	 * currently, languages have only phonologies
	 * @param {Phoneme[]} phonology set of phonemes
	*/
	constructor(phonology){
		this.phonology = phonology;
	}
	print(){
		// show tables n sheit
		const doc = document.getElementById('body');
		doc.appendChild(Phoneme.generateHTML(this.phonology));
	}
	static generate(){
		return new Language(Phoneme.generatePhonology());
	}
}

function main(){
	// load all data
	Phone.load();
	const l = Language.generate();
	console.debug(l);
	l.print();
}