import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const sumValues = (obj: unknown) =>
	Object.values(obj).reduce((a, b) => a + b, 0);

export const filteredAttributes = (arr: string[]) => {
	return arr.filter(function (element: string) {
		return element !== undefined;
	});
};

export const humanize = (str: string) => {
	let i;
	const frags = str.split("_");
	for (i = 0; i < frags.length; i++) {
		frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
	}
	return frags.join(" ");
};
