/* exported sudoku */
/* global random */

/** @param {[]} arr */
function isUniqueArr(arr){
	arr = arr.filter(x => x !== undefined);
	return new Set(arr).size === arr.length;
}

function range2(n){
	return [...Array(n).keys()];
}

class Sudoku {
	/** @param {number[][]} data */
	constructor(data, squareSize=3){
		/** @type {number[][]} */
		this.data = data;
		/** @type {number} */
		this.squareSize = squareSize;
	}
	/** IF there are cells with only one possibility, change them all. otherwise, do the same as addRandom */
	addAllRandom(){
		let forced_move = false;
		const pp = Array(this.size);
		for (let i = 0; i < this.size; i++)
			for (let j = 0; j < this.size; j++)
				if (this.data[i][j] === undefined){
					const p = this.pencil(i, j);
					if (p.length === 1){
						this.data[i][j] = p[0];
						forced_move = true;
					}
					else if (p.length === 0)
						throw Error('this error should never be thrown');
					else
						pp[p.length] = [i, j, p];
				}
		if (!forced_move) // false ~73% of the time based on observation
			for (let i = 2; i < this.size; i++) // since there aren't any squares with one choice, what about 2? 3? etc
				if (pp[i]){
					this.data[pp[i][0]][pp[i][1]] = random.choice(pp[i][2]);
					break;
				}
		return forced_move;
	}
	/** @param {number} c */
	col(c){
		return this.data.map(row => row[c]);
	}
	get copy(){
		return new Sudoku(this.data.map(row => row.map(cell => cell)), this.squareSize);
	}
	deleteRandom(){
		this.data[random.randint(0, this.size-1)][random.randint(0, this.size-1)] = undefined;
	}
	get elem(){
		const table = document.createElement('table');
		this.data.forEach((row, i) => {
			const tr = document.createElement('tr');
			table.appendChild(tr);
			row.forEach((cell, j) => {
				const td = document.createElement('td');
				td.id = `cell_${i}_${j}`;
				if (cell !== undefined)
					td.innerHTML = cell+1; // convert from 0-indexed to 1-indexed
				const darkSquare = (Math.floor(i/this.squareSize)
					+ Math.floor(j/this.squareSize)) % 2;
				if (darkSquare)
					td.classList.add('dark');
				table.appendChild(td);
			});
		});
		return table;
	}
	get hasEmpty(){
		for (let i = 0; i < this.size; i++)
			if (this.data[i].includes(undefined))
				return true;
		return false;
	}
	/** @returns {[number, number, number, number[]]} */
	get minPencilSize(){
		let o = [this.size];
		for (let i = 0; i < this.size; i++)
			for (let j = 0; j < this.size; j++)
				if (this.data[i][j] === undefined){
					const p = this.pencil(i, j);
					if (p.length < o[0])
						o = [p.length, i, j, p];
					if (o[0] === 0)
						return o;
				}
		return o;
	}
	/**
	 * @param {number} row_n
	 * @param {number} col_n
	 */
	pencil(row_n, col_n){
		// row
		const row = this.data[row_n];
		// col
		const col = this.col(col_n);
		// square
		const sq = this.square(
			Math.floor(row_n/this.squareSize),
			Math.floor(col_n/this.squareSize));
		return range2(this.size).filter(n => !row.includes(n)
			&& !col.includes(n)
			&& !sq.includes(n));
	}
	get size(){
		return this.squareSize * this.squareSize;
	}
	/** @returns {boolean|Sudoku} */
	get solved(){
		if (!this.hasEmpty)
			return this;
		let more_information = false;
		const copy = this.copy;
		for (let i = 0; i < this.size; i++)
			for (let j = 0; j < this.size; j++){
				if (this.data[i][j] !== undefined)
					continue;
				const missing = this.pencil(i, j);
				if (missing.length === 0)
					return false;
				if (missing.length === 1){
					copy.data[i][j] = missing[0];
					more_information = true;
				}
			}
		if (!more_information)
			return true; // multiple solutions
		return copy.solved;
	}
	/**
	 * @param {number} r
	 * @param {number} c
	 */
	square(r, c){
		const o = [];
		for (let row_id = this.squareSize*r; row_id < this.squareSize*r+this.squareSize; row_id++)
			// eslint-disable-next-line max-len
			for (let col_id = this.squareSize*c; col_id < this.squareSize*c+this.squareSize; col_id++)
				o.push(this.data[row_id][col_id]);
		return o;
	}
	get string(){
		return this.data.map(row => row.map(x => x === undefined ? ' ' : x).join(' ')).join('\n');
	}
	/** @returns {Sudoku} */
	static randomSolved(squareSize = 3, attempts = 20){
		const size = squareSize * squareSize;
		const board = new Sudoku(Array(size).fill(0).map(() => Array(size)), squareSize);
		// seed the board by filling the three diagonal 3x3 squares...
		const seed = () => {
			for (let diag = 0; diag < squareSize; diag++){
				const order = random.shuffle(range2(size));
				for (let i = 0; i < squareSize; i++)
					for (let j = 0; j < squareSize; j++)
						board.data[squareSize*diag+i][squareSize*diag+j] = order[squareSize*i+j];
			}
		};
		seed();
		while (board.minPencilSize[0] === 0)
			seed();
		// add to board until solved
		const hist = [board];
		const forced_move = [undefined];
		const undo = () => {
			hist.pop();
			forced_move.pop();
			// console.warn('undo');
		};
		while (hist[hist.length-1].hasEmpty){
			// console.debug(hist[hist.length-1].string);
			// try adding a random # to board
			const next = hist[hist.length-1].copy;
			try {
				forced_move.push(next.addAllRandom());
				hist.push(next);
			}
			catch (_){ // no solution
				// console.debug(_);
				if (!next.hasEmpty)
					return next;
				if (attempts <= 0){
					// console.warn('reseeding...');
					return this.randomSolved(squareSize);
				}
				// console.info(attempts, hist.length, forced_move);
				while (forced_move[forced_move.length-1]) // try to undo forced moves until last optional move
					undo();
				undo();
				attempts--;
			}
		}
		return hist[hist.length-1];
	}
	/** @returns {[Sudoku, Sudoku]} */
	static randomUnsolved(squareSize = 3, max_tries = 100){
		// https://stackoverflow.com/a/7280517
		const solved = this.randomSolved(squareSize);
		let o = solved;
		// console.debug(solved.string);
		while (0 < max_tries){
			const copy = o.copy;
			copy.deleteRandom();
			if (copy.solved !== true)
				o = copy;
			max_tries--;
		}
		// console.debug(1-sum(o.data.map(row => row.filter(x => x === undefined).length))/81);
		return [solved, o];
	}
}

