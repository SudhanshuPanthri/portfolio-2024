"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SendHorizontal } from "lucide-react";
import { ModeToggle } from "./toggle-theme";


const Navbar = () => {
    return (
        <div className="w-full px-8 py-6 lg:px-16 flex justify-between items-center">
            <div className="logo">
                <h2 className="font-semibold text-lg">dev.sudhanshu</h2>
            </div>
            <div className="hidden lg:flex lg:gap-8 lg:items-center lg:justify-center">
                <h2>Projects</h2>
                <h2>About Me</h2>
                <h2>Contact</h2>
                <ModeToggle />
            </div>
            <div className="px-4 flex gap-8 lg:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <SendHorizontal />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-4 mr-4">
                        <DropdownMenuItem className="py-4">Projects</DropdownMenuItem>
                        <DropdownMenuItem className="py-4">About Me</DropdownMenuItem>
                        <DropdownMenuItem className="py-4">Contact</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default Navbar;