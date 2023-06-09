const request = require('request');
const cheerio = require('cheerio');


let missed = [
  {
    word: "abroad",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "abrupt",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "absent",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "abused",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "abuser",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "abuses",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "accept",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "access",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "across",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "acting",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "action",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "active",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "actual",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "addend",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "adjust",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "adopts",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "adults",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "advice",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "advise",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "aerial",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "affect",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "afford",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "afraid",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "agency",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "agenda",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "agreed",
    wordType: ["ADJECTIVE", "VERB"],
    definition: ["discussed or negotiated and then accepted by all parties", "concur"],
    hint: "We are ______ that is what is needed"
  },
  {
    word: "aiding",
    isCapitalized: false,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "aikido",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "ailing",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "aiming",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "airbag",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "airily",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "airing",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "airman",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "airmen",
    isCapitalized: false,
    isRoot: false,
    complexity: "High School"
  },
  {
    word: "airway",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "aisles",
    isCapitalized: false,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "albedo",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "albeit",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "albino",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "albite",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "albums",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "alcove",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "alibis",
    isCapitalized: false,
    isRoot: false,
    complexity: "High School"
  },
  {
    word: "aliens",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "alight",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "aligns",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "aliyah",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "alkali",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "alkane",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "allays",
    isCapitalized: false,
    isRoot: false,
    complexity: "High School"
  },
  {
    word: "allege",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "allele",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "alleys",
    isCapitalized: false,
    isRoot: false,
    complexity: "Middle School"
  },
  {
    word: "allied",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "allies",
    isCapitalized: true,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "allows",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "allude",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "allure",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "almond",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "almost",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "alpaca",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "alphas",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "alpine",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "alumna",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "alumni",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "always",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "amazed",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "amazon",
    isCapitalized: true,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "ambers",
    isCapitalized: false,
    isRoot: false,
    complexity: "Middle School"
  },
  {
    word: "ambled",
    isCapitalized: false,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "ambles",
    isCapitalized: false,
    isRoot: false,
    complexity: "High School"
  },
  {
    word: "ambush",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "amends",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "amicus",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "amidst",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "amnion",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "amoeba",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "amoral",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "amount",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "amours",
    isCapitalized: false,
    isRoot: false,
    complexity: "Middle School"
  },
  {
    word: "ampere",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "ampler",
    isCapitalized: false,
    isRoot: false,
    complexity: "Middle School"
  },
  {
    word: "ampule",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "amtrak",
    isCapitalized: true,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "amulet",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "amused",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "anally",
    isCapitalized: false,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "analog",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "anchor",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "anemia",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "anemic",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "angels",
    isCapitalized: false,
    isRoot: true,
    complexity: "unknown"
  },
  {
    word: "angers",
    isCapitalized: true,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "angina",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "angled",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "angler",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "angles",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "angora",
    isCapitalized: true,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "angsty",
    isCapitalized: false,
    isRoot: true,
    complexity: "unknown"
  },
  {
    word: "animus",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "anklet",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "annals",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "annoys",
    isCapitalized: false,
    isRoot: false,
    complexity: "Middle School"
  },
  {
    word: "annual",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "anoles",
    isCapitalized: false,
    isRoot: false,
    complexity: "College"
  },
  {
    word: "anomie",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "anorak",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "answer",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "anthem",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "anther",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "antics",
    isCapitalized: false,
    isRoot: true,
    complexity: "unknown"
  },
  {
    word: "antler",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "antral",
    isCapitalized: false,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "antrum",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "anvils",
    isCapitalized: false,
    isRoot: false,
    complexity: "High School"
  },
  {
    word: "anyhow",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "anyone",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "anyway",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "aorist",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "aortic",
    isCapitalized: false,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "apache",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "apathy",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "apiary",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "apical",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "apices",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "apiece",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "aplomb",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "apneic",
    isCapitalized: false,
    isRoot: true,
    complexity: "unknown"
  },
  {
    word: "apnoea",
    isCapitalized: false,
    isRoot: true,
    complexity: "unknown"
  },
  {
    word: "apogee",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "appall",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "appeal",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "appear",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "append",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "apples",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "applet",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "arabic",
    isCapitalized: true,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "arable",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "arbors",
    isCapitalized: false,
    isRoot: false,
    complexity: "Middle School"
  },
  {
    word: "arbour",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "arcade",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "arcana",
    isCapitalized: false,
    isRoot: true,
    complexity: "unknown"
  },
  {
    word: "arcane",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "archer",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "arches",
    isCapitalized: true,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "archly",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "arctic",
    isCapitalized: true,
    isRoot: false,
    complexity: "Middle School"
  },
  {
    word: "ardent",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "ardour",
    isCapitalized: false,
    isRoot: true,
    complexity: "unknown"
  },
  {
    word: "areola",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "argent",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "argued",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "arguer",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "argues",
    isCapitalized: false,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "argyle",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "aright",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "arisen",
    isCapitalized: false,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "arises",
    isCapitalized: false,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "armada",
    isCapitalized: true,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "armful",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "arming",
    isCapitalized: false,
    isRoot: true,
    complexity: "unknown"
  },
  {
    word: "armlet",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "armory",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "armour",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "armpit",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "arnica",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "around",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "arrear",
    isCapitalized: false,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "arrest",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "arrive",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "arrows",
    isCapitalized: false,
    isRoot: true,
    complexity: "unknown"
  },
  {
    word: "arroyo",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "arsine",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "artery",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "artful",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "artist",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "ascend",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "ascent",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "ashore",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "ashram",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "asking",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "asleep",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "aspect",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "aspire",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "assail",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "assent",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "assert",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "assess",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "assets",
    isCapitalized: false,
    isRoot: true,
    complexity: "unknown"
  },
  {
    word: "assign",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "assist",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "assize",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "assume",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "assure",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "astral",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "astray",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "astute",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "atomic",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "atonal",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "atrial",
    isCapitalized: true,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "attach",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "attack",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "attain",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "attend",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "attest",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "attire",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "attune",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "audios",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "audits",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "augers",
    isCapitalized: false,
    isRoot: false,
    complexity: "Middle School"
  },
  {
    word: "augurs",
    isCapitalized: false,
    isRoot: false,
    complexity: "High School"
  },
  {
    word: "augury",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "august",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "auntie",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "aureus",
    isCapitalized: false,
    isRoot: true,
    complexity: "High School"
  },
  {
    word: "aurora",
    isCapitalized: true,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "auteur",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "author",
    isCapitalized: false,
    isRoot: true,
    complexity: "Elementary"
  },
  {
    word: "autism",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "autumn",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "avails",
    isCapitalized: false,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "avatar",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "avenge",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "avenue",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "averse",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "averts",
    isCapitalized: false,
    isRoot: false,
    complexity: "Middle School"
  },
  {
    word: "aviary",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  },
  {
    word: "avidly",
    isCapitalized: false,
    isRoot: true,
    complexity: "unknown"
  },
  {
    word: "avowal",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "avowed",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "awaked",
    isCapitalized: false,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "awaken",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "awakes",
    isCapitalized: false,
    isRoot: false,
    complexity: "Middle School"
  },
  {
    word: "awards",
    isCapitalized: false,
    isRoot: false,
    complexity: "Elementary"
  },
  {
    word: "awhile",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "awning",
    isCapitalized: false,
    isRoot: true,
    complexity: "Middle School"
  },
  {
    word: "awoken",
    isCapitalized: false,
    isRoot: false,
    complexity: "Middle School"
  },
  {
    word: "axeman",
    isCapitalized: false,
    isRoot: true,
    complexity: "unknown"
  },
  {
    word: "axilla",
    isCapitalized: false,
    isRoot: true,
    complexity: "Post-College"
  },
  {
    word: "axioms",
    isCapitalized: false,
    isRoot: false,
    complexity: "High School"
  },
  {
    word: "axonal",
    isCapitalized: false,
    isRoot: false,
    complexity: "unknown"
  },
  {
    word: "azalea",
    isCapitalized: false,
    isRoot: true,
    complexity: "College"
  }
].map(o => o.word);

missed.forEach((word) => {
  const url = `https://www.dictionary.com/browse/${word}`;

  request(url, (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      const complexity = $('span[data-testid="word-complexity-badge"]');
      let isBritish = false;
      $('.serp-nav-button ul li a').each((i, el) => {
        if ($(el).text().includes('British')) {
          isBritish = true;
          return false;
        }
      });
      const h1 = $('h1');
      console.log('{ word:', "'" + word + "'", ',\tisBritish: ', isBritish, ',\tisCapatalize: ', word[0].toUpperCase() === h1.text()[0], ',\tisRoot: ', word === h1.text(), ',\tcomplexity:', "'" + complexity.text() + "'},");
    }
  });
});