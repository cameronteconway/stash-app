"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type {
	FontSize,
	FontType,
	ICustomFont,
	TechpackCustomFontProps,
} from "@/lib/types";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Label } from "./ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

export default function TechpackCustomFont({
	amountOfCustomFontFields,
	customFontArray,
	form,
	hasCustomFont,
	setAmountOfCustomFontFields,
	setCustomFontArray,
	setHasCustomFont,
}: TechpackCustomFontProps) {
	const addCustomFont = () => {
		setAmountOfCustomFontFields((prevState) => prevState + 1);
		setCustomFontArray((prevState: ICustomFont[]) => [
			...prevState,
			{ id: amountOfCustomFontFields, fontSize: "", fontType: "" },
		]);
	};

	const removeCustomFont = () => {
		const customFontsCopy = [...customFontArray];
		customFontsCopy.pop();
		setCustomFontArray(customFontsCopy);
		setAmountOfCustomFontFields((prevState) => prevState - 1);
	};

	return (
		<>
			<FormField
				control={form.control}
				name='customFont'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Custom font</FormLabel>
						<div className='flex flex-row items-start space-x-2 space-y-0'>
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={(e) => {
										setHasCustomFont(!hasCustomFont);
										field.onChange(e);
									}}
								/>
							</FormControl>
							<div className='relative -top-1'>
								<FormLabel className='text-muted-foreground'>
									Check this field to add custom font details.
								</FormLabel>
							</div>
						</div>
						<FormMessage />
					</FormItem>
				)}
			/>

			{hasCustomFont ? (
				<div className={cn(customFontArray.length >= 1 ? "space-y-8" : "")}>
					<div className='grid grid-cols-2 gap-4'>
						{customFontArray.map((item, index) => {
							return (
								<Card key={`custom-fort-${index}`} className='w-full'>
									<CardHeader>
										<CardTitle className='text-lg font-semibold'>
											Custom font {index + 1}
										</CardTitle>
										<CardDescription>
											Create a custom font object.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className='grid w-full items-center gap-4'>
											<div className='flex flex-col space-y-4'>
												<Label htmlFor='fontType'>Font Type</Label>
												<Select
													onValueChange={(e: FontType) => {
														const customFontItems = [...customFontArray];
														const updateddItem = { ...customFontItems[index] };
														updateddItem.fontType = e;
														customFontItems[index] = updateddItem;
														setCustomFontArray(customFontItems);
													}}
													defaultValue={customFontArray[index].fontType}
												>
													<SelectTrigger id='fontType'>
														<SelectValue placeholder='Select font type' />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value='avant_garde'>
															Avant Garde
														</SelectItem>
														<SelectItem value='block_2'>Block 2</SelectItem>
														<SelectItem value='college_font'>
															College Font
														</SelectItem>
														<SelectItem value='school_book'>
															School Book
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
											<div className='flex flex-col space-y-4'>
												<Label htmlFor='fontSize'>Font Size</Label>
												<Select
													onValueChange={(e: FontSize) => {
														const customFontItems = [...customFontArray];
														const updateddItem = { ...customFontItems[index] };
														updateddItem.fontSize = e;
														customFontItems[index] = updateddItem;
														setCustomFontArray(customFontItems);
													}}
													defaultValue={customFontArray[index].fontType}
												>
													<SelectTrigger id='fontSize'>
														<SelectValue placeholder='Select font size' />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value='1cm'>1cm</SelectItem>
														<SelectItem value='1_7cm'>1.7cm</SelectItem>
														<SelectItem value='2_6cm'>2.6cm</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</CardContent>
									{index + 1 === customFontArray.length && index !== 0 ? (
										<CardFooter className='flex justify-between text-end'>
											<Button
												onClick={removeCustomFont}
												type='button'
												variant='outline'
											>
												Remove
											</Button>
										</CardFooter>
									) : null}
								</Card>
							);
						})}
					</div>
					<Button type='button' variant='outline' onClick={addCustomFont}>
						Add custom font
					</Button>
				</div>
			) : null}
		</>
	);
}
