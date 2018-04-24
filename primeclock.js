var a = 14e9;
var i;
var currentyear = ((new Date()).getFullYear());
var year = 86400*(currentyear%400?(currentyear%100?(currentyear%4?365:366):365):366);
var cye = new Date(currentyear+"-01-01T00:00:00"+String(new Date()).slice(28,33))/1000; // current year epoch - jan 1 XXXX 00:00 utc
var debug = false; // enable to see all events at any time

function timeSinceYear(){
	"use strict";
	return (new Date()/1000)-cye;
}

function toYear(ms){
	"use strict";
	return ms/1000/60/60/24/365.25; // ditto
}

function diff(epoch){
	"use strict";
	return toYear(Date.now()-epoch);
}

var events = [ // MUST BE REVERSE CHRONO ORDER!!! time before 01 jan 2018
[14e9,'<a href="https://en.wikipedia.org/wiki/Big_Bang">Big Bang</a>'],
[14e9-380e6,'<a href="https://en.wikipedia.org/wiki/Chronology_of_the_universe#Dark_Ages">Cosmic Dark Ages</a>'],
[14e9-600e6,'Depth of the <a href="https://en.wikipedia.org/wiki/Hubble_Ultra-Deep_Field#Hubble_eXtreme_Deep_Field">Hubble Extreme Deep Field</a>'],
[14e9-630e6,'<a href="https://en.wikipedia.org/wiki/GRB_090423">GRB 090423</a>, one of the oldest supernovae'],
[14e9-670e6,'Formation of <a href="https://en.wikipedia.org/wiki/EGS-zs8-1">EGS-zs8-1</a>, one of the oldest known galaxies'],
[12.8e9,'Formation of <a href="https://en.wikipedia.org/wiki/HCM-6A">HCM-6A</a>, the oldest known regular galaxy'],
[12.7e9,'Formation of the <a href="https://en.wikipedia.org/wiki/Milky_Way">Milky Way</a>'],
[12.67e9,'Formation of <a href="https://en.wikipedia.org/wiki/Messier_12">Messier 12</a>'],
[12.54e9,'Formation of <a href="https://en.wikipedia.org/wiki/Messier_80">Messier 80</a>'],
[12.3e9,'Formation of <a href="https://en.wikipedia.org/wiki/Messier_55">Messier 55</a>'],
[11.78e9,'Formation of <a href="https://en.wikipedia.org/wiki/Messier_62">Messier 62</a>'],
[11.52e9,'Formation of <a href="https://en.wikipedia.org/wiki/Omega_Centauri">Omega Centauri</a>'],
[11.39e9,'Formation of <a href="https://en.wikipedia.org/wiki/Messier_10">Messier 10</a>'],
[10.8e9,'Formation of <a href="https://en.wikipedia.org/wiki/Gliese_581_planetary_system">Gliese 581</a>'],
[1e10,'Formation of <a href="https://en.wikipedia.org/wiki/Barnard\'s_Star">Barnard\'s Star</a>'],
[9.8e9,'Formation of the <a href="https://en.wikipedia.org/wiki/Andromeda_galaxy">Andromeda Galaxy</a>'],
[8.8e9,'Formation of the first <a href="https://en.wikipedia.org/wiki/Population_I">Population I</a> stars'],
[6e9,'Beginning of the <a href="https://en.wikipedia.org/wiki/Dark-energy_dominated_era">Dark-energy Dominated Era</a>'],
[5.6e9,'Formation of <a href="https://en.wikipedia.org/wiki/Tau_Ceti">Tau Ceti</a>'],
[4.85e9,'Formation of the <a href="https://en.wikipedia.org/wiki/Alpha_Centauri">Alpha Centauri</a> System'],
[4.6e9,'Formation of the <a href="https://en.wikipedia.org/wiki/Solar_System">Solar System</a>'],
[4.5682e9,'Formation of the <a href="https://en.wikipedia.org/wiki/Sun">Sun</a>'],
[4.56717e9,'Formation of the <a href="https://en.wikipedia.org/wiki/Jovian_planets">Jovian Planets</a>'],
[4.545e9,'Formation of the Inner Solar System'],
[4.533e9,'<a href="https://en.wikipedia.org/wiki/Giant-impact_hypothesis">Formation</a> of the <a href="https://en.wikipedia.org/wiki/Earth">Earth</a>'],
[4.529e9,'Mars collides with a pluto-sized planetoid'],
[4.5e9,'Formation of the <a href="https://en.wikipedia.org/wiki/Kuiper_Belt">Kuiper Belt</a> and <a href="https://en.wikipedia.org/wiki/Oort_Cloud">Oort Cloud</a>'],
[4.404e9,'Water Appears on Earth'],
[4.3e9,'Impact creates the <a href="https://en.wikipedia.org/wiki/Aitken_Basin">Aitken Basin</a> on the Moon'],
[4.1e9,'Beginning of the <a href="https://en.wikipedia.org/wiki/Late_Heavy_Bombardment">Late Heavy Bombardment</a>'],
[3.938e9,'Formation of <a href="https://en.wikipedia.org/wiki/Mare_Imbrium">Mare Imbrium</a>'],
[3.92e9,'Impact creates the <a href="https://en.wikipedia.org/wiki/Nectaris_Basin">Nectaris Basin</a> on the Moon'],
[3.84e9,'Impact creates the <a href="https://en.wikipedia.org/wiki/Orientale_Basin">Orientale Basin</a> on the Moon'],
[3.8e9,'End of the Late Heavy Bombardment'],
[3.465e9,'Life forms on Earth'],
[3.2e9,'Earliest Photosynthesis'],
[2.5e9,'Beginning of the <a href="https://en.wikipedia.org/wiki/Proterozoic">Proterozoic</a>'],
[2.45e9,'<a href="https://en.wikipedia.org/wiki/Great_Oxygenation_Event">Great Oxygenation Event</a>'],
[2.4e9,'<a href="https://en.wikipedia.org/wiki/Huronian_glaciation">Huronian Glaciation</a>'],
[2.1e9,'First <a href="https://en.wikipedia.org/wiki/Eukaryote">Eukaryotes</a>'],
[1.7e9,'First <a href="https://en.wikipedia.org/wiki/Mitochondrion">Mitochondia</a>'],
[1.6e9,'First Multicellular Life on Earth'],
[1.2e9,'First Sexual Reproduction'],
[800e6,'Impact creates the <a href="https://en.wikipedia.org/wiki/Copernicus_(lunar_crater)">Copernicus Crater</a> on the Moon'],
[750e6,'First <a href="https://en.wikipedia.org/wiki/Protozoa">Protozoa</a> appear'],
[715e6,'<a href="https://en.wikipedia.org/wiki/Sturtian_glaciation">Sturtian Glaciation</a>'],
[670e9,'First <a href="https://en.wikipedia.org/wiki/Animals">Animals</a>'],
[660e6,'Beginning of the <a href="https://en.wikipedia.org/wiki/Cadomian_orogeny">Cadomian Orogeny</a>'],
[650e6,'<a href="https://en.wikipedia.org/wiki/Marinoan_glaciation">Marinoan Glaciation</a>'],
[600e6,'Beginning of the <a href="https://en.wikipedia.org/wiki/Pan-African_orogeny">Pan-African Orogeny</a>'],
[579.63e6,'<a href="https://en.wikipedia.org/wiki/Gaskiers_glaciation">Gaskiers Glaciation</a>'],
[560e6,'Earliest <a href="https://en.wikipedia.org/wiki/Fungus">Fungi</a>'],
[550e9,'Extinction of <i><a href="https://en.wikipedia.org/wiki/Trilobozoa">Trilobozoa</a></i>'],
[541e6,'<a href="https://en.wikipedia.org/wiki/Cambrian_explosion">Cambrian Explosion</a>'],
[530e6,'Earliest <a href="https://en.wikipedia.org/wiki/Fish">Fish</a>'],
[521e6,'Earliest <a href="https://en.wikipedia.org/wiki/Trilobite">Trilobites</a>'],
[508e6,'Formation of the <a href="https://en.wikipedia.org/wiki/Burgess_Shale">Burgess Shale</a>'],
[485.4e6,'Cambrian-Ordovician Extinction Event'],
[430e6,'Final Ordovician–Silurian Extinction Event'],
[428e6,'Earliest Land Animals'],
[396e6,'Earliest <a href="https://en.wikipedia.org/wiki/Insect">Insects</a>'],
[367.5e6,'Late Devonian Extinction Event'],
[335e6,'Pangaea Forms'],
[252e6,'Permian-Triassic Extinction Event'],
[245e6,'Earliest <a href="https://en.wikipedia.org/wiki/Fly">Flies</a>'],
[242e6,'Formation of <a href="https://en.wikipedia.org/wiki/Sirius">Sirius</a>'],
[231.4e6,'Earliest <a href="https://en.wikipedia.org/wiki/Dinosaur">Dinosaurs</a>'],
[225e6,'Earliest <a href="https://en.wikipedia.org/wiki/Mammal">Mammals</a>'],
[220e6,'Earliest <a href="https://en.wikipedia.org/wiki/Turtle">Turtles</a>'],
[201.3e6,'Triassic-Jurassic Extinction Event'],
[175e6,'Pangaea Separates'],
[145e6,'Beginning of the Cretaceous Period'],
[140e6,'Beginning of the <a href="https://en.wikipedia.org/wiki/Sevier_orogeny">Sevier Orogeny</a>'],
[140e6,'Earliest <a href="https://en.wikipedia.org/wiki/Ant">Ants</a>'],
[130e6,'Earliest <a href="https://en.wikipedia.org/wiki/Flowering_plant">Flowering Plants</a>'],
[125e6,'Beginning of the <a href="https://en.wikipedia.org/wiki/Cretaceous_Terrestrial_Revolution">Cretaceous Terrestrial Revolution</a>'],
[120e6,'Formation of the <a href="https://en.wikipedia.org/wiki/BP_Structure">BP Structure</a>'],
[115e6,'<a href="https://en.wikipedia.org/wiki/Carswell_crater">Carswell Impact</a>'],
[108e6,'Impact creates the <a href="https://en.wikipedia.org/wiki/Tycho_(lunar_crater)">Tycho Crater</a> on the Moon'],
[100e6,'Earliest <a href="https://en.wikipedia.org/wiki/Bee">Bees</a>'],
[94e6,'Cenomanian-Turonian Boundary Event'],
[90e6,'Beginning of the <a href="https://en.wikipedia.org/wiki/Andean_orogeny">Andean Orogeny</a>'],
[80e6,'Beginning of the <a href="https://en.wikipedia.org/wiki/Laramide_orogeny">Laramide Orogeny</a>'],
// https://en.wikipedia.org/wiki/Timeline_of_natural_history#Cretaceous_Period
[7e7,'Formation of <a href="https://en.wikipedia.org/wiki/Polaris">Polaris</a>'],
[68e6,'Earliest <a href="https://en.wikipedia.org/wiki/Tyrannosaurus">Tyrannosaurs</a>'],
[66e6,'Cretaceous-Tertiary Extinction Event'],
[65.17e6,'<a href="https://en.wikipedia.org/wiki/Boltysh_crater">Boltysh Impact</a>'],
[56e6,'Beginning of the <a href="https://en.wikipedia.org/wiki/Eocene">Eocene</a>'],
[55.5e6,'<a href="https://en.wikipedia.org/wiki/Paleocene–Eocene_Thermal_Maximum">Paleocene-Eocene Thermal Maximum</a>'],
[55e6,'Earliest <a href="https://en.wikipedia.org/wiki/Primate">Primates</a>'],
[54.65e6,'<a href="https://en.wikipedia.org/wiki/Fur_Formation">Fur Formation</a>'],
[52.5e6,'<a href="https://en.wikipedia.org/wiki/London_Clay">London Clay</a>'],
[52e6,'Earliest <a href="https://en.wikipedia.org/wiki/Bat">Bats</a>'],
[45e6,'Australia Splits from Antarctica'],
[42e6,'Earliest <a href="https://en.wikipedia.org/wiki/Carnivora">Carnivorans</a>'],
// https://en.wikipedia.org/wiki/List_of_impact_craters_on_Earth#Largest_craters_(10_Ma_or_more)
[39e6,'<a href="https://en.wikipedia.org/wiki/Haughton_impact_crater">Haughton Impact</a>'],
[36.4e6,'<a href="https://en.wikipedia.org/wiki/Mistastin_crater">Mistastin Impact</a>'],
[35e6,'<a href="https://en.wikipedia.org/wiki/Chesapeake_Bay_impact_crater">Chesepeake Bay Impact</a>'],
[35e6,'<a href="https://en.wikipedia.org/wiki/Popigai_crater">Popigai Impact</a>'],
[33.9e6,'Eocene-Oligocene Extinction Event'],
[26.3e6,'<a href="https://en.wikipedia.org/wiki/La_Garita_Caldera">La Garita</a> Eruption'],
[23.03e6,'Beginning of the <a href="https://en.wikipedia.org/wiki/Neogene">Neogene</a>'],
[14.5e6,'Middle Miocene Disruption'],
[14.4e6,'<a href="https://en.wikipedia.org/wiki/Nördlinger_Ries">Nördlinger Ries Impact</a>'],
[7e6,'Earliest <i><a href="https://en.wikipedia.org/wiki/Vulpes">Vulpes</a></i> Fossils'],
[5.33e6,'<a href="https://en.wikipedia.org/wiki/Zanclean_flood">Zanclean Flood</a>'],
[5e6,'<a href="https://en.wikipedia.org/wiki/Bigach_crater">Bigach Impact</a>'],
[5e6,'<a href="https://en.wikipedia.org/wiki/Karla_crater">Karla Impact</a>'],
[3.95e6,'<a href="https://en.wikipedia.org/wiki/Karakul_(Tajikistan)">Karakul Impact</a>'],
[3.6e6,'<a href="https://en.wikipedia.org/wiki/Lake_Elgygytgyn">Elgygytgyn Impact</a>'],
[2.588e6,'Beginning of the <a href="https://en.wikipedia.org/wiki/Quaternary">Quaternary</a>'],
[1.09e6,'<a href="https://en.wikipedia.org/wiki/Jaramillo_normal_event">Jaramillo Normal Event</a>'],
[1.07e6,'<a href="https://en.wikipedia.org/wiki/Lake_Bosumtwi">Lake Bosumtwi Impact</a>'],
[990e3,'<a href="https://en.wikipedia.org/wiki/Jaramillo_reversal">Jaramillo Reversal</a>'],
[900e3,'<a href="https://en.wikipedia.org/wiki/Zhamanshin_crater">Zhamanshin Impact</a>'],
[781e3,'<a href="https://en.wikipedia.org/wiki/Brunhes–Matuyama_reversal">Brunhes-Matuyama Reversal</a> - most recent geomagnetic reversal'],
[315e3,'Modern Humans Evolve'],
[220e3,'<a href="https://en.wikipedia.org/wiki/Tswaing_crater">Tswaing Impact</a>'],
// https://en.wikipedia.org/wiki/Timeline_of_human_prehistory
[195e3,'Oldest Discovered Human Fossil'],
[170e3,'First Clothing'],
[120e3,'<a href="https://en.wikipedia.org/wiki/Abbassia_Pluvial">Abbassia Pluvial</a> Begins'],
[110e3,'<a href="https://en.wikipedia.org/wiki/Last_glacial_period">Last Glacial Period</a> Begins'],
[90e3,'Abbassia Pluvial Ends'],
[75e3,'<a href="https://en.wikipedia.org/wiki/Toba_catastrophe_theory">Toba Catastrophe</a>'],
[65e3,'<a href="https://en.wikipedia.org/wiki/Southern_Dispersal">Southern Dispersal</a>'],
[64e3,'Archery Invented'],
[52e3,'<a href="https://en.wikipedia.org/wiki/Lonar_Lake">Lonar Impact</a>'],
[50e3,'<a href="https://en.wikipedia.org/wiki/Mousterian_Pluvial">Mousterian Pluvial</a> Begins'],
[49e3,'<a href="https://en.wikipedia.org/wiki/Meteor_Crater">Meteor Crater Impact</a>'],
[44e3,'Cro-Magnon Colonization of Europe'],
[40e3,'<a href="https://en.wikipedia.org/wiki/Neanderthal_extinction">Neanderthals go Extinct</a>'],
[30e3,'Mousterian Pluvial Ends'],
[28.5e3,'Settlement of New Guinea'],
[24e3,'Extinction of the <a href="https://en.wikipedia.org/wiki/Cave_bear">Cave Bear</a>'],
[21.4e3,'<a href="https://en.wikipedia.org/wiki/Tenoumer_crater">Tenoumer Impact</a>'],
[14.85e3,'Pigs Domesticated'],
[14.7e3,'<a href="https://en.wikipedia.org/wiki/Bølling-Allerød_warming">Bølling-Allerød Warming</a>'],
[13e3,'<a href="https://en.wikipedia.org/wiki/Settlement_of_the_Americas">Settlement of the Americas</a>'],
[13e3,'Extinction of the <a href="https://en.wikipedia.org/wiki/Saber-toothed_cat">Sabertooth</a>'],
[12.9e3,'<a href="https://en.wikipedia.org/wiki/Younger_Dryas">Younger Dryas</a>'],
[12e3,'Goats and Sheep Domesticated'],
[11.7e3,'<a href="https://en.wikipedia.org/wiki/Last_glacial_period">Last Glacial Period</a> Ends'],
[10.5e3,'Cattle Domesticated'],
[10.3e3,'End of the <a href="https://en.wikipedia.org/wiki/Baltic_Ice_Lake">Baltic Ice Lake</a>'],
[10e3,'Extinction of <i><a href="https://en.wikipedia.org/wiki/Megatherium">Megatherium</a></i>'],
[8.215e3,'<a href="https://en.wikipedia.org/wiki/Storegga_Slide">Storregga Slide</a>'],
[8.2e3,'<a href="https://en.wikipedia.org/wiki/8.2_kiloyear_event">8.2 Kiloyear Event</a>'],
[8e3,'End of <a href="Ancylus Lake">Ancylus Lake</a>'],
[7.7e3,'Extinction of the <a href="https://en.wikipedia.org/wiki/Irish_elk">Irish Elk</a>'],
[7.6e3,'<a href="https://en.wikipedia.org/wiki/Black_Sea_deluge_hypothesis">Black Sea Deluge</a>'],
[7.3e3,'<a href="https://en.wikipedia.org/wiki/Macha_crater">Macha Impact</a>'],
// Above events should be forever static
[currentyear+4500,'Dawn of <a href="https://en.wikipedia.org/wiki/Sumer">Sumer</a>'],
[currentyear+4200,'Draining of <a href="https://en.wikipedia.org/wiki/Lake_Agassiz">Lake Agassiz</a>'],
[currentyear+3900,'<a href="https://en.wikipedia.org/wiki/5.9_kiloyear_event">5.9 Kiloyear Event</a>'],
[currentyear+3500,'Approximate age of <a href="https://en.wikipedia.org/wiki/Proto-Indo-European_language">Proto-Indo-European</a>'],
[currentyear+3400,'<a href="https://en.wikipedia.org/wiki/Boxhole_crater">Boxhole Impact</a>'],
[currentyear+3200,'<a href="https://en.wikipedia.org/wiki/Piora_Oscillation">Piora Oscillation</a>'],
[currentyear+3100,'Reign of <a href="https://en.wikipedia.org/wiki/Narmer">Narmer</a>, earliest known Egyptian pharaoh'],
[currentyear+3000,'<a href="https://en.wikipedia.org/wiki/Morasko_Meteorite_Nature_Reserve">Morasko Impact</a>'],
[currentyear+2700,'<a href="https://en.wikipedia.org/wiki/Henbury_Meteorites_Conservation_Reserve">Henbury Impact</a>'],
[currentyear+2450,'<a href="https://en.wikipedia.org/wiki/Campo_del_Cielo">Campo del Cielo Impact</a>'],
[currentyear+2200,'<a href="https://en.wikipedia.org/wiki/4.2_kiloyear_event">4.2 Kiloyear Event</a>'],
[currentyear+1650,'Extinction of the <a href="https://en.wikipedia.org/wiki/Woolly_mammoth">Woolly Mammoth</a>'],
[currentyear+1490,'<a href="https://en.wikipedia.org/wiki/Kaali_crater">Kaali Impact</a>'],
[currentyear+1312,'<a href="https://en.wikipedia.org/wiki/Mursili\'s_eclipse">Mursili\'s Eclipse</a>'],
[currentyear+1175,'<a href="https://en.wikipedia.org/wiki/Late_Bronze_Age_collapse">Late Bronze Age Collapse</a>'],
// Individual days do not matter before 1680 BCE (ty calculus)
[currentyear+753,'<a href="https://en.wikipedia.org/wiki/Ab_urbe_condita">Founding of Rome</a>'],
[currentyear+218,'Hannibal <a href="https://en.wikipedia.org/wiki/Hannibal\'s_crossing_of_the_Alps">Crosses the Alps</a>'],
[currentyear+44,'<a href="https://en.wikipedia.org/wiki/Assassination_of_Julius_Caesar">Assassination of Julius Caesar</a>'],
[currentyear-180,'The <a href="https://en.wikipedia.org/wiki/Etruscan_language">Etruscan Language</a> dies'],
[currentyear-476,'<a href="https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire">Fall of West Rome</a>; Dawn of the <a href="https://en.wikipedia.org/wiki/Middle_Ages">Middle Ages</a>'],
[currentyear-1453,'Fall of <a href="https://en.wikipedia.org/wiki/Byzantine_Empire">Byzantium</a>'],
[currentyear-1715,'Beginning of the <a href="https://en.wikipedia.org/wiki/Age_of_Enlightenment">Age of Enlightenment</a>'],
[currentyear-1776,'Formation of the United States'],
[currentyear-1812,'Beginning of the <a href="https://en.wikipedia.org/wiki/War_of_1812">War of 1812</a>'],
[currentyear-1846,'Beginning of the <a href="https://en.wikipedia.org/wiki/Mexican–American_War">Mexican-American War</a>'],
[currentyear-1861,'Beginning of the <a href="https://en.wikipedia.org/wiki/American_Civil_War">American Civil War</a>'],
[currentyear-1898,'Beginning of the <a href="https://en.wikipedia.org/wiki/Spanish–American_War">Spanish-American War</a>'],
[currentyear-1914,'Beginning of the Great War'],
[currentyear-1939,'Beginning of the Second World War'],
[currentyear-1950,'Beginning of the Korean War'],
[currentyear-1955,'Beginning of the Vietnam War'],
// Precise number of days for events before 1970 unnecessary.
[diff(495432000000),'<a href="https://en.wikipedia.org/wiki/Super_Mario_Bros.">Super Mario Bros.</a> Released'],
[diff(682056000000),'<a href="https://en.wikipedia.org/wiki/Super_Mario_World">Super Mario World</a> Released in NA'],
[diff(1000212360000),'<a href="https://en.wikipedia.org/wiki/September_11_attacks">September 11 Attacks</a>'],
[diff(1000771200000),'<a href="https://en.wikipedia.org/wiki/2001_anthrax_attacks">2001 Anthrax Attacks</a>'],
[diff(1059710400000),'<a href="https://en.wikipedia.org/wiki/Myspace">Myspace</a> Launched'],
[diff(1075870800000),'<a href="https://en.wikipedia.org/wiki/Facebook">Facebook</a> Launched'],
[diff(1108357200000),'<a href="https://en.wikipedia.org/wiki/YouTube">YouTube</a> Launched'],
[diff(1242532800000),'<a href="https://en.wikipedia.org/wiki/Minecraft">Minecraft Classic</a> Released'],
[diff(1305172800000),'<a href="https://en.wikipedia.org/wiki/Death_of_Osama_bin_Laden">Death of Osama bin Laden</a>'],
[diff(1307332800000),'<a href="https://en.wikipedia.org/wiki/Twitch.tv">Twitch</a> Launched'],
[diff(1359003600000),'<a href="https://en.wikipedia.org/wiki/Vine_(service)">Vine</a> Launched'],
[diff(1478667600000),'Donald Trump Elected President of the US'], // roughly when it became certain; 00:00 EST 9 NOV 2016 
[diff(1494907200000),'<a href="https://mocha2007.github.io">Mocha\'s Site</a> Launched']
// https://en.wikipedia.org/wiki/Timelines_of_world_history
];

