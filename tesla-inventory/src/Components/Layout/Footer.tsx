export default function Footer () {
    return(
        <footer className="flex items-center w-full justify-center py-2">
            <ul className="flex flex-col md:flex-row w-full items-center justify-center text-sm font-bold text-gray-500 gap-4">
                <li>Tesla &copy; 2025</li>
                <li>Privacy & Legal</li>
                <li>Vehicle Recalls</li>
                <div className="hidden lg:flex gap-4">
                    <li>Contact</li>
                    <li>News</li>
                    <li>Get Updates</li>
                    <li>Locations</li>
                </div>
            </ul>
        </footer>
    )
}