"use client";
import Card from "@/components/Card";

export default function Home() {
	return (
		<main className="bg-[url('/images/bg-img.png')] bg-cover min-h-screen w-full flex flex-col items-center justify-center">
			<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-rose-400 text-transparent bg-clip-text py-2'>
				Frontend Portfolio
			</h1>
      <p className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold pt-4'>
				Designs -&gt; Code
			</p>
      <p className='text-md  lg:text-lg xl:text-xl font-medium pt-2 '>
				- Vanshika ❤️
			</p>
			<div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-12 px-24 py-8'>
				<Card
					title='rock'
					link='www.google.com'
					cardImg='/images/img.jpg'
				/>
				<Card
					title='rock'
					link='www.google.com'
					cardImg='/images/img.jpg'
				/>

				<Card
					title='rock'
					link='www.google.com'
					cardImg='/images/img.jpg'
				/>
			</div>
		</main>
	);
}
