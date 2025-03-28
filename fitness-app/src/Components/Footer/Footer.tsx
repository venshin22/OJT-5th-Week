import { Copyright, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer () {
    return (
        <footer className="w-full flex flex-col justify-between items-center bg-[#262626] py-10">
            <div className="w-full md:w-[75rem] flex flex-col items-center justify-between gap-6">

                <div className="flex w-full items-center justify-between">
                    <img src="/assets/logo.png" className="h-44"/>
                    <div className="flex gap-4 items-center">
                        <Facebook size={35} color="white" className="bg-cyan-500 rounded-md p-1 hover:bg-cyan-200 cursor-pointer hover:scale-110 transition-all ease-in-out duration-500"/>
                        <Instagram size={35} color="white" className="bg-cyan-500 rounded-md p-1 hover:bg-cyan-200 cursor-pointer hover:scale-110 transition-all ease-in-out duration-500"/>
                        <Youtube size={35} color="white" className="bg-cyan-500 rounded-md p-1 hover:bg-cyan-200 cursor-pointer hover:scale-110 transition-all ease-in-out duration-500"/>
                    </div>
                </div>

                <div>
                    <ul className="flex items-center justify-center gap-4 text-white">
                        <li className="hover:underline cursor-pointer">FAQs</li>
                        <li className="hover:underline cursor-pointer">Subscribe to Newsletter</li>
                        <li className="hover:underline cursor-pointer">Privacy Policy</li>
                        <li className="hover:underline cursor-pointer">Terms of Service</li>
                    </ul>
                </div>

                <div className="flex w-full items-center justify-between text-gray-400">
                    <div className="flex flex-col items-center justify-center">
                        <span>501 BEAN HILL RD</span>
                        <span>NORTHFIELD NH</span>
                        <span>PHILIPPINES</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <span>Gym Instructor</span>
                        <span>gyminstructor@sample.com</span>
                        <span>+62 000 000 000</span>
                    </div>
                </div>

                <div className="flex items-center justify-center text-gray-400">
                    <span className="flex gap-2"><Copyright color="silver"/>2025 by Raven</span>
                </div>
            </div>
        </footer>
    )
}