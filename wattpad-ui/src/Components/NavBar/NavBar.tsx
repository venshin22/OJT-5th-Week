import { ChevronDown, Search, Zap } from "lucide-react";


export default function NavBar () {
    return(
        <nav className="flex w-full h-[4.188rem] items-center justify-between px-3 py-6 bg-white border-b">
            <div className="flex items-center gap-6 text-gray-800">
                <img src="/assets/wattpad-logo.png" alt="logo" className="h-10 px-1"></img>
                <div className="flex items-center gap-1">
                    <span className="font-semibold">Browse</span>
                    <ChevronDown size={12}/>
                </div>
                <div className="flex items-center gap-1">
                    <span className="font-semibold">Community</span>
                    <ChevronDown size={12}/>
                </div>
                <div className="flex items-center w-[20rem] border rounded-md px-2">
                    <Search size={20} color="gray"/>
                    <input type="text" placeholder="Search" className="p-2 w-full"></input>
                </div>
            </div>

            <div className="flex items-center gap-5 font-semibold mx-4">
                <div className="flex items-center gap-1">
                    <span>Write</span>
                    <ChevronDown size={12}/>
                </div>
                <div className="flex items-center text-[#3b19a9] bg-purple-50 rounded-full gap-2 px-4 py-2">
                    <Zap strokeWidth={2} size={12} fill="[#3b19a9]"/>
                    <span className="font-bold">Try Premium</span>
                </div>
                <div className="flex items-center justify-between gap-5">
                    <span>Log in</span>
                    <span>Sign Up</span>
                </div>
            </div>
        </nav>
    )
}