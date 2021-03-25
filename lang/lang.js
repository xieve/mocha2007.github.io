/* exported main */
/* global authorData, categoryData, entryData, intersect, languageData, mean, meaningData,
	sourceData, union */
'use strict';

/** @type {HTMLBodyElement} */
const body = document.getElementById('body');

class Clickable {
	/** @param {string} name */
	constructor(name){
		this.name = name;
	}
	get span(){
		const elem = document.createElement('span');
		elem.classList.add('clickable');
		elem.innerHTML = this.name;
		elem.onclick = () => this.go();
		elem.title = this.title;
		return elem;
	}
	go(){
		body.innerHTML = '';
		body.appendChild(this.div);
	}
}

class Author extends Clickable {
	constructor(name){
		super(name);
		Author.list.push(this);
	}
	get div(){
		/** @type {HTMLDivElement} */
		const elem = document.createElement('div');
		elem.classList.add('author');
		elem.id = `${this.name}/div`;
		const header = document.createElement('h1');
		header.innerHTML = this.name;
		elem.appendChild(header);
		// sources by author
		const h2 = document.createElement('h2');
		h2.innerHTML = 'Sources';
		elem.appendChild(h2);
		const ul = document.createElement('ul');
		Source.list.filter(s => s.author === this).forEach(s => {
			const li = document.createElement('li');
			li.appendChild(s.span);
			ul.appendChild(li);
		});
		elem.appendChild(ul);
		return elem;
	}
	static fromName(name){
		return Author.list.find(x => x.name === name);
	}
	static parseData(o){
		new Author(o.name);
	}
}
/** @type {Author[]} */
Author.list = [];

class Source extends Clickable {
	constructor(name, author='', url='', date=''){
		super(name);
		this.author = Author.fromName(author);
		this.url = url;
		this.date = date;
		Source.list.push(this);
	}
	get div(){
		/** @type {HTMLDivElement} */
		const elem = document.createElement('div');
		elem.classList.add('source');
		elem.id = `${this.name}/div`;
		const header = document.createElement('h1');
		header.innerHTML = this.name;
		elem.appendChild(header);
		// author
		elem.appendChild(this.author.span);
		// date
		const date = document.createElement('span');
		date.innerHTML = this.date;
		elem.appendChild(date);
		// url
		const a = document.createElement('a');
		a.innerHTML = 'external link';
		a.href = this.url;
		elem.appendChild(a);
		// entries
		const h2 = document.createElement('h2');
		h2.innerHTML = 'Entries';
		elem.appendChild(h2);
		const ul = document.createElement('ul');
		Entry.list.filter(e => e.source === this).forEach(m => {
			const li = document.createElement('li');
			li.appendChild(m.span);
			ul.appendChild(li);
		});
		elem.appendChild(ul);
		return elem;
	}
	get title(){
		return `${this.author}, ${this.date}`;
	}
	static fromName(name){
		return Source.list.find(x => x.name === name);
	}
	static parseData(o){
		new Source(o.name, o.author, o.url, o.date);
	}
}
/** @type {Source[]} */
Source.list = [];

