import Image from "next/image";
import { Ephesis } from "next/font/google";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const ephesis = Ephesis({
	weight: "400",
	style: ["normal"],
	subsets: ["latin"],
});

const Restaurant: React.FC = () => {
	return (
		<div className='min-h-screen w-full overflow-hidden flex flex-col'>
			<div className='grid grid-cols-1 lg:grid-cols-3'>
				<Image
					src='/images/Restaurant/food1.png'
					alt='pizza'
					width={500}
					height={200}
					className="w-full h-full"
				/>
				<div className='bg-white w-full flex flex-col justify-center items-center py-32 px-20'>
					<p
						className={`${ephesis.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl `}>
						Restaurant
					</p>
					<BiSolidQuoteAltLeft size={80} />
					<p className={`  pt-4 text-2xl font-extralight uppercase`}>
						Organic Farm
					</p>
					<p className={`  pt-4 text-lg  text-center font-light`}>
						{" "}
						We bring the season’s best mix of organic produce and
						hand-crafted farm products conveniently to your door by
						growing and partnering with local farms and artisans in
						your area.
					</p>
					<p className={`  pt-4 text-2xl font-extralight uppercase`}>
						- LOO HUDSON
					</p>
				</div>
				<Image
					src='/images/Restaurant/food2.jpg'
					alt='Blueberry'
					width={500}
					height={200}
					className="w-full h-full"
				/>
			</div>
			<div className='w-full bg-black h-20 flex justify-center items-center'>
				<p
					className={`text-white text-center text-xl font-medium tracking-wider`}>
					Made With ❤️ Vanshika Rana
				</p>
			</div>
		</div>
	);
};
export default Restaurant;
