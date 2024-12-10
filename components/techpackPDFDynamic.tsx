"use client";

import dynamic from "next/dynamic";

import type { ITechpack } from "@/lib/types";

const TechpackPDF = dynamic(() => import("@/components/techpackPDF"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});

export default function TeckpackDynamic(props: ITechpack) {
	return <TechpackPDF {...props} />;
}