class Language extends Clickable {
	constructor(name, parent, location, period){
		super(name);
		/** @type {Language} - parsed after loading */
		this.parent = parent;
		this.location = location;
		this.period = period;
		Language.list.push(this);
	}
	get childList(){
		const elem = document.createElement('ul');
		Language.list.filter(l => l.parent === this).forEach(l => {
			const li = document.createElement('li');
			li.appendChild(l.span);
			li.appendChild(l.childList);
			elem.appendChild(li);
		});
		return elem;
	}
	get div(){
		/** @type {HTMLDivElement} */
		const elem = document.createElement('div');
		elem.classList.add('language');
		elem.id = `${this.name}/div`;
		const header = document.createElement('h1');
		header.innerHTML = this.name;
		elem.appendChild(header);
		// todo parent, location, period
		// entries
		const h2 = document.createElement('h2');
		h2.innerHTML = 'Entries';
		elem.appendChild(h2);
		const ul = document.createElement('ul');
		this.vocab.forEach(m => {
			const li = document.createElement('li');
			li.appendChild(m.span);
			ul.appendChild(li);
		});
		elem.appendChild(ul);
		// children
		const h22 = document.createElement('h2');
		h22.innerHTML = 'Children';
		elem.appendChild(h22);
		elem.appendChild(this.childList);
		// most likely relatives
		const h23 = document.createElement('h2');
		h23.innerHTML = 'Most Likely Relatives';
		elem.appendChild(h23);
		h23.onclick = () => elem.appendChild(this.likelyRelativeList);
		return elem;
	}
	get likelyRelativeList(){
		const n = 10;
		const ol = document.createElement('ol');
		Language.list.filter(l => l !== this)
			.sort((a, b) => b.diff(this) - a.diff(this)).slice(-n).reverse().forEach((e, i) => {
				const li = document.createElement('li');
				li.appendChild(e.span);
				li.style.opacity = 1 - i/(2*n);
				const score = document.createElement('span');
				score.innerHTML = `score: ${-e.diff(this)}`;
				li.appendChild(score);
				ol.appendChild(li);
			});
		return ol;
	}
	get vocab(){
		return Entry.list.filter(e => e.language === this);
	}
	get title(){
		return `Parent: ${this.parent}; ${this.location}, ${this.date}`;
	}
	/** averaged cognate score
	 * @param {Language} other
	*/
	diff(other){
		const d = mean(this.vocab
			.map(e => [e, e.translateInto(other)]) // translate
			.filter(e => e[1]) // make sure translation exists
			.map(e => e[0].diff(e[1])) // find diff
		);
		return isFinite(d) ? d : Infinity;
	}
	/** @param {string} s */
	parseParent(){
		if (!this.parent)
			return;
		this.parent = Language.fromName(this.parent);
	}
	static fromName(name){
		return Language.list.find(x => x.name === name);
	}
	static parseData(o){
		new Language(o.name, o.parent, o.location, o.period);
	}
}
/** @type {Language[]} */
Language.list = [];

class Category extends Clickable {
	constructor(name, categories=''){
		super(name);
		/** @type {Category[]} - parsed afterwards */
		this.categories = categories;
		Category.list.push(this);
	}
	get childList(){
		const elem = document.createElement('ul');
		Category.list.filter(c => c.categories.includes(this)).forEach(c => {
			const li = document.createElement('li');
			li.appendChild(c.span);
			li.appendChild(c.childList);
			elem.appendChild(li);
		});
		Meaning.list.filter(m => m.categories.includes(this)).forEach(m => {
			const li = document.createElement('li');
			li.appendChild(m.span);
			elem.appendChild(li);
		});
		return elem;
	}
	get div(){
		/** @type {HTMLDivElement} */
		const elem = document.createElement('div');
		elem.classList.add('category');
		elem.id = `${this.name}/div`;
		const header = document.createElement('h1');
		header.innerHTML = this.name;
		elem.appendChild(header);
		// meanings
		const h2 = document.createElement('h2');
		h2.innerHTML = 'Entries';
		elem.appendChild(h2);
		elem.appendChild(this.childList);
		// category list
		const h22 = document.createElement('h2');
		h22.innerHTML = 'Categories';
		elem.appendChild(h22);
		const ul2 = document.createElement('ul');
		this.categories.forEach(c => {
			const li = document.createElement('li');
			li.appendChild(c.span);
			ul2.appendChild(li);
		});
		elem.appendChild(ul2);
		return elem;
	}
	get title(){
		return this.categories.map(c => c.name).join(', ');
	}
	parseCategories(){
		this.categories = this.categories.split(';').filter(x => x).map(c => Category.fromName(c));
	}
	static fromName(name){
		return Category.list.find(x => x.name === name);
	}
	static parseData(o){
		new Category(o.name, o.categories);
	}
}
/** @type {Category[]} */
Category.list = [];

