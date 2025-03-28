export default function NavBar () {
    return(
        <header className="w-full flex bg-opacity-50 items-center justify-center">
            <nav className="flex lg:w-[75rem] py-6 items-center justify-between text-xl">
                <ul className="flex items-center gap-4 text-white font-semibold">
                    <img src="/assets/logo.png" className="h-28"/>
                    <li className="hover:underline">Home</li>
                    <li className="hover:underline">Benefits</li>
                    <li className="hover:underline">Portfolio</li>
                    <li className="hover:underline">Membership</li>
                </ul>

                <div className="flex items-center gap-4 text-white font-semibold">
                    <span className="hover:underline cursor-pointer">Sign Up</span>
                    <span>+62 000 000 000</span>
                </div>
            </nav>
        </header>
    )
}