import Image from "next/image";
import Link from "next/link";
interface CardProps {
	title: string;
	cardImg: string;
    link:string;
}
const Card: React.FC<CardProps> = ({ title, link, cardImg }) => {
	return (
		<Link href={link} target="_blank">
			<Image
						src={cardImg}
						alt={title}
						width={500}
						height={500}
						className='w-full object-cover object-center cursor-pointer rounded-lg hover:brightness-75 hover:scale-90 transition-all ease-in-out duration-500'
					/>
		</Link>
	);
};

export default Card;