class Meaning extends Clickable {
	constructor(name, categories){
		super(name);
		this.categories = categories
			? categories.split(';').filter(x => x).map(c => Category.fromName(c))
			: [];
		Meaning.list.push(this);
	}
	get div(){
		/** @type {HTMLDivElement} */
		const elem = document.createElement('div');
		elem.classList.add('meaning');
		elem.id = `meaning/${this.name}/div`;
		const header = document.createElement('h1');
		header.innerHTML = this.name;
		elem.appendChild(header);
		// word list
		const ul = document.createElement('ul');
		/** @type {Meaning[]} entries including this meaning */
		const entries = Entry.list.filter(e => e.meanings.includes(this));
		entries.forEach(m => {
			// language: word
			const li = document.createElement('li');
			li.appendChild(m.language.span);
			li.appendChild(m.span);
			ul.appendChild(li);
		});
		elem.appendChild(ul);
		// colex list
		const h2 = document.createElement('h2');
		h2.innerHTML = 'Colexifications';
		elem.appendChild(h2);
		/** @type {Meaning[]} */
		let colex = [];
		entries.forEach(e => colex = union(colex, e.meanings.filter(m => m !== this)));
		const ul2 = document.createElement('ul');
		colex.forEach(m => {
			const li = document.createElement('li');
			if (m)
				li.appendChild(m.span);
			else
				li.innerHTML = m;
			ul2.appendChild(li);
		});
		elem.appendChild(ul2);
		// category list
		const h22 = document.createElement('h2');
		h22.innerHTML = 'Categories';
		elem.appendChild(h22);
		const ul3 = document.createElement('ul');
		this.categories.forEach(c => {
			const li = document.createElement('li');
			li.appendChild(c.span);
			ul3.appendChild(li);
		});
		elem.appendChild(ul3);
		return elem;
	}
	get title(){
		return this.categories.map(c => c.name).join(', ');
	}
	static fromName(name){
		return Meaning.list.find(x => x.name === name);
	}
	static parseData(o){
		new Meaning(o.name, o.categories);
	}
}
/** @type {Meaning[]} */
Meaning.list = [];