const sudoku = {
	benchmark(trials = 100){
		[2, 3, 4].forEach(n => {
			this.size = n;
			const t_start = performance.now();
			for (let i = 0; i < trials; i++)
				this.gen(false);
			const t = (performance.now() - t_start)/trials;
			console.debug(`${n} took ${t} ms avg.`);
		});
	},
	difficulty: 0,
	difficultyCurve: [0.6, 1, 2], // abt. 50%, 40%, 30% full respectively
	gen(debug = true){
		const t_start = performance.now();
		const tries = Math.round(this.difficultyCurve[this.difficulty] * Math.pow(this.size, 4));
		const [solution, puzzle] = Sudoku.randomUnsolved(this.size, tries);
		// elems
		const main = document.getElementById('main');
		main.innerHTML = '';
		main.appendChild(puzzle.elem);
		main.appendChild(this.spoiler(solution.elem));
		// for debugging purposes
		if (debug){
			this.puzzle = puzzle;
			this.solution = solution;
			console.info(`${performance.now() - t_start} ms`);
		}
	},
	size: 3,
	/** @param {HTMLElement} elem */
	spoiler(elem){
		const details = document.createElement('details');
		const summary = document.createElement('summary');
		summary.innerHTML = 'SOLUTION';
		details.appendChild(summary);
		details.appendChild(elem);
		return details;
	},
};