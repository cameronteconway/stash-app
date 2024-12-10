import TechpackForm from "@/components/techpackForm";

export default function Home() {
	return (
		<div className='mx-auto mt-10 flex max-w-[600px] flex-col gap-8 px-4 pb-16 md:gap-12 md:px-10 md:pb-20'>
			<TechpackForm />
		</div>
	);
}
