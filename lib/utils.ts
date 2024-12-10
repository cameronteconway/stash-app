import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);

export const filteredAttributes = (arr: string[]) => {
	return arr.filter(function (element: string) {
		return element !== undefined;
	});
};
