import { writable } from "svelte/store";

export const languageConfig = writable(
    [
        {
            id: 1, name: 'targetAudience', value: 1, labels: [
                'Mom', 'HR', 'Colleague'
            ]
        },
        {
            id: 2, name: 'verboseLevel', value: 1, labels: [
                'Elevator',
                'Interview',
                'Insuffable'
            ], icons: [
                'fa-elevator',
                'fa-user-tie',
                'fa-skull'
            ]

        },

    ]
)

export const caseStudies = [

    { id: 1, name: 'Obviously #1', label: 'obviously', url: "/casestudy/obviously", desc: "Implementing design process at a startup.", img: "../thumbnails/obv_influencer.jpeg" },
    { id: 2, name: 'Obviously #2', label: 'obviouslyAttributes', url: "/casestudy/obviouslyAttributes", desc: "Flexing a rigid codebase.", img: "../thumbnails/tracker.png" },

    { id: 3, name: 'Obviously #3', label: 'obviouslyEfficiency', url: "/casestudy/obviouslyEfficiency", desc: "Pivoting to efficiency post-merger with AI/ML.", img: "../thumbnails/workshop.png" },

    { id: 4, name: 'mastercard', label: 'mastercard', url: "/casestudy/mastercard", desc: "Translating business and data engineering into design speak.", img: "../thumbnails/mastercard.png" },
    { id: 5, name: 'Worldpay (FIS)', label: 'worldpay', url: "/casestudy/worldpay", desc: "Using Design Thinking to consolidate duplicate products.", img: "../thumbnails/fis.png" }

]

export const techDemos = [
    {
        id: 1,
        name: 'AI Yelp + Maps',
        label: 'aiMaps',
        url: '/techdemos/aiMaps',
        img: "../thumbnails/aiMaps1.png",
        desc: 'Llama2 & Google Maps'
    },
    // {
    //     id: 2,
    //     name: 'Current Portfolio',
    //     label: 'portfolio',
    //     url: '/techdemos/portfolio',
    //     img: "../thumbnails/fis.png",
    //     desc: 'Svelte & Vercel'
    // },
    {
        id: 3,
        name: 'Sales Prototype',
        label: 'salesPrototype',
        url: '/techdemos/salesPrototype',
        img: "../thumbnails/fis.png",
        desc: 'React & Firebase'
    },
    {
        id: 4,
        name: 'Music Tracker',
        label: 'musicTracker',
        url: '/techdemos/musicTracker',
        img: "../thumbnails/fis.png",
        desc: 'Vue, PHP & Apple Music'
    },
    {
        id: 5,
        name: 'Worldpay UI',
        label: 'worldpay',
        url: '/techdemos/worldpay',
        img: "../thumbnails/fis.png",
        desc: 'Angular & Firebase'
    }
]

export let audioFiles = [
    {
        id: 0,
        label: 'History and background ',
        ogg: '../audio/001_background-history.ogg',
        mp3: '../audio/001_background-history.mp3',
        m4a: '../audio/001_background-history.m4a',
        subtitles: '../audio/001_background-history.vtt'
    },
    {
        id: 1,
        label: 'What’s your design process? ',
        ogg: '../audio/002_design-process.ogg',
        mp3: '../audio/002_design-process.mp3',
        subtitles: '../audio/002_design-process.vtt'
    },
    {
        id: 2,
        label: 'What are your strengths? ',
        ogg: '../audio/003_strengths.ogg',
        mp3: '../audio/003_strengths.mp3',
        subtitles: '../audio/003_strengths.vtt'
    },
    {
        id: 3,
        label: 'What are your weaknesses? ',
        ogg: '../audio/004_weaknesses.ogg',
        mp3: '../audio/004_weaknesses.mp3',
        subtitles: '../audio/004_weaknesses.vtt'
    },
    {
        id: 4,
        label: 'Tell me about a recent project ',
        ogg: '../audio/005_recent-project-ai.ogg',
        mp3: '../audio/005_recent-project-ai.mp3',
        subtitles: '../audio/005_recent-project-ai.vtt'
    },
    {
        id: 5,
        label: 'Tell me about a recent hurdle',
        ogg: '../audio/006_hurdle-ai.ogg',
        mp3: '../audio/006_hurdle-ai.mp3',
        subtitles: '../audio/006_hurdle-ai.vtt'
    },
    {
        id: 6,
        label: 'How do you determine success? ',
        ogg: '../audio/007_success.ogg',
        mp3: '../audio/007_success.mp3',
        subtitles: '../audio/007_success.vtt'
    },
    {
        id: 7,
        label: 'What is your work and leadership style?',
        ogg: '../audio/008_leadership-style.ogg',
        mp3: '../audio/008_leadership-style.mp3',
        subtitles: '../audio/008_leadership-style.vtt'
    }
];

export let toggleSections = [
    {
        id: 0,
        label: 'Introduction',
        div: 'introLetter',
        isVisible: true
    },
    {
        id: 1,
        label: 'Logos',
        div: 'introLogos',
        isVisible: true
    },
    {
        id: 2,
        label: 'Audio-Based Mock Interview',
        div: 'introAudio',
        isVisible: false
    },
    {
        id: 3,
        label: 'Skills Assessment',
        div: 'introSkills',
        isVisible: false
    },
    {
        id: 4,
        label: 'Work Style',
        div: 'introSocial',
        isVisible: false
    },
    {
        id: 5,
        label: 'Case Studies',
        div: 'introCaseStudies',
        isVisible: true
    },
    {
        id: 6,
        label: 'Tech Demos',
        div: 'introTechDemos',
        isVisible: true
    },
    {
        id: 7,
        label: 'Work History',
        div: 'introWork',
        isVisible: true
    },
    {
        id: 8,
        label: 'Keywords',
        div: 'introKeywords',
        isVisible: true
    }
];