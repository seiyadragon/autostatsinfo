'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import { useRef } from "react";

type ButtonLinkProps = {
    href: string;
    children: React.ReactNode;
}

const ButtonLink = (props: ButtonLinkProps) => {
    const linkRef = useRef<HTMLAnchorElement>(null);

    console.log("ButtonLink", props);

    return (
        <Button variant="ghost" onClick={() => {
            if (linkRef.current) {
                linkRef.current.click();
            }
        }}>
            <Link href={props.href} ref={linkRef}/>
            {props.children}
        </Button>
    )
}

export default ButtonLink