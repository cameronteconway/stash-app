import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

export type IFabricType = "polarFleece" | "cotton" | "sherpa";

export interface IOrderForm {
	productAttributes: string[];
	sizeTotals: string[];
}

export interface IAllColours {
	name: string;
	rgbValue: string;
	rgValue2?: string;
	code?: string;
	fabricType: string;
	selectValue: string;
	imageUrl: string;
}

export interface IColourMap {
	polarFleece: IAllColours[];
	cotton: IAllColours[];
	sherpa: IAllColours[];
}

export interface TechPackColourPickerProps {
	fabricType: IFabricType | null;
	form: IForm;
	setAmountOfColourFields: Dispatch<SetStateAction<number>>;
	setFabricType: Dispatch<SetStateAction<IFabricType | null>>;
}

export interface TechPackSizeAndQuantityProps {
	setQuantity: Dispatch<SetStateAction<number>>;
	quantity: number;
	form: IForm;
}

export interface TechpackCustomFontProps {
	amountOfCustomFontFields: number;
	customFontArray: ICustomFont[];
	form: IForm;
	hasCustomFont: boolean;
	setAmountOfCustomFontFields: Dispatch<SetStateAction<number>>;
	setHasCustomFont: Dispatch<SetStateAction<boolean>>;
	setCustomFontArray: Dispatch<SetStateAction<ICustomFont[]>>;
}

export interface ICustomFont {
	fontSize: FontSize;
	fontType: FontType;
}

export type FontSize = "1cm" | "1_7cm" | "2_6cm" | "";

export type FontType =
	| "Avant Garde"
	| "Block 2"
	| "College Font"
	| "School Book"
	| "";

export type IForm = UseFormReturn<
	{
		clientName: string;
		// orderForm: File;
		fabricType: "polarFleece" | "cotton" | "sherpa";
		colour1:
			| "baby-blue"
			| "bright-yellow"
			| "royal-blue"
			| "red"
			| "cream"
			| "light-grey"
			| "black"
			| "purple"
			| "off-white";
		colour2?:
			| "baby-blue"
			| "bright-yellow"
			| "royal-blue"
			| "red"
			| "cream"
			| "light-grey"
			| "black"
			| "purple"
			| "off-white";
		colour3?:
			| "baby-blue"
			| "bright-yellow"
			| "royal-blue"
			| "red"
			| "cream"
			| "light-grey"
			| "black"
			| "purple"
			| "off-white";
		colour4?:
			| "baby-blue"
			| "bright-yellow"
			| "royal-blue"
			| "red"
			| "cream"
			| "light-grey"
			| "black"
			| "purple"
			| "off-white";
		customFont: boolean;
	},
	any,
	undefined
>;