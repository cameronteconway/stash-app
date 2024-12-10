"use server";

import { cookies } from "next/headers";

import TeckpackDynamic from "@/components/techpackPDFDynamic";

export default async function Page() {
	const cookieStore = await cookies();
	const orderFormData = cookieStore.get("orderForm");
	const techpackData = JSON.parse(orderFormData?.value!);

	return (
		<>
			<div className='mx-auto flex max-w-[600px] flex-col pb-16'>
				<TeckpackDynamic {...techpackData} />
			</div>
		</>
	);
}
