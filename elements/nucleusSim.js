const timestep = 1; // in seconds
const width_abs = 1e-9; // 1 nanometer
const grav = 6.6743e-11; // N m^2 kg
const c = 299792458;
const EM_FORCE_CONST = 1e-36; // wild guess
const fps = 30;
const particle_count = 100;

class Particle {
	constructor(mass, charge, color, radius){
		/** @type {number} Mass in kg */
		this.mass = mass;
		/** @type {number} Charge in electrons */
		this.charge = charge;
		/** @type {string} color, purely aesthetic */
		this.color = color;
		/** @type {number} radius, purely aesthetic */
		this.radius = radius;
		Particle.particles.push(this);
	}
	get elem(){
		const circle = createSvgElement('circle');
		circle.setAttribute('fill', this.color);
		circle.setAttribute('r', this.radius);
		return circle;
	}
	/** @type {Particle[]} */
	static particles = [];
	static proton = new Particle(1.67262192369e-27, 1, 'red', 5);
	static neutron = new Particle(1.67492749804e-27, 0, 'grey', 5);
	static electron = new Particle(9.1093837015e-31, -1, 'blue', 1);
}

class ParticleInstance {
	constructor(particle){
		/** @type {Particle} */
		this.particle = particle;
		this.coords = randomCoords();
		this.v = [0, 0];
		this.future_coords = [,];
		this.future_v = [,];
		ParticleInstance.particles.push(this);
		this.elem; // preload
	}
	get elem(){
		if (!this._elem){
			document.getElementById('canvas').appendChild(this._elem = this.particle.elem);
			this.updateElemCoords();
		}
		return this._elem;
	}
	/** @param {ParticleInstance} other */
	distSquared(other){
		return sum(this.coords.map((x, i) => (x-other.coords[i])**2));
	}
	pre_tick(){
		this.future_v = this.v.map(i => i); // copy
		// (1) gravity
		// F = G m1m2 / r^2
		// a = F/m
		// a = G m(other) / r^2
		ParticleInstance.particles.filter(p => this !== p).forEach(p => {
			const acc = grav * p.particle.mass / this.distSquared(p) * timestep;
			const dx = [p.coords[1] - this.coords[1], p.coords[0] - this.coords[0]];
			const accVector = splitForceXY(acc, Math.atan2(...dx));
			this.future_v = this.future_v.map((x, i) => x + accVector[i]);
		});
		// (2) electromagnetic force
		// https://en.wikipedia.org/wiki/Electromagnetism
		// todo - this formula is a total guess and is certainly wrong!
		if (this.particle.charge)
			ParticleInstance.particles.filter(p => this !== p && p.particle.charge).forEach(p => {
				const acc = EM_FORCE_CONST * p.particle.charge * -this.particle.charge / this.distSquared(p) * timestep;
				const dx = [p.coords[1] - this.coords[1], p.coords[0] - this.coords[0]];
				const accVector = splitForceXY(acc, Math.atan2(...dx));
				this.future_v = this.future_v.map((x, i) => x + accVector[i]);
			});
		// todo make sure v < c
		// now, update future coords
		this.future_coords = this.coords.map((x, i) => x + this.v[i]*timestep);
	}
	tick(){
		this.coords = this.future_coords;
		this.v = this.future_v;
		// update element
		this.updateElemCoords();
	}
	updateElemCoords(){
		const scale = window.outerWidth / width_abs; // px / m
		const [x, y] = this.coords.map(x => x * scale);
		this._elem.setAttribute('transform', `translate(${x}, ${y})`);
	}
	/** @type {ParticleInstance[]} */
	static particles = [];
}

function randomCoords(){
	return range(2).map(_ => random.uniform(0, width_abs));
}

function splitForceXY(force, angle){
	return [force*Math.cos(angle), force*Math.sin(angle)];
}

function init(){
	// randomly generate shit
	range(particle_count).forEach(_ => new ParticleInstance(random.choice(Particle.particles)));
	// sim
	setInterval(() => {
		ParticleInstance.particles.forEach(p => p.pre_tick());
		ParticleInstance.particles.forEach(p => p.tick());
	}, 1000/fps);
}