function arraysEqual(arr1,arr2){
	"use strict";
	if (arr1.length !== arr2.length){
		return false;
	}
	for (i=0;i<arr1.length;i+=1){
		if (arr1[i] !== arr2[i]){
			return false;
		}
	}
	return true;
}

function gcd(a,b){
	"use strict";
	if (b===0){
		return a;
	}
	return gcd(b,a%b);
}

function factorize(n){
	"use strict";
	// only works for natual numbers greater than one
	var pf = [];
	var t = 2;
	while (true){
		if (n%t===0){
			if (pf.length && pf[pf.length-1][0]===t){
				pf[pf.length-1][1]+=1;
			}
			else {
				pf.push([t,1]);
			}
			n = n/t;
		}
		else {
			t+=t===2?1:2;
		}
		// check to break early
		if (t*t>n){
			if (pf.length && pf[pf.length-1][0]===n){
				pf[pf.length-1][1]+=1;
			}
			else {
				pf.push([n,1]);
			}
			break;
		}
	}
	return pf;
}

function ispower(factorization){
	"use strict";
	var powertable = factorization.map(function f(x){return x[1];});
	var gggcd = 0;
	for (i=0;i<powertable.length;i+=1){
		if (gggcd){
			gggcd = gcd(gggcd,powertable[i]);
		}
		else {
			gggcd = powertable[i];
		}
		if (gggcd===1){
			return false;
		}
	}
	return arraysEqual(new Array(factorization.length).fill(factorization[0][1]),powertable);
}

