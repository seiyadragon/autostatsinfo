import Image from 'next/image';
import { useState } from 'react';
import FallbackImage from './fallback-image';
import Link from 'next/link';
import LinkSelectorLink, { LinkSelectorLinkData } from './link-selector-link';

type LinkSelectorProps = {
    links: LinkSelectorLinkData[];
}

const LinkSelector = (props: LinkSelectorProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {props.links.map((link) => {
                return (
                    <LinkSelectorLink key={link.label} {...link} />
                )
            })}
        </div>
    )
}

export default LinkSelector;