import { writable } from 'svelte/store';

export const content = writable(0);
export const manage = writable(false);
export const popup = writable(undefined);