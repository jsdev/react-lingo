import { Selector } from 'testcafe';
import fs from 'fs';

let missed = [
    {
        word: "fabada",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fabric",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "facade",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "facets",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "faceup",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "facies",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "facile",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "facing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "factor",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "factum",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "faeces",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "faerie",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fairly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "fajita",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fallow",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "falter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "family",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "famine",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "famish",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "famous",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "famuli",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "fanega",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "fanfic",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fantom",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "faquir",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "farmer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "fascia",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "father",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "faucal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fauces",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "faucet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "faulty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "favela",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "favism",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "favour",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "fawned",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "feater",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "fecund",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "feddan",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fedora",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "feeble",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "feebly",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "feeder",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "feeler",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "feened",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "feijoa",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "feints",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "feirie",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "feisty",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "felony",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "female",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "fender",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ferine",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "fervid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fervor",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "festal",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "fetish",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "fetter",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "feudal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "feuded",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "fewest",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "fezzes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "fiacre",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "fiance",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "fiasco",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "fibber",
        isCapitalized: false,
        isRoot: false,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fidget",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fields",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "figger",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fights",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "figure",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "filate",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "filers",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "filial",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "filled",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "filler",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "fillet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "filose",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "filter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "finale",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "finely",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "finger",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "finish",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "finite",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "finito",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "firmer",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "firsts",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "fiscal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "fished",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "fishes",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "fistic",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "fitted",
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "flabby",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "flacks",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "flange",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "flashy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "flaunt",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "flauta",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "flavin",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "flavor",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "flawed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "flaxen",
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fledgy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fleece",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "fleecy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fleets",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "flench",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "flense",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "fleshy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "fletch",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fleury",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "flexed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "flexor",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "flimsy",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "flinch",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "flinty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "flirts",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "flirty",
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "floaty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "flocky",
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "flower",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "fluent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "fluids",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "flukey",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "flumed",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "flunky",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "flurry",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "flutey",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "flyest",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "foaled",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "fobbed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "fodder",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "foetal",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "foetid",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "foetor",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "foetus",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fogbow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fogged",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "fogger",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "fogram",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "fogrum",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "foible",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "foiled",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "foison",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "foists",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "folder",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "follow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "foment",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fomite",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "fondly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "foodie",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fooled",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "footed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "footer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "footie",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "footsy",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "forage",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "forays",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "forbid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "forced",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "forces",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "foredo",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "forego",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "forest",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "forged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "format",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "former",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "fossae",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "fossil",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "foster",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "foudre",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fouled",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "foully",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "founts",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "fourth",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "foveae",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "fowled",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "fowler",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "foxing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "foyers",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "fozier",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "fracas",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "frails",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "fraise",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "framer",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "frappe",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fratch",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "frater",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "frazil",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "freaky",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "freely",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "freest",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "freeze",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "french",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "frenzy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "freres",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "fresco",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "friary",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fridge",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "friend",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "friers",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "frieze",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "fright",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "frigid",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "frijol",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "frilly",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fringe",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "frites",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "friths",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "frivol",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "frolic",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fronts",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "frothy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "frowns",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "frowzy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "frugal",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fruits",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "frumpy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fucoid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fuddle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "fueled",
        isCapitalized: false,
        isRoot: false,
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
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "fumble",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "fuming",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "funest",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fungus",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "funked",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "funned",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "funnel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "funner",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "furled",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "furrow",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "fusion",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "fustic",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "futile",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "future",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "fuzzed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "gabies",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gabion",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gadfly",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gadget",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "gaffer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gaijin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gainly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "galago",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "galena",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "galets",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "galiot",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "galled",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gallet",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "galley",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "gallic",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gallop",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "galoot",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "galosh",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "galyak",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gambit",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gamble",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "gambol",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gamely",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gamest",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gamete",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gamify",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gamine",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gaming",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "gander",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "garble",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "garcon",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "garden",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "garner",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "garred",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "garvey",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gascon",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gasify",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gasket",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "gaskin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gaslit",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gasman",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gasser",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gasted",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "gaster",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gather",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "gating",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gauche",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gauged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gauger",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gauped",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "gavage",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gavial",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "gavots",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "gawked",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gawped",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "gaydar",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gayety",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gazabo",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gazebo",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gazers",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gazing",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gazump",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "geared",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "geeing",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "geeked",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "geezer",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "geisha",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "gender",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "genera",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "genial",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "genius",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "gentle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "gently",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "gentry",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "genual",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gerbil",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gerund",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gestic",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "geyser",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gharri",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "gharry",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "ghetto",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ghibli",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "ghirsh",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "ghosts",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "ghouls",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "giaour",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "gibbed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gibber",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gibbet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gibbon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gigged",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "giggle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "giggly",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "giglet",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "giglot",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "gigolo",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gilded",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gilgai",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gilgie",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "gilgul",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gilguy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gilled",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "gillie",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gimbal",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gimlet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gimmal",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gimmes",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "gimmie",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gimped",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gipped",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gipper",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "girlie",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gisant",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "giving",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "glacis",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gladly",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "glaire",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "glance",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "glazed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "glibly",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "glided",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "glints",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "glitch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "global",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "glocal",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gloomy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "gloppy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gloria",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "glossy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "glover",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "glower",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gneiss",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gnomes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "goatee",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "godded",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "golden",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "golfer",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "gommie",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gonged",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "gonion",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "goober",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "goodby",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "goodie",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "goofed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "goofus",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "googly",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "googol",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "goonda",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gooney",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "goosed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gorged",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "gorgon",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gormed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "gospel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "gossip",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "gouged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "goujon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "govern",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "graded",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "grafts",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "graham",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "granny",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "grants",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "grappa",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "grassy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "gratin",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gravel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "graven",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "graver",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "graves",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gravid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "grayed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "grayer",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "grayly",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "grazer",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "greasy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "greats",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "greave",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "greeds",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "greedy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "gremmy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "grided",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "griefs",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "grieve",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "griper",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "gripes",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "gritty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "groats",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "groggy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "groove",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "groszy",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "grotto",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "ground",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "grouty",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "groved",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "growan",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "growed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "grower",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "growly",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "growth",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "groyne",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "grubby",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "grudge",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gruffy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "grugru",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gruing",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "grumpy",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "grunge",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "guemal",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "guenon",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "guffaw",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "guggle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "guglet",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "guided",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "guider",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "guides",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "guidon",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "guiges",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "guilds",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "guiles",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "guilts",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "guilty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "guimpe",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "guitar",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "gulags",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "gulfed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "gulled",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "gullet",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "gulley",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gulped",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "gunman",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gurgle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gusted",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "guttae",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "guttle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "guying",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "guyver",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "guzzle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gybing",
        isCapitalized: true,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "gyrate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "gyrene",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "gyrons",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "gyrose",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "habile",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hadron",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hagbut",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "hagdon",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "haggle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "halest",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "halloo",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "hallow",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "halter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "halves",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "hametz",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "hamlet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hamper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hankie",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "happed",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "happen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "harass",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "harbor",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "harden",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "harder",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "harken",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "harlot",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "harrow",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hassle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hasten",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hating",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hatpin",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "hatred",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hatted",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "hatter",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "hauled",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hauler",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "haunch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "haunts",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hausen",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "havens",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "having",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hawged",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "hawing",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hazard",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hazier",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "hazing",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "hazmat",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hazzan",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "headed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "health",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "heaper",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "hearse",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hearth",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "heaven",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "hectic",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hector",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "heeder",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "heeled",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hefted",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "heifer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "height",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "heired",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "heller",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hemmed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "henley",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "herald",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "herbed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "herdic",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "heresy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hereto",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "heriot",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hermit",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hernia",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "heroic",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "herpes",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hetero",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "hetman",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hiatus",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hijack",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hiking",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hincty",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "hineys",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hirees",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hissed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hitter",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "hoagie",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "hoaxer",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "hobbit",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hobble",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "hocker",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hockle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "hogged",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "hogger",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "holder",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "holier",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "holler",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hollow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "holpen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "homage",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "homely",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "homier",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "homily",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "honcho",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "honest",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "honied",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "honing",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "honker",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "honors",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "hoodie",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hoodoo",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "hoofer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "hoopla",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hoopoe",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "hooray",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "hooted",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hoover",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hooves",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hoping",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "horded",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "hormic",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "horror",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "horsey",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hosier",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "hotdog",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hotkey",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "hotted",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "houris",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "housel",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "howler",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "howlet",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "hoyden",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "hubbed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "hubbub",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "hubcap",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "hubris",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "huckle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "huddle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "huemul",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "hugely",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "hugger",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "huipil",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "huldre",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "huller",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "hulloa",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "humane",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "humble",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "humped",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "hunger",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hunter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "hurled",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "hurrah",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "hurtle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "huzzah",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "hybrid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "hyenas",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "hyetal",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "hymned",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "hyssop",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "hyzone",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "iatric",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "ibidem",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "iceman",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "icicle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "iconic",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ideals",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "ideata",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "idiocy",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "idioms",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "idiots",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "idling",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "ignite",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ignore",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "iguana",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "ikigai",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "illude",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "imaged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "imager",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "images",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "imbibe",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "imbrue",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "imbued",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "impact",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "impair",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "impale",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "impart",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "impede",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "impend",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "imping",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "impish",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "import",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "impost",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "improv",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "impute",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "inarch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "incase",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "incher",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "incise",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "incite",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "inclip",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "income",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "indeed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "indent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "indict",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "indign",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "indite",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "indium",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "indole",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "indoor",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "induce",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "infamy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "infect",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "infers",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "infest",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "infirm",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "influx",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "infold",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "inform",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "infula",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "infuse",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "ingate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ingest",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ingulf",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "inhale",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "inhume",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "inject",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "injury",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "inland",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "inlier",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "innate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "inning",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "inroad",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "insane",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "insect",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "inside",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "insist",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "inspan",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "instal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "insula",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "insult",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "insure",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "intact",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "intend",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "intern",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "intime",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "intone",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "inturn",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "invade",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "invent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "invert",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "invest",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "invite",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "invoke",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "inwrap",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "iodine",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "iritic",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "iritis",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "ironer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "ironic",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "irrupt",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "island",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "isogon",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "isopod",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "issued",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "issuer",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "issues",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "isthmi",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "italic",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "itemed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "itself",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "ixodid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "jabber",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "jacked",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "jacket",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "jailer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "jambed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "jambes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "jambos",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "jammed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "jangle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "jansky",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "jargon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "jaunts",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "jaunty",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "jeeing",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "jeered",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "jelled",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "jennet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "jennie",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "jerboa",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "jereed",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "jerids",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "jerked",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "jersey",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "jested",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "jetton",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "jibing",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "jigged",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "jigsaw",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "jilted",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "jimply",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "jitney",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "jitter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "jivier",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "jobbed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "jockey",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "joints",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "josser",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "jostle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "jounce",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "jovial",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "joyful",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "joying",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "joyous",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "joypad",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "joypop",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "jubate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "jubbah",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "jubili",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "judder",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "judged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "judger",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "jugful",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "juggle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "juicer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "jumper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "jungly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "junior",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "junker",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "junket",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "junkie",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "juried",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "justed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "juster",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "justle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "kabaka",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kabuki",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "kaftan",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kahuna",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kaiser",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "kaishu",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "kaizen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kakapo",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kalian",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "kalmia",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kalong",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "kalpak",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "kalpis",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "kamala",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "kambal",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "kamiks",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "kanaka",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "kanban",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "kanone",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "kantar",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "kaross",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "kashim",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "keeper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "kegler",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "kelson",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "kenned",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "kerbed",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "kernel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "kettle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "kibitz",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kiddos",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "kidvid",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "kikuyu",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "kilijs",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "kimchi",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "kimono",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "kinder",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "kindle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "kindly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "kinema",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "kinged",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "kinked",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "kinkle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "kinkly",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "kipuka",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kirpan",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kirsch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kirtle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kismet",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "kiting",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "kitsch",
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "klaxon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kludge",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "knight",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "knocks",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "knolly",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "knower",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "kobold",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "kookie",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "kopeck",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kopeks",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "korona",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "koruna",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "koruny",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "kosher",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "kowhai",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "kumiss",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "kutcha",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "kvetch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "laager",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "labara",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "labels",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "labial",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "labile",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "labium",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "lablab",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "labneh",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "labour",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "labret",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "labrid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "labrum",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "lacing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lackey",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "lacuna",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "ladies",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "ladled",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "laguna",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "lakers",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "lambda",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lamboy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "lament",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lamiae",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "lamina",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lampas",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "lancet",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "landau",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "lapdog",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "lapels",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "lapped",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "lapsed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "larges",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "lariat",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "larine",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "larvae",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "larynx",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "lascar",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "lashes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "lashup",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "lasses",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "lassie",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "lassos",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "laster",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "lastly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "latahs",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "lateen",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "latent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "latest",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "latish",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "latter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "lauded",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "laurel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lavish",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lawful",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "laxity",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "layman",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "layout",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "lazied",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "lazies",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "leaden",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "leader",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "league",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "leanly",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "learnt",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "leaves",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "lebbek",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "lector",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "lefses",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "legacy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "legals",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "legend",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "legged",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "legion",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "legist",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "leglen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "legong",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "legume",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "lemony",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "lender",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "length",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "lenite",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lenity",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "lensed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "lesion",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lessee",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lessen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lesser",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "lesses",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "lesson",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "lethal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "leucon",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "levant",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "leveed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "levels",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "levied",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "levity",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "liable",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "liaise",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lianes",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "lichen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lieges",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "ligase",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "ligate",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "lights",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "ligule",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "likens",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "likers",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "likest",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "liking",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "likker",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "likuta",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "lilied",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "limbed",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "limber",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "limbic",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "limbos",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "limbus",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "limits",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "linear",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "lineup",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "linger",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lining",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "linkup",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "linnet",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "lippen",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "lipper",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "liquid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "listen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "lithia",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "litmus",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "little",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "lively",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "livery",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "livest",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "living",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "lizard",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lizzie",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "llamas",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "loaded",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "loader",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "loafed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "loafer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "loaner",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "loathe",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "loaves",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lobbed",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "lobola",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "lochus",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "locker",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "locket",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "locule",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "locums",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "locust",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lodges",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "lofted",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "logger",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "loggia",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "loggie",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "loiter",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "lolcat",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "lollop",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "longan",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "longer",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "looser",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "looted",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "lopped",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "lordly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "louted",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "louvre",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "lovage",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "lovely",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "lowing",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "lubber",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "lucent",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "luffas",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "lugers",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "luging",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "lulled",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "lumbar",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lupine",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "luring",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "lurked",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "lushed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "luster",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "luting",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "lutose",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "luxury",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "lyceum",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "lyings",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "lyrate",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "maches",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "macron",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "macula",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "madame",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "madams",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "madcap",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "madras",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "madtom",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "magged",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "maggid",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "maggot",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "magpie",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "maiden",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "maigre",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "maimed",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "mained",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "mainly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "majlis",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "majors",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "makeup",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "making",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "mallet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mallow",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mammal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "manage",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "manger",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "maniac",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "manies",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "manini",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "manner",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "mantis",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mantle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mantra",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "manual",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "manure",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "margin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "marked",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "market",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "marmot",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "marque",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "marred",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "marron",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "marrow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "marshy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "martel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "marten",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "martyr",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mascle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mascon",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mascot",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mashed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "masjid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "masque",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "massed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "massif",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mastax",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "masted",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "master",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "mastic",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "matcha",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "maters",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "mating",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "matins",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "matres",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "matrix",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "matron",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "matter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "mature",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "matzah",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "matzoh",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "matzot",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "maundy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "mavins",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "maxima",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "mayhem",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mazuma",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "meacon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "meager",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "meagre",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "mealie",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "meaner",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "meanie",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "meanly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "measle",
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "median",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "medium",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "medlar",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "meeker",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "meekly",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "meeter",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "meetup",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "megara",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "megass",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "megilp",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "melena",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "mellow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "member",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "memoir",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "memory",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "menace",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mended",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "menial",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "meninx",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "mensch",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mental",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "mentee",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mentor",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "merest",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "merger",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "merida",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "merits",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "mesail",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "method",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "metier",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "metric",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "metros",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "mewled",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "miaous",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "miaows",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "miasma",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "miauls",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "mickey",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "mickle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "micron",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "midday",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "midden",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "middle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "midget",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "midrib",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "midway",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mielie",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "miffed",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "mighty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mignon",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mihrab",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "mikado",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "miking",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "miller",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "millet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mimosa",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "minder",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mingle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "minion",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "minnow",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "minors",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "minted",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "mirage",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mirror",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "misact",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "misaim",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "miscue",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "misfit",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mishap",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mishit",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "misled",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "missal",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "missed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "misses",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "misuse",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mitten",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mobber",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "mobile",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "modern",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "modest",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "modify",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "module",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "moiety",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "moksha",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "molest",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "moloch",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "molten",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "moment",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "momism",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "mommie",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "monads",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "mondes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "moneys",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "monger",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mongoe",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "mongol",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "monial",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "monied",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "monies",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "monish",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "monism",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "monist",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "monkey",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "monoid",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mopier",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "morale",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "morass",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "morbid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "morose",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mortal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mosaic",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mosque",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mother",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "moting",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "motion",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "motley",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "motser",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mottle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "mottos",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "motzas",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "motzer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mought",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "moujik",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "mouldy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "moulin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mouser",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "mousey",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "mousse",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mouthy",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "moving",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "mowing",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "muches",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "muckle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "mudcat",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "muddle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "muggle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "mulier",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "mulley",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "murder",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "murmur",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "muscle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "musing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mussed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "mussel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "musted",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "mustee",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "muster",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "musths",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "mutant",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mutate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mutely",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "muting",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "mutiny",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mutter",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "mutual",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "mutule",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "muumuu",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "muzhik",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "muzzle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "myases",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "myasis",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "myelin",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "myopia",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "myopic",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "myriad",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "myrica",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "myself",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mystic",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "mythoi",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "nabbed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "namely",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "napalm",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "napier",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "nappie",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "narrow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "nasion",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "nastic",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "natant",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "nation",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "native",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "natter",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "nature",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "naught",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "nausea",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "nautch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "naysay",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "neared",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "nearer",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "nearly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "neater",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "neatly",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "nebris",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "nebula",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "necked",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "necker",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "nectar",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "needed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "needle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "negate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "nekton",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "nelson",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "nephew",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "nesses",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "nested",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "nestle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "netman",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "neural",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "neuron",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "neuter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "nevoid",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "niches",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "nikkud",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "nilled",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "nimble",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "nimbly",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "nimbus",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "nimrod",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "niobic",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "nipper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "nipple",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "nitfly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "nitric",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "nocent",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "noctis",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "nodose",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "nodous",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "nodule",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "nonego",
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "nordic",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "nudged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "nudges",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "nudist",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "nudity",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "nulled",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "number",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "numina",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "nuncio",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "nuncle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "nurled",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "nutjob",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "nutria",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "oaktag",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "obeyer",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "object",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "oblige",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "obsess",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "obtain",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "obtund",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "obtuse",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "occurs",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "oceans",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "ochrea",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "octane",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "oculus",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "oddity",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "odious",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "oedema",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "oeuvre",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "offals",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "offend",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "office",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "offset",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "ohmage",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "oidium",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "oilcan",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "oiling",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "okayed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "okoume",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "oldest",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "oldies",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "oleate",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "olives",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "omelet",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "onding",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "online",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "onload",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "opaque",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "opiate",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "opined",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "opioid",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "oppose",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "optics",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "optima",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "option",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "orache",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "oracle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "orants",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "orator",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "orbier",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "orbing",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "orcein",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "ordeal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ordure",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "orenda",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "orfray",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "organs",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "orient",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "origin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "orison",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "ornate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ornery",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "oroide",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "orphan",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "osprey",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "ossify",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "ouched",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "oughts",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "ounces",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "ourari",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "outate",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "outcry",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "outcut",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "outeat",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "outfed",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "outfit",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "outfly",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "outing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "outlaw",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "outlet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "outman",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "output",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "outran",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "outrun",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "outsat",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "outset",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "outsit",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "outspy",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "outvie",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "outwit",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "oxtail",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "oxygen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "oyeses",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "ozonic",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "pacify",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "packer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "packet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "padded",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "padeye",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "padouk",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "paella",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "paging",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "paired",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "pairle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pajama",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "palace",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "palate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "palely",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "palila",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "palled",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "pallet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "palpal",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "palpus",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "paltry",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pampas",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "pamper",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "panada",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pandal",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "panful",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "panini",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "papacy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "papain",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "papist",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "parade",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "paramo",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "paraph",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "parcel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pardon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "parens",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "parent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "pariah",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "parish",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "parity",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "parked",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "parody",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "parrot",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "partis",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "parure",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "parvis",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "pascal",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pashas",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "paskha",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "passed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "passel",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "passer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "passim",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "passus",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pasted",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "pastel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "paster",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pastis",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pastor",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pastry",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "patent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "pathos",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "patine",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "patios",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "patois",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "patrol",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "patron",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "patten",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pawing",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "payday",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "paying",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "peaked",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "peasen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pebble",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pecked",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "pecten",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pectin",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pedant",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "peddle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pedlar",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pedler",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "pedway",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "peeled",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "peeler",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "peened",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "peeped",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "peewit",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pegbox",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "pegged",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "pelage",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pellet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pelota",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pencil",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "penile",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "penman",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "penner",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "pensee",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "penury",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "people",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "peplum",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "pereia",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "permed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "person",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "peseta",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pester",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "petite",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pettle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "phalli",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "phasic",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "phasis",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "phasor",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "phenol",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "phenom",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "phlegm",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "phloem",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "phobia",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "phobic",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "phonal",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "phoned",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "phoney",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "phonon",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "phooey",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "phrase",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "phreak",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "phylae",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "phyllo",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "phylum",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "physes",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "physis",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pianic",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "picker",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "picket",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pickle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pickup",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "picnic",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pidgin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "pierce",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "piffle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "piggin",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pignut",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "pigsty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "pikake",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "piking",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "pileup",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "piling",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "pillar",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pilons",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "pilose",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pilots",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "pilule",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pimple",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pimply",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "pinang",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pinard",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pinata",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "pindan",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pineal",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pinene",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pining",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "pinked",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "pinker",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "pipped",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "pippin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "pirate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pistil",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pistol",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pitaya",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "pitier",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pivots",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "placas",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "placid",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "plagal",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "plaice",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "plaint",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "planar",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "planch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "planer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "planes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "planet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "plaque",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "plater",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "please",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "pleiad",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "plenty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "plenum",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "plexus",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pliant",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "plight",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "plinth",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "plombs",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "ployed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "plumed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "plunge",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "plural",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pluses",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "plushy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "plying",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "podite",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "podium",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "podzol",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "poetic",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "poetry",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "poises",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "poison",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "polity",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pollen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "polyol",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "ponder",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pooing",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "poplin",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "popple",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "portal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "portly",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "posada",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "posies",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "posing",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "posset",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "potage",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "potash",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "potato",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "poteen",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "potent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pother",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pothos",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pouffy",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "pouter",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "praise",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "prance",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pranky",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "praxis",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "prayer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "preach",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "preage",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "prefab",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "prefer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "preset",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pretty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "preyer",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "pricky",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "prided",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "primal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "primly",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "prince",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "prints",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "priory",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "prison",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "prissy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "privet",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "probie",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "profit",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "projet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "prompt",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "propel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "proper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "prosed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "prosit",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "proven",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "pseudo",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "psycho",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ptotic",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "public",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "puddle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "puller",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "pulpit",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "pulsar",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "pummel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "punchy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pundit",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "punkin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "puppet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "purfle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "purify",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "purist",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "purity",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "purple",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "purree",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "purser",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "pursue",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "purvey",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "putter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "python",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "pyuria",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "quagga",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "quails",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "quaint",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "qualms",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "quanta",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "quarte",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "quarto",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "quarts",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "quatre",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "quatro",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "quaver",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "queasy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "quench",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "queued",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "queuer",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "quinoa",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "quitch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "quiver",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "quoits",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "quorum",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "quoter",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "quotes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "quotha",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "rabbit",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "racier",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "racily",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "racism",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "racket",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "radars",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "radial",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "radish",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "radium",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "raffee",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "raffle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ragman",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "raided",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "raider",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "railed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "rained",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "raised",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "raisin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "raking",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "rakish",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "ramble",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "ramify",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "ramjet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "ramson",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "rancid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rancor",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "random",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "ranger",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rankly",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "ransom",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rapier",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "rapini",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "rapist",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "rappee",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "rapper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rarefy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "rarely",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "rarity",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rashly",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "rasped",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "rassle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "raster",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ratify",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ration",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ratios",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "rattan",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ravine",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "raving",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ravish",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "reachs",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "really",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "realms",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "realty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "reaper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "reason",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "reated",
        isCapitalized: true,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "rebait",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "rebate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "rebuke",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "recall",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "recede",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "recent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "recess",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "recite",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "reckon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "reclad",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "recoin",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "recopy",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "record",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "recoup",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rector",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "recuse",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "redact",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "reddle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "redeem",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "reduce",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "reduct",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "reefed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "reefer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "reemit",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "reeved",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "refeed",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "refelt",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "refers",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "refill",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "reform",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "refuge",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "refuse",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "refute",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "regale",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "regard",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "regent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "reggae",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "regina",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "region",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "regive",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "regret",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "rehash",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "reject",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "relace",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "relate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "relend",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "relent",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "relevy",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "relict",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "relish",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "remain",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "remand",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "remark",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "remedy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "remend",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "remind",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "remise",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "remiss",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "remits",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "remote",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "render",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "renege",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "renown",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "renter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "reopen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "repair",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "repast",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "repeal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "repeat",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "repent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "replan",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "replay",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "repled",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "replot",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "replow",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "report",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "repose",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "repute",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "rerise",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "reseau",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "resent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "reshod",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "resign",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "resile",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "resist",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "resole",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "resorb",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "resort",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "respot",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "resuit",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "result",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "resume",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "retain",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "retcon",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "retell",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "retire",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "retold",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "retool",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "retort",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "retype",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "reused",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "reveal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "reverb",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "revere",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "revert",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "revery",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "revest",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "review",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "revise",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "revive",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "revoke",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "revolt",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "revote",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "rewind",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rewrap",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "rhythm",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ribald",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "richer",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "ricing",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "ridded",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "ridged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "riding",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "riffle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "rifted",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "rigged",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "righto",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "rioter",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "ripper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rising",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "risker",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "risque",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "ritual",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rivage",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "rivets",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "roadie",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "roarer",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "robalo",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "robber",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "robots",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "robust",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "rocket",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rococo",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "rodded",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "rodeos",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "roofie",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rosets",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "roster",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rotate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rotten",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rotter",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "rottes",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "rotund",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "rounds",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "rouser",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "rubied",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "rubric",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "rudest",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "rueful",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "ruined",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "runlet",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "runout",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "rutile",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "rutter",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sabalo",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "sabbat",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "sabora",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sachem",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "sachet",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sacker",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sacral",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sacred",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sacrum",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sadden",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "saddle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sadism",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sadist",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "safari",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "safely",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "safety",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sagged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "salaam",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "salary",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "salute",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "salver",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "samekh",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "sample",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sanity",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sanjak",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "santir",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sateen",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "satiny",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "satire",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "saucer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "savage",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "savory",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sawyer",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "sayest",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "saying",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "scared",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "scarer",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "scathe",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "schema",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "scheme",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "schism",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "schist",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "schnoz",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "school",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "schuln",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "schwag",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "scivvy",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "sconce",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "scores",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "scotch",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "scouth",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "scream",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "screed",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "screen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "scrimp",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "scrota",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "scurry",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "scutch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "scuzzy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "seabed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "seaman",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "seamer",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "seance",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "search",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "season",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "second",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "secret",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sector",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "secure",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sedans",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "sedate",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "seduce",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "seeing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "seethe",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "segway",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "seisin",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "seized",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "seizes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "seldom",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "senary",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sendee",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "sender",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "senile",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "senior",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "senora",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "sensei",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sensor",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sequel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sequin",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "seraph",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "serdab",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "serene",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "serged",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "serial",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "series",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "serine",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sermon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "served",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "setose",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "setout",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "settle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sexism",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sextan",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "sextet",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "sextic",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "shaley",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "shalom",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "shaman",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "shanny",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "sharer",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "shaver",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "shaykh",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sheath",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sheave",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "shelty",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "sherry",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "shivoo",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "shower",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "shrewd",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "shrill",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "shrimp",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "shrink",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "shrive",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "shroud",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "shrove",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "shrunk",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "shtetl",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "shying",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "sialic",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "siddhi",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "signee",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "silent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "silica",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "silken",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "siloed",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "simile",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "simper",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "simple",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sinewy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "single",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "singly",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "siphon",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sipper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "sister",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sizing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sizzle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "skeeve",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sketch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "skiing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "skinny",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "skivvy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "sklent",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "skyway",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "slated",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "sledge",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sleigh",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sliver",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "slobby",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "slough",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sluice",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "slurve",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "slyest",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "smacks",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "smegma",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "smirch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "smokey",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "smooth",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "snarky",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "snatch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "snazzy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "sneaky",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "snider",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "sobbed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "social",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "socked",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "socket",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sodded",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "sodden",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "softer",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "softly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "soigne",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "solace",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "solder",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "solely",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "solemn",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "solute",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "solved",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "sopher",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sopped",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "sorbed",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "sorbic",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "sordid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sorrow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sotted",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "source",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sovran",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "spaces",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "sparky",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "sparse",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "spavin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "specie",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "speech",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "spents",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "spider",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "spigot",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "spiral",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "spired",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "spires",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "spirit",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "spited",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "splake",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "splash",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "spoilt",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "spokes",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "spooky",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "spoony",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "sporal",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "spores",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "sporty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "spouse",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sprang",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sprawl",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "spread",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "spring",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sprint",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "spunky",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "squads",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "squall",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "square",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "squawk",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "squeal",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "squint",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "squirm",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "stable",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "stairs",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "stalky",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "stanch",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "staned",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "stanza",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "starch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "stared",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "starts",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "starve",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "states",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "static",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "statin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "statue",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "status",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "steaks",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "steams",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "steely",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "stelai",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "steppe",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "steric",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "stigma",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "stingy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "stints",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "stirps",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "stithy",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "stocky",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "stoles",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "stolid",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "stones",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "stored",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "stotin",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "strain",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "strait",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "strand",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "strata",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "streak",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "stream",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "street",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "stress",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "strewn",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "strict",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "stride",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "strife",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "strike",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "stripe",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "stript",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "strive",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "stroke",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "stroll",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "strong",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "studio",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "stupid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "styled",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "stylus",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "stymie",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "sublot",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "submit",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "subtle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "suburb",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "subway",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "succor",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "sucker",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sudden",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "sudoku",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sueded",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "suffer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "suffix",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sugary",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "suited",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "suitor",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "sullen",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sultry",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "summit",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "summon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sundry",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "sunset",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "superb",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "supine",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "supple",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "supply",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "surety",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "surrey",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "suslik",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "susses",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "suture",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "swabby",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "swanky",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "swaraj",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "swivel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "symbol",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "system",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },

    {
        word: "tabour",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "tactic",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "tagged",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "taille",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "tailor",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "taking",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "talcum",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "talent",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "talker",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "tallit",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "tamest",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "tamper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "tandem",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "tangle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "tapers",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "tartly",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "tassel",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "tattle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "tattoo",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "taunts",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "tauter",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "tawdry",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "tearer",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "teaser",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "techno",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "teensy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "temper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "tenant",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "tenets",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "tenter",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "tenure",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "terror",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "tetchy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "texted",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "thawed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "thebes",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "thecal",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "themed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "theory",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "thesis",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "thirty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "thorax",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "thoria",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "thoron",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "thoued",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "though",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "thrash",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "thread",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "threat",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "thrive",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "throne",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "throng",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "thrown",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "thrust",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "thusly",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "tibiae",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "tibias",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "ticket",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "tidbit",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "tiddly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "tiepin",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "tiffed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "tiling",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "timbre",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "timely",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "timing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "tinder",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "tinged",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "tinkle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "tinned",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "tinner",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "tipper",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "tiptoe",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "tirade",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "tiring",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "tisane",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "tissue",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "tither",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "tittle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "toches",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "tokens",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "toling",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "tombed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "tomboy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "tomcat",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "tonger",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "tooter",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "topics",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "topped",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "topple",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "torero",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "torpid",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "torpor",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "torque",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "torrid",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "totals",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "totems",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "toting",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "totter",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "toucan",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "touche",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "toughs",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "touter",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "toward",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "towels",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "towing",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "toxins",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "tracts",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "traits",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "trance",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "transe",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "trapan",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "trashy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "travel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "treads",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "tremor",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "triage",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "trifle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "trinal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "triple",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "triply",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "tripod",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "troika",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "troked",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "trophi",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "trophy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "tropic",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "trotty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "trough",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "troupe",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "trudge",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "truest",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "truism",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "trying",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "tsades",
        isCapitalized: true,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "tsuris",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "tulles",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "tumble",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "tumult",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "tuning",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "tunnel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "turbid",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "turgid",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "turkey",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "turned",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "turnon",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "tuyere",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "tuyers",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "twenty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "twiner",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "twines",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "twirls",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "twitch",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "typhus",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "tyrant",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "tzuris",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "uakari",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "ubiety",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "ubique",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "uglify",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "ullage",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "ulluco",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "ulster",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "ultima",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "ultimo",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "unable",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "unbold",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "uncalm",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "unread",
        isCapitalized: true,
        isRoot: false,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "undoes",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "undraw",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "unduly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "uneven",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "unfair",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "unfree",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "ungirt",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "unguis",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "unhewn",
        isCapitalized: true,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "unhung",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "unions",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "unique",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "unison",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "united",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "unkept",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "unlade",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "unlike",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "unmoor",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "unpick",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "unseam",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "unsexy",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "unsort",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "unspun",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "unstep",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "unsued",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "unsure",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "untame",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "untold",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "untrue",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "unvain",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "unveil",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "unwary",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "unwild",
        isCapitalized: true,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "unwind",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "unwish",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "update",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "uphill",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "uphold",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "uplift",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "upmost",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "uppity",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "uprise",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "uproot",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "upshot",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "uptake",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "upvote",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "uraeus",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "urchin",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "useful",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "ushers",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "usward",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "utmost",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "utopia",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "uvular",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "vacant",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "vacate",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "vacuum",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "vahine",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "valise",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "valley",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "valued",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "vandal",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "vanity",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "vanned",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "varied",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "varies",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "varlet",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "vassal",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "vector",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "veinal",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "velure",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "velvet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "venine",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "venues",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "verbal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "verger",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "verier",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "verily",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "verity",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "vermin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "versus",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "vested",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "vestry",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "vetted",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "viable",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "vialed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "viator",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "vicing",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "victim",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "vimana",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "vinous",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "virgin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "virile",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "viroid",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "virtue",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "visaed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "visage",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "vising",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "visual",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "vitals",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "vivify",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "vizsla",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "volant",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "volute",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "vortex",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "voyeur",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "vulgar",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "wagged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "waived",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "walker",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "wampus",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "wanton",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "warble",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "warier",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "wasted",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "waster",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "wavies",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "waxing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "waylay",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "wealth",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "weblog",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "wedded",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "wedeln",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "wedged",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "wedges",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "weight",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "welder",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "welkin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "welter",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "wether",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "whaled",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "wheeze",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "whiles",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "whimsy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "whiney",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "whinny",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "whisky",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "whizzo",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "whoops",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "whoosh",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "wiccan",
        isCapitalized: true,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "wicked",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "widest",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "wieldy",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "wifing",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "wiggle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "wilder",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "wilier",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "wilily",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "willow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "wilted",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "wimple",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "windle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "window",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "winged",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "winner",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "winnow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "winter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "wintry",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "wisdom",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "wisely",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "wisent",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "withal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "wither",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "wivern",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "wizard",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "wolves",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "wonder",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "wonted",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "wooded",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "woofer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "woolly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "worded",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "worser",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "worses",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "worthy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "wreaks",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "wreath",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "wrench",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "wretch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "writer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "writhe",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "yearns",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "yellow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "yelper",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "yerked",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "yesses",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "zaddik",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "zaffer",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "zaftig",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "zaikai",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "zanana",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "zander",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "zanier",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "zanily",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "zareba",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "zealot",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "zeatin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "zechin",
        isCapitalized: true,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "zedonk",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "zenana",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "zenith",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "zephyr",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "zeroth",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "zeugma",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "zigzag",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "zipped",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "zither",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "zodiac",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "zombie",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "zonate",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "zoning",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "zoonal",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "zouave",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    }
]
    .map(o => o.word);

// NEED TO GO BACK AND DO non elementary for A-D

missed.forEach((word) => {
    const url = `https://www.bing.com/search?q=define+${word}`;

    fixture`// ${word}`
        .page`https://www.bing.com/search?q=define+${word}`;

    test(`// ${word} defs and syns`, async t => {
        const fileName = `${word}.js`;
        const lines = [];

        const definitions = Selector('.b_demoteText.b_sectxt');
        const definitionsCount = await definitions.count;

        lines.push('export const definitions = [');
        for (let i = 0; i < definitionsCount; i++) {
            const definition = definitions.nth(i);
            const definitionText = await definition.innerText;
            lines.push("'" + definitionText + "',");
        }

        lines.push(']');

        const synonyms = Selector('.b_nymsItem');

        lines.push('export const synonyms = [');
        const synonymCount = await synonyms.count;
        for (let i = 0; i < synonymCount; i++) {
            const synonym = synonyms.nth(i);
            const synonymText = await synonym.innerText;
            lines.push("'" + synonymText + "',");
        }
        lines.push(']');
        fs.writeFileSync(fileName, lines.join('\n'))
    });
});