import { z } from "zod";

export const formSchema = z.object({
	clientName: z.string().min(1),
	// orderForm: z
	// 	.instanceof(File) // Ensure the input is a File object
	// 	.refine((file) => file.type === "text/csv", {
	// 		message: "Only CSV files are allowed",
	// 	})
	// 	.refine((file) => file.size <= 5 * 1024 * 1024, {
	// 		// Optional size limit: 5MB
	// 		message: "File size must be less than 5MB",
	// 	}),
	// orderForm: z
	// 	.custom<File>()
	// 	.refine((file) => file.type === "text/csv", {
	// 		message: "Only CSV files are allowed",
	// 	})
	// 	.refine((file) => file.size <= 5 * 1024 * 1024, {
	// 		// Optional size limit: 5MB
	// 		message: "File size must be less than 5MB",
	// 	}),
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
	// xxs: z.string(),
	// xs: z.string(),
	// s: z.string(),
	// m: z.string(),
	// l: z.string(),
	// xl: z.string(),
	// xxl: z.string(),
	// xxxl: z.string(),
	// xxxxl: z.string(),
	customFont: z.boolean(),
});
