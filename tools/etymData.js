/* exported etymData, etymLangData */

// shortcuts
const EDS = {
	english: 'English',
	german: 'German',
	greek: 'Ancient Greek',
	italian: 'Italian',
	latin: 'Latin',
	mocha: '(mochanoises)',
	spanish: 'Spanish',
};

const etymData = [
	// make these alphabetical
	// ENGLISH
	{
		head: '-er',
		lang: EDS.english,
		gloss: '(agent)',
		forms: ['er'],
	},
	{
		head: '-ish',
		lang: EDS.english,
		gloss: '(ADJ)',
		forms: ['ish$'],
	},
	{
		head: '-ly',
		lang: EDS.english,
		gloss: '(ADV)',
		forms: ['ly$'],
	},
	{
		head: '-ness',
		lang: EDS.english,
		gloss: '(N)',
		forms: ['ness'],
	},
	{
		head: '-s',
		lang: EDS.english,
		gloss: '(PL)',
		forms: ['s$', 'es$'],
	},
	{
		head: '-y',
		lang: EDS.english,
		gloss: '(N) or (ADJ)',
		forms: ['y$', 'ie(?=s$)'],
	},
	{
		head: 'ribo-',
		lang: EDS.english,
		gloss: 'ribose', // the word ribose is an alteration of arabinose, which comes from arabi-
		forms: ['ribo'],
	},
	{
		head: 'rna',
		lang: EDS.english,
		gloss: 'RNA',
		forms: ['rna'],
	},
	// GERMAN
	{
		head: 'ur-',
		lang: EDS.german,
		gloss: 'primitive',
		forms: ['ur'],
	},
	// ITALIAN
	{
		head: '-ino',
		lang: EDS.italian,
		gloss: '(DIM)',
		forms: ['ino'],
	},
	// SPANISH
	{
		head: 'pico',
		lang: EDS.spanish,
		gloss: 'speck',
		forms: ['pico'],
	},
	// LATIN
	{
		head: '-a',
		lang: EDS.latin,
		gloss: '(N)',
		forms: ['a$', 'ae$'],
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
		head: '-alis',
		lang: EDS.latin,
		gloss: '(ADJ)',
		forms: ['alis$', 'ales$', 'alia$', 'al'],
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
		forms: ['ate$', 'ato', 'at'], // eg. choano-flagell-at-ea
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
		forms: ['ic'],
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
		head: '-ilis',
		lang: EDS.latin,
		gloss: '-ile',
		forms: ['ile$', 'il'],
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
		head: '-ista',
		lang: EDS.latin,
		gloss: '-ist',
		forms: ['ista$', 'ist$'],
	},
	{
		head: '-itas',
		lang: EDS.latin,
		gloss: '(N)',
		forms: ['ity$', 'itie(?=s$)'],
	},
	{
		head: '-ites',
		lang: EDS.latin,
		gloss: '(taxon)',
		forms: ['ites$'],
	},
	{
		head: '-ius',
		lang: EDS.latin,
		gloss: '(N)',
		forms: ['ius$', 'ii$'],
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
		head: '-um',
		lang: EDS.latin,
		gloss: '(N)',
		forms: ['um$'],
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
		gloss: '(N)',
		forms: ['us$', 'i$'],
	},
	{
		head: 'amoeba',
		lang: EDS.latin,
		gloss: 'change',
		forms: ['amoebo'],
	},
	{
		head: 'anus',
		lang: EDS.latin,
		gloss: 'ring',
		forms: ['an', 'ann'], // irregular ann- in annelid
	},
	{
		head: 'avis',
		lang: EDS.latin,
		gloss: 'bird',
		forms: ['av'],
	},
	{
		head: 'colo',
		lang: EDS.latin,
		gloss: 'strain',
		forms: ['colo', 'col'],
	},
	{
		head: 'conus',
		lang: EDS.latin,
		gloss: 'cone',
		forms: ['con'],
	},
	{
		head: 'flagellum',
		lang: EDS.latin,
		gloss: 'whip',
		forms: ['flagell'],
	},
	{
		head: 'fungus',
		lang: EDS.latin,
		gloss: 'fungus',
		forms: ['fung'],
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
		head: 'mamma',
		lang: EDS.latin,
		gloss: 'breast',
		forms: ['mamm'],
	},
	{
		head: 'mollusca',
		lang: EDS.latin,
		gloss: 'a kind of soft nut with a thin shell',
		forms: ['mollusc'],
	},
	{
		head: 'neuter',
		lang: EDS.latin,
		gloss: 'neither',
		forms: ['neuter', 'neutr'],
	},
	{
		head: 'per',
		lang: EDS.latin,
		gloss: 'through',
		forms: ['per'],
	},
	{
		head: 'planta',
		lang: EDS.latin,
		gloss: 'sprout',
		forms: ['plant'],
	},
	{
		head: 'porus',
		lang: EDS.latin,
		gloss: 'pore',
		forms: ['por'],
	},
	{
		head: 'repo',
		lang: EDS.latin,
		gloss: 'creep',
		forms: ['rept'],
	},
	{
		head: 'ros',
		lang: EDS.latin,
		gloss: 'rose',
		forms: ['ros'],
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
	{
		head: 'viridis',
		lang: EDS.latin,
		gloss: 'green',
		forms: ['viridi'],
	},
	{
		head: 'virus',
		lang: EDS.latin,
		gloss: 'poison',
		forms: ['vir'],
	},
	// ANCIENT GREEK
	{
		head: '-a',
		lang: EDS.greek,
		gloss: '(N)',
		forms: ['a$'],
	},
	{
		head: '-árkhēs',
		lang: EDS.greek,
		gloss: 'leader',
		forms: ['arche', 'arch'],
	},
	{
		head: '-ikós',
		lang: EDS.greek,
		gloss: '(ADJ)',
		forms: ['ic'],
	},
	{
		head: '-íon',
		lang: EDS.greek,
		gloss: '(N)',
		forms: ['ion$'],
	},
	{
		head: '-ismós',
		lang: EDS.greek,
		gloss: '(N)',
		forms: ['ism'],
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
		head: '-on',
		lang: EDS.greek,
		gloss: '(N)',
		forms: ['on'],
	},
	{
		head: '-ōsis',
		lang: EDS.greek,
		gloss: '(state)',
		forms: ['osis$', 'sis$'],
	},
	{
		head: '-ṓtēs',
		lang: EDS.greek,
		gloss: '(N)',
		forms: ['ota$', 'ta$'],
	},
	{
		head: '-phóros',
		lang: EDS.greek,
		gloss: 'bearing',
		forms: ['phor'],
	},
	{
		head: 'aktís',
		lang: EDS.greek,
		gloss: 'ray',
		forms: ['actino'],
	},
	{
		head: 'an-',
		lang: EDS.greek,
		gloss: 'un-',
		forms: ['an', 'a'],
	},
	{
		head: 'aná',
		lang: EDS.greek,
		gloss: 'up',
		forms: ['ana'],
	},
	{
		head: 'amníon',
		lang: EDS.greek,
		gloss: 'bowl',
		forms: ['amnio'],
	},
	{
		head: 'amphí',
		lang: EDS.greek,
		gloss: 'both',
		forms: ['amphi'],
	},
	{
		head: 'angeîon',
		lang: EDS.greek,
		gloss: 'receptacle',
		forms: ['angio'],
	},
	{
		head: 'ánthos',
		lang: EDS.greek,
		gloss: 'flower',
		forms: ['antho'],
	},
	{
		head: 'ánthrōpos',
		lang: EDS.greek,
		gloss: 'human',
		forms: ['anthropo', 'anthrope$'],
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
		head: 'autós',
		lang: EDS.greek,
		gloss: 'self',
		forms: ['auto'],
	},
	{
		head: 'baktēríā',
		lang: EDS.greek,
		gloss: 'rod',
		forms: ['bacteri'],
	},
	{
		head: 'bíos',
		lang: EDS.greek,
		gloss: 'life',
		forms: ['bio', 'bi'],
	},
	{
		head: 'Boréās',
		lang: EDS.greek,
		gloss: 'north',
		forms: ['boreo'],
	},
	{
		head: 'botánē',
		lang: EDS.greek,
		gloss: 'herb',
		forms: ['botan'],
	},
	{
		head: 'bradús',
		lang: EDS.greek,
		gloss: 'slow',
		forms: ['brady'],
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
		head: 'dáktulos',
		lang: EDS.greek,
		gloss: 'finger',
		forms: ['dactyl'],
	},
	{
		head: 'deinós',
		lang: EDS.greek,
		gloss: 'terrible',
		forms: ['deino', 'dino'], // dinosaur was coined very early and uses an older romanization
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
		head: 'drósos',
		lang: EDS.greek,
		gloss: 'dew',
		forms: ['droso'],
	},
	{
		head: 'ekhînos',
		lang: EDS.greek,
		gloss: 'hedgehog',
		forms: ['echino'],
	},
	{
		head: 'ḗlektron',
		lang: EDS.greek,
		gloss: 'amber',
		forms: ['electron', 'electro', 'electr'],
	},
	{
		head: 'en',
		lang: EDS.greek,
		gloss: 'in',
		forms: ['en'],
	},
	{
		head: 'entós',
		lang: EDS.greek,
		gloss: 'within',
		forms: ['endo', 'ento'],
	},
	{
		head: 'epí',
		lang: EDS.greek,
		gloss: 'on',
		forms: ['epi', 'ep'],
	},
	{
		head: 'étumon',
		lang: EDS.greek,
		gloss: 'true meaning',
		forms: ['etymo'],
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
		head: 'geneá',
		lang: EDS.greek,
		gloss: 'birth',
		forms: ['genea'],
	},
	{
		head: 'génesis',
		lang: EDS.greek,
		gloss: 'birth',
		forms: ['genesis$', 'genet'],
	},
	{
		head: 'génos',
		lang: EDS.greek,
		gloss: 'birth',
		forms: ['gen'],
	},
	{
		head: 'glḗnē',
		lang: EDS.greek,
		gloss: 'eye',
		forms: ['gleno'],
	},
	{
		head: 'gnáthos',
		lang: EDS.greek,
		gloss: 'jaw',
		forms: ['gnatho', 'gnath'],
	},
	{
		head: 'grámma',
		lang: EDS.greek,
		gloss: 'letter',
		forms: ['gram$'],
	},
	{
		head: 'graphḗ',
		lang: EDS.greek,
		gloss: 'writing',
		forms: ['graph'],
	},
	{
		head: 'haplóos',
		lang: EDS.greek,
		gloss: 'single',
		forms: ['haplo'],
	},
	{
		head: 'háptō',
		lang: EDS.greek,
		gloss: 'touch',
		forms: ['hapto', 'hapt'],
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
		head: 'hupér',
		lang: EDS.greek,
		gloss: 'over',
		forms: ['hyper'],
	},
	{
		head: 'hupó',
		lang: EDS.greek,
		gloss: 'under',
		forms: ['hypo'],
	},
	{
		head: 'ikhthū́s',
		lang: EDS.greek,
		gloss: 'fish',
		forms: ['ichthy'],
	},
	{
		head: 'ísos',
		lang: EDS.greek,
		gloss: 'equal',
		forms: ['iso'],
	},
	{
		head: 'kardía',
		lang: EDS.greek,
		gloss: 'heart',
		forms: ['cardio', 'cardia'],
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
		head: 'kephalḗ',
		lang: EDS.greek,
		gloss: 'head',
		forms: ['cephalo'],
	},
	{
		head: 'kéras',
		lang: EDS.greek,
		gloss: 'horn',
		forms: ['ceroto', 'ceros$'],
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
		head: 'khóndros',
		lang: EDS.greek,
		gloss: 'grain',
		forms: ['chondr'],
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
		forms: ['chromo', 'chrome$', 'chrom'], // chromosome
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
		head: 'kruptós',
		lang: EDS.greek,
		gloss: 'hidden',
		forms: ['crypto', 'crypt'],
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
		head: 'lípos',
		lang: EDS.greek,
		gloss: 'fat',
		forms: ['lipo'],
	},
	{
		head: 'lógos',
		lang: EDS.greek,
		gloss: 'word',
		forms: ['logue$', 'logo', 'log'],
	},
	{
		head: 'lúkos',
		lang: EDS.greek,
		gloss: 'wolf',
		forms: ['lyco', 'lyc'],
	},
	{
		head: 'lúsis',
		lang: EDS.greek,
		gloss: 'loosening',
		forms: ['lysis', 'lyso', 'lys'],
	},
	{
		head: 'mástix',
		lang: EDS.greek,
		gloss: 'whip',
		forms: ['mastigo'],
	},
	{
		head: 'mēkhanḗ',
		lang: EDS.greek,
		gloss: 'machine',
		forms: ['mechan'],
	},
	{
		head: 'meíōn',
		lang: EDS.greek,
		gloss: 'less',
		forms: ['meio'],
	},
	{
		head: 'métron',
		lang: EDS.greek,
		gloss: 'measure',
		forms: ['meter', 'metr'],
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
		head: 'mítos',
		lang: EDS.greek,
		gloss: 'thread',
		forms: ['mito'],
	},
	{
		head: 'mítra',
		lang: EDS.greek,
		gloss: 'girdle',
		forms: ['mitri'], // Haplomitriopsida
	},
	{
		head: 'mónos',
		lang: EDS.greek,
		gloss: 'single',
		forms: ['monad', 'mono'],
	},
	{
		head: 'mōrós',
		lang: EDS.greek,
		gloss: 'slow',
		forms: ['moron', 'more$'],
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
		head: 'nânos',
		lang: EDS.greek,
		gloss: 'dwarf',
		forms: ['nano'],
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
		forms: ['odont', 'odon'],
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
		forms: ['o?psida$', 'ops$'],
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
		head: 'perí',
		lang: EDS.greek,
		gloss: 'around',
		forms: ['peri'],
	},
	{
		head: 'phílos',
		lang: EDS.greek,
		gloss: 'loving',
		forms: ['phile$', 'philo', 'phil'],
	},
	{
		head: 'phóbos',
		lang: EDS.greek,
		gloss: 'fear',
		forms: ['phobe$', 'phob'],
	},
	{
		head: 'Phorōnís',
		lang: EDS.greek,
		gloss: 'Phoronis',
		forms: ['phoron'],
	},
	{
		head: 'phôs',
		lang: EDS.greek,
		gloss: 'light',
		forms: ['photo', 'phos'],
	},
	{
		head: 'phûkos',
		lang: EDS.greek,
		gloss: 'seaweed',
		forms: ['phyco', 'phyc'],
	},
	{
		head: 'phûlon',
		lang: EDS.greek,
		gloss: 'tribe',
		forms: ['phylo'],
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
		head: 'polús',
		lang: EDS.greek,
		gloss: 'many',
		forms: ['poly'],
	},
	{
		head: 'poús',
		lang: EDS.greek,
		gloss: 'foot',
		forms: ['podio', 'podo', 'puso', 'pod'], // eg. polypodiophyta, isopod, apusozoa
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
		head: 'psukhḗ',
		lang: EDS.greek,
		gloss: 'soul',
		forms: ['psycho'],
	},
	{
		head: 'ptéris',
		lang: EDS.greek,
		gloss: 'male fern',
		forms: ['pterido'],
	},
	{
		head: 'pterón',
		lang: EDS.greek,
		gloss: 'feather',
		forms: ['ptero', 'ptera'],
	},
	{
		head: 'ptérux',
		lang: EDS.greek,
		gloss: 'wing',
		forms: ['pteryg'],
	},
	{
		head: 'ptússō',
		lang: EDS.greek,
		gloss: 'fold',
		forms: ['ptyxis$'],
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
		head: 'saûros',
		lang: EDS.greek,
		gloss: 'lizard',
		forms: ['saur'],
	},
	{
		head: 'skótos',
		lang: EDS.greek,
		gloss: 'darkness',
		forms: ['scoto'],
	},
	{
		head: 'skopéō',
		lang: EDS.greek,
		gloss: 'examine',
		forms: ['scope$', 'scop'],
	},
	{
		head: 'sôma',
		lang: EDS.greek,
		gloss: 'body',
		forms: ['somat', 'some$', 'som'], // somatic chromosome
	},
	{
		head: 'sophía',
		lang: EDS.greek,
		gloss: 'wisdom',
		forms: ['sopho', 'soph'], // philoSOPHY, SOPHOmore, philoSOPHic
	},
	{
		head: 'spérma',
		lang: EDS.greek,
		gloss: 'seed',
		forms: ['sperm'],
	},
	{
		head: 'sphágnos',
		lang: EDS.greek,
		gloss: 'kind of moss',
		forms: ['sphagn'],
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
		head: 'takhús',
		lang: EDS.greek,
		gloss: 'fast',
		forms: ['tachy'],
	},
	{
		head: 'tainíā',
		lang: EDS.greek,
		gloss: 'band',
		forms: ['ten'], // synteny
	},
	{
		head: 'téleios',
		lang: EDS.greek,
		gloss: 'complete',
		forms: ['tele'], // teleost
	},
	{
		head: 'télos',
		lang: EDS.greek,
		gloss: 'end',
		forms: ['telo'],
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
		head: 'tópos',
		lang: EDS.greek,
		gloss: 'place',
		forms: ['topo', 'top'],
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