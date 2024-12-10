import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<div className='mx-auto w-fit py-5'>
			<Link href='/' className='block'>
				<Image
					alt='The Stash Company Logo'
					width={220}
					height={42}
					src='https://cdn.prod.website-files.com/65861440b9e9ac8c15a6ce35/6586168ae99ecf68527d8d86_Logotype.svg'
				/>
			</Link>
		</div>
	);
}
