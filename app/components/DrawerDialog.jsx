import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/app/components/ui/dialog";

import { Label } from "@/app/components/ui/label";
import { cn } from "../utils/helpers";

export function DrawerDialog() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="px-6 py-3 text-lg font-medium text-center text-white bg-primary-blue rounded-md transition-all duration-300 hover:opacity-80 shadow-lg shadow-gray-600/30">
                    Login
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] bg-[#ffffff4e] backdrop-blur-[5px] text-white">
                <DialogHeader>
                    <DialogTitle className="w-full text-center text-3xl font-bold leading-snug tracking-tight lg:leading-tight xl:leading-tight">
                        Login
                    </DialogTitle>
                </DialogHeader>
                <ProfileForm />
            </DialogContent>
        </Dialog>
    )
}

function ProfileForm({ className }) {
    return (
        <form className={cn("grid items-start gap-4 bg-transparent", className)}>
            <div className="grid gap-2">
                <Label htmlFor="email">Enter Your E-mail</Label>
                <input type="email" id="email" className="bg-transparent text-white px-[10px] py-2 border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:bg-[#ffffffdb] focus:text-black" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="username">Enter Your Password</Label>
                <input id="username" className="bg-transparent text-white px-[10px] py-2 border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:bg-[#ffffffdb] focus:text-black" />
            </div>
            <div className="flex items-center justify-end text-sm pb-4 ">
                <span className="hover:underline cursor-pointer">
                    Forgot Your Password?
                </span>
            </div>
            <button type="submit" className="px-6 py-3 text-lg font-medium text-center text-white bg-primary-blue rounded-md transition-all duration-300 hover:opacity-80 shadow-lg shadow-gray-600/30">Save changes</button>
        </form>
    )
}
