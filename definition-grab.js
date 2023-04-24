// const request = require('request');
// const cheerio = require('cheerio');
// const puppeteer = require('puppeteer');
import { Selector } from 'testcafe';

let missed = [

    {
        word: "dabbed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dabber",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dabble",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dacker",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dacoit",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dactyl",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dadoed",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "dadoes",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "daedal",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "daemon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "daffed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "dafter",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "daftly",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "daggas",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "dagger",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "daggle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dagoba",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dahlia",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "damage",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "dammar",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dammer",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "dammit",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "damper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "damsel",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "damson",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "danced",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "dancer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dances",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "dander",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dandle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "danged",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "danger",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "dangle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "danish",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "danker",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "dankly",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "daphne",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dapped",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "dapper",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dapple",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "daring",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "darked",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "darken",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "darker",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "darkle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "darkly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "darned",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "darnel",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "darner",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "darted",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "darter",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dartle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "daruma",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dashed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "dasher",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dashes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "dassie",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dastur",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "datary",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "datcha",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "dating",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "dative",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "datura",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "daubed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "daubes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "dauted",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "dawdle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dawned",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "daybed",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dayfly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dayhop",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dazing",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dazzle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "deacon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "deaden",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "deader",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "deadly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "deafen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "deafer",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "deafly",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "dealer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "dearer",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dearie",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dearly",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "dearth",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "deasil",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "deaths",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "deathy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "debark",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "debase",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "debate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "debeak",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "debone",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "debris",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "debtor",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "debunk",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "deburr",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "decade",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "decamp",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "decane",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "decani",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "deceit",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "decent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "decern",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "decide",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "decile",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "decked",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "deckle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "declot",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "decoct",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "decoys",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "decree",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "decury",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dedans",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "deduce",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "deduct",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "deeded",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "deejay",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "deemed",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "deepen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "deeper",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "deeply",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "deface",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "defame",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "defeat",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "defect",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "defend",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "defers",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "defied",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "defier",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "defies",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "defile",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "define",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "defoam",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "deform",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "defrag",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "defray",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "deftly",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "defuel",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "defund",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "defuse",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "defuze",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "degage",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "degame",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "degels",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "degerm",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "degree",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "degust",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dehire",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dehorn",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dehort",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dehull",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "deject",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "delate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "delete",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "delict",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "delink",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "delist",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "deltas",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "delude",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "deluge",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "deluxe",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "delved",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "delves",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "demark",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "demist",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "demode",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "demote",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "demure",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "demurs",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "denary",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dendra",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dengue",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "denial",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "denied",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "denier",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "denies",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "denims",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "denned",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "denote",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "denser",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dental",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "dented",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dentes",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dentil",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dentin",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "denude",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "deodar",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "depart",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "depend",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "deperm",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "depict",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "depill",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "deploy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "depone",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "deport",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "depose",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "depths",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "depulp",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "depute",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "deputy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "derail",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "deride",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "derive",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "dermal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dermic",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "desalt",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "descry",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "desert",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "design",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "desire",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "desist",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "detail",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "detect",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "detent",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "deters",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "detest",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "detour",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "deuced",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "deuces",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "deuton",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "device",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "devine",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "devise",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "devoid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "devote",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "devour",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "devout",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dewily",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "dewing",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "dewlap",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "deworm",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dexter",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dextro",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dharma",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dharna",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dhooly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dhooti",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "dhurna",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "diable",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "diablo",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "diacid",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "diadem",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "diadic",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "dialed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "dialer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dialog",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "diaper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "diapir",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "diatom",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dibbed",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "dibber",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "dibble",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dibbuk",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dicast",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dicing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dicker",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dickey",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dickie",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dictum",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "didact",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "diddle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "diddly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "didoes",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "differ",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "digest",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "digged",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "digger",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "digits",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "diglot",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "digram",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "diking",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "diktat",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dilate",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dilute",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dimmed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dimmer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dimple",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dimply",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "dimwit",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dinged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dinghy",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dingle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dingus",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dining",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dinkum",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dinned",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "diodes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "diotic",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dioxin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "direct",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "direst",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dirges",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "dirham",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dirhem",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dirigo",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dirled",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "dirndl",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "disarm",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "disbar",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "disbud",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "discus",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "diseur",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dished",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "dishes",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dismal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dismay",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "disown",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dispel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dissed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "disses",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "distad",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "distal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "distil",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "disuse",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dither",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dittos",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "divert",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "divest",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "divide",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "divine",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "diving",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "divisi",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dixits",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "doable",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dobbin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dobson",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "docent",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "docket",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "doctor",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "doddie",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "doddle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dodger",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dodoes",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "doffer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dogeys",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "dogged",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "doggie",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dogleg",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dogmas",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "dognap",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "doiled",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "doings",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "doited",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "doling",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dolium",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dollar",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "dollop",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dolman",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dolmen",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dolour",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "domain",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "domine",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "domino",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dommes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "donate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "dongas",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "dongle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "donjon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "donors",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "doodle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "doolie",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "doomed",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "dopier",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "dorado",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dorjes",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "dormie",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dormin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dorper",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dorsad",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dorsal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dorser",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dorses",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "dorsum",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dorter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dosage",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "dosing",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dossal",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dossel",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "dosser",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dossil",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dotage",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dotard",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "doters",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "doting",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "douane",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "double",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "doubly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "douche",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "doughy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "doulas",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "dourly",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "doused",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "douser",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "douses",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "douter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dovish",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dowers",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "dowery",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "dowing",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dowlas",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "downed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "downer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dowser",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dowses",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "doxing",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "doyley",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dozens",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "dozing",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "drachm",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "drafts",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "drafty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dragee",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "draggy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dragon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "dramas",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "dreads",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dreamt",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "dreary",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dredge",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "drench",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "driers",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "drifts",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "drippy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "drivel",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "driver",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "droits",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "dromos",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "drones",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "drools",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "drooly",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "droopy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dropsy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "drosky",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "drossy",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "drouth",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "droved",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "drover",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "droves",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "drowns",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "drowse",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "drowsy",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "drudge",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "druggy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "drumly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "drunks",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "drupes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "drying",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "dryout",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dually",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "dubbed",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "dubbin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "ducked",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "ducker",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "duckie",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "duffle",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dugout",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "duking",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "dulcet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dumdum",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dunder",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dunlin",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dunned",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "duomos",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "dupery",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dupion",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "duplex",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "dupped",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "durain",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "durbar",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "duress",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "durian",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "during",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "durion",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "durned",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "durrie",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "dusted",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "duster",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dustup",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "duties",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "dvaita",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dwarfs",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "dweebs",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "dwells",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "dwighs",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "dyadic",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "dybbuk",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dyeing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    // {
    //     word: "dyings",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    {
        word: "dynamo",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "dynast",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "dynode",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
].filter(o => o.complexity === 'Elementary').map(o => o.word);

missed.forEach((word) => {
    const url = `https://www.bing.com/search?q=define+${word}`;

    fixture`// ${word}`
        .page`https://www.bing.com/search?q=define+${word}`;

    test(`// ${word} defs and syns`, async t => {
        // Get all elements with class name 'happy'
        const definitions = Selector('.b_demoteText.b_sectxt');

        // Get the number of happy elements
        const definitionsCount = await definitions.count;
        console.log(word);
        // Loop through the happy elements and log their innerText
        console.log('definitions: [');
        for (let i = 0; i < definitionsCount; i++) {
            const definition = definitions.nth(i);
            const definitionText = await definition.innerText;
            console.log("'" + definitionText + "',");
        }

        console.log(']');

        //             const synonyms = []
        //             $('.b_nymsItem').each(function (index, element) {
        //                 console.log($(element).text())
        //                 console.log($(this).text())
        //                 // synonyms.push($(this).text())
        //             })
        const synonyms = Selector('.b_nymsItem');

        console.log('synonyms: [');
        const synonymCount = await synonyms.count;
        for (let i = 0; i < synonymCount; i++) {
            const synonym = synonyms.nth(i);
            const synonymText = await synonym.innerText;
            console.log("'" + synonymText + "',");
        }
        console.log(']');
    });

    // // Define a function to scrape the page
    // async function scrapePage(url) {
    //     // Launch a browser instance
    //     const browser = await puppeteer.launch();
    //     // Create a new page
    //     const page = await browser.newPage();
    //     // Navigate to the url
    //     await page.goto(url);
    //     // Wait for the page to load
    //     await page.waitForSelector('title');
    //     // Get the title of the page
    //     const title = await page.$eval('title', element => element.textContent);
    //     // Get the description of the page
    //     const description = await page.$eval('p', element => element.textContent);
    //     // Get the link of the page
    //     const link = await page.$eval('a', element => element.getAttribute('href'));
    //     // Close the browser
    //     await browser.close();
    //     // Return an object with the scraped data
    //     return { title, description, link };
    // }

    // // Call the function and log the result
    // scrapePage(url).then(result => {
    //     console.log(result);
    // });
});

// missed.forEach((word) => {
//     const url = `https://www.bing.com/search?q=define+${word}`;

//     request(url, (error, response, html) => {
//         if (!error && response.statusCode === 200) {
//             const $ = cheerio.load(html)
//             const definitions = []
//             $('.b_demoteText.b_sectxt').each(function (index, element) {
//                 console.log($(element).text())
//                 console.log($(this).text())
//                 // synonyms.push($(this).text())
//             })

//             // console.log($.text())

//             const synonyms = []
//             $('.b_nymsItem').each(function (index, element) {
//                 console.log($(element).text())
//                 console.log($(this).text())
//                 // synonyms.push($(this).text())
//             })
//             //            console.log('{ word:', "'" + word + "'", ",\tdefinition: ['", definitions.join("','"), "'],\tsynonyms: ['", synonyms.join("','") + "']},");
//         }
//     });
// });