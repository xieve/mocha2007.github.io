/* exported etymData, etymLangData */

// shortcuts
const EDS = {
	german: 'German',
	greek: 'Ancient Greek',
	latin: 'Latin',
	mocha: '(mochanoises)',
};

const etymData = [
	// make these alphabetical
	// GERMAN
	{
		head: 'ur-',
		lang: EDS.german,
		gloss: 'primitive',
		forms: ['ur'],
	},
	// LATIN
	{
		head: '-a',
		lang: EDS.latin,
		gloss: '(taxon)',
		forms: ['a$'],
	},
	{
		head: '-acea',
		lang: EDS.latin,
		gloss: '(suborder of animal or superfamily of non-animal)',
		forms: ['acea$'],
	},
	{
		head: '-aceae',
		lang: EDS.latin,
		gloss: '(family of non-animal)',
		forms: ['aceae$'],
	},
	{
		head: '-ales',
		lang: EDS.latin,
		gloss: '(order)',
		forms: ['ales$'],
	},
	{
		head: '-anae',
		lang: EDS.latin,
		gloss: '(superorder of non-animal)',
		forms: ['ales$'],
	},
	{
		head: '-ara',
		lang: EDS.latin,
		gloss: '(nothogenus)',
		forms: ['ara$'],
	},
	{
		head: '-aria',
		lang: EDS.latin,
		gloss: '(taxon)',
		forms: ['aria$'],
	},
	{
		head: '-atus',
		lang: EDS.latin,
		gloss: '(PP)',
		forms: ['ate$', 'at'], // eg. choano-flagell-at-ea
	},
	{
		head: '-ea',
		lang: EDS.latin,
		gloss: '(taxon)',
		forms: ['ea$'],
	},
	{
		head: '-eae',
		lang: EDS.latin,
		gloss: '(tribe of non-animal)',
		forms: ['eae$'],
	},
	{
		head: '-ell-',
		lang: EDS.latin,
		gloss: '(DIM)',
		forms: ['ell', 'el'],
	},
	{
		head: '-es',
		lang: EDS.latin,
		gloss: '(taxon)',
		forms: ['es$'],
	},
	{
		head: '-fer',
		lang: EDS.latin,
		gloss: 'bearing',
		forms: ['ifer', 'fer'], // loric-ifera
	},
	{
		head: '-ia',
		lang: EDS.latin,
		gloss: '(taxon)',
		forms: ['ia$'],
	},
	{
		head: '-icus',
		lang: EDS.latin,
		gloss: '(ADJ)',
		forms: ['ic$'],
	},
	{
		head: '-ida',
		lang: EDS.latin,
		gloss: '(taxon)',
		forms: ['ida$', 'oda$', 'da$'],
	},
	{
		head: '-idae',
		lang: EDS.latin,
		gloss: '(family of animal or subclass of plant)',
		forms: ['idae$'],
	},
	{
		head: '-iformes',
		lang: EDS.latin,
		gloss: '(order of animal)',
		forms: ['iformes$'],
	},
	{
		head: '-ina',
		lang: EDS.latin,
		gloss: '(subtribe or superorder of animal)',
		forms: ['ina$'],
	},
	{
		head: '-inae',
		lang: EDS.latin,
		gloss: '(superfamily of animal or subtribe of non-animal)',
		forms: ['inae$'],
	},
	{
		head: '-ini',
		lang: EDS.latin,
		gloss: '(tribe of animal)',
		forms: ['ini$'],
	},
	{
		head: '-ites',
		lang: EDS.latin,
		gloss: '(taxon)',
		forms: ['ites$'],
	},
	{
		head: '-nus',
		lang: EDS.latin,
		gloss: '(ADJ)',
		forms: ['n$'],
	},
	{
		head: '-odes',
		lang: EDS.latin,
		gloss: '(taxon)',
		forms: ['odes$'],
	},
	{
		head: '-oida',
		lang: EDS.latin,
		gloss: '(taxon)',
		forms: ['oida$'],
	},
	{
		head: '-oidea',
		lang: EDS.latin,
		gloss: '(superfamily of animal)',
		forms: ['oidea$'],
	},
	{
		head: '-oides',
		lang: EDS.latin,
		gloss: '(taxon)',
		forms: ['oides$'],
	},
	{
		head: '-ul-',
		lang: EDS.latin,
		gloss: '(DIM)',
		forms: ['ul'],
	},
	{
		head: '-us',
		lang: EDS.latin,
		gloss: '(taxon)',
		forms: ['us$'],
	},
	{
		head: 'anus',
		lang: EDS.latin,
		gloss: 'ring',
		forms: ['ann', 'an'],
	},
	{
		head: 'flagellum',
		lang: EDS.latin,
		gloss: 'whip',
		forms: ['flagell'],
	},
	{
		head: 'gradior',
		lang: EDS.latin,
		gloss: 'step',
		forms: ['grad'],
	},
	{
		head: 'lorica',
		lang: EDS.latin,
		gloss: 'breastplate',
		forms: ['loric'],
	},
	{
		head: 'mollusca',
		lang: EDS.latin,
		gloss: 'a kind of soft nut with a thin shell',
		forms: ['mollusc'],
	},
	{
		head: 'porus',
		lang: EDS.latin,
		gloss: 'pore',
		forms: ['por'],
	},
	{
		head: 'rota',
		lang: EDS.latin,
		gloss: 'wheel',
		forms: ['rot'],
	},
	{
		head: 'tardus',
		lang: EDS.latin,
		gloss: 'slow',
		forms: ['tardi', 'tard'],
	},
	// ANCIENT GREEK
	{
		head: '-árkhēs',
		lang: EDS.greek,
		gloss: 'leader',
		forms: ['arch'],
	},
	{
		head: '-ikós',
		lang: EDS.greek,
		gloss: '(ADJ)',
		forms: ['ic$'],
	},
	{
		head: '-îtis',
		lang: EDS.greek,
		gloss: '(disease)',
		forms: ['itis$'],
	},
	{
		head: '-nos',
		lang: EDS.greek,
		gloss: '(ADJ)',
		forms: ['n$'],
	},
	{
		head: '-ṓtēs',
		lang: EDS.greek,
		gloss: '(noun-forming suffix)',
		forms: ['ota$', 'ta$'],
	},
	{
		head: '-phóros',
		lang: EDS.greek,
		gloss: 'bearing',
		forms: ['phor'],
	},
	{
		head: 'an-',
		lang: EDS.greek,
		gloss: 'un-',
		forms: ['an', 'a'],
	},
	{
		head: 'amníon',
		lang: EDS.greek,
		gloss: 'bowl',
		forms: ['amnio'],
	},
	{
		head: 'arkhaîos',
		lang: EDS.greek,
		gloss: 'ancient',
		forms: ['archaeo', 'archae'],
	},
	{
		head: 'árthron',
		lang: EDS.greek,
		gloss: 'joint',
		forms: ['arthro', 'arthr'],
	},
	{
		head: 'Boréās',
		lang: EDS.greek,
		gloss: 'north',
		forms: ['boreo'],
	},
	{
		head: 'brakhíōn',
		lang: EDS.greek,
		gloss: 'arm',
		forms: ['brachio'],
	},
	{
		head: 'brúon',
		lang: EDS.greek,
		gloss: 'moss',
		forms: ['bryo'],
	},
	{
		head: 'dérma',
		lang: EDS.greek,
		gloss: 'skin',
		forms: ['derm'],
	},
	{
		head: 'deúteros',
		lang: EDS.greek,
		gloss: 'second',
		forms: ['deutero'],
	},
	{
		head: 'dís',
		lang: EDS.greek,
		gloss: 'twice',
		forms: ['di'],
	},
	{
		head: 'ekhînos',
		lang: EDS.greek,
		gloss: 'hedgehog',
		forms: ['echino'],
	},
	{
		head: 'entós',
		lang: EDS.greek,
		gloss: 'within',
		forms: ['endo', 'ento'],
	},
	{
		head: 'eǘs',
		lang: EDS.greek,
		gloss: 'good',
		forms: ['eu'],
	},
	{
		head: 'gastḗr',
		lang: EDS.greek,
		gloss: 'belly',
		forms: ['gastro'],
	},
	{
		head: 'génos',
		lang: EDS.greek,
		gloss: 'birth',
		forms: ['gen'],
	},
	{
		head: 'gnáthos',
		lang: EDS.greek,
		gloss: 'jaw',
		forms: ['gnatho', 'gnath'],
	},
	{
		head: 'haplóos',
		lang: EDS.greek,
		gloss: 'single',
		forms: ['haplo'],
	},
	{
		head: 'hélmins',
		lang: EDS.greek,
		gloss: 'parasitic worm',
		forms: ['helminth'],
	},
	{
		head: 'hḗmisus',
		lang: EDS.greek,
		gloss: 'half',
		forms: ['hemi'],
	},
	{
		head: 'hólos',
		lang: EDS.greek,
		gloss: 'whole',
		forms: ['holo'],
	},
	{
		head: 'húdōr',
		lang: EDS.greek,
		gloss: 'water',
		forms: ['hydro'],
	},
	{
		head: 'ikhthū́s',
		lang: EDS.greek,
		gloss: 'fish',
		forms: ['ichthy'],
	},
	{
		head: 'káruon',
		lang: EDS.greek,
		gloss: 'nut',
		forms: ['kary'],
	},
	{
		head: 'katá',
		lang: EDS.greek,
		gloss: 'down',
		forms: ['cata'],
	},
	{
		head: 'khaítē',
		lang: EDS.greek,
		gloss: 'flowing hair',
		forms: ['chaeto'],
	},
	{
		head: 'khlōrós',
		lang: EDS.greek,
		gloss: 'pale green',
		forms: ['chloro'],
	},
	{
		head: 'khoánē',
		lang: EDS.greek,
		gloss: 'funnel',
		forms: ['choano'],
	},
	{
		head: 'khordḗ',
		lang: EDS.greek,
		gloss: 'guts',
		forms: ['chord'],
	},
	{
		head: 'knídē',
		lang: EDS.greek,
		gloss: 'nettle',
		forms: ['cnid'],
	},
	{
		head: 'kontós',
		lang: EDS.greek,
		gloss: 'pole',
		forms: ['kont'],
	},
	{
		head: 'kotulēdṓn',
		lang: EDS.greek,
		gloss: 'cup-shaped cavity',
		forms: ['cotyledon'],
	},
	{
		head: 'khrôma',
		lang: EDS.greek,
		gloss: 'color',
		forms: ['chromo'], // chromosome
	},
	{
		head: 'kinéō',
		lang: EDS.greek,
		gloss: 'move',
		forms: ['kino'],
	},
	{
		head: 'koîlos',
		lang: EDS.greek,
		gloss: 'hollow',
		forms: ['coelo'],
	},
	{
		head: 'kteís',
		lang: EDS.greek,
		gloss: 'comb',
		forms: ['cteno'],
	},
	{
		head: 'kúklos',
		lang: EDS.greek,
		gloss: 'circle',
		forms: ['cyclio'], // cycliophora
	},
	{
		head: 'lúsis',
		lang: EDS.greek,
		gloss: 'loosening',
		forms: ['lysis', 'lyso', 'lys'],
	},
	{
		head: 'méros',
		lang: EDS.greek,
		gloss: 'part',
		forms: ['mere', 'mero'], // telomere, meronym
	},
	{
		head: 'metá',
		lang: EDS.greek,
		gloss: 'amid',
		forms: ['meta'],
	},
	{
		head: 'mikrós',
		lang: EDS.greek,
		gloss: 'small',
		forms: ['micro'],
	},
	{
		head: 'mónos',
		lang: EDS.greek,
		gloss: 'single',
		forms: ['mono'],
	},
	{
		head: 'morphḗ',
		lang: EDS.greek,
		gloss: 'shape',
		forms: ['morph'],
	},
	{
		head: 'múkēs',
		lang: EDS.greek,
		gloss: 'fungus',
		forms: ['mycetes$', 'mycet', 'myco'],
	},
	{
		head: 'nêma',
		lang: EDS.greek,
		gloss: 'thread',
		forms: ['nemato'],
	},
	{
		head: 'Nēmertḗs',
		lang: EDS.greek,
		gloss: 'Nemertes',
		forms: ['nemert'],
	},
	{
		head: 'néō',
		lang: EDS.greek,
		gloss: 'swim',
		forms: ['nect'],
	},
	{
		head: 'néos',
		lang: EDS.greek,
		gloss: 'new',
		forms: ['neo'],
	},
	{
		head: 'nephrós',
		lang: EDS.greek,
		gloss: 'kidney',
		forms: ['nephro'],
	},
	{
		head: 'nítron',
		lang: EDS.greek,
		gloss: 'washing soda',
		forms: ['nitro'],
	},
	{
		head: 'odṓn',
		lang: EDS.greek,
		gloss: 'tooth',
		forms: ['odon'],
	},
	{
		head: 'oîstros',
		lang: EDS.greek,
		gloss: 'madness',
		forms: ['oestro', 'estro'],
	},
	{
		head: 'ónukhos',
		lang: EDS.greek,
		gloss: 'claw',
		forms: ['onycho'],
	},
	{
		head: 'opísthios',
		lang: EDS.greek,
		gloss: 'rear',
		forms: ['opistho'],
	},
	{
		head: 'ópsis',
		lang: EDS.greek,
		gloss: 'appearance',
		forms: ['opsida$', 'ops$'],
	},
	{
		head: 'orthós',
		lang: EDS.greek,
		gloss: 'straight',
		forms: ['ortho'],
	},
	{
		head: 'ostéon',
		lang: EDS.greek,
		gloss: 'bone',
		forms: ['osteo', 'oste', 'ost'], // osteoarthritis, osteichthyes, teleost
	},
	{
		head: 'oxús',
		lang: EDS.greek,
		gloss: 'sharp',
		forms: ['oxy'],
	},
	{
		head: 'pará',
		lang: EDS.greek,
		gloss: 'beside',
		forms: ['para'],
	},
	{
		head: 'Phorōnís',
		lang: EDS.greek,
		gloss: 'Phoronis',
		forms: ['phoron'],
	},
	{
		head: 'phûkos',
		lang: EDS.greek,
		gloss: 'seaweed',
		forms: ['phyco', 'phyc'],
	},
	{
		head: 'phutón',
		lang: EDS.greek,
		gloss: 'plant',
		forms: ['phyta$', 'phyte$', 'phyto', 'phyt'],
	},
	{
		head: 'platús',
		lang: EDS.greek,
		gloss: 'flat',
		forms: ['platy'],
	},
	{
		head: 'pláx',
		lang: EDS.greek,
		gloss: 'plate',
		forms: ['placo'],
	},
	{
		head: 'pnoḗ',
		lang: EDS.greek,
		gloss: 'breath',
		forms: ['pno'],
	},
	{
		head: 'póa',
		lang: EDS.greek,
		gloss: 'fodder',
		forms: ['po'],
	},
	{
		head: 'poús',
		lang: EDS.greek,
		gloss: 'foot',
		forms: ['podo', 'pod'],
	},
	{
		head: 'Príapos',
		lang: EDS.greek,
		gloss: 'Priapus',
		forms: ['priap'],
	},
	{
		head: 'prōktós',
		lang: EDS.greek,
		gloss: 'anus',
		forms: ['proct'],
	},
	{
		head: 'Prōteús',
		lang: EDS.greek,
		gloss: 'Proteus',
		forms: ['proteo'],
	},
	{
		head: 'prôtos',
		lang: EDS.greek,
		gloss: 'first',
		forms: ['proto'],
	},
	{
		head: 'pterón',
		lang: EDS.greek,
		gloss: 'feather',
		forms: ['ptero'],
	},
	{
		head: 'ptérux',
		lang: EDS.greek,
		gloss: 'wing',
		forms: ['pteryg'],
	},
	{
		head: 'rhipídion',
		lang: EDS.greek,
		gloss: 'bellows',
		forms: ['rhipid'],
	},
	{
		head: 'rhī́s',
		lang: EDS.greek,
		gloss: 'nose',
		forms: ['rhino'],
	},
	{
		head: 'rhómbos',
		lang: EDS.greek,
		gloss: 'rhombus',
		forms: ['rhombo'],
	},
	{
		head: 'rhúnkhos',
		lang: EDS.greek,
		gloss: 'snout',
		forms: ['rhynch'],
	},
	{
		head: 'sárx',
		lang: EDS.greek,
		gloss: 'flesh',
		forms: ['sarco'],
	},
	{
		head: 'skótos',
		lang: EDS.greek,
		gloss: 'darkness',
		forms: ['scoto'],
	},
	{
		head: 'sôma',
		lang: EDS.greek,
		gloss: 'body',
		forms: ['some'], // chromosome
	},
	{
		head: 'stóma',
		lang: EDS.greek,
		gloss: 'mouth',
		forms: ['stom'],
	},
	{
		head: 'sún',
		lang: EDS.greek,
		gloss: 'with',
		forms: ['syn', 'sym'],
	},
	{
		head: 'tainíā',
		lang: EDS.greek,
		gloss: 'band',
		forms: ['teny$'], // synteny
	},
	{
		head: 'téleios',
		lang: EDS.greek,
		gloss: 'complete',
		forms: ['tele'], // teleost
	},
	{
		head: 'tetra-',
		lang: EDS.greek,
		gloss: 'four',
		forms: ['tetra'],
	},
	{
		head: 'títhēmi',
		lang: EDS.greek,
		gloss: 'put',
		forms: ['thesis$', 'thet'],
	},
	{
		head: 'thēríon',
		lang: EDS.greek,
		gloss: 'beast',
		forms: ['theria'],
	},
	{
		head: 'thríx',
		lang: EDS.greek,
		gloss: 'hair',
		forms: ['thrich', 'trich'], // gastrotrica drops the h for some reason
	},
	{
		head: 'xénos',
		lang: EDS.greek,
		gloss: 'alien',
		forms: ['xeno', 'xen'],
	},
	{
		head: 'zôion',
		lang: EDS.greek,
		gloss: 'animal',
		forms: ['zoo', 'zoa', 'zo'],
	},
	/*
	{
		head: '(mochanoise)',
		lang: EDS.mocha,
		gloss: 'gay',
		forms: ['kippi', 'boi', 'snueg'],
	},
	*/
];

// compile langs automatically

const etymLangData = [];
etymData.forEach(o => {
	if (etymLangData.includes(o.lang))
		return;
	etymLangData.push(o.lang);
});