import { writable } from "svelte/store";

export const languageConfig = writable(
    [
        {
            id: 1, name: 'targetAudience', value: 1, labels: [
                'Bots', 'HR', 'Design', 'Tech', 'Business'
            ]
        },
        {
            id: 2, name: 'verboseLevel', value: 2, labels: [
                'seo keywords',
                'minimal',
                'expressive',
                'verbose'
            ]

        }
    ]
)

export const navItems = [
    { name: 'Summary', url: "/" },
    { name: 'About', url: "/about" }
]