/* global pi */
/* exported data */
'use strict';

const au = 149597870700; // m; exact
const ly = 9460730472580800; // m; exact
const pc = 648e3*au/pi; // m; exact

const data = [
	// Sun, as an example
	{
		name: 'Sun',
		type: 'sun',
		dist: 0, // in m
		ra: [0, 0, 0], // h min s
		dec: [0, 0, 0], // deg arcmin arcsec
		img: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Sun_white.jpg',
	},
	{
		name: 'Sgr A*',
		type: 'star',
		dist: 26673*ly,
		ra: [17, 45, 40.0409],
		dec: [-29, 0, 28.118],
		img: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Sagittarius_A%2A.jpg',
	},
	// Some distant solar system objects, for scale...
	{
		name: 'Neptune',
		type: 'planet',
		dist: 30.87*au,
		ra: [23, 29, 50.3], // location on 29 Mar 2021
		dec: [-4, 25, 23.8],
		img: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
	},
	{
		name: 'Planet Nine',
		type: 'planet',
		dist: 630*au,
		ra: [2, 0, 0], // est.
		dec: [-20, 0, 0],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Planet_nine_artistic_plain.png/640px-Planet_nine_artistic_plain.png',
	},
	// main
	// nearby stars (sort by dist)
	{
		name: 'Proxima Centauri',
		type: 'star',
		dist: 4.2465*ly,
		ra: [14, 29, 42.94853],
		dec: [-60, 40, 46.1631],
		img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/New_shot_of_Proxima_Centauri%2C_our_nearest_neighbour.jpg',
	},
	{
		name: 'Alpha Centauri',
		type: 'star',
		dist: 4.37*ly,
		ra: [14, 39, 36],
		dec: [-60, 50, 9],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Alpha%2C_Beta_and_Proxima_Centauri_%281%29.jpg/640px-Alpha%2C_Beta_and_Proxima_Centauri_%281%29.jpg',
	},
	{
		name: 'Sirius',
		type: 'star',
		dist: 8.6*ly,
		ra: [6, 45, 8.91728],
		dec: [-16, 42, 58.0171],
	},
	{
		name: 'Canopus',
		type: 'star',
		dist: 310*ly,
		ra: [6, 23, 57.10988],
		dec: [-52, 41, 44.381],
	},
	{
		name: 'Polaris',
		type: 'star',
		dist: 378*ly,
		ra: [2, 31, 49.09],
		dec: [89, 15, 50.8],
	},
	{
		name: 'Betelgeuse',
		type: 'star',
		dist: 548*ly,
		ra: [5, 55, 10.30536],
		dec: [7, 24, 25.4304],
	},
	{
		name: 'Antares',
		type: 'star',
		dist: 550*ly,
		ra: [16, 29, 24.4597],
		dec: [-26, 25, 55.2094],
	},
	{
		name: 'Lambda Scorpii',
		type: 'star',
		dist: 570*ly,
		ra: [17, 33, 36.52],
		dec: [-37, 6, 13.76],
	},
	{
		name: 'Rigel',
		type: 'star',
		dist: 860*ly,
		ra: [5, 14, 32.2721],
		dec: [-8, 12, 5.8981],
	},
	{
		name: 'Zeta Puppis',
		type: 'star',
		dist: 1080*ly,
		ra: [8, 3, 35.1],
		dec: [-40, 0, 11.6],
	},
	{
		name: 'Gamma Velorum',
		type: 'star',
		dist: 379*pc, // ~1237
		ra: [8, 9, 31.95013],
		dec: [-47, 20, 11.7108],
	},
	{
		name: 'Mu Sagittarii',
		type: 'star',
		dist: 920*ly,
		ra: [18, 13, 45.8],
		dec: [-21, 3, 32],
	},
	{
		name: 'Mintaka',
		type: 'star',
		dist: 1200*ly,
		ra: [5, 32, 0.40009],
		dec: [0, -17, -56.7424],
	},
	{
		name: 'Alnitak',
		type: 'star',
		dist: 1260*ly,
		ra: [5, 40, 45.52666],
		dec: [-1, 56, 34.2649],
		img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Ngc2024_2mass.jpg',
	},
	{
		name: 'Eta Leonis',
		type: 'star',
		dist: 1270*ly,
		ra: [10, 7, 19.95186],
		dec: [16, 45, 45.592],
	},
	{
		name: 'Wezen',
		type: 'star',
		dist: 1600*ly,
		ra: [7, 8, 23.48608],
		dec: [-26, 23, 35.5474],
	},
	{
		name: 'Gamma Cygni',
		type: 'star',
		dist: 1800*ly,
		ra: [20, 22, 13.70184],
		dec: [40, 15, 24.045],
	},
	{
		name: 'Alnilam',
		type: 'star',
		dist: 2000*ly,
		ra: [5, 36, 12.8],
		dec: [-1, 12, 6.9],
	},
	{
		name: 'Aludra',
		type: 'star',
		dist: 2000*ly,
		ra: [7, 24, 5.70228],
		dec: [-29, 18, 11.1798],
	},
	{
		name: 'Deneb',
		type: 'star',
		dist: 2615*ly,
		ra: [20, 41, 25.9],
		dec: [45, 16, 49],
	},
	{
		name: 'Chi Aurigae',
		type: 'star',
		dist: 3032*ly,
		ra: [5, 32, 43.67312],
		dec: [32, 11, 31.2753],
	},
	{
		name: 'Mu Cephei',
		type: 'star',
		dist: 940*pc, // ~3066 ly
		ra: [21, 43, 30.4609],
		dec: [58, 46, 48.166],
	},
	{
		name: 'Rho Cassiopeiae',
		type: 'star',
		dist: 1050*pc, // ~3425 ly
		ra: [23, 54, 23],
		dec: [57, 29, 58],
	},
	{
		name: 'Kappa Cassiopeiae',
		type: 'star',
		dist: 4e3*ly,
		ra: [0, 32, 59.991],
		dec: [62, 55, 54.42],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Kappa_Cassiopeiae.jpg/631px-Kappa_Cassiopeiae.jpg',
	},
	{
		name: 'Alpha Camelopardalis',
		type: 'star',
		dist: 6e3*ly,
		ra: [4, 54, 3.01040],
		dec: [66, 20, 33.6365],
	},
	// not stars, but not in NGC; sort by dist
	{
		name: 'Pleiades',
		type: 'open cluster',
		dist: 444*ly,
		ra: [3, 47, 24],
		dec: [24, 7, 0],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/640px-Pleiades_large.jpg',
	},
	{
		name: 'Small Sagittarius Star Cloud',
		type: 'star cloud',
		dist: 1e4*ly,
		ra: [18, 17, 0],
		dec: [-18, 29, 0],
		img: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Messier_24_Colombari_crop_invert.jpg',
	},
	{
		name: 'FSR 1758',
		type: 'globular cluster',
		dist: 11.5e3*ly,
		ra: [17, 31, 12],
		dec: [-39, 48, 30],
	},
	{ // NGC 2392
		name: 'Necklace Nebula',
		type: 'planetary nebula',
		dist: 15e3*ly,
		ra: [19, 43, 59.51104],
		dec: [17, 9, 0.9579],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Necklace_Nebula_by_Hubble.jpg/539px-Necklace_Nebula_by_Hubble.jpg',
	},
	// sort by NGC identifier
	{ // NGC 104
		name: '47 Tucanae',
		type: 'globular cluster',
		dist: 13e3*ly,
		ra: [0, 24, 5.67],
		dec: [-72, 4, 52.6],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Heic1510a.tif/lossy-page1-613px-Heic1510a.tif.jpg',
	},
	{ // NGC 650/651
		name: 'Little Dumbbell Nebula',
		type: 'planetary nebula',
		dist: 2500*ly,
		ra: [1, 42.4, 0],
		dec: [51, 34, 31],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Little_Dumbbell_Nebula_M76_by_Goran_Nilsson%2C_Wim_van_Berlo_%26_Liverpool_Telescope.jpg/606px-Little_Dumbbell_Nebula_M76_by_Goran_Nilsson%2C_Wim_van_Berlo_%26_Liverpool_Telescope.jpg',
	},
	{ // NGC 1499
		name: 'California Nebula',
		type: 'emission nebula',
		dist: 1000*ly,
		ra: [4, 3, 18],
		dec: [36, 25, 18],
		img: 'https://upload.wikimedia.org/wikipedia/commons/4/41/California-nebula.jpeg',
	},
	{ // NGC 1912
		name: 'Messier 38',
		type: 'open cluster',
		dist: 3480*ly,
		ra: [5, 28, 43],
		dec: [35, 51, 18],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/M38_Open_Cluster.jpg/640px-M38_Open_Cluster.jpg',
	},
	{ // NGC 1952
		name: 'Crab Nebula',
		type: 'supernova remnant',
		dist: 6500*ly,
		ra: [5, 34, 31.94],
		dec: [22, 0, 52.2],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/600px-Crab_Nebula.jpg',
	},
	{ // NGC 1960
		name: 'Messier 36',
		type: 'open cluster',
		dist: 4340*ly,
		ra: [5, 36, 18],
		dec: [34, 8, 24],
		img: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/M36_2mass.jpg',
	},
	{ // NGC 2024
		name: 'Flame Nebula',
		type: 'emission nebula',
		dist: 1350*ly,
		ra: [5, 46, 46.7],
		dec: [0, 0, 50],
		img: 'https://upload.wikimedia.org/wikipedia/commons/3/36/NASA-FlameNebula-NGC2024-20140507.jpg',
	},
	{ // NGC 2068
		name: 'Messier 78',
		type: 'reflection nebula',
		dist: 1350*ly,
		ra: [5, 41, 54],
		dec: [-1, 51, 0],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Messier_78.jpg/619px-Messier_78.jpg',
	},
	{ // NGC 2070; LMC
		name: 'Tarantula Nebula',
		type: 'emission nebula',
		dist: 160e3*ly,
		ra: [5, 38, 38],
		dec: [-69, 5.7, 0],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tarantula_Nebula_TRAPPIST.jpg/594px-Tarantula_Nebula_TRAPPIST.jpg',
		href: 'https://en.wikipedia.org/wiki/Tarantula_Nebula',
	},
	{ // NGC 2099
		name: 'Messier 37',
		type: 'open cluster',
		dist: 4511*ly,
		ra: [5, 52, 18],
		dec: [32, 33, 2],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/M37_Mazur_full.jpg/618px-M37_Mazur_full.jpg',
	},
	{ // NGC 2237
		name: 'Rosette Nebula',
		type: 'emission nebula',
		dist: 5200*ly,
		ra: [6, 33, 45],
		dec: [4, 49, 54],
		img: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/NGC_2244_Rosette_Nebula.jpg',
	},
	{ // NGC 2392
		name: 'Eskimo Nebula',
		type: 'planetary nebula',
		dist: 6520*ly,
		ra: [7, 29, 10.7669],
		dec: [20, 54, 42.488],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ngc2392.jpg/600px-Ngc2392.jpg',
	},
	{
		name: 'NGC 2547',
		type: 'open cluster',
		dist: 1190*ly,
		ra: [8, 9, 52.36],
		dec: [-49, 10, 35.01],
		img: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Star_cluster_NGC_2547.jpg',
	},
	{ // NGC 3242
		name: 'Ghost of Jupiter',
		type: 'planetary nebula',
		dist: 4800*ly,
		ra: [10, 24, 46.1],
		dec: [-18, 38, 32.6],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/NGC_3242_%22Ghost_of_Jupiter%22.png/619px-NGC_3242_%22Ghost_of_Jupiter%22.png',
	},
	{ // NGC 3372
		name: 'Carina Nebula',
		type: 'emission nebula',
		dist: 8500*ly,
		ra: [10, 45, 8.5],
		dec: [-59, 52, 4],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eagle_Nebula_from_ESO.jpg/600px-Eagle_Nebula_from_ESO.jpg',
	},
	{ // NGC 3587
		name: 'Owl Nebula',
		type: 'planetary nebula',
		dist: 2415*ly,
		ra: [11, 14, 47.734],
		dec: [55, 1, 8.5],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/The_Owl_Nebula_M97_Goran_Nilsson_%26_The_Liverpool_Telescope.jpg/606px-The_Owl_Nebula_M97_Goran_Nilsson_%26_The_Liverpool_Telescope.jpg',
	},
	{ // NGC 5139
		name: 'Omega Centauri',
		type: 'globular cluster',
		dist: 15.8e3*ly,
		ra: [13, 26, 47.28],
		dec: [-47, 28, 46.1],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Omega_Centauri_by_ESO.jpg/638px-Omega_Centauri_by_ESO.jpg',
	},
	{
		name: 'NGC 5460',
		type: 'open cluster',
		dist: 2350*ly,
		ra: [14, 7, 27],
		dec: [-48, 20, 36],
		img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/NGC_5460.png',
	},
	{ // NGC 5272
		name: 'Messier 3',
		type: 'globular cluster',
		dist: 33.9e3*ly,
		ra: [13, 42, 11.62],
		dec: [28, 22, 38.2],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Messier_3_-_Adam_Block_-_Mount_Lemmon_SkyCenter_-_University_of_Arizona.jpg/640px-Messier_3_-_Adam_Block_-_Mount_Lemmon_SkyCenter_-_University_of_Arizona.jpg',
	},
	{ // NGC 5904
		name: 'Messier 5',
		type: 'globular cluster',
		dist: 24.5e3*ly,
		ra: [15, 18, 33.22],
		dec: [2, 4, 51.7],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/M5s.jpg/616px-M5s.jpg',
	},
	{ // NGC 6121
		name: 'Messier 4',
		type: 'globular cluster',
		dist: 7.2e3*ly,
		ra: [16, 23, 35.22],
		dec: [-26, 31, 32.7],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Globular_star_cluster_Messier_4.jpg/621px-Globular_star_cluster_Messier_4.jpg',
	},
	{
		name: 'NGC 6543',
		type: 'planetary nebula',
		dist: 11e3*ly,
		ra: [17, 20, 46.3],
		dec: [51, 45, 16],
		img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/NGC_6326.jpg',
	},
	{ // NGC 6334
		name: 'Cat&apos;s Paw Nebula',
		type: 'emission nebula',
		dist: 5540*ly,
		ra: [17, 20, 50.9],
		dec: [-36, 6, 54],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/PIA22568-CatsPawNebula-Spitzer-20181023.jpg/800px-PIA22568-CatsPawNebula-Spitzer-20181023.jpg',
	},
	{ // NGC 6405
		name: 'Butterfly Cluster',
		type: 'open cluster',
		dist: 1590*ly,
		ra: [17, 40.1, 0],
		dec: [-32, 13, 0],
		img: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/M6a.jpg',
	},
	{ // NGC 6514
		name: 'Trifid Nebula',
		type: 'emission nebula',
		dist: 4100*ly,
		ra: [18, 2, 23],
		dec: [-23, 1, 48],
		img: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Trifid.nebula.arp.750pix.jpg',
	},
	{ // NGC 6523
		name: 'Lagoon Nebula',
		type: 'emission nebula',
		dist: 4100*ly,
		ra: [18, 3, 37],
		dec: [-24, 23, 12],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/VST_images_the_Lagoon_Nebula.jpg/800px-VST_images_the_Lagoon_Nebula.jpg',
	},
	{ // NGC 6531
		name: 'Messier 21',
		type: 'open cluster',
		dist: 3930*ly,
		ra: [18, 4, 13],
		dec: [-22, 29, 24],
		img: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Messier_21.jpg',
	},
	{ // NGC 6543
		name: 'Cat&apos; Eye Nebula',
		type: 'planetary nebula',
		dist: 3300*ly,
		ra: [17, 58, 33.423],
		dec: [66, 37, 59.52],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/NGC6543.jpg/600px-NGC6543.jpg',
	},
	{ // NGC 6611
		name: 'Eagle Nebula',
		type: 'emission nebula',
		dist: 5700*ly,
		ra: [18, 18, 48],
		dec: [-13, 49, 0],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eagle_Nebula_from_ESO.jpg/600px-Eagle_Nebula_from_ESO.jpg',
	},
	{ // NGC 6613
		name: 'Messier 18',
		type: 'open cluster',
		dist: 4230*ly,
		ra: [18, 19, 58],
		dec: [-17, 6, 6],
		img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Messier_18.jpg',
	},
	{ // NGC 6618
		name: 'Omega Nebula',
		type: 'emission nebula',
		dist: 5500*ly,
		ra: [18, 20, 26],
		dec: [-16, 10, 36],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/VST_image_of_the_spectacular_star-forming_region_Messier_17_%28Omega_Nebula%29.jpg/600px-VST_image_of_the_spectacular_star-forming_region_Messier_17_%28Omega_Nebula%29.jpg',
	},
	{
		name: 'NGC 6633',
		type: 'open cluster',
		dist: 1040*ly,
		ra: [18, 27.7, 0],
		dec: [6, 34, 0],
		img: 'https://upload.wikimedia.org/wikipedia/commons/1/14/NGC_6633.png',
	},
	{ // NGC 6694
		name: 'Messier 26',
		type: 'open cluster',
		dist: 5160*ly,
		ra: [18, 45, 18],
		dec: [-9, 23, 0],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Messier_26.jpg/600px-Messier_26.jpg',
	},
	{ // NGC 6705
		name: 'Wild Duck Cluster',
		type: 'open cluster',
		dist: 6120*ly,
		ra: [18, 51, 5],
		dec: [-6, 16, 12],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Eso1430a.jpg/684px-Eso1430a.jpg',
	},
	{ // NGC 6715; SagDEG
		name: 'Messier 54',
		type: 'globular cluster',
		dist: 87.4e3*ly,
		ra: [18, 55, 3.33],
		dec: [-30, 28, 47.5],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Messier_54_HST.jpg/612px-Messier_54_HST.jpg',
	},
	{ // NGC 6720
		name: 'Ring Nebula',
		type: 'planetary nebula',
		dist: 2567*ly,
		ra: [18, 53, 35.079],
		dec: [33, 1, 45.03],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/M57_The_Ring_Nebula.JPG/587px-M57_The_Ring_Nebula.JPG',
	},
	{ // NGC 6809
		name: 'Messier 55',
		type: 'globular cluster',
		dist: 17.6e3*ly,
		ra: [19, 39, 59.71],
		dec: [-30, 57, 53.1],
		img: 'https://upload.wikimedia.org/wikipedia/commons/6/65/M55.jpg',
	},
	{ // NGC 6855
		name: 'Dumbbell Nebula',
		type: 'planetary nebula',
		dist: 417*pc,
		ra: [19, 59, 36.34],
		dec: [22, 43, 16.09],
		img: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/M27-Mazur.jpg',
	},
	{ // NGC 6864 Far side of Galaxy
		name: 'Messier 75',
		type: 'globular cluster',
		dist: 68e3*ly,
		ra: [20, 6, 4.85],
		dec: [-21, 55, 17.85],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Crowded_cluster_Messier_75.jpg/640px-Crowded_cluster_Messier_75.jpg',
	},
	{
		name: 'NGC 6886',
		type: 'planetary nebula',
		dist: 4600*ly,
		ra: [20, 12, 42.83],
		dec: [19, 59, 22.6],
		img: 'https://upload.wikimedia.org/wikipedia/commons/7/78/NGC_6886.jpg',
	},
	{ // NGC 7000
		name: 'North America Nebula',
		type: 'emission nebula',
		dist: 2590*ly,
		ra: [20, 59, 17.1],
		dec: [44, 31, 44],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/North_America_and_Pelican_-_Wesley_Chang.jpg/658px-North_America_and_Pelican_-_Wesley_Chang.jpg',
	},
	{ // NGC 7089 Far side of Galaxy
		name: 'Messier 2',
		type: 'globular cluster',
		dist: 55e3*ly,
		ra: [21, 33, 27.02],
		dec: [0, -49, -23.7],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Messier2_-_HST_-_Potw1913a.jpg/597px-Messier2_-_HST_-_Potw1913a.jpg',
	},
	{ // NGC 7092
		name: 'Messier 39',
		type: 'open cluster',
		dist: 1010*ly,
		ra: [21, 31, 48],
		dec: [48, 26, 0],
		img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/M39_Mazur.jpg',
	},
	{ // NGC 7293
		name: 'Helix Nebula',
		type: 'planetary nebula',
		dist: 650*ly,
		ra: [22, 29, 38.55],
		dec: [-20, 50, 13.6],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/NGC7293_%282004%29.jpg/557px-NGC7293_%282004%29.jpg',
	},
	// not a star and no NGC identifier; sort by dist
	{
		name: 'Berkeley 87',
		type: 'open cluster',
		dist: 946*ly,
		ra: [20, 21, 43.01],
		dec: [37, 22, 13.8],
		img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Be087.jpg',
	},
	{
		name: 'Abell 36',
		type: 'planetary nebula',
		dist: 780*ly,
		ra: [13, 40, 41.34369],
		dec: [-19, 52, 55.32],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/ESO_577-24_FORS2_VLT.jpg/551px-ESO_577-24_FORS2_VLT.jpg',
	},
	{
		name: 'Medusa Nebula',
		type: 'planetary nebula',
		dist: 1500*ly,
		ra: [7, 29, 2.69],
		dec: [13, 14, 48.4],
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Medusa_nebula.jpg/693px-Medusa_nebula.jpg',
	},
	{
		name: 'Spirograph Nebula',
		type: 'planetary nebula',
		dist: 3600*ly,
		ra: [5, 27, 28.2037],
		dec: [-12, 41, 50.265],
		img: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Spirograph_Nebula_-_Hubble_1999.jpg',
	},
	{
		name: 'Lemon Slice Nebula',
		type: 'planetary nebula',
		dist: 4500*ly,
		ra: [12, 33, 6],
		dec: [82, 34, 0],
		img: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/IC_3568_%22Lemon_Slice%22.jpg',
	},
	{ // Halo
		name: 'Koposov 1',
		type: 'globular cluster',
		dist: 157.5e3*ly,
		ra: [11, 59, 18],
		dec: [12, 15, 36],
		img: 'https://upload.wikimedia.org/wikipedia/commons/5/56/GLC_Koposov1.png',
	},
];