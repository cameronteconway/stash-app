import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const filteredAttributes = (arr: (string[] | undefined)[]) => {
	return arr.filter(function (element) {
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
