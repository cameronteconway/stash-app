import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
	title: "StashApp",
	description:
		"Custom Stash for University Clubs/ Societies. School & Houses. Custom Clothing your Logo's & Colours.",
	openGraph: {
		title: "StashApp",
		description:
			"Custom Stash for University Clubs/ Societies. School & Houses. Custom Clothing your Logo's & Colours.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='antialiased'>
				<Header />
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
