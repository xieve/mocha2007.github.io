/* exported elementData, isotopeData, nobleMetalColors, nutritionColors, minute, hour, day, year */
'use strict';
// modelColor from https://sciencenotes.org/wp-content/uploads/2019/07/CPK-Jmol-1024x791.png
// abundances from https://periodictable.com/Properties/A/UniverseAbundance.an.log.html
// also https://periodictable.com/Properties/A/UniverseAbundance.html
// metal prices from https://www.dailymetalprice.com/ and https://www.metalary.com
// other prices from https://en.wikipedia.org/wiki/Prices_of_chemical_elements

// https://en.wikipedia.org/wiki/Template:Periodic_table_(noble_metals)
const nobleMetalColors = ['#cf0', '#0e7', '#6bf', '#c9f', '#fb6', '#f66'];
// https://en.wikipedia.org/wiki/Template:Periodic_table_(nutritional_elements)
const nutritionColors = ['#060', '#0b0', '#7f0', '#670', '#f70', '#dd9'];

// also used in isotopeData.js
const minute = 60;
const hour = 60 * minute;
const day = 24 * hour;
const year = 365.2425 * day;
const month = year / 12;
// used for metal prices
const pound = 0.45359237;
const ounce = pound/16;

const elementData = [
	{
		z: 1,
		name: 'Hydrogen',
		symbol: 'H',
		mass: 1.008,
		group: 1,
		period: 1,
		properties: {
			abundance: {
				earth: 6.7e-3,
				human: 0.62,
				universe: 0.739,
			},
			biologicalHalfLife: 12*day, // tritium; http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			categories: {
				reactiveNonmetal: true,
				rockForming: 0.5,
			},
			density: 0.08988,
			discovery: 1500,
			modelColor: 'white',
			nutrition: 0,
			prices: {
				2012: 1.39,
			},
			production: 50e6,
			temperatures: {
				boil: 20.28,
				melt: 14.01,
			},
		},
	},
	{
		z: 2,
		name: 'Helium',
		symbol: 'He',
		mass: 4.0026,
		group: 18,
		period: 1,
		properties: {
			abundance: {
				earth: 0.008e-6,
				universe: 0.24,
			},
			categories: {
				nobleGas: true,
			},
			density: 0.1785,
			discovery: 1895,
			modelColor: 'rgb(217, 255, 255)',
			prices: {
				2018: 24,
			},
			production: 32e3,
			temperatures: {
				boil: 4.22, // does not solidify at SP
			},
		},
	},
	{
		z: 3,
		name: 'Lithium',
		symbol: 'Li',
		mass: 6.94,
		group: 1,
		period: 2,
		properties: {
			abundance: {
				earth: 4.1e-6,
				human: 1.5e-8,
				universe: 6e-9,
			},
			categories: {
				alkaliMetal: true,
			},
			density: 534,
			discovery: 1821,
			modelColor: 'rgb(204, 128, 255)',
			nutrition: 3,
			prices: {
				2020: 83.5,
				2018: 16.5,
			},
			production: 55e3,
			rgb: 'rgb(249, 255, 252)',
			temperatures: {
				boil: 1560,
				melt: 453.69,
			},
		},
	},
	{
		z: 4,
		name: 'Beryllium',
		symbol: 'Be',
		mass: 9.0121831,
		group: 2,
		period: 2,
		properties: {
			abundance: {
				earth: 140e-9,
				human: 4.5e-10,
				universe: 1e-9,
			},
			categories: {
				aem: true,
				preciousMetal: 0.5,
			},
			density: 1850,
			discovery: 1828,
			modelColor: 'rgb(194, 255, 0)',
			prices: {
				2020: 857,
			},
			production: 200,
			rgb: 'rgb(255, 255, 255)',
			temperatures: {
				boil: 2742,
				melt: 1560,
			},
		},
	},
	{
		z: 5,
		name: 'Boron',
		symbol: 'B',
		mass: 10.81,
		group: 13,
		period: 2,
		properties: {
			abundance: {
				earth: 480e-9,
				human: 3e-8,
				universe: 1e-9,
			},
			categories: {
				metalloid: true,
			},
			density: 2340,
			discovery: 1808,
			modelColor: 'rgb(255, 181, 181)',
			nutrition: 3,
			prices: {
				2019: 3.68,
			},
			production: 1.8e6,
			rgb: 'rgb(255, 232, 219)',
			temperatures: {
				boil: 4200,
				melt: 2349,
			},
		},
	},
	{
		z: 6,
		name: 'Carbon',
		symbol: 'C',
		mass: 12.011,
		group: 14,
		period: 2,
		properties: {
			abundance: {
				earth: 1.6e-3,
				human: 0.12,
				universe: 4600e-6,
			},
			biologicalHalfLife: 40*day, // C-14; http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			categories: {
				coinageMetal: 0.5, // various russian coins
				reactiveNonmetal: true,
				rockForming: 0.5,
			},
			density: 2267,
			discovery: -3750,
			modelColor: 'rgb(144, 144, 144)',
			nutrition: 0,
			prices: {
				2018: 0.122,
			},
			production: 1.03e6,
			rgb: 'rgb(255, 251, 239)',
			temperatures: {
				boil: 3915,
				melt: 3915,
			},
		},
	},
	{
		z: 7,
		name: 'Nitrogen',
		symbol: 'N',
		mass: 14.007,
		group: 15,
		period: 2,
		properties: {
			abundance: {
				earth: 46e-6,
				human: 0.011,
				universe: 960e-6,
			},
			categories: {
				pnictogen: true,
				reactiveNonmetal: true,
			},
			density: 1.2506,
			discovery: 1772,
			modelColor: 'rgb(48, 80, 248)',
			nutrition: 0,
			prices: {
				2001: 0.14,
			},
			production: 131e6,
			temperatures: {
				boil: 77.36,
				melt: 63.15,
			},
		},
	},
	{
		z: 8,
		name: 'Oxygen',
		symbol: 'O',
		mass: 15.999,
		group: 16,
		period: 2,
		properties: {
			abundance: {
				earth: 482e-3,
				human: 0.24,
				universe: 10400e-6,
			},
			categories: {
				chalcogen: true,
				reactiveNonmetal: true,
				rockForming: true,
			},
			density: 1.429,
			discovery: 1604,
			modelColor: 'rgb(255, 13, 13)',
			nutrition: 0,
			prices: {
				2001: 0.154,
			},
			production: 100e6,
			temperatures: {
				boil: 90.2,
				melt: 54.36,
			},
		},
	},
	{
		z: 9,
		name: 'Fluorine',
		symbol: 'F',
		mass: 18.998403163,
		group: 17,
		period: 2,
		properties: {
			abundance: {
				earth: 14e-6,
				human: 1.2e-5,
				universe: 4e-7,
			},
			biologicalHalfLife: 450*day, // personal estimate; 2.6 g fluorine per person, 4 mg/day per person
			categories: {
				halogen: true,
				reactiveNonmetal: true,
				rockForming: 0.5,
			},
			density: 1.696,
			discovery: 1886,
			modelColor: 'rgb(144, 224, 80)',
			nutrition: 3,
			prices: {
				2017: 2,
			},
			production: 5.5e6,
			rgb: 'rgb(255, 207, 112)',
			temperatures: {
				boil: 85.03,
				melt: 53.53,
			},
		},
	},
	{
		z: 10,
		name: 'Neon',
		symbol: 'Ne',
		mass: 20.1797,
		group: 18,
		period: 2,
		properties: {
			abundance: {
				earth: 0.0051e-6,
				universe: 1340e-6,
			},
			categories: {
				nobleGas: true,
			},
			density: 0.8999,
			discovery: 1898,
			modelColor: 'rgb(179, 227, 245)',
			prices: {
				1999: 240,
			},
			production: 500,
			temperatures: {
				boil: 27.07,
				melt: 24.56,
			},
		},
	},
	{
		z: 11,
		name: 'Sodium',
		symbol: 'Na',
		mass: 22.98976928,
		group: 1,
		period: 3,
		properties: {
			abundance: {
				earth: 2e-3,
				human: 3.7e-4,
				universe: 33e-6,
			},
			biologicalHalfLife: 69*day, // personal estimate; 100 g sodium per person, 1 mg/day per person
			// 11 d according to http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			categories: {
				alkaliMetal: true,
				rockForming: true,
			},
			density: 971,
			discovery: 1807,
			modelColor: 'rgb(171, 92, 242)',
			nutrition: 1,
			prices: {
				2020: 3,
			},
			production: 100e3,
			rgb: 'rgb(252, 255, 249)',
			temperatures: {
				boil: 1156,
				melt: 370.87,
			},
		},
	},
	{
		z: 12,
		name: 'Magnesium',
		symbol: 'Mg',
		mass: 24.305,
		group: 2,
		period: 3,
		properties: {
			abundance: {
				earth: 164e-3,
				human: 7e-5,
				universe: 580e-6,
			},
			biologicalHalfLife: 44*day, // personal estimate; 19 g magnesium per person, 300 mg/day per person
			categories: {
				aem: true,
				rockForming: true,
			},
			density: 1738,
			discovery: 1808,
			modelColor: 'rgb(138, 255, 0)',
			nutrition: 1,
			prices: {
				2019: 2.32,
			},
			production: 748e3,
			rgb: 'rgb(255, 251, 234)',
			temperatures: {
				boil: 1363,
				melt: 923,
			},
		},
	},
	{
		z: 13,
		name: 'Aluminum',
		symbol: 'Al',
		mass: 26.9815384,
		group: 13,
		period: 3,
		properties: {
			abundance: {
				earth: 15.3e-3,
				human: 1.5e-7,
				universe: 58e-6,
			},
			categories: {
				coinageMetal: 0.5, // 1 yen coin
				nativeMetal: 0.5,
				rockForming: true,
			},
			density: 2698,
			discovery: 1825,
			modelColor: 'rgb(191, 166, 166)',
			nutrition: 4,
			prices: {
				2021: 0.975/pound,
				2019: 1.79,
			},
			production: 44.1e6,
			rgb: 'rgb(244, 251, 255)',
			temperatures: {
				boil: 2792,
				melt: 933.47,
			},
		},
	},
	{
		z: 14,
		name: 'Silicon',
		symbol: 'Si',
		mass: 28.085,
		group: 14,
		period: 3,
		properties: {
			abundance: {
				earth: 150e-3,
				human: 5.8e-5,
				universe: 650e-6,
			},
			categories: {
				metalloid: true,
				rockForming: true,
			},
			density: 2329.6,
			discovery: 1823,
			modelColor: 'rgb(240, 200, 160)',
			nutrition: 3,
			prices: {
				2019: 1.7,
			},
			production: 8e6,
			rgb: 'rgb(234, 241, 255)',
			temperatures: {
				boil: 3538,
				melt: 1687,
			},
		},
	},
	{
		z: 15,
		name: 'Phosphorus',
		symbol: 'P',
		mass: 30.973761998,
		group: 15,
		period: 3,
		properties: {
			abundance: {
				earth: 1.02e-3,
				human: 0.0022,
				universe: 7e-6,
			},
			biologicalHalfLife: 932*day, // personal estimate; 780 g phosphorus per person, 580 mg/day per person
			categories: {
				pnictogen: true,
				reactiveNonmetal: true,
				rockForming: 0.5,
			},
			// 1155 d according to http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			density: 1820,
			discovery: 1669,
			modelColor: 'rgb(255, 128, 0)',
			nutrition: 1,
			prices: {
				2019: 2.69,
			},
			production: 910e3,
			rgb: 'rgb(255, 235, 186)',
			temperatures: {
				boil: 550,
				melt: 317.3,
			},
		},
	},
	{
		z: 16,
		name: 'Sulfur',
		symbol: 'S',
		mass: 32.06,
		group: 16,
		period: 3,
		properties: {
			abundance: {
				earth: 5.15e-3,
				human: 3.8e-4,
				universe: 440e-6,
			},
			biologicalHalfLife: 90*day, // S-35; http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			categories: {
				chalcogen: true,
				reactiveNonmetal: true,
				rockForming: 0.5,
			},
			density: 2067,
			discovery: -2000,
			modelColor: 'rgb(255, 255, 48)',
			nutrition: 1,
			prices: {
				2019: 0.0926,
			},
			production: 69e6,
			rgb: 'rgb(255, 218, 86)',
			temperatures: {
				boil: 717.87,
				melt: 388.36,
			},
		},
	},
	{
		z: 17,
		name: 'Chlorine',
		symbol: 'Cl',
		mass: 35.45,
		group: 17,
		period: 3,
		properties: {
			abundance: {
				earth: 56e-6,
				human: 2.4e-4,
				universe: 1e-6,
			},
			biologicalHalfLife: 29*day, // Cl-36; http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			categories: {
				halogen: true,
				reactiveNonmetal: true,
				rockForming: 0.5,
			},
			density: 3.214,
			discovery: 1774,
			modelColor: 'rgb(31, 240, 31)',
			nutrition: 1,
			prices: {
				2013: 0.082,
			},
			rgb: 'rgb(246, 255, 188)',
			temperatures: {
				boil: 239.11,
				melt: 171.6,
			},
		},
	},
	{
		z: 18,
		name: 'Argon',
		symbol: 'Ar',
		mass: 39.95,
		group: 18,
		period: 3,
		properties: {
			abundance: {
				earth: 3.5e-6,
				universe: 77e-6,
			},
			categories: {
				nobleGas: true,
			},
			density: 1.7837,
			discovery: 1894,
			modelColor: 'rgb(128, 209, 227)',
			prices: {
				2019: 0.931,
			},
			production: 700e3,
			temperatures: {
				boil: 87.3,
				melt: 83.8,
			},
		},
	},
	{
		z: 19,
		name: 'Potassium',
		symbol: 'K',
		mass: 39.0983,
		group: 1,
		period: 4,
		properties: {
			abundance: {
				earth: 110e-6,
				human: 3.3e-4,
				universe: 3e-6,
			},
			biologicalHalfLife: 20*day, // personal estimate; 140 g potassium per person, 4.7 mg/day per person
			categories: {
				alkaliMetal: true,
				rockForming: true,
			},
			density: 862,
			discovery: 1807,
			modelColor: 'rgb(143, 64, 212)',
			nutrition: 1,
			prices: {
				2020: 12.85,
			},
			temperatures: {
				boil: 1032,
				melt: 336.53,
			},
		},
	},
	{
		z: 20,
		name: 'Calcium',
		symbol: 'Ca',
		mass: 40.078,
		group: 2,
		period: 4,
		properties: {
			abundance: {
				earth: 11.1e-3,
				human: 0.0022,
				universe: 60e-6,
			},
			biologicalHalfLife: 693*day, // personal estimate; 1kg calcium per person, 1 g/day per person
			categories: {
				aem: true,
				rockForming: true,
			},
			density: 1540,
			discovery: 1808,
			modelColor: 'rgb(61, 255, 0)',
			nutrition: 1,
			prices: {
				2020: 2.28,
			},
			temperatures: {
				boil: 1757,
				melt: 1115,
			},
		},
	},
	{
		z: 21,
		name: 'Scandium',
		symbol: 'Sc',
		mass: 44.955908,
		group: 3,
		period: 4,
		properties: {
			abundance: {
				earth: 6.3e-6,
				human: 4e-10,
				universe: 3e-8,
			},
			categories: {
				rem: true,
			},
			density: 2989,
			discovery: 1879,
			modelColor: 'rgb(230, 230, 230)',
			prices: {
				2020: 3460,
			},
			production: 2,
			temperatures: {
				boil: 3109,
				melt: 1814,
			},
		},
	},
	{
		z: 22,
		name: 'Titanium',
		symbol: 'Ti',
		mass: 47.867,
		group: 4,
		period: 4,
		properties: {
			abundance: {
				earth: 440e-6,
				human: 4e-8,
				universe: 3e-6,
			},
			categories: {
				nativeMetal: 0.5,
				refractoryMetal: 0.5,
				rockForming: 0.5,
			},
			density: 4540,
			discovery: 1825,
			modelColor: 'rgb(191, 194, 199)',
			nobleMetal: 0,
			prices: {
				2020: 11.4,
				2018: 4.8,
			},
			production: 6.7e6,
			temperatures: {
				boil: 3560,
				melt: 1941,
			},
		},
	},
	{
		z: 23,
		name: 'Vanadium',
		symbol: 'V',
		mass: 50.9415,
		group: 5,
		period: 4,
		properties: {
			abundance: {
				earth: 53.6e-6,
				human: 1.2e-10,
				universe: 1e-6,
			},
			categories: {
				nativeMetal: 0.5,
				refractoryMetal: 0.5,
			},
			density: 6110,
			discovery: 1867,
			modelColor: 'rgb(166, 166, 171)',
			nobleMetal: 0,
			nutrition: 3,
			prices: {
				2020: 371,
			},
			production: 73e6, // https://pubs.usgs.gov/periodicals/mcs2020/mcs2020-vanadium.pdf
			temperatures: {
				boil: 3680,
				melt: 2183,
			},
		},
	},
	{
		z: 24,
		name: 'Chromium',
		symbol: 'Cr',
		mass: 51.9961,
		group: 6,
		period: 4,
		properties: {
			abundance: {
				earth: 2.3e-3,
				human: 1.9e-10,
				universe: 1.5e-5,
			},
			biologicalHalfLife: 320*day, // personal estimate; 14 mg chromium per person, 0.03 mg/day per person
			categories: {
				nativeMetal: 0.5,
				refractoryMetal: 0.5,
			},
			density: 7150,
			discovery: 1797,
			modelColor: 'rgb(138, 153, 199)',
			nobleMetal: 0,
			nutrition: 2,
			prices: {
				2019: 9.4,
			},
			production: 4.4e6,
			temperatures: {
				boil: 2944,
				melt: 2180,
			},
			toxicity: 50e-6, // Chromium(VI) human, min est. LD50
		},
	},
	{
		z: 25,
		name: 'Manganese',
		symbol: 'Mn',
		mass: 54.938043,
		group: 7,
		period: 4,
		properties: {
			abundance: {
				earth: 800e-6,
				human: 1.5e-8,
				universe: 8e-6,
			},
			biologicalHalfLife: 3.8*day, // personal estimate; 12 mg manganese per person, 2 mg/day per person
			categories: {
				coinageMetal: 0.5, // $1 coin
				nativeMetal: 0.5,
				refractoryMetal: 0.5,
				rockForming: 0.5,
			},
			density: 7440,
			discovery: 1774,
			modelColor: 'rgb(156, 122, 199)',
			nutrition: 2,
			prices: {
				2019: 1.82,
				2018: 2.06,
			},
			production: 19e6, // https://pubs.usgs.gov/periodicals/mcs2020/mcs2020-manganese.pdf
			temperatures: {
				boil: 2334,
				melt: 1519,
			},
		},
	},
	{
		z: 26,
		name: 'Iron',
		symbol: 'Fe',
		mass: 55.845,
		group: 8,
		period: 4,
		properties: {
			abundance: {
				earth: 148e-3,
				human: 6.7e-6,
				universe: 1.09e-3,
			},
			biologicalHalfLife: 485*day, // personal estimate; 4.2g iron per person, 6 mg/day per person; 0.5^(1/L) = 1 - 0.006/4.2
			categories: {
				coinageMetal: 0.5, // various russian coins
				nativeMetal: 0.5,
				rockForming: true,
			},
			density: 7874,
			discovery: -5000,
			modelColor: 'rgb(224, 102, 51)',
			nutrition: 2,
			prices: {
				2021: 164.41/1000,
				2020: 0.424,
			},
			production: 1544e6,
			rgb: 'rgb(255, 252, 252)',
			temperatures: {
				boil: 3134,
				melt: 1811,
			},
			toxicity: 50e-6, // "Ingestions of more than 50 mg/kg of elemental iron are associated with severe toxicity"
		},
	},
	{
		z: 27,
		name: 'Cobalt',
		symbol: 'Co',
		mass: 58.933194,
		group: 9,
		period: 4,
		properties: {
			abundance: {
				earth: 390e-6,
				human: 3e-9,
				universe: 3e-6,
			},
			biologicalHalfLife: 10*day, // Co-60; http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			categories: {
				nativeMetal: 0.5,
			},
			density: 8860,
			discovery: 1735,
			modelColor: 'rgb(240, 144, 160)',
			nutrition: 2,
			prices: {
				2021: 25.18/pound,
				2019: 32.8,
			},
			production: 140e3, // https://pubs.usgs.gov/periodicals/mcs2020/mcs2020-cobalt.pdf
			rgb: 'rgb(255, 249, 244)',
			temperatures: {
				boil: 3200,
				melt: 1768,
			},
		},
	},
	{
		z: 28,
		name: 'Nickel',
		symbol: 'Ni',
		mass: 58.6934,
		group: 10,
		period: 4,
		properties: {
			abundance: {
				earth: 8.01e-3,
				human: 1.5e-8,
				universe: 49e-6,
			},
			categories: {	
				coinageMetal: 0.5, // us coins
				nativeMetal: 0.5,
			},
			density: 8912,
			discovery: 1751,
			modelColor: 'rgb(80, 208, 80)',
			nutrition: 3,
			prices: {
				2021: 7.2756/pound,
				2019: 13.9,
			},
			production: 1.8e6,
			rgb: 'rgb(255, 245, 224)',
			temperatures: {
				boil: 3186,
				melt: 1728,
			},
		},
	},
	{
		z: 29,
		name: 'Copper',
		symbol: 'Cu',
		mass: 63.546,
		group: 11,
		period: 4,
		properties: {
			abundance: {
				earth: 25e-6,
				human: 1.04e-7,
				universe: 6e-8,
			},
			biologicalHalfLife: 55*day, // personal estimate; 72 mg copper per person, 0.9 mg/day per person
			categories: {
				coinageMetal: true,
				nativeMetal: true,
				nobleMetal: 0.5,
			},
			density: 8960,
			discovery: -9000,
			modelColor: 'rgb(200, 128, 51)',
			nobleMetal: 2,
			nutrition: 2,
			prices: {
				2021: 4.0547/pound,
				2019: 6,
			},
			production: 15.1e6,
			rgb: 'rgb(255, 121, 76)',
			temperatures: {
				boil: 2835,
				melt: 1357.77,
			},
			toxicity: 30e-6, // Copper sulfate, rat
		},
	},
	{
		z: 30,
		name: 'Zinc',
		symbol: 'Zn',
		mass: 65.38,
		group: 12,
		period: 4,
		properties: {
			abundance: {
				earth: 16e-6,
				human: 3.1e-6,
				universe: 3e-7,
			},
			biologicalHalfLife: 200*day, // personal estimate; 2.3 g zinc per person, 8 mg/day per person
			categories: {
				coinageMetal: 0.5, // us coins
				nativeMetal: 0.5,
			},
			density: 7134,
			discovery: -1000,
			modelColor: 'rgb(125, 128, 176)',
			nutrition: 2,
			prices: {
				2021: 1.2474/pound,
				2019: 2.55,
			},
			production: 11.2e6,
			temperatures: {
				boil: 1180,
				melt: 692.88,
			},
		},
	},
	{
		z: 31,
		name: 'Gallium',
		symbol: 'Ga',
		mass: 69.723,
		group: 13,
		period: 4,
		properties: {
			abundance: {
				earth: 1e-6,
				human: 7e-6,
				universe: 1e-8,
			},
			categories: {
				preciousMetal: 0.5,
			},
			density: 5907,
			discovery: 1875,
			modelColor: 'rgb(194, 143, 143)',
			prices: {
				2020: 148,
			},
			production: 184,
			temperatures: {
				boil: 2673,
				melt: 692.88,
			},
		},
	},
	{
		z: 32,
		name: 'Germanium',
		symbol: 'Ge',
		mass: 72.630,
		group: 14,
		period: 4,
		properties: {
			abundance: {
				earth: 2.5e-6,
				human: 6e-10,
				universe: 2e-7,
			},
			categories: {
				metalloid: true,
				preciousMetal: 0.5,
			},
			density: 5323,
			discovery: 1886,
			modelColor: 'rgb(102, 143, 143)',
			nutrition: 4,
			prices: {
				2020: 962,
			},
			production: 118,
			temperatures: {
				boil: 3106,
				melt: 1211.4,
			},
		},
	},
	{
		z: 33,
		name: 'Arsenic',
		symbol: 'As',
		mass: 74.921595,
		group: 15,
		period: 4,
		properties: {
			abundance: {
				earth: 590e-9,
				human: 8.9e-10,
				universe: 8e-9,
			},
			categories: {
				metalloid: true,
				nativeMetal: 0.5,
				pnictogen: true,
			},
			density: 5776,
			discovery: 815,
			modelColor: 'rgb(189, 128, 227)',
			nobleMetal: 3,
			nutrition: 4,
			prices: {
				2020: 1.15,
			},
			production: 33e3, // https://pubs.usgs.gov/periodicals/mcs2020/mcs2020-arsenic.pdf
			temperatures: {
				boil: 887,
				melt: 887, // sublimates
			},
			toxicity: 763e-6, // rat, oral
		},
	},
	{
		z: 34,
		name: 'Selenium',
		symbol: 'Se',
		mass: 78.971,
		group: 16,
		period: 4,
		properties: {
			abundance: {
				earth: 890e-9,
				human: 4.5e-10,
				universe: 3e-8,
			},
			biologicalHalfLife: 190*day, // personal estimate; 15 mg selenium per person, 0.055 mg/day per person
			categories: {
				chalcogen: true,
				nativeMetal: 0.5,
				reactiveNonmetal: true,
			},
			density: 4809,
			discovery: 1817,
			modelColor: 'rgb(255, 161, 0)',
			nobleMetal: 3,
			nutrition: 2,
			prices: {
				2019: 21.4,
			},
			production: 2e3,
			temperatures: {
				boil: 958,
				melt: 453,
			},
		},
	},
	{
		z: 35,
		name: 'Bromine',
		symbol: 'Br',
		mass: 79.904,
		group: 17,
		period: 4,
		properties: {
			abundance: {
				earth: 97e-9,
				human: 3e-7,
				universe: 7e-9,
			},
			categories: {
				halogen: true,
				reactiveNonmetal: true,
			},
			density: 3122,
			discovery: 1825,
			modelColor: 'rgb(166, 41, 41)',
			nutrition: 3,
			prices: {
				2019: 4.39,
			},
			production: 556e3,
			rgb: 'rgb(255, 94, 35)',
			temperatures: {
				boil: 332,
				melt: 265.8,
			},
		},
	},
	{
		z: 36,
		name: 'Krypton',
		symbol: 'Kr',
		mass: 83.798,
		group: 18,
		period: 4,
		properties: {
			abundance: {
				earth: 0.0001e-6,
				universe: 4e-8,
			},
			categories: {
				nobleGas: true,
			},
			density: 3.733,
			discovery: 1898,
			modelColor: 'rgb(92, 184, 209)',
			prices: {
				1999: 290,
			},
			temperatures: {
				boil: 119.93,
				melt: 115.79,
			},
		},
	},
	{
		z: 37,
		name: 'Rubidium',
		symbol: 'Rb',
		mass: 85.4678,
		group: 1,
		period: 5,
		properties: {
			abundance: {
				earth: 120e-9,
				human: 3.3e-7,
				universe: 1e-8,
			},
			biologicalHalfLife: 45*day, // Rb-86; http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			categories: {
				alkaliMetal: true,
			},
			density: 1532,
			discovery: 1861,
			nutrition: 4,
			prices: {
				2018: 15500,
			},
			production: 2,
			temperatures: {
				boil: 961,
				melt: 312.46,
			},
		},
	},
	{
		z: 38,
		name: 'Strontium',
		symbol: 'Sr',
		mass: 87.62,
		group: 2,
		period: 5,
		properties: {
			abundance: {
				earth: 3.9e-6,
				human: 3.3e-7,
				universe: 4e-8,
			},
			biologicalHalfLife: 1.8e4*day, // Sr-90; http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			categories: {
				aem: true,
			},
			density: 2640,
			discovery: 1808,
			nutrition: 3,
			prices: {
				2019: 6.61,
			},
			production: 220e3, // https://pubs.usgs.gov/periodicals/mcs2020/mcs2020-strontium.pdf
			temperatures: {
				boil: 1655,
				melt: 1050,
			},
		},
	},
	{
		z: 39,
		name: 'Yttrium',
		symbol: 'Y',
		mass: 88.90584,
		group: 3,
		period: 5,
		properties: {
			abundance: {
				earth: 850e-9,
				human: 6e-10,
				universe: 7e-9,
			},
			categories: {
				rem: true,
			},
			density: 4469,
			discovery: 1843,
			prices: {
				2019: 31,
			},
			production: 200,
			temperatures: {
				boil: 3609,
				melt: 1799,
			},
		},
	},
	{
		z: 40,
		name: 'Zirconium',
		symbol: 'Zr',
		mass: 91.224,
		group: 4,
		period: 5,
		properties: {
			abundance: {
				earth: 2e-6,
				human: 3e-9,
				universe: 5e-8,
			},
			categories: {
				refractoryMetal: 0.5,
			},
			density: 6506,
			discovery: 1824,
			nobleMetal: 0,
			prices: {
				2020: 36.4,
			},
			production: 900e3,
			temperatures: {
				boil: 4682,
				melt: 2128,
			},
		},
	},
	{
		z: 41,
		name: 'Niobium',
		symbol: 'Nb',
		mass: 92.90637,
		group: 5,
		period: 5,
		properties: {
			abundance: {
				earth: 120e-9,
				human: 1e-10,
				universe: 2e-9,
			},
			categories: {
				nativeMetal: 0.5,
				refractoryMetal: true,
			},
			density: 8570,
			discovery: 1864,
			nobleMetal: 0,
			prices: {
				2018: 42.28,
			},
			prices: {
				2020: 73.5,
			},
			production: 44.5e3,
			temperatures: {
				boil: 5017,
				melt: 2750,
			},
		},
	},
	{
		z: 42,
		name: 'Molybdenum',
		symbol: 'Mo',
		mass: 95.95,
		group: 6,
		period: 5,
		properties: {
			abundance: {
				earth: 460e-9,
				human: 4.5e-10,
				universe: 5e-9,
			},
			biologicalHalfLife: 77*day, // personal estimate; 5 mg molybdenum per person, 0.045 mg/day per person
			categories: {
				nativeMetal: 0.5,
				refractoryMetal: true,
			},
			density: 10220,
			discovery: 1781,
			nobleMetal: 0,
			nutrition: 2,
			prices: {
				2021: 12.28/pound,
				2019: 40.1,
			},
			production: 250e3,
			temperatures: {
				boil: 4912,
				melt: 2896,
			},
		},
	},
	{
		z: 43,
		name: 'Technetium',
		symbol: 'Tc',
		mass: 97,
		group: 7,
		period: 5,
		properties: {
			abundance: {
				earth: 0.003e-12, // https://en.wikipedia.org/wiki/Technetium#Occurrence_and_production
			},
			biologicalHalfLife: day, // Tc-99m; http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			categories: {
				refractoryMetal: 0.5,
			},
			density: 11500,
			discovery: 1937,
			nobleMetal: 4,
			prices: {
				2004: 1e5,
			},
			temperatures: {
				boil: 4538,
				melt: 2430,
			},
		},
	},
	{
		z: 44,
		name: 'Ruthenium',
		symbol: 'Ru',
		mass: 101.07,
		group: 8,
		period: 5,
		properties: {
			abundance: {
				earth: 330e-9,
				human: 7.6e-11, // appx
				universe: 4e-9,
			},
			categories: {
				nativeMetal: true,
				nobleMetal: true,
				platinumGroup: true,
				preciousMetal: true,
				refractoryMetal: 0.5,
			},
			density: 12370,
			discovery: 1844,
			nobleMetal: 1,
			prices: {
				2021: 370/ounce,
				2020: 10500,
			},
			production: 12,
			temperatures: {
				boil: 4423,
				melt: 2607,
			},
		},
	},
	{
		z: 45,
		name: 'Rhodium',
		symbol: 'Rh',
		mass: 102.90549,
		group: 9,
		period: 5,
		properties: {
			abundance: {
				earth: 61e-9,
				universe: 6e-10,
			},
			categories: {
				nativeMetal: true,
				nobleMetal: true,
				platinumGroup: true,
				preciousMetal: true,
				refractoryMetal: 0.5,
			},
			density: 12410,
			discovery: 1804,
			nobleMetal: 1,
			prices: {
				2021: 25700/ounce,
				2019: 147e3,
			},
			production: 25,
			temperatures: {
				boil: 3968,
				melt: 2237,
			},
		},
	},
	{
		z: 46,
		name: 'Palladium',
		symbol: 'Pd',
		mass: 106.42,
		group: 10,
		period: 5,
		properties: {
			abundance: {
				earth: 240e-9,
				universe: 2e-9,
			},
			categories: {
				nativeMetal: true,
				nobleMetal: true,
				platinumGroup: true,
				preciousMetal: true,
			},
			density: 12020,
			discovery: 1802,
			nobleMetal: 1,
			prices: {
				2021: 2350/ounce,
				2019: 49.5e3,
			},
			production: 210, // https://pubs.usgs.gov/periodicals/mcs2020/mcs2020-platinum.pdf
			temperatures: {
				boil: 3236,
				melt: 1828.05,
			},
		},
	},
	{
		z: 47,
		name: 'Silver',
		symbol: 'Ag',
		mass: 107.8682,
		group: 11,
		period: 5,
		properties: {
			abundance: {
				earth: 12e-9,
				human: 2e-9,
				universe: 6e-10,
			},
			categories: {
				coinageMetal: true,
				nativeMetal: true,
				nobleMetal: 0.5,
				preciousMetal: true,
			},
			density: 10501,
			discovery: -5000,
			nobleMetal: 2,
			prices: {
				2021: 25.645/ounce,
				2019: 521,
			},
			production: 322e3,
			rgb: 'rgb(255, 248, 239)',
			temperatures: {
				boil: 2435,
				melt: 1234.93,
			},
		},
	},
	{
		z: 48,
		name: 'Cadmium',
		symbol: 'Cd',
		mass: 112.414,
		group: 12,
		period: 5,
		properties: {
			abundance: {
				earth: 18e-9,
				human: 4.5e-8,
				universe: 2e-9,
			},
			biologicalHalfLife: 30*year, // in bone
			categories: {	
				nativeMetal: 0.5,
			},
			density: 8690,
			discovery: 1817,
			nutrition: 5,
			prices: {
				2019: 2.73,
			},
			production: 25e3, // https://pubs.usgs.gov/periodicals/mcs2020/mcs2020-cadmium.pdf
			temperatures: {
				boil: 1040,
				melt: 594.22,
			},
			toxicity: 225e-6, // rat, oral
		},
	},
	{
		z: 49,
		name: 'Indium',
		symbol: 'In',
		mass: 114.818,
		group: 13,
		period: 5,
		properties: {
			abundance: {
				earth: 2e-9,
				human: 4e-10,
				universe: 3e-10,
			},
			categories: {
				nativeMetal: 0.5,
				preciousMetal: 0.5,
			},
			density: 7310,
			discovery: 1867,
			prices: {
				2019: 167,
			},
			production: 476,
			temperatures: {
				boil: 2345,
				melt: 429.75,
			},
		},
	},
	{
		z: 50,
		name: 'Tin',
		symbol: 'Sn',
		mass: 118.71,
		group: 14,
		period: 5,
		properties: {
			abundance: {
				earth: 55e-9,
				human: 6e-9,
				universe: 4e-9,
			},
			biologicalHalfLife: 3.5*day, // rats; oral; diethyltin chloride; https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/biological-half-life
			categories: {
				coinageMetal: true,
				nativeMetal: 0.5,
			},
			density: 7287,
			discovery: -3500,
			nutrition: 4,
			prices: {
				2021: 12.565/pound,
				2019: 18.7,
			},
			production: 340e3,
			temperatures: {
				boil: 2875,
				melt: 505.08,
			},
			toxicity: 200e-6, // "Nausea, vomiting and diarrhea have been reported after ingesting canned food containing 200 mg/kg of tin."
		},
	},
	{
		z: 51,
		name: 'Antimony',
		symbol: 'Sb',
		mass: 121.76,
		group: 15,
		period: 5,
		properties: {
			abundance: {
				earth: 11e-9,
				human: 6e-10,
				universe: 4e-10,
			},
			categories: {
				metalloid: true,
				nativeMetal: 0.5,
				pnictogen: true,
			},
			density: 6685,
			discovery: 815,
			nobleMetal: 3,
			prices: {
				2019: 5.79,
			},
			production: 150e3,
			temperatures: {
				boil: 1860,
				melt: 903.78,
			},
		},
	},
	{
		z: 52,
		name: 'Tellurium',
		symbol: 'Te',
		mass: 127.6,
		group: 16,
		period: 5,
		properties: {
			abundance: {
				earth: 61e-9,
				human: 2e-10,
				universe: 9e-9,
			},
			categories: {
				chalcogen: true,
				metalloid: true,
				nativeMetal: 0.5,
			},
			density: 6232,
			discovery: 1782,
			nobleMetal: 3,
			prices: {
				2019: 63.5,
			},
			production: 122,
			temperatures: {
				boil: 1261,
				melt: 722.66,
			},
		},
	},
	{
		z: 53,
		name: 'Iodine',
		symbol: 'I',
		mass: 126.90447,
		group: 17,
		period: 5,
		properties: {
			abundance: {
				earth: 10e-9,
				human: 7.5e-9,
				universe: 1e-9,
			},
			biologicalHalfLife: 66.1*day, // https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/biological-half-life
			categories: {
				halogen: true,
				reactiveNonmetal: true,
			},
			density: 4930,
			discovery: 1811,
			nutrition: 2,
			prices: {
				2019: 35,
			},
			production: 28e3, // https://pubs.usgs.gov/periodicals/mcs2020/mcs2020-iodine.pdf
			rgb: 'rgb(216, 229, 255)',
			temperatures: {
				boil: 457.4,
				melt: 386.85,
			},
		},
	},
	{
		z: 54,
		name: 'Xenon',
		symbol: 'Xe',
		mass: 131.293,
		group: 18,
		period: 5,
		properties: {
			abundance: {
				earth: 0.00003e-6,
				universe: 1e-8,
			},
			categories: {
				nobleGas: true,
			},
			density: 5.887,
			discovery: 1898,
			prices: {
				1999: 1800,
			},
			production: 40,
			temperatures: {
				boil: 165.03,
				melt: 161.4,
			},
		},
	},
	// period 6
	{
		z: 55,
		name: 'Cesium',
		symbol: 'Cs',
		mass: 132.90545196,
		group: 1,
		period: 6,
		properties: {
			abundance: {
				earth: 7e-9,
				human: 1e-9,
				universe: 8e-10,
			},
			biologicalHalfLife: 2.5*month, // 1-4 mos
			categories: {
				alkaliMetal: true,
			},
			density: 1873,
			discovery: 1882,
			prices: {
				2018: 61.8e3,
			},
			rgb: 'rgb(255, 212, 153)',
			toxicity: 2.3e-3, // https://en.wikipedia.org/wiki/Caesium#Health_and_safety_hazards
		},
	},
	{
		z: 56,
		name: 'Barium',
		symbol: 'Ba',
		mass: 137.327,
		group: 2,
		period: 6,
		properties: {
			abundance: {
				earth: 850e-9,
				human: 1.2e-8,
				universe: 1e-8,
			},
			biologicalHalfLife: 65*day, // Ba-140; http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			categories: {
				aem: true,
			},
			density: 3594,
			discovery: 1808,
			prices: {
				2016: 0.261,
			},
		},
	},
	{
		z: 57,
		name: 'Lanthanum',
		symbol: 'La',
		mass: 138.90547,
		period: 6,
		properties: {
			abundance: {
				earth: 82e-9,
				human: 4e-10,
				universe: 2e-9,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 6145,
			discovery: 1841,
			nutrition: 5,
			prices: {
				2020: 4.85,
			},
		},
	},
	{
		z: 58,
		name: 'Cerium',
		symbol: 'Ce',
		mass: 140.116,
		period: 6,
		properties: {
			abundance: {
				earth: 210e-9,
				human: 2e-8,
				universe: 1e-8,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 6770,
			discovery: 1838,
			nutrition: 5,
			prices: {
				2020: 31.4,
			},
		},
	},
	{
		z: 59,
		name: 'Praseodymium',
		symbol: 'Pr',
		mass: 140.90766,
		period: 6,
		properties: {
			abundance: {
				earth: 31e-9,
				universe: 2e-9,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 6773,
			discovery: 1885,
			nutrition: 5,
			prices: {
				2019: 103,
			},
		},
	},
	{
		z: 60,
		name: 'Neodymium',
		symbol: 'Nd',
		mass: 144.242,
		period: 6,
		properties: {
			abundance: {
				earth: 150e-9,
				universe: 1e-8,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 7007,
			discovery: 1885,
			nutrition: 5,
			prices: {
				2019: 57.5,
			},
			production: 7000,
		},
	},
	{
		z: 61,
		name: 'Prometheum',
		symbol: 'Pm',
		mass: 145,
		period: 6,
		properties: {
			abundance: {
				earth: 2e-23,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 7260,
			discovery: 1945,
			prices: {
				2003: 460e3,
			},
		}
	},
	{
		z: 62,
		name: 'Samarium',
		symbol: 'Sm',
		mass: 150.36,
		period: 6,
		properties: {
			abundance: {
				earth: 47e-9,
				human: 3e-11,
				universe: 5e-9,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 7520,
			discovery: 1879,
			nutrition: 5,
			prices: {
				2019: 13.9,
			},
			production: 700,
		},
	},
	{
		z: 63,
		name: 'Europium',
		symbol: 'Eu',
		mass: 151.964,
		period: 6,
		properties: {
			abundance: {
				earth: 17e-9,
				universe: 5e-10,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 5243,
			discovery: 1901,
			prices: {
				2020: 31.4,
			},
		},
	},
	{
		z: 64,
		name: 'Gadolinium',
		symbol: 'Gd',
		mass: 157.25,
		period: 6,
		properties: {
			abundance: {
				earth: 61e-9,
				universe: 2e-9,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 7895,
			discovery: 1886,
			prices: {
				2020: 28.6,
			},
		},
	},
	{
		z: 65,
		name: 'Terbium',
		symbol: 'Tb',
		mass: 158.925354,
		period: 6,
		properties: {
			abundance: {
				earth: 11e-9,
				universe: 5e-10,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 8229,
			discovery: 1886,
			prices: {
				2019: 658,
			},
		},
	},
	{
		z: 66,
		name: 'Dysprosium',
		symbol: 'Dy',
		mass: 162.5,
		period: 6,
		properties: {
			abundance: {
				earth: 74e-9,
				universe: 2e-9,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 8550,
			discovery: 1886,
			prices: {
				2019: 307,
			},
			production: 100,
		},
	},
	{
		z: 67,
		name: 'Holmium',
		symbol: 'Ho',
		mass: 164.930328,
		period: 6,
		properties: {
			abundance: {
				earth: 16e-9,
				universe: 5e-10,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 8795,
			discovery: 1879,
			prices: {
				2020: 57.1,
			},
		},
	},
	{
		z: 68,
		name: 'Erbium',
		symbol: 'Er',
		mass: 167.259,
		period: 6,
		properties: {
			abundance: {
				earth: 47e-9,
				universe: 2e-9,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 9066,
			discovery: 1879,
			prices: {
				2020: 26.4,
			},
		},
	},
	{
		z: 69,
		name: 'Thulium',
		symbol: 'Tm',
		mass: 168.934218,
		period: 6,
		properties: {
			abundance: {
				earth: 7e-9,
				universe: 1e-10,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 9321,
			discovery: 1879,
			prices: {
				2003: 3000,
			},
		},
	},
	{
		z: 70,
		name: 'Ytterbium',
		symbol: 'Yb',
		mass: 173.045,
		period: 6,
		properties: {
			abundance: {
				earth: 45e-9,
				universe: 2e-9,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 6965,
			discovery: 1906,
			prices: {
				2020: 17.1,
			},
		},
	},
	{
		z: 71,
		name: 'Lutetium',
		symbol: 'Lu',
		mass: 174.9668,
		group: 3,
		period: 6,
		properties: {
			abundance: {
				earth: 7e-9,
				universe: 1e-10,
			},
			categories: {
				lanthanide: true,
				rem: true,
			},
			density: 9840,
			discovery: 1906,
			prices: {
				2020: 643,
			},
		},
	},
	{
		z: 72,
		name: 'Hafnium',
		symbol: 'Hf',
		mass: 178.486,
		group: 4,
		period: 6,
		properties: {
			abundance: {
				earth: 28e-9,
				universe: 7e-10,
			},
			categories: {
				refractoryMetal: 0.5,
			},
			density: 13310,
			discovery: 1922,
			nobleMetal: 0,
			prices: {
				2017: 900,
			},
			production: 10,
		},
	},
	{
		z: 73,
		name: 'Tantalum',
		symbol: 'Ta',
		mass: 180.94788,
		group: 5,
		period: 6,
		properties: {
			abundance: {
				earth: 4e-9,
				human: 3e-9,
				universe: 8e-11,
			},
			categories: {
				nativeMetal: 0.5,
				refractoryMetal: true,
			},
			density: 16654,
			discovery: 1802,
			nobleMetal: 0,
			prices: {
				2019: 305,
				2018: 151.8,
			},
			production: 1.8e3, // https://pubs.usgs.gov/periodicals/mcs2020/mcs2020-tantalum.pdf
		},
	},
	{
		z: 74,
		name: 'Tungsten',
		symbol: 'W',
		mass: 183.84,
		group: 6,
		period: 6,
		properties: {
			abundance: {
				earth: 24e-9,
				human: 3e-10,
				universe: 5e-10,
			},
			categories: {
				nativeMetal: 0.5,
				refractoryMetal: true,
			},
			density: 19250,
			discovery: 1783,
			nobleMetal: 0,
			nutrition: 5,
			prices: {
				2019: 35.3,
				2018: 30.3,
			},
			production: 37400,
			toxicity: 59e-6, // https://en.wikipedia.org/wiki/Tungsten#Health_factors
		},
	},
	{
		z: 75,
		name: 'Rhenium',
		symbol: 'Re',
		mass: 186.207,
		group: 7,
		period: 6,
		properties: {
			abundance: {
				earth: 10e-9,
				universe: 2e-10,
			},
			categories: {
				nativeMetal: 0.5,
				nobleMetal: 0.5,
				preciousMetal: true,
				refractoryMetal: true,
			},
			density: 21020,
			discovery: 1919,
			nobleMetal: 2,
			prices: {
				2020: 3580,
			},
			production: 45,
			toxicity: 280e-6, // https://en.wikipedia.org/wiki/Rhenium#Precautions
		},
	},
	{
		z: 76,
		name: 'Osmium',
		symbol: 'Os',
		mass: 190.23,
		group: 8,
		period: 6,
		properties: {
			abundance: {
				earth: 120e-9,
				universe: 3e-9,
			},
			categories: {
				nativeMetal: true,
				nobleMetal: true,
				platinumGroup: true,
				preciousMetal: true,
				refractoryMetal: 0.5,
			},
			density: 22590,
			discovery: 1803,
			nobleMetal: 1,
			prices: {
				2018: 400/ounce,
				2016: 12e3,
			},
			production: 1,
		},
	},
	{
		z: 77,
		name: 'Iridium',
		symbol: 'Ir',
		mass: 192.217,
		group: 9,
		period: 6,
		properties: {
			abundance: {
				earth: 120e-9,
				human: 20e-12, // https://en.wikipedia.org/wiki/Iridium#Precautions
				universe: 2e-9,
			},
			categories: {
				nativeMetal: true,
				nobleMetal: true,
				platinumGroup: true,
				preciousMetal: true,
				refractoryMetal: 0.5,
			},
			density: 22560,
			discovery: 1803,
			nobleMetal: 1,
			prices: {
				2021: 5500/ounce,
				2020: 55850,
			},
			production: 3,
		},
	},
	{
		z: 78,
		name: 'Platinum',
		symbol: 'Pt',
		mass: 195.084,
		group: 10,
		period: 6,
		properties: {
			abundance: {
				earth: 250e-9,
				universe: 5e-9,
			},
			categories: {
				nativeMetal: true,
				nobleMetal: true,
				platinumGroup: true,
				preciousMetal: true,
			},
			density: 21460,
			discovery: 1735,
			nobleMetal: 1,
			prices: {
				2021: 1227/ounce,
				2020: 27800,
			},
			production: 239,
		},
	},
	{
		z: 79,
		name: 'Gold',
		symbol: 'Au',
		mass: 196.96657,
		group: 11,
		period: 6,
		properties: {
			abundance: {
				earth: 21e-9,
				human: 3e-9,
				universe: 6e-10,
			},
			biologicalHalfLife: 280*day, // Au-198; http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			categories: {
				nativeMetal: true,
				nobleMetal: true,
				coinageMetal: true,
				preciousMetal: true,
			},
			density: 19282,
			discovery: -6000,
			nobleMetal: 2,
			prices: {
				2021: 1711.5/ounce,
				2020: 44800,
			},
			production: 2310,
			rgb: 'rgb(255, 211, 109)',
		},
	},
	{
		z: 80,
		name: 'Mercury',
		symbol: 'Hg',
		mass: 200.592,
		group: 12,
		period: 6,
		properties: {
			abundance: {
				earth: 3e-9,
				human: 8.9e-10,
				universe: 1e-9,
			},
			biologicalHalfLife: 65*day, // as methylmercury; in blood
			categories: {	
				nativeMetal: 0.5,
				nobleMetal: 0.5,
			},
			density: 13533.6,
			discovery: -1500,
			nobleMetal: 2,
			prices: {
				2017: 30.2,
			},
			production: 4e6, // https://pubs.usgs.gov/periodicals/mcs2020/mcs2020-mercury.pdf
		},
	},
	{
		z: 81,
		name: 'Thallium',
		symbol: 'Tl',
		mass: 204.38,
		group: 13,
		period: 6,
		properties: {
			abundance: {
				earth: 2e-9,
				human: 7e-11,
				universe: 5e-10,
			},
			density: 11850,
			discovery: 1862,
			prices: {
				2017: 4200,
			},
			production: 10,
			rgb: 'rgb(255, 252, 253)',
		},
	},
	{
		z: 82,
		name: 'Lead',
		symbol: 'Pb',
		mass: 207.2,
		group: 14,
		period: 6,
		properties: {
			abundance: {
				earth: 29e-9,
				human: 4.5e-8,
				universe: 1e-8,
			},
			biologicalHalfLife: 32*day, // 28-36 d in blood
			categories: {
				nativeMetal: 0.5,
			},
			density: 11342,
			discovery: -7000,
			nutrition: 4,
			prices: {
				2021: 0.8729/pound,
				2019: 2,
			},
			production: 8725e3,
			rgb: 'rgb(255, 255, 255)',
		},
	},
	{
		z: 83,
		name: 'Bismuth',
		symbol: 'Bi',
		mass: 208.9804,
		group: 15,
		period: 6,
		properties: {
			abundance: {
				earth: 1e-9,
				human: 2e-10,
				universe: 7e-10,
			},
			biologicalHalfLife: 5*day, // https://en.wikipedia.org/wiki/Bismuth#Toxicology_and_ecotoxicology
			categories: {
				nativeMetal: 0.5,
				pnictogen: true,
			},
			density: 9807,
			discovery: 1000,
			nobleMetal: 3,
			prices: {
				2019: 6.36,
			},
			production: 15e3,
			rgb: 'rgb(255, 245, 232)',
		},
	},
	{
		z: 84,
		name: 'Polonium',
		symbol: 'Po',
		mass: 209,
		group: 16,
		period: 6,
		properties: {
			abundance: {
				earth: 0.2e-2 * 9e-13, // https://en.wikipedia.org/wiki/Polonium#Occurrence_and_production
			},
			biologicalHalfLife: 40*day, // 30-50 d
			categories: {
				chalcogen: true,
				metalloid: 0.5,
			},
			density: 9320,
			discovery: 1902,
			nobleMetal: 4,
			/* prices: {
				2004: 49.2e12,
			}, */
			production: 100e-6,
			rgb: 'rgb(234, 242, 255)',
			toxicity: 8.7e-12, //  rats were given a fatal dose of 1.45 MBq/kg (8.7 ng/kg) of 210Po;
		},
	},
	{
		z: 85,
		name: 'Astatine',
		symbol: 'At',
		mass: 210,
		group: 17,
		period: 6,
		properties: {
			abundance: {
				earth: 1e-24, // https://en.wikipedia.org/wiki/Astatine#Natural_occurrence
			},
			categories: {
				halogen: true,
				metalloid: 0.5,
			},
			density: 7000,
			discovery: 1940,
			nobleMetal: 4,
		},
	},
	{
		z: 86,
		name: 'Radon',
		symbol: 'Rn',
		mass: 222,
		group: 18,
		period: 6,
		properties: {
			abundance: {
				earth: 4e-17,
			},
			categories: {
				nobleGas: true,
			},
			density: 9.73,
			discovery: 1910,
		},
	},
	{
		z: 87,
		name: 'Francium',
		symbol: 'Fr',
		mass: 223,
		group: 1,
		period: 7,
		properties: {
			abundance: {
				earth: 1e-18 * 2e-9, // https://en.wikipedia.org/wiki/Francium#Occurrence
			},
			categories: {
				alkaliMetal: true,
			},
			density: 1870,
			discovery: 1939,
		},
	},
	{
		z: 88,
		name: 'Radium',
		symbol: 'Ra',
		mass: 226,
		group: 2,
		period: 7,
		properties: {
			abundance: {
				earth: 9e-13, // https://en.wikipedia.org/wiki/Radium#Occurrence
				human: 1e-19,
			},
			biologicalHalfLife: 1.6e4*day, // Ra-226; http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			categories: {
				aem: true,
			},
			density: 5500,
			discovery: 1902,
			rgb: 'rgb(255, 233, 198)',
		},
	},
	{
		z: 89,
		name: 'Actinium',
		symbol: 'Ac',
		mass: 227,
		period: 7,
		properties: {
			abundance: {
				earth: 2e-7 * 2e-9, // https://en.wikipedia.org/wiki/Actinium#Occurrence_and_synthesis
			},
			categories: {
				actinide: true,
			},
			density: 10070,
			discovery: 1902,
			/* prices: {
				2004: 29e12,
			}, */
		},
	},
	{
		z: 90,
		name: 'Thorium',
		symbol: 'Th',
		mass: 232.0377,
		period: 7,
		properties: {
			abundance: {
				earth: 6e-9,
				human: 3e-11,
				universe: 4e-10,
			},
			categories: {
				actinide: true,
			},
			density: 11720,
			discovery: 1914,
			prices: {
				2010: 287,
			},
			production: 1.2e3, // US, est. https://pubs.usgs.gov/periodicals/mcs2020/mcs2020-thorium.pdf
			rgb: 'rgb(255, 229, 216)',
		},
	},
	{
		z: 91,
		name: 'Protactinium',
		symbol: 'Pa',
		mass: 231.03588,
		period: 7,
		properties: {
			abundance: {
				earth: 1.4e-12,
			},
			biologicalHalfLife: 25*day, // appx.; https://en.wikipedia.org/wiki/Protactinium#Precautions
			categories: {
				actinide: true,
			},
			density: 15370,
			discovery: 1927,
			prices: {
				2011: 280e3,
			},
			toxicity: 0.5e-9/70, // "The maximum safe dose of Pa in the human body (~70kg) is ... 0.5 micrograms
		}
	},
	{
		z: 92,
		name: 'Uranium',
		symbol: 'U',
		mass: 238.02891,
		period: 7,
		properties: {
			abundance: {
				earth: 2e-9,
				human: 3e-11,
				universe: 2e-10,
			},
			biologicalHalfLife: 15*day, // U-235; http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/biohalf.html
			categories: {
				actinide: true,
			},
			density: 18950,
			discovery: 1841,
			prices: {
				2018: 101,
			},
			production: 50572,
			rgb: 'rgb(255, 251, 242)',
		},
	},
	{
		z: 93,
		name: 'Neptunium',
		symbol: 'Np',
		mass: 237,
		period: 7,
		properties: {
			abundance: {
				earth: 3e-18,
			},
			categories: {
				actinide: true,
			},
			density: 20450,
			discovery: 1940,
			prices: {
				2020: 660e3,
			},
		}
	},
	{
		z: 94,
		name: 'Plutonium',
		symbol: 'Pu',
		mass: 244,
		period: 7,
		properties: {
			abundance: {
				earth: 3e-17,
			},
			biologicalHalfLife: 40*year, // in liver
			/* prices: {
				2019: 6.49e6,
			}, */
			categories: {
				actinide: true,
			},
			density: 19850,
			discovery: 1940,
			rgb: 'rgb(255, 226, 249)',
			toxicity: 5e-6, // "Animal studies found that a few milligrams of plutonium per kilogram of tissue is a lethal dose."
		},
	},
	{
		z: 95,
		name: 'Americium',
		symbol: 'Am',
		mass: 243,
		period: 7,
		properties: {
			biologicalHalfLife: 7*day, // "If consumed, most of the americium is excreted within a few days,"
			categories: {
				actinide: true,
			},
			density: 13690,
			discovery: 1944,
			prices: {
				1998: 728e3,
			},
			rgb: 'rgb(255, 233, 224)',
		},
	},
	{
		z: 96,
		name: 'Curium',
		symbol: 'Cm',
		mass: 247,
		period: 7,
		properties: {
			categories: {
				actinide: true,
			},
			density: 13510,
			discovery: 1944,
			/* prices: {
				2004: 185e6,
			}, */
			rgb: 'rgb(255, 255, 216)',
		},
	},
	{
		z: 97,
		name: 'Berkelium',
		symbol: 'Bk',
		mass: 247,
		period: 7,
		properties: {
			categories: {
				actinide: true,
			},
			density: 14790,
			discovery: 1949,
			/* prices: {
				2004: 185e9,
			}, */
		}
	},
	{
		z: 98,
		name: 'Californium',
		symbol: 'Cf',
		mass: 251,
		period: 7,
		properties: {
			categories: {
				actinide: true,
			},
			density: 15100,
			discovery: 1950,
			/* prices: {
				2004: 906e9,
			}, */
			production: 0.275e-6,
		},
	},
	{
		z: 99,
		name: 'Einsteinium',
		symbol: 'Es',
		mass: 252,
		period: 7,
		properties: {
			categories: {
				actinide: true,
			},
			density: 8840,
			discovery: 1952,
		}
	},
	{
		z: 100,
		name: 'Fermium',
		symbol: 'Fm',
		mass: 257,
		period: 7,
		properties: {
			categories: {
				actinide: true,
			},
			density: 9700,
			discovery: 1952,
		}
	},
	{
		z: 101,
		name: 'Mendelevium',
		symbol: 'Md',
		mass: 258,
		period: 7,
		properties: {
			categories: {
				actinide: true,
			},
			density: 10300,
			discovery: 1955,
		}
	},
	{
		z: 102,
		name: 'Nobelium',
		symbol: 'No',
		mass: 259,
		period: 7,
		properties: {
			categories: {
				actinide: true,
			},
			density: 9900,
			discovery: 1966,
		}
	},
	{
		z: 103,
		name: 'Lawrencium',
		symbol: 'Lr',
		mass: 266,
		group: 3,
		period: 7,
		properties: {
			categories: {
				actinide: true,
			},
			density: 16100,
			discovery: 1961,
		}
	},
	{
		z: 104,
		name: 'Rutherfordium',
		symbol: 'Rf',
		mass: 267,
		group: 4,
		period: 7,
		properties: {
			density: 23200,
			discovery: 1969,
		}
	},
	{
		z: 105,
		name: 'Dubnium',
		symbol: 'Db',
		mass: 268,
		group: 5,
		period: 7,
		properties: {
			density: 29300,
			discovery: 1970,
		}
	},
	{
		z: 106,
		name: 'Seaborgium',
		symbol: 'Sg',
		mass: 269,
		group: 6,
		period: 7,
		properties: {
			density: 35000,
			discovery: 1974,
		}
	},
	{
		z: 107,
		name: 'Bohrium',
		symbol: 'Bh',
		mass: 278,
		group: 7,
		period: 7,
		properties: {
			density: 37100,
			discovery: 1981,
			nobleMetal: 5,
		},
	},
	{
		z: 108,
		name: 'Hassium',
		symbol: 'Hs',
		mass: 269,
		group: 8,
		period: 7,
		properties: {
			density: 41000,
			discovery: 1984,
			nobleMetal: 5,
		},
	},
	{
		z: 109,
		name: 'Meitnerium',
		symbol: 'Mt',
		mass: 282,
		group: 9,
		period: 7,
		properties: {
			density: 37400,
			discovery: 1982,
			nobleMetal: 5,
		},
	},
	{
		z: 110,
		name: 'Darmstadtium',
		symbol: 'Ds',
		mass: 281,
		group: 10,
		period: 7,
		properties: {
			density: 34800,
			discovery: 1994,
			nobleMetal: 5,
		},
	},
	{
		z: 111,
		name: 'Roentgenium',
		symbol: 'Rg',
		mass: 286,
		group: 11,
		period: 7,
		properties: {
			density: 28700,
			discovery: 1994,
			nobleMetal: 5,
		},
	},
	{
		z: 112,
		name: 'Copernicium',
		symbol: 'Cn',
		mass: 285,
		group: 12,
		period: 7,
		properties: {
			density: 14000,
			discovery: 1996,
			nobleMetal: 5,
		},
	},
	{
		z: 113,
		name: 'Nihonium',
		symbol: 'Nh',
		mass: 286,
		group: 13,
		period: 7,
		properties: {
			density: 16000,
			discovery: 2003,
			nobleMetal: 5,
		},
	},
	{
		z: 114,
		name: 'Flerovium',
		symbol: 'Fl',
		mass: 290,
		group: 14,
		period: 7,
		properties: {
			density: 9928,
			discovery: 1999,
			nobleMetal: 5,
		},
	},
	{
		z: 115,
		name: 'Moscovium',
		symbol: 'Mc',
		mass: 290,
		group: 15,
		period: 7,
		properties: {
			categories: {
				pnictogen: true,
			},
			density: 13500,
			discovery: 2003,
		},
	},
	{
		z: 116,
		name: 'Livermorium',
		symbol: 'Lv',
		mass: 294,
		group: 16,
		period: 7,
		properties: {
			categories: {
				chalcogen: true,
			},
			density: 12900,
			discovery: 2000,
			nobleMetal: 5,
		},
	},
	{
		z: 117,
		name: 'Tennessine',
		symbol: 'Ts',
		mass: 294,
		group: 17,
		period: 7,
		properties: {
			categories: {
				halogen: true,
			},
			density: 7200,
			discovery: 2009,
		},
	},
	{
		z: 118,
		name: 'Oganesson',
		symbol: 'Og',
		mass: 295,
		group: 18,
		period: 7,
		properties: {
			categories: {
				nobleGas: true,
			},
			density: 7000,
			discovery: 2002,
		},
	},/* somehow this actually doesn't break the table!!! wow
	{
		z: 119,
		name: 'Ununennium',
		symbol: 'Uue',
		mass: 315, // predicted to be the most stable
		group: 1,
		period: 8,
		properties: {
			categories: {
				alkaliMetal: true,
			},
			density: 3000,
		},
	},
	{
		z: 120,
		name: 'Unbinilium',
		symbol: 'Ubn',
		mass: 317, // predicted to be the most stable
		group: 2,
		period: 8,
		properties: {
			categories: {
				aem: true,
			},
			density: 7000,
		},
	},
	{
		z: 121,
		name: 'Unbiunium',
		symbol: 'Ubu',
		mass: 319, // predicted to be the most stable
		period: 8,
	},
	{
		z: 122,
		name: 'Unbibium',
		symbol: 'Ubb',
		mass: 321, // predicted to be the most stable
		period: 8,
	},
	{
		z: 123,
		name: 'Unbitrium',
		symbol: 'Ubt',
		mass: 321, // predicted to be the most stable
		period: 8,
	},
	{
		z: 124,
		name: 'Unbiquadium',
		symbol: 'Ubq',
		mass: 323, // predicted to be the most stable
		period: 8,
	},
	{
		z: 125,
		name: 'Unbipentium',
		symbol: 'Ubp',
		mass: 325, // predicted to be the most stable
		period: 8,
	},
	{
		z: 126,
		name: 'Unbihexium',
		symbol: 'Ubh',
		mass: 325, // predicted to be the most stable
		period: 8,
	},
	{
		z: 139,
		name: 'Untriennium',
		symbol: 'Ute',
		mass: 343, // 10/7 z + 145
		period: 8,
	},
	{
		z: 153,
		name: 'Unpenttrium',
		symbol: 'Upt',
		mass: 365, // 10/7 z + 145
		group: 3,
		period: 8,
	},
	*/
];