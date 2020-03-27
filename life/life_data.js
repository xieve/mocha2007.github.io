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
		'parent': 'galloanserae',
	},
	{
		'name': 'apiaceae',
		'rank': 'family',
		'parent': 'apiales',
	},
	{
		'name': 'apiales',
		'rank': 'order',
		'parent': 'campanulids',
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
		'parent': 'protostomia',
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
		'name': 'asteraceae',
		'rank': 'family',
		'parent': 'asterales',
	},
	{
		'name': 'asterales',
		'rank': 'order',
		'parent': 'campanulids',
	},
	{
		'name': 'asterids',
		'rank': 'clade',
		'parent': 'eudicots',
	},
	{
		'name': 'asteroidea',
		'rank': 'class',
		'parent': 'echinodermata',
		'desc': 'Starfish',
	},
	{
		'name': 'aves',
		'rank': 'class',
		'parent': 'theropoda',
		'desc': 'Bird',
	},
	{
		'name': 'bambusoideae',
		'rank': 'subfamily',
		'parent': 'poaceae',
		'desc': 'Bamboo',
	},
	{
		'name': 'betula',
		'rank': 'genus',
		'parent': 'betulaceae',
		'desc': 'Birch',
	},
	{
		'name': 'betulaceae',
		'rank': 'family',
		'parent': 'fagales',
	},
	{
		'name': 'bilateria',
		'rank': 'clade',
		'parent': 'eumetazoa',
		'desc': 'Bilaterians are animals with bilateral symmetry as an embryo.',
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
		'name': 'brassica',
		'rank': 'genus',
		'parent': 'brassicaceae',
	},
	{
		'name': 'brassica oleracea',
		'rank': 'species',
		'parent': 'brassica',
		'desc': 'Broccoli, Brussel Sprout, Cabbage, Cauliflower, Collard Greens, Kale, among others',
	},
	{
		'name': 'brassica rapa',
		'rank': 'species',
		'parent': 'brassica',
		'desc': 'Turnip',
	},
	{
		'name': 'brassicaceae',
		'rank': 'family',
		'parent': 'brassicales',
	},
	{
		'name': 'brassicales',
		'rank': 'order',
		'parent': 'malvids',
	},
	{
		'name': 'campanulids',
		'rank': 'clade',
		'parent': 'asterids',
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
		'name': 'castor',
		'rank': 'genus',
		'parent': 'castoridae',
		'desc': 'Beaver'
	},
	{
		'name': 'castoridae',
		'rank': 'family',
		'parent': 'rodentia',
	},
	{
		'name': 'cavia',
		'rank': 'genus',
		'parent': 'caviidae',
	},
	{
		'name': 'cavia porcellus',
		'rank': 'species',
		'parent': 'cavia',
		'desc': 'Guinea Pig',
	},
	{
		'name': 'caviidae',
		'rank': 'family',
		'parent': 'rodentia',
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
		'name': 'chondrichthyes',
		'rank': 'class',
		'parent': 'chordata',
	},
	{
		'name': 'chordata',
		'rank': 'phylum',
		'parent': 'deuterostomia',
		'desc': 'During some period of their life cycle, chordates possess a notochord, a dorsal nerve cord, pharyngeal slits, an endostyle, and a post-anal tail. These five anatomical features define this phylum.'
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
		'name': 'cnidaria',
		'rank': 'phylum',
		'parent': 'eumetazoa',
	},
	{
		'name': 'columbiformes',
		'rank': 'order',
		'parent': 'neoaves',
		'desc': 'Pigeon',
	},
	{
		'name': 'commelinids',
		'rank': 'clade',
		'parent': 'monocots',
	},
	{
		'name': 'cricetidae',
		'rank': 'family',
		'parent': 'muroidea',
	},
	{
		'name': 'cricetinae',
		'rank': 'subfamily',
		'parent': 'cricetidae',
		'desc': 'Hamster',
	},
	{
		'name': 'cucumis',
		'rank': 'genus',
		'parent': 'cucurbitaceae',
	},
	{
		'name': 'cucumis sativus',
		'rank': 'species',
		'parent': 'cucumis',
		'desc': 'Cucumber',
	},
	{
		'name': 'cucurbita',
		'rank': 'genus',
		'parent': 'cucurbitaceae',
	},
	{
		'name': 'cucurbita pepo',
		'rank': 'species',
		'parent': 'cucurbita',
		'desc': 'Pumpkin, Winter Squash',
	},
	{
		'name': 'cucurbitaceae',
		'rank': 'family',
		'parent': 'cucurbitales',
	},
	{
		'name': 'cucurbitales',
		'rank': 'order',
		'parent': 'fabids',
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
		'name': 'deuterostomia',
		'rank': 'superphylum',
		'parent': 'bilateria',
		'desc': 'In deuterostomes, the first opening, the blastopore, becomes the anus, while in protostomes, it becomes the mouth.'
	},
	{
		'name': 'echinodermata',
		'rank': 'phylum',
		'parent': 'deuterostomia',
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
		'name': 'eumetazoa',
		'rank': 'subkingdom',
		'parent': 'animalia',
	},
	{
		'name': 'fabaceae',
		'rank': 'family',
		'parent': 'fabales',
	},
	{
		'name': 'fabales',
		'rank': 'order',
		'parent': 'fabids',
	},
	{
		'name': 'fabids',
		'rank': 'clade',
		'parent': 'rosids',
	},
	{
		'name': 'fagaceae',
		'rank': 'family',
		'parent': 'fagales',
	},
	{
		'name': 'fagales',
		'rank': 'order',
		'parent': 'fabids',
	},
	{
		'name': 'fagus',
		'rank': 'genus',
		'parent': 'fagaceae',
		'desc': 'Beech',
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
		'parent': 'galloanserae',
	},
	{
		'name': 'galloanserae',
		'rank': 'superorder',
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
		'desc': 'Great Apes',
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
		'name': 'lactuca',
		'rank': 'genus',
		'parent': 'asteraceae',
	},
	{
		'name': 'lactuca sativa',
		'rank': 'species',
		'parent': 'lactuca',
		'desc': 'Lettuce',
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
		'parent': 'lamiids',
	},
	{
		'name': 'lamiids',
		'rank': 'clade',
		'parent': 'asterids',
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
		'rank': 'superorder',
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
		'name': 'malvids',
		'rank': 'clade',
		'parent': 'rosids',
	},
	{
		'name': 'mammalia',
		'rank': 'class',
		'parent': 'tetrapoda',
	},
	{
		'name': 'medusazoa',
		'rank': 'subphylum',
		'parent': 'cnidaria',
		'desc': 'Jellyfish',
	},
	{
		'name': 'monocots',
		'rank': 'clade',
		'parent': 'angiosperms',
	},
	{
		'name': 'muridae',
		'rank': 'family',
		'parent': 'muroidea',
	},
	{
		'name': 'muroidea',
		'rank': 'superfamily',
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
		'name': 'neoaves',
		'rank': 'clade',
		'parent': 'aves',
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
		'name': 'pan',
		'rank': 'genus',
		'parent': 'hominidae',
	},
	{
		'name': 'pan troglodytes',
		'rank': 'species',
		'parent': 'pan',
		'desc': 'Chimpanzee',
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
		'name': 'phaseolus',
		'rank': 'genus',
		'parent': 'fabaceae',
	},
	{
		'name': 'phaseolus vulgaris',
		'rank': 'species',
		'parent': 'phaseolus',
		'desc': 'Common Bean',
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
		'name': 'pisum',
		'rank': 'genus',
		'parent': 'fabaceae',
	},
	{
		'name': 'pisum sativum',
		'rank': 'species',
		'parent': 'pisum',
		'desc': 'Pea',
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
		'name': 'platyhelminthes',
		'rank': 'phylum',
		'parent': 'protostomia',
		'desc': 'Flatworm',
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
		'name': 'porifera',
		'rank': 'phylum',
		'parent': 'animalia',
		'desc': 'Sponge',
	},
	{
		'name': 'primates',
		'rank': 'order',
		'parent': 'euarchontoglires',
	},
	{
		'name': 'protostomia',
		'rank': 'superphylum',
		'parent': 'bilateria',
	},
	{
		'name': 'psittaciformes',
		'rank': 'order',
		'parent': 'telluraves',
		'desc': 'Parrot',
	},
	{
		'name': 'quercus',
		'rank': 'genus',
		'parent': 'fagaceae',
		'desc': 'Oak',
	},
	{
		'name': 'raphanus',
		'rank': 'genus',
		'parent': 'brassicaceae',
	},
	{
		'name': 'raphanus raphanistrum',
		'rank': 'species',
		'parent': 'raphanus',
		'desc': 'Radish',
	},
	{
		'name': 'reptilia',
		'rank': 'class',
		'parent': 'tetrapoda',
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
		'parent': 'fabids',
	},
	{
		'name': 'rosids',
		'rank': 'clade',
		'parent': 'eudicots',
	},
	{
		'name': 'saccharum',
		'rank': 'genus',
		'parent': 'poaceae',
		'desc': 'Sugarcane'
	},
	{
		'name': 'sciuridae',
		'rank': 'family',
		'parent': 'rodentia',
		'desc': 'Squirrel'
	},
	{
		'name': 'selachimorpha',
		'rank': 'superorder',
		'parent': 'chondrichthyes',
		'desc': 'Shark',
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
		'parent': 'lamiids',
	},
	{
		'name': 'solanum',
		'rank': 'genus',
		'parent': 'solanaceae',
	},
	{
		'name': 'solanum lycopersicum',
		'rank': 'species',
		'parent': 'solanum',
		'desc': 'Tomato',
	},
	{
		'name': 'solanum melongena',
		'rank': 'species',
		'parent': 'solanum',
		'desc': 'Eggplant',
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
		'parent': 'telluraves',
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
		'name': 'telluraves',
		'rank': 'clade',
		'parent': 'neoaves',
	},
	{
		'name': 'tetrapoda',
		'rank': 'superclass',
		'parent': 'chordata',
	},
	{
		'name': 'theropoda',
		'rank': 'clade',
		'parent': 'archosauria',
	},
	{
		'name': 'triticum',
		'rank': 'genus',
		'parent': 'poaceae',
		'desc': 'Wheat',
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
		'name': 'vitaceae',
		'rank': 'family',
		'parent': 'vitales',
	},
	{
		'name': 'vitales',
		'rank': 'order',
		'parent': 'rosids',
	},
	{
		'name': 'vitis',
		'rank': 'genus',
		'parent': 'vitaceae',
		'desc': 'Grape',
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
		'name': 'zea',
		'rank': 'genus',
		'parent': 'poaceae',
	},
	{
		'name': 'zea mays',
		'rank': 'species',
		'parent': 'zea',
		'desc': 'Maize',
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