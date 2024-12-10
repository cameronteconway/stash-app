"use client";

import {
	Document,
	Image,
	Page,
	PDFViewer,
	Text,
	View,
} from "@react-pdf/renderer";
import React from "react";

import { ALL_COLOURS } from "@/data/colour-data";
import { styles } from "@/lib/pdfStyles";
import type { ICustomFont, ITechpack } from "@/lib/types";
import { humanize } from "@/lib/utils";

export default function TechpackPDF(data: ITechpack) {
	const { clientName, fabricType } = data;

	// Colours
	const colour1Object = ALL_COLOURS.filter(
		(item) => item.selectValue === data.colours.colour1,
	);
	const colour2Object = data.colours.colour2
		? ALL_COLOURS.filter((item) => item.selectValue === data.colours.colour2)
		: undefined;
	const colour3Object = data.colours.colour3
		? ALL_COLOURS.filter((item) => item.selectValue === data.colours.colour3)
		: undefined;
	const colour4Object = data.colours.colour4
		? ALL_COLOURS.filter((item) => item.selectValue === data.colours.colour4)
		: undefined;

	const totalItems = data.orderForm.sizeTotals.find((item: string) =>
		item[0] === "Total" ? item : undefined,
	);

	const renderCustomFontsTable = () => {
		return (
			<View style={styles.customFontsTable}>
				<View style={styles.customFontItem}>
					<View style={styles.customFontCell}>
						<Text>Size</Text>
					</View>
					<View style={styles.customFontCell}>
						<Text>Font</Text>
					</View>
				</View>
				{data.customFonts?.map((element: ICustomFont, index: number) => {
					return (
						<View key={`customFont-${index}`} style={styles.customFontItem}>
							<View style={styles.customFontCell}>
								<Text>{element.fontSize.replace("_", ".")}</Text>
							</View>
							<View style={styles.customFontCell}>
								<Text>{humanize(element.fontType)}</Text>
							</View>
						</View>
					);
				})}
			</View>
		);
	};

	[...Array(data.customFonts?.length)];

	// Size Options
	const RenderSizes = data.orderForm.sizeTotals.map(
		(row: string[], index: number) => {
			return (
				<View key={`row-${index}`} style={styles.sizeTableRow}>
					<View style={styles.sizeTableRowItem}>
						<Text>{row[0]}</Text>
					</View>
					<View style={styles.sizeTableRowItem}>
						<Text>{row[1]}</Text>
					</View>
				</View>
			);
		},
	);

	// Product Attributes
	const RenderProductAttributes = data.orderForm.productAttributes.map(
		(row: string[], index: number) => {
			return (
				<View key={`row-${index}`} style={styles.sizeTableRow}>
					<View style={styles.sizeTableRowItem}>
						<Text>{row[0]}</Text>
					</View>
					<View style={styles.sizeTableRowItem}>
						<Text>{row[1]}</Text>
					</View>
					{row[2] ? (
						<View style={styles.sizeTableRowItem}>
							<Text>{row[2]}</Text>
						</View>
					) : null}
				</View>
			);
		},
	);

	return (
		<PDFViewer height={888}>
			<Document>
				<Page size='A4'>
					<View style={styles.header}>
						{typeof window !== "undefined" ? (
							<Image
								style={styles.logo}
								src={`${window.location.origin}/thestashcompanylogo.png`}
							/>
						) : null}
					</View>
					<View style={styles.content}>
						<View style={styles.basicInfo}>
							<View>
								<Text style={styles.sectionHeader}>Client</Text>
								<Text>{clientName}</Text>
							</View>
							<View>
								<Text style={styles.sectionHeader}>Fabric Type</Text>
								<Text style={styles.fabricType}>
									{fabricType === "polarFleece" ? "Polar Fleece" : fabricType}
								</Text>
							</View>
							<View>
								<Text style={styles.sectionHeader}>Quantity</Text>
								<Text>{totalItems![1]}</Text>
							</View>
						</View>
						<View>
							<Text style={styles.sectionHeader}>Colour(s)</Text>
							<View style={styles.colourImageContainer}>
								<Image
									style={styles.colourImage}
									src={() =>
										fetch(colour1Object[0].imageUrl).then(
											(redirectionResponse) => redirectionResponse.url,
										)
									}
								/>
								{colour2Object ? (
									<Image
										style={styles.colourImage}
										src={() =>
											fetch(colour2Object![0].imageUrl).then(
												(redirectionResponse) => redirectionResponse.url,
											)
										}
									/>
								) : null}
								{colour3Object ? (
									<Image
										style={styles.colourImage}
										src={() =>
											fetch(colour3Object![0].imageUrl).then(
												(redirectionResponse) => redirectionResponse.url,
											)
										}
									/>
								) : null}
								{colour4Object ? (
									<Image
										style={styles.colourImage}
										src={() =>
											fetch(colour4Object![0].imageUrl).then(
												(redirectionResponse) => redirectionResponse.url,
											)
										}
									/>
								) : null}
							</View>
						</View>
						{/* Sizes Table */}
						<View>
							<Text style={styles.sectionHeader}>Sizes</Text>
							<View>
								<View style={styles.sizeTableHeading}>
									<View style={styles.sizeTableHeadingItem}>
										<Text>Size</Text>
									</View>
									<View style={styles.sizeTableHeadingItem}>
										<Text>Quantity</Text>
									</View>
								</View>

								{RenderSizes}
							</View>
						</View>
						{/* Product Attributes Table */}
						<View style={{ marginTop: 35 }} break>
							<View>
								<View>
									<Text style={styles.sectionHeader}>Customisations</Text>
									{renderCustomFontsTable()}
									<View>
										<View style={styles.sizeTableHeading}>
											<View style={styles.sizeTableHeadingItem}>
												<Text>Size</Text>
											</View>
											<View style={styles.sizeTableHeadingItem}>
												<Text>Customization 1</Text>
											</View>
											<View style={styles.sizeTableHeadingItem}>
												<Text>Customization 2</Text>
											</View>
										</View>
										{RenderProductAttributes}
									</View>
								</View>
							</View>
						</View>
					</View>
				</Page>
			</Document>
		</PDFViewer>
	);
}
