import Link from "next/link";
import FallbackImage from "./fallback-image";
import { useState } from "react";

export type LinkSelectorLinkData = {
    label: string;
    image_url: string;
    href: string;
}

const LinkSelectorLink = (props: LinkSelectorLinkData) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link 
            href={props.href} 
            className='transition duration-300 ease-in-out transform hover:scale-105'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3 
                className='mx-auto w-full text-red-600 text-center text-2xl md:text-2xl lg:text-2xl font-bold absolute top-1/2 z-50 m-0'
            >
                {props.label}
            </h3>
            <FallbackImage
                src={props.image_url}
                fallbackSrc="/images/placeholder_image.png"
                alt={props.label} 
                width={540} 
                height={540}
                className={`transition duration-300 ease-in-out hover:blur-[2px] ${isHovered ? "blur-[2px]" : "blur-[0px]"}`}
            />
        </Link>
    )
}

export default LinkSelectorLink;