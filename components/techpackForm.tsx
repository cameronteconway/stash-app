"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { createOrderFormCookie } from "@/app/actions";
import { formSchema } from "@/lib/schema";
import type {
	ICustomFont,
	IFabricType,
	IOrderForm,
	ITechpack,
} from "@/lib/types";
import { filteredAttributes } from "@/lib/utils";

import TechpackCustomFont from "./techpackCustomFont";
import TechPackFabricAndColour from "./techpackFabricAndColour";
import { Button } from "./ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
// Update this to an environment variable
const baseUrl = "https://the-stash-app.vercel.app/";

export default function TechpackForm() {
	const [fabricType, setFabricType] = useState<IFabricType | null>(null);
	const [amountOfColourFields, setAmountOfColourFields] = useState<number>(1);
	const [hasCustomFont, setHasCustomFont] = useState<boolean>(false);
	const [amountOfCustomFontFields, setAmountOfCustomFontFields] =
		useState<number>(0);
	const [customFontArray, setCustomFontArray] = useState<ICustomFont[]>([]);

	const [csvData, setCsvData] = useState<IOrderForm>({
		productAttributes: [],
		sizeTotals: [],
	});
	const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files![0];
		const reader = new FileReader();
		reader.onload = (e: ProgressEvent<FileReader>) => {
			const sizeOptionsRows = 11;
			let sizeOptionsIndex: number;
			if (e.target) {
				const text: string = e.target.result as string;
				const usableRows = text.split("\n").splice(2);

				// Get all the products
				const productAttributes: (string[] | undefined)[] = usableRows
					.splice(1)
					.map((row: string) => {
						const applicableRows = row.split(",").slice(1, 4);
						const isValid = applicableRows[0] !== "";
						while (isValid) {
							return applicableRows;
						}
					});

				// Get the index of the sizeOptions field
				usableRows.map((row: string) => {
					const applicableRows = row.split(",");
					const sizeOptions = applicableRows.findIndex(
						(text) => text === "Size Options",
					);
					if (sizeOptions !== -1) sizeOptionsIndex = sizeOptions;
				});

				const sizeOptionsAttributes: (string[] | undefined)[] = text
					.split("\n")
					.splice(3)
					.map((row: string, index: number) => {
						const applicableRows = row
							.split(",")
							.slice(sizeOptionsIndex, sizeOptionsIndex + 2);
						while (index < sizeOptionsRows) {
							return applicableRows;
						}
					});

				setCsvData({
					productAttributes: filteredAttributes(productAttributes),
					sizeTotals: filteredAttributes(sizeOptionsAttributes),
				});
			}
		};
		reader.readAsText(file);
	};

	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			clientName: "",
			orderForm: undefined,
			fabricType: undefined,
			colour1: undefined,
			colour2: undefined,
			colour3: undefined,
			colour4: undefined,
			customFont: false,
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		const url = new URL("/techpack", baseUrl);

		let colours;
		const customFonts = [];

		switch (amountOfColourFields) {
			case 1:
				colours = { colour1: values.colour1 };
			case 2:
				colours = { colour1: values.colour1, colour2: values.colour2 };
			case 3:
				colours = {
					colour1: values.colour1,
					colour2: values.colour2,
					colour3: values.colour3,
				};
			case 4:
				colours = {
					colour1: values.colour1,
					colour2: values.colour2,
					colour3: values.colour3,
					colour4: values.colour4,
				};
		}

		for (let i = 0; i < amountOfCustomFontFields; i++) {
			customFonts.push({
				fontType: customFontArray[i].fontType,
				fontSize: customFontArray[i].fontSize,
			});
		}

		const techpackData: ITechpack = {
			orderForm: { ...csvData },
			clientName: values.clientName,
			fabricType: values.fabricType,
			colours: { ...colours },
			customFont: values.customFont,
			customFonts,
		};

		createOrderFormCookie(techpackData);

		router.push(url.toString());
	}

	// TODO: Inline error if no orderForm

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<FormField
						control={form.control}
						name='clientName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Client name</FormLabel>
								<FormDescription>Name of the client / society.</FormDescription>
								<FormControl>
									<Input placeholder='LSE Netball' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='orderForm'
						render={({ field: { ref, onBlur } }) => (
							<FormItem>
								<FormLabel>Order form upload</FormLabel>
								<FormDescription>
									Upload custom order form as a csv file.
								</FormDescription>
								<FormControl>
									<Input
										type='file'
										accept='.csv'
										onBlur={onBlur}
										ref={ref}
										onChange={(event) => handleFileUpload(event)}
										placeholder='LSE Netball'
										className='text-muted-foreground file:mr-3 file:rounded-md file:border file:border-input file:hover:cursor-pointer file:hover:bg-accent file:hover:text-accent-foreground'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Separator />

					<TechPackFabricAndColour
						form={form}
						fabricType={fabricType}
						setAmountOfColourFields={setAmountOfColourFields}
						setFabricType={setFabricType}
					/>

					<Separator />

					<TechpackCustomFont
						form={form}
						setHasCustomFont={setHasCustomFont}
						hasCustomFont={hasCustomFont}
						customFontArray={customFontArray}
						setCustomFontArray={setCustomFontArray}
						setAmountOfCustomFontFields={setAmountOfCustomFontFields}
						amountOfCustomFontFields={amountOfCustomFontFields}
					/>

					<Separator />

					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</>
	);
}
