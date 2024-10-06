'use client';

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

type DropdownLink = {
    label: string;
    href: string;
}

type DropdownLinkProps = {
    name: string;
    links: DropdownLink[];
}

const LinksDropdown = (props: DropdownLinkProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size={"sm"}>
                    {props.name}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-content" align="start">
                {props.links.map((link) => (
                    <DropdownMenuItem key={link.label} className="flex gap-2">
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LinksDropdown