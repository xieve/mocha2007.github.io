/* eslint-disable indent */
/* jshint esversion: 6, strict: true, strict: global */
/* globals ages, lifeData */
/* exported openAge, searchButton, toggle, main */
'use strict';

// https://stackoverflow.com/a/196991/2579798
function toTitleCase(str){
	return str.replace(
		/\w\S*/g,
		function(txt){
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		}
	);
}

/** @type {Object<string, HTMLElement>} */
const objects = {}; // string -> DOM object map
let openSetting = false; // default setting
const regions = {
	'WW': 'Worldwide',
		'AN': 'Antarctica',
		'NW': 'New World',
			'NA': 'North America',
			'SA': 'South America',
		'OC': 'Oceania',
		'OW': 'Old World',
			'AF': 'Africa',
			'EA': 'Eurasia',
				'AS': 'Asia',
				'EU': 'Europe',
		// alternatively
		'NH': 'Northern Hemisphere',
		'EQ': 'Equatorial Regions',
		'SH': 'Southern Hemisphere',
		// oceans
		'AL': 'Atlantic',
	'XX': 'Extinct',
};

// helper functions

function getAge(age){
	if (1 < age){
		return age + ' mya';
	}
		return age*1000 + ' kya';
}

function getEra(age, ageList = ages, depth = 0){
	let i;
	const names = ['eon', 'era', 'period', 'epoch', 'age'];
	for (i = 1; i < ageList.length; i++){
		if (ageList[i].start < age){
			break;
		}
	}
	return (ageList[i-1].hasOwnProperty('divisions') ?  getEra(age, ageList[i-1].divisions, depth+1) + ', ' : '') +
	ageList[i-1].name + ' ' + names[depth];
}

function isImportant(i){
	// console.log('isImportant', i, lifeData[i]);
	return lifeData[i].hasOwnProperty('important') && lifeData[i].important;
}

function openAge(age){
	// open all clades older than age mya
	lifeData.forEach(
		clade => {
			if (clade.hasOwnProperty('age') && age < clade.age){
				openParents(objects[clade.name]);
			}
		}
	);
}

function openParents(object){
	// console.log('openParents', object);
	// open object
	object.open = true;
	// get parent
	const parent = object.parentElement;
	// if parent === details then call for parent
	if (parent.tagName === 'DETAILS'){
		openParents(parent);
	}
}

function refreshButtons(){
	document.getElementById('toggle_button_inner').innerHTML = openSetting ? 'Close' : 'Open';
}

/** @param {string} string */
function search(string){
	string = string.toLowerCase();
	/** @type {number[]} */
	const indices = [];
	// return all lifeData indices matching search string
	lifeData.forEach(
		(clade, i) => {
			// if name or desc contains string
			if (clade.hasOwnProperty('name') && clade.name.toLowerCase().includes(string) ||
				clade.hasOwnProperty('desc') && clade.desc.toLowerCase().includes(string)){
				indices.push(i);
			}
		}
	);
	return indices;
}

function searchButton(){
	const searchString = document.getElementById('search_clade').value;
	// clear results
	document.getElementById('results').innerHTML = '';
	search(searchString).forEach((i) => {
		const name = lifeData[i].name;
		// open element
		openParents(objects[name]);
		// show result
		const li = document.createElement('li');
		li.value = i;
		if (name.includes(searchString)){
			li.innerHTML = name.replace(new RegExp(searchString, 'gi'), '<b>' + searchString + '</b>');
		}
		else {
			li.innerHTML = name + ' (matched description)';
		}
		document.getElementById('results').appendChild(li);
	});
}

function toggle(){
	// make everything closed or open (toggle)
	openSetting = !openSetting;
	refreshButtons();
	const elements = document.getElementsByTagName('DETAILS');
	Array.from(elements).forEach(
		element => element.open = openSetting
	);
}

// main program

function main(){
	let i, name;
	// print appropriate text to toggle button
	refreshButtons();
	// first, add everything in lifeData to objects
	for (i = 0; i < lifeData.length; i++){
		// create DOM object
		const details = document.createElement('details');
		details.open = openSetting;
		const rank = lifeData[i].rank;
		details.classList.add(rank);
		name = lifeData[i].name;
		objects[name] = details;
		details.id = name;
		// title
		const title = document.createElement('summary');
		/* important
		if (isImportant(i)){
			var important = document.createElement("span");
			important.classList.add('important');
			important.innerHTML = '(!) ';
			title.appendChild(important);
		}
		*/
		// rank
		const b = document.createElement('b');
		b.innerHTML = toTitleCase(rank) + ' ';
		title.appendChild(b);
		// extinct?
		if (lifeData[i].hasOwnProperty('extinct') && lifeData[i].hasOwnProperty('extinct')){
			title.innerHTML += '&dagger; ';
		}
		// name
		let a = document.createElement('a');
		a.innerHTML = toTitleCase(name);
		a.href = 'https://en.wikipedia.org/wiki/' + toTitleCase(name);
		title.appendChild(a);
		// range
		if (lifeData[i].hasOwnProperty('range')){
			const rangeAbbr = lifeData[i].range.toUpperCase();
			title.innerHTML += ' ';
			const range = document.createElement('abbr');
			range.classList.add('range');
			range.title = regions[rangeAbbr];
			range.innerHTML = rangeAbbr;
			title.appendChild(range);
		}
		// age
		if (lifeData[i].hasOwnProperty('age')){
			a = lifeData[i].age; // mya
			title.innerHTML += ' ';
			const age = document.createElement('abbr');
			age.classList.add('age');
			age.title = getEra(a);
			age.innerHTML = getAge(a);
			title.appendChild(age);
		}
		details.appendChild(title);
		// desc
		if (lifeData[i].hasOwnProperty('desc')){
			const desc = document.createElement('p');
			desc.innerHTML = lifeData[i].desc;
			details.appendChild(desc);
		}
	}
	// next, nest everything accordingly. add * to root.
	for (i = 0; i < lifeData.length; i++){
		name = lifeData[i].name;
		console.log('Loading ' + name + '...');
		const parentId = lifeData[i].parent;
		const child = objects[name];
		let parent = document.getElementById('root');
		if (parentId !== '*'){
			parent = objects[parentId];
		}
		parent.appendChild(child);
	}
	// next, if important, open every parent
	for (i = 0; i < lifeData.length; i++){
		if (isImportant(i)){
			openParents(objects[lifeData[i].name]);
		}
	}
	console.log('Loaded.');
}