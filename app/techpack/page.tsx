"use server";

import { cookies } from "next/headers";
import Link from "next/link";

import TeckpackDynamic from "@/components/techpackPDFDynamic";
import { Button } from "@/components/ui/button";

export default async function Page() {
	const cookieStore = await cookies();
	const orderFormData = cookieStore.get("orderForm");

	if (orderFormData) {
		const techpackData = JSON.parse(orderFormData.value);

		return (
			<>
				<div className='mx-auto flex max-w-[600px] flex-col pb-16'>
					<TeckpackDynamic {...techpackData} />
				</div>
			</>
		);
	} else {
		return (
			<section className='bg-white'>
				<div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-20'>
					<div className='mx-auto max-w-screen-sm text-center'>
						<h1 className='mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl'>
							500
						</h1>
						<p className='mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl'>
							Something went wrong.
						</p>
						<p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
							Sorry for the inconvenience, please return to the previous page
						</p>
						<Link href='/'>
							<Button variant='outline'>Back to Homepage</Button>
						</Link>
					</div>
				</div>
			</section>
		);
	}
}
