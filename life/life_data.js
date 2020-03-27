var life_data = [
	{
		'name': 'abies',
		'rank': 'genus',
		'parent': 'abietoideae',
		'range': 'nh',
		'desc': 'Fir',
	},
	{
		'name': 'abietoideae',
		'rank': 'subfamily',
		'parent': 'pinaceae',
		'range': 'nh',
	},
	{
		'name': 'acanthomorpha',
		'rank': 'clade',
		'parent': 'teleostei',
		'range': 'ww',
	},
	{
		'name': 'actinopterygii',
		'rank': 'class',
		'parent': 'osteichthyes',
		'range': 'ww',
	},
	{
		'name': 'allium',
		'rank': 'genus',
		'parent': 'amaryllidaceae',
		'range': 'ww',
	},
	{
		'name': 'allium cepa',
		'rank': 'species',
		'parent': 'allium',
		'range': 'as',
		'desc': 'Onion',
	},
	{
		'name': 'allium sativum',
		'rank': 'species',
		'parent': 'allium',
		'range': 'ow',
		'desc': 'Garlic',
	},
	{
		'name': 'amaryllidaceae',
		'rank': 'family',
		'parent': 'asparagales',
		'range': 'ww',
	},
	{
		'name': 'amniota',
		'rank': 'clade',
		'parent': 'tetrapoda',
		'range': 'ww',
	},
	{
		'name': 'amphibia',
		'rank': 'class',
		'parent': 'tetrapoda',
		'range': 'ww',
	},
	{
		'name': 'ananas',
		'rank': 'genus',
		'parent': 'bromeliaceae',
		'range': 'sa',
	},
	{
		'name': 'ananas comosus',
		'rank': 'species',
		'parent': 'ananas',
		'range': 'sa',
		'desc': 'Pineapple',
	},
	{
		'name': 'anatidae',
		'rank': 'family',
		'parent': 'anseriformes',
		'range': 'ww',
		'desc': 'Waterfowl',
	},
	{
		'name': 'anas',
		'rank': 'genus',
		'range': 'ww',
		'parent': 'anatidae',
	},
	{
		'name': 'anas platyrhynchos',
		'rank': 'species',
		'parent': 'anas',
		'range': 'nh',
		'desc': 'Mallard',
	},
	{
		'name': 'angiosperms',
		'rank': 'clade',
		'parent': 'plantae',
		'range': 'ww',
	},
	{
		'name': 'animalia',
		'rank': 'kingdom',
		'parent': 'eukaryota',
		'range': 'ww',
	},
	{
		'name': 'anseriformes',
		'rank': 'order',
		'parent': 'galloanserae',
		'range': 'ww',
	},
	{
		'name': 'anura',
		'rank': 'order',
		'parent': 'amphibia',
		'range': 'ww',
		'desc': 'Frog',
	},
	{
		'name': 'apiaceae',
		'rank': 'family',
		'parent': 'apiales',
		'range': 'ww',
	},
	{
		'name': 'apiales',
		'rank': 'order',
		'parent': 'campanulids',
		'range': 'ww',
	},
	{
		'name': 'apidae',
		'rank': 'family',
		'parent': 'hymenoptera',
		'range': 'ww',
	},
	{
		'name': 'apis',
		'rank': 'genus',
		'parent': 'apidae',
		// 'important': true,
		'range': 'ea',
		'desc': 'Honey Bee',
	},
	{
		'name': 'apium',
		'rank': 'genus',
		'parent': 'apiaceae',
		'range': 'ww',
	},
	{
		'name': 'apium graveolens',
		'rank': 'species',
		'parent': 'apium',
		'desc': 'Celery',
	},
	{
		'name': 'arachis',
		'rank': 'genus',
		'parent': 'fabaceae',
		'range': 'sa',
	},
	{
		'name': 'arachis hypogaea',
		'rank': 'species',
		'parent': 'arachis',
		'range': 'sa',
		'desc': 'Peanut',
	},
	{
		'name': 'arachnida',
		'rank': 'class',
		'parent': 'arthropoda',
		'range': 'ww',
	},
	{
		'name': 'araneae',
		'rank': 'order',
		'parent': 'arachnida',
		'range': 'ww',
		'desc': 'Spider',
	},
	{
		'name': 'archosauria',
		'rank': 'clade',
		'parent': 'reptilia',
		'range': 'ww',
	},
	{
		'name': 'ardipithecus',
		'rank': 'genus',
		'parent': 'australopithecina',
		'extinct': true,
		'range': 'af',
	},
	{
		'name': 'ardipithecus ramidus',
		'rank': 'species',
		'parent': 'ardipithecus',
		'extinct': true,
		'range': 'af',
		'desc': 'Extinct hominid very close to Human-Chimpanzee LCA.',
	},
	{
		'name': 'arecaceae',
		'rank': 'family',
		'parent': 'arecales',
		'range': 'eq',
	},
	{
		'name': 'arecales',
		'rank': 'order',
		'parent': 'commelinids',
		'range': 'eq',
	},
	{
		'name': 'arthropoda',
		'rank': 'phylum',
		'parent': 'protostomia',
		'range': 'ww',
	},
	{
		'name': 'artiodactyla',
		'rank': 'order',
		'parent': 'ungulata',
		'range': 'ww',
	},
	{
		'name': 'artiofabula',
		'rank': 'clade',
		'parent': 'artiodactyla',
		'range': 'ww',
	},
	{
		'name': 'asparagales',
		'rank': 'order',
		'parent': 'monocots',
		'range': 'ww',
	},
	{
		'name': 'astacoidea',
		'rank': 'superfamily',
		'parent': 'decapoda',
		'range': 'ww',
		'desc': 'Crayfish',
	},
	{
		'name': 'asteraceae',
		'rank': 'family',
		'parent': 'asterales',
		'range': 'ww',
	},
	{
		'name': 'asterales',
		'rank': 'order',
		'parent': 'campanulids',
		'range': 'ww',
	},
	{
		'name': 'asterids',
		'rank': 'clade',
		'parent': 'eudicots',
		'range': 'ww',
	},
	{
		'name': 'asteroidea',
		'rank': 'class',
		'parent': 'echinodermata',
		'range': 'ww',
		'desc': 'Starfish',
	},
	{
		'name': 'australopithecina',
		'rank': 'subtribe',
		'parent': 'hominini',
		'extinct': true,
		'range': 'af',
	},
	{
		'name': 'australopithecus',
		'rank': 'genus',
		'parent': 'australopithecina',
		'extinct': true,
		'range': 'af',
	},
	{
		'name': 'australopithecus afarensis',
		'rank': 'species',
		'parent': 'australopithecus',
		'extinct': true,
		'range': 'af',
		'desc': 'Ancestor of H. Habilis.',
	},
	{
		'name': 'aves',
		'rank': 'class',
		'parent': 'theropoda',
		'range': 'ww',
		'desc': 'Bird',
	},
	{
		'name': 'balaenoptera',
		'rank': 'genus',
		'parent': 'balaenopteridae',
		'range': 'ww',
	},
	{
		'name': 'balaenoptera musculus',
		'rank': 'species',
		'parent': 'balaenoptera',
		'range': 'ww',
		'desc': 'Blue Whale',
	},
	{
		'name': 'balaenopteridae',
		'rank': 'family',
		'parent': 'cetacea',
		'range': 'ww',
	},
	{
		'name': 'bambusoideae',
		'rank': 'subfamily',
		'parent': 'bop clade',
		'range': 'eq',
		'desc': 'Bamboo',
	},
	{
		'name': 'batoidea',
		'rank': 'superorder',
		'parent': 'chondrichthyes',
		'range': 'ww',
		'desc': 'Ray',
	},
	{
		'name': 'betula',
		'rank': 'genus',
		'parent': 'betulaceae',
		'range': 'nh',
		'desc': 'Birch',
	},
	{
		'name': 'betulaceae',
		'rank': 'family',
		'parent': 'fagales',
		'range': 'ww',
	},
	{
		'name': 'bilateria',
		'rank': 'clade',
		'parent': 'eumetazoa',
		'range': 'ww',
		'desc': 'Bilaterians are animals with bilateral symmetry as an embryo.',
	},
	{
		'name': 'bop clade',
		'rank': 'clade',
		'range': 'ww',
		'parent': 'poaceae',
	},
	{
		'name': 'bos',
		'rank': 'genus',
		'range': 'ww',
		'parent': 'bovidae',
	},
	{
		'name': 'bos grunniens',
		'rank': 'species',
		'parent': 'bos',
		'range': 'as',
		'desc': 'Yak',
	},
	{
		'name': 'bos taurus',
		'rank': 'species',
		'parent': 'bos',
		'range': 'ww',
		'desc': 'Cattle',
	},
	{
		'name': 'bovidae',
		'rank': 'family',
		'parent': 'cetruminantia',
		'range': 'ww',
	},
	{
		'name': 'brachyura',
		'rank': 'infraorder',
		'parent': 'decapoda',
		'range': 'ww',
		'desc': 'Crab',
	},
	{
		'name': 'brassica',
		'rank': 'genus',
		'range': 'ww',
		'parent': 'brassicaceae',
	},
	{
		'name': 'brassica oleracea',
		'rank': 'species',
		'parent': 'brassica',
		'range': 'eu',
		'desc': 'Broccoli, Brussel Sprout, Cabbage, Cauliflower, Collard Greens, Kale, among others',
	},
	{
		'name': 'brassica rapa',
		'rank': 'species',
		'parent': 'brassica',
		'range': 'ea',
		'desc': 'Turnip',
	},
	{
		'name': 'brassicaceae',
		'rank': 'family',
		'parent': 'brassicales',
		'range': 'ww',
	},
	{
		'name': 'brassicales',
		'rank': 'order',
		'parent': 'malvids',
		'range': 'ww',
	},
	{
		'name': 'bromeliaceae',
		'rank': 'family',
		'parent': 'poales',
		'range': 'nw',
	},
	{
		'name': 'camelidae',
		'rank': 'family',
		'parent': 'tylopoda',
		'range': 'ww',
	},
	{
		'name': 'campanulids',
		'rank': 'clade',
		'parent': 'asterids',
		'range': 'ww',
	},
	{
		'name': 'canidae',
		'rank': 'family',
		'range': 'ww',
		'parent': 'carnivora',
	},
	{
		'name': 'canis',
		'rank': 'genus',
		'parent': 'canidae',
		'range': 'ww',
	},
	{
		'name': 'canis lupus',
		'rank': 'species',
		'parent': 'canis',
		'range': 'nh',
		'desc': 'Wolf',
	},
	{
		'name': 'canis lupus familiaris',
		'rank': 'subspecies',
		'parent': 'canis lupus',
		// 'important': true,
		'desc': 'Dog',
	},
	{
		'name': 'capra',
		'rank': 'genus',
		'parent': 'caprinae',
		'range': 'ow',
		'desc': 'Goat',
	},
	{
		'name': 'caprinae',
		'rank': 'subfamily',
		'parent': 'bovidae',
		'range': 'nh',
	},
	{
		'name': 'capsicum',
		'rank': 'genus',
		'parent': 'solanaceae',
		'range': 'nw',
	},
	{
		'name': 'capsicum annuum',
		'rank': 'species',
		'parent': 'capsicum',
		'range': 'nw',
		'desc': 'Peppers, incl. Bell and Jalape&ntilde;os',
	},
	{
		'name': 'cardinalidae',
		'rank': 'family',
		'range': 'nw',
		'parent': 'passeriformes',
	},
	{
		'name': 'cardinalis',
		'rank': 'genus',
		'range': 'nw',
		'parent': 'cardinalidae',
	},
	{
		'name': 'cardinalis cardinalis',
		'rank': 'species',
		'parent': 'cardinalis',
		'range': 'na',
		'desc': 'Cardinal',
	},
	{
		'name': 'caridea',
		'rank': 'infraorder',
		'parent': 'decapoda',
		'range': 'ww',
		'desc': 'Shrimp',
	},
	{
		'name': 'carnivora',
		'rank': 'order',
		'parent': 'laurasiatheria',
		'range': 'ww',
	},
	{
		'name': 'carya',
		'rank': 'genus',
		'parent': 'juglandaceae',
		'range': 'nh',
	},
	{
		'name': 'carya illinoinensis',
		'rank': 'species',
		'parent': 'carya',
		'range': 'na',
		'desc': 'Pecan',
	},
	{
		'name': 'castor',
		'rank': 'genus',
		'parent': 'castoridae',
		'range': 'nh',
		'desc': 'Beaver'
	},
	{
		'name': 'castoridae',
		'rank': 'family',
		'parent': 'rodentia',
		'range': 'nh',
	},
	{
		'name': 'cavia',
		'rank': 'genus',
		'parent': 'caviidae',
		'range': 'sa',
	},
	{
		'name': 'cavia porcellus',
		'rank': 'species',
		'parent': 'cavia',
		'range': 'sa',
		'desc': 'Guinea Pig',
	},
	{
		'name': 'caviidae',
		'rank': 'family',
		'parent': 'rodentia',
		'range': 'sa',
	},
	{
		'name': 'cedrus',
		'rank': 'genus',
		'parent': 'abietoideae',
		'range': 'ea',
		'desc': 'Cedar',
	},
	{
		'name': 'cerasus',
		'rank': 'subgenus',
		'parent': 'prunus',
		'range': 'ea',
		'desc': 'Cherry',
	},
	{
		'name': 'cervidae',
		'rank': 'family',
		'parent': 'cetruminantia',
		'range': 'ww',
		'desc': 'Deer',
	},
	{
		'name': 'cetacea',
		'rank': 'infraorder',
		'parent': 'cetruminantia',
		'range': 'ww',
	},
	{
		'name': 'cetruminantia',
		'rank': 'clade',
		'parent': 'artiofabula',
		'range': 'ww',
	},
	{
		'name': 'chondrichthyes',
		'rank': 'class',
		'parent': 'chordata',
		'range': 'ww',
	},
	{
		'name': 'chordata',
		'rank': 'phylum',
		'parent': 'deuterostomia',
		'range': 'ww',
		'desc': 'During some period of their life cycle, chordates possess a notochord, a dorsal nerve cord, pharyngeal slits, an endostyle, and a post-anal tail. These five anatomical features define this phylum.'
	},
	{
		'name': 'cinnamomum',
		'rank': 'genus',
		'parent': 'lauraceae',
		'range': 'as',
		'desc': 'Cinnamon',
	},
	{
		'name': 'citrullus',
		'rank': 'genus',
		'parent': 'cucurbitaceae',
		'range': 'ow',
	},
	{
		'name': 'citrullus lanatus',
		'rank': 'species',
		'parent': 'citrullus',
		'range': 'af',
		'desc': 'Watermelon',
	},
	{
		'name': 'citrus',
		'rank': 'genus',
		'parent': 'rutaceae',
		'range': 'as',
	},
	{
		'name': 'citrus latifola',
		'rank': 'species',
		'parent': 'citrus',
		'range': 'as',
		'desc': 'Persian Lime',
	},
	{
		'name': 'citrus limon',
		'rank': 'species',
		'parent': 'citrus',
		'range': 'as',
		'desc': 'Lemon',
	},
	{
		'name': 'citrus paradisi',
		'rank': 'species',
		'parent': 'citrus',
		'desc': 'Grapefruit',
	},
	{
		'name': 'citrus sinensis',
		'rank': 'species',
		'parent': 'citrus',
		'range': 'as',
		'desc': 'Orange',
	},
	{
		'name': 'citrus tangerina',
		'rank': 'species',
		'parent': 'citrus',
		'desc': 'Tangerine',
	},
	{
		'name': 'cnidaria',
		'rank': 'phylum',
		'parent': 'eumetazoa',
		'range': 'ww',
	},
	{
		'name': 'coccinellidae',
		'rank': 'family',
		'parent': 'coleoptera',
		'range': 'ww',
		'desc': 'Ladybug',
	},
	{
		'name': 'cocos',
		'rank': 'genus',
		'parent': 'arecaceae',
		'range': 'eq',
	},
	{
		'name': 'cocos nucifera',
		'rank': 'species',
		'parent': 'cocos',
		'range': 'eq',
		'desc': 'Coconut',
	},
	{
		'name': 'coleoptera',
		'rank': 'order',
		'parent': 'insecta',
		'range': 'ww',
		'desc': 'Beetle',
	},
	{
		'name': 'columbiformes',
		'rank': 'order',
		'parent': 'neoaves',
		'range': 'ww',
		'desc': 'Pigeon',
	},
	{
		'name': 'commelinids',
		'rank': 'clade',
		'parent': 'monocots',
		'range': 'ww',
	},
	{
		'name': 'corvidae',
		'rank': 'family',
		'parent': 'passeriformes',
		'range': 'ww',
	},
	{
		'name': 'corvus',
		'rank': 'genus',
		'parent': 'corvidae',
		'range': 'nh',
		'desc': 'Crow',
	},
	{
		'name': 'cricetidae',
		'rank': 'family',
		'parent': 'muroidea',
		'range': 'ww',
	},
	{
		'name': 'cricetinae',
		'rank': 'subfamily',
		'parent': 'cricetidae',
		'range': 'ea',
		'desc': 'Hamster',
	},
	{
		'name': 'crustacea',
		'rank': 'subphylum',
		'parent': 'pancrustacea',
		'range': 'ww',
	},
	{
		'name': 'cucumis',
		'rank': 'genus',
		'parent': 'cucurbitaceae',
		'range': 'ow',
	},
	{
		'name': 'cucumis sativus',
		'rank': 'species',
		'parent': 'cucumis',
		'range': 'as',
		'desc': 'Cucumber',
	},
	{
		'name': 'cucurbita',
		'rank': 'genus',
		'parent': 'cucurbitaceae',
		'range': 'nw',
	},
	{
		'name': 'cucurbita pepo',
		'rank': 'species',
		'parent': 'cucurbita',
		'range': 'nw',
		'desc': 'Pumpkin, Winter Squash',
	},
	{
		'name': 'cucurbitaceae',
		'rank': 'family',
		'parent': 'cucurbitales',
		'range': 'ww',
	},
	{
		'name': 'cucurbitales',
		'rank': 'order',
		'parent': 'fabids',
		'range': 'ww',
	},
	{
		'name': 'cuminum',
		'rank': 'genus',
		'parent': 'apiaceae',
		'range': 'as',
	},
	{
		'name': 'cuminum cyminum',
		'rank': 'species',
		'parent': 'cuminum',
		'range': 'as',
		'desc': 'Cumin',
	},
	{
		'name': 'curcuma',
		'rank': 'genus',
		'parent': 'zingiberaceae',
		'range': 'as',
	},
	{
		'name': 'curcuma longa',
		'rank': 'species',
		'parent': 'curcuma',
		'range': 'as',
		'desc': 'Turmeric',
	},
	{
		'name': 'cyanocitta',
		'rank': 'genus',
		'parent': 'corvidae',
		'range': 'na',
	},
	{
		'name': 'cyanocitta crisata',
		'rank': 'species',
		'parent': 'cyanocitta',
		'range': 'na',
		'desc': 'Blue Jay',
	},
	{
		'name': 'cygnus',
		'rank': 'genus',
		'parent': 'anatidae',
		'range': 'ww',
		'desc': 'Swan',
	},
	{
		'name': 'daucus',
		'rank': 'genus',
		'parent': 'apiaceae',
		'range': 'ww',
	},
	{
		'name': 'daucus carota',
		'rank': 'species',
		'range': 'ea',
		'parent': 'daucus',
	},
	{
		'name': 'daucus carota sativus',
		'rank': 'subspecies',
		'parent': 'daucus carota',
		'range': 'ea',
		'desc': 'Carrot'
	},
	{
		'name': 'decapoda',
		'rank': 'order',
		'parent': 'malacostraca',
		'range': 'ww',
	},
	{
		'name': 'delphinidae',
		'rank': 'family',
		'parent': 'cetacea',
		'range': 'ww',
	},
	{
		'name': 'deuterostomia',
		'rank': 'superphylum',
		'parent': 'bilateria',
		'range': 'ww',
		'desc': 'In deuterostomes, the first opening, the blastopore, becomes the anus, while in protostomes, it becomes the mouth.'
	},
	{
		'name': 'echinodermata',
		'rank': 'phylum',
		'parent': 'deuterostomia',
		'range': 'ww',
	},
	{
		'name': 'equidae',
		'rank': 'family',
		'range': 'ow',
		'parent': 'perissodactyla',
	},
	{
		'name': 'equus',
		'rank': 'genus',
		'range': 'ow',
		'parent': 'equidae',
	},
	{
		'name': 'equus africanus',
		'rank': 'species',
		'range': 'af',
		'parent': 'equus',
	},
	{
		'name': 'equus africanus asinus',
		'rank': 'subspecies',
		'parent': 'equus africanus',
		'range': 'af',
		'desc': 'Donkey',
	},
	{
		'name': 'equus ferus',
		'rank': 'species',
		'range': 'ea',
		'parent': 'equus',
	},
	{
		'name': 'equus ferus caballus',
		'rank': 'subspecies',
		'parent': 'equus ferus',
		'range': 'ea',
		'desc': 'Horse',
	},
	{
		'name': 'euarchontoglires',
		'rank': 'superorder',
		'parent': 'mammalia',
		'range': 'ww',
	},
	{
		'name': 'eudicots',
		'rank': 'clade',
		'parent': 'angiosperms',
		'range': 'ww',
	},
	{
		'name': 'eukaryota',
		'rank': 'domain',
		'parent': 'life',
		'range': 'ww',
	},
	{
		'name': 'eumetazoa',
		'rank': 'subkingdom',
		'parent': 'animalia',
		'range': 'ww',
	},
	{
		'name': 'euphausiacea',
		'rank': 'order',
		'parent': 'malacostraca',
		'range': 'ww',
		'desc': 'Krill',
	},
	{
		'name': 'fabaceae',
		'rank': 'family',
		'parent': 'fabales',
		'range': 'ww',
	},
	{
		'name': 'fabales',
		'rank': 'order',
		'parent': 'fabids',
		'range': 'ww',
	},
	{
		'name': 'fabids',
		'rank': 'clade',
		'parent': 'rosids',
		'range': 'ww',
	},
	{
		'name': 'fagaceae',
		'rank': 'family',
		'parent': 'fagales',
		'range': 'nh',
	},
	{
		'name': 'fagales',
		'rank': 'order',
		'parent': 'fabids',
		'range': 'ww',
	},
	{
		'name': 'fagus',
		'rank': 'genus',
		'parent': 'fagaceae',
		'range': 'nh',
		'desc': 'Beech',
	},
	{
		'name': 'felidae',
		'rank': 'family',
		'range': 'ww',
		'parent': 'carnivora',
	},
	{
		'name': 'felis',
		'rank': 'genus',
		'range': 'ow',
		'parent': 'felidae',
	},
	{
		'name': 'felis catus',
		'rank': 'species',
		'parent': 'felis',
		// 'important': true,
		'range': 'af',
		'desc': 'Cat',
	},
	{
		'name': 'formicidae',
		'rank': 'family',
		'parent': 'hymenoptera',
		'range': 'ww',
		'desc': 'Ant',
	},
	{
		'name': 'gadidae',
		'rank': 'family',
		'parent': 'gadiformes',
		'range': 'ww',
	},
	{
		'name': 'gadiformes',
		'rank': 'order',
		'parent': 'acanthomorpha',
		'range': 'ww',
	},
	{
		'name': 'gadus',
		'rank': 'genus',
		'parent': 'gadidae',
		'range': 'nh',
		'desc': 'Cod',
	},
	{
		'name': 'galliformes',
		'rank': 'order',
		'parent': 'galloanserae',
		'range': 'ww',
	},
	{
		'name': 'galloanserae',
		'rank': 'superorder',
		'parent': 'aves',
		'range': 'ww',
		'desc': 'Fowl',
	},
	{
		'name': 'gallus',
		'rank': 'genus',
		'range': 'as',
		'parent': 'phasianinae',
	},
	{
		'name': 'gallus gallus',
		'rank': 'species',
		'parent': 'gallus',
		'range': 'as',
		'desc': 'Red Junglefowl',
	},
	{
		'name': 'gallus gallus domesticus',
		'rank': 'subspecies',
		'parent': 'gallus gallus',
		'range': 'as',
		'desc': 'Chicken',
	},
	{
		'name': 'glires',
		'rank': 'clade',
		'parent': 'euarchontoglires',
		'range': 'ww',
	},
	{
		'name': 'gorilla',
		'rank': 'genus',
		'parent': 'homininae',
		'range': 'af',
		'desc': 'Gorilla',
	},
	{
		'name': 'gossypium',
		'rank': 'genus',
		'parent': 'malvaceae',
		'range': 'eq',
		'desc': 'Cotton',
	},
	{
		'name': 'hexapoda',
		'rank': 'subphylum',
		'parent': 'pancrustacea',
		'range': 'ww',
	},
	{
		'name': 'hippotigris',
		'rank': 'subgenus',
		'parent': 'equus',
		'range': 'af',
		'desc': 'Zebra',
	},
	{
		'name': 'hominidae',
		'rank': 'family',
		'parent': 'hominoidea',
		'range': 'ow',
		'desc': 'Great Apes',
	},
	{
		'name': 'homininae',
		'rank': 'subfamily',
		'parent': 'hominidae',
		'range': 'af',
	},
	{
		'name': 'hominini',
		'rank': 'tribe',
		'parent': 'homininae',
		'range': 'af',
	},
	{
		'name': 'hominoidea',
		'rank': 'superfamily',
		'parent': 'primates',
		'range': 'ow',
		'desc': 'Ape',
	},
	{
		'name': 'homo',
		'rank': 'genus',
		'range': 'af',
		'parent': 'hominini',
	},
	{
		'name': 'homo erectus',
		'rank': 'species',
		'parent': 'homo',
		'extinct': true,
		'range': 'ow',
		'desc': 'Ancestor of H. Heidelbergensis, descended from H. Habilis.',
	},
	{
		'name': 'homo habilis',
		'rank': 'species',
		'parent': 'homo',
		'extinct': true,
		'range': 'af',
		'desc': 'Ancestor of H. Erectus, descended from A. Afarensis.',
	},
	{
		'name': 'homo heidelbergensis',
		'rank': 'species',
		'parent': 'homo',
		'extinct': true,
		'range': 'ow',
		'desc': 'Ancestor of H. Sapiens, descended from H. Erectus.',
	},
	{
		'name': 'homo sapiens',
		'rank': 'species',
		'parent': 'homo',
		'important': true,
		'range': 'af',
		'desc': 'Human',
	},
	{
		'name': 'hylobatidae',
		'rank': 'family',
		'parent': 'hominoidea',
		'range': 'as',
		'desc': 'Gibbon',
	},
	{
		'name': 'hymenoptera',
		'rank': 'order',
		'parent': 'insecta',
		'range': 'ww',
	},
	{
		'name': 'insecta',
		'rank': 'class',
		'parent': 'hexapoda',
		'range': 'ww',
		'desc': 'Insects have a chitinous exoskeleton, a three-part body (head, thorax and abdomen), three pairs of jointed legs, compound eyes, and one pair of antennae.'
	},
	{
		'name': 'juglandaceae',
		'rank': 'family',
		'parent': 'fagales',
		'range': 'ww',
	},
	{
		'name': 'juglans',
		'rank': 'genus',
		'parent': 'juglandaceae',
		'range': 'ww',
		'desc': 'Walnut',
	},
	{
		'name': 'lactuca',
		'rank': 'genus',
		'parent': 'asteraceae',
		'range': 'ww',
	},
	{
		'name': 'lactuca sativa',
		'rank': 'species',
		'parent': 'lactuca',
		'range': 'ow',
		'desc': 'Lettuce',
	},
	{
		'name': 'lagomorpha',
		'rank': 'order',
		'parent': 'glires',
		'range': 'ww',
	},
	{
		'name': 'lama',
		'rank': 'genus',
		'parent': 'camelidae',
		'range': 'sa',
	},
	{
		'name': 'lama glama',
		'rank': 'species',
		'parent': 'lama',
		'range': 'sa',
		'desc': 'Llama',
	},
	{
		'name': 'lamiaceae',
		'rank': 'family',
		'parent': 'lamiales',
		'range': 'ww',
	},
	{
		'name': 'lamiales',
		'rank': 'order',
		'parent': 'lamiids',
		'range': 'ww',
	},
	{
		'name': 'lamiids',
		'rank': 'clade',
		'parent': 'asterids',
		'range': 'ww',
	},
	{
		'name': 'lauraceae',
		'rank': 'family',
		'parent': 'laurales',
		'range': 'ww',
	},
	{
		'name': 'laurales',
		'rank': 'order',
		'parent': 'magnoliids',
		'range': 'ww',
	},
	{
		'name': 'laurasiatheria',
		'rank': 'superorder',
		'parent': 'mammalia',
		'range': 'ww',
	},
	{
		'name': 'laurus',
		'rank': 'genus',
		'parent': 'lauraceae',
		'range': 'ow',
	},
	{
		'name': 'laurus nobilis',
		'rank': 'species',
		'parent': 'laurus',
		'range': 'ow',
		'desc': 'Bay Laurel',
	},
	{
		'name': 'lepidoptera',
		'rank': 'order',
		'parent': 'insecta',
		'range': 'ww',
	},
	{
		'name': 'leporidae',
		'rank': 'family',
		'parent': 'lagomorpha',
		'range': 'ww',
		'desc': 'Rabbit, Hare',
	},
	{
		'name': 'life',
		'rank': 'life',
		'parent': '*',
		'range': 'ww',
	},
	{
		'name': 'magnoliales',
		'rank': 'order',
		'parent': 'magnoliids',
		'range': 'ww',
	},
	{
		'name': 'magnoliids',
		'rank': 'clade',
		'parent': 'angiosperms',
		'range': 'ww',
	},
	{
		'name': 'malacostraca',
		'rank': 'class',
		'parent': 'crustacea',
		'range': 'ww',
	},
	{
		'name': 'malus',
		'rank': 'genus',
		'parent': 'rosaceae',
		'range': 'nh',
	},
	{
		'name': 'malus domestica',
		'rank': 'species',
		'parent': 'malus',
		'range': 'as',
		// 'important': true,
		'desc': 'Apple',
	},
	{
		'name': 'malvaceae',
		'rank': 'family',
		'parent': 'malvales',
		'range': 'eq',
		'desc': 'Mallow',
	},
	{
		'name': 'malvales',
		'rank': 'order',
		'parent': 'malvids',
		'range': 'eq',
	},
	{
		'name': 'malvids',
		'rank': 'clade',
		'parent': 'rosids',
		'range': 'ww',
	},
	{
		'name': 'mammalia',
		'rank': 'class',
		'parent': 'amniota',
		'range': 'ww',
	},
	{
		'name': 'medusozoa',
		'rank': 'subphylum',
		'parent': 'cnidaria',
		'range': 'ww',
		'desc': 'Jellyfish',
	},
	{
		'name': 'monocots',
		'rank': 'clade',
		'parent': 'angiosperms',
		'range': 'ww',
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
		'range': 'ww',
	},
	{
		'name': 'mus',
		'rank': 'genus',
		'parent': 'muridae',
		'range': 'ow',
	},
	{
		'name': 'mus musculus',
		'rank': 'species',
		'parent': 'mus',
		'range': 'ow',
		'desc': 'House Mouse',
	},
	{
		'name': 'musa',
		'rank': 'genus',
		'parent': 'musaceae',
		'range': 'as',
		'desc': 'Banana',
	},
	{
		'name': 'musaceae',
		'rank': 'family',
		'parent': 'zingiberales',
		'range': 'ow',
	},
	{
		'name': 'myristica',
		'rank': 'genus',
		'parent': 'myristicaceae',
		'range': 'as',
	},
	{
		'name': 'myristica fragrans',
		'rank': 'species',
		'parent': 'myristica',
		'range': 'as',
		'desc': 'Nutmeg',
	},
	{
		'name': 'myristicaceae',
		'rank': 'family',
		'parent': 'magnoliales',
		'range': 'ww',
	},
	{
		'name': 'neoaves',
		'rank': 'clade',
		'parent': 'aves',
		'range': 'ww',
	},
	{
		'name': 'nephropidae',
		'rank': 'family',
		'parent': 'decapoda',
		'range': 'ww',
		'desc': 'Lobster',
	},
	{
		'name': 'ocimum',
		'rank': 'genus',
		'parent': 'lamiaceae',
		'range': 'ww',
	},
	{
		'name': 'ocimum basilicum',
		'rank': 'species',
		'parent': 'ocimum',
		'range': 'ow',
		'desc': 'Basil',
	},
	{
		'name': 'orchidaceae',
		'rank': 'family',
		'parent': 'asparagales',
		'range': 'ww',
	},
	{
		'name': 'origanum',
		'rank': 'genus',
		'parent': 'lamiaceae',
		'range': 'ow',
	},
	{
		'name': 'origanum vulgare',
		'rank': 'species',
		'parent': 'origanum',
		'range': 'ea',
		'desc': 'Oregano',
	},
	{
		'name': 'oryza',
		'rank': 'genus',
		'parent': 'bop clade',
		'range': 'ww',
	},
	{
		'name': 'oryza sativa',
		'rank': 'species',
		'parent': 'oryza',
		'range': 'as',
		'desc': 'Asian Rice',
	},
	{
		'name': 'osteichthyes',
		'rank': 'superclass',
		'parent': 'chordata',
		'range': 'ww',
	},
	{
		'name': 'ovis',
		'rank': 'genus',
		'parent': 'caprinae',
		'range': 'nh',
	},
	{
		'name': 'ovis aries',
		'rank': 'species',
		'parent': 'ovis',
		'range': 'ea',
		'desc': 'Sheep',
	},
	{
		'name': 'pacmad clade',
		'rank': 'clade',
		'range': 'ww',
		'parent': 'poaceae',
	},
	{
		'name': 'pan',
		'rank': 'genus',
		'range': 'af',
		'parent': 'hominini',
	},
	{
		'name': 'pan troglodytes',
		'rank': 'species',
		'parent': 'pan',
		'range': 'af',
		'desc': 'Chimpanzee',
	},
	{
		'name': 'pancrustacea',
		'rank': 'clade',
		'parent': 'arthropoda',
		'range': 'ww',
	},
	{
		'name': 'panicoideae',
		'rank': 'subfamily',
		'parent': 'pacmad clade',
		'range': 'ww',
	},
	{
		'name': 'panthera',
		'rank': 'genus',
		'parent': 'felidae',
		'range': 'ww',
	},
	{
		'name': 'panthera leo',
		'rank': 'species',
		'parent': 'panthera',
		'range': 'ow',
		'desc': 'Lion',
	},
	{
		'name': 'panthera onca',
		'rank': 'species',
		'parent': 'panthera',
		'range': 'nw',
		'desc': 'Jaguar',
	},
	{
		'name': 'panthera pardus',
		'rank': 'species',
		'parent': 'panthera',
		'range': 'ow',
		'desc': 'Leopard',
	},
	{
		'name': 'panthera tigris',
		'rank': 'species',
		'parent': 'panthera',
		'range': 'as',
		'desc': 'Tiger',
	},
	{
		'name': 'panthera uncia',
		'rank': 'species',
		'parent': 'panthera',
		'range': 'as',
		'desc': 'Snow Leopard',
	},
	{
		'name': 'paridae',
		'rank': 'family',
		'parent': 'passeriformes',
		'range': 'ww',
		'desc': 'Tit',
	},
	{
		'name': 'passeriformes',
		'rank': 'order',
		'parent': 'psittacopasserae',
		'range': 'ww',
	},
	{
		'name': 'pavo',
		'rank': 'genus',
		'parent': 'phasianinae',
		'range': 'as',
		'desc': 'Peafowl',
	},
	{
		'name': 'percomorpha',
		'rank': 'clade',
		'parent': 'acanthomorpha',
		'range': 'ww',
	},
	{
		'name': 'perissodactyla',
		'rank': 'order',
		'parent': 'ungulata',
		'range': 'ww',
	},
	{
		'name': 'petroselinum',
		'rank': 'genus',
		'parent': 'apiaceae',
		'range': 'ow',
	},
	{
		'name': 'petroselinum crispum',
		'rank': 'species',
		'parent': 'petroselinum',
		'range': 'ow',
		'desc': 'Parsley',
	},
	{
		'name': 'phaseolus',
		'rank': 'genus',
		'parent': 'fabaceae',
		'range': 'nw',
	},
	{
		'name': 'phaseolus vulgaris',
		'rank': 'species',
		'parent': 'phaseolus',
		'range': 'nw',
		'desc': 'Common Bean',
	},
	{
		'name': 'phasianidae',
		'rank': 'family',
		'parent': 'galliformes',
		'range': 'ww',
	},
	{
		'name': 'phasianinae',
		'rank': 'subfamily',
		'parent': 'phasianidae',
		'range': 'ow',
	},
	{
		'name': 'phragmites',
		'rank': 'genus',
		'parent': 'pacmad clade',
		'range': 'ww',
		'desc': 'Common Reed',
	},
	{
		'name': 'physalis',
		'rank': 'genus',
		'parent': 'solanaceae',
		'range': 'ww',
	},
	{
		'name': 'physalis philadelphica',
		'rank': 'species',
		'parent': 'physalis',
		'range': 'na',
		'desc': 'Tomatillo',
	},
	{
		'name': 'picea',
		'rank': 'genus',
		'parent': 'pinaceae',
		'range': 'nh',
		'desc': 'Spruce',
	},
	{
		'name': 'pisum',
		'rank': 'genus',
		'parent': 'fabaceae',
		'range': 'ow',
	},
	{
		'name': 'pisum sativum',
		'rank': 'species',
		'parent': 'pisum',
		'range': 'ow',
		'desc': 'Pea',
	},
	{
		'name': 'pinaceae',
		'rank': 'family',
		'parent': 'pinales',
		'range': 'nh',
	},
	{
		'name': 'pinales',
		'rank': 'order',
		'parent': 'pinopsida',
		'range': 'ww',
	},
	{
		'name': 'pinophyta',
		'rank': 'division',
		'parent': 'plantae',
		'range': 'ww',
		'desc': 'Conifer',
	},
	{
		'name': 'pinopsida',
		'rank': 'class',
		'parent': 'pinophyta',
		'range': 'ww',
	},
	{
		'name': 'pinus',
		'rank': 'genus',
		'parent': 'pinaceae',
		'range': 'nh',
		'desc': 'Pine',
	},
	{
		'name': 'piper',
		'rank': 'genus',
		'parent': 'piperaceae',
		'range': 'eq',
	},
	{
		'name': 'piper nigrum',
		'rank': 'species',
		'parent': 'piper',
		'range': 'as',
		'desc': 'Black Pepper',
	},
	{
		'name': 'piperaceae',
		'rank': 'family',
		'parent': 'piperales',
		'range': 'eq',
	},
	{
		'name': 'piperales',
		'rank': 'order',
		'parent': 'magnoliids',
		'range': 'eq',
	},
	{
		'name': 'plantae',
		'rank': 'kingdom',
		'parent': 'eukaryota',
		'range': 'ww',
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
		'range': 'ww',
	},
	{
		'name': 'poaceae',
		'rank': 'family',
		'parent': 'poales',
		'range': 'ww',
		'desc': 'Grass',
	},
	{
		'name': 'pollachius',
		'rank': 'genus',
		'parent': 'gadidae',
		'range': 'al',
		'desc': 'Pollock',
	},
	{
		'name': 'pongo',
		'rank': 'genus',
		'parent': 'hominidae',
		'range': 'as',
		'desc': 'Orangutan',
	},
	{
		'name': 'porifera',
		'rank': 'phylum',
		'parent': 'animalia',
		'range': 'ww',
		'desc': 'Sponge',
	},
	{
		'name': 'primates',
		'rank': 'order',
		'parent': 'euarchontoglires',
		'range': 'eq',
	},
	{
		'name': 'protostomia',
		'rank': 'superphylum',
		'parent': 'bilateria',
		'range': 'ww',
	},
	{
		'name': 'prunus',
		'rank': 'genus',
		'parent': 'rosaceae',
		'range': 'ww',
	},
	{
		'name': 'subg. prunus', // alphabetically treated as if subg. weren't there
		'rank': 'subgenus',
		'parent': 'prunus',
		'range': 'as',
		'desc': 'Plum',
	},
	{
		'name': 'prunus armeniaca',
		'rank': 'species',
		'parent': 'prunus',
		'range': 'as',
		'desc': 'Apricot',
	},
	{
		'name': 'prunus dulcis',
		'rank': 'species',
		'parent': 'prunus',
		'range': 'as',
		'desc': 'Almond',
	},
	{
		'name': 'prunus persica',
		'rank': 'species',
		'parent': 'prunus',
		'range': 'as',
		'desc': 'Peach',
	},
	{
		'name': 'psittaciformes',
		'rank': 'order',
		'parent': 'psittacopasserae',
		'range': 'eq',
		'desc': 'Parrot',
	},
	{
		'name': 'psittacopasserae',
		'rank': 'clade',
		'parent': 'telluraves',
		'range': 'ww',
	},
	{
		'name': 'pyrus',
		'rank': 'genus',
		'parent': 'rosaceae',
		'range': 'ea',
		'desc': 'Pear',
	},
	{
		'name': 'quercus',
		'rank': 'genus',
		'parent': 'fagaceae',
		'range': 'nh',
		'desc': 'Oak',
	},
	{
		'name': 'raphanus',
		'rank': 'genus',
		'parent': 'brassicaceae',
		'range': 'ow',
	},
	{
		'name': 'raphanus sativus',
		'rank': 'species',
		'parent': 'raphanus',
		'range': 'ow',
		'desc': 'Radish',
	},
	{
		'name': 'reptilia',
		'rank': 'class',
		'parent': 'amniota',
		'range': 'ww',
	},
	{
		'name': 'rhopalocera',
		'rank': 'suborder',
		'parent': 'lepidoptera',
		'range': 'ww',
		'desc': 'Butterfly',
	},
	{
		'name': 'rodentia',
		'rank': 'order',
		'parent': 'glires',
		'range': 'ww',
	},
	{
		'name': 'rosaceae',
		'rank': 'family',
		'parent': 'rosales',
		'range': 'ww',
	},
	{
		'name': 'rosales',
		'rank': 'order',
		'parent': 'fabids',
		'range': 'ww',
	},
	{
		'name': 'rosids',
		'rank': 'clade',
		'parent': 'eudicots',
		'range': 'ww',
	},
	{
		'name': 'rutaceae',
		'rank': 'family',
		'parent': 'sapindales',
		'range': 'ww',
	},
	{
		'name': 'saccharum',
		'rank': 'genus',
		'parent': 'panicoideae',
		'range': 'ww',
		'desc': 'Sugarcane'
	},
	{
		'name': 'salmonidae',
		'rank': 'family',
		'parent': 'salmoniformes',
		'range': 'nh',
	},
	{
		'name': 'salmoniformes',
		'rank': 'order',
		'parent': 'teleostei',
		'range': 'nh',
	},
	{
		'name': 'salmoninae',
		'rank': 'subfamily',
		'parent': 'salmonidae',
		'range': 'nh',
		'desc': 'Salmon',
	},
	{
		'name': 'sapindales',
		'rank': 'order',
		'parent': 'malvids',
		'range': 'ww',
	},
	{
		'name': 'sciuridae',
		'rank': 'family',
		'parent': 'rodentia',
		'range': 'ww',
		'desc': 'Squirrel'
	},
	{
		'name': 'scombridae',
		'rank': 'family',
		'parent': 'scombriformes',
		'range': 'ww',
	},
	{
		'name': 'scombriformes',
		'rank': 'order',
		'parent': 'percomorpha',
		'range': 'ww',
	},
	{
		'name': 'selachimorpha',
		'rank': 'superorder',
		'parent': 'chondrichthyes',
		'range': 'ww',
		'desc': 'Shark',
	},
	{
		'name': 'serpentes',
		'rank': 'suborder',
		'parent': 'squamata',
		'range': 'ww',
		'desc': 'Snake'
	},
	{
		'name': 'siluriformes',
		'rank': 'order',
		'parent': 'teleostei',
		'range': 'ww',
		'desc': 'Catfish',
	},
	{
		'name': 'solanaceae',
		'rank': 'family',
		'parent': 'solanales',
		'range': 'ww',
	},
	{
		'name': 'solanales',
		'rank': 'order',
		'parent': 'lamiids',
		'range': 'ww',
	},
	{
		'name': 'solanum',
		'rank': 'genus',
		'parent': 'solanaceae',
		'range': 'ww',
	},
	{
		'name': 'solanum lycopersicum',
		'rank': 'species',
		'parent': 'solanum',
		'range': 'sa',
		'desc': 'Tomato',
	},
	{
		'name': 'solanum melongena',
		'rank': 'species',
		'parent': 'solanum',
		'range': 'ow',
		'desc': 'Eggplant',
	},
	{
		'name': 'solanum tuberosum',
		'rank': 'species',
		'parent': 'solanum',
		'range': 'sa',
		'desc': 'Potato',
	},
	{
		'name': 'sphenisciformes',
		'rank': 'order',
		'parent': 'neoaves',
		'range': 'sh',
		'desc': 'Penguin',
	},
	{
		'name': 'squamata',
		'rank': 'order',
		'parent': 'reptilia',
		'range': 'ww',
	},
	{
		'name': 'strigiformes',
		'rank': 'order',
		'parent': 'telluraves',
		'range': 'ww',
		'desc': 'Owl',
	},
	{
		'name': 'suidae',
		'rank': 'family',
		'parent': 'suina',
		'range': 'ow',
	},
	{
		'name': 'suina',
		'rank': 'suborder',
		'parent': 'artiofabula',
		'range': 'ww',
	},
	{
		'name': 'sus',
		'rank': 'genus',
		'parent': 'suidae',
		'range': 'ow',
		'desc': 'Pig',
	},
	{
		'name': 'teleostei',
		'rank': 'infraclass',
		'parent': 'actinopterygii',
		'range': 'ww',
	},
	{
		'name': 'telluraves',
		'rank': 'clade',
		'parent': 'neoaves',
		'range': 'ww',
	},
	{
		'name': 'tetraodontidae',
		'rank': 'family',
		'parent': 'tetraodontiformes',
		'range': 'eq',
		'desc': 'Pufferfish',
	},
	{
		'name': 'tetraodontiformes',
		'rank': 'order',
		'parent': 'percomorpha',
		'range': 'ww',
	},
	{
		'name': 'tetrapoda',
		'rank': 'superclass',
		'parent': 'osteichthyes',
		'range': 'ww',
	},
	{
		'name': 'theobroma',
		'rank': 'genus',
		'parent': 'malvaceae',
		'range': 'nw',
	},
	{
		'name': 'theobroma cacao',
		'rank': 'species',
		'parent': 'theobroma',
		'range': 'nw',
		'desc': 'Cocoa',
	},
	{
		'name': 'theropoda',
		'rank': 'clade',
		'parent': 'archosauria',
		'range': 'ww',
	},
	{
		'name': 'thunni',
		'rank': 'tribe',
		'parent': 'scombridae',
		'range': 'ww',
		'desc': 'Tuna',
	},
	{
		'name': 'triticum',
		'rank': 'genus',
		'parent': 'bop clade',
		'range': 'as',
		'desc': 'Wheat',
	},
	{
		'name': 'tursiops',
		'rank': 'genus',
		'parent': 'delphinidae',
		'range': 'ww',
		'desc': 'Bottlenose Dolphin',
	},
	{
		'name': 'tylopoda',
		'rank': 'suborder',
		'parent': 'artiodactyla',
		'range': 'ww',
	},
	{
		'name': 'tyrannosauridae',
		'rank': 'family',
		'parent': 'theropoda',
		'range': 'nh',
		'extinct': true,
	},
	{
		'name': 'tyrannosaurus',
		'rank': 'genus',
		'parent': 'tyrannosauridae',
		'range': 'na',
		'extinct': true,
	},
	{
		'name': 'tyrannosaurus rex',
		'rank': 'species',
		'parent': 'tyrannosaurus',
		'range': 'na',
		'extinct': true,
	},
	{
		'name': 'ungulata',
		'rank': 'clade',
		'parent': 'laurasiatheria',
		'range': 'ww',
	},
	{
		'name': 'vanilla',
		'rank': 'genus',
		'parent': 'orchidaceae',
		'range': 'eq',
	},
	{
		'name': 'vanilla planifolia',
		'rank': 'species',
		'parent': 'vanilla',
		'range': 'nw',
		'desc': 'Vanilla',
	},
	{
		'name': 'vitaceae',
		'rank': 'family',
		'parent': 'vitales',
		'range': 'ww',
	},
	{
		'name': 'vitales',
		'rank': 'order',
		'parent': 'rosids',
		'range': 'ww',
	},
	{
		'name': 'vitis',
		'rank': 'genus',
		'parent': 'vitaceae',
		'range': 'ow',
		'desc': 'Grape',
	},
	{
		'name': 'vulpes',
		'rank': 'genus',
		'parent': 'canidae',
		'range': 'ww',
	},
	{
		'name': 'vulpes vulpes',
		'rank': 'species',
		'parent': 'vulpes',
		'range': 'nh',
		'desc': 'Red Fox',
	},
	{
		'name': 'zea',
		'rank': 'genus',
		'parent': 'panicoideae',
		'range': 'na',
	},
	{
		'name': 'zea mays',
		'rank': 'species',
		'parent': 'zea',
		'range': 'na',
		'desc': 'Maize',
	},
	{
		'name': 'zingiber',
		'rank': 'genus',
		'parent': 'zingiberaceae',
		'range': 'as',
	},
	{
		'name': 'zingiber officinale',
		'rank': 'species',
		'parent': 'zingiber',
		'range': 'as',
		'desc': 'Ginger',
	},
	{
		'name': 'zingiberaceae',
		'rank': 'family',
		'parent': 'zingiberales',
		'range': 'eq',
	},
	{
		'name': 'zingiberales',
		'rank': 'order',
		'parent': 'commelinids',
		'range': 'eq',
	},
];