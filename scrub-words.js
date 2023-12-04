import { Selector } from 'testcafe';
import fs from 'fs';

let missed = [
    {
        word: 'wtfuck'
    },
    {
        word: "abacus",
        complexity: "High School"
    },
    {
        word: "abased",
        complexity: "High School"
    },
    {
        word: "abated",
        complexity: "College"
    },
    {
        word: "abates",
        complexity: "Post-College"
    },
    // {
    //     word: "abayas",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Post-College"
    // },
    // {
    //     word: "abbess",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Post-College"
    // },
    {
        word: "abbeys",
        complexity: "Middle School"
    },
    {
        word: "abbots",
        complexity: "High School"
    },
    {
        word: "abduct",
        complexity: "College"
    },
    {
        word: "abhors",
        complexity: "College"
    },
    {
        word: "abided",
        complexity: "College"
    },
    {
        word: "abides",
        complexity: "Middle School"
    },
    {
        word: "abject",
        complexity: "High School"
    },
    // {
    //     word: "abjure",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Post-College"
    // },
    {
        word: "ablate",
        complexity: "College"
    },
    {
        word: "ablaze",
        complexity: "High School"
    },
    {
        word: "aboard",
        complexity: "Middle School"
    },
    {
        word: "abound",
        complexity: "Middle School"
    },
    {
        word: "abrade",
        complexity: "College"
    },
    {
        word: "abroad",
        complexity: "Elementary"
    },
    {
        word: "abrupt",
        complexity: "Middle School"
    },
    {
        word: "absent",
        complexity: "Elementary"
    },
    {
        word: "absorb",
        complexity: "Middle School"
    },
    {
        word: "absurd",
        complexity: "Middle School"
    },
    {
        word: "abused",
        complexity: "Elementary"
    },
    {
        word: "abuser",
        complexity: "Elementary"
    },
    {
        word: "abuses",
        complexity: "Elementary"
    },
    {
        word: "acacia",
        complexity: "High School"
    },
    {
        word: "accede",
        complexity: "High School"
    },
    {
        word: "accent",
        complexity: "Middle School"
    },
    {
        word: "accept",
        complexity: "Elementary"
    },
    {
        word: "access",
        complexity: "Elementary"
    },
    {
        word: "accord",
        complexity: "Middle School"
    },
    {
        word: "accost",
        complexity: "College"
    },
    {
        word: "accrue",
        complexity: "Middle School"
    },
    {
        word: "accuse",
        complexity: "Middle School"
    },
    {
        word: "acetic",
        complexity: "High School"
    },
    {
        word: "acetyl",
        complexity: "Middle School"
    },
    {
        word: "aching",
        complexity: "Middle School"
    },
    {
        word: "acidic",
        complexity: "Middle School"
    },
    {
        word: "acinar",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "across",
        complexity: "Elementary"
    },
    {
        word: "acting",
        complexity: "Elementary"
    },
    {
        word: "action",
        complexity: "Elementary"
    },
    {
        word: "active",
        complexity: "Elementary"
    },
    {
        word: "actual",
        complexity: "Elementary"
    },
    {
        word: "acuity",
        complexity: "Middle School"
    },
    {
        word: "acumen",
        complexity: "High School"
    },
    {
        word: "adages",
        complexity: "unknown"
    },
    {
        word: "adagio",
        complexity: "High School"
    },
    {
        word: "adapts",
        complexity: "Middle School"
    },
    {
        word: "addend",
        complexity: "College"
    },
    {
        word: "addict",
        complexity: "High School"
    },
    {
        word: "adding",
        complexity: "unknown"
    },
    {
        word: "addled",
        complexity: "unknown"
    },
    {
        word: "adduce",
        complexity: "High School"
    },
    {
        word: "adduct",
        complexity: "High School"
    },
    {
        word: "adepts",
        complexity: "Middle School"
    },
    {
        word: "adhere",
        complexity: "Middle School"
    },
    {
        word: "adjoin",
        complexity: "Post-College"
    },
    {
        word: "adjust",
        complexity: "Elementary"
    },
    {
        word: "admire",
        complexity: "Middle School"
    },
    {
        word: "adobes",
        complexity: "Middle School"
    },
    {
        word: "adopts",
        complexity: "Elementary"
    },
    {
        word: "adored",
        complexity: "unknown"
    },
    {
        word: "adores",
        complexity: "unknown"
    },
    {
        word: "adrift",
        complexity: "High School"
    },
    {
        word: "adroit",
        complexity: "College"
    },
    {
        word: "adsorb",
        complexity: "College"
    },
    {
        word: "adults",
        complexity: "Elementary"
    },
    {
        word: "advent",
        complexity: "Middle School"
    },
    {
        word: "adverb",
        complexity: "High School"
    },
    {
        word: "advert",
        complexity: "Middle School"
    },
    {
        word: "advice",
        complexity: "Elementary"
    },
    {
        word: "advise",
        complexity: "Elementary"
    },
    {
        word: "aerate",
        complexity: "College"
    },
    {
        word: "aerial",
        complexity: "Elementary"
    },
    {
        word: "affair",
        complexity: "Middle School"
    },
    {
        word: "affect",
        complexity: "Elementary"
    },
    {
        word: "affine",
        complexity: "Middle School"
    },
    {
        word: "affirm",
        complexity: "Middle School"
    },
    {
        word: "afflux",
        complexity: "Middle School"
    },
    {
        word: "afford",
        complexity: "Elementary"
    },
    {
        word: "affray",
        complexity: "Post-College"
    },
    {
        word: "afghan",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "aflame",
        complexity: "High School"
    },
    {
        word: "afloat",
        complexity: "Middle School"
    },
    {
        word: "afraid",
        complexity: "Elementary"
    },
    {
        word: "agency",
        complexity: "Elementary"
    },
    {
        word: "agenda",
        complexity: "Elementary"
    },
    {
        word: "aghast",
        complexity: "High School"
    },
    {
        word: "agouti",
        complexity: "College"
    },
    {
        word: "agreed",
        complexity: "Elementary"
    },
    {
        word: "aiding",
        complexity: "unknown"
    },
    {
        word: "aikido",
        complexity: "College"
    },
    {
        word: "ailing",
        complexity: "Middle School"
    },
    {
        word: "aiming",
        complexity: "Elementary"
    },
    {
        word: "airbag",
        complexity: "High School"
    },
    {
        word: "airily",
        complexity: "Post-College"
    },
    {
        word: "airing",
        complexity: "Elementary"
    },
    {
        word: "airman",
        complexity: "High School"
    },
    {
        word: "airmen",
        complexity: "High School"
    },
    {
        word: "airway",
        complexity: "Middle School"
    },
    {
        word: "aisles",
        complexity: "unknown"
    },
    {
        word: "albedo",
        complexity: "High School"
    },
    {
        word: "albeit",
        complexity: "Middle School"
    },
    {
        word: "albino",
        complexity: "High School"
    },
    {
        word: "albite",
        complexity: "College"
    },
    {
        word: "albums",
        complexity: "Elementary"
    },
    {
        word: "alcove",
        complexity: "High School"
    },
    {
        word: "alibis",
        complexity: "High School"
    },
    {
        word: "aliens",
        complexity: "Elementary"
    },
    {
        word: "alight",
        complexity: "High School"
    },
    {
        word: "aligns",
        complexity: "Elementary"
    },
    {
        word: "aliyah",
        complexity: "Post-College"
    },
    {
        word: "alkali",
        complexity: "Middle School"
    },
    {
        word: "alkane",
        complexity: "Post-College"
    },
    {
        word: "allays",
        complexity: "High School"
    },
    {
        word: "allege",
        complexity: "Middle School"
    },
    {
        word: "allele",
        complexity: "Middle School"
    },
    {
        word: "alleys",
        complexity: "Middle School"
    },
    {
        word: "allied",
        complexity: "Middle School"
    },
    {
        word: "allies",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "allows",
        complexity: "Elementary"
    },
    {
        word: "allude",
        complexity: "High School"
    },
    {
        word: "allure",
        complexity: "Middle School"
    },
    {
        word: "almond",
        complexity: "Middle School"
    },
    {
        word: "almost",
        complexity: "Elementary"
    },
    {
        word: "alpaca",
        complexity: "High School"
    },
    {
        word: "alphas",
        complexity: "Elementary"
    },
    {
        word: "alpine",
        complexity: "Middle School"
    },
    {
        word: "alumna",
        complexity: "High School"
    },
    {
        word: "alumni",
        complexity: "Middle School"
    },
    {
        word: "always",
        complexity: "Elementary"
    },
    {
        word: "amazed",
        complexity: "Middle School"
    },
    {
        word: "amazon",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "ambers",
        complexity: "Middle School"
    },
    {
        word: "ambled",
        complexity: "unknown"
    },
    {
        word: "ambles",
        complexity: "High School"
    },
    {
        word: "ambush",
        complexity: "Middle School"
    },
    {
        word: "amends",
        complexity: "Elementary"
    },
    {
        word: "amicus",
        complexity: "High School"
    },
    {
        word: "amidst",
        complexity: "Middle School"
    },
    {
        word: "amnion",
        complexity: "Post-College"
    },
    {
        word: "amoeba",
        complexity: "College"
    },
    {
        word: "amoral",
        complexity: "High School"
    },
    {
        word: "amount",
        complexity: "Elementary"
    },
    {
        word: "amours",
        complexity: "Middle School"
    },
    {
        word: "ampere",
        complexity: "High School"
    },
    {
        word: "ampler",
        complexity: "Middle School"
    },
    {
        word: "ampule",
        complexity: "Post-College"
    },
    {
        word: "amtrak",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "amulet",
        complexity: "Middle School"
    },
    {
        word: "amused",
        complexity: "Middle School"
    },
    {
        word: "anally",
        complexity: "unknown"
    },
    {
        word: "analog",
        complexity: "Elementary"
    },
    {
        word: "anchor",
        complexity: "Elementary"
    },
    {
        word: "anemia",
        complexity: "Middle School"
    },
    {
        word: "anemic",
        complexity: "High School"
    },
    {
        word: "angels",
        complexity: "unknown"
    },
    {
        word: "angers",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "angina",
        complexity: "Middle School"
    },
    {
        word: "angled",
        complexity: "Elementary"
    },
    {
        word: "angler",
        complexity: "Middle School"
    },
    {
        word: "angles",
        complexity: "Elementary"
    },
    {
        word: "angora",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "angsty",
        complexity: "unknown"
    },
    {
        word: "animus",
        complexity: "High School"
    },
    {
        word: "anklet",
        complexity: "High School"
    },
    {
        word: "annals",
        complexity: "Middle School"
    },
    {
        word: "annoys",
        complexity: "Middle School"
    },
    {
        word: "annual",
        complexity: "Elementary"
    },
    {
        word: "anoles",
        complexity: "College"
    },
    {
        word: "anomie",
        complexity: "College"
    },
    {
        word: "anorak",
        complexity: "College"
    },
    {
        word: "answer",
        complexity: "Elementary"
    },
    {
        word: "anthem",
        complexity: "Middle School"
    },
    {
        word: "anther",
        complexity: "High School"
    },
    {
        word: "antics",
        complexity: "unknown"
    },
    {
        word: "antler",
        complexity: "Middle School"
    },
    {
        word: "antral",
        complexity: "unknown"
    },
    {
        word: "antrum",
        complexity: "College"
    },
    {
        word: "anvils",
        complexity: "High School"
    },
    {
        word: "anyhow",
        complexity: "Middle School"
    },
    {
        word: "anyone",
        complexity: "Middle School"
    },
    {
        word: "anyway",
        complexity: "Elementary"
    },
    {
        word: "aorist",
        complexity: "College"
    },
    {
        word: "aortic",
        complexity: "unknown"
    },
    {
        word: "apache",
        complexity: "Middle School"
    },
    {
        word: "apathy",
        complexity: "Middle School"
    },
    {
        word: "apiary",
        complexity: "Post-College"
    },
    {
        word: "apical",
        complexity: "Middle School"
    },
    {
        word: "apices",
        complexity: "Middle School"
    },
    {
        word: "apiece",
        complexity: "Middle School"
    },
    {
        word: "aplomb",
        complexity: "College"
    },
    {
        word: "apneic",
        complexity: "unknown"
    },
    {
        word: "apnoea",
        complexity: "unknown"
    },
    {
        word: "apogee",
        complexity: "High School"
    },
    {
        word: "appall",
        complexity: "Post-College"
    },
    {
        word: "appeal",
        complexity: "Elementary"
    },
    {
        word: "appear",
        complexity: "Elementary"
    },
    {
        word: "append",
        complexity: "Middle School"
    },
    {
        word: "apples",
        complexity: "Elementary"
    },
    {
        word: "applet",
        complexity: "Middle School"
    },
    {
        word: "arabic",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "arable",
        complexity: "Middle School"
    },
    {
        word: "arbors",
        complexity: "Middle School"
    },
    {
        word: "arbour",
        complexity: "College"
    },
    {
        word: "arcade",
        complexity: "Elementary"
    },
    {
        word: "arcana",
        complexity: "unknown"
    },
    {
        word: "arcane",
        complexity: "Middle School"
    },
    {
        word: "archer",
        complexity: "Middle School"
    },
    {
        word: "arches",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "archly",
        complexity: "Middle School"
    },
    {
        word: "arctic",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "ardent",
        complexity: "Middle School"
    },
    {
        word: "ardour",
        complexity: "unknown"
    },
    {
        word: "areola",
        complexity: "High School"
    },
    {
        word: "argent",
        complexity: "Middle School"
    },
    {
        word: "argued",
        complexity: "Elementary"
    },
    {
        word: "arguer",
        complexity: "Elementary"
    },
    {
        word: "argues",
        complexity: "unknown"
    },
    {
        word: "argyle",
        complexity: "Post-College"
    },
    {
        word: "aright",
        complexity: "High School"
    },
    {
        word: "arisen",
        complexity: "unknown"
    },
    {
        word: "arises",
        complexity: "unknown"
    },
    {
        word: "armada",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "armful",
        complexity: "Post-College"
    },
    {
        word: "arming",
        complexity: "unknown"
    },
    {
        word: "armlet",
        complexity: "College"
    },
    {
        word: "armory",
        complexity: "High School"
    },
    {
        word: "armour",
        complexity: "Middle School"
    },
    {
        word: "armpit",
        complexity: "Middle School"
    },
    {
        word: "arnica",
        complexity: "College"
    },
    {
        word: "around",
        complexity: "Elementary"
    },
    {
        word: "arrear",
        complexity: "unknown"
    },
    {
        word: "arrest",
        complexity: "Elementary"
    },
    {
        word: "arrive",
        complexity: "Elementary"
    },
    {
        word: "arrows",
        complexity: "unknown"
    },
    {
        word: "arroyo",
        complexity: "High School"
    },
    {
        word: "arsine",
        complexity: "College"
    },
    {
        word: "artery",
        complexity: "Middle School"
    },
    {
        word: "artful",
        complexity: "High School"
    },
    {
        word: "artist",
        complexity: "Elementary"
    },
    {
        word: "ascend",
        complexity: "Middle School"
    },
    {
        word: "ascent",
        complexity: "Middle School"
    },
    {
        word: "ashore",
        complexity: "Middle School"
    },
    {
        word: "ashram",
        complexity: "High School"
    },
    {
        word: "asking",
        complexity: "Elementary"
    },
    {
        word: "asleep",
        complexity: "Elementary"
    },
    {
        word: "aspect",
        complexity: "Elementary"
    },
    {
        word: "aspire",
        complexity: "Middle School"
    },
    {
        word: "assail",
        complexity: "High School"
    },
    {
        word: "assent",
        complexity: "Middle School"
    },
    {
        word: "assert",
        complexity: "Elementary"
    },
    {
        word: "assess",
        complexity: "Elementary"
    },
    {
        word: "assets",
        complexity: "unknown"
    },
    {
        word: "assign",
        complexity: "Elementary"
    },
    {
        word: "assist",
        complexity: "Elementary"
    },
    {
        word: "assize",
        complexity: "Post-College"
    },
    {
        word: "assume",
        complexity: "Elementary"
    },
    {
        word: "assure",
        complexity: "Elementary"
    },
    {
        word: "astral",
        complexity: "Middle School"
    },
    {
        word: "astray",
        complexity: "Middle School"
    },
    {
        word: "astute",
        complexity: "Middle School"
    },
    {
        word: "atomic",
        complexity: "Middle School"
    },
    {
        word: "atonal",
        complexity: "College"
    },
    {
        word: "atrial",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "attach",
        complexity: "Elementary"
    },
    {
        word: "attack",
        complexity: "Elementary"
    },
    {
        word: "attain",
        complexity: "Middle School"
    },
    {
        word: "attend",
        complexity: "Elementary"
    },
    {
        word: "attest",
        complexity: "Middle School"
    },
    {
        word: "attire",
        complexity: "Middle School"
    },
    {
        word: "attune",
        complexity: "College"
    },
    {
        word: "audios",
        complexity: "Elementary"
    },
    {
        word: "audits",
        complexity: "Elementary"
    },
    {
        word: "augers",
        complexity: "Middle School"
    },
    {
        word: "augurs",
        complexity: "High School"
    },
    {
        word: "augury",
        complexity: "Post-College"
    },
    {
        word: "august",
        complexity: "Middle School"
    },
    {
        word: "auntie",
        complexity: "High School"
    },
    {
        word: "aureus",
        complexity: "High School"
    },
    {
        word: "aurora",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "auteur",
        complexity: "Middle School"
    },
    {
        word: "author",
        complexity: "Elementary"
    },
    {
        word: "autism",
        complexity: "Middle School"
    },
    {
        word: "autumn",
        complexity: "Middle School"
    },
    {
        word: "avails",
        complexity: "unknown"
    },
    {
        word: "avatar",
        complexity: "Middle School"
    },
    {
        word: "avenge",
        complexity: "Middle School"
    },
    {
        word: "avenue",
        complexity: "Middle School"
    },
    {
        word: "averse",
        complexity: "Middle School"
    },
    {
        word: "averts",
        complexity: "Middle School"
    },
    {
        word: "aviary",
        complexity: "College"
    },
    {
        word: "avidly",
        complexity: "unknown"
    },
    {
        word: "avowal",
        complexity: "Post-College"
    },
    {
        word: "avowed",
        complexity: "Post-College"
    },
    {
        word: "awaked",
        complexity: "unknown"
    },
    {
        word: "awaken",
        complexity: "Middle School"
    },
    {
        word: "awakes",
        complexity: "Middle School"
    },
    {
        word: "awards",
        complexity: "Elementary"
    },
    {
        word: "awhile",
        complexity: "Middle School"
    },
    {
        word: "awning",
        complexity: "Middle School"
    },
    {
        word: "awoken",
        complexity: "Middle School"
    },
    {
        word: "axeman",
        complexity: "unknown"
    },
    {
        word: "axilla",
        complexity: "Post-College"
    },
    {
        word: "axioms",
        complexity: "High School"
    },
    {
        word: "axonal",
        complexity: "unknown"
    },
    {
        word: "azalea",
        complexity: "College"
    },
    {
        word: "babble",
        complexity: "High School"
    },
    {
        word: "babied",
        complexity: "unknown"
    },
    {
        word: "babies",
        complexity: "unknown"
    },
    {
        word: "baboon",
        complexity: "High School"
    },
    {
        word: "backed",
        complexity: "Elementary"
    },
    {
        word: "backer",
        complexity: "College"
    },
    {
        word: "backup",
        complexity: "Elementary"
    },
    {
        word: "badass",
        complexity: "High School"
    },
    {
        word: "badder",
        complexity: "Elementary"
    },
    {
        word: "baddie",
        complexity: "Post-College"
    },
    {
        word: "badged",
        complexity: "unknown"
    },
    {
        word: "badger",
        complexity: "High School"
    },
    {
        word: "badges",
        complexity: "Middle School"
    },
    {
        word: "badman",
        complexity: "High School"
    },
    {
        word: "baffle",
        complexity: "High School"
    },
    {
        word: "bagged",
        complexity: "unknown"
    },
    {
        word: "bagger",
        complexity: "Post-College"
    },
    {
        word: "baggie",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "bagman",
        complexity: "Post-College"
    },
    {
        word: "bagmen",
        complexity: "Post-College"
    },
    {
        word: "bailed",
        complexity: "unknown"
    },
    {
        word: "bailer",
        complexity: "unknown"
    },
    {
        word: "bairns",
        complexity: "College"
    },
    {
        word: "baited",
        complexity: "unknown"
    },
    {
        word: "baiter",
        complexity: "Middle School"
    },
    {
        word: "bakery",
        complexity: "Middle School"
    },
    {
        word: "baking",
        complexity: "unknown"
    },
    {
        word: "balder",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "baldly",
        complexity: "unknown"
    },
    {
        word: "baleen",
        complexity: "College"
    },
    {
        word: "balers",
        complexity: "Middle School"
    },
    {
        word: "baling",
        complexity: "unknown"
    },
    {
        word: "balked",
        complexity: "unknown"
    },
    {
        word: "ballad",
        complexity: "Middle School"
    },
    {
        word: "balled",
        complexity: "unknown"
    },
    {
        word: "baller",
        complexity: "High School"
    },
    {
        word: "ballet",
        complexity: "Middle School"
    },
    {
        word: "ballot",
        complexity: "Elementary"
    },
    {
        word: "ballsy",
        complexity: "College"
    },
    {
        word: "balsam",
        complexity: "High School"
    },
    {
        word: "bamboo",
        complexity: "Middle School"
    },
    {
        word: "banana",
        complexity: "Middle School"
    },
    {
        word: "banded",
        complexity: "Elementary"
    },
    {
        word: "bander",
        complexity: "unknown"
    },
    {
        word: "bandit",
        complexity: "Middle School"
    },
    {
        word: "banged",
        complexity: "unknown"
    },
    {
        word: "banger",
        complexity: "High School"
    },
    {
        word: "bangle",
        complexity: "Middle School"
    },
    {
        word: "banish",
        complexity: "High School"
    },
    {
        word: "banked",
        complexity: "unknown"
    },
    {
        word: "banker",
        complexity: "Middle School"
    },
    {
        word: "banned",
        complexity: "unknown"
    },
    {
        word: "banner",
        complexity: "Elementary"
    },
    {
        word: "bantam",
        complexity: "College"
    },
    {
        word: "banter",
        complexity: "Middle School"
    },
    {
        word: "banyan",
        complexity: "Post-College"
    },
    {
        word: "banzai",
        complexity: "Post-College"
    },
    {
        word: "baobab",
        complexity: "Post-College"
    },
    {
        word: "barbed",
        complexity: "Middle School"
    },
    {
        word: "barbel",
        complexity: "Post-College"
    },
    {
        word: "barber",
        complexity: "Middle School"
    },
    {
        word: "barbie",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "bardic",
        complexity: "unknown"
    },
    {
        word: "barely",
        complexity: "Middle School"
    },
    {
        word: "barest",
        complexity: "unknown"
    },
    {
        word: "barged",
        complexity: "Middle School"
    },
    {
        word: "barges",
        complexity: "Middle School"
    },
    {
        word: "baring",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "barite",
        complexity: "College"
    },
    {
        word: "barium",
        complexity: "High School"
    },
    {
        word: "barked",
        complexity: "unknown"
    },
    {
        word: "barker",
        complexity: "High School"
    },
    {
        word: "barley",
        complexity: "Middle School"
    },
    {
        word: "barman",
        complexity: "High School"
    },
    {
        word: "barons",
        complexity: "unknown"
    },
    {
        word: "barony",
        complexity: "Post-College"
    },
    {
        word: "barque",
        complexity: "Post-College"
    },
    {
        word: "barred",
        complexity: "Middle School"
    },
    {
        word: "barrel",
        complexity: "Elementary"
    },
    {
        word: "barren",
        complexity: "Middle School"
    },
    {
        word: "barrow",
        complexity: "Middle School"
    },
    {
        word: "barter",
        complexity: "Middle School"
    },
    {
        word: "baryon",
        complexity: "High School"
    },
    {
        word: "basalt",
        complexity: "Middle School"
    },
    {
        word: "basely",
        complexity: "unknown"
    },
    {
        word: "basest",
        complexity: "unknown"
    },
    {
        word: "bashed",
        complexity: "unknown"
    },
    {
        word: "basher",
        complexity: "unknown"
    },
    {
        word: "bashes",
        complexity: "unknown"
    },
    {
        word: "basics",
        complexity: "unknown"
    },
    {
        word: "basing",
        complexity: "unknown"
    },
    {
        word: "basked",
        complexity: "unknown"
    },
    {
        word: "basket",
        complexity: "Elementary"
    },
    {
        word: "basque",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "basset",
        complexity: "High School"
    },
    {
        word: "basted",
        complexity: "unknown"
    },
    {
        word: "baster",
        complexity: "College"
    },
    {
        word: "bateau",
        complexity: "High School"
    },
    {
        word: "bathed",
        complexity: "unknown"
    },
    {
        word: "bather",
        complexity: "Middle School"
    },
    {
        word: "bathes",
        complexity: "Middle School"
    },
    {
        word: "bathos",
        complexity: "College"
    },
    {
        word: "batman",
        complexity: "Middle School"
    },
    {
        word: "batons",
        complexity: "Middle School"
    },
    {
        word: "batted",
        complexity: "unknown"
    },
    {
        word: "batten",
        complexity: "High School"
    },
    {
        word: "batter",
        complexity: "Middle School"
    },
    {
        word: "battle",
        complexity: "Elementary"
    },
    {
        word: "bauble",
        complexity: "Post-College"
    },
    {
        word: "baying",
        complexity: "unknown"
    },
    {
        word: "bazaar",
        complexity: "High School"
    },
    {
        word: "beachy",
        complexity: "Elementary"
    },
    {
        word: "beacon",
        complexity: "Middle School"
    },
    {
        word: "beaded",
        complexity: "Middle School"
    },
    {
        word: "beagle",
        complexity: "High School"
    },
    {
        word: "beaker",
        complexity: "High School"
    },
    {
        word: "beamed",
        complexity: "unknown"
    },
    {
        word: "beanie",
        complexity: "Middle School"
    },
    {
        word: "bearer",
        complexity: "Middle School"
    },
    {
        word: "beasts",
        complexity: "Elementary"
    },
    {
        word: "beaten",
        complexity: "Elementary"
    },
    {
        word: "beater",
        complexity: "Middle School"
    },
    {
        word: "beauty",
        complexity: "Elementary"
    },
    {
        word: "beaver",
        complexity: "High School"
    },
    {
        word: "beckon",
        complexity: "College"
    },
    {
        word: "become",
        complexity: "Elementary"
    },
    {
        word: "bedbug",
        complexity: "Post-College"
    },
    {
        word: "bedded",
        complexity: "Elementary"
    },
    {
        word: "bedlam",
        complexity: "Post-College"
    },
    {
        word: "bedpan",
        complexity: "College"
    },
    {
        word: "beeped",
        complexity: "Middle School"
    },
    {
        word: "beeper",
        complexity: "Middle School"
    },
    {
        word: "beetle",
        complexity: "Middle School"
    },
    {
        word: "befall",
        complexity: "High School"
    },
    {
        word: "befell",
        complexity: "unknown"
    },
    {
        word: "before",
        complexity: "Elementary"
    },
    {
        word: "begets",
        complexity: "unknown"
    },
    {
        word: "beggar",
        complexity: "High School"
    },
    {
        word: "begged",
        complexity: "unknown"
    },
    {
        word: "begins",
        complexity: "unknown"
    },
    {
        word: "behalf",
        complexity: "Elementary"
    },
    {
        word: "behave",
        complexity: "Middle School"
    },
    {
        word: "beheld",
        complexity: "Middle School"
    },
    {
        word: "behest",
        complexity: "Middle School"
    },
    {
        word: "behind",
        complexity: "Elementary"
    },
    {
        word: "behold",
        complexity: "Middle School"
    },
    {
        word: "beings",
        complexity: "Elementary"
    },
    {
        word: "belfry",
        complexity: "Post-College"
    },
    {
        word: "belief",
        complexity: "Elementary"
    },
    {
        word: "belies",
        complexity: "unknown"
    },
    {
        word: "bellow",
        complexity: "High School"
    },
    {
        word: "belong",
        complexity: "Elementary"
    },
    {
        word: "belted",
        complexity: "Elementary"
    },
    {
        word: "belter",
        complexity: "unknown"
    },
    {
        word: "beluga",
        complexity: "High School"
    },
    {
        word: "bemoan",
        complexity: "High School"
    },
    {
        word: "bemuse",
        complexity: "Post-College"
    },
    {
        word: "bended",
        complexity: "College"
    },
    {
        word: "bender",
        complexity: "Middle School"
    },
    {
        word: "benign",
        complexity: "Middle School"
    },
    {
        word: "berate",
        complexity: "High School"
    },
    {
        word: "bereft",
        complexity: "Middle School"
    },
    {
        word: "berlin",
        complexity: "Middle School"
    },
    {
        word: "berths",
        complexity: "Middle School"
    },
    {
        word: "besets",
        complexity: "Middle School"
    },
    {
        word: "beside",
        complexity: "Middle School"
    },
    {
        word: "bested",
        complexity: "unknown"
    },
    {
        word: "bestir",
        complexity: "College"
    },
    {
        word: "bestow",
        complexity: "Middle School"
    },
    {
        word: "betide",
        complexity: "College"
    },
    {
        word: "betray",
        complexity: "Middle School"
    },
    {
        word: "better",
        complexity: "Elementary"
    },
    {
        word: "bettor",
        complexity: "High School"
    },
    {
        word: "bewail",
        complexity: "High School"
    },
    {
        word: "beware",
        complexity: "Middle School"
    },
    {
        word: "bhakti",
        complexity: "College"
    },
    {
        word: "biased",
        complexity: "Middle School"
    },
    {
        word: "biases",
        complexity: "unknown"
    },
    {
        word: "bibles",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "bicker",
        complexity: "Post-College"
    },
    {
        word: "bidder",
        complexity: "unknown"
    },
    {
        word: "biding",
        complexity: "unknown"
    },
    {
        word: "biffed",
        complexity: "unknown"
    },
    {
        word: "bifold",
        complexity: "College"
    },
    {
        word: "bigamy",
        complexity: "Post-College"
    },
    {
        word: "bigeye",
        complexity: "Post-College"
    },
    {
        word: "bigger",
        complexity: "unknown"
    },
    {
        word: "bigwig",
        complexity: "Post-College"
    },
    {
        word: "biking",
        complexity: "unknown"
    },
    {
        word: "bilked",
        complexity: "unknown"
    },
    {
        word: "biller",
        complexity: "unknown"
    },
    {
        word: "billet",
        complexity: "Middle School"
    },
    {
        word: "billow",
        complexity: "Post-College"
    },
    {
        word: "binary",
        complexity: "Elementary"
    },
    {
        word: "binder",
        complexity: "Middle School"
    },
    {
        word: "binged",
        complexity: "Middle School"
    },
    {
        word: "biogas",
        complexity: "High School"
    },
    {
        word: "bionic",
        complexity: "High School"
    },
    {
        word: "biopsy",
        complexity: "Middle School"
    },
    {
        word: "biotic",
        complexity: "High School"
    },
    {
        word: "biotin",
        complexity: "Middle School"
    },
    {
        word: "birder",
        complexity: "College"
    },
    {
        word: "birdie",
        complexity: "High School"
    },
    {
        word: "births",
        complexity: "Elementary"
    },
    {
        word: "bisect",
        complexity: "College"
    },
    {
        word: "bishop",
        complexity: "Middle School"
    },
    {
        word: "bisque",
        complexity: "High School"
    },
    {
        word: "bistro",
        complexity: "Middle School"
    },
    {
        word: "bitchy",
        complexity: "College"
    },
    {
        word: "biters",
        complexity: "unknown"
    },
    {
        word: "biting",
        complexity: "Middle School"
    },
    {
        word: "bitmap",
        complexity: "Middle School"
    },
    {
        word: "bitten",
        complexity: "Elementary"
    },
    {
        word: "bitter",
        complexity: "Elementary"
    },
    {
        word: "blacks",
        complexity: "High School"
    },
    {
        word: "bladed",
        complexity: "Middle School"
    },
    {
        word: "blader",
        complexity: "unknown"
    },
    {
        word: "blamed",
        complexity: "Middle School"
    },
    {
        word: "blanch",
        complexity: "Post-College"
    },
    {
        word: "blanks",
        complexity: "Elementary"
    },
    {
        word: "blared",
        complexity: "unknown"
    },
    {
        word: "blazer",
        complexity: "High School"
    },
    {
        word: "blazes",
        complexity: "unknown"
    },
    {
        word: "blazon",
        complexity: "Post-College"
    },
    {
        word: "bleach",
        complexity: "Middle School"
    },
    {
        word: "bleary",
        complexity: "High School"
    },
    {
        word: "bleats",
        complexity: "College"
    },
    {
        word: "blenny",
        complexity: "Post-College"
    },
    {
        word: "blight",
        complexity: "Middle School"
    },
    {
        word: "blimey",
        complexity: "College"
    },
    {
        word: "blinds",
        complexity: "unknown"
    },
    {
        word: "blinks",
        complexity: "unknown"
    },
    {
        word: "blithe",
        complexity: "College"
    },
    {
        word: "blocks",
        complexity: "unknown"
    },
    {
        word: "blocky",
        complexity: "Elementary"
    },
    {
        word: "blonde",
        complexity: "Elementary"
    },
    {
        word: "bloody",
        complexity: "Middle School"
    },
    {
        word: "blotch",
        complexity: "Post-College"
    },
    {
        word: "blouse",
        complexity: "Middle School"
    },
    {
        word: "blousy",
        complexity: "High School"
    },
    {
        word: "blowed",
        complexity: "Middle School"
    },
    {
        word: "blower",
        complexity: "Middle School"
    },
    {
        word: "blowup",
        complexity: "Post-College"
    },
    {
        word: "bluesy",
        complexity: "unknown"
    },
    {
        word: "bluffs",
        complexity: "unknown"
    },
    {
        word: "bluing",
        complexity: "Elementary"
    },
    {
        word: "bluish",
        complexity: "High School"
    },
    {
        word: "blunts",
        complexity: "Middle School"
    },
    {
        word: "blurbs",
        complexity: "Middle School"
    },
    {
        word: "blurry",
        complexity: "Middle School"
    },
    {
        word: "blurts",
        complexity: "College"
    },
    {
        word: "boards",
        complexity: "Elementary"
    },
    {
        word: "boater",
        complexity: "High School"
    },
    {
        word: "bobbed",
        complexity: "unknown"
    },
    {
        word: "bobber",
        complexity: "Post-College"
    },
    {
        word: "bobbin",
        complexity: "College"
    },
    {
        word: "bobble",
        complexity: "College"
    },
    {
        word: "bobcat",
        complexity: "College"
    },
    {
        word: "bodega",
        complexity: "Post-College"
    },
    {
        word: "bodice",
        complexity: "High School"
    },
    {
        word: "bodied",
        complexity: "Elementary"
    },
    {
        word: "bodies",
        complexity: "unknown"
    },
    {
        word: "bodily",
        complexity: "Middle School"
    },
    {
        word: "boding",
        complexity: "College"
    },
    {
        word: "bodkin",
        complexity: "Post-College"
    },
    {
        word: "boffin",
        complexity: "Post-College"
    },
    {
        word: "boggle",
        complexity: "College"
    },
    {
        word: "bolder",
        complexity: "Middle School"
    },
    {
        word: "boldly",
        complexity: "High School"
    },
    {
        word: "bolero",
        complexity: "High School"
    },
    {
        word: "bomber",
        complexity: "Middle School"
    },
    {
        word: "bonito",
        complexity: "College"
    },
    {
        word: "bonked",
        complexity: "Post-College"
    },
    {
        word: "bonnet",
        complexity: "Middle School"
    },
    {
        word: "boogie",
        complexity: "Middle School"
    },
    {
        word: "booked",
        complexity: "Elementary"
    },
    {
        word: "boomer",
        complexity: "High School"
    },
    {
        word: "borate",
        complexity: "High School"
    },
    {
        word: "border",
        complexity: "Elementary"
    },
    {
        word: "boreal",
        complexity: "Middle School"
    },
    {
        word: "borrow",
        complexity: "Middle School"
    },
    {
        word: "bosoms",
        complexity: "Middle School"
    },
    {
        word: "bossed",
        complexity: "Elementary"
    },
    {
        word: "bosses",
        complexity: "Middle School"
    },
    {
        word: "botany",
        complexity: "Middle School"
    },
    {
        word: "bother",
        complexity: "Elementary"
    },
    {
        word: "botnet",
        complexity: "High School"
    },
    {
        word: "bottle",
        complexity: "Elementary"
    },
    {
        word: "bottom",
        complexity: "Elementary"
    },
    // {
    //     word: "boucle",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    // {
    //     word: "boudin",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "High School"
    // },
    // {
    //     word: "boughs",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    {
        word: "bought",
        complexity: "Elementary"
    },
    {
        word: "bougie",
        complexity: "College"
    },
    // {
    //     word: "boules",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "unknown"
    // },
    {
        word: "bounce",
        complexity: "Middle School"
    },
    {
        word: "bouncy",
        complexity: "Middle School"
    },
    {
        word: "bounds",
        complexity: "unknown"
    },
    {
        word: "bounty",
        complexity: "Middle School"
    },
    {
        word: "bourne",
        isCapitalized: true,
        complexity: "unknown"
    },
    // {
    //     word: "bourse",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Middle School"
    // },
    {
        word: "bovine",
        complexity: "Middle School"
    },
    {
        word: "bowels",
        complexity: "High School"
    },
    {
        word: "bowers",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "bowery",
        complexity: "Post-College"
    },
    {
        word: "bowing",
        complexity: "Middle School"
    },
    {
        word: "bowled",
        complexity: "Elementary"
    },
    {
        word: "bowler",
        complexity: "High School"
    },
    {
        word: "bowman",
        complexity: "Post-College"
    },
    {
        word: "bowmen",
        complexity: "Post-College"
    },
    {
        word: "boxcar",
        complexity: "College"
    },
    {
        word: "boxing",
        complexity: "Middle School"
    },
    {
        word: "braced",
        complexity: "Middle School"
    },
    {
        word: "bracer",
        complexity: "College"
    },
    {
        word: "braces",
        complexity: "unknown"
    },
    // {
    //     word: "brahma",
    //     isCapitalized: true,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    {
        word: "braids",
        complexity: "Middle School"
    },
    {
        word: "brains",
        complexity: "Elementary"
    },
    {
        word: "brainy",
        complexity: "Elementary"
    },
    {
        word: "braked",
        complexity: "Middle School"
    },
    {
        word: "brakes",
        complexity: "High School"
    },
    {
        word: "branch",
        complexity: "Elementary"
    },
    {
        word: "brandy",
        complexity: "Middle School"
    },
    {
        word: "brassy",
        complexity: "High School"
    },
    {
        word: "bratty",
        complexity: "Post-College"
    },
    {
        word: "braved",
        complexity: "Middle School"
    },
    {
        word: "braver",
        complexity: "unknown"
    },
    {
        word: "braves",
        complexity: "unknown"
    },
    {
        word: "bravos",
        complexity: "High School"
    },
    {
        word: "brawny",
        complexity: "Post-College"
    },
    {
        word: "brayed",
        complexity: "Post-College"
    },
    {
        word: "brayer",
        complexity: "Post-College"
    },
    {
        word: "brazen",
        complexity: "High School"
    },
    // {
    //     word: "brazil",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Middle School"
    // },
    {
        word: "breach",
        complexity: "Middle School"
    },
    {
        word: "breads",
        complexity: "Elementary"
    },
    {
        word: "breaks",
        complexity: "Elementary"
    },
    {
        word: "breast",
        complexity: "Elementary"
    },
    {
        word: "breech",
        complexity: "High School"
    },
    {
        word: "breeds",
        complexity: "Elementary"
    },
    {
        word: "breeze",
        complexity: "Middle School"
    },
    {
        word: "breezy",
        complexity: "Middle School"
    },
    // {
    //     word: "brevet",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "High School"
    // },
    {
        word: "brewed",
        complexity: "High School"
    },
    {
        word: "brewer",
        complexity: "College"
    },
    {
        word: "briars",
        complexity: "College"
    },
    {
        word: "bridge",
        complexity: "Elementary"
    },
    {
        word: "bridle",
        complexity: "High School"
    },
    {
        word: "broach",
        complexity: "High School"
    },
    {
        word: "broads",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "broken",
        complexity: "Elementary"
    },
    {
        word: "broker",
        complexity: "Elementary"
    },
    {
        word: "bronze",
        complexity: "Middle School"
    },
    {
        word: "browns",
        complexity: "Elementary"
    },
    {
        word: "browse",
        complexity: "Elementary"
    },
    {
        word: "brushy",
        complexity: "Middle School"
    },
    {
        word: "brutal",
        complexity: "Elementary"
    },
    {
        word: "bubble",
        complexity: "Elementary"
    },
    {
        word: "bubbly",
        complexity: "Middle School"
    },
    {
        word: "bucked",
        complexity: "Middle School"
    },
    {
        word: "budget",
        complexity: "Elementary"
    },
    {
        word: "budgie",
        complexity: "Post-College"
    },
    {
        word: "buffed",
        complexity: "unknown"
    },
    {
        word: "buffer",
        complexity: "Middle School"
    },
    {
        word: "buffet",
        complexity: "Middle School"
    },
    {
        word: "bugged",
        complexity: "Elementary"
    },
    {
        word: "bugger",
        complexity: "High School"
    },
    {
        word: "bugler",
        complexity: "unknown"
    },
    {
        word: "builds",
        complexity: "Elementary"
    },
    {
        word: "bulged",
        complexity: "unknown"
    },
    {
        word: "bulgur",
        complexity: "Post-College"
    },
    {
        word: "bulked",
        complexity: "Elementary"
    },
    {
        word: "bullet",
        complexity: "Elementary"
    },
    {
        word: "bumble",
        complexity: "College"
    },
    {
        word: "bummed",
        complexity: "unknown"
    },
    {
        word: "bummer",
        complexity: "High School"
    },
    {
        word: "bumper",
        complexity: "Middle School"
    },
    {
        word: "bundle",
        complexity: "Middle School"
    },
    {
        word: "bungee",
        complexity: "High School"
    },
    {
        word: "bungle",
        complexity: "College"
    },
    {
        word: "bunion",
        complexity: "College"
    },
    {
        word: "bunked",
        complexity: "Middle School"
    },
    {
        word: "bunker",
        complexity: "Middle School"
    },
    {
        word: "bunkum",
        complexity: "Post-College"
    },
    {
        word: "bunted",
        complexity: "Middle School"
    },
    {
        word: "buoyed",
        complexity: "unknown"
    },
    {
        word: "burble",
        complexity: "Post-College"
    },
    {
        word: "burden",
        complexity: "Elementary"
    },
    {
        word: "bureau",
        complexity: "Elementary"
    },
    {
        word: "burger",
        complexity: "Middle School"
    },
    {
        word: "burgle",
        complexity: "Post-College"
    },
    {
        word: "burial",
        complexity: "Middle School"
    },
    {
        word: "buried",
        complexity: "unknown"
    },
    {
        word: "buries",
        complexity: "unknown"
    },
    {
        word: "burlap",
        complexity: "High School"
    },
    {
        word: "burley",
        complexity: "High School"
    },
    {
        word: "burned",
        complexity: "unknown"
    },
    {
        word: "burner",
        complexity: "Elementary"
    },
    {
        word: "burnet",
        complexity: "Middle School"
    },
    {
        word: "burrow",
        complexity: "High School"
    },
    {
        word: "bursar",
        complexity: "College"
    },
    {
        word: "burton",
        complexity: "Middle School"
    },
    {
        word: "busboy",
        complexity: "Post-College"
    },
    {
        word: "bushed",
        complexity: "College"
    },
    {
        word: "bushel",
        complexity: "High School"
    },
    {
        word: "busied",
        complexity: "unknown"
    },
    {
        word: "busier",
        complexity: "unknown"
    },
    {
        word: "busily",
        complexity: "Elementary"
    },
    // {
    //     word: "busing",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Elementary"
    // },
    {
        word: "busker",
        complexity: "College"
    },
    {
        word: "bussed",
        complexity: "unknown"
    },
    {
        word: "busses",
        complexity: "High School"
    },
    {
        word: "busted",
        complexity: "Middle School"
    },
    {
        word: "buster",
        complexity: "Middle School"
    },
    {
        word: "bustle",
        complexity: "Middle School"
    },
    {
        word: "butane",
        complexity: "High School"
    },
    {
        word: "butler",
        complexity: "Middle School"
    },
    {
        word: "butted",
        complexity: "Elementary"
    },
    {
        word: "butter",
        complexity: "Elementary"
    },
    {
        word: "button",
        complexity: "Elementary"
    },
    {
        word: "buying",
        complexity: "unknown"
    },
    {
        word: "buyout",
        complexity: "Middle School"
    },
    {
        word: "buzzed",
        complexity: "unknown"
    },
    {
        word: "buzzer",
        complexity: "Post-College"
    },
    {
        word: "bygone",
        complexity: "High School"
    },
    {
        word: "byline",
        complexity: "High School"
    },
    {
        word: "bypass",
        complexity: "Middle School"
    },
    {
        word: "byword",
        complexity: "Post-College"
    },
    {
        word: "cabana",
        complexity: "High School"
    },
    {
        word: "cabane",
        complexity: "High School"
    },
    {
        word: "cablet",
        complexity: "College"
    },
    {
        word: "cabman",
        complexity: "Post-College"
    },
    {
        word: "cached",
        complexity: "Elementary"
    },
    {
        word: "caches",
        complexity: "Elementary"
    },
    {
        word: "cachou",
        complexity: "Post-College"
    },
    {
        word: "caddie",
        complexity: "High School"
    },
    {
        word: "caddis",
        complexity: "High School"
    },
    {
        word: "cadger",
        complexity: "unknown"
    },
    {
        word: "caftan",
        complexity: "College"
    },
    {
        word: "cagier",
        complexity: "Post-College"
    },
    {
        word: "cagily",
        complexity: "Post-College"
    },
    {
        word: "cahier",
        complexity: "High School"
    },
    {
        word: "cahoot",
        complexity: "Post-College"
    },
    {
        word: "cahows",
        complexity: "College"
    },
    {
        word: "caiman",
        complexity: "College"
    },
    {
        word: "caique",
        complexity: "unknown"
    },
    {
        word: "cairns",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "cajole",
        complexity: "Post-College"
    },
    {
        word: "caking",
        complexity: "Elementary"
    },
    {
        word: "calaba",
        complexity: "Post-College"
    },
    {
        word: "calash",
        complexity: "College"
    },
    {
        word: "calcar",
        complexity: "High School"
    },
    {
        word: "calced",
        complexity: "College"
    },
    {
        word: "calces",
        complexity: "Middle School"
    },
    {
        word: "calcic",
        complexity: "Middle School"
    },
    {
        word: "calesa",
        complexity: "High School"
    },
    {
        word: "calico",
        complexity: "High School"
    },
    {
        word: "caliph",
        complexity: "College"
    },
    {
        word: "calker",
        complexity: "High School"
    },
    {
        word: "calkin",
        complexity: "Post-College"
    },
    {
        word: "callan",
        complexity: "unknown"
    },
    {
        word: "callas",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "called",
        complexity: "unknown"
    },
    {
        word: "caller",
        complexity: "Middle School"
    },
    {
        word: "callop",
        complexity: "Middle School"
    },
    {
        word: "callow",
        complexity: "College"
    },
    {
        word: "callus",
        complexity: "High School"
    },
    {
        word: "calmer",
        complexity: "unknown"
    },
    {
        word: "calmly",
        complexity: "unknown"
    },
    {
        word: "calpac",
        complexity: "Post-College"
    },
    {
        word: "calque",
        complexity: "Post-College"
    },
    {
        word: "calves",
        complexity: "Middle School"
    },
    {
        word: "camaca",
        complexity: "College"
    },
    {
        word: "camail",
        complexity: "College"
    },
    {
        word: "camaka",
        complexity: "College"
    },
    {
        word: "camass",
        complexity: "College"
    },
    {
        word: "camber",
        complexity: "High School"
    },
    {
        word: "cambio",
        complexity: "College"
    },
    {
        word: "cameos",
        complexity: "Middle School"
    },
    {
        word: "camera",
        complexity: "Elementary"
    },
    {
        word: "camion",
        complexity: "College"
    },
    {
        word: "camise",
        complexity: "College"
    },
    {
        word: "camlet",
        complexity: "Post-College"
    },
    {
        word: "camote",
        complexity: "College"
    },
    {
        word: "camped",
        complexity: "Elementary"
    },
    {
        word: "camper",
        complexity: "Middle School"
    },
    {
        word: "campos",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "campus",
        complexity: "Elementary"
    },
    {
        word: "canada",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "canals",
        complexity: "Elementary"
    },
    {
        word: "canape",
        complexity: "unknown"
    },
    {
        word: "canard",
        complexity: "High School"
    },
    {
        word: "canary",
        complexity: "High School"
    },
    {
        word: "cancan",
        complexity: "College"
    },
    {
        word: "cancel",
        complexity: "Elementary"
    },
    {
        word: "cancer",
        complexity: "Elementary"
    },
    {
        word: "cancha",
        complexity: "High School"
    },
    {
        word: "candid",
        complexity: "Middle School"
    },
    {
        word: "candle",
        complexity: "Elementary"
    },
    {
        word: "candor",
        complexity: "Middle School"
    },
    {
        word: "canful",
        complexity: "Post-College"
    },
    {
        word: "canine",
        complexity: "Middle School"
    },
    {
        word: "caning",
        complexity: "High School"
    },
    {
        word: "cannon",
        complexity: "Middle School"
    },
    {
        word: "cannot",
        complexity: "Elementary"
    },
    {
        word: "canoed",
        complexity: "Middle School"
    },
    // {
    //     word: "cantic",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    {
        word: "cantus",
        complexity: "High School"
    },
    {
        word: "canvas",
        complexity: "Middle School"
    },
    {
        word: "canyon",
        complexity: "Middle School"
    },
    {
        word: "capers",
        complexity: "unknown"
    },
    {
        word: "capful",
        complexity: "Post-College"
    },
    {
        word: "caping",
        complexity: "Middle School"
    },
    {
        word: "capita",
        complexity: "Middle School"
    },
    {
        word: "capote",
        complexity: "College"
    },
    {
        word: "capsid",
        complexity: "High School"
    },
    {
        word: "captan",
        complexity: "High School"
    },
    {
        word: "captor",
        complexity: "High School"
    },
    {
        word: "carbed",
        complexity: "High School"
    },
    {
        word: "carbos",
        complexity: "unknown"
    },
    {
        word: "carboy",
        complexity: "Post-College"
    },
    {
        word: "cardio",
        complexity: "unknown"
    },
    {
        word: "cardon",
        complexity: "unknown"
    },
    {
        word: "careen",
        complexity: "College"
    },
    {
        word: "career",
        complexity: "Elementary"
    },
    {
        word: "carers",
        complexity: "Elementary"
    },
    {
        word: "caress",
        complexity: "Middle School"
    },
    {
        word: "carets",
        complexity: "Middle School"
    },
    {
        word: "carful",
        complexity: "Post-College"
    },
    {
        word: "carhop",
        complexity: "Post-College"
    },
    {
        word: "caribe",
        complexity: "Post-College"
    },
    {
        word: "caries",
        complexity: "Middle School"
    },
    {
        word: "carina",
        complexity: "College"
    },
    {
        word: "caring",
        complexity: "unknown"
    },
    {
        word: "carlin",
        complexity: "unknown"
    },
    {
        word: "carman",
        complexity: "Middle School"
    },
    {
        word: "carmen",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "carnal",
        complexity: "Middle School"
    },
    {
        word: "carnet",
        complexity: "High School"
    },
    {
        word: "carney",
        complexity: "Middle School"
    },
    {
        word: "caroli",
        complexity: "College"
    },
    {
        word: "carols",
        complexity: "Middle School"
    },
    {
        word: "caroms",
        complexity: "College"
    },
    {
        word: "carpal",
        complexity: "High School"
    },
    {
        word: "carpel",
        complexity: "College"
    },
    {
        word: "carper",
        complexity: "unknown"
    },
    {
        word: "carpet",
        complexity: "Middle School"
    },
    {
        word: "carpus",
        complexity: "Post-College"
    },
    {
        word: "carrel",
        complexity: "College"
    },
    {
        word: "carrom",
        complexity: "College"
    },
    {
        word: "cartel",
        complexity: "Middle School"
    },
    {
        word: "carton",
        complexity: "Middle School"
    },
    {
        word: "carven",
        complexity: "College"
    },
    {
        word: "casaba",
        complexity: "Post-College"
    },
    {
        word: "casefy",
        complexity: "Post-College"
    },
    {
        word: "casern",
        complexity: "College"
    },
    {
        word: "cashew",
        complexity: "High School"
    },
    {
        word: "cashoo",
        complexity: "College"
    },
    {
        word: "casing",
        complexity: "Middle School"
    },
    {
        word: "casita",
        complexity: "College"
    },
    {
        word: "casket",
        complexity: "Middle School"
    },
    {
        word: "cassia",
        complexity: "College"
    },
    {
        word: "cassis",
        complexity: "High School"
    },
    {
        word: "caster",
        complexity: "Middle School"
    },
    {
        word: "castes",
        complexity: "Middle School"
    },
    {
        word: "castle",
        complexity: "Elementary"
    },
    {
        word: "castor",
        complexity: "Middle School"
    },
    {
        word: "casual",
        complexity: "Middle School"
    },
    {
        word: "catchy",
        complexity: "Middle School"
    },
    {
        word: "catena",
        complexity: "College"
    },
    {
        word: "caters",
        complexity: "Middle School"
    },
    {
        word: "catgut",
        complexity: "Post-College"
    },
    {
        word: "cation",
        complexity: "Middle School"
    },
    {
        word: "catkin",
        complexity: "Post-College"
    },
    {
        word: "catnap",
        complexity: "Post-College"
    },
    {
        word: "catnip",
        complexity: "High School"
    },
    {
        word: "catsup",
        complexity: "College"
    },
    {
        word: "catted",
        complexity: "Elementary"
    },
    {
        word: "cattle",
        complexity: "Elementary"
    },
    {
        word: "caucus",
        complexity: "Middle School"
    },
    {
        word: "caught",
        complexity: "Elementary"
    },
    {
        word: "causal",
        complexity: "Middle School"
    },
    {
        word: "caveat",
        complexity: "Middle School"
    },
    {
        word: "cavern",
        complexity: "Middle School"
    },
    {
        word: "caviar",
        complexity: "High School"
    },
    {
        word: "caving",
        complexity: "Middle School"
    },
    {
        word: "cavity",
        complexity: "Middle School"
    },
    {
        word: "cavort",
        complexity: "Post-College"
    },
    {
        word: "cawing",
        complexity: "unknown"
    },
    {
        word: "cayman",
        complexity: "High School"
    },
    {
        word: "cayuse",
        complexity: "Post-College"
    },
    {
        word: "ceased",
        complexity: "unknown"
    },
    {
        word: "ceases",
        complexity: "unknown"
    },
    {
        word: "cecity",
        complexity: "Post-College"
    },
    {
        word: "cedarn",
        complexity: "College"
    },
    {
        word: "cedars",
        complexity: "Middle School"
    },
    {
        word: "ceding",
        complexity: "unknown"
    },
    {
        word: "ceiled",
        complexity: "unknown"
    },
    {
        word: "celery",
        complexity: "Middle School"
    },
    {
        word: "celiac",
        complexity: "High School"
    },
    {
        word: "cellar",
        complexity: "Middle School"
    },
    {
        word: "celled",
        complexity: "Middle School"
    },
    {
        word: "cement",
        complexity: "Elementary"
    },
    {
        word: "cendal",
        complexity: "High School"
    },
    {
        word: "cenizo",
        complexity: "Post-College"
    },
    {
        word: "cenote",
        complexity: "High School"
    },
    {
        word: "censer",
        complexity: "College"
    },
    {
        word: "censor",
        complexity: "Middle School"
    },
    {
        word: "census",
        complexity: "Elementary"
    },
    {
        word: "center",
        complexity: "Elementary"
    },
    // {
    //     word: "centre",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Elementary"
    // },
    {
        word: "centum",
        complexity: "High School"
    },
    {
        word: "cereal",
        complexity: "Middle School"
    },
    {
        word: "cereus",
        complexity: "High School"
    },
    {
        word: "cerise",
        complexity: "College"
    },
    {
        word: "cerium",
        complexity: "Post-College"
    },
    {
        word: "cermet",
        complexity: "High School"
    },
    {
        word: "cerous",
        complexity: "College"
    },
    {
        word: "certes",
        complexity: "Middle School"
    },
    {
        word: "ceruse",
        complexity: "College"
    },
    {
        word: "cervid",
        complexity: "Post-College"
    },
    {
        word: "cervix",
        complexity: "High School"
    },
    {
        word: "cesium",
        complexity: "College"
    },
    {
        word: "cessed",
        complexity: "unknown"
    },
    {
        word: "cestus",
        complexity: "High School"
    },
    {
        word: "cesura",
        complexity: "College"
    },
    {
        word: "cetane",
        complexity: "High School"
    },
    {
        word: "chadar",
        complexity: "unknown"
    },
    {
        word: "chaeta",
        complexity: "Post-College"
    },
    {
        word: "chafed",
        complexity: "unknown"
    },
    {
        word: "chaine",
        complexity: "unknown"
    },
    {
        word: "chakra",
        complexity: "unknown"
    },
    {
        word: "chalet",
        complexity: "Middle School"
    },
    {
        word: "chalky",
        complexity: "Middle School"
    },
    {
        word: "chammy",
        complexity: "Post-College"
    },
    {
        word: "chance",
        complexity: "Elementary"
    },
    {
        word: "chancy",
        complexity: "Elementary"
    },
    {
        word: "change",
        complexity: "Elementary"
    },
    {
        word: "chants",
        complexity: "Middle School"
    },
    {
        word: "chanty",
        complexity: "Post-College"
    },
    {
        word: "chapel",
        complexity: "Middle School"
    },
    {
        word: "chappe",
        complexity: "Middle School"
    },
    {
        word: "chappy",
        complexity: "unknown"
    },
    {
        word: "charas",
        complexity: "High School"
    },
    {
        word: "charco",
        complexity: "High School"
    },
    {
        word: "charge",
        complexity: "Elementary"
    },
    {
        word: "charka",
        complexity: "unknown"
    },
    {
        word: "charro",
        complexity: "High School"
    },
    {
        word: "charrs",
        complexity: "College"
    },
    {
        word: "charry",
        complexity: "High School"
    },
    {
        word: "charta",
        complexity: "High School"
    },
    {
        word: "chaser",
        complexity: "Middle School"
    },
    {
        word: "chasms",
        complexity: "High School"
    },
    {
        word: "chasmy",
        complexity: "High School"
    },
    {
        word: "chasse",
        complexity: "unknown"
    },
    {
        word: "chaste",
        complexity: "Middle School"
    },
    {
        word: "chatty",
        complexity: "Elementary"
    },
    {
        word: "cheeky",
        complexity: "Middle School"
    },
    {
        word: "chelae",
        complexity: "College"
    },
    {
        word: "cherub",
        complexity: "High School"
    },
    {
        word: "chesty",
        complexity: "Elementary"
    },
    {
        word: "chevee",
        complexity: "High School"
    },
    {
        word: "chevet",
        complexity: "High School"
    },
    {
        word: "chevon",
        complexity: "High School"
    },
    // {
    //     word: "chiaus",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Elementary"
    // },
    {
        word: "chicha",
        complexity: "Post-College"
    },
    {
        word: "chichi",
        complexity: "Post-College"
    },
    {
        word: "chicks",
        complexity: "Middle School"
    },
    {
        word: "chicle",
        complexity: "Post-College"
    },
    {
        word: "chicly",
        complexity: "Middle School"
    },
    {
        word: "chided",
        complexity: "Post-College"
    },
    {
        word: "chider",
        complexity: "Post-College"
    },
    {
        word: "chides",
        complexity: "Post-College"
    },
    {
        word: "chield",
        complexity: "High School"
    },
    {
        word: "chiels",
        complexity: "High School"
    },
    {
        word: "chigoe",
        complexity: "Post-College"
    },
    {
        word: "childe",
        complexity: "Middle School"
    },
    {
        word: "chilli",
        complexity: "High School"
    },
    {
        word: "chills",
        complexity: "Middle School"
    },
    {
        word: "chilly",
        complexity: "Middle School"
    },
    {
        word: "chimed",
        complexity: "unknown"
    },
    {
        word: "chimer",
        complexity: "unknown"
    },
    // {
    //     word: "chinas",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    {
        word: "chinch",
        complexity: "Post-College"
    },
    {
        word: "chined",
        complexity: "High School"
    },
    {
        word: "chines",
        complexity: "High School"
    },
    {
        word: "chintz",
        complexity: "Post-College"
    },
    {
        word: "chippy",
        complexity: "Middle School"
    },
    {
        word: "chiral",
        complexity: "Middle School"
    },
    {
        word: "chiros",
        complexity: "unknown"
    },
    {
        word: "chirps",
        complexity: "College"
    },
    {
        word: "chirpy",
        complexity: "College"
    },
    {
        word: "chisel",
        complexity: "High School"
    },
    {
        word: "chital",
        complexity: "High School"
    },
    {
        word: "chitin",
        complexity: "High School"
    },
    {
        word: "chiton",
        complexity: "College"
    },
    {
        word: "choice",
        complexity: "Elementary"
    },
    {
        word: "choirs",
        complexity: "Middle School"
    },
    {
        word: "choker",
        complexity: "High School"
    },
    {
        word: "chokes",
        complexity: "Middle School"
    },
    {
        word: "cholla",
        complexity: "College"
    },
    {
        word: "choora",
        complexity: "High School"
    },
    {
        word: "choose",
        complexity: "Elementary"
    },
    {
        word: "choosy",
        complexity: "Post-College"
    },
    {
        word: "chopin",
        complexity: "Post-College"
    },
    {
        word: "choral",
        complexity: "Middle School"
    },
    {
        word: "chorea",
        complexity: "College"
    },
    {
        word: "chores",
        complexity: "unknown"
    },
    {
        word: "choric",
        complexity: "Post-College"
    },
    {
        word: "chorus",
        complexity: "Middle School"
    },
    {
        word: "choses",
        complexity: "unknown"
    },
    {
        word: "chrism",
        complexity: "High School"
    },
    {
        word: "chroma",
        complexity: "High School"
    },
    {
        word: "chrome",
        complexity: "Middle School"
    },
    {
        word: "chromy",
        complexity: "College"
    },
    {
        word: "chubby",
        complexity: "Middle School"
    },
    {
        word: "church",
        complexity: "Elementary"
    },
    {
        word: "churro",
        complexity: "College"
    },
    {
        word: "chymes",
        complexity: "Post-College"
    },
    {
        word: "chyron",
        complexity: "College"
    },
    {
        word: "cicada",
        complexity: "High School"
    },
    {
        word: "cicala",
        complexity: "Post-College"
    },
    {
        word: "cicale",
        complexity: "Post-College"
    },
    {
        word: "cicely",
        complexity: "High School"
    },
    {
        word: "cicero",
        complexity: "College"
    },
    {
        word: "ciders",
        complexity: "Middle School"
    },
    {
        word: "ciggie",
        complexity: "College"
    },
    {
        word: "cilice",
        complexity: "High School"
    },
    {
        word: "cilium",
        complexity: "Post-College"
    },
    {
        word: "cinder",
        complexity: "High School"
    },
    {
        word: "cinema",
        complexity: "Middle School"
    },
    {
        word: "cinque",
        complexity: "Post-College"
    },
    {
        word: "cipher",
        complexity: "Middle School"
    },
    {
        word: "cippus",
        complexity: "College"
    },
    {
        word: "circle",
        complexity: "Elementary"
    },
    {
        word: "circus",
        complexity: "Middle School"
    },
    {
        word: "cirque",
        complexity: "Post-College"
    },
    {
        word: "cirrus",
        complexity: "High School"
    },
    {
        word: "cisele",
        complexity: "unknown"
    },
    {
        word: "cissus",
        complexity: "High School"
    },
    {
        word: "cities",
        complexity: "Elementary"
    },
    {
        word: "citify",
        complexity: "Post-College"
    },
    {
        word: "citing",
        complexity: "unknown"
    },
    {
        word: "citron",
        complexity: "High School"
    },
    {
        word: "civics",
        complexity: "Middle School"
    },
    {
        word: "civies",
        complexity: "Post-College"
    },
    {
        word: "civism",
        complexity: "Middle School"
    },
    {
        word: "clades",
        complexity: "Middle School"
    },
    {
        word: "claims",
        complexity: "Elementary"
    },
    {
        word: "clammy",
        complexity: "Middle School"
    },
    {
        word: "clamor",
        complexity: "High School"
    },
    {
        word: "clanks",
        complexity: "Post-College"
    },
    {
        word: "claque",
        complexity: "Post-College"
    },
    {
        word: "claret",
        complexity: "High School"
    },
    {
        word: "clasps",
        complexity: "Middle School"
    },
    {
        word: "claspt",
        complexity: "Middle School"
    },
    {
        word: "classy",
        complexity: "Middle School"
    },
    {
        word: "clause",
        complexity: "Elementary"
    },
    {
        word: "clavus",
        complexity: "Post-College"
    },
    {
        word: "clawed",
        complexity: "High School"
    },
    {
        word: "cleans",
        complexity: "Elementary"
    },
    {
        word: "cleave",
        complexity: "High School"
    },
    {
        word: "clench",
        complexity: "Post-College"
    },
    {
        word: "cleome",
        complexity: "Post-College"
    },
    {
        word: "cleped",
        complexity: "College"
    },
    {
        word: "clever",
        complexity: "Middle School"
    },
    {
        word: "cliche",
        complexity: "unknown"
    },
    {
        word: "client",
        complexity: "Elementary"
    },
    {
        word: "climax",
        complexity: "Middle School"
    },
    {
        word: "climes",
        complexity: "College"
    },
    {
        word: "clinal",
        complexity: "unknown"
    },
    {
        word: "clinch",
        complexity: "High School"
    },
    {
        word: "clines",
        complexity: "unknown"
    },
    {
        word: "clingy",
        complexity: "Middle School"
    },
    {
        word: "clinic",
        complexity: "Elementary"
    },
    {
        word: "clinid",
        complexity: "College"
    },
    {
        word: "clique",
        complexity: "High School"
    },
    {
        word: "cliquy",
        complexity: "High School"
    },
    {
        word: "clises",
        complexity: "High School"
    },
    {
        word: "clisis",
        complexity: "High School"
    },
    {
        word: "clitic",
        complexity: "High School"
    },
    {
        word: "clivia",
        complexity: "Post-College"
    },
    {
        word: "cloaca",
        complexity: "Post-College"
    },
    {
        word: "cloche",
        complexity: "Post-College"
    },
    {
        word: "cloddy",
        complexity: "unknown"
    },
    {
        word: "cloggy",
        complexity: "unknown"
    },
    {
        word: "clonal",
        complexity: "unknown"
    },
    {
        word: "cloned",
        complexity: "Elementary"
    },
    {
        word: "clones",
        complexity: "Elementary"
    },
    {
        word: "clonic",
        complexity: "College"
    },
    {
        word: "clonus",
        complexity: "College"
    },
    {
        word: "cloots",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "cloque",
        complexity: "College"
    },
    {
        word: "closed",
        complexity: "Elementary"
    },
    {
        word: "closer",
        complexity: "Elementary"
    },
    {
        word: "closet",
        complexity: "Middle School"
    },
    {
        word: "clothe",
        complexity: "Elementary"
    },
    {
        word: "cloths",
        complexity: "unknown"
    },
    {
        word: "clouds",
        complexity: "unknown"
    },
    {
        word: "cloudy",
        complexity: "Elementary"
    },
    {
        word: "clouts",
        complexity: "Middle School"
    },
    {
        word: "cloven",
        complexity: "Post-College"
    },
    {
        word: "clover",
        complexity: "Middle School"
    },
    {
        word: "cloves",
        complexity: "Middle School"
    },
    {
        word: "cloyed",
        complexity: "Post-College"
    },
    {
        word: "cluing",
        complexity: "unknown"
    },
    {
        word: "clumps",
        complexity: "High School"
    },
    {
        word: "clumpy",
        complexity: "unknown"
    },
    {
        word: "clumsy",
        complexity: "Middle School"
    },
    {
        word: "clunky",
        complexity: "High School"
    },
    {
        word: "clutch",
        complexity: "Middle School"
    },
    {
        word: "clydes",
        complexity: "College"
    },
    {
        word: "coaler",
        complexity: "Middle School"
    },
    {
        word: "coarse",
        complexity: "Middle School"
    },
    {
        word: "coated",
        complexity: "Elementary"
    },
    {
        word: "coaxed",
        complexity: "unknown"
    },
    {
        word: "coaxer",
        complexity: "High School"
    },
    {
        word: "coaxes",
        complexity: "unknown"
    },
    {
        word: "cobalt",
        complexity: "Middle School"
    },
    {
        word: "cobber",
        complexity: "Post-College"
    },
    {
        word: "cobble",
        complexity: "College"
    },
    {
        word: "cobnut",
        complexity: "Post-College"
    },
    {
        word: "coburg",
        complexity: "High School"
    },
    {
        word: "cobweb",
        complexity: "Post-College"
    },
    {
        word: "coccal",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "coccic",
        complexity: "Post-College"
    },
    {
        word: "coccid",
        complexity: "College"
    },
    {
        word: "coccus",
        complexity: "Post-College"
    },
    {
        word: "coccyx",
        complexity: "Post-College"
    },
    {
        word: "cochin",
        complexity: "Post-College"
    },
    {
        word: "cocked",
        complexity: "unknown"
    },
    {
        word: "cocker",
        complexity: "College"
    },
    {
        word: "cockle",
        complexity: "Post-College"
    },
    {
        word: "cockup",
        complexity: "Post-College"
    },
    {
        word: "cocoon",
        complexity: "Middle School"
    },
    {
        word: "coddle",
        complexity: "Post-College"
    },
    {
        word: "codger",
        complexity: "Post-College"
    },
    {
        word: "codify",
        complexity: "College"
    },
    {
        word: "coding",
        complexity: "Elementary"
    },
    {
        word: "coedit",
        complexity: "College"
    },
    {
        word: "coelom",
        complexity: "Post-College"
    },
    {
        word: "coerce",
        complexity: "High School"
    },
    {
        word: "coeval",
        complexity: "Post-College"
    },
    {
        word: "coffee",
        complexity: "Elementary"
    },
    {
        word: "coffer",
        complexity: "Post-College"
    },
    {
        word: "coffin",
        complexity: "Middle School"
    },
    {
        word: "coffle",
        complexity: "Middle School"
    },
    {
        word: "cogent",
        complexity: "Middle School"
    },
    {
        word: "cognac",
        complexity: "High School"
    },
    {
        word: "coheir",
        complexity: "High School"
    },
    {
        word: "cohere",
        complexity: "College"
    },
    {
        word: "cohoba",
        complexity: "Post-College"
    },
    {
        word: "cohoes",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "cohort",
        complexity: "Middle School"
    },
    {
        word: "cohosh",
        complexity: "College"
    },
    {
        word: "coifed",
        complexity: "unknown"
    },
    {
        word: "coiffe",
        complexity: "Post-College"
    },
    {
        word: "coigne",
        isCapitalized: true,
        complexity: "Post-College"
    },
    {
        word: "coiled",
        complexity: "unknown"
    },
    {
        word: "coined",
        complexity: "unknown"
    },
    {
        word: "coital",
        complexity: "unknown"
    },
    {
        word: "coitus",
        complexity: "High School"
    },
    {
        word: "cokers",
        complexity: "High School"
    },
    {
        word: "coldly",
        complexity: "unknown"
    },
    {
        word: "colens",
        complexity: "unknown"
    },
    {
        word: "coleus",
        complexity: "College"
    },
    {
        word: "collab",
        complexity: "High School"
    },
    {
        word: "collet",
        complexity: "High School"
    },
    {
        word: "colors",
        complexity: "Elementary"
    },
    {
        word: "colugo",
        complexity: "Post-College"
    },
    {
        word: "combed",
        complexity: "Middle School"
    },
    {
        word: "comber",
        complexity: "Post-College"
    },
    {
        word: "coming",
        complexity: "Elementary"
    },
    {
        word: "commit",
        complexity: "Elementary"
    },
    {
        word: "common",
        complexity: "Elementary"
    },
    {
        word: "compel",
        complexity: "Middle School"
    },
    {
        word: "concur",
        complexity: "Middle School"
    },
    {
        word: "confab",
        complexity: "Post-College"
    },
    {
        word: "confer",
        complexity: "Middle School"
    },
    {
        word: "confit",
        complexity: "College"
    },
    {
        word: "congee",
        complexity: "College"
    },
    {
        word: "conger",
        complexity: "College"
    },
    {
        word: "conges",
        complexity: "unknown"
    },
    {
        word: "congou",
        complexity: "College"
    },
    {
        word: "conics",
        complexity: "High School"
    },
    {
        word: "conies",
        complexity: "unknown"
    },
    {
        word: "coning",
        complexity: "unknown"
    },
    {
        word: "conium",
        complexity: "Post-College"
    },
    {
        word: "conked",
        complexity: "unknown"
    },
    {
        word: "conker",
        complexity: "Post-College"
    },
    {
        word: "conned",
        complexity: "unknown"
    },
    {
        word: "connex",
        complexity: "High School"
    },
    {
        word: "conoid",
        complexity: "Middle School"
    },
    {
        word: "consol",
        complexity: "High School"
    },
    {
        word: "consul",
        complexity: "Middle School"
    },
    {
        word: "contra",
        complexity: "Middle School"
    },
    {
        word: "conure",
        complexity: "High School"
    },
    {
        word: "convex",
        complexity: "Middle School"
    },
    {
        word: "convey",
        complexity: "Middle School"
    },
    {
        word: "convoy",
        complexity: "Middle School"
    },
    {
        word: "cooboo",
        complexity: "College"
    },
    {
        word: "cooing",
        complexity: "unknown"
    },
    {
        word: "cooked",
        complexity: "unknown"
    },
    {
        word: "cooker",
        complexity: "Middle School"
    },
    {
        word: "cookie",
        complexity: "Elementary"
    },
    {
        word: "cooled",
        complexity: "Elementary"
    },
    {
        word: "cooler",
        complexity: "Elementary"
    },
    {
        word: "coolly",
        complexity: "Elementary"
    },
    {
        word: "coolth",
        complexity: "Elementary"
    },
    {
        word: "cooner",
        complexity: "Middle School"
    },
    {
        word: "cooped",
        complexity: "unknown"
    },
    {
        word: "cooper",
        complexity: "Middle School"
    },
    {
        word: "coopts",
        complexity: "High School"
    },
    {
        word: "cooter",
        complexity: "College"
    },
    {
        word: "cootie",
        complexity: "College"
    },
    {
        word: "copals",
        complexity: "College"
    },
    {
        word: "copied",
        complexity: "unknown"
    },
    {
        word: "copies",
        complexity: "Elementary"
    },
    {
        word: "coping",
        complexity: "Middle School"
    },
    {
        word: "copped",
        complexity: "unknown"
    },
    {
        word: "copper",
        complexity: "Elementary"
    },
    {
        word: "copses",
        complexity: "Post-College"
    },
    {
        word: "copter",
        complexity: "High School"
    },
    {
        word: "copula",
        complexity: "High School"
    },
    {
        word: "coquet",
        complexity: "Post-College"
    },
    {
        word: "coraji",
        complexity: "Post-College"
    },
    {
        word: "corals",
        complexity: "Middle School"
    },
    {
        word: "corbel",
        complexity: "College"
    },
    {
        word: "corbie",
        complexity: "High School"
    },
    {
        word: "corded",
        complexity: "Middle School"
    },
    {
        word: "cordon",
        complexity: "High School"
    },
    {
        word: "coring",
        complexity: "College"
    },
    {
        word: "corita",
        complexity: "College"
    },
    {
        word: "corium",
        complexity: "Post-College"
    },
    {
        word: "corked",
        complexity: "Post-College"
    },
    {
        word: "corker",
        complexity: "Post-College"
    },
    {
        word: "cormel",
        complexity: "Middle School"
    },
    {
        word: "cornea",
        complexity: "Middle School"
    },
    {
        word: "cornel",
        complexity: "College"
    },
    {
        word: "corner",
        complexity: "Elementary"
    },
    {
        word: "cornet",
        complexity: "High School"
    },
    {
        word: "corody",
        complexity: "College"
    },
    {
        word: "corona",
        complexity: "Middle School"
    },
    {
        word: "corpse",
        complexity: "Middle School"
    },
    {
        word: "corpus",
        complexity: "Middle School"
    },
    {
        word: "corral",
        complexity: "Middle School"
    },
    {
        word: "corrie",
        complexity: "College"
    },
    {
        word: "corset",
        complexity: "Middle School"
    },
    {
        word: "cortex",
        complexity: "Middle School"
    },
    {
        word: "corvee",
        complexity: "unknown"
    },
    {
        word: "corves",
        complexity: "Middle School"
    },
    {
        word: "corymb",
        complexity: "Post-College"
    },
    {
        word: "coryza",
        complexity: "Post-College"
    },
    {
        word: "cosecs",
        complexity: "unknown"
    },
    {
        word: "cosher",
        complexity: "College"
    },
    {
        word: "cosied",
        complexity: "Middle School"
    },
    {
        word: "cosier",
        complexity: "Middle School"
    },
    {
        word: "cosies",
        complexity: "Middle School"
    },
    {
        word: "cosign",
        complexity: "Post-College"
    },
    {
        word: "cosmic",
        complexity: "Middle School"
    },
    {
        word: "cosmos",
        complexity: "Middle School"
    },
    {
        word: "costal",
        complexity: "High School"
    },
    {
        word: "costly",
        complexity: "Middle School"
    },
    {
        word: "cotans",
        complexity: "College"
    },
    {
        word: "coting",
        complexity: "Middle School"
    },
    {
        word: "cotter",
        complexity: "College"
    },
    {
        word: "cotton",
        complexity: "Elementary"
    },
    {
        word: "coucal",
        complexity: "College"
    },
    {
        word: "couche",
        complexity: "unknown"
    },
    {
        word: "cougar",
        complexity: "Middle School"
    },
    {
        word: "coulee",
        complexity: "High School"
    },
    {
        word: "couple",
        complexity: "Elementary"
    },
    {
        word: "coupon",
        complexity: "Middle School"
    },
    {
        word: "course",
        complexity: "Elementary"
    },
    {
        word: "courts",
        complexity: "Elementary"
    },
    {
        word: "cousin",
        complexity: "Elementary"
    },
    {
        word: "couter",
        complexity: "Middle School"
    },
    {
        word: "coutil",
        complexity: "High School"
    },
    {
        word: "covens",
        complexity: "High School"
    },
    {
        word: "covers",
        complexity: "unknown"
    },
    {
        word: "covert",
        complexity: "Middle School"
    },
    {
        word: "covets",
        complexity: "High School"
    },
    {
        word: "coveys",
        complexity: "Post-College"
    },
    {
        word: "covids",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "coving",
        complexity: "unknown"
    },
    {
        word: "cowage",
        complexity: "Post-College"
    },
    {
        word: "coward",
        complexity: "Middle School"
    },
    {
        word: "cowash",
        complexity: "College"
    },
    {
        word: "cowboy",
        complexity: "Middle School"
    },
    {
        word: "cowing",
        complexity: "Middle School"
    },
    {
        word: "cowled",
        complexity: "Post-College"
    },
    {
        word: "cowman",
        complexity: "Post-College"
    },
    {
        word: "cowmen",
        complexity: "Post-College"
    },
    {
        word: "cowpea",
        complexity: "Post-College"
    },
    {
        word: "cowpox",
        complexity: "Post-College"
    },
    {
        word: "cowrie",
        complexity: "Post-College"
    },
    {
        word: "coxing",
        complexity: "unknown"
    },
    {
        word: "coydog",
        complexity: "Post-College"
    },
    {
        word: "coyest",
        complexity: "High School"
    },
    {
        word: "coying",
        complexity: "unknown"
    },
    {
        word: "coyish",
        complexity: "unknown"
    },
    {
        word: "coyote",
        complexity: "High School"
    },
    {
        word: "cozens",
        complexity: "Post-College"
    },
    {
        word: "cozier",
        complexity: "unknown"
    },
    {
        word: "cozily",
        complexity: "unknown"
    },
    {
        word: "crabby",
        complexity: "Middle School"
    },
    {
        word: "cracks",
        complexity: "unknown"
    },
    {
        word: "cracky",
        complexity: "High School"
    },
    {
        word: "cradle",
        complexity: "Middle School"
    },
    {
        word: "crafty",
        complexity: "Middle School"
    },
    {
        word: "craggy",
        complexity: "College"
    },
    {
        word: "craics",
        complexity: "Middle School"
    },
    {
        word: "crakow",
        complexity: "College"
    },
    {
        word: "crambo",
        complexity: "College"
    },
    {
        word: "cranch",
        complexity: "Post-College"
    },
    {
        word: "craned",
        complexity: "unknown"
    },
    {
        word: "crania",
        complexity: "unknown"
    },
    {
        word: "cranky",
        complexity: "High School"
    },
    {
        word: "cranny",
        complexity: "High School"
    },
    {
        word: "crapes",
        complexity: "unknown"
    },
    {
        word: "crappy",
        complexity: "Middle School"
    },
    {
        word: "crases",
        complexity: "High School"
    },
    {
        word: "crasis",
        complexity: "High School"
    },
    {
        word: "cratch",
        complexity: "Middle School"
    },
    {
        word: "crated",
        complexity: "Middle School"
    },
    {
        word: "crater",
        complexity: "Middle School"
    },
    {
        word: "craton",
        complexity: "College"
    },
    {
        word: "cravat",
        complexity: "Post-College"
    },
    {
        word: "craves",
        complexity: "unknown"
    },
    {
        word: "crayer",
        complexity: "Middle School"
    },
    {
        word: "crazed",
        complexity: "Middle School"
    },
    {
        word: "creaks",
        complexity: "unknown"
    },
    {
        word: "creaky",
        complexity: "College"
    },
    {
        word: "creamy",
        complexity: "Middle School"
    },
    {
        word: "crease",
        complexity: "Middle School"
    },
    {
        word: "creasy",
        complexity: "Middle School"
    },
    {
        word: "create",
        complexity: "Elementary"
    },
    {
        word: "creche",
        complexity: "unknown"
    },
    {
        word: "credal",
        complexity: "Middle School"
    },
    {
        word: "creeds",
        complexity: "Middle School"
    },
    {
        word: "creeps",
        complexity: "Middle School"
    },
    {
        word: "creepy",
        complexity: "Middle School"
    },
    {
        word: "creese",
        complexity: "unknown"
    },
    {
        word: "crenel",
        complexity: "College"
    },
    {
        word: "creole",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "crepey",
        complexity: "College"
    },
    {
        word: "crepon",
        complexity: "Middle School"
    },
    {
        word: "cressy",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "crests",
        complexity: "unknown"
    },
    {
        word: "cresyl",
        complexity: "High School"
    },
    {
        word: "cretic",
        complexity: "unknown"
    },
    {
        word: "cretin",
        complexity: "College"
    },
    // {
    //     word: "crewed",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Elementary"
    // },
    {
        word: "crewel",
        complexity: "High School"
    },
    {
        word: "cricks",
        complexity: "Post-College"
    },
    {
        word: "crikey",
        complexity: "Post-College"
    },
    {
        word: "crimes",
        complexity: "Elementary"
    },
    // {
    //     word: "crimpy",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "High School"
    // },
    // {
    //     word: "crinal",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    // {
    //     word: "crines",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    {
        word: "cringe",
        complexity: "Middle School"
    },
    // {
    //     word: "crinum",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "College"
    // },
    // {
    //     word: "cripes",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Elementary"
    // },
    // {
    //     word: "crises",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    // {
    //     word: "crisic",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    {
        word: "crisis",
        complexity: "Middle School"
    },
    {
        word: "crispy",
        complexity: "Middle School"
    },
    {
        word: "crista",
        complexity: "High School"
    },
    {
        word: "critic",
        complexity: "Middle School"
    },
    {
        word: "croaky",
        complexity: "College"
    },
    {
        word: "crosse",
        complexity: "College"
    },
    {
        word: "crouch",
        complexity: "High School"
    },
    {
        word: "croupy",
        complexity: "Post-College"
    },
    {
        word: "crower",
        complexity: "unknown"
    },
    {
        word: "cruddy",
        complexity: "Post-College"
    },
    {
        word: "crumbs",
        complexity: "unknown"
    },
    {
        word: "crunch",
        complexity: "Middle School"
    },
    // {
    //     word: "cruors",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "High School"
    // },
    {
        word: "crural",
        complexity: "College"
    },
    // {
    //     word: "crutch",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "High School"
    // },
    {
        word: "crypto",
        complexity: "College"
    },
    {
        word: "cuatro",
        complexity: "High School"
    },
    {
        word: "cubage",
        complexity: "College"
    },
    {
        word: "cubbed",
        complexity: "Middle School"
    },
    {
        word: "cubism",
        complexity: "Post-College"
    },
    {
        word: "cuckoo",
        complexity: "High School"
    },
    {
        word: "cuddly",
        complexity: "Middle School"
    },
    {
        word: "cudgel",
        complexity: "Post-College"
    },
    // {
    //     word: "cueist",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Middle School"
    // },
    // {
    //     word: "cuesta",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "High School"
    // },
    // {
    //     word: "cuffed",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    {
        word: "cuirie",
        complexity: "College"
    },
    {
        word: "cuisse",
        complexity: "College"
    },
    {
        word: "culled",
        complexity: "unknown"
    },
    {
        word: "cullet",
        complexity: "High School"
    },
    {
        word: "cultus",
        complexity: "Post-College"
    },
    {
        word: "cummer",
        complexity: "College"
    },
    {
        word: "cuneus",
        complexity: "Post-College"
    },
    {
        word: "cupric",
        complexity: "Post-College"
    },
    {
        word: "cuprum",
        complexity: "Post-College"
    },
    {
        word: "cupule",
        complexity: "Post-College"
    },
    {
        word: "curacy",
        complexity: "Post-College"
    },
    {
        word: "curagh",
        complexity: "unknown"
    },
    {
        word: "curare",
        complexity: "College"
    },
    {
        word: "curari",
        complexity: "College"
    },
    {
        word: "curate",
        complexity: "High School"
    },
    {
        word: "curbed",
        complexity: "unknown"
    },
    {
        word: "curdle",
        complexity: "Post-College"
    },
    {
        word: "curers",
        complexity: "High School"
    },
    {
        word: "curfew",
        complexity: "Middle School"
    },
    // {
    //     word: "curial",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    {
        word: "curing",
        complexity: "Middle School"
    },
    // {
    //     word: "curios",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    // {
    //     word: "curite",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Middle School"
    // },
    // {
    //     word: "curium",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Post-College"
    // },
    {
        word: "curler",
        complexity: "College"
    },
    // {
    //     word: "curlew",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Post-College"
    // },
    // {
    //     word: "curred",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    {
        word: "currie",
        complexity: "Middle School"
    },
    {
        word: "cursed",
        complexity: "Middle School"
    },
    {
        word: "curser",
        complexity: "unknown"
    },
    {
        word: "curses",
        complexity: "unknown"
    },
    {
        word: "cursor",
        complexity: "High School"
    },
    {
        word: "curtal",
        complexity: "College"
    },
    {
        word: "curter",
        complexity: "High School"
    },
    {
        word: "curtly",
        complexity: "College"
    },
    {
        word: "curtsy",
        complexity: "Post-College"
    },
    {
        word: "curule",
        complexity: "College"
    },
    {
        word: "curved",
        complexity: "unknown"
    },
    {
        word: "curvet",
        complexity: "Post-College"
    },
    {
        word: "cushat",
        complexity: "Post-College"
    },
    {
        word: "cushaw",
        complexity: "Post-College"
    },
    {
        word: "cuspal",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "cusped",
        complexity: "College"
    },
    {
        word: "cuspid",
        complexity: "Post-College"
    },
    {
        word: "cussed",
        complexity: "High School"
    },
    {
        word: "cusses",
        complexity: "High School"
    },
    {
        word: "custom",
        complexity: "Elementary"
    },
    {
        word: "custos",
        complexity: "High School"
    },
    {
        word: "cutcha",
        isCapitalized: true,
        complexity: "College"
    },
    {
        word: "cutely",
        complexity: "unknown"
    },
    {
        word: "cutest",
        complexity: "unknown"
    },
    {
        word: "cuties",
        complexity: "unknown"
    },
    {
        word: "cutler",
        complexity: "College"
    },
    {
        word: "cutlet",
        complexity: "College"
    },
    {
        word: "cutoff",
        complexity: "Middle School"
    },
    {
        word: "cutout",
        complexity: "Middle School"
    },
    {
        word: "cuttle",
        complexity: "College"
    },
    {
        word: "cyanic",
        complexity: "Post-College"
    },
    {
        word: "cybers",
        complexity: "Middle School"
    },
    {
        word: "cyborg",
        complexity: "College"
    },
    {
        word: "cyclas",
        complexity: "College"
    },
    {
        word: "cycled",
        complexity: "Elementary"
    },
    {
        word: "cycles",
        complexity: "Elementary"
    },
    {
        word: "cygnet",
        complexity: "Post-College"
    },
    {
        word: "cymene",
        complexity: "Post-College"
    },
    {
        word: "cymoid",
        complexity: "Post-College"
    },
    {
        word: "cymose",
        complexity: "Post-College"
    },
    {
        word: "cypher",
        complexity: "unknown"
    },
    // {
    //     word: "cypres",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    // {
    //     word: "cyprus",
    //     isCapitalized: true,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    // {
    //     word: "cystic",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Middle School"
    // },
    // {
    //     word: "cytost",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "College"
    // },
    // {
    //     word: "cywydd",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Post-College"
    // },
    {
        word: "dabbed",
        complexity: "unknown"
    },
    {
        word: "dabber",
        complexity: "High School"
    },
    {
        word: "dabble",
        complexity: "College"
    },
    {
        word: "dacker",
        complexity: "College"
    },
    {
        word: "dacoit",
        complexity: "College"
    },
    {
        word: "dactyl",
        complexity: "Post-College"
    },
    {
        word: "dadoed",
        complexity: "High School"
    },
    {
        word: "dadoes",
        complexity: "High School"
    },
    {
        word: "daedal",
        complexity: "College"
    },
    {
        word: "daemon",
        complexity: "Middle School"
    },
    {
        word: "daffed",
        complexity: "Middle School"
    },
    {
        word: "dafter",
        complexity: "Middle School"
    },
    {
        word: "daftly",
        complexity: "Middle School"
    },
    {
        word: "daggas",
        complexity: "Post-College"
    },
    {
        word: "dagger",
        complexity: "Middle School"
    },
    {
        word: "daggle",
        complexity: "College"
    },
    {
        word: "dagoba",
        complexity: "Post-College"
    },
    {
        word: "dahlia",
        complexity: "Post-College"
    },
    {
        word: "damage",
        complexity: "Elementary"
    },
    {
        word: "dammar",
        complexity: "Post-College"
    },
    {
        word: "dammer",
        complexity: "Post-College"
    },
    {
        word: "dammit",
        complexity: "High School"
    },
    {
        word: "damper",
        complexity: "Middle School"
    },
    {
        word: "damsel",
        complexity: "High School"
    },
    {
        word: "damson",
        complexity: "College"
    },
    {
        word: "danced",
        complexity: "Elementary"
    },
    {
        word: "dancer",
        complexity: "Middle School"
    },
    {
        word: "dances",
        complexity: "Elementary"
    },
    {
        word: "dander",
        complexity: "High School"
    },
    {
        word: "dandle",
        complexity: "College"
    },
    {
        word: "danged",
        complexity: "Elementary"
    },
    {
        word: "danger",
        complexity: "Elementary"
    },
    {
        word: "dangle",
        complexity: "Middle School"
    },
    {
        word: "danish",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "danker",
        complexity: "High School"
    },
    {
        word: "dankly",
        complexity: "High School"
    },
    {
        word: "daphne",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "dapped",
        complexity: "Middle School"
    },
    {
        word: "dapper",
        complexity: "High School"
    },
    {
        word: "dapple",
        complexity: "Post-College"
    },
    {
        word: "daring",
        complexity: "Middle School"
    },
    {
        word: "darked",
        complexity: "Elementary"
    },
    {
        word: "darken",
        complexity: "High School"
    },
    {
        word: "darker",
        complexity: "unknown"
    },
    {
        word: "darkle",
        complexity: "Post-College"
    },
    {
        word: "darkly",
        complexity: "Elementary"
    },
    {
        word: "darned",
        complexity: "Middle School"
    },
    {
        word: "darnel",
        complexity: "College"
    },
    {
        word: "darner",
        complexity: "Middle School"
    },
    {
        word: "darted",
        complexity: "unknown"
    },
    {
        word: "darter",
        complexity: "College"
    },
    {
        word: "dartle",
        complexity: "Middle School"
    },
    {
        word: "daruma",
        complexity: "College"
    },
    {
        word: "dashed",
        complexity: "Elementary"
    },
    {
        word: "dasher",
        complexity: "High School"
    },
    {
        word: "dashes",
        complexity: "Elementary"
    },
    {
        word: "dassie",
        complexity: "College"
    },
    {
        word: "dastur",
        complexity: "High School"
    },
    {
        word: "datary",
        complexity: "College"
    },
    {
        word: "datcha",
        complexity: "unknown"
    },
    {
        word: "dating",
        complexity: "unknown"
    },
    {
        word: "dative",
        complexity: "High School"
    },
    {
        word: "datura",
        complexity: "College"
    },
    {
        word: "daubed",
        complexity: "unknown"
    },
    {
        word: "daubes",
        complexity: "Middle School"
    },
    {
        word: "dauted",
        complexity: "Middle School"
    },
    {
        word: "dawdle",
        complexity: "Post-College"
    },
    {
        word: "dawned",
        complexity: "unknown"
    },
    {
        word: "daybed",
        complexity: "College"
    },
    {
        word: "dayfly",
        complexity: "Post-College"
    },
    {
        word: "dayhop",
        complexity: "Post-College"
    },
    {
        word: "dazing",
        complexity: "unknown"
    },
    {
        word: "dazzle",
        complexity: "Post-College"
    },
    {
        word: "deacon",
        complexity: "Middle School"
    },
    {
        word: "deaden",
        complexity: "College"
    },
    {
        word: "deader",
        complexity: "unknown"
    },
    {
        word: "deadly",
        complexity: "Middle School"
    },
    {
        word: "deafen",
        complexity: "Middle School"
    },
    {
        word: "deafer",
        complexity: "unknown"
    },
    {
        word: "deafly",
        complexity: "Middle School"
    },
    {
        word: "dealer",
        complexity: "Elementary"
    },
    {
        word: "dearer",
        complexity: "unknown"
    },
    {
        word: "dearie",
        complexity: "unknown"
    },
    {
        word: "dearly",
        complexity: "unknown"
    },
    {
        word: "dearth",
        complexity: "Middle School"
    },
    {
        word: "deasil",
        complexity: "High School"
    },
    {
        word: "deaths",
        complexity: "Elementary"
    },
    {
        word: "deathy",
        complexity: "Middle School"
    },
    {
        word: "debark",
        complexity: "Post-College"
    },
    {
        word: "debase",
        complexity: "College"
    },
    {
        word: "debate",
        complexity: "Elementary"
    },
    {
        word: "debeak",
        complexity: "College"
    },
    {
        word: "debone",
        complexity: "College"
    },
    {
        word: "debris",
        complexity: "Elementary"
    },
    {
        word: "debtor",
        complexity: "Middle School"
    },
    {
        word: "debunk",
        complexity: "College"
    },
    {
        word: "deburr",
        complexity: "High School"
    },
    {
        word: "decade",
        complexity: "Elementary"
    },
    {
        word: "decamp",
        complexity: "Post-College"
    },
    {
        word: "decane",
        complexity: "Middle School"
    },
    {
        word: "decani",
        complexity: "High School"
    },
    {
        word: "deceit",
        complexity: "Middle School"
    },
    {
        word: "decent",
        complexity: "Elementary"
    },
    {
        word: "decern",
        complexity: "High School"
    },
    {
        word: "decide",
        complexity: "Elementary"
    },
    {
        word: "decile",
        complexity: "High School"
    },
    {
        word: "decked",
        complexity: "unknown"
    },
    {
        word: "deckle",
        complexity: "Post-College"
    },
    {
        word: "declot",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "decoct",
        complexity: "Post-College"
    },
    {
        word: "decoys",
        complexity: "High School"
    },
    {
        word: "decree",
        complexity: "Middle School"
    },
    {
        word: "decury",
        complexity: "Post-College"
    },
    {
        word: "dedans",
        complexity: "High School"
    },
    {
        word: "deduce",
        complexity: "Middle School"
    },
    {
        word: "deduct",
        complexity: "Middle School"
    },
    {
        word: "deeded",
        complexity: "Middle School"
    },
    {
        word: "deejay",
        complexity: "College"
    },
    {
        word: "deemed",
        complexity: "unknown"
    },
    {
        word: "deepen",
        complexity: "Middle School"
    },
    {
        word: "deeper",
        complexity: "Elementary"
    },
    {
        word: "deeply",
        complexity: "Elementary"
    },
    {
        word: "deface",
        complexity: "High School"
    },
    {
        word: "defame",
        complexity: "High School"
    },
    {
        word: "defeat",
        complexity: "Elementary"
    },
    {
        word: "defect",
        complexity: "Middle School"
    },
    {
        word: "defend",
        complexity: "Elementary"
    },
    {
        word: "defers",
        complexity: "Middle School"
    },
    {
        word: "defied",
        complexity: "unknown"
    },
    {
        word: "defier",
        complexity: "Middle School"
    },
    {
        word: "defies",
        complexity: "unknown"
    },
    {
        word: "defile",
        complexity: "High School"
    },
    {
        word: "define",
        complexity: "Elementary"
    },
    {
        word: "defoam",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "deform",
        complexity: "High School"
    },
    {
        word: "defrag",
        complexity: "High School"
    },
    {
        word: "defray",
        complexity: "High School"
    },
    {
        word: "deftly",
        complexity: "High School"
    },
    {
        word: "defund",
        complexity: "High School"
    },
    {
        word: "defuse",
        complexity: "High School"
    },
    {
        word: "degage",
        complexity: "unknown"
    },
    {
        word: "degame",
        complexity: "High School"
    },
    {
        word: "degerm",
        complexity: "College"
    },
    {
        word: "degree",
        complexity: "Elementary"
    },
    {
        word: "degust",
        complexity: "College"
    },
    {
        word: "dehire",
        complexity: "High School"
    },
    {
        word: "dehorn",
        complexity: "College"
    },
    {
        word: "dehort",
        complexity: "High School"
    },
    {
        word: "dehull",
        complexity: "Middle School"
    },
    {
        word: "deject",
        complexity: "Post-College"
    },
    {
        word: "delate",
        complexity: "Middle School"
    },
    {
        word: "delete",
        complexity: "Middle School"
    },
    {
        word: "delict",
        complexity: "High School"
    },
    {
        word: "delink",
        complexity: "Middle School"
    },
    {
        word: "delist",
        complexity: "College"
    },
    {
        word: "deltas",
        complexity: "Elementary"
    },
    {
        word: "delude",
        complexity: "High School"
    },
    {
        word: "deluge",
        complexity: "High School"
    },
    {
        word: "deluxe",
        complexity: "Middle School"
    },
    {
        word: "delved",
        complexity: "Middle School"
    },
    {
        word: "delves",
        complexity: "Middle School"
    },
    {
        word: "demark",
        complexity: "High School"
    },
    {
        word: "demist",
        complexity: "unknown"
    },
    {
        word: "demode",
        complexity: "unknown"
    },
    {
        word: "demote",
        complexity: "College"
    },
    {
        word: "demure",
        complexity: "High School"
    },
    {
        word: "demurs",
        complexity: "Post-College"
    },
    {
        word: "denary",
        complexity: "College"
    },
    {
        word: "dendra",
        complexity: "High School"
    },
    {
        word: "dengue",
        complexity: "Middle School"
    },
    {
        word: "denial",
        complexity: "Elementary"
    },
    {
        word: "denied",
        complexity: "unknown"
    },
    {
        word: "denier",
        complexity: "Middle School"
    },
    {
        word: "denies",
        complexity: "Elementary"
    },
    {
        word: "denims",
        complexity: "unknown"
    },
    {
        word: "denned",
        complexity: "Elementary"
    },
    {
        word: "denote",
        complexity: "Elementary"
    },
    {
        word: "denser",
        complexity: "unknown"
    },
    {
        word: "dental",
        complexity: "Elementary"
    },
    {
        word: "dented",
        complexity: "unknown"
    },
    {
        word: "dentes",
        complexity: "Middle School"
    },
    {
        word: "dentil",
        complexity: "High School"
    },
    {
        word: "dentin",
        complexity: "High School"
    },
    {
        word: "denude",
        complexity: "College"
    },
    {
        word: "deodar",
        complexity: "College"
    },
    {
        word: "depart",
        complexity: "Middle School"
    },
    {
        word: "depend",
        complexity: "Elementary"
    },
    {
        word: "deperm",
        complexity: "Middle School"
    },
    {
        word: "depict",
        complexity: "Middle School"
    },
    {
        word: "depill",
        complexity: "College"
    },
    {
        word: "deploy",
        complexity: "Middle School"
    },
    {
        word: "depone",
        complexity: "College"
    },
    {
        word: "deport",
        complexity: "High School"
    },
    {
        word: "depose",
        complexity: "High School"
    },
    {
        word: "depths",
        complexity: "Elementary"
    },
    {
        word: "depulp",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "depute",
        complexity: "Middle School"
    },
    {
        word: "deputy",
        complexity: "Middle School"
    },
    {
        word: "derail",
        complexity: "Middle School"
    },
    {
        word: "deride",
        complexity: "High School"
    },
    {
        word: "derive",
        complexity: "Elementary"
    },
    {
        word: "dermal",
        complexity: "Middle School"
    },
    {
        word: "dermic",
        complexity: "High School"
    },
    {
        word: "desalt",
        complexity: "College"
    },
    {
        word: "descry",
        complexity: "Post-College"
    },
    {
        word: "desert",
        complexity: "Elementary"
    },
    {
        word: "design",
        complexity: "Elementary"
    },
    {
        word: "desire",
        complexity: "Elementary"
    },
    {
        word: "desist",
        complexity: "Middle School"
    },
    {
        word: "detail",
        complexity: "Elementary"
    },
    {
        word: "detect",
        complexity: "Elementary"
    },
    {
        word: "detent",
        complexity: "College"
    },
    {
        word: "deters",
        complexity: "unknown"
    },
    {
        word: "detest",
        complexity: "High School"
    },
    {
        word: "detour",
        complexity: "Middle School"
    },
    {
        word: "deuced",
        complexity: "Post-College"
    },
    {
        word: "deuces",
        complexity: "High School"
    },
    {
        word: "deuton",
        complexity: "High School"
    },
    {
        word: "device",
        complexity: "Elementary"
    },
    {
        word: "devine",
        complexity: "Middle School"
    },
    {
        word: "devise",
        complexity: "Middle School"
    },
    {
        word: "devoid",
        complexity: "Middle School"
    },
    {
        word: "devote",
        complexity: "Middle School"
    },
    {
        word: "devour",
        complexity: "High School"
    },
    {
        word: "devout",
        complexity: "Middle School"
    },
    {
        word: "dewily",
        complexity: "College"
    },
    {
        word: "dewing",
        complexity: "Middle School"
    },
    {
        word: "dewlap",
        complexity: "Post-College"
    },
    {
        word: "deworm",
        complexity: "High School"
    },
    {
        word: "dexter",
        complexity: "College"
    },
    {
        word: "dextro",
        complexity: "College"
    },
    {
        word: "dharma",
        complexity: "High School"
    },
    {
        word: "dharna",
        complexity: "High School"
    },
    {
        word: "dhooly",
        complexity: "Post-College"
    },
    {
        word: "dhooti",
        complexity: "Post-College"
    },
    {
        word: "dhurna",
        complexity: "High School"
    },
    {
        word: "diable",
        complexity: "High School"
    },
    {
        word: "diablo",
        complexity: "Middle School"
    },
    {
        word: "diacid",
        complexity: "College"
    },
    {
        word: "diadem",
        complexity: "High School"
    },
    {
        word: "diadic",
        complexity: "College"
    },
    {
        word: "dialed",
        complexity: "Elementary"
    },
    {
        word: "dialer",
        complexity: "High School"
    },
    {
        word: "dialog",
        complexity: "unknown"
    },
    {
        word: "diaper",
        complexity: "Middle School"
    },
    {
        word: "diapir",
        complexity: "Post-College"
    },
    {
        word: "diatom",
        complexity: "High School"
    },
    {
        word: "dibbed",
        complexity: "High School"
    },
    {
        word: "dibber",
        complexity: "Post-College"
    },
    {
        word: "dibble",
        complexity: "Post-College"
    },
    {
        word: "dibbuk",
        complexity: "Post-College"
    },
    {
        word: "dicast",
        complexity: "Middle School"
    },
    {
        word: "dicing",
        complexity: "Middle School"
    },
    {
        word: "dicker",
        complexity: "Post-College"
    },
    {
        word: "dickey",
        complexity: "Post-College"
    },
    {
        word: "dickie",
        complexity: "unknown"
    },
    {
        word: "dictum",
        complexity: "High School"
    },
    {
        word: "didact",
        complexity: "High School"
    },
    {
        word: "diddle",
        complexity: "High School"
    },
    {
        word: "diddly",
        complexity: "Post-College"
    },
    {
        word: "didoes",
        complexity: "High School"
    },
    {
        word: "differ",
        complexity: "Elementary"
    },
    {
        word: "digest",
        complexity: "Elementary"
    },
    {
        word: "digged",
        complexity: "Middle School"
    },
    {
        word: "digger",
        complexity: "Middle School"
    },
    {
        word: "digits",
        complexity: "unknown"
    },
    {
        word: "diglot",
        complexity: "College"
    },
    {
        word: "digram",
        complexity: "Post-College"
    },
    {
        word: "diking",
        complexity: "High School"
    },
    {
        word: "diktat",
        complexity: "College"
    },
    {
        word: "dilate",
        complexity: "High School"
    },
    {
        word: "dilute",
        complexity: "Middle School"
    },
    {
        word: "dimmed",
        complexity: "unknown"
    },
    {
        word: "dimmer",
        complexity: "Middle School"
    },
    {
        word: "dimple",
        complexity: "High School"
    },
    {
        word: "dimply",
        complexity: "High School"
    },
    {
        word: "dimwit",
        complexity: "Post-College"
    },
    {
        word: "dinged",
        complexity: "unknown"
    },
    {
        word: "dinghy",
        complexity: "High School"
    },
    {
        word: "dingle",
        complexity: "College"
    },
    {
        word: "dingus",
        complexity: "High School"
    },
    {
        word: "dining",
        complexity: "unknown"
    },
    {
        word: "dinkum",
        complexity: "Post-College"
    },
    {
        word: "dinned",
        complexity: "Middle School"
    },
    {
        word: "diodes",
        complexity: "Middle School"
    },
    {
        word: "diotic",
        complexity: "High School"
    },
    {
        word: "dioxin",
        complexity: "Middle School"
    },
    {
        word: "direct",
        complexity: "Elementary"
    },
    {
        word: "direst",
        complexity: "unknown"
    },
    {
        word: "dirges",
        complexity: "High School"
    },
    {
        word: "dirham",
        complexity: "Post-College"
    },
    {
        word: "dirhem",
        complexity: "Middle School"
    },
    {
        word: "dirigo",
        complexity: "College"
    },
    {
        word: "dirled",
        complexity: "Middle School"
    },
    {
        word: "dirndl",
        complexity: "College"
    },
    {
        word: "disarm",
        complexity: "Middle School"
    },
    {
        word: "disbar",
        complexity: "College"
    },
    {
        word: "disbud",
        complexity: "Post-College"
    },
    {
        word: "discus",
        complexity: "High School"
    },
    {
        word: "diseur",
        complexity: "High School"
    },
    {
        word: "dished",
        complexity: "Elementary"
    },
    {
        word: "dishes",
        complexity: "unknown"
    },
    {
        word: "dismal",
        complexity: "Middle School"
    },
    {
        word: "dismay",
        complexity: "Middle School"
    },
    {
        word: "disown",
        complexity: "High School"
    },
    {
        word: "dispel",
        complexity: "Middle School"
    },
    {
        word: "dissed",
        complexity: "unknown"
    },
    {
        word: "disses",
        complexity: "unknown"
    },
    {
        word: "distad",
        complexity: "Middle School"
    },
    {
        word: "distal",
        complexity: "Middle School"
    },
    {
        word: "distil",
        complexity: "College"
    },
    {
        word: "disuse",
        complexity: "High School"
    },
    {
        word: "dither",
        complexity: "High School"
    },
    {
        word: "dittos",
        complexity: "Middle School"
    },
    {
        word: "divert",
        complexity: "Middle School"
    },
    {
        word: "divest",
        complexity: "Middle School"
    },
    {
        word: "divide",
        complexity: "Middle School"
    },
    {
        word: "divine",
        complexity: "Elementary"
    },
    {
        word: "diving",
        complexity: "Middle School"
    },
    {
        word: "divisi",
        complexity: "College"
    },
    {
        word: "dixits",
        complexity: "College"
    },
    {
        word: "doable",
        complexity: "High School"
    },
    {
        word: "dobbin",
        complexity: "Post-College"
    },
    {
        word: "dobson",
        complexity: "Post-College"
    },
    {
        word: "docent",
        complexity: "High School"
    },
    {
        word: "docket",
        complexity: "Middle School"
    },
    {
        word: "doctor",
        complexity: "Elementary"
    },
    {
        word: "doddie",
        complexity: "High School"
    },
    {
        word: "doddle",
        complexity: "Post-College"
    },
    {
        word: "dodger",
        complexity: "High School"
    },
    {
        word: "dodoes",
        complexity: "High School"
    },
    {
        word: "doffer",
        complexity: "High School"
    },
    {
        word: "dogeys",
        complexity: "Post-College"
    },
    {
        word: "dogged",
        complexity: "High School"
    },
    {
        word: "doggie",
        complexity: "unknown"
    },
    {
        word: "dogleg",
        complexity: "Post-College"
    },
    {
        word: "dogmas",
        complexity: "Middle School"
    },
    {
        word: "dognap",
        complexity: "High School"
    },
    {
        word: "doiled",
        complexity: "High School"
    },
    {
        word: "doings",
        complexity: "unknown"
    },
    {
        word: "doited",
        complexity: "Middle School"
    },
    {
        word: "doling",
        complexity: "unknown"
    },
    {
        word: "dolium",
        complexity: "Post-College"
    },
    {
        word: "dollar",
        complexity: "Elementary"
    },
    {
        word: "dollop",
        complexity: "High School"
    },
    {
        word: "dolman",
        complexity: "College"
    },
    {
        word: "dolmen",
        complexity: "College"
    },
    {
        word: "dolour",
        complexity: "unknown"
    },
    {
        word: "domain",
        complexity: "Elementary"
    },
    {
        word: "domine",
        complexity: "College"
    },
    {
        word: "domino",
        complexity: "Middle School"
    },
    {
        word: "dommes",
        complexity: "Middle School"
    },
    {
        word: "donate",
        complexity: "Elementary"
    },
    {
        word: "dongas",
        complexity: "High School"
    },
    {
        word: "dongle",
        complexity: "Middle School"
    },
    {
        word: "donjon",
        complexity: "Post-College"
    },
    {
        word: "donors",
        complexity: "Elementary"
    },
    {
        word: "doodle",
        complexity: "High School"
    },
    {
        word: "doolie",
        complexity: "High School"
    },
    {
        word: "doomed",
        complexity: "unknown"
    },
    {
        word: "dopier",
        complexity: "College"
    },
    {
        word: "dorado",
        complexity: "High School"
    },
    {
        word: "dorjes",
        complexity: "College"
    },
    {
        word: "dormie",
        complexity: "College"
    },
    {
        word: "dormin",
        complexity: "Middle School"
    },
    {
        word: "dorper",
        complexity: "High School"
    },
    {
        word: "dorsad",
        complexity: "Middle School"
    },
    {
        word: "dorsal",
        complexity: "Middle School"
    },
    {
        word: "dorser",
        complexity: "High School"
    },
    {
        word: "dorsum",
        complexity: "College"
    },
    {
        word: "dorter",
        complexity: "Middle School"
    },
    {
        word: "dosage",
        complexity: "Elementary"
    },
    {
        word: "dosing",
        complexity: "unknown"
    },
    {
        word: "dossal",
        complexity: "College"
    },
    {
        word: "dossel",
        complexity: "College"
    },
    {
        word: "dosser",
        complexity: "College"
    },
    {
        word: "dossil",
        complexity: "High School"
    },
    {
        word: "dotage",
        complexity: "College"
    },
    {
        word: "dotard",
        complexity: "College"
    },
    {
        word: "doters",
        complexity: "College"
    },
    {
        word: "doting",
        complexity: "High School"
    },
    {
        word: "double",
        complexity: "Elementary"
    },
    {
        word: "doubly",
        complexity: "Middle School"
    },
    {
        word: "douche",
        complexity: "High School"
    },
    {
        word: "doughy",
        complexity: "Post-College"
    },
    {
        word: "doulas",
        complexity: "High School"
    },
    {
        word: "dourly",
        complexity: "unknown"
    },
    {
        word: "doused",
        complexity: "College"
    },
    {
        word: "douser",
        complexity: "Middle School"
    },
    {
        word: "douses",
        complexity: "College"
    },
    {
        word: "douter",
        complexity: "Middle School"
    },
    {
        word: "dovish",
        complexity: "College"
    },
    {
        word: "dowers",
        complexity: "High School"
    },
    {
        word: "dowery",
        complexity: "High School"
    },
    {
        word: "dowing",
        complexity: "unknown"
    },
    {
        word: "dowlas",
        complexity: "High School"
    },
    {
        word: "downed",
        complexity: "unknown"
    },
    {
        word: "downer",
        complexity: "High School"
    },
    {
        word: "dowser",
        complexity: "College"
    },
    {
        word: "dowses",
        complexity: "Post-College"
    },
    {
        word: "doxing",
        complexity: "College"
    },
    {
        word: "doyley",
        complexity: "Post-College"
    },
    {
        word: "dozens",
        complexity: "unknown"
    },
    {
        word: "dozing",
        complexity: "Post-College"
    },
    {
        word: "drachm",
        complexity: "Post-College"
    },
    {
        word: "drafts",
        complexity: "Elementary"
    },
    {
        word: "drafty",
        complexity: "Post-College"
    },
    {
        word: "dragee",
        complexity: "unknown"
    },
    {
        word: "draggy",
        complexity: "Post-College"
    },
    {
        word: "dragon",
        complexity: "Elementary"
    },
    {
        word: "dramas",
        complexity: "Elementary"
    },
    {
        word: "dreads",
        complexity: "unknown"
    },
    {
        word: "dreamt",
        complexity: "Elementary"
    },
    {
        word: "dreary",
        complexity: "Middle School"
    },
    {
        word: "dredge",
        complexity: "Middle School"
    },
    {
        word: "drench",
        complexity: "High School"
    },
    {
        word: "driers",
        complexity: "Elementary"
    },
    {
        word: "drifts",
        complexity: "Middle School"
    },
    {
        word: "drippy",
        complexity: "Post-College"
    },
    {
        word: "drivel",
        complexity: "High School"
    },
    {
        word: "driver",
        complexity: "Elementary"
    },
    {
        word: "droits",
        complexity: "Middle School"
    },
    {
        word: "dromos",
        complexity: "High School"
    },
    {
        word: "drones",
        complexity: "Middle School"
    },
    {
        word: "drools",
        complexity: "Middle School"
    },
    {
        word: "drooly",
        complexity: "College"
    },
    {
        word: "droopy",
        complexity: "College"
    },
    {
        word: "dropsy",
        complexity: "Post-College"
    },
    {
        word: "drosky",
        complexity: "Post-College"
    },
    {
        word: "drossy",
        complexity: "High School"
    },
    {
        word: "drouth",
        complexity: "unknown"
    },
    {
        word: "droved",
        complexity: "Elementary"
    },
    {
        word: "drover",
        complexity: "College"
    },
    {
        word: "droves",
        complexity: "unknown"
    },
    {
        word: "drowns",
        complexity: "Middle School"
    },
    {
        word: "drowse",
        complexity: "College"
    },
    {
        word: "drowsy",
        complexity: "High School"
    },
    {
        word: "drudge",
        complexity: "High School"
    },
    {
        word: "druggy",
        complexity: "Post-College"
    },
    {
        word: "drumly",
        complexity: "Post-College"
    },
    {
        word: "drunks",
        complexity: "Elementary"
    },
    {
        word: "drupes",
        complexity: "Post-College"
    },
    {
        word: "drying",
        complexity: "Elementary"
    },
    {
        word: "dryout",
        complexity: "High School"
    },
    {
        word: "dually",
        complexity: "unknown"
    },
    {
        word: "dubbed",
        complexity: "unknown"
    },
    {
        word: "dubbin",
        complexity: "Post-College"
    },
    {
        word: "ducked",
        complexity: "unknown"
    },
    {
        word: "ducker",
        complexity: "College"
    },
    {
        word: "duckie",
        complexity: "Post-College"
    },
    {
        word: "duffle",
        complexity: "unknown"
    },
    {
        word: "dugout",
        complexity: "High School"
    },
    {
        word: "duking",
        complexity: "Middle School"
    },
    {
        word: "dulcet",
        complexity: "Post-College"
    },
    {
        word: "dumdum",
        complexity: "Post-College"
    },
    {
        word: "dunder",
        complexity: "High School"
    },
    {
        word: "dunlin",
        complexity: "College"
    },
    {
        word: "dunned",
        complexity: "Middle School"
    },
    {
        word: "duomos",
        complexity: "Post-College"
    },
    {
        word: "dupery",
        complexity: "Post-College"
    },
    {
        word: "dupion",
        complexity: "College"
    },
    {
        word: "duplex",
        complexity: "Middle School"
    },
    {
        word: "dupped",
        complexity: "unknown"
    },
    {
        word: "durain",
        complexity: "Middle School"
    },
    {
        word: "durbar",
        complexity: "Post-College"
    },
    {
        word: "duress",
        complexity: "Middle School"
    },
    {
        word: "durian",
        complexity: "College"
    },
    {
        word: "during",
        complexity: "Elementary"
    },
    {
        word: "durion",
        complexity: "College"
    },
    {
        word: "durned",
        complexity: "High School"
    },
    {
        word: "durrie",
        complexity: "unknown"
    },
    {
        word: "dusted",
        complexity: "unknown"
    },
    {
        word: "duster",
        complexity: "High School"
    },
    {
        word: "dustup",
        complexity: "College"
    },
    {
        word: "duties",
        complexity: "unknown"
    },
    {
        word: "dwarfs",
        complexity: "Middle School"
    },
    {
        word: "dweebs",
        complexity: "Post-College"
    },
    {
        word: "dwells",
        complexity: "Middle School"
    },
    {
        word: "dwighs",
        complexity: "High School"
    },
    {
        word: "dyadic",
        complexity: "College"
    },
    {
        word: "dybbuk",
        complexity: "Post-College"
    },
    {
        word: "dyeing",
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
        complexity: "High School"
    },
    {
        word: "dynast",
        complexity: "Post-College"
    },
    {
        word: "dynode",
        complexity: "College"
    },
    {
        word: "eagled",
        complexity: "College"
    },
    {
        word: "eagles",
        complexity: "Elementary"
    },
    {
        word: "eaglet",
        complexity: "College"
    },
    {
        word: "earbob",
        complexity: "College"
    },
    {
        word: "earbud",
        complexity: "High School"
    },
    {
        word: "earful",
        complexity: "Post-College"
    },
    {
        word: "earing",
        complexity: "Middle School"
    },
    {
        word: "earlap",
        complexity: "College"
    },
    {
        word: "earned",
        complexity: "Elementary"
    },
    {
        word: "earner",
        complexity: "Elementary"
    },
    {
        word: "earthy",
        complexity: "Middle School"
    },
    {
        word: "earwax",
        complexity: "Post-College"
    },
    {
        word: "earwig",
        complexity: "College"
    },
    {
        word: "easier",
        complexity: "Elementary"
    },
    // {
    //     word: "easies",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    {
        word: "eaters",
        complexity: "Elementary"
    },
    {
        word: "ebbing",
        complexity: "High School"
    },
    // {
    //     word: "echard",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "High School"
    // },
    {
        word: "edgier",
        complexity: "unknown"
    },
    // {
    //     word: "edgily",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Middle School"
    // },
    {
        word: "edited",
        complexity: "unknown"
    },
    {
        word: "editor",
        complexity: "Elementary"
    },
    {
        word: "educes",
        complexity: "Post-College"
    },
    {
        word: "eerier",
        complexity: "Middle School"
    },
    {
        word: "eerily",
        complexity: "unknown"
    },
    {
        word: "efface",
        complexity: "Post-College"
    },
    {
        word: "effect",
        complexity: "Elementary"
    },
    {
        word: "effete",
        complexity: "Post-College"
    },
    {
        word: "effigy",
        complexity: "College"
    },
    {
        word: "effing",
        complexity: "High School"
    },
    {
        word: "efflux",
        complexity: "College"
    },
    {
        word: "effort",
        complexity: "Elementary"
    },
    {
        word: "effuse",
        complexity: "Post-College"
    },
    // {
    //     word: "egesta",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "High School"
    // },
    {
        word: "eggcup",
        complexity: "Post-College"
    },
    {
        word: "egging",
        complexity: "College"
    },
    {
        word: "egoist",
        complexity: "College"
    },
    {
        word: "eiders",
        complexity: "College"
    },
    {
        word: "eighty",
        complexity: "Middle School"
    },
    {
        word: "either",
        complexity: "Elementary"
    },
    {
        word: "ejecta",
        complexity: "High School"
    },
    {
        word: "ekuele",
        complexity: "Post-College"
    },
    {
        word: "elance",
        isCapitalized: true,
        complexity: "unknown"
    },
    // {
    //     word: "elapid",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Post-College"
    // },
    // {
    //     word: "elapse",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "High School"
    // },
    {
        word: "elated",
        complexity: "Middle School"
    },
    {
        word: "elater",
        complexity: "College"
    },
    {
        word: "elders",
        complexity: "Middle School"
    },
    {
        word: "eldest",
        complexity: "Middle School"
    },
    {
        word: "elects",
        complexity: "Elementary"
    },
    // {
    //     word: "elegit",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "High School"
    // },
    {
        word: "eleven",
        complexity: "Elementary"
    },
    // {
    //     word: "elevon",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "College"
    // },
    {
        word: "elicit",
        complexity: "Middle School"
    },
    {
        word: "elixir",
        complexity: "High School"
    },
    {
        word: "eloper",
        complexity: "College"
    },
    // {
    //     word: "eluate",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "College"
    // },
    {
        word: "embark",
        complexity: "Middle School"
    },
    {
        word: "embeds",
        complexity: "Middle School"
    },
    {
        word: "embers",
        complexity: "High School"
    },
    {
        word: "emblem",
        complexity: "Middle School"
    },
    {
        word: "embody",
        complexity: "Middle School"
    },
    {
        word: "embosk",
        complexity: "Post-College"
    },
    {
        word: "emboss",
        complexity: "High School"
    },
    {
        word: "embrue",
        complexity: "Post-College"
    },
    {
        word: "embryo",
        complexity: "Middle School"
    },
    {
        word: "emceed",
        complexity: "unknown"
    },
    {
        word: "emcees",
        complexity: "High School"
    },
    {
        word: "emerge",
        complexity: "Elementary"
    },
    {
        word: "emesis",
        complexity: "College"
    },
    {
        word: "emetic",
        complexity: "College"
    },
    {
        word: "emigre",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "emince",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "emmets",
        complexity: "Post-College"
    },
    {
        word: "empale",
        complexity: "College"
    },
    {
        word: "empire",
        complexity: "Elementary"
    },
    {
        word: "employ",
        complexity: "Middle School"
    },
    // {
    //     word: "emptor",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "High School"
    // },
    {
        word: "enable",
        complexity: "Elementary"
    },
    {
        word: "enamel",
        complexity: "Middle School"
    },
    {
        word: "enamor",
        complexity: "College"
    },
    {
        word: "encage",
        complexity: "High School"
    },
    {
        word: "encamp",
        complexity: "Post-College"
    },
    {
        word: "encase",
        complexity: "College"
    },
    {
        word: "encina",
        complexity: "College"
    },
    {
        word: "encode",
        complexity: "Middle School"
    },
    {
        word: "encore",
        complexity: "Middle School"
    },
    {
        word: "encyst",
        complexity: "College"
    },
    {
        word: "endcap",
        complexity: "High School"
    },
    {
        word: "endear",
        complexity: "College"
    },
    {
        word: "enders",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "ending",
        complexity: "Elementary"
    },
    {
        word: "endive",
        complexity: "College"
    },
    {
        word: "endpin",
        complexity: "High School"
    },
    {
        word: "endrin",
        complexity: "High School"
    },
    {
        word: "endued",
        complexity: "unknown"
    },
    {
        word: "endure",
        complexity: "Middle School"
    },
    {
        word: "enduro",
        complexity: "High School"
    },
    {
        word: "enemas",
        complexity: "Middle School"
    },
    {
        word: "energy",
        complexity: "Elementary"
    },
    {
        word: "enface",
        complexity: "College"
    },
    {
        word: "enfold",
        complexity: "Post-College"
    },
    {
        word: "engage",
        complexity: "Elementary"
    },
    {
        word: "engild",
        complexity: "College"
    },
    {
        word: "engine",
        complexity: "Elementary"
    },
    {
        word: "engird",
        complexity: "High School"
    },
    {
        word: "englut",
        complexity: "College"
    },
    {
        word: "engram",
        complexity: "College"
    },
    {
        word: "engulf",
        complexity: "High School"
    },
    {
        word: "enhalo",
        complexity: "College"
    },
    {
        word: "enigma",
        complexity: "Middle School"
    },
    {
        word: "enisle",
        complexity: "High School"
    },
    {
        word: "enjoys",
        complexity: "unknown"
    },
    {
        word: "enlist",
        complexity: "Middle School"
    },
    {
        word: "enmity",
        complexity: "High School"
    },
    {
        word: "ennuis",
        complexity: "High School"
    },
    {
        word: "enosis",
        complexity: "College"
    },
    {
        word: "enough",
        complexity: "Elementary"
    },
    {
        word: "enrage",
        complexity: "College"
    },
    {
        word: "enrich",
        complexity: "Middle School"
    },
    {
        word: "enrobe",
        complexity: "College"
    },
    {
        word: "ensign",
        complexity: "High School"
    },
    {
        word: "ensure",
        complexity: "Elementary"
    },
    {
        word: "entail",
        complexity: "Middle School"
    },
    {
        word: "entire",
        complexity: "Elementary"
    },
    {
        word: "entity",
        complexity: "Elementary"
    },
    {
        word: "entoil",
        complexity: "High School"
    },
    {
        word: "entomb",
        complexity: "College"
    },
    {
        word: "entrap",
        complexity: "College"
    },
    {
        word: "entree",
        complexity: "unknown"
    },
    {
        word: "envied",
        complexity: "unknown"
    },
    {
        word: "envois",
        complexity: "Middle School"
    },
    {
        word: "envoys",
        complexity: "Middle School"
    },
    {
        word: "enwomb",
        complexity: "Middle School"
    },
    {
        word: "enwrap",
        complexity: "Post-College"
    },
    {
        word: "enzyme",
        complexity: "Middle School"
    },
    {
        word: "eolith",
        complexity: "College"
    },
    {
        word: "eonism",
        complexity: "High School"
    },
    {
        word: "ephebe",
        complexity: "College"
    },
    {
        word: "ephods",
        complexity: "College"
    },
    {
        word: "epical",
        complexity: "unknown"
    },
    {
        word: "epimer",
        complexity: "College"
    },
    {
        word: "epochs",
        complexity: "Middle School"
    },
    {
        word: "eponym",
        complexity: "Post-College"
    },
    {
        word: "epopee",
        complexity: "College"
    },
    {
        word: "equate",
        complexity: "Middle School"
    },
    {
        word: "equine",
        complexity: "Middle School"
    },
    {
        word: "equity",
        complexity: "Elementary"
    },
    {
        word: "erects",
        complexity: "Middle School"
    },
    {
        word: "erotic",
        complexity: "Elementary"
    },
    {
        word: "errand",
        complexity: "Middle School"
    },
    {
        word: "errant",
        complexity: "Middle School"
    },
    {
        word: "errata",
        complexity: "High School"
    },
    {
        word: "erring",
        complexity: "Middle School"
    },
    {
        word: "escape",
        complexity: "Elementary"
    },
    {
        word: "escarp",
        complexity: "College"
    },
    {
        word: "eschew",
        complexity: "High School"
    },
    {
        word: "escrow",
        complexity: "Middle School"
    },
    {
        word: "esnecy",
        complexity: "Post-College"
    },
    {
        word: "esprit",
        complexity: "Middle School"
    },
    {
        word: "essays",
        complexity: "Elementary"
    },
    {
        word: "esteem",
        complexity: "Elementary"
    },
    {
        word: "esters",
        complexity: "unknown"
    },
    {
        word: "estrin",
        complexity: "High School"
    },
    {
        word: "estrum",
        complexity: "High School"
    },
    {
        word: "estrus",
        complexity: "High School"
    },
    {
        word: "etalon",
        complexity: "College"
    },
    {
        word: "etched",
        complexity: "unknown"
    },
    {
        word: "etcher",
        complexity: "unknown"
    },
    {
        word: "etchis",
        complexity: "College"
    },
    {
        word: "ethane",
        complexity: "High School"
    },
    {
        word: "ethics",
        complexity: "Elementary"
    },
    {
        word: "ethion",
        complexity: "High School"
    },
    {
        word: "ethnic",
        complexity: "Elementary"
    },
    {
        word: "ethnos",
        complexity: "College"
    },
    {
        word: "ethoxy",
        complexity: "Post-College"
    },
    {
        word: "ethrog",
        complexity: "College"
    },
    {
        word: "ethyne",
        complexity: "Post-College"
    },
    {
        word: "etoile",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "etudes",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "etymol",
        complexity: "unknown"
    },
    {
        word: "etymon",
        complexity: "Post-College"
    },
    {
        word: "euchre",
        complexity: "High School"
    },
    {
        word: "eulogy",
        complexity: "College"
    },
    {
        word: "eureka",
        complexity: "College"
    },
    {
        word: "eutaxy",
        complexity: "Post-College"
    },
    {
        word: "evaded",
        complexity: "Middle School"
    },
    {
        word: "evades",
        complexity: "Middle School"
    },
    {
        word: "evener",
        complexity: "Elementary"
    },
    {
        word: "evince",
        complexity: "High School"
    },
    {
        word: "evited",
        complexity: "High School"
    },
    {
        word: "evolve",
        complexity: "Middle School"
    },
    {
        word: "evzone",
        complexity: "Post-College"
    },
    {
        word: "exacta",
        complexity: "Post-College"
    },
    {
        word: "exacts",
        complexity: "Elementary"
    },
    {
        word: "examen",
        complexity: "High School"
    },
    {
        word: "exarch",
        complexity: "Post-College"
    },
    {
        word: "exceed",
        complexity: "Elementary"
    },
    {
        word: "except",
        complexity: "Elementary"
    },
    {
        word: "excess",
        complexity: "Elementary"
    },
    {
        word: "excide",
        complexity: "Post-College"
    },
    {
        word: "excise",
        complexity: "Middle School"
    },
    {
        word: "excite",
        complexity: "Middle School"
    },
    {
        word: "excuse",
        complexity: "Middle School"
    },
    {
        word: "excuss",
        complexity: "Post-College"
    },
    {
        word: "exedra",
        complexity: "Post-College"
    },
    {
        word: "exempt",
        complexity: "Middle School"
    },
    {
        word: "exhale",
        complexity: "College"
    },
    {
        word: "exhort",
        complexity: "College"
    },
    {
        word: "exiled",
        complexity: "Middle School"
    },
    {
        word: "exiles",
        complexity: "Middle School"
    },
    {
        word: "exilic",
        complexity: "Post-College"
    },
    {
        word: "exists",
        complexity: "unknown"
    },
    {
        word: "exodoi",
        complexity: "Post-College"
    },
    {
        word: "exodos",
        complexity: "Post-College"
    },
    {
        word: "expand",
        complexity: "Elementary"
    },
    {
        word: "expect",
        complexity: "Elementary"
    },
    {
        word: "expert",
        complexity: "Elementary"
    },
    {
        word: "expire",
        complexity: "Middle School"
    },
    {
        word: "expose",
        complexity: "Middle School"
    },
    {
        word: "exsert",
        complexity: "Post-College"
    },
    {
        word: "extant",
        complexity: "Middle School"
    },
    {
        word: "extent",
        complexity: "Elementary"
    },
    {
        word: "extoll",
        complexity: "unknown"
    },
    {
        word: "extort",
        complexity: "College"
    },
    {
        word: "exuded",
        complexity: "Post-College"
    },
    {
        word: "eyeing",
        complexity: "Elementary"
    },
    {
        word: "eyelet",
        complexity: "High School"
    },
    {
        word: "eyries",
        complexity: "Post-College"
    },
    {
        word: "fabada",
        complexity: "Post-College"
    },
    {
        word: "fabric",
        complexity: "Elementary"
    },
    {
        word: "facade",
        complexity: "Middle School"
    },
    {
        word: "facets",
        complexity: "unknown"
    },
    {
        word: "faceup",
        complexity: "High School"
    },
    {
        word: "facies",
        complexity: "High School"
    },
    {
        word: "facile",
        complexity: "High School"
    },
    {
        word: "facing",
        complexity: "Elementary"
    },
    {
        word: "factor",
        complexity: "Elementary"
    },
    {
        word: "factum",
        complexity: "Post-College"
    },
    {
        word: "faeces",
        complexity: "Middle School"
    },
    {
        word: "faerie",
        complexity: "High School"
    },
    {
        word: "fairly",
        complexity: "Elementary"
    },
    {
        word: "fajita",
        complexity: "Post-College"
    },
    {
        word: "fallow",
        complexity: "High School"
    },
    {
        word: "falter",
        complexity: "Middle School"
    },
    {
        word: "family",
        complexity: "Elementary"
    },
    {
        word: "famine",
        complexity: "Middle School"
    },
    {
        word: "famish",
        complexity: "Post-College"
    },
    {
        word: "famous",
        complexity: "Elementary"
    },
    {
        word: "famuli",
        complexity: "Post-College"
    },
    {
        word: "fanega",
        complexity: "College"
    },
    {
        word: "fanfic",
        complexity: "High School"
    },
    {
        word: "fantom",
        complexity: "unknown"
    },
    {
        word: "faquir",
        complexity: "Post-College"
    },
    {
        word: "farmer",
        complexity: "Middle School"
    },
    {
        word: "fascia",
        complexity: "High School"
    },
    {
        word: "father",
        complexity: "Elementary"
    },
    {
        word: "faucal",
        complexity: "Post-College"
    },
    {
        word: "fauces",
        complexity: "Post-College"
    },
    {
        word: "faucet",
        complexity: "Middle School"
    },
    {
        word: "faulty",
        complexity: "Middle School"
    },
    {
        word: "favela",
        complexity: "College"
    },
    {
        word: "favism",
        complexity: "Post-College"
    },
    {
        word: "favour",
        complexity: "Middle School"
    },
    {
        word: "fawned",
        complexity: "unknown"
    },
    {
        word: "feater",
        complexity: "Elementary"
    },
    {
        word: "fecund",
        complexity: "Post-College"
    },
    {
        word: "feddan",
        complexity: "High School"
    },
    {
        word: "fedora",
        complexity: "Middle School"
    },
    {
        word: "feeble",
        complexity: "Middle School"
    },
    {
        word: "feebly",
        complexity: "unknown"
    },
    {
        word: "feeder",
        complexity: "Middle School"
    },
    {
        word: "feeler",
        complexity: "College"
    },
    {
        word: "feened",
        complexity: "Middle School"
    },
    {
        word: "feijoa",
        complexity: "Post-College"
    },
    {
        word: "feints",
        complexity: "unknown"
    },
    {
        word: "feirie",
        complexity: "College"
    },
    {
        word: "feisty",
        complexity: "High School"
    },
    {
        word: "felony",
        complexity: "Middle School"
    },
    {
        word: "female",
        complexity: "Elementary"
    },
    {
        word: "fender",
        complexity: "Middle School"
    },
    {
        word: "ferine",
        complexity: "College"
    },
    {
        word: "fervid",
        complexity: "Post-College"
    },
    {
        word: "fervor",
        complexity: "High School"
    },
    {
        word: "festal",
        complexity: "College"
    },
    {
        word: "fetish",
        complexity: "College"
    },
    {
        word: "fetter",
        complexity: "College"
    },
    {
        word: "feudal",
        complexity: "Middle School"
    },
    {
        word: "feuded",
        complexity: "Middle School"
    },
    {
        word: "fewest",
        complexity: "Middle School"
    },
    {
        word: "fezzes",
        complexity: "Post-College"
    },
    {
        word: "fiacre",
        complexity: "College"
    },
    {
        word: "fiance",
        complexity: "High School"
    },
    {
        word: "fiasco",
        complexity: "Middle School"
    },
    {
        word: "fibber",
        complexity: "High School"
    },
    // {
    //     word: "fibrin",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "High School"
    // },
    {
        word: "fickle",
        complexity: "High School"
    },
    {
        word: "fidget",
        complexity: "Post-College"
    },
    {
        word: "fields",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "figger",
        complexity: "High School"
    },
    {
        word: "fights",
        complexity: "Elementary"
    },
    {
        word: "figure",
        complexity: "Elementary"
    },
    {
        word: "filate",
        complexity: "High School"
    },
    {
        word: "filers",
        complexity: "Elementary"
    },
    {
        word: "filial",
        complexity: "High School"
    },
    {
        word: "filled",
        complexity: "unknown"
    },
    {
        word: "filler",
        complexity: "Middle School"
    },
    {
        word: "fillet",
        complexity: "Middle School"
    },
    {
        word: "filose",
        complexity: "High School"
    },
    {
        word: "filter",
        complexity: "Elementary"
    },
    {
        word: "finale",
        complexity: "Middle School"
    },
    {
        word: "finely",
        complexity: "Middle School"
    },
    {
        word: "finger",
        complexity: "Elementary"
    },
    {
        word: "finish",
        complexity: "Elementary"
    },
    {
        word: "finite",
        complexity: "Elementary"
    },
    {
        word: "finito",
        complexity: "High School"
    },
    {
        word: "firmer",
        complexity: "unknown"
    },
    {
        word: "firsts",
        complexity: "unknown"
    },
    {
        word: "fiscal",
        complexity: "Elementary"
    },
    {
        word: "fished",
        complexity: "Elementary"
    },
    {
        word: "fishes",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "fistic",
        complexity: "Middle School"
    },
    {
        word: "fitted",
        complexity: "Middle School"
    },
    // {
    //     word: "fitten",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Middle School"
    // },
    {
        word: "fixing",
        complexity: "Middle School"
    },
    {
        word: "flabby",
        complexity: "College"
    },
    {
        word: "flacks",
        complexity: "High School"
    },
    {
        word: "flange",
        complexity: "Middle School"
    },
    {
        word: "flashy",
        complexity: "Middle School"
    },
    {
        word: "flaunt",
        complexity: "High School"
    },
    {
        word: "flauta",
        complexity: "College"
    },
    {
        word: "flavin",
        complexity: "High School"
    },
    {
        word: "flavor",
        complexity: "Middle School"
    },
    {
        word: "flawed",
        complexity: "Middle School"
    },
    {
        word: "flaxen",
        complexity: "High School"
    },
    // {
    //     word: "flayed",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    // {
    //     word: "flayer",
    //     isCapitalized: true,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    // {
    //     word: "fleche",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    {
        word: "fledge",
        complexity: "Post-College"
    },
    {
        word: "fledgy",
        complexity: "Post-College"
    },
    {
        word: "fleece",
        complexity: "Middle School"
    },
    {
        word: "fleecy",
        complexity: "Post-College"
    },
    {
        word: "fleets",
        complexity: "Elementary"
    },
    {
        word: "flench",
        complexity: "College"
    },
    {
        word: "flense",
        complexity: "College"
    },
    {
        word: "fleshy",
        complexity: "Middle School"
    },
    {
        word: "fletch",
        complexity: "High School"
    },
    {
        word: "fleury",
        complexity: "High School"
    },
    {
        word: "flexed",
        complexity: "Middle School"
    },
    {
        word: "flexor",
        complexity: "College"
    },
    {
        word: "flimsy",
        complexity: "High School"
    },
    {
        word: "flinch",
        complexity: "High School"
    },
    {
        word: "flinty",
        complexity: "Post-College"
    },
    {
        word: "flirts",
        complexity: "Middle School"
    },
    {
        word: "flirty",
        complexity: "College"
    },
    // {
    //     word: "flitch",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Post-College"
    // },
    {
        word: "floats",
        complexity: "unknown"
    },
    {
        word: "floaty",
        complexity: "Post-College"
    },
    {
        word: "flocky",
        complexity: "College"
    },
    // {
    //     word: "flongs",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    {
        word: "floozy",
        complexity: "Post-College"
    },
    {
        word: "flower",
        complexity: "Elementary"
    },
    {
        word: "fluent",
        complexity: "Middle School"
    },
    {
        word: "fluids",
        complexity: "Elementary"
    },
    {
        word: "flukey",
        complexity: "Post-College"
    },
    {
        word: "flumed",
        complexity: "College"
    },
    {
        word: "flunky",
        complexity: "Post-College"
    },
    {
        word: "flurry",
        complexity: "Middle School"
    },
    {
        word: "flutey",
        complexity: "College"
    },
    {
        word: "flyest",
        complexity: "Elementary"
    },
    {
        word: "foaled",
        complexity: "Middle School"
    },
    {
        word: "fobbed",
        complexity: "Middle School"
    },
    {
        word: "fodder",
        complexity: "Middle School"
    },
    {
        word: "foetal",
        complexity: "unknown"
    },
    {
        word: "foetid",
        complexity: "unknown"
    },
    {
        word: "foetor",
        complexity: "unknown"
    },
    {
        word: "foetus",
        complexity: "High School"
    },
    {
        word: "fogbow",
        complexity: "Post-College"
    },
    {
        word: "fogged",
        complexity: "unknown"
    },
    {
        word: "fogger",
        complexity: "College"
    },
    {
        word: "fogram",
        complexity: "College"
    },
    {
        word: "fogrum",
        complexity: "College"
    },
    {
        word: "foible",
        complexity: "Post-College"
    },
    {
        word: "foiled",
        complexity: "Middle School"
    },
    {
        word: "foison",
        complexity: "Middle School"
    },
    {
        word: "foists",
        complexity: "College"
    },
    {
        word: "folder",
        complexity: "Elementary"
    },
    {
        word: "follow",
        complexity: "Elementary"
    },
    {
        word: "foment",
        complexity: "High School"
    },
    {
        word: "fomite",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "fondly",
        complexity: "Middle School"
    },
    {
        word: "foodie",
        complexity: "High School"
    },
    {
        word: "fooled",
        complexity: "Middle School"
    },
    {
        word: "footed",
        complexity: "Middle School"
    },
    {
        word: "footer",
        complexity: "Middle School"
    },
    {
        word: "footie",
        complexity: "High School"
    },
    {
        word: "footsy",
        complexity: "High School"
    },
    {
        word: "forage",
        complexity: "Middle School"
    },
    {
        word: "forays",
        complexity: "Middle School"
    },
    {
        word: "forbid",
        complexity: "Middle School"
    },
    {
        word: "forced",
        complexity: "Elementary"
    },
    {
        word: "forces",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "foredo",
        complexity: "High School"
    },
    {
        word: "forego",
        complexity: "High School"
    },
    {
        word: "forest",
        complexity: "Elementary"
    },
    {
        word: "forged",
        complexity: "unknown"
    },
    {
        word: "format",
        complexity: "Elementary"
    },
    {
        word: "former",
        complexity: "Elementary"
    },
    {
        word: "fossae",
        complexity: "unknown"
    },
    {
        word: "fossil",
        complexity: "Middle School"
    },
    {
        word: "foster",
        complexity: "Elementary"
    },
    {
        word: "foudre",
        complexity: "High School"
    },
    {
        word: "fouled",
        complexity: "unknown"
    },
    {
        word: "foully",
        complexity: "Middle School"
    },
    {
        word: "founts",
        complexity: "unknown"
    },
    {
        word: "fourth",
        complexity: "Elementary"
    },
    {
        word: "foveae",
        complexity: "Post-College"
    },
    {
        word: "fowled",
        complexity: "Middle School"
    },
    {
        word: "fowler",
        complexity: "Post-College"
    },
    {
        word: "foxing",
        complexity: "Middle School"
    },
    {
        word: "foyers",
        complexity: "Middle School"
    },
    {
        word: "fozier",
        complexity: "Post-College"
    },
    {
        word: "fracas",
        complexity: "High School"
    },
    {
        word: "frails",
        complexity: "Middle School"
    },
    {
        word: "fraise",
        complexity: "College"
    },
    {
        word: "framer",
        complexity: "unknown"
    },
    {
        word: "frappe",
        complexity: "Post-College"
    },
    {
        word: "fratch",
        complexity: "College"
    },
    {
        word: "frater",
        complexity: "High School"
    },
    {
        word: "frazil",
        complexity: "Post-College"
    },
    {
        word: "freaky",
        complexity: "Middle School"
    },
    {
        word: "freely",
        complexity: "Elementary"
    },
    {
        word: "freest",
        complexity: "Elementary"
    },
    {
        word: "freeze",
        complexity: "Middle School"
    },
    {
        word: "french",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "frenzy",
        complexity: "Middle School"
    },
    {
        word: "freres",
        complexity: "unknown"
    },
    {
        word: "fresco",
        complexity: "High School"
    },
    {
        word: "friary",
        complexity: "Post-College"
    },
    {
        word: "fridge",
        complexity: "Middle School"
    },
    {
        word: "friend",
        complexity: "Elementary"
    },
    {
        word: "friers",
        complexity: "College"
    },
    {
        word: "frieze",
        complexity: "College"
    },
    {
        word: "fright",
        complexity: "Middle School"
    },
    {
        word: "frigid",
        complexity: "High School"
    },
    {
        word: "frijol",
        complexity: "Post-College"
    },
    {
        word: "frilly",
        complexity: "High School"
    },
    {
        word: "fringe",
        complexity: "Middle School"
    },
    {
        word: "frites",
        complexity: "Elementary"
    },
    {
        word: "friths",
        complexity: "College"
    },
    {
        word: "frivol",
        complexity: "Middle School"
    },
    {
        word: "frolic",
        complexity: "High School"
    },
    {
        word: "fronts",
        complexity: "Elementary"
    },
    {
        word: "frothy",
        complexity: "College"
    },
    {
        word: "frowns",
        complexity: "Middle School"
    },
    {
        word: "frowzy",
        complexity: "Post-College"
    },
    {
        word: "frugal",
        complexity: "High School"
    },
    {
        word: "fruits",
        complexity: "Elementary"
    },
    {
        word: "frumpy",
        complexity: "Post-College"
    },
    {
        word: "fucoid",
        complexity: "Post-College"
    },
    {
        word: "fuddle",
        complexity: "Post-College"
    },
    {
        word: "fueled",
        complexity: "Elementary"
    },
    // {
    //     word: "fueler",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    // {
    //     word: "fugato",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "College"
    // },
    {
        word: "fulfil",
        complexity: "Middle School"
    },
    // {
    //     word: "fulham",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Middle School"
    // },
    // {
    //     word: "fullam",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Middle School"
    // },
    // {
    //     word: "fulled",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    {
        word: "fuller",
        complexity: "Middle School"
    },
    {
        word: "fumble",
        complexity: "Middle School"
    },
    {
        word: "fuming",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "funest",
        complexity: "High School"
    },
    {
        word: "fungus",
        complexity: "Middle School"
    },
    {
        word: "funked",
        complexity: "Middle School"
    },
    {
        word: "funned",
        complexity: "Elementary"
    },
    {
        word: "funnel",
        complexity: "Middle School"
    },
    {
        word: "funner",
        complexity: "unknown"
    },
    {
        word: "furled",
        complexity: "unknown"
    },
    {
        word: "furrow",
        complexity: "High School"
    },
    {
        word: "fusion",
        complexity: "Elementary"
    },
    {
        word: "fustic",
        complexity: "High School"
    },
    {
        word: "futile",
        complexity: "Middle School"
    },
    {
        word: "future",
        complexity: "Elementary"
    },
    {
        word: "fuzzed",
        complexity: "Post-College"
    },
    {
        word: "gabies",
        complexity: "unknown"
    },
    {
        word: "gabion",
        complexity: "College"
    },
    {
        word: "gadfly",
        complexity: "College"
    },
    {
        word: "gadget",
        complexity: "Middle School"
    },
    {
        word: "gaffer",
        complexity: "Post-College"
    },
    {
        word: "gaijin",
        complexity: "Post-College"
    },
    {
        word: "gainly",
        complexity: "Post-College"
    },
    {
        word: "galago",
        complexity: "College"
    },
    {
        word: "galena",
        complexity: "College"
    },
    {
        word: "galets",
        complexity: "High School"
    },
    {
        word: "galiot",
        complexity: "College"
    },
    {
        word: "galled",
        complexity: "unknown"
    },
    {
        word: "gallet",
        complexity: "High School"
    },
    {
        word: "galley",
        complexity: "Middle School"
    },
    {
        word: "gallic",
        complexity: "College"
    },
    {
        word: "gallop",
        complexity: "Middle School"
    },
    {
        word: "galoot",
        complexity: "College"
    },
    {
        word: "galosh",
        complexity: "College"
    },
    {
        word: "galyak",
        complexity: "Post-College"
    },
    {
        word: "gambit",
        complexity: "High School"
    },
    {
        word: "gamble",
        complexity: "Middle School"
    },
    {
        word: "gambol",
        complexity: "Post-College"
    },
    {
        word: "gamely",
        complexity: "Post-College"
    },
    {
        word: "gamest",
        complexity: "unknown"
    },
    {
        word: "gamete",
        complexity: "High School"
    },
    {
        word: "gamify",
        complexity: "Post-College"
    },
    {
        word: "gamine",
        complexity: "College"
    },
    {
        word: "gaming",
        complexity: "Elementary"
    },
    {
        word: "gander",
        complexity: "High School"
    },
    {
        word: "garble",
        complexity: "College"
    },
    {
        word: "garcon",
        complexity: "unknown"
    },
    {
        word: "garden",
        complexity: "Elementary"
    },
    {
        word: "garner",
        complexity: "Middle School"
    },
    {
        word: "garred",
        complexity: "Middle School"
    },
    {
        word: "garvey",
        complexity: "High School"
    },
    {
        word: "gascon",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "gasify",
        complexity: "Post-College"
    },
    {
        word: "gasket",
        complexity: "Middle School"
    },
    {
        word: "gaskin",
        complexity: "Post-College"
    },
    {
        word: "gaslit",
        complexity: "High School"
    },
    {
        word: "gasman",
        complexity: "College"
    },
    {
        word: "gasser",
        complexity: "High School"
    },
    {
        word: "gasted",
        complexity: "Middle School"
    },
    {
        word: "gaster",
        complexity: "High School"
    },
    {
        word: "gather",
        complexity: "Elementary"
    },
    {
        word: "gating",
        complexity: "High School"
    },
    {
        word: "gauche",
        complexity: "High School"
    },
    {
        word: "gauged",
        complexity: "unknown"
    },
    {
        word: "gauger",
        complexity: "College"
    },
    {
        word: "gauped",
        complexity: "Post-College"
    },
    {
        word: "gavage",
        complexity: "College"
    },
    {
        word: "gavial",
        complexity: "unknown"
    },
    {
        word: "gavots",
        complexity: "Post-College"
    },
    {
        word: "gawked",
        complexity: "unknown"
    },
    {
        word: "gawped",
        complexity: "Post-College"
    },
    {
        word: "gaydar",
        complexity: "College"
    },
    {
        word: "gayety",
        complexity: "Post-College"
    },
    {
        word: "gazabo",
        complexity: "Post-College"
    },
    {
        word: "gazebo",
        complexity: "College"
    },
    {
        word: "gazers",
        complexity: "unknown"
    },
    {
        word: "gazing",
        complexity: "unknown"
    },
    {
        word: "gazump",
        complexity: "Post-College"
    },
    {
        word: "geared",
        complexity: "unknown"
    },
    {
        word: "geeing",
        complexity: "Middle School"
    },
    {
        word: "geeked",
        complexity: "Middle School"
    },
    {
        word: "geezer",
        complexity: "College"
    },
    {
        word: "geisha",
        complexity: "Middle School"
    },
    {
        word: "gender",
        complexity: "Elementary"
    },
    {
        word: "genera",
        complexity: "Elementary"
    },
    {
        word: "genial",
        complexity: "Middle School"
    },
    {
        word: "genius",
        complexity: "Elementary"
    },
    {
        word: "gentle",
        complexity: "Elementary"
    },
    {
        word: "gently",
        complexity: "unknown"
    },
    {
        word: "gentry",
        complexity: "High School"
    },
    {
        word: "genual",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "gerbil",
        complexity: "High School"
    },
    {
        word: "gerund",
        complexity: "College"
    },
    {
        word: "gestic",
        complexity: "Middle School"
    },
    {
        word: "geyser",
        complexity: "High School"
    },
    {
        word: "gharri",
        complexity: "Post-College"
    },
    {
        word: "gharry",
        complexity: "Post-College"
    },
    {
        word: "ghetto",
        complexity: "Middle School"
    },
    {
        word: "ghibli",
        complexity: "High School"
    },
    {
        word: "ghirsh",
        complexity: "College"
    },
    {
        word: "ghosts",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "ghouls",
        complexity: "High School"
    },
    {
        word: "giaour",
        complexity: "Middle School"
    },
    {
        word: "gibbed",
        complexity: "Post-College"
    },
    {
        word: "gibber",
        complexity: "Post-College"
    },
    {
        word: "gibbet",
        complexity: "Post-College"
    },
    {
        word: "gibbon",
        complexity: "Post-College"
    },
    {
        word: "gigged",
        complexity: "Middle School"
    },
    {
        word: "giggle",
        complexity: "Middle School"
    },
    {
        word: "giggly",
        complexity: "unknown"
    },
    {
        word: "giglet",
        complexity: "College"
    },
    {
        word: "giglot",
        complexity: "College"
    },
    {
        word: "gigolo",
        complexity: "Post-College"
    },
    {
        word: "gilded",
        complexity: "College"
    },
    {
        word: "gilgai",
        complexity: "College"
    },
    {
        word: "gilgie",
        complexity: "College"
    },
    {
        word: "gilgul",
        complexity: "Post-College"
    },
    {
        word: "gilguy",
        complexity: "Post-College"
    },
    {
        word: "gilled",
        complexity: "Middle School"
    },
    {
        word: "gillie",
        complexity: "College"
    },
    {
        word: "gimbal",
        complexity: "unknown"
    },
    {
        word: "gimlet",
        complexity: "Post-College"
    },
    {
        word: "gimmal",
        complexity: "High School"
    },
    {
        word: "gimmes",
        complexity: "High School"
    },
    {
        word: "gimmie",
        complexity: "unknown"
    },
    {
        word: "gimped",
        complexity: "unknown"
    },
    {
        word: "gipped",
        complexity: "unknown"
    },
    {
        word: "gipper",
        complexity: "unknown"
    },
    {
        word: "girlie",
        complexity: "College"
    },
    {
        word: "gisant",
        complexity: "High School"
    },
    {
        word: "giving",
        complexity: "unknown"
    },
    {
        word: "glacis",
        complexity: "High School"
    },
    {
        word: "gladly",
        complexity: "unknown"
    },
    {
        word: "glaire",
        complexity: "Middle School"
    },
    {
        word: "glance",
        complexity: "Elementary"
    },
    {
        word: "glazed",
        complexity: "Middle School"
    },
    {
        word: "glibly",
        complexity: "unknown"
    },
    {
        word: "glided",
        complexity: "unknown"
    },
    {
        word: "glints",
        complexity: "High School"
    },
    {
        word: "glitch",
        complexity: "Middle School"
    },
    {
        word: "global",
        complexity: "Elementary"
    },
    {
        word: "glocal",
        complexity: "College"
    },
    {
        word: "gloomy",
        complexity: "Middle School"
    },
    {
        word: "gloppy",
        complexity: "Post-College"
    },
    {
        word: "gloria",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "glossy",
        complexity: "Middle School"
    },
    {
        word: "glover",
        complexity: "Middle School"
    },
    {
        word: "glower",
        complexity: "Post-College"
    },
    {
        word: "gneiss",
        complexity: "High School"
    },
    {
        word: "gnomes",
        complexity: "Elementary"
    },
    {
        word: "goatee",
        complexity: "High School"
    },
    {
        word: "godded",
        complexity: "Elementary"
    },
    {
        word: "golden",
        complexity: "Elementary"
    },
    {
        word: "golfer",
        complexity: "unknown"
    },
    {
        word: "gommie",
        complexity: "Post-College"
    },
    {
        word: "gonged",
        complexity: "Middle School"
    },
    {
        word: "gonion",
        complexity: "College"
    },
    {
        word: "goober",
        complexity: "College"
    },
    {
        word: "goodby",
        complexity: "Middle School"
    },
    {
        word: "goodie",
        complexity: "High School"
    },
    {
        word: "goofed",
        complexity: "unknown"
    },
    {
        word: "goofus",
        complexity: "College"
    },
    {
        word: "googly",
        complexity: "College"
    },
    {
        word: "googol",
        complexity: "High School"
    },
    {
        word: "goonda",
        complexity: "High School"
    },
    {
        word: "gooney",
        complexity: "College"
    },
    {
        word: "goosed",
        complexity: "unknown"
    },
    {
        word: "gorged",
        complexity: "Middle School"
    },
    {
        word: "gorgon",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "gormed",
        complexity: "Middle School"
    },
    {
        word: "gospel",
        complexity: "Middle School"
    },
    {
        word: "gossip",
        complexity: "Middle School"
    },
    {
        word: "gouged",
        complexity: "unknown"
    },
    {
        word: "goujon",
        complexity: "Post-College"
    },
    {
        word: "govern",
        complexity: "Middle School"
    },
    {
        word: "graded",
        complexity: "Elementary"
    },
    {
        word: "grafts",
        complexity: "Middle School"
    },
    {
        word: "graham",
        complexity: "Middle School"
    },
    {
        word: "granny",
        complexity: "Middle School"
    },
    {
        word: "grants",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "grappa",
        complexity: "Post-College"
    },
    {
        word: "grassy",
        complexity: "Middle School"
    },
    {
        word: "gratin",
        complexity: "High School"
    },
    {
        word: "gravel",
        complexity: "Middle School"
    },
    {
        word: "graven",
        complexity: "High School"
    },
    {
        word: "graver",
        complexity: "Elementary"
    },
    {
        word: "graves",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "gravid",
        complexity: "Post-College"
    },
    {
        word: "grayed",
        complexity: "Elementary"
    },
    {
        word: "grayer",
        complexity: "unknown"
    },
    {
        word: "grayly",
        complexity: "Elementary"
    },
    {
        word: "grazer",
        complexity: "unknown"
    },
    {
        word: "greasy",
        complexity: "Middle School"
    },
    {
        word: "greats",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "greave",
        complexity: "College"
    },
    {
        word: "greeds",
        complexity: "Middle School"
    },
    {
        word: "greedy",
        complexity: "Middle School"
    },
    {
        word: "gremmy",
        complexity: "Post-College"
    },
    {
        word: "grided",
        complexity: "Middle School"
    },
    {
        word: "griefs",
        complexity: "Middle School"
    },
    {
        word: "grieve",
        complexity: "Middle School"
    },
    {
        word: "grimly",
        complexity: "Middle School"
    },
    {
        word: "griper",
        complexity: "High School"
    },
    {
        word: "gripes",
        complexity: "High School"
    },
    {
        word: "gritty",
        complexity: "Middle School"
    },
    {
        word: "groats",
        complexity: "College"
    },
    {
        word: "groggy",
        complexity: "College"
    },
    {
        word: "groove",
        complexity: "Middle School"
    },
    {
        word: "groszy",
        complexity: "Post-College"
    },
    {
        word: "grotto",
        complexity: "High School"
    },
    {
        word: "ground",
        complexity: "Elementary"
    },
    {
        word: "grouty",
        complexity: "High School"
    },
    {
        word: "groved",
        complexity: "Middle School"
    },
    {
        word: "growan",
        complexity: "Middle School"
    },
    {
        word: "growed",
        complexity: "Elementary"
    },
    {
        word: "grower",
        complexity: "Middle School"
    },
    {
        word: "growly",
        complexity: "College"
    },
    {
        word: "growth",
        complexity: "Elementary"
    },
    {
        word: "groyne",
        complexity: "unknown"
    },
    {
        word: "grubby",
        complexity: "College"
    },
    {
        word: "grudge",
        complexity: "High School"
    },
    {
        word: "gruffy",
        complexity: "Post-College"
    },
    {
        word: "grugru",
        complexity: "Post-College"
    },
    {
        word: "gruing",
        complexity: "High School"
    },
    {
        word: "grumpy",
        complexity: "High School"
    },
    {
        word: "grunge",
        complexity: "Middle School"
    },
    {
        word: "guemal",
        complexity: "College"
    },
    {
        word: "guenon",
        complexity: "College"
    },
    {
        word: "guffaw",
        complexity: "Post-College"
    },
    {
        word: "guggle",
        complexity: "Post-College"
    },
    {
        word: "guglet",
        complexity: "College"
    },
    {
        word: "guided",
        complexity: "Middle School"
    },
    {
        word: "guider",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "guides",
        complexity: "Elementary"
    },
    {
        word: "guidon",
        complexity: "College"
    },
    {
        word: "guiges",
        complexity: "Middle School"
    },
    {
        word: "guilds",
        complexity: "unknown"
    },
    {
        word: "guiles",
        complexity: "Middle School"
    },
    {
        word: "guilts",
        complexity: "Middle School"
    },
    {
        word: "guilty",
        complexity: "Elementary"
    },
    {
        word: "guimpe",
        complexity: "Post-College"
    },
    {
        word: "guitar",
        complexity: "Elementary"
    },
    {
        word: "gulags",
        complexity: "High School"
    },
    {
        word: "gulfed",
        complexity: "Middle School"
    },
    {
        word: "gulled",
        complexity: "unknown"
    },
    {
        word: "gullet",
        complexity: "College"
    },
    {
        word: "gulley",
        complexity: "High School"
    },
    {
        word: "gulped",
        complexity: "High School"
    },
    {
        word: "gunman",
        complexity: "High School"
    },
    {
        word: "gurgle",
        complexity: "Post-College"
    },
    {
        word: "gusted",
        complexity: "Middle School"
    },
    {
        word: "guttae",
        complexity: "College"
    },
    {
        word: "guttle",
        complexity: "College"
    },
    {
        word: "guying",
        complexity: "Elementary"
    },
    {
        word: "guyver",
        complexity: "Post-College"
    },
    {
        word: "guzzle",
        complexity: "Post-College"
    },
    {
        word: "gybing",
        isCapitalized: true,
        complexity: "Post-College"
    },
    {
        word: "gyrate",
        complexity: "Post-College"
    },
    {
        word: "gyrene",
        complexity: "High School"
    },
    {
        word: "gyrons",
        complexity: "Post-College"
    },
    {
        word: "gyrose",
        complexity: "Post-College"
    },
    {
        word: "habile",
        complexity: "High School"
    },
    {
        word: "hadron",
        complexity: "Middle School"
    },
    {
        word: "hagbut",
        complexity: "Post-College"
    },
    {
        word: "hagdon",
        complexity: "College"
    },
    {
        word: "haggle",
        complexity: "High School"
    },
    {
        word: "halest",
        complexity: "High School"
    },
    {
        word: "halloo",
        complexity: "College"
    },
    {
        word: "hallow",
        complexity: "College"
    },
    {
        word: "halter",
        complexity: "Middle School"
    },
    {
        word: "halves",
        complexity: "Elementary"
    },
    {
        word: "hametz",
        complexity: "Post-College"
    },
    {
        word: "hamlet",
        complexity: "Middle School"
    },
    {
        word: "hamper",
        complexity: "Middle School"
    },
    {
        word: "hankie",
        complexity: "unknown"
    },
    {
        word: "happed",
        complexity: "High School"
    },
    {
        word: "happen",
        complexity: "Elementary"
    },
    {
        word: "harass",
        complexity: "Middle School"
    },
    {
        word: "harbor",
        complexity: "Middle School"
    },
    {
        word: "harden",
        complexity: "Middle School"
    },
    {
        word: "harder",
        complexity: "Elementary"
    },
    {
        word: "harken",
        complexity: "Post-College"
    },
    {
        word: "harlot",
        complexity: "High School"
    },
    {
        word: "harrow",
        complexity: "High School"
    },
    {
        word: "hassle",
        complexity: "Middle School"
    },
    {
        word: "hasten",
        complexity: "Middle School"
    },
    {
        word: "hating",
        complexity: "unknown"
    },
    {
        word: "hatpin",
        complexity: "College"
    },
    {
        word: "hatred",
        complexity: "Middle School"
    },
    {
        word: "hatted",
        complexity: "Elementary"
    },
    {
        word: "hatter",
        complexity: "College"
    },
    {
        word: "hauled",
        complexity: "unknown"
    },
    {
        word: "hauler",
        complexity: "High School"
    },
    {
        word: "haunch",
        complexity: "Post-College"
    },
    {
        word: "haunts",
        complexity: "unknown"
    },
    {
        word: "hausen",
        complexity: "College"
    },
    {
        word: "havens",
        complexity: "Middle School"
    },
    {
        word: "having",
        complexity: "unknown"
    },
    {
        word: "hawged",
        complexity: "College"
    },
    {
        word: "hawing",
        complexity: "unknown"
    },
    {
        word: "hazard",
        complexity: "Middle School"
    },
    {
        word: "hazier",
        complexity: "College"
    },
    {
        word: "hazing",
        complexity: "College"
    },
    {
        word: "hazmat",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "hazzan",
        complexity: "Post-College"
    },
    {
        word: "headed",
        complexity: "Elementary"
    },
    {
        word: "health",
        complexity: "Elementary"
    },
    {
        word: "heaper",
        complexity: "Middle School"
    },
    {
        word: "hearse",
        complexity: "High School"
    },
    {
        word: "hearth",
        complexity: "Middle School"
    },
    {
        word: "heaven",
        complexity: "Elementary"
    },
    {
        word: "hectic",
        complexity: "Middle School"
    },
    {
        word: "hector",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "heeder",
        complexity: "Middle School"
    },
    {
        word: "heeled",
        complexity: "Middle School"
    },
    {
        word: "hefted",
        complexity: "High School"
    },
    {
        word: "heifer",
        complexity: "High School"
    },
    {
        word: "height",
        complexity: "Elementary"
    },
    {
        word: "heired",
        complexity: "Middle School"
    },
    {
        word: "heller",
        complexity: "High School"
    },
    {
        word: "hemmed",
        complexity: "unknown"
    },
    {
        word: "henley",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "herald",
        complexity: "Middle School"
    },
    {
        word: "herbed",
        complexity: "Elementary"
    },
    {
        word: "herdic",
        complexity: "High School"
    },
    {
        word: "heresy",
        complexity: "Middle School"
    },
    {
        word: "hereto",
        complexity: "Middle School"
    },
    {
        word: "heriot",
        complexity: "High School"
    },
    {
        word: "hermit",
        complexity: "Middle School"
    },
    {
        word: "hernia",
        complexity: "Middle School"
    },
    {
        word: "heroic",
        complexity: "Middle School"
    },
    {
        word: "herpes",
        complexity: "Middle School"
    },
    {
        word: "hetero",
        complexity: "College"
    },
    {
        word: "hetman",
        complexity: "Middle School"
    },
    {
        word: "hiatus",
        complexity: "Middle School"
    },
    {
        word: "hijack",
        complexity: "High School"
    },
    {
        word: "hiking",
        complexity: "unknown"
    },
    {
        word: "hincty",
        complexity: "College"
    },
    {
        word: "hineys",
        complexity: "unknown"
    },
    {
        word: "hirees",
        complexity: "unknown"
    },
    {
        word: "hissed",
        complexity: "unknown"
    },
    {
        word: "hitter",
        complexity: "unknown"
    },
    {
        word: "hoagie",
        complexity: "unknown"
    },
    {
        word: "hoaxer",
        complexity: "High School"
    },
    {
        word: "hobbit",
        complexity: "High School"
    },
    {
        word: "hobble",
        complexity: "College"
    },
    {
        word: "hocker",
        complexity: "unknown"
    },
    {
        word: "hockle",
        complexity: "Post-College"
    },
    {
        word: "hogged",
        complexity: "unknown"
    },
    {
        word: "hogger",
        complexity: "High School"
    },
    {
        word: "holder",
        complexity: "Elementary"
    },
    {
        word: "holier",
        complexity: "Elementary"
    },
    {
        word: "holler",
        complexity: "High School"
    },
    {
        word: "hollow",
        complexity: "Middle School"
    },
    {
        word: "holpen",
        complexity: "Middle School"
    },
    {
        word: "homage",
        complexity: "Middle School"
    },
    {
        word: "homely",
        complexity: "High School"
    },
    {
        word: "homier",
        complexity: "Post-College"
    },
    {
        word: "homily",
        complexity: "College"
    },
    {
        word: "honcho",
        complexity: "High School"
    },
    {
        word: "honest",
        complexity: "Elementary"
    },
    {
        word: "honied",
        complexity: "College"
    },
    {
        word: "honing",
        complexity: "unknown"
    },
    {
        word: "honker",
        complexity: "Post-College"
    },
    {
        word: "honors",
        complexity: "Elementary"
    },
    {
        word: "hoodie",
        complexity: "High School"
    },
    {
        word: "hoodoo",
        complexity: "Post-College"
    },
    {
        word: "hoofer",
        complexity: "Post-College"
    },
    {
        word: "hoopla",
        complexity: "High School"
    },
    {
        word: "hoopoe",
        complexity: "Post-College"
    },
    {
        word: "hooray",
        complexity: "unknown"
    },
    {
        word: "hooted",
        complexity: "unknown"
    },
    {
        word: "hoover",
        complexity: "High School"
    },
    {
        word: "hooves",
        complexity: "High School"
    },
    {
        word: "hoping",
        complexity: "unknown"
    },
    {
        word: "horded",
        complexity: "Middle School"
    },
    {
        word: "hormic",
        complexity: "Middle School"
    },
    {
        word: "horror",
        complexity: "Elementary"
    },
    {
        word: "horsey",
        complexity: "High School"
    },
    {
        word: "hosier",
        complexity: "College"
    },
    {
        word: "hotdog",
        complexity: "unknown"
    },
    {
        word: "hotkey",
        complexity: "Post-College"
    },
    {
        word: "hotted",
        complexity: "unknown"
    },
    {
        word: "houris",
        complexity: "unknown"
    },
    {
        word: "housel",
        complexity: "High School"
    },
    {
        word: "howler",
        complexity: "High School"
    },
    {
        word: "howlet",
        complexity: "High School"
    },
    {
        word: "hoyden",
        complexity: "Post-College"
    },
    {
        word: "hubbed",
        complexity: "Middle School"
    },
    {
        word: "hubbub",
        complexity: "Post-College"
    },
    {
        word: "hubcap",
        complexity: "Post-College"
    },
    {
        word: "hubris",
        complexity: "High School"
    },
    {
        word: "huckle",
        complexity: "Post-College"
    },
    {
        word: "huddle",
        complexity: "College"
    },
    {
        word: "huemul",
        complexity: "Post-College"
    },
    {
        word: "hugely",
        complexity: "unknown"
    },
    {
        word: "hugger",
        complexity: "Middle School"
    },
    {
        word: "huipil",
        complexity: "Post-College"
    },
    {
        word: "huldre",
        complexity: "High School"
    },
    {
        word: "huller",
        complexity: "Middle School"
    },
    {
        word: "hulloa",
        complexity: "College"
    },
    {
        word: "humane",
        complexity: "Middle School"
    },
    {
        word: "humble",
        complexity: "Middle School"
    },
    {
        word: "humped",
        complexity: "College"
    },
    {
        word: "hunger",
        complexity: "Middle School"
    },
    {
        word: "hunter",
        complexity: "Elementary"
    },
    {
        word: "hurled",
        complexity: "unknown"
    },
    {
        word: "hurrah",
        complexity: "College"
    },
    {
        word: "hurtle",
        complexity: "Post-College"
    },
    {
        word: "huzzah",
        complexity: "Post-College"
    },
    {
        word: "hybrid",
        complexity: "Middle School"
    },
    {
        word: "hyenas",
        complexity: "College"
    },
    {
        word: "hyetal",
        complexity: "College"
    },
    {
        word: "hymned",
        complexity: "High School"
    },
    {
        word: "hyssop",
        complexity: "Post-College"
    },
    {
        word: "hyzone",
        complexity: "Post-College"
    },

    {
        word: "iatric",
        complexity: "High School"
    },
    {
        word: "ibidem",
        complexity: "Post-College"
    },
    {
        word: "iceman",
        complexity: "College"
    },
    {
        word: "icicle",
        complexity: "Post-College"
    },
    {
        word: "iconic",
        complexity: "Middle School"
    },
    {
        word: "ideals",
        complexity: "unknown"
    },
    {
        word: "ideata",
        complexity: "College"
    },
    {
        word: "idiocy",
        complexity: "High School"
    },
    {
        word: "idioms",
        complexity: "unknown"
    },
    {
        word: "idiots",
        complexity: "Middle School"
    },
    {
        word: "idling",
        complexity: "unknown"
    },
    {
        word: "ignite",
        complexity: "Middle School"
    },
    {
        word: "ignore",
        complexity: "Elementary"
    },
    {
        word: "iguana",
        complexity: "High School"
    },
    {
        word: "ikigai",
        complexity: "Post-College"
    },
    {
        word: "illude",
        complexity: "High School"
    },
    {
        word: "imaged",
        complexity: "unknown"
    },
    {
        word: "imager",
        complexity: "unknown"
    },
    {
        word: "images",
        complexity: "unknown"
    },
    {
        word: "imbibe",
        complexity: "Post-College"
    },
    {
        word: "imbrue",
        complexity: "Post-College"
    },
    {
        word: "imbued",
        complexity: "unknown"
    },
    {
        word: "impact",
        complexity: "Elementary"
    },
    {
        word: "impair",
        complexity: "Middle School"
    },
    {
        word: "impale",
        complexity: "College"
    },
    {
        word: "impart",
        complexity: "Middle School"
    },
    {
        word: "impede",
        complexity: "Middle School"
    },
    {
        word: "impend",
        complexity: "College"
    },
    {
        word: "imping",
        complexity: "Middle School"
    },
    {
        word: "impish",
        complexity: "Post-College"
    },
    {
        word: "import",
        complexity: "Elementary"
    },
    {
        word: "impost",
        complexity: "College"
    },
    {
        word: "improv",
        complexity: "High School"
    },
    {
        word: "impute",
        complexity: "High School"
    },
    {
        word: "inarch",
        complexity: "Middle School"
    },
    {
        word: "incase",
        complexity: "Middle School"
    },
    {
        word: "incher",
        complexity: "Middle School"
    },
    {
        word: "incise",
        complexity: "College"
    },
    {
        word: "incite",
        complexity: "Middle School"
    },
    {
        word: "inclip",
        complexity: "College"
    },
    {
        word: "income",
        complexity: "Elementary"
    },
    {
        word: "indeed",
        complexity: "Elementary"
    },
    {
        word: "indent",
        complexity: "Middle School"
    },
    {
        word: "indict",
        complexity: "High School"
    },
    {
        word: "indign",
        complexity: "High School"
    },
    {
        word: "indite",
        complexity: "College"
    },
    {
        word: "indium",
        complexity: "High School"
    },
    {
        word: "indole",
        complexity: "Middle School"
    },
    {
        word: "indoor",
        complexity: "Elementary"
    },
    {
        word: "induce",
        complexity: "Middle School"
    },
    {
        word: "infamy",
        complexity: "College"
    },
    {
        word: "infect",
        complexity: "Middle School"
    },
    {
        word: "infers",
        complexity: "Middle School"
    },
    {
        word: "infest",
        complexity: "High School"
    },
    {
        word: "infirm",
        complexity: "High School"
    },
    {
        word: "influx",
        complexity: "Middle School"
    },
    {
        word: "infold",
        complexity: "Middle School"
    },
    {
        word: "inform",
        complexity: "Elementary"
    },
    {
        word: "infula",
        complexity: "College"
    },
    {
        word: "infuse",
        complexity: "High School"
    },
    {
        word: "ingate",
        complexity: "Middle School"
    },
    {
        word: "ingest",
        complexity: "Middle School"
    },
    {
        word: "ingulf",
        complexity: "High School"
    },
    {
        word: "inhale",
        complexity: "Middle School"
    },
    {
        word: "inhume",
        complexity: "Post-College"
    },
    {
        word: "inject",
        complexity: "Middle School"
    },
    {
        word: "injury",
        complexity: "Elementary"
    },
    {
        word: "inland",
        complexity: "Middle School"
    },
    {
        word: "inlier",
        complexity: "College"
    },
    {
        word: "innate",
        complexity: "Middle School"
    },
    {
        word: "inning",
        complexity: "Middle School"
    },
    {
        word: "inroad",
        complexity: "College"
    },
    {
        word: "insane",
        complexity: "Middle School"
    },
    {
        word: "insect",
        complexity: "Middle School"
    },
    {
        word: "inside",
        complexity: "Elementary"
    },
    {
        word: "insist",
        complexity: "Middle School"
    },
    {
        word: "inspan",
        complexity: "College"
    },
    {
        word: "insula",
        complexity: "High School"
    },
    {
        word: "insult",
        complexity: "Middle School"
    },
    {
        word: "insure",
        complexity: "Elementary"
    },
    {
        word: "intact",
        complexity: "Elementary"
    },
    {
        word: "intend",
        complexity: "Elementary"
    },
    {
        word: "intern",
        complexity: "Middle School"
    },
    {
        word: "intime",
        complexity: "High School"
    },
    {
        word: "intone",
        complexity: "High School"
    },
    {
        word: "inturn",
        complexity: "High School"
    },
    {
        word: "invade",
        complexity: "Middle School"
    },
    {
        word: "invent",
        complexity: "Middle School"
    },
    {
        word: "invert",
        complexity: "Middle School"
    },
    {
        word: "invest",
        complexity: "Elementary"
    },
    {
        word: "invite",
        complexity: "Elementary"
    },
    {
        word: "invoke",
        complexity: "Middle School"
    },
    {
        word: "inwrap",
        complexity: "Post-College"
    },
    {
        word: "iodine",
        complexity: "Middle School"
    },
    {
        word: "iritic",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "iritis",
        complexity: "College"
    },
    {
        word: "ironer",
        complexity: "High School"
    },
    {
        word: "ironic",
        complexity: "Middle School"
    },
    {
        word: "irrupt",
        complexity: "Post-College"
    },
    {
        word: "island",
        complexity: "Elementary"
    },
    {
        word: "isogon",
        complexity: "College"
    },
    {
        word: "isopod",
        complexity: "Post-College"
    },
    {
        word: "issued",
        complexity: "unknown"
    },
    {
        word: "issuer",
        complexity: "unknown"
    },
    {
        word: "issues",
        complexity: "unknown"
    },
    {
        word: "isthmi",
        complexity: "High School"
    },
    {
        word: "italic",
        complexity: "Middle School"
    },
    {
        word: "itemed",
        complexity: "Elementary"
    },
    {
        word: "itself",
        complexity: "Elementary"
    },
    {
        word: "ixodid",
        complexity: "Post-College"
    },

    {
        word: "jabber",
        complexity: "High School"
    },
    {
        word: "jacked",
        complexity: "High School"
    },
    {
        word: "jacket",
        complexity: "Middle School"
    },
    {
        word: "jailer",
        complexity: "High School"
    },
    {
        word: "jambed",
        complexity: "Post-College"
    },
    {
        word: "jambes",
        complexity: "Post-College"
    },
    {
        word: "jambos",
        complexity: "Post-College"
    },
    {
        word: "jammed",
        complexity: "unknown"
    },
    {
        word: "jangle",
        complexity: "Post-College"
    },
    {
        word: "jansky",
        complexity: "Post-College"
    },
    {
        word: "jargon",
        complexity: "Middle School"
    },
    {
        word: "jaunts",
        complexity: "College"
    },
    {
        word: "jaunty",
        complexity: "College"
    },
    {
        word: "jeeing",
        complexity: "High School"
    },
    {
        word: "jeered",
        complexity: "Post-College"
    },
    {
        word: "jelled",
        complexity: "Post-College"
    },
    {
        word: "jennet",
        complexity: "Post-College"
    },
    {
        word: "jennie",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "jerboa",
        complexity: "Post-College"
    },
    {
        word: "jereed",
        complexity: "College"
    },
    {
        word: "jerids",
        complexity: "College"
    },
    {
        word: "jerked",
        complexity: "unknown"
    },
    {
        word: "jersey",
        complexity: "Middle School"
    },
    {
        word: "jested",
        complexity: "Middle School"
    },
    {
        word: "jetton",
        complexity: "High School"
    },
    {
        word: "jibing",
        complexity: "Post-College"
    },
    {
        word: "jigged",
        complexity: "High School"
    },
    {
        word: "jigsaw",
        complexity: "Middle School"
    },
    {
        word: "jilted",
        complexity: "unknown"
    },
    {
        word: "jimply",
        complexity: "High School"
    },
    {
        word: "jitney",
        complexity: "Post-College"
    },
    {
        word: "jitter",
        complexity: "Middle School"
    },
    {
        word: "jivier",
        complexity: "College"
    },
    {
        word: "jobbed",
        complexity: "Elementary"
    },
    {
        word: "jockey",
        complexity: "High School"
    },
    {
        word: "joints",
        complexity: "Elementary"
    },
    {
        word: "josser",
        complexity: "High School"
    },
    {
        word: "jostle",
        complexity: "Post-College"
    },
    {
        word: "jounce",
        complexity: "Post-College"
    },
    {
        word: "jovial",
        complexity: "College"
    },
    {
        word: "joyful",
        complexity: "Middle School"
    },
    {
        word: "joying",
        complexity: "Middle School"
    },
    {
        word: "joyous",
        complexity: "Middle School"
    },
    {
        word: "joypad",
        complexity: "Post-College"
    },
    {
        word: "joypop",
        complexity: "Post-College"
    },
    {
        word: "jubate",
        complexity: "Post-College"
    },
    {
        word: "jubbah",
        complexity: "Post-College"
    },
    {
        word: "jubili",
        complexity: "Post-College"
    },
    {
        word: "judder",
        complexity: "Post-College"
    },
    {
        word: "judged",
        complexity: "unknown"
    },
    {
        word: "judger",
        complexity: "Elementary"
    },
    {
        word: "jugful",
        complexity: "Post-College"
    },
    {
        word: "juggle",
        complexity: "High School"
    },
    {
        word: "juicer",
        complexity: "High School"
    },
    {
        word: "jumper",
        complexity: "Middle School"
    },
    {
        word: "jungly",
        complexity: "Post-College"
    },
    {
        word: "junior",
        complexity: "Elementary"
    },
    {
        word: "junker",
        complexity: "Post-College"
    },
    {
        word: "junket",
        complexity: "Post-College"
    },
    {
        word: "junkie",
        complexity: "High School"
    },
    {
        word: "juried",
        complexity: "High School"
    },
    {
        word: "justed",
        complexity: "Elementary"
    },
    {
        word: "juster",
        complexity: "unknown"
    },
    {
        word: "justle",
        complexity: "College"
    },
    {
        word: "kabaka",
        complexity: "Post-College"
    },
    {
        word: "kabuki",
        complexity: "College"
    },
    {
        word: "kaftan",
        complexity: "Post-College"
    },
    {
        word: "kahuna",
        complexity: "Post-College"
    },
    {
        word: "kaiser",
        complexity: "High School"
    },
    {
        word: "kaishu",
        complexity: "unknown"
    },
    {
        word: "kaizen",
        complexity: "Post-College"
    },
    {
        word: "kakapo",
        complexity: "Post-College"
    },
    {
        word: "kalian",
        complexity: "College"
    },
    {
        word: "kalmia",
        complexity: "Post-College"
    },
    {
        word: "kalong",
        complexity: "High School"
    },
    {
        word: "kalpak",
        complexity: "College"
    },
    {
        word: "kalpis",
        complexity: "High School"
    },
    {
        word: "kamala",
        complexity: "High School"
    },
    {
        word: "kambal",
        complexity: "College"
    },
    {
        word: "kamiks",
        complexity: "Post-College"
    },
    {
        word: "kanaka",
        complexity: "College"
    },
    {
        word: "kanban",
        complexity: "College"
    },
    {
        word: "kanone",
        complexity: "College"
    },
    {
        word: "kantar",
        complexity: "High School"
    },
    {
        word: "kaross",
        complexity: "Middle School"
    },
    {
        word: "kashim",
        complexity: "College"
    },
    {
        word: "keeper",
        complexity: "Middle School"
    },
    {
        word: "kegler",
        complexity: "High School"
    },
    {
        word: "kelson",
        complexity: "unknown"
    },
    {
        word: "kenned",
        complexity: "Middle School"
    },
    {
        word: "kerbed",
        complexity: "College"
    },
    {
        word: "kernel",
        complexity: "Elementary"
    },
    {
        word: "kettle",
        complexity: "Middle School"
    },
    {
        word: "kibitz",
        complexity: "Post-College"
    },
    {
        word: "kiddos",
        complexity: "unknown"
    },
    {
        word: "kidvid",
        complexity: "High School"
    },
    {
        word: "kikuyu",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "kilijs",
        complexity: "Post-College"
    },
    {
        word: "kimchi",
        complexity: "College"
    },
    {
        word: "kimono",
        complexity: "High School"
    },
    {
        word: "kinder",
        complexity: "unknown"
    },
    {
        word: "kindle",
        complexity: "High School"
    },
    {
        word: "kindly",
        complexity: "Middle School"
    },
    {
        word: "kinema",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "kinged",
        complexity: "Elementary"
    },
    {
        word: "kinked",
        complexity: "High School"
    },
    {
        word: "kinkle",
        complexity: "College"
    },
    {
        word: "kinkly",
        complexity: "College"
    },
    {
        word: "kipuka",
        complexity: "Post-College"
    },
    {
        word: "kirpan",
        complexity: "Post-College"
    },
    {
        word: "kirsch",
        complexity: "Post-College"
    },
    {
        word: "kirtle",
        complexity: "Post-College"
    },
    {
        word: "kismet",
        complexity: "High School"
    },
    {
        word: "kiting",
        complexity: "High School"
    },
    {
        word: "kitsch",
        complexity: "High School"
    },
    // {
    //     word: "kitted",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    {
        word: "kitten",
        complexity: "Elementary"
    },
    {
        word: "klaxon",
        complexity: "Post-College"
    },
    {
        word: "kludge",
        complexity: "College"
    },
    {
        word: "knight",
        complexity: "Middle School"
    },
    {
        word: "knocks",
        complexity: "Middle School"
    },
    {
        word: "knolly",
        complexity: "High School"
    },
    {
        word: "knower",
        complexity: "unknown"
    },
    {
        word: "kobold",
        complexity: "College"
    },
    {
        word: "kookie",
        complexity: "unknown"
    },
    {
        word: "kopeck",
        complexity: "Post-College"
    },
    {
        word: "kopeks",
        complexity: "Post-College"
    },
    {
        word: "korona",
        complexity: "High School"
    },
    {
        word: "koruna",
        complexity: "High School"
    },
    {
        word: "koruny",
        complexity: "High School"
    },
    {
        word: "kosher",
        complexity: "Middle School"
    },
    {
        word: "kowhai",
        complexity: "Post-College"
    },
    {
        word: "kumiss",
        complexity: "High School"
    },
    {
        word: "kutcha",
        complexity: "College"
    },
    {
        word: "kvetch",
        complexity: "Post-College"
    },
    {
        word: "laager",
        complexity: "College"
    },
    {
        word: "labara",
        complexity: "College"
    },
    {
        word: "labels",
        complexity: "Elementary"
    },
    {
        word: "labial",
        complexity: "High School"
    },
    {
        word: "labile",
        complexity: "High School"
    },
    {
        word: "labium",
        complexity: "Post-College"
    },
    {
        word: "lablab",
        complexity: "Post-College"
    },
    {
        word: "labneh",
        complexity: "College"
    },
    {
        word: "labour",
        complexity: "Elementary"
    },
    {
        word: "labret",
        complexity: "High School"
    },
    {
        word: "labrid",
        complexity: "Middle School"
    },
    {
        word: "labrum",
        complexity: "High School"
    },
    {
        word: "lacing",
        complexity: "Middle School"
    },
    {
        word: "lackey",
        complexity: "College"
    },
    {
        word: "lacuna",
        complexity: "High School"
    },
    {
        word: "ladies",
        complexity: "unknown"
    },
    {
        word: "ladled",
        complexity: "High School"
    },
    {
        word: "laguna",
        complexity: "High School"
    },
    {
        word: "lakers",
        complexity: "High School"
    },
    {
        word: "lambda",
        complexity: "Middle School"
    },
    {
        word: "lamboy",
        complexity: "College"
    },
    {
        word: "lament",
        complexity: "Middle School"
    },
    {
        word: "lamiae",
        complexity: "Post-College"
    },
    {
        word: "lamina",
        complexity: "Middle School"
    },
    {
        word: "lampas",
        complexity: "High School"
    },
    {
        word: "lancet",
        complexity: "College"
    },
    {
        word: "landau",
        complexity: "College"
    },
    {
        word: "lapdog",
        complexity: "Post-College"
    },
    {
        word: "lapels",
        complexity: "Middle School"
    },
    {
        word: "lapped",
        complexity: "unknown"
    },
    {
        word: "lapsed",
        complexity: "Middle School"
    },
    {
        word: "larges",
        complexity: "Elementary"
    },
    {
        word: "lariat",
        complexity: "High School"
    },
    {
        word: "larine",
        complexity: "Middle School"
    },
    {
        word: "larvae",
        complexity: "unknown"
    },
    {
        word: "larynx",
        complexity: "High School"
    },
    {
        word: "lascar",
        complexity: "College"
    },
    {
        word: "lashes",
        complexity: "Middle School"
    },
    {
        word: "lashup",
        complexity: "College"
    },
    {
        word: "lasses",
        complexity: "unknown"
    },
    {
        word: "lassie",
        complexity: "College"
    },
    {
        word: "lassos",
        complexity: "Middle School"
    },
    {
        word: "laster",
        complexity: "Elementary"
    },
    {
        word: "lastly",
        complexity: "Middle School"
    },
    {
        word: "latahs",
        complexity: "High School"
    },
    {
        word: "lateen",
        complexity: "College"
    },
    {
        word: "latent",
        complexity: "Middle School"
    },
    {
        word: "latest",
        complexity: "Elementary"
    },
    {
        word: "latish",
        complexity: "College"
    },
    {
        word: "latter",
        complexity: "Elementary"
    },
    {
        word: "lauded",
        complexity: "unknown"
    },
    {
        word: "laurel",
        complexity: "Middle School"
    },
    {
        word: "lavish",
        complexity: "Middle School"
    },
    {
        word: "lawful",
        complexity: "Middle School"
    },
    {
        word: "laxity",
        complexity: "High School"
    },
    {
        word: "layman",
        complexity: "High School"
    },
    {
        word: "layout",
        complexity: "Elementary"
    },
    {
        word: "lazied",
        complexity: "Middle School"
    },
    {
        word: "lazies",
        complexity: "Middle School"
    },
    {
        word: "leaden",
        complexity: "High School"
    },
    {
        word: "leader",
        complexity: "Elementary"
    },
    {
        word: "league",
        complexity: "Elementary"
    },
    {
        word: "leanly",
        complexity: "Elementary"
    },
    {
        word: "learnt",
        complexity: "Elementary"
    },
    {
        word: "leaves",
        complexity: "Elementary"
    },
    {
        word: "lebbek",
        complexity: "College"
    },
    {
        word: "lector",
        complexity: "High School"
    },
    {
        word: "lefses",
        complexity: "High School"
    },
    {
        word: "legacy",
        complexity: "Elementary"
    },
    {
        word: "legals",
        complexity: "Elementary"
    },
    {
        word: "legend",
        complexity: "Elementary"
    },
    {
        word: "legged",
        complexity: "Middle School"
    },
    {
        word: "legion",
        complexity: "Middle School"
    },
    {
        word: "legist",
        complexity: "Middle School"
    },
    {
        word: "leglen",
        complexity: "Middle School"
    },
    {
        word: "legong",
        complexity: "High School"
    },
    {
        word: "legume",
        complexity: "High School"
    },
    {
        word: "lemony",
        complexity: "unknown"
    },
    {
        word: "lender",
        complexity: "Middle School"
    },
    {
        word: "length",
        complexity: "Elementary"
    },
    {
        word: "lenite",
        complexity: "Middle School"
    },
    {
        word: "lenity",
        complexity: "College"
    },
    {
        word: "lensed",
        complexity: "Elementary"
    },
    {
        word: "lesion",
        complexity: "Middle School"
    },
    {
        word: "lessee",
        complexity: "Middle School"
    },
    {
        word: "lessen",
        complexity: "Middle School"
    },
    {
        word: "lesser",
        complexity: "Elementary"
    },
    {
        word: "lesses",
        complexity: "Elementary"
    },
    {
        word: "lesson",
        complexity: "Elementary"
    },
    {
        word: "lethal",
        complexity: "Middle School"
    },
    {
        word: "leucon",
        complexity: "High School"
    },
    {
        word: "levant",
        complexity: "College"
    },
    {
        word: "leveed",
        complexity: "Middle School"
    },
    {
        word: "levels",
        complexity: "Elementary"
    },
    {
        word: "levied",
        complexity: "unknown"
    },
    {
        word: "levity",
        complexity: "College"
    },
    {
        word: "liable",
        complexity: "Elementary"
    },
    {
        word: "liaise",
        complexity: "Middle School"
    },
    {
        word: "lianes",
        complexity: "College"
    },
    {
        word: "lichen",
        complexity: "Middle School"
    },
    {
        word: "lieges",
        complexity: "Middle School"
    },
    {
        word: "ligase",
        complexity: "High School"
    },
    {
        word: "ligate",
        complexity: "College"
    },
    {
        word: "lights",
        complexity: "Elementary"
    },
    {
        word: "ligule",
        complexity: "College"
    },
    {
        word: "likens",
        complexity: "High School"
    },
    {
        word: "likers",
        complexity: "Elementary"
    },
    {
        word: "likest",
        complexity: "Elementary"
    },
    {
        word: "liking",
        complexity: "Middle School"
    },
    {
        word: "likker",
        complexity: "College"
    },
    {
        word: "likuta",
        complexity: "Post-College"
    },
    {
        word: "lilied",
        complexity: "High School"
    },
    {
        word: "limbed",
        complexity: "College"
    },
    {
        word: "limber",
        complexity: "High School"
    },
    {
        word: "limbic",
        complexity: "College"
    },
    {
        word: "limbos",
        complexity: "Middle School"
    },
    {
        word: "limbus",
        complexity: "Post-College"
    },
    {
        word: "limits",
        complexity: "Elementary"
    },
    {
        word: "linear",
        complexity: "Elementary"
    },
    {
        word: "lineup",
        complexity: "Middle School"
    },
    {
        word: "linger",
        complexity: "Middle School"
    },
    {
        word: "lining",
        complexity: "Elementary"
    },
    {
        word: "linkup",
        complexity: "Post-College"
    },
    {
        word: "linnet",
        complexity: "College"
    },
    {
        word: "lippen",
        complexity: "High School"
    },
    {
        word: "lipper",
        complexity: "High School"
    },
    {
        word: "liquid",
        complexity: "Middle School"
    },
    {
        word: "listen",
        complexity: "Elementary"
    },
    {
        word: "lithia",
        complexity: "High School"
    },
    {
        word: "litmus",
        complexity: "High School"
    },
    {
        word: "little",
        complexity: "Elementary"
    },
    {
        word: "lively",
        complexity: "Middle School"
    },
    {
        word: "livery",
        complexity: "High School"
    },
    {
        word: "livest",
        complexity: "Elementary"
    },
    {
        word: "living",
        complexity: "Elementary"
    },
    {
        word: "lizard",
        complexity: "Middle School"
    },
    {
        word: "lizzie",
        complexity: "College"
    },
    {
        word: "llamas",
        complexity: "Middle School"
    },
    {
        word: "loaded",
        complexity: "Elementary"
    },
    {
        word: "loader",
        complexity: "Middle School"
    },
    {
        word: "loafed",
        complexity: "Middle School"
    },
    {
        word: "loafer",
        complexity: "High School"
    },
    {
        word: "loaner",
        complexity: "High School"
    },
    {
        word: "loathe",
        complexity: "Middle School"
    },
    {
        word: "loaves",
        complexity: "Middle School"
    },
    {
        word: "lobbed",
        complexity: "High School"
    },
    {
        word: "lobola",
        complexity: "unknown"
    },
    {
        word: "lochus",
        complexity: "Post-College"
    },
    {
        word: "locker",
        complexity: "Middle School"
    },
    {
        word: "locket",
        complexity: "High School"
    },
    {
        word: "locule",
        complexity: "College"
    },
    {
        word: "locums",
        complexity: "High School"
    },
    {
        word: "locust",
        complexity: "Middle School"
    },
    {
        word: "lodges",
        complexity: "Middle School"
    },
    {
        word: "lofted",
        complexity: "unknown"
    },
    {
        word: "logger",
        complexity: "Middle School"
    },
    {
        word: "loggia",
        complexity: "Post-College"
    },
    {
        word: "loggie",
        complexity: "Post-College"
    },
    {
        word: "loiter",
        complexity: "College"
    },
    {
        word: "lolcat",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "lollop",
        complexity: "College"
    },
    {
        word: "longan",
        complexity: "College"
    },
    {
        word: "longer",
        complexity: "unknown"
    },
    {
        word: "looser",
        complexity: "unknown"
    },
    {
        word: "looted",
        complexity: "unknown"
    },
    {
        word: "lopped",
        complexity: "High School"
    },
    {
        word: "lordly",
        complexity: "Post-College"
    },
    {
        word: "louted",
        complexity: "High School"
    },
    {
        word: "louvre",
        complexity: "College"
    },
    {
        word: "lovage",
        complexity: "Post-College"
    },
    {
        word: "lovely",
        complexity: "Elementary"
    },
    {
        word: "lowing",
        complexity: "unknown"
    },
    {
        word: "lubber",
        complexity: "Post-College"
    },
    {
        word: "lucent",
        complexity: "High School"
    },
    {
        word: "luffas",
        complexity: "Post-College"
    },
    {
        word: "lugers",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "luging",
        complexity: "unknown"
    },
    {
        word: "lulled",
        complexity: "unknown"
    },
    {
        word: "lumbar",
        complexity: "Middle School"
    },
    {
        word: "lupine",
        complexity: "High School"
    },
    {
        word: "luring",
        complexity: "unknown"
    },
    {
        word: "lurked",
        complexity: "High School"
    },
    {
        word: "lushed",
        complexity: "Middle School"
    },
    {
        word: "luster",
        complexity: "Middle School"
    },
    {
        word: "luting",
        complexity: "College"
    },
    {
        word: "lutose",
        complexity: "High School"
    },
    {
        word: "luxury",
        complexity: "Middle School"
    },
    {
        word: "lyceum",
        complexity: "Post-College"
    },
    {
        word: "lyings",
        complexity: "Elementary"
    },
    {
        word: "lyrate",
        complexity: "College"
    },
    {
        word: "maches",
        complexity: "High School"
    },
    {
        word: "macron",
        complexity: "College"
    },
    {
        word: "macula",
        complexity: "High School"
    },
    {
        word: "madame",
        complexity: "High School"
    },
    {
        word: "madams",
        complexity: "unknown"
    },
    {
        word: "madcap",
        complexity: "College"
    },
    {
        word: "madras",
        complexity: "College"
    },
    {
        word: "madtom",
        complexity: "High School"
    },
    {
        word: "magged",
        complexity: "Middle School"
    },
    {
        word: "maggid",
        complexity: "College"
    },
    {
        word: "maggot",
        complexity: "High School"
    },
    {
        word: "magpie",
        complexity: "College"
    },
    {
        word: "maiden",
        complexity: "Middle School"
    },
    {
        word: "maigre",
        complexity: "College"
    },
    {
        word: "maimed",
        complexity: "unknown"
    },
    {
        word: "mained",
        complexity: "Elementary"
    },
    {
        word: "mainly",
        complexity: "Elementary"
    },
    {
        word: "majlis",
        complexity: "College"
    },
    {
        word: "majors",
        complexity: "Elementary"
    },
    {
        word: "makeup",
        complexity: "Middle School"
    },
    {
        word: "making",
        complexity: "Elementary"
    },
    {
        word: "mallet",
        complexity: "Middle School"
    },
    {
        word: "mallow",
        complexity: "High School"
    },
    {
        word: "mammal",
        complexity: "Middle School"
    },
    {
        word: "manage",
        complexity: "Elementary"
    },
    {
        word: "manger",
        complexity: "Middle School"
    },
    {
        word: "maniac",
        complexity: "High School"
    },
    {
        word: "manies",
        complexity: "Elementary"
    },
    {
        word: "manini",
        complexity: "High School"
    },
    {
        word: "manner",
        complexity: "Elementary"
    },
    {
        word: "mantis",
        complexity: "Middle School"
    },
    {
        word: "mantle",
        complexity: "Middle School"
    },
    {
        word: "mantra",
        complexity: "Middle School"
    },
    {
        word: "manual",
        complexity: "Elementary"
    },
    {
        word: "manure",
        complexity: "Middle School"
    },
    {
        word: "margin",
        complexity: "Elementary"
    },
    {
        word: "marked",
        complexity: "Elementary"
    },
    {
        word: "market",
        complexity: "Elementary"
    },
    {
        word: "marmot",
        complexity: "High School"
    },
    {
        word: "marque",
        complexity: "High School"
    },
    {
        word: "marred",
        complexity: "unknown"
    },
    {
        word: "marron",
        complexity: "High School"
    },
    {
        word: "marrow",
        complexity: "Middle School"
    },
    {
        word: "marshy",
        complexity: "College"
    },
    {
        word: "martel",
        complexity: "Middle School"
    },
    {
        word: "marten",
        complexity: "High School"
    },
    {
        word: "martyr",
        complexity: "Middle School"
    },
    {
        word: "mascle",
        complexity: "Middle School"
    },
    {
        word: "mascon",
        complexity: "High School"
    },
    {
        word: "mascot",
        complexity: "Middle School"
    },
    {
        word: "mashed",
        complexity: "Middle School"
    },
    {
        word: "masjid",
        complexity: "Post-College"
    },
    {
        word: "masque",
        complexity: "College"
    },
    {
        word: "massed",
        complexity: "unknown"
    },
    {
        word: "massif",
        complexity: "High School"
    },
    {
        word: "mastax",
        complexity: "College"
    },
    {
        word: "masted",
        complexity: "Middle School"
    },
    {
        word: "master",
        complexity: "Elementary"
    },
    {
        word: "mastic",
        complexity: "High School"
    },
    {
        word: "matcha",
        complexity: "High School"
    },
    {
        word: "maters",
        complexity: "unknown"
    },
    {
        word: "mating",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "matins",
        complexity: "unknown"
    },
    {
        word: "matres",
        complexity: "Middle School"
    },
    {
        word: "matrix",
        complexity: "Elementary"
    },
    {
        word: "matron",
        complexity: "High School"
    },
    {
        word: "matter",
        complexity: "Elementary"
    },
    {
        word: "mature",
        complexity: "Elementary"
    },
    {
        word: "matzah",
        complexity: "Post-College"
    },
    {
        word: "matzoh",
        complexity: "Post-College"
    },
    {
        word: "matzot",
        complexity: "Post-College"
    },
    {
        word: "maundy",
        complexity: "Post-College"
    },
    {
        word: "mavins",
        complexity: "Middle School"
    },
    {
        word: "maxima",
        complexity: "Elementary"
    },
    {
        word: "mayhem",
        complexity: "Middle School"
    },
    {
        word: "mazuma",
        complexity: "Post-College"
    },
    {
        word: "meacon",
        complexity: "Middle School"
    },
    {
        word: "meager",
        complexity: "Middle School"
    },
    {
        word: "meagre",
        complexity: "unknown"
    },
    {
        word: "mealie",
        complexity: "College"
    },
    {
        word: "meaner",
        complexity: "Elementary"
    },
    {
        word: "meanie",
        complexity: "College"
    },
    {
        word: "meanly",
        complexity: "Elementary"
    },
    {
        word: "measle",
        complexity: "High School"
    },
    // {
    //     word: "measly",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "High School"
    // },
    // {
    //     word: "meatal",
    //     isCapitalized: true,
    //     isRoot: false,
    //     complexity: "unknown"
    // },
    // {
    //     word: "meatus",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "College"
    // },
    // {
    //     word: "mecism",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "College"
    // },
    // {
    //     word: "medaka",
    //     isCapitalized: false,
    //     isRoot: true,
    //     complexity: "Post-College"
    // },
    {
        word: "meddle",
        complexity: "High School"
    },
    // {
    //     word: "mediae",
    //     isCapitalized: false,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    {
        word: "medial",
        complexity: "Middle School"
    },
    {
        word: "median",
        complexity: "Elementary"
    },
    {
        word: "medium",
        complexity: "Elementary"
    },
    {
        word: "medlar",
        complexity: "College"
    },
    {
        word: "meeker",
        complexity: "unknown"
    },
    {
        word: "meekly",
        complexity: "unknown"
    },
    {
        word: "meeter",
        complexity: "Elementary"
    },
    {
        word: "meetup",
        complexity: "High School"
    },
    {
        word: "megara",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "megass",
        complexity: "High School"
    },
    {
        word: "megilp",
        complexity: "Post-College"
    },
    {
        word: "melena",
        complexity: "College"
    },
    {
        word: "mellow",
        complexity: "Middle School"
    },
    {
        word: "member",
        complexity: "Elementary"
    },
    {
        word: "memoir",
        complexity: "Middle School"
    },
    {
        word: "memory",
        complexity: "Elementary"
    },
    {
        word: "menace",
        complexity: "Middle School"
    },
    {
        word: "mended",
        complexity: "unknown"
    },
    {
        word: "menial",
        complexity: "High School"
    },
    {
        word: "meninx",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "mensch",
        complexity: "High School"
    },
    {
        word: "mental",
        complexity: "Elementary"
    },
    {
        word: "mentee",
        complexity: "High School"
    },
    {
        word: "mentor",
        complexity: "Middle School"
    },
    {
        word: "merest",
        complexity: "Elementary"
    },
    {
        word: "merger",
        complexity: "Elementary"
    },
    {
        word: "merida",
        complexity: "College"
    },
    {
        word: "merits",
        complexity: "unknown"
    },
    {
        word: "mesail",
        complexity: "High School"
    },
    {
        word: "method",
        complexity: "Elementary"
    },
    {
        word: "metier",
        complexity: "unknown"
    },
    {
        word: "metric",
        complexity: "Elementary"
    },
    {
        word: "metros",
        complexity: "Middle School"
    },
    {
        word: "mewled",
        complexity: "unknown"
    },
    {
        word: "miaous",
        complexity: "High School"
    },
    {
        word: "miaows",
        complexity: "High School"
    },
    {
        word: "miasma",
        complexity: "Post-College"
    },
    {
        word: "miauls",
        complexity: "High School"
    },
    {
        word: "mickey",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "mickle",
        complexity: "Post-College"
    },
    {
        word: "micron",
        complexity: "Middle School"
    },
    {
        word: "midday",
        complexity: "Middle School"
    },
    {
        word: "midden",
        complexity: "College"
    },
    {
        word: "middle",
        complexity: "Elementary"
    },
    {
        word: "midget",
        complexity: "Middle School"
    },
    {
        word: "midrib",
        complexity: "Post-College"
    },
    {
        word: "midway",
        complexity: "Middle School"
    },
    {
        word: "mielie",
        complexity: "Middle School"
    },
    {
        word: "miffed",
        complexity: "College"
    },
    {
        word: "mighty",
        complexity: "Middle School"
    },
    {
        word: "mignon",
        complexity: "High School"
    },
    {
        word: "mihrab",
        complexity: "Post-College"
    },
    {
        word: "mikado",
        complexity: "Post-College"
    },
    {
        word: "miking",
        complexity: "unknown"
    },
    {
        word: "miller",
        complexity: "Middle School"
    },
    {
        word: "millet",
        complexity: "Middle School"
    },
    {
        word: "mimosa",
        complexity: "Post-College"
    },
    {
        word: "minder",
        complexity: "High School"
    },
    {
        word: "mingle",
        complexity: "Middle School"
    },
    {
        word: "minion",
        complexity: "High School"
    },
    {
        word: "minnow",
        complexity: "High School"
    },
    {
        word: "minors",
        complexity: "Elementary"
    },
    {
        word: "minted",
        complexity: "unknown"
    },
    {
        word: "mirage",
        complexity: "High School"
    },
    {
        word: "mirror",
        complexity: "Elementary"
    },
    {
        word: "misact",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "misaim",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "miscue",
        complexity: "Post-College"
    },
    {
        word: "misfit",
        complexity: "High School"
    },
    {
        word: "mishap",
        complexity: "High School"
    },
    {
        word: "mishit",
        complexity: "High School"
    },
    {
        word: "misled",
        complexity: "unknown"
    },
    {
        word: "missal",
        complexity: "College"
    },
    {
        word: "missed",
        complexity: "unknown"
    },
    {
        word: "misses",
        complexity: "unknown"
    },
    {
        word: "misuse",
        complexity: "Middle School"
    },
    {
        word: "mitten",
        complexity: "High School"
    },
    {
        word: "mobber",
        complexity: "Middle School"
    },
    {
        word: "mobile",
        complexity: "Elementary"
    },
    {
        word: "modern",
        complexity: "Elementary"
    },
    {
        word: "modest",
        complexity: "Elementary"
    },
    {
        word: "modify",
        complexity: "Elementary"
    },
    {
        word: "module",
        complexity: "Elementary"
    },
    {
        word: "moiety",
        complexity: "High School"
    },
    {
        word: "moksha",
        complexity: "High School"
    },
    {
        word: "molest",
        complexity: "High School"
    },
    {
        word: "moloch",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "molten",
        complexity: "Middle School"
    },
    {
        word: "moment",
        complexity: "Elementary"
    },
    {
        word: "momism",
        complexity: "Post-College"
    },
    {
        word: "mommie",
        complexity: "unknown"
    },
    {
        word: "monads",
        complexity: "High School"
    },
    {
        word: "mondes",
        complexity: "Middle School"
    },
    {
        word: "moneys",
        complexity: "unknown"
    },
    {
        word: "monger",
        complexity: "High School"
    },
    {
        word: "mongoe",
        complexity: "College"
    },
    {
        word: "mongol",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "monial",
        complexity: "High School"
    },
    {
        word: "monied",
        complexity: "College"
    },
    {
        word: "monies",
        complexity: "Elementary"
    },
    {
        word: "monish",
        complexity: "College"
    },
    {
        word: "monism",
        complexity: "College"
    },
    {
        word: "monist",
        complexity: "unknown"
    },
    {
        word: "monkey",
        complexity: "Middle School"
    },
    {
        word: "monoid",
        complexity: "High School"
    },
    {
        word: "mopier",
        complexity: "College"
    },
    {
        word: "morale",
        complexity: "Middle School"
    },
    {
        word: "morass",
        complexity: "High School"
    },
    {
        word: "morbid",
        complexity: "Middle School"
    },
    {
        word: "morose",
        complexity: "High School"
    },
    {
        word: "mortal",
        complexity: "Middle School"
    },
    {
        word: "mosaic",
        complexity: "Middle School"
    },
    {
        word: "mosque",
        complexity: "Middle School"
    },
    {
        word: "mother",
        complexity: "Elementary"
    },
    {
        word: "moting",
        complexity: "Middle School"
    },
    {
        word: "motion",
        complexity: "Elementary"
    },
    {
        word: "motley",
        complexity: "Middle School"
    },
    {
        word: "motser",
        complexity: "High School"
    },
    {
        word: "mottle",
        complexity: "College"
    },
    {
        word: "mottos",
        complexity: "Middle School"
    },
    {
        word: "motzas",
        complexity: "High School"
    },
    {
        word: "motzer",
        complexity: "High School"
    },
    {
        word: "mought",
        complexity: "College"
    },
    {
        word: "moujik",
        complexity: "unknown"
    },
    {
        word: "mouldy",
        complexity: "Post-College"
    },
    {
        word: "moulin",
        complexity: "Middle School"
    },
    {
        word: "mouser",
        complexity: "College"
    },
    {
        word: "mousey",
        complexity: "Post-College"
    },
    {
        word: "mousse",
        complexity: "Middle School"
    },
    {
        word: "mouthy",
        complexity: "High School"
    },
    {
        word: "moving",
        complexity: "Elementary"
    },
    {
        word: "mowing",
        complexity: "High School"
    },
    {
        word: "muches",
        complexity: "Elementary"
    },
    {
        word: "muckle",
        complexity: "Post-College"
    },
    {
        word: "mudcat",
        complexity: "Post-College"
    },
    {
        word: "muddle",
        complexity: "College"
    },
    {
        word: "muggle",
        complexity: "Post-College"
    },
    {
        word: "mulier",
        complexity: "College"
    },
    {
        word: "mulley",
        complexity: "College"
    },
    {
        word: "murder",
        complexity: "High School"
    },
    {
        word: "murmur",
        complexity: "High School"
    },
    {
        word: "muscle",
        complexity: "Elementary"
    },
    {
        word: "musing",
        complexity: "Middle School"
    },
    {
        word: "mussed",
        complexity: "unknown"
    },
    {
        word: "mussel",
        complexity: "Middle School"
    },
    {
        word: "musted",
        complexity: "Elementary"
    },
    {
        word: "mustee",
        complexity: "Middle School"
    },
    {
        word: "muster",
        complexity: "Middle School"
    },
    {
        word: "musths",
        complexity: "College"
    },
    {
        word: "mutant",
        complexity: "Middle School"
    },
    {
        word: "mutate",
        complexity: "Middle School"
    },
    {
        word: "mutely",
        complexity: "unknown"
    },
    {
        word: "muting",
        complexity: "unknown"
    },
    {
        word: "mutiny",
        complexity: "High School"
    },
    {
        word: "mutter",
        complexity: "High School"
    },
    {
        word: "mutual",
        complexity: "Elementary"
    },
    {
        word: "mutule",
        complexity: "High School"
    },
    {
        word: "muumuu",
        complexity: "Post-College"
    },
    {
        word: "muzhik",
        complexity: "Post-College"
    },
    {
        word: "muzzle",
        complexity: "College"
    },
    {
        word: "myases",
        complexity: "College"
    },
    {
        word: "myasis",
        complexity: "College"
    },
    {
        word: "myelin",
        complexity: "High School"
    },
    {
        word: "myopia",
        complexity: "High School"
    },
    {
        word: "myopic",
        complexity: "College"
    },
    {
        word: "myriad",
        complexity: "Middle School"
    },
    {
        word: "myrica",
        complexity: "Post-College"
    },
    {
        word: "myself",
        complexity: "Middle School"
    },
    {
        word: "mystic",
        complexity: "Middle School"
    },
    {
        word: "mythoi",
        complexity: "High School"
    },
    {
        word: "nabbed",
        complexity: "unknown"
    },
    {
        word: "namely",
        complexity: "Elementary"
    },
    {
        word: "napalm",
        complexity: "High School"
    },
    {
        word: "napier",
        complexity: "College"
    },
    {
        word: "nappie",
        complexity: "unknown"
    },
    {
        word: "narrow",
        complexity: "Elementary"
    },
    {
        word: "nasion",
        complexity: "College"
    },
    {
        word: "nastic",
        complexity: "Middle School"
    },
    {
        word: "natant",
        complexity: "Middle School"
    },
    {
        word: "nation",
        complexity: "Elementary"
    },
    {
        word: "native",
        complexity: "Elementary"
    },
    {
        word: "natter",
        complexity: "College"
    },
    {
        word: "nature",
        complexity: "Elementary"
    },
    {
        word: "naught",
        complexity: "High School"
    },
    {
        word: "nausea",
        complexity: "Middle School"
    },
    {
        word: "nautch",
        complexity: "Post-College"
    },
    {
        word: "naysay",
        complexity: "College"
    },
    {
        word: "neared",
        complexity: "Elementary"
    },
    {
        word: "nearer",
        complexity: "unknown"
    },
    {
        word: "nearly",
        complexity: "Elementary"
    },
    {
        word: "neater",
        complexity: "unknown"
    },
    {
        word: "neatly",
        complexity: "unknown"
    },
    {
        word: "nebris",
        complexity: "Middle School"
    },
    {
        word: "nebula",
        complexity: "High School"
    },
    {
        word: "necked",
        complexity: "Elementary"
    },
    {
        word: "necker",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "nectar",
        complexity: "Middle School"
    },
    {
        word: "needed",
        complexity: "Elementary"
    },
    {
        word: "needle",
        complexity: "Elementary"
    },
    {
        word: "negate",
        complexity: "Middle School"
    },
    {
        word: "nekton",
        complexity: "Post-College"
    },
    {
        word: "nelson",
        complexity: "Middle School"
    },
    {
        word: "nephew",
        complexity: "Middle School"
    },
    {
        word: "nesses",
        complexity: "Middle School"
    },
    {
        word: "nested",
        complexity: "Elementary"
    },
    {
        word: "nestle",
        complexity: "High School"
    },
    {
        word: "netman",
        complexity: "Middle School"
    },
    {
        word: "neural",
        complexity: "Elementary"
    },
    {
        word: "neuron",
        complexity: "Middle School"
    },
    {
        word: "neuter",
        complexity: "Middle School"
    },
    {
        word: "nevoid",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "niches",
        complexity: "Middle School"
    },
    {
        word: "nikkud",
        complexity: "Post-College"
    },
    {
        word: "nilled",
        complexity: "Middle School"
    },
    {
        word: "nimble",
        complexity: "High School"
    },
    {
        word: "nimbly",
        complexity: "unknown"
    },
    {
        word: "nimbus",
        complexity: "Post-College"
    },
    {
        word: "nimrod",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "niobic",
        complexity: "High School"
    },
    {
        word: "nipper",
        complexity: "Post-College"
    },
    {
        word: "nipple",
        complexity: "High School"
    },
    {
        word: "nitfly",
        complexity: "Post-College"
    },
    {
        word: "nitric",
        complexity: "Middle School"
    },
    {
        word: "nocent",
        complexity: "College"
    },
    {
        word: "noctis",
        complexity: "High School"
    },
    {
        word: "nodose",
        complexity: "High School"
    },
    {
        word: "nodous",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "nodule",
        complexity: "High School"
    },
    {
        word: "nonego",
        complexity: "College"
    },
    // {
    //     word: "nonuse",
    //     isCapitalized: true,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    {
        word: "noodle",
        complexity: "Elementary"
    },
    {
        word: "nordic",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "nudged",
        complexity: "unknown"
    },
    {
        word: "nudges",
        complexity: "High School"
    },
    {
        word: "nudist",
        complexity: "unknown"
    },
    {
        word: "nudity",
        complexity: "Middle School"
    },
    {
        word: "nulled",
        complexity: "unknown"
    },
    {
        word: "number",
        complexity: "Elementary"
    },
    {
        word: "numina",
        complexity: "College"
    },
    {
        word: "nuncio",
        complexity: "Post-College"
    },
    {
        word: "nuncle",
        complexity: "High School"
    },
    {
        word: "nurled",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "nutjob",
        complexity: "Post-College"
    },
    {
        word: "nutria",
        complexity: "College"
    },
    {
        word: "oaktag",
        complexity: "Post-College"
    },
    {
        word: "obeyer",
        complexity: "Middle School"
    },
    {
        word: "object",
        complexity: "Elementary"
    },
    {
        word: "oblige",
        complexity: "High School"
    },
    {
        word: "obsess",
        complexity: "High School"
    },
    {
        word: "obtain",
        complexity: "Elementary"
    },
    {
        word: "obtund",
        complexity: "Post-College"
    },
    {
        word: "obtuse",
        complexity: "High School"
    },
    {
        word: "occurs",
        complexity: "unknown"
    },
    {
        word: "oceans",
        complexity: "Elementary"
    },
    {
        word: "ochrea",
        complexity: "College"
    },
    {
        word: "octane",
        complexity: "Middle School"
    },
    {
        word: "oculus",
        complexity: "Post-College"
    },
    {
        word: "oddity",
        complexity: "High School"
    },
    {
        word: "odious",
        complexity: "Middle School"
    },
    {
        word: "oedema",
        complexity: "High School"
    },
    {
        word: "oeuvre",
        complexity: "High School"
    },
    {
        word: "offals",
        complexity: "High School"
    },
    {
        word: "offend",
        complexity: "Middle School"
    },
    {
        word: "office",
        complexity: "Elementary"
    },
    {
        word: "offset",
        complexity: "Elementary"
    },
    {
        word: "ohmage",
        complexity: "Post-College"
    },
    {
        word: "oidium",
        complexity: "Post-College"
    },
    {
        word: "oilcan",
        complexity: "College"
    },
    {
        word: "oiling",
        complexity: "unknown"
    },
    {
        word: "okayed",
        complexity: "unknown"
    },
    {
        word: "okoume",
        complexity: "Post-College"
    },
    {
        word: "oldest",
        complexity: "Elementary"
    },
    {
        word: "oldies",
        complexity: "unknown"
    },
    {
        word: "oleate",
        complexity: "College"
    },
    {
        word: "olives",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "omelet",
        complexity: "High School"
    },
    {
        word: "onding",
        complexity: "High School"
    },
    {
        word: "online",
        complexity: "Elementary"
    },
    {
        word: "onload",
        complexity: "High School"
    },
    {
        word: "opaque",
        complexity: "Middle School"
    },
    {
        word: "opiate",
        complexity: "High School"
    },
    {
        word: "opined",
        complexity: "unknown"
    },
    {
        word: "opioid",
        complexity: "High School"
    },
    {
        word: "oppose",
        complexity: "Middle School"
    },
    {
        word: "optics",
        complexity: "Middle School"
    },
    {
        word: "optima",
        complexity: "unknown"
    },
    {
        word: "option",
        complexity: "Elementary"
    },
    {
        word: "orache",
        complexity: "unknown"
    },
    {
        word: "oracle",
        complexity: "Middle School"
    },
    {
        word: "orants",
        complexity: "Middle School"
    },
    {
        word: "orator",
        complexity: "Middle School"
    },
    {
        word: "orbier",
        complexity: "Post-College"
    },
    {
        word: "orbing",
        complexity: "Middle School"
    },
    {
        word: "orcein",
        complexity: "College"
    },
    {
        word: "ordeal",
        complexity: "Middle School"
    },
    {
        word: "ordure",
        complexity: "College"
    },
    {
        word: "orenda",
        complexity: "High School"
    },
    {
        word: "orfray",
        complexity: "unknown"
    },
    {
        word: "organs",
        complexity: "unknown"
    },
    {
        word: "orient",
        complexity: "Middle School"
    },
    {
        word: "origin",
        complexity: "Elementary"
    },
    {
        word: "orison",
        complexity: "College"
    },
    {
        word: "ornate",
        complexity: "Middle School"
    },
    {
        word: "ornery",
        complexity: "College"
    },
    {
        word: "oroide",
        complexity: "College"
    },
    {
        word: "orphan",
        complexity: "Middle School"
    },
    {
        word: "osprey",
        complexity: "High School"
    },
    {
        word: "ossify",
        complexity: "Post-College"
    },
    {
        word: "ouched",
        complexity: "Middle School"
    },
    {
        word: "oughts",
        complexity: "unknown"
    },
    {
        word: "ounces",
        complexity: "Middle School"
    },
    {
        word: "ourari",
        complexity: "High School"
    },
    {
        word: "outate",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "outcry",
        complexity: "Middle School"
    },
    // {
    //     word: "outcut",
    //     isCapitalized: true,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    {
        word: "outeat",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "outfed",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "outfit",
        complexity: "Middle School"
    },
    {
        word: "outfly",
        complexity: "High School"
    },
    {
        word: "outing",
        complexity: "Middle School"
    },
    {
        word: "outlaw",
        complexity: "Middle School"
    },
    {
        word: "outlet",
        complexity: "Elementary"
    },
    {
        word: "outman",
        complexity: "High School"
    },
    {
        word: "output",
        complexity: "Elementary"
    },
    {
        word: "outran",
        complexity: "High School"
    },
    {
        word: "outrun",
        complexity: "High School"
    },
    {
        word: "outsat",
        complexity: "High School"
    },
    {
        word: "outset",
        complexity: "Middle School"
    },
    {
        word: "outsit",
        complexity: "High School"
    },
    {
        word: "outspy",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "outvie",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "outwit",
        complexity: "High School"
    },
    {
        word: "oxtail",
        complexity: "Post-College"
    },
    {
        word: "oxygen",
        complexity: "Middle School"
    },
    {
        word: "oyeses",
        complexity: "Post-College"
    },
    {
        word: "ozonic",
        complexity: "Middle School"
    },
    {
        word: "pacify",
        complexity: "College"
    },
    {
        word: "packer",
        complexity: "High School"
    },
    {
        word: "packet",
        complexity: "Elementary"
    },
    {
        word: "padded",
        complexity: "unknown"
    },
    {
        word: "padeye",
        complexity: "High School"
    },
    {
        word: "padouk",
        complexity: "Post-College"
    },
    {
        word: "paella",
        complexity: "High School"
    },
    {
        word: "paging",
        complexity: "Middle School"
    },
    {
        word: "paired",
        complexity: "Elementary"
    },
    {
        word: "pairle",
        complexity: "Middle School"
    },
    {
        word: "pajama",
        complexity: "Post-College"
    },
    {
        word: "palace",
        complexity: "Elementary"
    },
    {
        word: "palate",
        complexity: "Middle School"
    },
    {
        word: "palely",
        complexity: "Elementary"
    },
    {
        word: "palila",
        complexity: "College"
    },
    {
        word: "palled",
        complexity: "unknown"
    },
    {
        word: "pallet",
        complexity: "Middle School"
    },
    {
        word: "palpal",
        complexity: "High School"
    },
    {
        word: "palpus",
        complexity: "College"
    },
    {
        word: "paltry",
        complexity: "High School"
    },
    {
        word: "pampas",
        complexity: "Post-College"
    },
    {
        word: "pamper",
        complexity: "High School"
    },
    {
        word: "panada",
        complexity: "High School"
    },
    {
        word: "pandal",
        complexity: "High School"
    },
    {
        word: "panful",
        complexity: "College"
    },
    {
        word: "panini",
        complexity: "College"
    },
    {
        word: "papacy",
        complexity: "College"
    },
    {
        word: "papain",
        complexity: "Post-College"
    },
    {
        word: "papist",
        complexity: "College"
    },
    {
        word: "parade",
        complexity: "Elementary"
    },
    {
        word: "paramo",
        complexity: "College"
    },
    {
        word: "paraph",
        complexity: "Post-College"
    },
    {
        word: "parcel",
        complexity: "Middle School"
    },
    {
        word: "pardon",
        complexity: "Middle School"
    },
    {
        word: "parens",
        complexity: "High School"
    },
    {
        word: "parent",
        complexity: "Elementary"
    },
    {
        word: "pariah",
        complexity: "College"
    },
    {
        word: "parish",
        complexity: "Middle School"
    },
    {
        word: "parity",
        complexity: "Elementary"
    },
    {
        word: "parked",
        complexity: "unknown"
    },
    {
        word: "parody",
        complexity: "Middle School"
    },
    {
        word: "parrot",
        complexity: "Middle School"
    },
    {
        word: "partis",
        complexity: "High School"
    },
    {
        word: "parure",
        complexity: "Middle School"
    },
    {
        word: "parvis",
        complexity: "Post-College"
    },
    {
        word: "pascal",
        complexity: "High School"
    },
    {
        word: "pashas",
        complexity: "Post-College"
    },
    {
        word: "paskha",
        complexity: "College"
    },
    {
        word: "passed",
        complexity: "Elementary"
    },
    {
        word: "passel",
        complexity: "College"
    },
    {
        word: "passer",
        complexity: "Middle School"
    },
    {
        word: "passim",
        complexity: "High School"
    },
    {
        word: "passus",
        complexity: "High School"
    },
    {
        word: "pasted",
        complexity: "unknown"
    },
    {
        word: "pastel",
        complexity: "Middle School"
    },
    {
        word: "paster",
        complexity: "College"
    },
    {
        word: "pastis",
        complexity: "College"
    },
    {
        word: "pastor",
        complexity: "Middle School"
    },
    {
        word: "pastry",
        complexity: "Middle School"
    },
    {
        word: "patent",
        complexity: "Elementary"
    },
    {
        word: "pathos",
        complexity: "Middle School"
    },
    {
        word: "patine",
        complexity: "Middle School"
    },
    {
        word: "patios",
        complexity: "Elementary"
    },
    {
        word: "patois",
        complexity: "College"
    },
    {
        word: "patrol",
        complexity: "Middle School"
    },
    {
        word: "patron",
        complexity: "Middle School"
    },
    {
        word: "patten",
        complexity: "College"
    },
    {
        word: "pawing",
        complexity: "Middle School"
    },
    {
        word: "payday",
        complexity: "Elementary"
    },
    {
        word: "paying",
        complexity: "Elementary"
    },
    {
        word: "peaked",
        complexity: "Elementary"
    },
    {
        word: "peasen",
        complexity: "Middle School"
    },
    {
        word: "pebble",
        complexity: "High School"
    },
    {
        word: "pecked",
        complexity: "High School"
    },
    {
        word: "pecten",
        complexity: "High School"
    },
    {
        word: "pectin",
        complexity: "High School"
    },
    {
        word: "pedant",
        complexity: "College"
    },
    {
        word: "peddle",
        complexity: "High School"
    },
    {
        word: "pedlar",
        complexity: "College"
    },
    {
        word: "pedler",
        complexity: "College"
    },
    {
        word: "pedway",
        complexity: "College"
    },
    {
        word: "peeled",
        complexity: "Middle School"
    },
    {
        word: "peeler",
        complexity: "High School"
    },
    {
        word: "peened",
        complexity: "unknown"
    },
    {
        word: "peeped",
        complexity: "Middle School"
    },
    {
        word: "peewit",
        complexity: "College"
    },
    {
        word: "pegbox",
        complexity: "Post-College"
    },
    {
        word: "pegged",
        complexity: "unknown"
    },
    {
        word: "pelage",
        complexity: "College"
    },
    {
        word: "pellet",
        complexity: "Middle School"
    },
    {
        word: "pelota",
        complexity: "College"
    },
    {
        word: "pencil",
        complexity: "Middle School"
    },
    {
        word: "penile",
        complexity: "unknown"
    },
    {
        word: "penman",
        complexity: "College"
    },
    {
        word: "penner",
        complexity: "Elementary"
    },
    {
        word: "pensee",
        complexity: "unknown"
    },
    {
        word: "penury",
        complexity: "Post-College"
    },
    {
        word: "people",
        complexity: "Elementary"
    },
    {
        word: "peplum",
        complexity: "Post-College"
    },
    {
        word: "pereia",
        complexity: "High School"
    },
    {
        word: "permed",
        complexity: "Middle School"
    },
    {
        word: "person",
        complexity: "Elementary"
    },
    {
        word: "peseta",
        complexity: "College"
    },
    {
        word: "pester",
        complexity: "High School"
    },
    {
        word: "petite",
        complexity: "Middle School"
    },
    {
        word: "pettle",
        complexity: "Middle School"
    },
    {
        word: "phalli",
        complexity: "High School"
    },
    {
        word: "phasic",
        complexity: "unknown"
    },
    {
        word: "phasis",
        complexity: "High School"
    },
    {
        word: "phasor",
        complexity: "High School"
    },
    {
        word: "phenol",
        complexity: "High School"
    },
    {
        word: "phenom",
        complexity: "High School"
    },
    {
        word: "phlegm",
        complexity: "College"
    },
    {
        word: "phloem",
        complexity: "College"
    },
    {
        word: "phobia",
        complexity: "Middle School"
    },
    {
        word: "phobic",
        complexity: "College"
    },
    {
        word: "phonal",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "phoned",
        complexity: "Elementary"
    },
    {
        word: "phoney",
        complexity: "College"
    },
    {
        word: "phonon",
        complexity: "High School"
    },
    {
        word: "phooey",
        complexity: "Post-College"
    },
    {
        word: "phrase",
        complexity: "Elementary"
    },
    {
        word: "phreak",
        complexity: "Middle School"
    },
    {
        word: "phylae",
        complexity: "Post-College"
    },
    {
        word: "phyllo",
        complexity: "Post-College"
    },
    {
        word: "phylum",
        complexity: "Post-College"
    },
    {
        word: "physes",
        complexity: "College"
    },
    {
        word: "physis",
        complexity: "College"
    },
    {
        word: "pianic",
        complexity: "High School"
    },
    {
        word: "picker",
        complexity: "High School"
    },
    {
        word: "picket",
        complexity: "Middle School"
    },
    {
        word: "pickle",
        complexity: "Middle School"
    },
    {
        word: "pickup",
        complexity: "Middle School"
    },
    {
        word: "picnic",
        complexity: "Middle School"
    },
    {
        word: "pidgin",
        complexity: "Post-College"
    },
    {
        word: "pierce",
        complexity: "Middle School"
    },
    {
        word: "piffle",
        complexity: "Post-College"
    },
    {
        word: "piggin",
        complexity: "High School"
    },
    {
        word: "pignut",
        complexity: "Post-College"
    },
    {
        word: "pigsty",
        complexity: "Post-College"
    },
    {
        word: "pikake",
        complexity: "Post-College"
    },
    {
        word: "piking",
        complexity: "unknown"
    },
    {
        word: "pileup",
        complexity: "High School"
    },
    {
        word: "piling",
        complexity: "Elementary"
    },
    {
        word: "pillar",
        complexity: "Middle School"
    },
    {
        word: "pilons",
        complexity: "High School"
    },
    {
        word: "pilose",
        complexity: "College"
    },
    {
        word: "pilots",
        complexity: "Elementary"
    },
    {
        word: "pilule",
        complexity: "College"
    },
    {
        word: "pimple",
        complexity: "College"
    },
    {
        word: "pimply",
        complexity: "Post-College"
    },
    {
        word: "pinang",
        complexity: "High School"
    },
    {
        word: "pinard",
        complexity: "High School"
    },
    {
        word: "pinata",
        complexity: "unknown"
    },
    {
        word: "pindan",
        complexity: "High School"
    },
    {
        word: "pineal",
        complexity: "High School"
    },
    {
        word: "pinene",
        complexity: "High School"
    },
    {
        word: "pining",
        complexity: "unknown"
    },
    {
        word: "pinked",
        complexity: "Elementary"
    },
    {
        word: "pinker",
        complexity: "Elementary"
    },
    {
        word: "pipped",
        complexity: "unknown"
    },
    {
        word: "pippin",
        complexity: "Post-College"
    },
    {
        word: "pirate",
        complexity: "Middle School"
    },
    {
        word: "pistil",
        complexity: "College"
    },
    {
        word: "pistol",
        complexity: "Middle School"
    },
    {
        word: "pitaya",
        complexity: "unknown"
    },
    {
        word: "pitier",
        complexity: "High School"
    },
    {
        word: "pivots",
        complexity: "Middle School"
    },
    {
        word: "placas",
        complexity: "Middle School"
    },
    {
        word: "placid",
        complexity: "High School"
    },
    {
        word: "plagal",
        complexity: "High School"
    },
    {
        word: "plaice",
        complexity: "College"
    },
    {
        word: "plaint",
        complexity: "College"
    },
    {
        word: "planar",
        complexity: "Middle School"
    },
    {
        word: "planch",
        complexity: "Elementary"
    },
    {
        word: "planer",
        complexity: "High School"
    },
    {
        word: "planes",
        complexity: "Elementary"
    },
    {
        word: "planet",
        complexity: "Elementary"
    },
    {
        word: "plaque",
        complexity: "Middle School"
    },
    {
        word: "plater",
        complexity: "College"
    },
    {
        word: "please",
        complexity: "Elementary"
    },
    {
        word: "pleiad",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "plenty",
        complexity: "Elementary"
    },
    {
        word: "plenum",
        complexity: "High School"
    },
    {
        word: "plexus",
        complexity: "High School"
    },
    {
        word: "pliant",
        complexity: "High School"
    },
    {
        word: "plight",
        complexity: "Middle School"
    },
    {
        word: "plinth",
        complexity: "High School"
    },
    {
        word: "plombs",
        complexity: "Middle School"
    },
    {
        word: "ployed",
        complexity: "Middle School"
    },
    {
        word: "plumed",
        complexity: "Post-College"
    },
    {
        word: "plunge",
        complexity: "Middle School"
    },
    {
        word: "plural",
        complexity: "Middle School"
    },
    {
        word: "pluses",
        complexity: "unknown"
    },
    {
        word: "plushy",
        complexity: "Post-College"
    },
    {
        word: "plying",
        complexity: "unknown"
    },
    {
        word: "podite",
        complexity: "High School"
    },
    {
        word: "podium",
        complexity: "Middle School"
    },
    {
        word: "podzol",
        complexity: "unknown"
    },
    {
        word: "poetic",
        complexity: "Middle School"
    },
    {
        word: "poetry",
        complexity: "Elementary"
    },
    {
        word: "poises",
        complexity: "Middle School"
    },
    {
        word: "poison",
        complexity: "Middle School"
    },
    {
        word: "polity",
        complexity: "High School"
    },
    {
        word: "pollen",
        complexity: "Middle School"
    },
    {
        word: "polyol",
        complexity: "College"
    },
    {
        word: "ponder",
        complexity: "Middle School"
    },
    {
        word: "pooing",
        complexity: "Middle School"
    },
    {
        word: "poplin",
        complexity: "College"
    },
    {
        word: "popple",
        complexity: "College"
    },
    {
        word: "portal",
        complexity: "Elementary"
    },
    {
        word: "portly",
        complexity: "High School"
    },
    {
        word: "posada",
        complexity: "High School"
    },
    {
        word: "posies",
        complexity: "unknown"
    },
    {
        word: "posing",
        complexity: "unknown"
    },
    {
        word: "posset",
        complexity: "College"
    },
    {
        word: "potage",
        complexity: "College"
    },
    {
        word: "potash",
        complexity: "High School"
    },
    {
        word: "potato",
        complexity: "Elementary"
    },
    {
        word: "poteen",
        complexity: "College"
    },
    {
        word: "potent",
        complexity: "Middle School"
    },
    {
        word: "pother",
        complexity: "College"
    },
    {
        word: "pothos",
        complexity: "College"
    },
    {
        word: "pouffy",
        complexity: "Post-College"
    },
    {
        word: "pouter",
        complexity: "College"
    },
    {
        word: "praise",
        complexity: "Elementary"
    },
    {
        word: "prance",
        complexity: "College"
    },
    {
        word: "pranky",
        complexity: "High School"
    },
    {
        word: "praxis",
        complexity: "College"
    },
    {
        word: "prayer",
        complexity: "Elementary"
    },
    {
        word: "preach",
        complexity: "Middle School"
    },
    {
        word: "preage",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "prefab",
        complexity: "High School"
    },
    {
        word: "prefer",
        complexity: "Elementary"
    },
    {
        word: "preset",
        complexity: "Middle School"
    },
    {
        word: "pretty",
        complexity: "Elementary"
    },
    {
        word: "preyer",
        complexity: "Middle School"
    },
    {
        word: "pricky",
        complexity: "High School"
    },
    {
        word: "prided",
        complexity: "unknown"
    },
    {
        word: "primal",
        complexity: "Middle School"
    },
    {
        word: "primly",
        complexity: "unknown"
    },
    {
        word: "prince",
        complexity: "Middle School"
    },
    {
        word: "prints",
        complexity: "Elementary"
    },
    {
        word: "priory",
        complexity: "High School"
    },
    {
        word: "prison",
        complexity: "Elementary"
    },
    {
        word: "prissy",
        complexity: "Post-College"
    },
    {
        word: "privet",
        complexity: "High School"
    },
    {
        word: "probie",
        complexity: "College"
    },
    {
        word: "profit",
        complexity: "Elementary"
    },
    {
        word: "projet",
        complexity: "Post-College"
    },
    {
        word: "prompt",
        complexity: "Elementary"
    },
    {
        word: "propel",
        complexity: "Middle School"
    },
    {
        word: "proper",
        complexity: "Elementary"
    },
    {
        word: "prosed",
        complexity: "Middle School"
    },
    {
        word: "prosit",
        complexity: "Middle School"
    },
    {
        word: "proven",
        complexity: "unknown"
    },
    {
        word: "pseudo",
        complexity: "Middle School"
    },
    {
        word: "psycho",
        complexity: "Middle School"
    },
    {
        word: "ptotic",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "public",
        complexity: "Elementary"
    },
    {
        word: "puddle",
        complexity: "Middle School"
    },
    {
        word: "puller",
        complexity: "unknown"
    },
    {
        word: "pulpit",
        complexity: "Middle School"
    },
    {
        word: "pulsar",
        complexity: "High School"
    },
    {
        word: "pummel",
        complexity: "Post-College"
    },
    {
        word: "punchy",
        complexity: "College"
    },
    {
        word: "pundit",
        complexity: "Middle School"
    },
    {
        word: "punkin",
        complexity: "Post-College"
    },
    {
        word: "puppet",
        complexity: "Middle School"
    },
    {
        word: "purfle",
        complexity: "Post-College"
    },
    {
        word: "purify",
        complexity: "Middle School"
    },
    {
        word: "purist",
        complexity: "unknown"
    },
    {
        word: "purity",
        complexity: "Middle School"
    },
    {
        word: "purple",
        complexity: "Middle School"
    },
    {
        word: "purree",
        complexity: "College"
    },
    {
        word: "purser",
        complexity: "College"
    },
    {
        word: "pursue",
        complexity: "Elementary"
    },
    {
        word: "purvey",
        complexity: "Post-College"
    },
    {
        word: "putter",
        complexity: "Middle School"
    },
    {
        word: "python",
        complexity: "Elementary"
    },
    {
        word: "pyuria",
        complexity: "Post-College"
    },
    {
        word: "quagga",
        complexity: "High School"
    },
    {
        word: "quails",
        complexity: "Middle School"
    },
    {
        word: "quaint",
        complexity: "Middle School"
    },
    {
        word: "qualms",
        complexity: "unknown"
    },
    {
        word: "quanta",
        complexity: "High School"
    },
    {
        word: "quarte",
        complexity: "Middle School"
    },
    {
        word: "quarto",
        complexity: "College"
    },
    {
        word: "quarts",
        complexity: "Middle School"
    },
    {
        word: "quatre",
        complexity: "High School"
    },
    {
        word: "quatro",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "quaver",
        complexity: "Post-College"
    },
    {
        word: "queasy",
        complexity: "College"
    },
    {
        word: "quench",
        complexity: "High School"
    },
    {
        word: "queued",
        complexity: "unknown"
    },
    {
        word: "queuer",
        complexity: "Middle School"
    },
    {
        word: "quinoa",
        complexity: "College"
    },
    {
        word: "quitch",
        complexity: "Post-College"
    },
    {
        word: "quiver",
        complexity: "High School"
    },
    {
        word: "quoits",
        complexity: "unknown"
    },
    {
        word: "quorum",
        complexity: "Middle School"
    },
    {
        word: "quoter",
        complexity: "unknown"
    },
    {
        word: "quotes",
        complexity: "Elementary"
    },
    {
        word: "quotha",
        complexity: "Post-College"
    },
    {
        word: "rabbit",
        complexity: "Middle School"
    },
    {
        word: "racier",
        complexity: "High School"
    },
    {
        word: "racily",
        complexity: "High School"
    },
    {
        word: "racism",
        complexity: "Middle School"
    },
    {
        word: "racket",
        complexity: "Middle School"
    },
    {
        word: "radars",
        complexity: "Elementary"
    },
    {
        word: "radial",
        complexity: "Middle School"
    },
    {
        word: "radish",
        complexity: "High School"
    },
    {
        word: "radium",
        complexity: "College"
    },
    {
        word: "raffee",
        complexity: "High School"
    },
    {
        word: "raffle",
        complexity: "Middle School"
    },
    {
        word: "ragman",
        complexity: "High School"
    },
    {
        word: "raided",
        complexity: "unknown"
    },
    {
        word: "raider",
        complexity: "Middle School"
    },
    {
        word: "railed",
        complexity: "unknown"
    },
    {
        word: "rained",
        complexity: "Elementary"
    },
    {
        word: "raised",
        complexity: "Elementary"
    },
    {
        word: "raisin",
        complexity: "Middle School"
    },
    {
        word: "raking",
        complexity: "unknown"
    },
    {
        word: "rakish",
        complexity: "Post-College"
    },
    {
        word: "ramble",
        complexity: "High School"
    },
    {
        word: "ramify",
        complexity: "Post-College"
    },
    {
        word: "ramjet",
        complexity: "Post-College"
    },
    {
        word: "ramson",
        complexity: "High School"
    },
    {
        word: "rancid",
        complexity: "Middle School"
    },
    {
        word: "rancor",
        complexity: "College"
    },
    {
        word: "random",
        complexity: "Elementary"
    },
    {
        word: "ranger",
        complexity: "Middle School"
    },
    {
        word: "rankly",
        complexity: "Elementary"
    },
    {
        word: "ransom",
        complexity: "Middle School"
    },
    {
        word: "rapier",
        complexity: "High School"
    },
    {
        word: "rapini",
        complexity: "College"
    },
    {
        word: "rapist",
        complexity: "unknown"
    },
    {
        word: "rappee",
        complexity: "Post-College"
    },
    {
        word: "rapper",
        complexity: "Middle School"
    },
    {
        word: "rarefy",
        complexity: "Post-College"
    },
    {
        word: "rarely",
        complexity: "Elementary"
    },
    {
        word: "rarity",
        complexity: "Middle School"
    },
    {
        word: "rashly",
        complexity: "unknown"
    },
    {
        word: "rasped",
        complexity: "College"
    },
    {
        word: "rassle",
        complexity: "Middle School"
    },
    {
        word: "raster",
        complexity: "Middle School"
    },
    {
        word: "ratify",
        complexity: "Middle School"
    },
    {
        word: "ration",
        complexity: "Middle School"
    },
    {
        word: "ratios",
        complexity: "Elementary"
    },
    {
        word: "rattan",
        complexity: "Middle School"
    },
    {
        word: "ravine",
        complexity: "Middle School"
    },
    {
        word: "raving",
        complexity: "Middle School"
    },
    {
        word: "ravish",
        complexity: "Post-College"
    },
    {
        word: "reachs",
        complexity: "Elementary"
    },
    {
        word: "really",
        complexity: "High School"
    },
    {
        word: "realms",
        complexity: "Elementary"
    },
    {
        word: "realty",
        complexity: "Middle School"
    },
    {
        word: "reaper",
        complexity: "Middle School"
    },
    {
        word: "reason",
        complexity: "Elementary"
    },
    {
        word: "reated",
        isCapitalized: true,
        complexity: "High School"
    },
    {
        word: "rebait",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "rebate",
        complexity: "Elementary"
    },
    {
        word: "rebuke",
        complexity: "High School"
    },
    {
        word: "recall",
        complexity: "Elementary"
    },
    {
        word: "recede",
        complexity: "High School"
    },
    {
        word: "recent",
        complexity: "Elementary"
    },
    {
        word: "recess",
        complexity: "Middle School"
    },
    {
        word: "recite",
        complexity: "Middle School"
    },
    {
        word: "reckon",
        complexity: "Middle School"
    },
    {
        word: "reclad",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "recoin",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "recopy",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "record",
        complexity: "Elementary"
    },
    {
        word: "recoup",
        complexity: "Middle School"
    },
    {
        word: "rector",
        complexity: "Middle School"
    },
    {
        word: "recuse",
        complexity: "High School"
    },
    {
        word: "redact",
        complexity: "College"
    },
    {
        word: "reddle",
        complexity: "College"
    },
    {
        word: "redeem",
        complexity: "Middle School"
    },
    {
        word: "reduce",
        complexity: "Elementary"
    },
    {
        word: "reduct",
        complexity: "High School"
    },
    {
        word: "reefed",
        complexity: "Middle School"
    },
    {
        word: "reefer",
        complexity: "High School"
    },
    {
        word: "reemit",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "reeved",
        complexity: "College"
    },
    {
        word: "refeed",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "refelt",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "refers",
        complexity: "unknown"
    },
    {
        word: "refill",
        complexity: "Middle School"
    },
    {
        word: "reform",
        complexity: "High School"
    },
    {
        word: "refuge",
        complexity: "Middle School"
    },
    {
        word: "refuse",
        complexity: "Elementary"
    },
    {
        word: "refute",
        complexity: "Middle School"
    },
    {
        word: "regale",
        complexity: "College"
    },
    {
        word: "regard",
        complexity: "Elementary"
    },
    {
        word: "regent",
        complexity: "Middle School"
    },
    {
        word: "reggae",
        complexity: "Middle School"
    },
    {
        word: "regina",
        complexity: "High School"
    },
    {
        word: "region",
        complexity: "Elementary"
    },
    {
        word: "regive",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "regret",
        complexity: "Elementary"
    },
    {
        word: "rehash",
        complexity: "High School"
    },
    {
        word: "reject",
        complexity: "Middle School"
    },
    {
        word: "relace",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "relate",
        complexity: "Elementary"
    },
    {
        word: "relend",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "relent",
        complexity: "High School"
    },
    {
        word: "relevy",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "relict",
        complexity: "High School"
    },
    {
        word: "relish",
        complexity: "Middle School"
    },
    {
        word: "remain",
        complexity: "Elementary"
    },
    {
        word: "remand",
        complexity: "Middle School"
    },
    {
        word: "remark",
        complexity: "Middle School"
    },
    {
        word: "remedy",
        complexity: "Middle School"
    },
    {
        word: "remend",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "remind",
        complexity: "Elementary"
    },
    {
        word: "remise",
        complexity: "College"
    },
    {
        word: "remiss",
        complexity: "High School"
    },
    {
        word: "remits",
        complexity: "Middle School"
    },
    {
        word: "remote",
        complexity: "Elementary"
    },
    {
        word: "render",
        complexity: "Elementary"
    },
    {
        word: "renege",
        complexity: "College"
    },
    {
        word: "renown",
        complexity: "Middle School"
    },
    {
        word: "renter",
        complexity: "Middle School"
    },
    {
        word: "reopen",
        complexity: "Middle School"
    },
    {
        word: "repair",
        complexity: "Elementary"
    },
    {
        word: "repast",
        complexity: "High School"
    },
    {
        word: "repeal",
        complexity: "Middle School"
    },
    {
        word: "repeat",
        complexity: "Elementary"
    },
    {
        word: "repent",
        complexity: "Middle School"
    },
    {
        word: "replan",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "replay",
        complexity: "Middle School"
    },
    {
        word: "repled",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "replot",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "replow",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "report",
        complexity: "Elementary"
    },
    {
        word: "repose",
        complexity: "Middle School"
    },
    {
        word: "repute",
        complexity: "High School"
    },
    {
        word: "rerise",
        complexity: "Elementary"
    },
    {
        word: "reseau",
        complexity: "College"
    },
    {
        word: "resent",
        complexity: "Middle School"
    },
    {
        word: "reshod",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "resign",
        complexity: "Middle School"
    },
    {
        word: "resile",
        complexity: "College"
    },
    {
        word: "resist",
        complexity: "Elementary"
    },
    {
        word: "resole",
        complexity: "College"
    },
    {
        word: "resorb",
        complexity: "College"
    },
    {
        word: "resort",
        complexity: "High School"
    },
    {
        word: "respot",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "resuit",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "result",
        complexity: "Elementary"
    },
    {
        word: "resume",
        complexity: "Elementary"
    },
    {
        word: "retain",
        complexity: "Elementary"
    },
    {
        word: "retcon",
        complexity: "High School"
    },
    {
        word: "retell",
        complexity: "High School"
    },
    {
        word: "retire",
        complexity: "Elementary"
    },
    {
        word: "retold",
        complexity: "High School"
    },
    {
        word: "retool",
        complexity: "College"
    },
    {
        word: "retort",
        complexity: "Middle School"
    },
    {
        word: "retype",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "reused",
        complexity: "Middle School"
    },
    {
        word: "reveal",
        complexity: "Elementary"
    },
    {
        word: "reverb",
        complexity: "High School"
    },
    {
        word: "revere",
        complexity: "High School"
    },
    {
        word: "revert",
        complexity: "Middle School"
    },
    {
        word: "revery",
        complexity: "High School"
    },
    {
        word: "revest",
        complexity: "Middle School"
    },
    {
        word: "review",
        complexity: "Elementary"
    },
    {
        word: "revise",
        complexity: "Middle School"
    },
    {
        word: "revive",
        complexity: "Middle School"
    },
    {
        word: "revoke",
        complexity: "Middle School"
    },
    {
        word: "revolt",
        complexity: "Middle School"
    },
    {
        word: "revote",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "rewind",
        complexity: "Middle School"
    },
    {
        word: "rewrap",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "rhythm",
        complexity: "Middle School"
    },
    {
        word: "ribald",
        complexity: "College"
    },
    {
        word: "richer",
        complexity: "unknown"
    },
    {
        word: "ricing",
        complexity: "Elementary"
    },
    {
        word: "ridded",
        complexity: "Elementary"
    },
    {
        word: "ridged",
        complexity: "unknown"
    },
    {
        word: "riding",
        complexity: "Elementary"
    },
    {
        word: "riffle",
        complexity: "College"
    },
    {
        word: "rifted",
        complexity: "Middle School"
    },
    {
        word: "rigged",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "righto",
        complexity: "College"
    },
    {
        word: "rioter",
        complexity: "unknown"
    },
    {
        word: "ripper",
        complexity: "Middle School"
    },
    {
        word: "rising",
        complexity: "Elementary"
    },
    {
        word: "risker",
        complexity: "Elementary"
    },
    {
        word: "risque",
        complexity: "unknown"
    },
    {
        word: "ritual",
        complexity: "Middle School"
    },
    {
        word: "rivage",
        complexity: "College"
    },
    {
        word: "rivets",
        complexity: "unknown"
    },
    {
        word: "roadie",
        complexity: "High School"
    },
    {
        word: "roarer",
        complexity: "Middle School"
    },
    {
        word: "robalo",
        complexity: "College"
    },
    {
        word: "robber",
        complexity: "Middle School"
    },
    {
        word: "robots",
        complexity: "Elementary"
    },
    {
        word: "robust",
        complexity: "Elementary"
    },
    {
        word: "rocket",
        complexity: "Middle School"
    },
    {
        word: "rococo",
        complexity: "Post-College"
    },
    {
        word: "rodded",
        complexity: "High School"
    },
    {
        word: "rodeos",
        complexity: "Middle School"
    },
    {
        word: "roofie",
        complexity: "Middle School"
    },
    {
        word: "rosets",
        complexity: "High School"
    },
    {
        word: "roster",
        complexity: "Middle School"
    },
    {
        word: "rotate",
        complexity: "Middle School"
    },
    {
        word: "rotten",
        complexity: "Middle School"
    },
    {
        word: "rotter",
        complexity: "College"
    },
    {
        word: "rottes",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "rotund",
        complexity: "College"
    },
    {
        word: "rounds",
        complexity: "Elementary"
    },
    {
        word: "rouser",
        complexity: "unknown"
    },
    {
        word: "rubied",
        complexity: "Post-College"
    },
    {
        word: "rubric",
        complexity: "Middle School"
    },
    {
        word: "rudest",
        complexity: "unknown"
    },
    {
        word: "rueful",
        complexity: "Post-College"
    },
    {
        word: "ruined",
        complexity: "unknown"
    },
    {
        word: "runlet",
        complexity: "unknown"
    },
    {
        word: "runout",
        complexity: "College"
    },
    {
        word: "rutile",
        complexity: "College"
    },
    {
        word: "rutter",
        complexity: "High School"
    },
    {
        word: "sabalo",
        complexity: "College"
    },
    {
        word: "sabbat",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "sabora",
        complexity: "High School"
    },
    {
        word: "sachem",
        complexity: "Post-College"
    },
    {
        word: "sachet",
        complexity: "High School"
    },
    {
        word: "sacker",
        complexity: "High School"
    },
    {
        word: "sacral",
        complexity: "High School"
    },
    {
        word: "sacred",
        complexity: "Elementary"
    },
    {
        word: "sacrum",
        complexity: "High School"
    },
    {
        word: "sadden",
        complexity: "College"
    },
    {
        word: "saddle",
        complexity: "Middle School"
    },
    {
        word: "sadism",
        complexity: "Middle School"
    },
    {
        word: "sadist",
        complexity: "High School"
    },
    {
        word: "safari",
        complexity: "Middle School"
    },
    {
        word: "safely",
        complexity: "unknown"
    },
    {
        word: "safety",
        complexity: "Elementary"
    },
    {
        word: "sagged",
        complexity: "unknown"
    },
    {
        word: "salaam",
        complexity: "College"
    },
    {
        word: "salary",
        complexity: "Elementary"
    },
    {
        word: "salute",
        complexity: "Middle School"
    },
    {
        word: "salver",
        complexity: "College"
    },
    {
        word: "samekh",
        complexity: "Post-College"
    },
    {
        word: "sample",
        complexity: "Elementary"
    },
    {
        word: "sanity",
        complexity: "Middle School"
    },
    {
        word: "sanjak",
        complexity: "High School"
    },
    {
        word: "santir",
        complexity: "High School"
    },
    {
        word: "sateen",
        complexity: "High School"
    },
    {
        word: "satiny",
        complexity: "College"
    },
    {
        word: "satire",
        complexity: "Middle School"
    },
    {
        word: "saucer",
        complexity: "Middle School"
    },
    {
        word: "savage",
        complexity: "Middle School"
    },
    {
        word: "savory",
        complexity: "High School"
    },
    {
        word: "sawyer",
        complexity: "College"
    },
    {
        word: "sayest",
        complexity: "Middle School"
    },
    {
        word: "saying",
        complexity: "Elementary"
    },
    {
        word: "scared",
        complexity: "unknown"
    },
    {
        word: "scarer",
        complexity: "Middle School"
    },
    {
        word: "scathe",
        complexity: "College"
    },
    {
        word: "schema",
        complexity: "Middle School"
    },
    {
        word: "scheme",
        complexity: "Elementary"
    },
    {
        word: "schism",
        complexity: "High School"
    },
    {
        word: "schist",
        complexity: "High School"
    },
    {
        word: "schnoz",
        complexity: "Post-College"
    },
    {
        word: "school",
        complexity: "Elementary"
    },
    {
        word: "schuln",
        complexity: "Middle School"
    },
    {
        word: "schwag",
        complexity: "Middle School"
    },
    {
        word: "scivvy",
        complexity: "Post-College"
    },
    {
        word: "sconce",
        complexity: "High School"
    },
    {
        word: "scores",
        complexity: "Elementary"
    },
    {
        word: "scotch",
        complexity: "High School"
    },
    {
        word: "scouth",
        complexity: "High School"
    },
    {
        word: "scream",
        complexity: "Middle School"
    },
    {
        word: "screed",
        complexity: "High School"
    },
    {
        word: "screen",
        complexity: "Elementary"
    },
    {
        word: "scrimp",
        complexity: "Post-College"
    },
    {
        word: "scrota",
        complexity: "High School"
    },
    {
        word: "scurry",
        complexity: "College"
    },
    {
        word: "scutch",
        complexity: "Middle School"
    },
    {
        word: "scuzzy",
        complexity: "Post-College"
    },
    {
        word: "seabed",
        complexity: "Middle School"
    },
    {
        word: "seaman",
        complexity: "Middle School"
    },
    {
        word: "seamer",
        complexity: "unknown"
    },
    {
        word: "seance",
        complexity: "unknown"
    },
    {
        word: "search",
        complexity: "Elementary"
    },
    {
        word: "season",
        complexity: "Elementary"
    },
    {
        word: "second",
        complexity: "Elementary"
    },
    {
        word: "secret",
        complexity: "Elementary"
    },
    {
        word: "sector",
        complexity: "Elementary"
    },
    {
        word: "secure",
        complexity: "Elementary"
    },
    {
        word: "sedans",
        complexity: "Middle School"
    },
    {
        word: "sedate",
        complexity: "High School"
    },
    {
        word: "seduce",
        complexity: "Middle School"
    },
    {
        word: "seeing",
        complexity: "Elementary"
    },
    {
        word: "seethe",
        complexity: "College"
    },
    {
        word: "segway",
        complexity: "Post-College"
    },
    {
        word: "seisin",
        complexity: "High School"
    },
    {
        word: "seized",
        complexity: "unknown"
    },
    {
        word: "seizes",
        complexity: "Middle School"
    },
    {
        word: "seldom",
        complexity: "Middle School"
    },
    {
        word: "senary",
        complexity: "High School"
    },
    {
        word: "sendee",
        complexity: "College"
    },
    {
        word: "sender",
        complexity: "Elementary"
    },
    {
        word: "senile",
        complexity: "High School"
    },
    {
        word: "senior",
        complexity: "Elementary"
    },
    {
        word: "senora",
        complexity: "unknown"
    },
    {
        word: "sensei",
        complexity: "High School"
    },
    {
        word: "sensor",
        complexity: "Elementary"
    },
    {
        word: "sequel",
        complexity: "Middle School"
    },
    {
        word: "sequin",
        complexity: "High School"
    },
    {
        word: "seraph",
        complexity: "Post-College"
    },
    {
        word: "serdab",
        complexity: "High School"
    },
    {
        word: "serene",
        complexity: "Middle School"
    },
    {
        word: "serged",
        complexity: "High School"
    },
    {
        word: "serial",
        complexity: "Elementary"
    },
    {
        word: "series",
        complexity: "Elementary"
    },
    {
        word: "serine",
        complexity: "Middle School"
    },
    {
        word: "sermon",
        complexity: "Middle School"
    },
    {
        word: "served",
        complexity: "unknown"
    },
    {
        word: "setose",
        complexity: "College"
    },
    {
        word: "setout",
        complexity: "Middle School"
    },
    {
        word: "settle",
        complexity: "Elementary"
    },
    {
        word: "sexism",
        complexity: "High School"
    },
    {
        word: "sextan",
        complexity: "College"
    },
    {
        word: "sextet",
        complexity: "College"
    },
    {
        word: "sextic",
        complexity: "College"
    },
    {
        word: "shaley",
        complexity: "Middle School"
    },
    {
        word: "shalom",
        complexity: "Middle School"
    },
    {
        word: "shaman",
        complexity: "High School"
    },
    {
        word: "shanny",
        complexity: "Post-College"
    },
    {
        word: "sharer",
        complexity: "unknown"
    },
    {
        word: "shaver",
        complexity: "High School"
    },
    {
        word: "shaykh",
        complexity: "High School"
    },
    {
        word: "sheath",
        complexity: "Middle School"
    },
    {
        word: "sheave",
        complexity: "Middle School"
    },
    {
        word: "shelty",
        complexity: "College"
    },
    {
        word: "sherry",
        complexity: "High School"
    },
    {
        word: "shivoo",
        complexity: "Post-College"
    },
    {
        word: "shower",
        complexity: "Elementary"
    },
    {
        word: "shrewd",
        complexity: "High School"
    },
    {
        word: "shrill",
        complexity: "Middle School"
    },
    {
        word: "shrimp",
        complexity: "Middle School"
    },
    {
        word: "shrink",
        complexity: "Middle School"
    },
    {
        word: "shrive",
        complexity: "Post-College"
    },
    {
        word: "shroud",
        complexity: "High School"
    },
    {
        word: "shrove",
        complexity: "High School"
    },
    {
        word: "shrunk",
        complexity: "Middle School"
    },
    {
        word: "shtetl",
        complexity: "Middle School"
    },
    {
        word: "shying",
        complexity: "Middle School"
    },
    {
        word: "sialic",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "siddhi",
        complexity: "High School"
    },
    {
        word: "signee",
        complexity: "College"
    },
    {
        word: "silent",
        complexity: "Elementary"
    },
    {
        word: "silica",
        complexity: "Middle School"
    },
    {
        word: "silken",
        complexity: "High School"
    },
    {
        word: "siloed",
        complexity: "unknown"
    },
    {
        word: "simile",
        complexity: "High School"
    },
    {
        word: "simper",
        complexity: "College"
    },
    {
        word: "simple",
        complexity: "Elementary"
    },
    {
        word: "sinewy",
        complexity: "Post-College"
    },
    {
        word: "single",
        complexity: "Elementary"
    },
    {
        word: "singly",
        complexity: "High School"
    },
    {
        word: "siphon",
        complexity: "High School"
    },
    {
        word: "sipper",
        complexity: "Post-College"
    },
    {
        word: "sister",
        complexity: "Elementary"
    },
    {
        word: "sizing",
        complexity: "Middle School"
    },
    {
        word: "sizzle",
        complexity: "College"
    },
    {
        word: "skeeve",
        complexity: "Middle School"
    },
    {
        word: "sketch",
        complexity: "Middle School"
    },
    {
        word: "skiing",
        complexity: "Middle School"
    },
    {
        word: "skinny",
        complexity: "Middle School"
    },
    {
        word: "skivvy",
        complexity: "Post-College"
    },
    {
        word: "sklent",
        complexity: "College"
    },
    {
        word: "skyway",
        complexity: "Post-College"
    },
    {
        word: "slated",
        complexity: "unknown"
    },
    {
        word: "sledge",
        complexity: "High School"
    },
    {
        word: "sleigh",
        complexity: "High School"
    },
    {
        word: "sliver",
        complexity: "Middle School"
    },
    {
        word: "slobby",
        complexity: "College"
    },
    {
        word: "slough",
        complexity: "High School"
    },
    {
        word: "sluice",
        complexity: "High School"
    },
    {
        word: "slurve",
        complexity: "Middle School"
    },
    {
        word: "slyest",
        complexity: "Middle School"
    },
    {
        word: "smacks",
        complexity: "unknown"
    },
    {
        word: "smegma",
        complexity: "Post-College"
    },
    {
        word: "smirch",
        complexity: "Post-College"
    },
    {
        word: "smokey",
        complexity: "High School"
    },
    {
        word: "smooth",
        complexity: "Elementary"
    },
    {
        word: "snarky",
        complexity: "College"
    },
    {
        word: "snatch",
        complexity: "Middle School"
    },
    {
        word: "snazzy",
        complexity: "Post-College"
    },
    {
        word: "sneaky",
        complexity: "Middle School"
    },
    {
        word: "snider",
        complexity: "unknown"
    },
    {
        word: "sobbed",
        complexity: "unknown"
    },
    {
        word: "social",
        complexity: "Elementary"
    },
    {
        word: "socked",
        complexity: "Middle School"
    },
    {
        word: "socket",
        complexity: "Elementary"
    },
    {
        word: "sodded",
        complexity: "Middle School"
    },
    {
        word: "sodden",
        complexity: "High School"
    },
    {
        word: "softer",
        complexity: "Elementary"
    },
    {
        word: "softly",
        complexity: "Middle School"
    },
    {
        word: "soigne",
        complexity: "unknown"
    },
    {
        word: "solace",
        complexity: "Middle School"
    },
    {
        word: "solder",
        complexity: "Middle School"
    },
    {
        word: "solely",
        complexity: "Elementary"
    },
    {
        word: "solemn",
        complexity: "Middle School"
    },
    {
        word: "solute",
        complexity: "Middle School"
    },
    {
        word: "solved",
        complexity: "Elementary"
    },
    {
        word: "sopher",
        complexity: "High School"
    },
    {
        word: "sopped",
        complexity: "High School"
    },
    {
        word: "sorbed",
        complexity: "College"
    },
    {
        word: "sorbic",
        complexity: "College"
    },
    {
        word: "sordid",
        complexity: "Middle School"
    },
    {
        word: "sorrow",
        complexity: "Middle School"
    },
    {
        word: "sotted",
        complexity: "High School"
    },
    {
        word: "source",
        complexity: "Elementary"
    },
    {
        word: "sovran",
        complexity: "College"
    },
    {
        word: "spaces",
        complexity: "Elementary"
    },
    {
        word: "sparky",
        complexity: "College"
    },
    {
        word: "sparse",
        complexity: "Middle School"
    },
    {
        word: "spavin",
        complexity: "Post-College"
    },
    {
        word: "specie",
        complexity: "High School"
    },
    {
        word: "speech",
        complexity: "Elementary"
    },
    {
        word: "spents",
        complexity: "Elementary"
    },
    {
        word: "spider",
        complexity: "Middle School"
    },
    {
        word: "spigot",
        complexity: "High School"
    },
    {
        word: "spiral",
        complexity: "Middle School"
    },
    {
        word: "spired",
        complexity: "Middle School"
    },
    {
        word: "spires",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "spirit",
        complexity: "Elementary"
    },
    {
        word: "spited",
        complexity: "Elementary"
    },
    {
        word: "splake",
        complexity: "Middle School"
    },
    {
        word: "splash",
        complexity: "Middle School"
    },
    {
        word: "spoilt",
        complexity: "Middle School"
    },
    {
        word: "spokes",
        complexity: "unknown"
    },
    {
        word: "spooky",
        complexity: "Middle School"
    },
    {
        word: "spoony",
        complexity: "College"
    },
    {
        word: "sporal",
        complexity: "Middle School"
    },
    {
        word: "spores",
        complexity: "unknown"
    },
    {
        word: "sporty",
        complexity: "Middle School"
    },
    {
        word: "spouse",
        complexity: "Elementary"
    },
    {
        word: "sprang",
        complexity: "Elementary"
    },
    {
        word: "sprawl",
        complexity: "Middle School"
    },
    {
        word: "spread",
        complexity: "Elementary"
    },
    {
        word: "spring",
        complexity: "Elementary"
    },
    {
        word: "sprint",
        complexity: "Middle School"
    },
    {
        word: "spunky",
        complexity: "High School"
    },
    {
        word: "squads",
        complexity: "Middle School"
    },
    {
        word: "squall",
        complexity: "College"
    },
    {
        word: "square",
        complexity: "Elementary"
    },
    {
        word: "squawk",
        complexity: "Post-College"
    },
    {
        word: "squeal",
        complexity: "College"
    },
    {
        word: "squint",
        complexity: "College"
    },
    {
        word: "squirm",
        complexity: "College"
    },
    {
        word: "stable",
        complexity: "Elementary"
    },
    {
        word: "stairs",
        complexity: "unknown"
    },
    {
        word: "stalky",
        complexity: "College"
    },
    {
        word: "stanch",
        complexity: "College"
    },
    {
        word: "staned",
        complexity: "Middle School"
    },
    {
        word: "stanza",
        complexity: "Middle School"
    },
    {
        word: "starch",
        complexity: "Middle School"
    },
    {
        word: "stared",
        complexity: "unknown"
    },
    {
        word: "starts",
        complexity: "Elementary"
    },
    {
        word: "starve",
        complexity: "Middle School"
    },
    {
        word: "states",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "static",
        complexity: "Elementary"
    },
    {
        word: "statin",
        complexity: "Middle School"
    },
    {
        word: "statue",
        complexity: "Middle School"
    },
    {
        word: "status",
        complexity: "Elementary"
    },
    {
        word: "steaks",
        complexity: "Middle School"
    },
    {
        word: "steams",
        complexity: "Elementary"
    },
    {
        word: "steely",
        complexity: "High School"
    },
    {
        word: "stelai",
        complexity: "College"
    },
    {
        word: "steppe",
        complexity: "High School"
    },
    {
        word: "steric",
        complexity: "Middle School"
    },
    {
        word: "stigma",
        complexity: "Middle School"
    },
    {
        word: "stingy",
        complexity: "Middle School"
    },
    {
        word: "stints",
        complexity: "unknown"
    },
    {
        word: "stirps",
        complexity: "Middle School"
    },
    {
        word: "stithy",
        complexity: "High School"
    },
    {
        word: "stocky",
        complexity: "College"
    },
    {
        word: "stoles",
        complexity: "unknown"
    },
    {
        word: "stolid",
        complexity: "College"
    },
    {
        word: "stones",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "stored",
        complexity: "unknown"
    },
    {
        word: "stotin",
        complexity: "High School"
    },
    {
        word: "strain",
        complexity: "Elementary"
    },
    {
        word: "strait",
        complexity: "Middle School"
    },
    {
        word: "strand",
        complexity: "Middle School"
    },
    {
        word: "strata",
        complexity: "Middle School"
    },
    {
        word: "streak",
        complexity: "Middle School"
    },
    {
        word: "stream",
        complexity: "Elementary"
    },
    {
        word: "street",
        complexity: "Elementary"
    },
    {
        word: "stress",
        complexity: "Elementary"
    },
    {
        word: "strewn",
        complexity: "unknown"
    },
    {
        word: "strict",
        complexity: "Elementary"
    },
    {
        word: "stride",
        complexity: "Middle School"
    },
    {
        word: "strife",
        complexity: "Middle School"
    },
    {
        word: "strike",
        complexity: "Elementary"
    },
    {
        word: "stripe",
        complexity: "Middle School"
    },
    {
        word: "stript",
        complexity: "Middle School"
    },
    {
        word: "strive",
        complexity: "Elementary"
    },
    {
        word: "stroke",
        complexity: "Elementary"
    },
    {
        word: "stroll",
        complexity: "Middle School"
    },
    {
        word: "strong",
        complexity: "Elementary"
    },
    {
        word: "studio",
        complexity: "Elementary"
    },
    {
        word: "stupid",
        complexity: "Elementary"
    },
    {
        word: "styled",
        complexity: "Elementary"
    },
    {
        word: "stylus",
        complexity: "Middle School"
    },
    {
        word: "stymie",
        complexity: "Post-College"
    },
    {
        word: "sublot",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "submit",
        complexity: "Elementary"
    },
    {
        word: "subtle",
        complexity: "Middle School"
    },
    {
        word: "suburb",
        complexity: "Middle School"
    },
    {
        word: "subway",
        complexity: "Middle School"
    },
    {
        word: "succor",
        complexity: "Post-College"
    },
    {
        word: "sucker",
        complexity: "Middle School"
    },
    {
        word: "sudden",
        complexity: "Elementary"
    },
    {
        word: "sudoku",
        complexity: "High School"
    },
    {
        word: "sueded",
        complexity: "Middle School"
    },
    {
        word: "suffer",
        complexity: "Elementary"
    },
    {
        word: "suffix",
        complexity: "Middle School"
    },
    {
        word: "sugary",
        complexity: "High School"
    },
    {
        word: "suited",
        complexity: "Elementary"
    },
    {
        word: "suitor",
        complexity: "High School"
    },
    {
        word: "sullen",
        complexity: "Middle School"
    },
    {
        word: "sultry",
        complexity: "High School"
    },
    {
        word: "summit",
        complexity: "Middle School"
    },
    {
        word: "summon",
        complexity: "Middle School"
    },
    {
        word: "sundry",
        complexity: "Middle School"
    },
    {
        word: "sunset",
        complexity: "Elementary"
    },
    {
        word: "superb",
        complexity: "Elementary"
    },
    {
        word: "supine",
        complexity: "High School"
    },
    {
        word: "supple",
        complexity: "Middle School"
    },
    {
        word: "supply",
        complexity: "Elementary"
    },
    {
        word: "surety",
        complexity: "Middle School"
    },
    {
        word: "surrey",
        complexity: "High School"
    },
    {
        word: "suslik",
        complexity: "Post-College"
    },
    {
        word: "susses",
        complexity: "Middle School"
    },
    {
        word: "suture",
        complexity: "Middle School"
    },
    {
        word: "swabby",
        complexity: "Post-College"
    },
    {
        word: "swanky",
        complexity: "College"
    },
    {
        word: "swaraj",
        complexity: "High School"
    },
    {
        word: "swivel",
        complexity: "Middle School"
    },
    {
        word: "symbol",
        complexity: "Elementary"
    },
    {
        word: "system",
        complexity: "Elementary"
    },
    {
        word: "tabour",
        complexity: "College"
    },
    {
        word: "tactic",
        complexity: "Middle School"
    },
    {
        word: "tagged",
        complexity: "Elementary"
    },
    {
        word: "taille",
        complexity: "Middle School"
    },
    {
        word: "tailor",
        complexity: "Middle School"
    },
    {
        word: "taking",
        complexity: "Elementary"
    },
    {
        word: "talcum",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "talent",
        complexity: "Elementary"
    },
    {
        word: "talker",
        complexity: "unknown"
    },
    {
        word: "tallit",
        complexity: "unknown"
    },
    {
        word: "tamest",
        complexity: "Middle School"
    },
    {
        word: "tamper",
        complexity: "Middle School"
    },
    {
        word: "tandem",
        complexity: "Middle School"
    },
    {
        word: "tangle",
        complexity: "Middle School"
    },
    {
        word: "tapers",
        complexity: "Middle School"
    },
    {
        word: "tartly",
        complexity: "unknown"
    },
    {
        word: "tassel",
        complexity: "High School"
    },
    {
        word: "tattle",
        complexity: "College"
    },
    {
        word: "tattoo",
        complexity: "Elementary"
    },
    {
        word: "taunts",
        complexity: "Middle School"
    },
    {
        word: "tauter",
        complexity: "Middle School"
    },
    {
        word: "tawdry",
        complexity: "College"
    },
    {
        word: "tearer",
        complexity: "Elementary"
    },
    {
        word: "teaser",
        complexity: "Middle School"
    },
    {
        word: "techno",
        complexity: "Middle School"
    },
    {
        word: "teensy",
        complexity: "College"
    },
    {
        word: "temper",
        complexity: "Middle School"
    },
    {
        word: "tenant",
        complexity: "Elementary"
    },
    {
        word: "tenets",
        complexity: "Middle School"
    },
    {
        word: "tenter",
        complexity: "High School"
    },
    {
        word: "tenure",
        complexity: "Elementary"
    },
    {
        word: "terror",
        complexity: "Elementary"
    },
    {
        word: "tetchy",
        complexity: "Post-College"
    },
    {
        word: "texted",
        complexity: "unknown"
    },
    {
        word: "thawed",
        complexity: "unknown"
    },
    {
        word: "thebes",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "thecal",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "themed",
        complexity: "Elementary"
    },
    {
        word: "theory",
        complexity: "Elementary"
    },
    {
        word: "thesis",
        complexity: "Elementary"
    },
    {
        word: "thirty",
        complexity: "Elementary"
    },
    {
        word: "thorax",
        complexity: "High School"
    },
    {
        word: "thoria",
        complexity: "High School"
    },
    {
        word: "thoron",
        complexity: "Middle School"
    },
    {
        word: "thoued",
        complexity: "Elementary"
    },
    {
        word: "though",
        complexity: "Elementary"
    },
    {
        word: "thrash",
        complexity: "Middle School"
    },
    {
        word: "thread",
        complexity: "Elementary"
    },
    {
        word: "threat",
        complexity: "Elementary"
    },
    {
        word: "thrive",
        complexity: "Middle School"
    },
    {
        word: "throne",
        complexity: "Middle School"
    },
    {
        word: "throng",
        complexity: "Middle School"
    },
    {
        word: "thrown",
        complexity: "Elementary"
    },
    {
        word: "thrust",
        complexity: "Middle School"
    },
    {
        word: "thusly",
        complexity: "High School"
    },
    {
        word: "tibiae",
        complexity: "High School"
    },
    {
        word: "tibias",
        complexity: "High School"
    },
    {
        word: "ticket",
        complexity: "Elementary"
    },
    {
        word: "tidbit",
        complexity: "High School"
    },
    {
        word: "tiddly",
        complexity: "Post-College"
    },
    {
        word: "tiepin",
        complexity: "College"
    },
    {
        word: "tiffed",
        complexity: "Middle School"
    },
    {
        word: "tiling",
        complexity: "Elementary"
    },
    {
        word: "timbre",
        complexity: "High School"
    },
    {
        word: "timely",
        complexity: "Elementary"
    },
    {
        word: "timing",
        complexity: "Elementary"
    },
    {
        word: "tinder",
        complexity: "College"
    },
    {
        word: "tinged",
        complexity: "unknown"
    },
    {
        word: "tinkle",
        complexity: "Post-College"
    },
    {
        word: "tinned",
        complexity: "High School"
    },
    {
        word: "tinner",
        complexity: "College"
    },
    {
        word: "tipper",
        complexity: "College"
    },
    {
        word: "tiptoe",
        complexity: "High School"
    },
    {
        word: "tirade",
        complexity: "High School"
    },
    {
        word: "tiring",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "tisane",
        complexity: "College"
    },
    {
        word: "tissue",
        complexity: "Elementary"
    },
    {
        word: "tither",
        complexity: "College"
    },
    {
        word: "tittle",
        complexity: "College"
    },
    {
        word: "toches",
        complexity: "Middle School"
    },
    {
        word: "tokens",
        complexity: "Middle School"
    },
    {
        word: "toling",
        complexity: "High School"
    },
    {
        word: "tombed",
        complexity: "Middle School"
    },
    {
        word: "tomboy",
        complexity: "College"
    },
    {
        word: "tomcat",
        complexity: "Middle School"
    },
    {
        word: "tonger",
        complexity: "Middle School"
    },
    {
        word: "tooter",
        complexity: "unknown"
    },
    {
        word: "topics",
        complexity: "Elementary"
    },
    {
        word: "topped",
        complexity: "Elementary"
    },
    {
        word: "topple",
        complexity: "High School"
    },
    {
        word: "torero",
        complexity: "College"
    },
    {
        word: "torpid",
        complexity: "College"
    },
    {
        word: "torpor",
        complexity: "High School"
    },
    {
        word: "torque",
        complexity: "Middle School"
    },
    {
        word: "torrid",
        complexity: "High School"
    },
    {
        word: "totals",
        complexity: "Elementary"
    },
    {
        word: "totems",
        complexity: "Middle School"
    },
    {
        word: "toting",
        complexity: "High School"
    },
    {
        word: "totter",
        complexity: "College"
    },
    {
        word: "toucan",
        complexity: "College"
    },
    {
        word: "touche",
        complexity: "unknown"
    },
    {
        word: "toughs",
        complexity: "Elementary"
    },
    {
        word: "touter",
        complexity: "College"
    },
    {
        word: "toward",
        complexity: "Elementary"
    },
    {
        word: "towels",
        complexity: "Middle School"
    },
    {
        word: "towing",
        complexity: "Middle School"
    },
    {
        word: "toxins",
        complexity: "unknown"
    },
    {
        word: "tracts",
        complexity: "Elementary"
    },
    {
        word: "traits",
        complexity: "Middle School"
    },
    {
        word: "trance",
        complexity: "Middle School"
    },
    {
        word: "transe",
        complexity: "Elementary"
    },
    {
        word: "trapan",
        complexity: "unknown"
    },
    {
        word: "trashy",
        complexity: "Middle School"
    },
    {
        word: "travel",
        complexity: "Elementary"
    },
    {
        word: "treads",
        complexity: "Middle School"
    },
    {
        word: "tremor",
        complexity: "Middle School"
    },
    {
        word: "triage",
        complexity: "Middle School"
    },
    {
        word: "trifle",
        complexity: "High School"
    },
    {
        word: "trinal",
        complexity: "Middle School"
    },
    {
        word: "triple",
        complexity: "Elementary"
    },
    {
        word: "triply",
        complexity: "College"
    },
    {
        word: "tripod",
        complexity: "Middle School"
    },
    {
        word: "troika",
        complexity: "Post-College"
    },
    {
        word: "troked",
        complexity: "Middle School"
    },
    {
        word: "trophi",
        complexity: "Middle School"
    },
    {
        word: "trophy",
        complexity: "Middle School"
    },
    {
        word: "tropic",
        complexity: "High School"
    },
    {
        word: "trotty",
        complexity: "Middle School"
    },
    {
        word: "trough",
        complexity: "Middle School"
    },
    {
        word: "troupe",
        complexity: "Middle School"
    },
    {
        word: "trudge",
        complexity: "High School"
    },
    {
        word: "truest",
        complexity: "unknown"
    },
    {
        word: "truism",
        complexity: "High School"
    },
    {
        word: "trying",
        complexity: "Elementary"
    },
    {
        word: "tsades",
        isCapitalized: true,
        complexity: "College"
    },
    {
        word: "tsuris",
        complexity: "College"
    },
    {
        word: "tulles",
        complexity: "High School"
    },
    {
        word: "tumble",
        complexity: "Middle School"
    },
    {
        word: "tumult",
        complexity: "High School"
    },
    {
        word: "tuning",
        complexity: "unknown"
    },
    {
        word: "tunnel",
        complexity: "Elementary"
    },
    {
        word: "turbid",
        complexity: "High School"
    },
    {
        word: "turgid",
        complexity: "High School"
    },
    {
        word: "turkey",
        complexity: "Middle School"
    },
    {
        word: "turned",
        complexity: "Elementary"
    },
    {
        word: "turnon",
        complexity: "High School"
    },
    {
        word: "tuyere",
        complexity: "unknown"
    },
    {
        word: "tuyers",
        complexity: "unknown"
    },
    {
        word: "twenty",
        complexity: "Elementary"
    },
    {
        word: "twiner",
        complexity: "Middle School"
    },
    {
        word: "twines",
        complexity: "Middle School"
    },
    {
        word: "twirls",
        complexity: "High School"
    },
    {
        word: "twitch",
        complexity: "High School"
    },
    {
        word: "typhus",
        complexity: "College"
    },
    {
        word: "tyrant",
        complexity: "Middle School"
    },
    {
        word: "tzuris",
        complexity: "College"
    },
    {
        word: "uakari",
        complexity: "Post-College"
    },
    {
        word: "ubiety",
        complexity: "Post-College"
    },
    {
        word: "ubique",
        complexity: "Post-College"
    },
    {
        word: "uglify",
        complexity: "Post-College"
    },
    {
        word: "ullage",
        complexity: "College"
    },
    {
        word: "ulluco",
        complexity: "College"
    },
    {
        word: "ulster",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "ultima",
        complexity: "High School"
    },
    {
        word: "ultimo",
        complexity: "High School"
    },
    {
        word: "unable",
        complexity: "Elementary"
    },
    {
        word: "uncalm",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "unread",
        isCapitalized: true,
        complexity: "Elementary"
    },
    // {
    //     word: "uncast",
    //     isCapitalized: true,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    // {
    //     word: "undeep",
    //     isCapitalized: true,
    //     isRoot: false,
    //     complexity: "Elementary"
    // },
    {
        word: "undine",
        complexity: "College"
    },
    {
        word: "undoes",
        complexity: "unknown"
    },
    {
        word: "undraw",
        complexity: "College"
    },
    {
        word: "unduly",
        complexity: "Middle School"
    },
    {
        word: "uneven",
        complexity: "Middle School"
    },
    {
        word: "unfair",
        complexity: "Middle School"
    },
    {
        word: "unfree",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "ungirt",
        complexity: "Middle School"
    },
    {
        word: "unguis",
        complexity: "College"
    },
    {
        word: "unhewn",
        isCapitalized: true,
        complexity: "High School"
    },
    {
        word: "unhung",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "unions",
        complexity: "Elementary"
    },
    {
        word: "unique",
        complexity: "Elementary"
    },
    {
        word: "unison",
        complexity: "Middle School"
    },
    {
        word: "united",
        complexity: "Elementary"
    },
    {
        word: "unkept",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "unlade",
        complexity: "College"
    },
    {
        word: "unlike",
        complexity: "Elementary"
    },
    {
        word: "unmoor",
        complexity: "College"
    },
    {
        word: "unpick",
        complexity: "Post-College"
    },
    {
        word: "unseam",
        complexity: "High School"
    },
    {
        word: "unsexy",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "unsort",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "unspun",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "unstep",
        complexity: "High School"
    },
    {
        word: "unsued",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "unsure",
        complexity: "Middle School"
    },
    {
        word: "untame",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "untold",
        complexity: "Middle School"
    },
    {
        word: "untrue",
        complexity: "Middle School"
    },
    {
        word: "unvain",
        isCapitalized: true,
        complexity: "Middle School"
    },
    {
        word: "unveil",
        complexity: "Middle School"
    },
    {
        word: "unwary",
        complexity: "College"
    },
    {
        word: "unwild",
        isCapitalized: true,
        complexity: "Elementary"
    },
    {
        word: "unwind",
        complexity: "Middle School"
    },
    {
        word: "unwish",
        complexity: "College"
    },
    {
        word: "update",
        complexity: "Middle School"
    },
    {
        word: "uphill",
        complexity: "Middle School"
    },
    {
        word: "uphold",
        complexity: "Middle School"
    },
    {
        word: "uplift",
        complexity: "Middle School"
    },
    {
        word: "upmost",
        complexity: "Post-College"
    },
    {
        word: "uppity",
        complexity: "College"
    },
    {
        word: "uprise",
        complexity: "College"
    },
    {
        word: "uproot",
        complexity: "High School"
    },
    {
        word: "upshot",
        complexity: "High School"
    },
    {
        word: "uptake",
        complexity: "Middle School"
    },
    {
        word: "upvote",
        complexity: "Post-College"
    },
    {
        word: "uraeus",
        complexity: "Post-College"
    },
    {
        word: "urchin",
        complexity: "High School"
    },
    {
        word: "useful",
        complexity: "Elementary"
    },
    {
        word: "ushers",
        complexity: "unknown"
    },
    {
        word: "usward",
        complexity: "College"
    },
    {
        word: "utmost",
        complexity: "Middle School"
    },
    {
        word: "utopia",
        isCapitalized: true,
        complexity: "unknown"
    },
    {
        word: "uvular",
        complexity: "Post-College"
    },
    {
        word: "vacant",
        complexity: "Middle School"
    },
    {
        word: "vacate",
        complexity: "Middle School"
    },
    {
        word: "vacuum",
        complexity: "Middle School"
    },
    {
        word: "vahine",
        complexity: "College"
    },
    {
        word: "valise",
        complexity: "College"
    },
    {
        word: "valley",
        complexity: "Elementary"
    },
    {
        word: "valued",
        complexity: "Elementary"
    },
    {
        word: "vandal",
        complexity: "High School"
    },
    {
        word: "vanity",
        complexity: "Middle School"
    },
    {
        word: "vanned",
        complexity: "unknown"
    },
    {
        word: "varied",
        complexity: "Elementary"
    },
    {
        word: "varies",
        complexity: "unknown"
    },
    {
        word: "varlet",
        complexity: "College"
    },
    {
        word: "vassal",
        complexity: "High School"
    },
    {
        word: "vector",
        complexity: "Elementary"
    },
    {
        word: "veinal",
        complexity: "Middle School"
    },
    {
        word: "velure",
        complexity: "Middle School"
    },
    {
        word: "velvet",
        complexity: "Middle School"
    },
    {
        word: "venine",
        complexity: "High School"
    },
    {
        word: "venues",
        complexity: "unknown"
    },
    {
        word: "verbal",
        complexity: "Middle School"
    },
    {
        word: "verger",
        complexity: "College"
    },
    {
        word: "verier",
        complexity: "Elementary"
    },
    {
        word: "verily",
        complexity: "High School"
    },
    {
        word: "verity",
        complexity: "Post-College"
    },
    {
        word: "vermin",
        complexity: "Middle School"
    },
    {
        word: "versus",
        complexity: "Elementary"
    },
    {
        word: "vested",
        complexity: "Middle School"
    },
    {
        word: "vestry",
        complexity: "High School"
    },
    {
        word: "vetted",
        complexity: "unknown"
    },
    {
        word: "viable",
        complexity: "Middle School"
    },
    {
        word: "vialed",
        complexity: "Middle School"
    },
    {
        word: "viator",
        complexity: "High School"
    },
    {
        word: "vicing",
        complexity: "Elementary"
    },
    {
        word: "victim",
        complexity: "Elementary"
    },
    {
        word: "vimana",
        complexity: "High School"
    },
    {
        word: "vinous",
        complexity: "College"
    },
    {
        word: "virgin",
        complexity: "Middle School"
    },
    {
        word: "virile",
        complexity: "High School"
    },
    {
        word: "viroid",
        complexity: "Post-College"
    },
    {
        word: "virtue",
        complexity: "Middle School"
    },
    {
        word: "visaed",
        complexity: "Elementary"
    },
    {
        word: "visage",
        complexity: "High School"
    },
    {
        word: "vising",
        complexity: "unknown"
    },
    {
        word: "visual",
        complexity: "Elementary"
    },
    {
        word: "vitals",
        complexity: "High School"
    },
    {
        word: "vivify",
        complexity: "Post-College"
    },
    {
        word: "vizsla",
        complexity: "Post-College"
    },
    {
        word: "volant",
        complexity: "College"
    },
    {
        word: "volute",
        complexity: "Post-College"
    },
    {
        word: "vortex",
        complexity: "Middle School"
    },
    {
        word: "voyeur",
        complexity: "Elementary"
    },
    {
        word: "vulgar",
        complexity: "Middle School"
    },
    {
        word: "wagged",
        complexity: "unknown"
    },
    {
        word: "waived",
        complexity: "unknown"
    },
    {
        word: "walker",
        complexity: "Middle School"
    },
    {
        word: "wampus",
        complexity: "Post-College"
    },
    {
        word: "wanton",
        complexity: "Middle School"
    },
    {
        word: "warble",
        complexity: "Post-College"
    },
    {
        word: "warier",
        complexity: "Middle School"
    },
    {
        word: "wasted",
        complexity: "Elementary"
    },
    {
        word: "waster",
        complexity: "High School"
    },
    {
        word: "wavies",
        complexity: "College"
    },
    {
        word: "waxing",
        complexity: "Middle School"
    },
    {
        word: "waylay",
        complexity: "Post-College"
    },
    {
        word: "wealth",
        complexity: "Elementary"
    },
    {
        word: "weblog",
        complexity: "College"
    },
    {
        word: "wedded",
        complexity: "Middle School"
    },
    {
        word: "wedeln",
        complexity: "College"
    },
    {
        word: "wedged",
        complexity: "Middle School"
    },
    {
        word: "wedges",
        complexity: "Middle School"
    },
    {
        word: "weight",
        complexity: "Elementary"
    },
    {
        word: "welder",
        complexity: "unknown"
    },
    {
        word: "welkin",
        complexity: "Post-College"
    },
    {
        word: "welter",
        complexity: "College"
    },
    {
        word: "wether",
        complexity: "Middle School"
    },
    {
        word: "whaled",
        complexity: "Middle School"
    },
    {
        word: "wheeze",
        complexity: "Post-College"
    },
    {
        word: "whiles",
        complexity: "Middle School"
    },
    {
        word: "whimsy",
        complexity: "College"
    },
    {
        word: "whiney",
        complexity: "unknown"
    },
    {
        word: "whinny",
        complexity: "Post-College"
    },
    {
        word: "whisky",
        complexity: "High School"
    },
    {
        word: "whizzo",
        complexity: "Post-College"
    },
    {
        word: "whoops",
        complexity: "High School"
    },
    {
        word: "whoosh",
        complexity: "Post-College"
    },
    {
        word: "wiccan",
        isCapitalized: true,
        complexity: "High School"
    },
    {
        word: "wicked",
        complexity: "Middle School"
    },
    {
        word: "widest",
        complexity: "Elementary"
    },
    {
        word: "wieldy",
        complexity: "High School"
    },
    {
        word: "wifing",
        complexity: "Elementary"
    },
    {
        word: "wiggle",
        complexity: "High School"
    },
    {
        word: "wilder",
        complexity: "High School"
    },
    {
        word: "wilier",
        complexity: "unknown"
    },
    {
        word: "wilily",
        complexity: "High School"
    },
    {
        word: "willow",
        complexity: "Middle School"
    },
    {
        word: "wilted",
        complexity: "unknown"
    },
    {
        word: "wimple",
        complexity: "Post-College"
    },
    {
        word: "windle",
        complexity: "High School"
    },
    {
        word: "window",
        complexity: "Elementary"
    },
    {
        word: "winged",
        complexity: "Middle School"
    },
    {
        word: "winner",
        complexity: "Elementary"
    },
    {
        word: "winnow",
        complexity: "Post-College"
    },
    {
        word: "winter",
        complexity: "Elementary"
    },
    {
        word: "wintry",
        complexity: "High School"
    },
    {
        word: "wisdom",
        complexity: "Elementary"
    },
    {
        word: "wisely",
        complexity: "High School"
    },
    {
        word: "wisent",
        complexity: "College"
    },
    {
        word: "withal",
        complexity: "Middle School"
    },
    {
        word: "wither",
        complexity: "Middle School"
    },
    {
        word: "wivern",
        complexity: "unknown"
    },
    {
        word: "wizard",
        complexity: "Middle School"
    },
    {
        word: "wolves",
        complexity: "Middle School"
    },
    {
        word: "wonder",
        complexity: "Elementary"
    },
    {
        word: "wonted",
        complexity: "College"
    },
    {
        word: "wooded",
        complexity: "Middle School"
    },
    {
        word: "woofer",
        complexity: "High School"
    },
    {
        word: "woolly",
        complexity: "Middle School"
    },
    {
        word: "worded",
        complexity: "High School"
    },
    {
        word: "worser",
        complexity: "Middle School"
    },
    {
        word: "worses",
        complexity: "Elementary"
    },
    {
        word: "worthy",
        complexity: "Middle School"
    },
    {
        word: "wreaks",
        complexity: "High School"
    },
    {
        word: "wreath",
        complexity: "Middle School"
    },
    {
        word: "wrench",
        complexity: "Middle School"
    },
    {
        word: "wretch",
        complexity: "Middle School"
    },
    {
        word: "writer",
        complexity: "Elementary"
    },
    {
        word: "writhe",
        complexity: "High School"
    },
    {
        word: "yearns",
        complexity: "Middle School"
    },
    {
        word: "yellow",
        complexity: "Elementary"
    },
    {
        word: "yelper",
        complexity: "College"
    },
    {
        word: "yerked",
        complexity: "Middle School"
    },
    {
        word: "yesses",
        complexity: "Elementary"
    },
    {
        word: "zaddik",
        complexity: "Post-College"
    },
    {
        word: "zaffer",
        complexity: "College"
    },
    {
        word: "zaftig",
        complexity: "Post-College"
    },
    {
        word: "zaikai",
        complexity: "Post-College"
    },
    {
        word: "zanana",
        complexity: "Post-College"
    },
    {
        word: "zander",
        complexity: "High School"
    },
    {
        word: "zanier",
        complexity: "College"
    },
    {
        word: "zanily",
        complexity: "College"
    },
    {
        word: "zareba",
        complexity: "College"
    },
    {
        word: "zealot",
        complexity: "College"
    },
    {
        word: "zeatin",
        complexity: "Post-College"
    },
    {
        word: "zechin",
        isCapitalized: true,
        complexity: "High School"
    },
    {
        word: "zedonk",
        complexity: "High School"
    },
    {
        word: "zenana",
        complexity: "Post-College"
    },
    {
        word: "zenith",
        complexity: "Middle School"
    },
    {
        word: "zephyr",
        complexity: "High School"
    },
    {
        word: "zeroth",
        complexity: "Post-College"
    },
    {
        word: "zeugma",
        complexity: "Post-College"
    },
    {
        word: "zigzag",
        complexity: "Post-College"
    },
    {
        word: "zipped",
        complexity: "unknown"
    },
    {
        word: "zither",
        complexity: "Post-College"
    },
    {
        word: "zodiac",
        complexity: "High School"
    },
    {
        word: "zombie",
        complexity: "Middle School"
    },
    {
        word: "zonate",
        complexity: "High School"
    },
    {
        word: "zoning",
        complexity: "Middle School"
    },
    {
        word: "zoonal",
        complexity: "Post-College"
    },
    {
        word: "zouave",
        isCapitalized: true,
        complexity: "unknown"
    }
].map(o => o.word);

const fileName = 'invalid.txt';
const lines = [];

missed.forEach((word) => {
    const url = `https://www.merriam-webster.com/dictionary/${word}`;

    fixture`// ${word}`
        .page`${url}}`;

    test(`check if ${word} is in meriam-webster`, async t => {
        const lines = [];

        const definitions = Selector('h1.mispelled-word');
        const definitionsCount = await definitions.count;
        for (let i = 0; i < definitionsCount; i++) {
            console.error(`${word}`);
            lines.push("'" + word + "',");
        }

    });

});
fs.writeFileSync(fileName, lines.join('\n'))
