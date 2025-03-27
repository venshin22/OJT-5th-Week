export default function Footer () {
    return (
        <footer className="w-full flex flex-col gap-2 pb-4 pt-24">
            <ul className="flex gap-4 text-sm font-semibold items-center justify-center">
                <li><a>Wattpad Originals</a></li>
                <li><a>Try Premium</a></li>
                <li><a>Get the App</a></li>
                <li><a>Language</a></li>
                <li><a>Writers</a></li>
                <li><a> | </a></li>
                <li><a>Brand Partnerships</a></li>
                <li><a>Jobs</a></li>
                <li><a>Press</a></li>
            </ul>
            <ul className="flex gap-4 text-sm text-gray-700 items-center justify-center">
                <li><a>Terms</a></li>
                <li><a>Privacy</a></li>
                <li><a>Payment Policy</a></li>
                <li><a>Accessibility</a></li>
                <li><a>Do Not Sell My Personal Information</a></li>
                <li><a>Help </a></li>
                <li><a className="font-thin">©2025 Wattpad</a></li>
            </ul>
        </footer>
    )
}