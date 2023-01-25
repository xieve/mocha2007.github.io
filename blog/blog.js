/* exported blog */
/* global blogData */

/** @param {Date} d */
function formatDate(d){
	// 2011-11-18T14:54:39.929-0400
	// eslint-disable-next-line max-len
	return `${d.getUTCFullYear()}-${d.getUTCMonth()+1}-${d.getUTCDate()}T${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}Z`;
}

function link(o){
	const e = document.createElement('span');
	e.classList.add('tag');
	e.onclick = () => {
		const main = document.getElementById('main');
		main.innerHTML = '';
		main.appendChild(o.elem);
	};
	e.innerHTML = o.title;
	return e;
}

class Blogpost {
	/**
	 * @param {string} title
	 * @param {Date} date
	 * @param {Tag[]} tags
	 * @param {Section[]} sections
	 */
	constructor(title, date, tags, sections){
		this.title = title;
		this.date = date;
		this.tags = tags;
		this.sections = sections;
		Blogpost.blogposts.push(this);
	}
	get elem(){
		const div = document.createElement('div');
		const h = document.createElement('h2');
		h.innerHTML = this.title;
		div.appendChild(h);
		const date = document.createElement('time');
		date.dateTime = formatDate(this.date);
		date.innerHTML = this.date.toString();
		div.appendChild(date);
		div.appendChild(document.createElement('br'));
		div.appendChild(Tag.tagList(this.tags));
		div.appendChild(document.createElement('hr'));
		this.sections.forEach(s => div.appendChild(s.elem));
		return div;
	}
	get link(){
		return link(this);
	}
	static get latest(){
		const max = Math.max(...Blogpost.blogposts.map(b => b.date));
		return Blogpost.blogposts.find(b => +b.date === max);
	}
	/** @param {string} s */
	static parse(s){
		const o = {
			title: '',
			date: new Date(0),
			tags: [],
			sections: [],
			currentP: {
				tags: [],
				innerHTML: '',
			},
		};
		let body = false;
		s.split('\n').forEach(line => {
			if (!line)
				return;
			const words = line.split(/\s/g);
			// remove leading whitespace
			while (words[0] === '')
				words.shift();
			// console.debug('words', words);
			// keyword?
			if (words.length && words[0][0] === '@'){
				const kw = words[0].slice(1);
				const rest = words.slice(1).join(' ');
				// console.debug(kw, rest);
				// eslint-disable-next-line nonblock-statement-body-position
				if (!body) switch (kw){
					case 'title':
						o.title = rest;
						break;
					case 'date':
						o.date = new Date(+rest);
						break;
					case 'tags':
						o.tags.push(...words.slice(1).map(Tag.getTag));
						break;
					case 'p':
						body = true;
						break;
				}
				// eslint-disable-next-line nonblock-statement-body-position
				else switch (kw){
					case 'p':
						o.sections.push(new Section(o.currentP.tags, o.currentP.innerHTML));
						o.currentP = {tags: [], innerHTML: ''};
						break;
					case 'tags':
						o.currentP.tags.push(...words.slice(1).map(Tag.getTag));
						break;
				}
			}
			else {
				o.currentP.innerHTML += `\n${line}`.replace(/\s+/, ' ');
				body = true;
			}
		});
		// make sure last section is added
		if (o.currentP.innerHTML)
			o.sections.push(new Section(o.currentP.tags, o.currentP.innerHTML));
		// done
		return new Blogpost(o.title, o.date, o.tags, o.sections);
	}
}
/** @type {Blogpost[]} */
Blogpost.blogposts = [];

class Tag {
	/** @param {string} title */
	constructor(title){
		this.title = title;
		Tag.tags.push(this);
	}
	get elem(){
		const div = document.createElement('div');
		const h = document.createElement('h2');
		h.innerHTML = this.title;
		div.appendChild(h);
		// get posts
		const h_ = document.createElement('h3');
		h_.innerHTML = 'Posts';
		div.appendChild(h_);
		const ul = document.createElement('ul');
		div.appendChild(ul);
		Blogpost.blogposts.filter(b => b.tags.includes(this)).forEach(b => {
			const li = document.createElement('li');
			li.appendChild(b.link);
			ul.appendChild(li);
		});
		// get sections
		const h_2 = document.createElement('h3');
		h_2.innerHTML = 'Sections';
		div.appendChild(h_2);
		const ul2 = document.createElement('ul');
		div.appendChild(ul2);
		Section.sections.filter(s => s.tags.includes(this)).forEach(s => {
			const li = document.createElement('li');
			li.appendChild(s.post.link);
			ul2.appendChild(li);
		});
		return div;
	}
	get link(){
		return link(this);
	}
	/** @param {Tag[]} tags */
	static tagList(tags){
		const span = document.createElement('span');
		span.classList.add('tagList');
		span.innerHTML = 'Tags: ';
		tags.forEach(t => span.appendChild(t.link));
		return span;
	}
	/** @param {string} s */
	static getTag(s){
		return Tag.tags.find(t => t.title === s) || new Tag(s);
	}
}
/** @type {Tag[]} */
Tag.tags = [];

class Section {
	/**
	 * @param {Tag[]} tags
	 * @param {string} innerHTML
	 */
	constructor(tags, innerHTML){
		this.tags = tags;
		this.innerHTML = innerHTML;
		Section.sections.push(this);
	}
	get elem(){
		const div = document.createElement('div');
		div.appendChild(Tag.tagList(this.tags));
		const p = document.createElement('p');
		p.innerHTML = this.innerHTML;
		div.appendChild(p);
		return div;
	}
	get post(){
		return Blogpost.blogposts.find(b => b.sections.includes(this));
	}
}
/** @type {Section[]} */
Section.sections = [];

const blog = {
	init(){
		// todo
		blogData.forEach(Blogpost.parse);
		document.getElementById('main').appendChild(Blogpost.latest.elem);
	},
	get timestamp(){
		return +new Date();
	},
};