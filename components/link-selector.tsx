import Image from 'next/image';
import { useState } from 'react';
import FallbackImage from './fallback-image';
import Link from 'next/link';

export type LinkSelectorLink = {
    label: string;
    image_url: string;
    href: string;
}

type LinkSelectorProps = {
    links: LinkSelectorLink[];
}

const LinkSelector = (props: LinkSelectorProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {props.links.map((link) => (
                <Link key={link.label} href={link.href} className='transition duration-300 ease-in-out transform hover:scale-105'>
                    <h3 className='mx-auto w-full text-red-600 text-center text-2xl md:text-4xl lg:text-4xl font-bold absolute top-1/2 z-50 m-0'>
                        {link.label}
                    </h3>
                    <FallbackImage
                        src={link.image_url}
                        fallbackSrc="/images/placeholder_image.png"
                        alt={link.label} 
                        width={540} 
                        height={540}
                    />
                </Link>
            ))}
        </div>
    )
}

export default LinkSelector;