'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import { useRef } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

type DropdownLink = {
    label: string;
    href: string;
}

const DropdownLink = (props: DropdownLink) => {
    const linkRef = useRef<HTMLAnchorElement>(null);

    return (
        <DropdownMenuItem key={props.label} className="flex gap-2" onClick={() => {
            if (linkRef.current) {
                linkRef.current.click();
            }
        }}>
            <Link href={props.href} ref={linkRef}>{props.label}</Link>
        </DropdownMenuItem>
    )
}

export default DropdownLink