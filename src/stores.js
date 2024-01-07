import { writable } from "svelte/store";

export const languageConfig = writable(
    [
        {
            id: 1, name: 'targetAudience', value: 1, labels: [
                'Mom', 'HR', 'Colleague'
            ]
        },
        {
            id: 2, name: 'verboseLevel', value: 0, labels: [
                'minimal',
                'expressive',
                'long-winded'
            ]

        }
    ]
)

export const navItems = [
    { name: 'Summary', url: "/" },
    { name: 'Obviously', url: "/obviously" },
    { name: 'mastercard', url: "/mastercard" },
    { name: 'Worldpay', url: "/worldpay" },
]