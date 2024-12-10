"use server";

import { cookies } from "next/headers";

import type { ITechpack } from "@/lib/types";

export async function createOrderFormCookie(data: ITechpack) {
	const cookieStore = await cookies();

	(await cookies()).delete("orderForm");
	cookieStore.set("orderForm", JSON.stringify(data));
}
