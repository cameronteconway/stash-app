import { z } from "zod";

export const formSchema = z.object({
	clientName: z.string().min(1),
	// orderForm: z.instanceof(FileList).optional(),
	orderForm: z.unknown().transform((value) => {
		return value as FileList;
	}),
	fabricType: z.enum(["polarFleece", "cotton", "sherpa"]),
	colour1: z.enum([
		"baby-blue",
		"bright-yellow",
		"royal-blue",
		"red",
		"cream",
		"light-grey",
		"black",
		"purple",
		"off-white",
	]),
	colour2: z
		.enum([
			"baby-blue",
			"bright-yellow",
			"royal-blue",
			"red",
			"cream",
			"light-grey",
			"black",
			"purple",
			"off-white",
		])
		.optional(),
	colour3: z
		.enum([
			"baby-blue",
			"bright-yellow",
			"royal-blue",
			"red",
			"cream",
			"light-grey",
			"black",
			"purple",
			"off-white",
		])
		.optional(),
	colour4: z
		.enum([
			"baby-blue",
			"bright-yellow",
			"royal-blue",
			"red",
			"cream",
			"light-grey",
			"black",
			"purple",
			"off-white",
		])
		.optional(),
	customFont: z.boolean(),
});
