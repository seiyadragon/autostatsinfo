'use client';

import { Button } from "./ui/button";

type ButtonLinkProps = {
    href: string;
    children: React.ReactNode;
}

const ButtonLink = (props: ButtonLinkProps) => {
    return (
        <Button variant="ghost" onClick={() => {
            window.location.href = "brands"
        }}>
            {props.children}
        </Button>
    )
}

export default ButtonLink