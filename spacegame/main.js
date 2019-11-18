// begin basic block
function isFunction(functionToCheck) { // https://stackoverflow.com/a/7356528/2579798
	return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
// end basic block
// begin math block

var pi = Math.PI;

function mod(n,m){
	"use strict";
	return ((n%m)+m)%m;
}

function randint(min, max){ // random integer in range
	"use strict";
	return Math.floor(uniform(min, max+1));
}

function remap(value, range1, range2){
	"use strict";
	var range1range = range1[1] - range1[0];
	var range2range = range2[1] - range2[0];
	var fraction = (value - range1[0]) / range1range;
	return fraction * range2range + range2[0];
}

function sd(x){ // find the standard deviation of an array
	"use strict";
	return Math.sqrt(variance(x));
}

function sum(x){ // find the sum of an array
	"use strict";
	var s = 0;
	x.forEach(function(y){
		s += y;
	});
	return s;
}

function uniform(min, max){ // random real in range
	"use strict";
	return Math.random() * (max-min) + min;
}

function variance(x){ // find the variance of an array
	"use strict";
	var meanOfArray = mean(x);
	var v = x.map(function(y){
		var z = y - meanOfArray;
		return z * z;
	});
	return sum(v) / (x.length - 1);
}

function zeros(n){
	zeroArray = [];
	for (i=0;i<n;i++){
		zeroArray.push(0);
	}
	return zeroArray;
}

// end math block
// begin astro block

var au = 149597870700;
var gravConstant = 6.674e-11;
var dataExceptions = [
	"classification",
	"density",
	"period",
];

class Body{
	constructor(mass, radius, albedo, orbit, name){
		this.mass = mass;
		this.radius = radius;
		this.albedo = albedo;
		this.orbit = orbit;
		this.name = name;
	}
	classification = function(){
		if (2e26 < this.mass){
			return "gasGiant";
		}
		if (6e25 < this.mass){
			return "iceGiant";
		}
		if (2e24 < this.mass){
			return "terra";
		}
		if (5e23 < this.mass){
			return "desert";
		}
		return "rock";
	}
	density = function(){
		return this.mass / this.volume();
	}
	getElement = function(){
		return document.getElementById(this.name);
	}
	info = function(){
		var table = document.createElement("table");
		var row, cell;
		for (var property in this){
			var value = this[property]
			if (isFunction(value)){
				if (dataExceptions.indexOf(property) === -1){
					continue;
				}
				value = this[property]();
			}
			row = document.createElement("tr");
			cell = document.createElement("th");
			cell.innerHTML = property;
			row.appendChild(cell);
			cell = document.createElement("td");
			if (property === "orbit"){
				cell.appendChild(this.orbit.info());
			}
			else{
				cell.innerHTML = value;
			}
			row.appendChild(cell);
			table.appendChild(row);
		}
		return table;
	}
	mu = function(){
		return this.mass * gravConstant;
	}
	volume = function(){
		return 4/3 * pi * Math.pow(this.radius, 3);
	}
}

class Orbit{
	constructor(parent, sma, ecc, aop, man){
		this.parent = parent;
		this.sma = sma;
		this.ecc = ecc;
		this.aop = aop;
		this.man = man;
	}
	// functions
	cartesian = function(t){
		"use strict";
		var E = this.eccentricAnomaly(t);
		var nu = this.trueAnomaly(t);
		var r_c = this.sma*(1-this.ecc*Math.cos(E));
		return [r_c*Math.cos(nu), r_c*Math.sin(nu)];
	}
	eccentricAnomaly = function(t){
		"use strict";
		var tol = 1e-10;
		var M = mod(this.man + 2*pi*t/this.period(), 2*pi);
		var E = M;
		var E_;
		while (true){
			E_ = M + this.ecc*Math.sin(E);
			if (Math.abs(E-E_) > tol){
				return E;
			}
			E = E_;
			return E; // fixme
		}
	}
	info = function(){
		var table = document.createElement("table");
		var row, cell;
		for (var property in this){
			var value = this[property]
			if (isFunction(value)){
				if (dataExceptions.indexOf(property) === -1){
					continue;
				}
				value = this[property]();
			}
			row = document.createElement("tr");
			cell = document.createElement("th");
			cell.innerHTML = property;
			row.appendChild(cell);
			cell = document.createElement("td");
			if (property === "parent"){
				cell.innerHTML = this.parent.name;
			}
			else{
				cell.innerHTML = value;
			}
			row.appendChild(cell);
			table.appendChild(row);
		}
		return table;
	}
	period = function(){
		"use strict";
		return 2*pi*Math.pow((Math.pow(this.sma, 3)/this.parent.mu()), .5);
	}
	trueAnomaly = function(t){
		var E = this.eccentricAnomaly(t);
		var e = this.ecc;
		return 2 * Math.atan2((1+e)**.5 * Math.sin(E/2), (1-e)**.5 * Math.cos(E/2));
	}
}

class Star extends Body{
	constructor(mass, radius, name, luminosity, temperature) {
		super(mass, radius, undefined, undefined, name);
		this.luminosity = luminosity;
		this.temperature = temperature;
	}
}

class System{
	constructor(primary, secondaries){
		this.primary = primary;
		this.secondaries = secondaries;
	}
}

function densityFromMass(mass){
	if (2e26 < mass){
		return uniform(600, 1400);
	}
	if (6e25 < mass){
		return uniform(1200, 1700);
	}
	return uniform(3900, 5600);
}

// end astro block
// begin interface block

function drawPlanet(planet){
	var planetIcon = document.getElementById(planet.name);
	if (planetIcon === null){
		var planetIcon = document.createElement("div");
		document.getElementById("map").appendChild(planetIcon);
		planetIcon.id = planet.name;
		planetIcon.innerHTML = "&middot;";
		planetIcon.style.position = "absolute";
	}
	planetIcon.classList.value = "planet " + planet.classification();
	var planetCoords = getPlanetCoods(planet);
	planetIcon.style.left = planetCoords[0]+"px";
	planetIcon.style.top = planetCoords[1]+"px";
	var index = Game.system.secondaries.indexOf(planet);
	planetIcon.onclick = function(){document.getElementById("input_id").value = index;};
	// check if selection...
	if (Number(document.getElementById("input_id").value) === index){
		planetIcon.classList.value += " selected";
	}
}

function drawStar(){
	var planetIcon = document.getElementById(sun.name);
	if (planetIcon === null){
		var planetIcon = document.createElement("div");
		document.getElementById("map").appendChild(planetIcon);
		planetIcon.classList.value = "star";
		planetIcon.id = sun.name;
		planetIcon.innerHTML = "*";
		planetIcon.style.position = "absolute";
	}
	var planetCoords = [Game.width/2, Game.height/2];
	planetIcon.style.left = planetCoords[0]+"px";
	planetIcon.style.top = planetCoords[1]+"px";
}

function getPlanetCoods(planet){
	var absCoords = planet.orbit.cartesian(Game.time);
	var x = remap(absCoords[0], [-Game.systemWidth, Game.systemWidth], [0, Game.width])
	var y = remap(absCoords[1], [-Game.systemHeight, Game.systemHeight], [0, Game.height])
	return [x, y];
}

// end interface block
// begin main program
var Game = {};
var sun = new Star(1.9885e30, 6.957e8, "Sun", 3.828e26, 5778);

function generateBody(){
	var mass = 2*Math.pow(10, uniform(17, 27));
	var density = densityFromMass(mass);
	var radius = Math.pow(mass/(density*4/3*pi), 1/3);
	var albedo = uniform(0, 1);
	return new Body(mass, radius, albedo);
}

function generateOrbit(){
	var parent = sun;
	var sma = uniform(.3, 3)*au;
	var ecc = uniform(0, .25);
	var aop = uniform(0, 2*pi);
	var man = uniform(0, 2*pi);
	return new Orbit(parent, sma, ecc, aop, man);
}

function generatePlanet(){
	var planet = generateBody();
	planet.orbit = generateOrbit();
	planet.name = "Sol-" + randint(100000, 999999);
	return planet;
}

function generateInner(){
	var numberOfPlanets = randint(3, 5);
	return (zeros(numberOfPlanets)).map(generatePlanet);
}

function main(){
	"use strict";
	console.log("Mocha's weird-ass space game test");
	Game.system = new System(sun, generateInner());
	console.log(Game.system);
	// set variables up
	Game.speed = 50000;
	Game.time = 0;
	Game.systemHeight = 3*au;
	// set up ticks
	setInterval(gameTick, 50);
	// store cookie
	// document.cookie = ...;
}

function gameTick(){
	Game.time = Game.time + Game.speed;
	Game.width = window.innerWidth;
	Game.height = window.innerHeight;
	Game.systemWidth = Game.width/Game.height * Game.systemHeight;
	// finally, update interface
	redraw();
}

function redraw(){
	// update map
	Game.system.secondaries.map(drawPlanet);
	drawStar();
	// update infobox
	var selectionId = Number(document.getElementById("input_id").value);
	document.getElementById("leftinfo").innerHTML = "";
	document.getElementById("leftinfo").appendChild(Game.system.secondaries[selectionId].info());
	// update time
	document.getElementById("time").innerHTML = "t = " + Game.time;
	document.getElementById("timerate").innerHTML = "dt = " + Game.speed;
	// update zoom
	document.getElementById("zoom").innerHTML = Game.systemHeight/au;
}

document.onload = function(){main();};