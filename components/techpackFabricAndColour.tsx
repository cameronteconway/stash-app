import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { useEffect, useState } from "react";
import {
	IAllColours,
	IFabricType,
	TechPackColourPickerProps,
} from "@/lib/types";
import { COLOUR_MAP } from "@/data/colour-data";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export default function TechPackFabricAndColour({
	form,
	fabricType,
	setAmountOfColourFields,
	setFabricType,
}: TechPackColourPickerProps) {
	const [colourFields, setColourFields] = useState<{ id: number }[]>([]);
	const [availableColours, setAvailableColours] = useState<
		IAllColours[] | null
	>(null);

	useEffect(() => {
		if (fabricType) {
			setAvailableColours(COLOUR_MAP[fabricType]);
		}
	}, [fabricType]);

	const addColourField = () => {
		setColourFields((prevFields) => [
			...prevFields,
			{ id: colourFields.length + 1 },
		]);
		setAmountOfColourFields((prevState) => prevState + 1);
	};

	const removeColourField = () => {
		let colourFieldsCopy = [...colourFields];
		colourFieldsCopy.pop();
		setColourFields(colourFieldsCopy);
		setAmountOfColourFields((prevState) => prevState - 1);
	};

	return (
		<>
			<FormField
				control={form.control}
				name='fabricType'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Fabric</FormLabel>
						<FormDescription>
							Select the type of fabric to be used in designs.
						</FormDescription>
						<Select
							onValueChange={(e: IFabricType) => {
								field.onChange(e);
								setFabricType(e);
							}}
							defaultValue={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder='Select a fabric type.' />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								<SelectItem value='polarFleece'>Polar Fleece</SelectItem>
								<SelectItem value='cotton'>Cotton</SelectItem>
								<SelectItem value='sherpa'>Sherpa</SelectItem>
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>
			{fabricType !== null ? (
				<>
					<div className='grid grid-cols-2 gap-4'>
						<FormField
							control={form.control}
							name='colour1'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Colour 1</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger className='gap-2'>
												<SelectValue placeholder='Select a colour' />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{availableColours &&
												availableColours.map((colour, index) => {
													return (
														<SelectItem key={index} value={colour.selectValue}>
															{colour.name}
														</SelectItem>
													);
												})}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						{colourFields.map((_, index) => {
							return (
								<FormField
									key={index}
									control={form.control}
									name={
										index + 2 === 2
											? "colour2"
											: index + 2 === 3
												? "colour3"
												: ("colour4" as "colour2" | "colour3" | "colour4")
									}
									render={({ field }) => (
										<FormItem>
											<div className='flex flex-row items-center justify-between'>
												<FormLabel>Colour {index + 2}</FormLabel>
												{index + 1 === colourFields.length ? (
													<Button
														variant='ghost'
														size='sm'
														className='h-fit w-fit rounded-full p-1'
														type='button'
														onClick={removeColourField}
													>
														<X size={24} />
													</Button>
												) : (
													<Button
														variant='ghost'
														disabled
														size='sm'
														className='h-fit w-fit rounded-full p-1'
														type='button'
													>
														<span className='h-[16px] w-[16px]' />
													</Button>
												)}
											</div>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger className='gap-2'>
														<SelectValue placeholder='Select a colour' />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{availableColours &&
														availableColours.map((colour, index) => {
															return (
																<SelectItem
																	key={index}
																	value={colour.selectValue}
																>
																	{colour.name}
																</SelectItem>
															);
														})}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							);
						})}
					</div>
					<Button
						disabled={colourFields.length >= 3}
						type='button'
						variant='outline'
						onClick={addColourField}
					>
						Add colour
					</Button>
				</>
			) : null}
		</>
	);
}
