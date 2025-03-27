import { CircleHelp, CircleUserRound, Globe } from "lucide-react";

export default function NavBar () {
    return(
        <div className="w-full h-[3.5rem] flex items-center justify-between mb-4">
            <div className="logo px-4 md:px-0">
                <img src="/assets/tesla-logo.png" className="h-5 w-32"/>
            </div>
             <nav className="hidden md:flex md:items-center md:justify-center">
                <ul className="flex">
                    <li><a className="px-4 py-2 font-semibold text-sm hover:bg-gray-100 rounded-lg">Vechicles</a></li>
                    <li><a className="px-4 py-2 font-semibold text-sm hover:bg-gray-100 rounded-lg">Energy</a></li>
                    <li><a className="px-4 py-2 font-semibold text-sm hover:bg-gray-100 rounded-lg">Charging</a></li>
                    <li><a className="px-4 py-2 font-semibold text-sm hover:bg-gray-100 rounded-lg">Discover</a></li>
                    <li><a className="px-4 py-2 font-semibold text-sm hover:bg-gray-100 rounded-lg">Shop</a></li>
                </ul>
             </nav>

             <div className="icons flex gap-2 pr-6 md:pr-0">
                <CircleHelp className="hover:bg-gray-100 rounded-md px-0.5"/>
                <Globe className="hover:bg-gray-100 rounded-md px-0.5"/>
                <CircleUserRound className="hover:bg-gray-100 rounded-md px-0.5"/>
             </div>
        </div>
    )
}