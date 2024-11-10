import Link from "next/link"
import Image from "next/image"
import { ThemeSwitcher } from "./theme-switcher"
import { DropdownMenu, DropdownMenuContent } from "@radix-ui/react-dropdown-menu"
import { DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import LinksDropdown from "./links-dropdown"
import { Button } from "./ui/button"
import ButtonLink from "./button-link"

const NavigationBar = () => {
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                <div className="flex md:gap-5 lg:gap-5 items-center font-semibold">
                    <Link href="/">
                        <Image src="/images/favicon.ico" alt="logo" width={40} height={40} priority />
                    </Link>
                    <LinksDropdown name="Parts" links={[
                        { label: "All", href: "/parts" },
                        { label: "Engine", href: "/parts/engine" },
                        { label: "Transmission", href: "/parts/transmission" },
                        { label: "Suspension", href: "/parts/suspension" },
                        { label: "Brakes", href: "/parts/brakes" },
                        { label: "Exhaust", href: "/parts/exhaust" },
                        { label: "Fuel System", href: "/parts/fuel-system" },
                        { label: "Electrical", href: "/parts/electrical" },
                        { label: "Cooling System", href: "/parts/cooling-system" },
                        { label: "Steering", href: "/parts/steering" },
                        { label: "Drive Train", href: "/parts/drivetrain" },
                    ]} />
                    <LinksDropdown name="Vehicles" links={[
                        { label: "All", href: "vehicles" },
                        { label: "Cars", href: "vehicles/cars" },
                        { label: "Motorcycles", href: "vehicles/motorcycles" },
                        { label: "Trucks", href: "vehicles/trucks" }
                    ]} />
                    <ButtonLink href="/brands">Brands</ButtonLink>
                </div>
                <ThemeSwitcher />
            </div>
        </nav>
    )
}

export default NavigationBar