// const request = require('request');
// const cheerio = require('cheerio');
// const puppeteer = require('puppeteer');
import { Selector } from 'testcafe';

let missed = [
    {
        word: "babble",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "babied",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "babies",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "baboon",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "backed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "backer",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "backup",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "badass",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "badder",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "baddie",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "badged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "badger",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "badges",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "badman",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "baffle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bagged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bagger",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "baggie",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bagman",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bagmen",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "bailed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bailer",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bairns",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "baited",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "baiter",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "bakery",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "baking",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "balder",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "baldly",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "baleen",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "balers",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "baling",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "balked",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "ballad",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "balled",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "baller",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "ballet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "ballot",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "ballsy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "balsam",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bamboo",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "banana",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "banded",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bander",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bandit",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "banged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "banger",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bangle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "banish",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "banked",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "banker",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "banned",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "banner",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bantam",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "banter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "banyan",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "banzai",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "baobab",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "barbed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "barbel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "barber",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "barbie",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bardic",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "barely",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "barest",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "barged",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "barges",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "baring",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "barite",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "barium",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "barked",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "barker",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "barley",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "barman",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "barons",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "barony",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "barque",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "barred",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "barrel",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "barren",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "barrow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "barter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "baryon",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "basalt",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "basely",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "basest",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bashed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "basher",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bashes",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "basics",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "basing",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "basked",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "basket",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "basque",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "basset",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "basted",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "baster",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bateau",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bathed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bather",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bathes",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "bathos",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "batman",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "batons",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "batted",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "batten",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "batter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "battle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bauble",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "baying",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bazaar",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "beachy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "beacon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "beaded",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "beagle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "beaker",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "beamed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "beanie",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bearer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "beasts",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "beaten",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "beater",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "beauty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "beaver",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "beckon",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "become",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bedbug",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bedded",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bedlam",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bedpan",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "beeped",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "beeper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "beetle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "befall",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "befell",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "before",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "begets",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "beggar",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "begged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "begins",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "behalf",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "behave",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "beheld",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "behest",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "behind",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "behold",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "beings",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "belfry",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "belief",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "belies",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "bellow",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "belong",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "belted",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "belter",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "beluga",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bemoan",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bemuse",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bended",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bender",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "benign",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "berate",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bereft",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "berlin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "berths",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "besets",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "beside",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bested",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bestir",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bestow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "betide",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "betray",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "better",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bettor",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bewail",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "beware",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bhakti",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "biased",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "biases",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bibles",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bicker",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bidder",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "biding",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "biffed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bifold",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bigamy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bigeye",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bigger",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "bigwig",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "biking",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bilked",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "biller",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "billet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "billow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "binary",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "binder",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "binged",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "biogas",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bionic",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "biopsy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "biotic",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "biotin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "birder",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "birdie",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "births",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "bisect",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bishop",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bisque",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bistro",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bitchy",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "biters",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "biting",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bitmap",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bitten",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bitter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "blacks",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "bladed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "blader",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "blamed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "blanch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "blanks",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "blared",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "blazer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "blazes",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "blazon",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bleach",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bleary",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bleats",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "blenny",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "blight",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "blimey",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "blinds",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "blinks",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "blithe",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "blocks",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "blocky",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "blonde",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bloody",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "blotch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "blouse",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "blousy",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "blowed",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "blower",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "blowup",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bluesy",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bluffs",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bluing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bluish",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "blunts",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "blurbs",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "blurry",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "blurts",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "boards",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "boater",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bobbed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bobber",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bobbin",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bobble",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bobcat",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bodega",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bodice",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bodied",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bodies",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bodily",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "boding",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bodkin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "boffin",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "boggle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bolder",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "boldly",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bolero",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bomber",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bonito",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bonked",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "bonnet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "boogie",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "booked",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "boomer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "borate",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "border",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "boreal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "borrow",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bosoms",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "bossed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "bosses",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "botany",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bother",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "botnet",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bottle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bottom",
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bougie",
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bouncy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bounds",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "bounty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bourne",
        isCapitalized: true,
        isRoot: false,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bowels",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "bowers",
        isCapitalized: true,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bowery",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bowing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bowled",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "bowler",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bowman",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bowmen",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "boxcar",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "boxing",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "braced",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "bracer",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "braces",
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "brains",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "brainy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "braked",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "brakes",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "branch",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "brandy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "brassy",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bratty",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "braved",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "braver",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "braves",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bravos",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "brawny",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "brayed",
        isCapitalized: false,
        isRoot: false,
        complexity: "Post-College"
    },
    {
        word: "brayer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "brazen",
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "breads",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "breaks",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "breast",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "breech",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "breeds",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "breeze",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "breezy",
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "brewer",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "briars",
        isCapitalized: false,
        isRoot: false,
        complexity: "College"
    },
    {
        word: "bridge",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bridle",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "broach",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "broads",
        isCapitalized: true,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "broken",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "broker",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bronze",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "browns",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "browse",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "brushy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "brutal",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bubble",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bubbly",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bucked",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "budget",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "budgie",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "buffed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "buffer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "buffet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bugged",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "bugger",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bugler",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "builds",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "bulged",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bulgur",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bulked",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "bullet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bumble",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bummed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "bummer",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bumper",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bundle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bungee",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bungle",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bunion",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bunked",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "bunker",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bunkum",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bunted",
        isCapitalized: false,
        isRoot: false,
        complexity: "Middle School"
    },
    {
        word: "buoyed",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "burble",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "burden",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "bureau",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "burger",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "burgle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "burial",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "buried",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "buries",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "burlap",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "burley",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "burned",
        isCapitalized: false,
        isRoot: true,
        complexity: "unknown"
    },
    {
        word: "burner",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "burnet",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "burrow",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bursar",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "burton",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "busboy",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bushed",
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bushel",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "busied",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "busier",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "busily",
        isCapitalized: false,
        isRoot: true,
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
        isCapitalized: false,
        isRoot: true,
        complexity: "College"
    },
    {
        word: "bussed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "busses",
        isCapitalized: false,
        isRoot: false,
        complexity: "High School"
    },
    {
        word: "busted",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "buster",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "bustle",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "butane",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "butler",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "butted",
        isCapitalized: false,
        isRoot: false,
        complexity: "Elementary"
    },
    {
        word: "butter",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "button",
        isCapitalized: false,
        isRoot: true,
        complexity: "Elementary"
    },
    {
        word: "buying",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "buyout",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "buzzed",
        isCapitalized: false,
        isRoot: false,
        complexity: "unknown"
    },
    {
        word: "buzzer",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
    },
    {
        word: "bygone",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "byline",
        isCapitalized: false,
        isRoot: true,
        complexity: "High School"
    },
    {
        word: "bypass",
        isCapitalized: false,
        isRoot: true,
        complexity: "Middle School"
    },
    {
        word: "byword",
        isCapitalized: false,
        isRoot: true,
        complexity: "Post-College"
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