function issemiprime(factorization){
	"use strict";
	if (factorization.length === 2 && factorization[0][1]+factorization[1][1] === 2){
		return true;
	}
	if (factorization.length === 1 && factorization[0][1] === 2){
		return true;
	}
	return false;
}

function commaconvert(s){
	"use strict";
	s = s.split('');
	var n = 0;
	for (i=0;i<s.length;i+=1){
		if (s[i]===','){
			if (n%2===0){
				s[i]='^';
			}
			else {
				s[i]=' &times; ';
			}
			n+=1;
		}
	}
	return s.join('');
}
/*
x is seconds since 1 Jan
y is seconds before 2018

ae^-(bx/year) = y

ae^-(bx/year) = 14e9 * year

a = 14e9
*/

function ialc(y){
	"use strict";
	var otherx = timeSinceYear(); // seconds since year beginning
	var x = Math.floor(year*(1-Math.log(y)/Math.log(a)));
	var wannadate = new Date(Date.now()-1000*(otherx-x));
	return String(wannadate).slice(4,24);
}

function alc(){
	"use strict";
	var x = timeSinceYear(); // seconds since year beginning
	var y = Math.pow(a,1-x/year);
	var str = '';
	for (i=0;i<events.length;i+=1){
		if (debug || events[i][0]>y){
			str+='<br>'+(i===0?'Jan 01 '+currentyear+' 00:00:00':ialc(events[i][0]))+' - '+events[i][1];
		}
		else {
			break;
		}
	}
	document.getElementById("alc").innerHTML = str+'<br><span id="nowtime"></span>';
}

function primeclock(){ // can't use strict mode because of IE
	var sec = Math.floor(new Date()/1000);
	var str = factorize(sec);
	var factorization = commaconvert(String(str)).replace(/\^1/g,'').replace(/\^/g,'<sup>').replace(/\s&times;/g,'</sup> &times;');
	var isprime = factorization.length === String(sec).length;

	var title = document.getElementById("c1");
	title.innerHTML = sec;
	title.classList = [isprime?'prime':(ispower(str)?'ppower':(issemiprime(str)?'semiprime':'composite'))];
	var buffer = '<sup class="invisible">1</sup>'; // necessary to prevent text from jumping up and down; sadly, no css solution possible
	document.getElementById("c2").innerHTML = buffer+factorization+buffer;

	var x = timeSinceYear(); // seconds since year beginning
	var y = Math.pow(a,1-x/year);
	var yprime = Math.round(y*Math.log(a)*24*60*60);

	document.getElementById("nowtime").innerHTML = (String(new Date()).slice(4,24))+' - Now ('+Math.round(y).toLocaleString()+') Years Ago';// ('+yprime.toLocaleString()+'x Speed)';
}