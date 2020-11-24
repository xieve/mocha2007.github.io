/* jshint esversion: 6, strict: true, forin: false, loopfunc: true, strict: global */
/* exported main */
'use strict';
const board = {};
const colString = ' abcdefgh';
const colorData = [
	{'name': 'black'},
	{'name': 'white'},
];
const pieceData = {
	'bishop': {
		'abbr': 'B',
		'moves': [
			{
				'dir': 'diagonal',
				'dist': Infinity,
			},
		],
	},
	'king': {
		'abbr': 'K',
		'castling': 'king',
		'isEssential': true,
		'moves': [
			{
				'dir': 'any',
				'dist': 1,
			},
		],
	},
	'knight': {
		'abbr': 'N',
		'leaper': true,
		'moves': [
			{
				'dir': 'L',
				'dist': 1,
			},
		],
	},
	'pawn': {
		'abbr': 'P',
		'pawnMoves': true,
		'moves': [
			{
				'dir': 'P',
				'dist': 1,
			},
		],
	},
	'queen': {
		'abbr': 'Q',
		'moves': [
			{
				'dir': 'any',
				'dist': Infinity,
			},
		],
	},
	'rook': {
		'abbr': 'R',
		'moves': [
			{
				'dir': 'orthogonal',
				'dist': Infinity,
			},
		],
	},
};

/** @type {Piece[]} */
const pieceList = [];

class Piece {
	/**
	 * @param {string} type
	 * @param {number} color 0 = black; 1 = white
	 * @param {[number, number]} coords x, y
	 */
	constructor(type, color, coords){
		this.type = type;
		this.color = color;
		this.coords = coords;
		this.id = 'piece_' + coords[0] + '_' + coords[1];
		placePiece(this, coords);
		pieceList.push(this);
	}
	get abbr(){
		return pieceData[this.type].abbr + colorData[this.color].name[0];
	}
	/** @type {HTMLSpanElement} */
	get element(){
		return document.getElementById(this.id);
	}
	get emoji(){
		return {
			'Pw': '♙',
			'Nw': '♘',
			'Bw': '♗',
			'Rw': '♖',
			'Qw': '♕',
			'Kw': '♔',
			'Pb': '♟',
			'Nb': '♞',
			'Bb': '♝',
			'Rb': '♜',
			'Qb': '♛',
			'Kb': '♚',
		}[this.abbr];
	}
	get span(){
		const elem = document.createElement('span');
		elem.innerHTML = this.emoji;
		elem.title = colorData[this.color].name + ' ' + this.type;
		elem.id = this.id;
		elem.classList.add('piece');
		elem.onclick = () => this.showMoves();
		return elem;
	}
	static hideMoves(){
		// todo
		// pieceList.forEach(p => p.g)
	}
}

// functions

function main(){
	console.info('Mocha\'s weird-ass chess test');
	makeBoard();
	resetPieces();
}

function makeBoard(){
	for (let i=0; i<9; i+=1){
		for (let j=0; j<colString.length; j+=1){
			makeSquare(i, j);
		}
	}
}

function makeSquare(row, col){
	// console.log(row, col);
	const elem = document.createElement('div');
	document.getElementById('board').appendChild(elem);
	elem.style.left = 100*col/9+'%';
	elem.style.top = 100*row/9+'%';
	if (row === 0){ // letters
		elem.classList = 'dataSquare';
		return elem.innerHTML = colString[col];
	}
	if (col === 0){ // numbers
		elem.classList = 'dataSquare';
		return elem.innerHTML = row ? row : '';
	}
	const color = (row+col)%2;
	elem.classList = colorData[color].name+'Square';
	elem.id = colString[col] + row;
	// console.log(color);
}

function placePiece(piece, tileID){
	document.getElementById(tileID).appendChild(piece.span);
	board[tileID] = piece;
}

function resetPieces(){
	// white
	new Piece('rook', 1, 'a1');
	new Piece('knight', 1, 'b1');
	new Piece('bishop', 1, 'c1');
	new Piece('queen', 1, 'd1');
	new Piece('king', 1, 'e1');
	new Piece('bishop', 1, 'f1');
	new Piece('knight', 1, 'g1');
	new Piece('rook', 1, 'h1');
	// black
	new Piece('rook', 0, 'a8');
	new Piece('knight', 0, 'b8');
	new Piece('bishop', 0, 'c8');
	new Piece('queen', 0, 'd8');
	new Piece('king', 0, 'e8');
	new Piece('bishop', 0, 'f8');
	new Piece('knight', 0, 'g8');
	new Piece('rook', 0, 'h8');
	// pawns
	for (let i=1; i<colString.length; i+=1){
		const letter = colString[i];
		new Piece('pawn', 1, letter+2);
		new Piece('pawn', 0, letter+7);
	}
}