var life_data = [
	{
		'name': 'abies',
		'rank': 'genus',
		'parent': 'pinaceae',
		'desc': 'Fir',
	},
	{
		'name': 'allium',
		'rank': 'genus',
		'parent': 'amaryllidaceae',
	},
	{
		'name': 'allium cepa',
		'rank': 'species',
		'parent': 'allium',
		'desc': 'Onion',
	},
	{
		'name': 'allium sativum',
		'rank': 'species',
		'parent': 'allium',
		'desc': 'Garlic',
	},
	{
		'name': 'amaryllidaceae',
		'rank': 'family',
		'parent': 'asparagales',
	},
	{
		'name': 'anatidae',
		'rank': 'family',
		'parent': 'anseriformes',
		'desc': 'Waterfowl',
	},
	{
		'name': 'anas',
		'rank': 'genus',
		'parent': 'anatidae',
	},
	{
		'name': 'anas platyrhynchos',
		'rank': 'species',
		'parent': 'anas',
		'desc': 'Mallard',
	},
	{
		'name': 'angiosperms',
		'rank': 'clade',
		'parent': 'plantae',
	},
	{
		'name': 'animalia',
		'rank': 'kingdom',
		'parent': 'eukaryota',
	},
	{
		'name': 'anseriformes',
		'rank': 'order',
		'parent': 'aves',
	},
	{
		'name': 'apiaceae',
		'rank': 'family',
		'parent': 'apiales',
	},
	{
		'name': 'apiales',
		'rank': 'order',
		'parent': 'eudicots',
	},
	{
		'name': 'apidae',
		'rank': 'family',
		'parent': 'hymenoptera',
	},
	{
		'name': 'apis',
		'rank': 'genus',
		'parent': 'apidae',
		'important': true,
		'desc': 'Honey Bee',
	},
	{
		'name': 'archosauria',
		'rank': 'clade',
		'parent': 'reptilia',
	},
	{
		'name': 'arthropoda',
		'rank': 'phylum',
		'parent': 'animalia',
	},
	{
		'name': 'artiodactyla',
		'rank': 'order',
		'parent': 'ungulata',
	},
	{
		'name': 'asparagales',
		'rank': 'order',
		'parent': 'monocots',
	},
	{
		'name': 'aves',
		'rank': 'class',
		'parent': 'ornithurae',
		'desc': 'Bird',
	},
	{
		'name': 'bambusoideae',
		'rank': 'subfamily',
		'parent': 'poaceae',
		'desc': 'Bamboo',
	},
	{
		'name': 'bos',
		'rank': 'genus',
		'parent': 'bovidae',
	},
	{
		'name': 'bos grunniens',
		'rank': 'species',
		'parent': 'bos',
		'desc': 'Yak',
	},
	{
		'name': 'bos taurus',
		'rank': 'species',
		'parent': 'bos',
		'desc': 'Cattle',
	},
	{
		'name': 'bovidae',
		'rank': 'family',
		'parent': 'artiodactyla',
	},
	{
		'name': 'canidae',
		'rank': 'family',
		'parent': 'carnivora',
	},
	{
		'name': 'canis',
		'rank': 'genus',
		'parent': 'canidae',
	},
	{
		'name': 'canis lupus',
		'rank': 'species',
		'parent': 'canis',
		'desc': 'Wolf',
	},
	{
		'name': 'canis lupus familiaris',
		'rank': 'subspecies',
		'parent': 'canis lupus',
		'important': true,
		'desc': 'Dog',
	},
	{
		'name': 'capra',
		'rank': 'genus',
		'parent': 'caprinae',
		'desc': 'Goat',
	},
	{
		'name': 'caprinae',
		'rank': 'subfamily',
		'parent': 'bovidae',
	},
	{
		'name': 'capsicum',
		'rank': 'genus',
		'parent': 'solanaceae',
	},
	{
		'name': 'capsicum annuum',
		'rank': 'species',
		'parent': 'capsicum',
		'desc': 'Peppers, incl. Bell and Jalape&ntilde;os',
	},
	{
		'name': 'carnivora',
		'rank': 'order',
		'parent': 'laurasiatheria',
	},
	{
		'name': 'cedrus',
		'rank': 'genus',
		'parent': 'pinaceae',
		'desc': 'Cedar',
	},
	{
		'name': 'cervidae',
		'rank': 'family',
		'parent': 'artiodactyla',
		'desc': 'Deer',
	},
	{
		'name': 'chordata',
		'rank': 'phylum',
		'parent': 'animalia',
		'desc': 'During some period of their life cycle, chordates possess a notochord, a dorsal nerve cord, pharyngeal slits, an endostyle, and a post-anal tail: these five anatomical features define this phylum.'
	},
	{
		'name': 'cinnamomum',
		'rank': 'genus',
		'parent': 'lauraceae',
		'desc': 'Cinnamon',
	},
	{
		'name': 'citrullus',
		'rank': 'genus',
		'parent': 'cucurbitaceae',
	},
	{
		'name': 'citrullus lanatus',
		'rank': 'species',
		'parent': 'citrullus',
		'desc': 'Watermelon',
	},
	{
		'name': 'columbiformes',
		'rank': 'order',
		'parent': 'aves',
		'desc': 'Pigeon',
	},
	{
		'name': 'commelinids',
		'rank': 'clade',
		'parent': 'monocots',
	},
	{
		'name': 'cucurbitaceae',
		'rank': 'family',
		'parent': 'cucurbitales',
	},
	{
		'name': 'cucurbitales',
		'rank': 'order',
		'parent': 'eudicots',
	},
	{
		'name': 'cuminum',
		'rank': 'genus',
		'parent': 'apiaceae',
	},
	{
		'name': 'cuminum cyminum',
		'rank': 'species',
		'parent': 'cuminum',
		'desc': 'Cumin',
	},
	{
		'name': 'curcuma',
		'rank': 'genus',
		'parent': 'zingiberaceae',
	},
	{
		'name': 'curcuma longa',
		'rank': 'species',
		'parent': 'curcuma',
		'desc': 'Turmeric',
	},
	{
		'name': 'cygnus',
		'rank': 'genus',
		'parent': 'anatidae',
		'desc': 'Swan',
	},
	{
		'name': 'daucus',
		'rank': 'genus',
		'parent': 'apiaceae',
	},
	{
		'name': 'daucus carota',
		'rank': 'species',
		'parent': 'daucus',
	},
	{
		'name': 'daucus carota sativa',
		'rank': 'subspecies',
		'parent': 'daucus carota',
		'desc': 'Carrot'
	},
	{
		'name': 'equidae',
		'rank': 'family',
		'parent': 'perissodactyla',
	},
	{
		'name': 'equus',
		'rank': 'genus',
		'parent': 'equidae',
	},
	{
		'name': 'equus africanus',
		'rank': 'species',
		'parent': 'equus',
	},
	{
		'name': 'equus africanus asinus',
		'rank': 'subspecies',
		'parent': 'equus africanus',
		'desc': 'Donkey',
	},
	{
		'name': 'equus ferus',
		'rank': 'species',
		'parent': 'equus',
	},
	{
		'name': 'equus ferus caballus',
		'rank': 'subspecies',
		'parent': 'equus ferus',
		'desc': 'Horse',
	},
	{
		'name': 'euarchontoglires',
		'rank': 'superorder',
		'parent': 'mammalia',
	},
	{
		'name': 'eudicots',
		'rank': 'clade',
		'parent': 'angiosperms',
	},
	{
		'name': 'eukaryota',
		'rank': 'domain',
		'parent': 'life',
	},
	{
		'name': 'felidae',
		'rank': 'family',
		'parent': 'carnivora',
	},
	{
		'name': 'felis',
		'rank': 'genus',
		'parent': 'felidae',
	},
	{
		'name': 'felis catus',
		'rank': 'species',
		'parent': 'felis',
		'important': true,
		'desc': 'Cat',
	},
	{
		'name': 'formicidae',
		'rank': 'family',
		'parent': 'hymenoptera',
		'desc': 'Ant',
	},
	{
		'name': 'galliformes',
		'rank': 'order',
		'parent': 'aves',
	},
	{
		'name': 'gallus',
		'rank': 'genus',
		'parent': 'phasianinae',
	},
	{
		'name': 'gallus gallus',
		'rank': 'species',
		'parent': 'gallus',
		'desc': 'Red Junglefowl',
	},
	{
		'name': 'gallus gallus domesticus',
		'rank': 'subspecies',
		'parent': 'gallus gallus',
		'important': true,
		'desc': 'Chicken',
	},
	{
		'name': 'glires',
		'rank': 'clade',
		'parent': 'euarchontoglires',
	},
	{
		'name': 'hippotigris',
		'rank': 'subgenus',
		'parent': 'equus',
		'desc': 'Zebra',
	},
	{
		'name': 'hominidae',
		'rank': 'family',
		'parent': 'primates',
	},
	{
		'name': 'homo',
		'rank': 'genus',
		'parent': 'hominidae',
	},
	{
		'name': 'homo sapiens',
		'rank': 'species',
		'parent': 'homo',
		'important': true,
		'desc': 'Human',
	},
	{
		'name': 'hymenoptera',
		'rank': 'order',
		'parent': 'insecta',
	},
	{
		'name': 'insecta',
		'rank': 'class',
		'parent': 'arthropoda',
	},
	{
		'name': 'lagomorpha',
		'rank': 'order',
		'parent': 'glires',
	},
	{
		'name': 'lamiaceae',
		'rank': 'family',
		'parent': 'lamiales',
	},
	{
		'name': 'lamiales',
		'rank': 'order',
		'parent': 'eudicots',
	},
	{
		'name': 'lauraceae',
		'rank': 'family',
		'parent': 'laurales',
	},
	{
		'name': 'laurales',
		'rank': 'order',
		'parent': 'magnoliids',
	},
	{
		'name': 'laurasiatheria',
		'rank': 'clade',
		'parent': 'mammalia',
	},
	{
		'name': 'leporidae',
		'rank': 'family',
		'parent': 'lagomorpha',
		'desc': 'Rabbit, Hare',
	},
	{
		'name': 'life',
		'rank': 'life',
		'parent': '*',
	},
	{
		'name': 'magnoliales',
		'rank': 'order',
		'parent': 'magnoliids',
	},
	{
		'name': 'magnoliids',
		'rank': 'clade',
		'parent': 'angiosperms',
	},
	{
		'name': 'malus',
		'rank': 'genus',
		'parent': 'rosaceae',
	},
	{
		'name': 'malus domestica',
		'rank': 'species',
		'parent': 'malus',
		'important': true,
		'desc': 'Apple',
	},
	{
		'name': 'mammalia',
		'rank': 'class',
		'parent': 'chordata',
	},
	{
		'name': 'monocots',
		'rank': 'clade',
		'parent': 'angiosperms',
	},
	{
		'name': 'muridae',
		'rank': 'family',
		'parent': 'rodentia',
	},
	{
		'name': 'mus',
		'rank': 'genus',
		'parent': 'muridae',
	},
	{
		'name': 'mus musculus',
		'rank': 'species',
		'parent': 'mus',
		'desc': 'House Mouse',
	},
	{
		'name': 'myristica',
		'rank': 'genus',
		'parent': 'myristicaceae',
	},
	{
		'name': 'myristica fragrans',
		'rank': 'species',
		'parent': 'myristica',
		'desc': 'Nutmeg',
	},
	{
		'name': 'myristicaceae',
		'rank': 'family',
		'parent': 'magnoliales',
	},
	{
		'name': 'ocimum',
		'rank': 'genus',
		'parent': 'lamiaceae',
	},
	{
		'name': 'ocimum basilicum',
		'rank': 'species',
		'parent': 'ocimum',
		'desc': 'Basil',
	},
	{
		'name': 'origanum',
		'rank': 'genus',
		'parent': 'lamiaceae',
	},
	{
		'name': 'origanum vulgare',
		'rank': 'species',
		'parent': 'origanum',
		'desc': 'Oregano',
	},
	{
		'name': 'ornithurae',
		'rank': 'clade',
		'parent': 'theropoda',
	},
	{
		'name': 'oryza',
		'rank': 'genus',
		'parent': 'poaceae',
	},
	{
		'name': 'oryza sativa',
		'rank': 'species',
		'parent': 'oryza',
		'desc': 'Asian Rice',
	},
	{
		'name': 'ovis',
		'rank': 'genus',
		'parent': 'caprinae',
	},
	{
		'name': 'ovis aries',
		'rank': 'species',
		'parent': 'ovis',
		'desc': 'Sheep',
	},
	{
		'name': 'panthera',
		'rank': 'genus',
		'parent': 'felidae',
	},
	{
		'name': 'panthera leo',
		'rank': 'species',
		'parent': 'panthera',
		'desc': 'Lion',
	},
	{
		'name': 'panthera onca',
		'rank': 'species',
		'parent': 'panthera',
		'desc': 'Jaguar',
	},
	{
		'name': 'panthera pardus',
		'rank': 'species',
		'parent': 'panthera',
		'desc': 'Leopard',
	},
	{
		'name': 'panthera tigris',
		'rank': 'species',
		'parent': 'panthera',
		'desc': 'Tiger',
	},
	{
		'name': 'panthera uncia',
		'rank': 'species',
		'parent': 'panthera',
		'desc': 'Snow Leopard',
	},
	{
		'name': 'pavo',
		'rank': 'genus',
		'parent': 'phasianinae',
		'desc': 'Peafowl',
	},
	{
		'name': 'perissodactyla',
		'rank': 'order',
		'parent': 'ungulata',
	},
	{
		'name': 'phasianidae',
		'rank': 'family',
		'parent': 'galliformes',
	},
	{
		'name': 'phasianinae',
		'rank': 'subfamily',
		'parent': 'phasianidae',
	},
	{
		'name': 'picea',
		'rank': 'genus',
		'parent': 'pinaceae',
		'desc': 'Spruce',
	},
	{
		'name': 'pinaceae',
		'rank': 'family',
		'parent': 'pinales',
	},
	{
		'name': 'pinales',
		'rank': 'order',
		'parent': 'pinopsida',
	},
	{
		'name': 'pinophyta',
		'rank': 'division',
		'parent': 'plantae',
		'desc': 'Conifer',
	},
	{
		'name': 'pinopsida',
		'rank': 'class',
		'parent': 'pinophyta',
	},
	{
		'name': 'pinus',
		'rank': 'genus',
		'parent': 'pinaceae',
		'important': true,
		'desc': 'Pine',
	},
	{
		'name': 'piper',
		'rank': 'genus',
		'parent': 'piperaceae',
	},
	{
		'name': 'piper nigrum',
		'rank': 'species',
		'parent': 'piper',
		'desc': 'Black Pepper',
	},
	{
		'name': 'piperaceae',
		'rank': 'family',
		'parent': 'piperales',
	},
	{
		'name': 'piperales',
		'rank': 'order',
		'parent': 'magnoliids',
	},
	{
		'name': 'plantae',
		'rank': 'kingdom',
		'parent': 'eukaryota',
	},
	{
		'name': 'poales',
		'rank': 'order',
		'parent': 'commelinids',
	},
	{
		'name': 'poaceae',
		'rank': 'family',
		'parent': 'poales',
		'desc': 'Grass',
	},
	{
		'name': 'primates',
		'rank': 'order',
		'parent': 'euarchontoglires',
	},
	{
		'name': 'psittaciformes',
		'rank': 'order',
		'parent': 'aves',
		'desc': 'Parrot',
	},
	{
		'name': 'reptilia',
		'rank': 'class',
		'parent': 'chordata',
	},
	{
		'name': 'rodentia',
		'rank': 'order',
		'parent': 'glires',
	},
	{
		'name': 'rosaceae',
		'rank': 'family',
		'parent': 'rosales',
	},
	{
		'name': 'rosales',
		'rank': 'order',
		'parent': 'eudicots',
	},
	{
		'name': 'serpentes',
		'rank': 'suborder',
		'parent': 'squamata',
		'desc': 'Snake'
	},
	{
		'name': 'solanaceae',
		'rank': 'family',
		'parent': 'solanales',
	},
	{
		'name': 'solanales',
		'rank': 'order',
		'parent': 'eudicots',
	},
	{
		'name': 'solanum',
		'rank': 'genus',
		'parent': 'solanaceae',
	},
	{
		'name': 'solanum tuberosum',
		'rank': 'species',
		'parent': 'solanum',
		'desc': 'Potato',
	},
	{
		'name': 'squamata',
		'rank': 'order',
		'parent': 'reptilia',
	},
	{
		'name': 'strigiformes',
		'rank': 'order',
		'parent': 'aves',
		'desc': 'Owl',
	},
	{
		'name': 'suidae',
		'rank': 'family',
		'parent': 'artiodactyla',
	},
	{
		'name': 'sus',
		'rank': 'genus',
		'parent': 'suidae',
		'desc': 'Pig',
	},
	{
		'name': 'theropoda',
		'rank': 'clade',
		'parent': 'archosauria',
	},
	{
		'name': 'tyrannosauridae',
		'rank': 'family',
		'parent': 'theropoda',
	},
	{
		'name': 'tyrannosaurus',
		'rank': 'genus',
		'parent': 'tyrannosauridae',
	},
	{
		'name': 'tyrannosaurus rex',
		'rank': 'species',
		'parent': 'tyrannosaurus',
	},
	{
		'name': 'ungulata',
		'rank': 'clade',
		'parent': 'laurasiatheria',
	},
	{
		'name': 'vulpes',
		'rank': 'genus',
		'parent': 'canidae',
	},
	{
		'name': 'vulpes vulpes',
		'rank': 'species',
		'parent': 'vulpes',
		'desc': 'Red Fox',
	},
	{
		'name': 'zingiber',
		'rank': 'genus',
		'parent': 'zingiberaceae',
	},
	{
		'name': 'zingiber officinale',
		'rank': 'species',
		'parent': 'zingiber',
		'desc': 'Ginger',
	},
	{
		'name': 'zingiberaceae',
		'rank': 'family',
		'parent': 'zingiberales',
	},
	{
		'name': 'zingiberales',
		'rank': 'order',
		'parent': 'commelinids',
	},
];