/* exported compileDict, compileFinals, compileInitials, compileLength,
	compileMeanings, compileMedials, compileNounClass */

"use strict";

// tools for main
/** @param {HTMLDListElement} - the entire dictionary element*/
const d = document.getElementsByClassName('dictionary')[0];
/** @param {string[]} - array of words*/
const dict = new Array(...d.getElementsByTagName('dt')).map(e => e.innerHTML);
/** @param {HTMLParagraphElement} - the element with the buttons*/
const p = document.getElementById("wordlist");

// main
function compileDict(){
	p.innerHTML = dict.join(" ");
}

function compileFinals(){
	p.innerHTML = dict.map(w => w[w.length-1]).join("");
}

function compileInitials(){
	p.innerHTML = dict.map(w => w[0]).join("");
}

function compileLength(){
	p.innerHTML = dict.map(w => w.length).join(" ");
}

function compileMeanings(){
	p.innerHTML = new Array(...d.getElementsByTagName('dd'))
		.filter(x => 0 < x.getElementsByTagName('ol').length)
		.map(x => x.getElementsByTagName('ol')[0].children.length).join(" ");
}

function compileMedials(){
	p.innerHTML = dict.map(w => w.slice(1, -1)).join("");
}

function compileNounClass(){
	p.innerHTML = new Array(...d.getElementsByTagName('dd'))
		.filter(x => x.innerHTML.slice(0, 3) == 'n.,')
		.map(x => x.innerHTML[4]).join(" ");
}