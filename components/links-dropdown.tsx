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
import DropdownLink from "./dropdown-link";

type LinkDropdownProps = {
    name: string;
    links: DropdownLink[];
}

const LinksDropdown = (props: LinkDropdownProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size={"sm"}>
                    {props.name}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-content" align="start">
                {props.links.map((link) => (
                    <DropdownLink key={link.label} label={link.label} href={link.href} />
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LinksDropdown