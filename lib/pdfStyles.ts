import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
	header: {
		backgroundColor: "#B0D0D3",
		borderBottom: "2px solid black",
	},
	content: {
		marginTop: 35,
		marginHorizontal: 35,
		display: "flex",
		flexDirection: "column",
		gap: 30,
	},
	basicInfo: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	logo: {
		marginLeft: "auto",
		marginRight: "auto",
		height: 32,
		width: 180,
		marginTop: 20,
		marginBottom: 20,
	},
	fabricType: {
		textTransform: "capitalize",
	},
	sectionHeader: {
		marginBottom: 10,
		color: "#71717A",
	},
	colourImageContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 10,
	},
	colourImage: {
		height: "auto",
		width: "25%",
	},
	// Size Table
	sizeTableHeading: {
		display: "flex",
		flexDirection: "row",
		paddingVertical: 6,
		fontWeight: 600,
		border: "2px solid black",
		textAlign: "center",
		backgroundColor: "#B0D0D3",
	},
	sizeTableHeadingItem: {
		width: "100%",
	},
	sizeTableRow: {
		display: "flex",
		flexDirection: "row",
		paddingVertical: 6,
		textAlign: "center",
		borderBottom: "2px solid black",
		borderRight: "2px solid black",
		borderLeft: "2px solid black",
	},
	sizeTableRowItem: {
		width: "100%",
	},
	// Custom Fonts Table
	customFontsTable: {
		display: "flex",
		flexDirection: "row",
		textAlign: "center",
		borderTop: "2px solid black",
		borderLeft: "2px solid black",
		borderRight: "2px solid black",
	},
	customFontItem: {
		width: "100%",
	},
	customFontCell: {
		paddingVertical: 6,
	},
});
