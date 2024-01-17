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

    { id: 1, name: 'Obviously', label: 'obviously', url: "/casestudy/obviously", desc: "Implementing design process at a mature startup.", img: "../thumbnails/obv_influencer.jpeg" },
    { id: 2, name: 'mastercard', label: 'mastercard', url: "/casestudy/mastercard", desc: "Translating business and data engineering into design speak.", img: "../thumbnails/mastercard.png" },
    { id: 3, name: 'Worldpay (FIS)', label: 'worldpay', url: "/casestudy/worldpay", desc: "Using Design Thinking to consolidate duplicate products.", img: "../thumbnails/fis.png" }

]

export const techDemos = [
    {
        id: 1,
        name: 'Current Portfolio',
        desc: 'Svelte & Vercel'
    },
    {
        id: 2,
        name: 'Sales Prototype',
        desc: 'React & Firebase'
    },
    {
        id: 3,
        name: 'Music Tracker',
        desc: 'Vue & PHP'
    },
    {
        id: 4,
        name: 'Worldpay UI Components',
        desc: 'Angular & Firebase'
    }
]