class Entry extends Clickable {
	constructor(language, name, meanings, etymology, source, notes){
		super(name.normalize());
		this.language = Language.fromName(language);
		this.meanings = Entry.parseMeanings(meanings);
		/** @type {Entry[]} - this will be parsed from a string AFTER all entries are loaded */
		this.etymology = etymology;
		this.source = Source.fromName(source);
		this.notes = notes;
		Entry.list.push(this);
	}
	get childList(){
		const elem = document.createElement('ul');
		Entry.list.filter(e => e.etymology && e.etymology.includes(this)).forEach(e => {
			const li = document.createElement('li');
			li.appendChild(e.language.span);
			li.appendChild(e.span);
			li.appendChild(e.childList);
			elem.appendChild(li);
		});
		return elem;
	}
	get div(){
		/** @type {HTMLDivElement} */
		const elem = document.createElement('div');
		elem.classList.add('entry');
		elem.id = `${this.language.name}/${this.name}/div`;
		const header = document.createElement('h1');
		header.innerHTML = this.name;
		elem.appendChild(header);
		// lang button
		elem.appendChild(this.language.span);
		// source button
		elem.appendChild(this.source.span);
		// etymology button
		elem.appendChild(this.etymologyDiv);
		// meanings
		const ul = document.createElement('ul');
		this.meanings.forEach(m => {
			const li = document.createElement('li');
			if (m)
				li.appendChild(m.span);
			else
				li.innerHTML = m;
			ul.appendChild(li);
		});
		elem.appendChild(ul);
		// synonyms
		const h22 = document.createElement('h2');
		h22.innerHTML = 'Synonyms';
		elem.appendChild(h22);
		this.synonyms.forEach(e => elem.appendChild(e.span));
		// translations
		const h23 = document.createElement('h2');
		h23.innerHTML = 'Translations';
		elem.appendChild(h23);
		this.translations.forEach(e => elem.appendChild(e.span));
		// children
		const h2 = document.createElement('h2');
		h2.innerHTML = 'Children';
		elem.appendChild(h2);
		elem.appendChild(this.childList);
		// most likely cognates
		const h24 = document.createElement('h2');
		h24.innerHTML = 'Most Likely Cognates';
		elem.appendChild(h24);
		h24.onclick = () => elem.appendChild(this.likelyCognateList);
		// note button
		if (this.notes){
			const notes = document.createElement('p');
			notes.innerHTML = 'Notes: ' + this.notes;
			elem.appendChild(notes);
		}
		return elem;
	}
	get etymologyDiv(){
		const elem = document.createElement('div');
		elem.innerHTML = 'Etymology: ';
		if (this.etymology)
			this.etymology.forEach(e => e ? elem.appendChild(e.span) : elem.innerHTML+=undefined);
		else
			elem.innerHTML += this.etymology;
		return elem;
	}
	get likelyCognateList(){
		const n = 10;
		const ol = document.createElement('ol');
		this.translations
			.sort((a, b) => b.diff(this) - a.diff(this)).slice(-n).reverse().forEach((e, i) => {
				const li = document.createElement('li');
				li.appendChild(e.span);
				li.style.opacity = 1 - i/(2*n);
				const score = document.createElement('span');
				score.innerHTML = `score: ${-e.diff(this)}`;
				li.appendChild(score);
				ol.appendChild(li);
			});
		return ol;
	}
	get synonyms(){
		return Entry.list.filter(e => e !== this && e.language === this.language
			&& intersect(e.meanings, this.meanings).length);
	}
	get title(){
		return this.language.name + ': ' + this.meanings.map(m => m.name).join(', ');
	}
	get translations(){
		return Entry.list.filter(e => e.language !== this.language
			&& intersect(e.meanings, this.meanings).length);
	}
	/** get an oversimplified structure of a word */
	get vwllss(){
		return this.name.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '') // remove diacritics
			.replace(/[[\]()/-]/g, '') // remove [] () / -
			.replace(/[aeiouAEIOU]+/g, 'V').normalize(); // make all vowels V
	}
	/** cognate score
	 * @param {Entry} other
	*/
	diff(other){
		return 2* lev(this.name, other.name)
			+ lev(this.vwllss, other.vwllss)
			- 2*intersect(this.meanings, other.meanings).length;
	}
	parseEtymology(){
		if (!this.etymology)
			return;
		this.etymology = this.etymology.split(';').map(id => Entry.fromId(id));
	}
	/** @param {Language} target - translate ANY MEANING into target language */
	translateInto(target){
		return Entry.list.find(e => e.language === target
			&& intersect(e.meanings, this.meanings).length);
	}
	/** @param {string} id */
	static fromId(id){
		// eg. pger:ainaz
		const [lang, word] = id.normalize().split(':');
		return Entry.list.find(x => x.name === word && x.language.name === lang);
	}
	static parseData(o){
		new Entry(o.language, o.word, o.meanings, o.etymology, o.source, o.notes);
	}
	/** @param {string} s */
	static parseMeanings(s){
		// eg. meanings1;meaning2;...
		return s.split(';').map(name => Meaning.fromName(name));
	}
}
/** @type {Entry[]} */
Entry.list = [];

/** Levenshtein distance
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
function lev(a, b){
	if (!a.length)
		return b.length;
	if (!b.length)
		return a.length;
	return 1 + Math.min(
		lev(a.slice(1), b),
		lev(a, b.slice(1)),
		lev(a.slice(1), b.slice(1))
	);
}

function main(){
	// load shit
	authorData.forEach(o => Author.parseData(o));
	sourceData.forEach(o => Source.parseData(o));
	languageData.forEach(o => Language.parseData(o));
	categoryData.forEach(o => Category.parseData(o));
	meaningData.forEach(o => Meaning.parseData(o));
	entryData.forEach(o => Entry.parseData(o));
	// construct etymology mappings after all entries loaded
	Category.list.forEach(c => c.parseCategories());
	Entry.list.forEach(e => e.parseEtymology());
	Language.list.forEach(l => l.parseParent());
	// sort entries alphabetically...
	Entry.list.sort((a, b) => a.name < b.name ? -1 : 1);
	// display óynos's entry just to start off...
	Entry.fromId('pie:óynos').go();
}