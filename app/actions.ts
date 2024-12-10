"use server";

import { cookies } from "next/headers";

export async function createOrderFormCookie(data: any) {
	const cookieStore = await cookies();

	(await cookies()).delete("orderForm");
	cookieStore.set("orderForm", JSON.stringify(data));
}
