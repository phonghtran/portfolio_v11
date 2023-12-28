import { writable } from "svelte/store";

export const alert = writable("Welcome to the to-do list app!");

export const todos = writable([]);

export const sliderValue = writable(0);
export const sliderMaxValue = 3;

export const sliderMapping = [
    'seo keywords',
    'minimal',
    'expressive',
    'verbose'
]