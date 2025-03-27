export default function BottomBody () {
    return (
        <div className="flex flex-col w-full items-center justify-center overflow-visible bg-gray-100 mb-14">
            <div className="w-[72.5rem]">
                <h1 className="text-2xl font-bold my-4">Get Discovered</h1>
                <section className="flex pt-6 justify-between pb-10">
                    
                    <div className="flex flex-col w-[322px] gap-4 shadow-lg">
                        <img src="/assets/writing-contests.png"/>
                        <div className="flex flex-col gap-4 px-4 pb-3">
                            <h1 className="font-semibold text-lg">Writing Contests</h1>
                            <span className="text-gray-500">Enter writing contests to get published, win awards, and partner with global brands.</span>
                        </div>
                    </div>

                    <div className="flex flex-col w-[322px] gap-4 shadow-lg">
                        <img src="/assets/wattys_avatar.png"/>
                        <div className="flex flex-col gap-4 px-4 pb-3">
                            <h1 className="font-semibold text-lg">The Wattys</h1>
                            <span className="text-gray-500">Wattpad's annual awards program committed to celebrating the best stories around the world.</span>
                        </div>
                    </div>

                    <div className="flex flex-col w-[322px] gap-4 shadow-lg">
                        <img src="/assets/wp-picks.png"/>
                        <div className="flex flex-col gap-4 px-4 pb-3">
                            <h1 className="font-semibold text-lg">Wattpad Picks</h1>
                            <span className="text-gray-500">Get featured on our hand-picked reading list.</span>
                        </div>
                    </div>

                </section>
            </div>

            <section className="flex relative w-full h-[269px] items-center justify-center bg-[#2a1c60] text-gray-50 text-lg overflow-hidden">
                    <img src="/assets/company-logo.svg" className="absolute z-0 inset-0 w-[696px] h-[511px] rotate-12 m-auto"/>
                    <div className="flex flex-col relative items-center justify-center z-1 gap-4">
                        <img src="/assets/brand-partnerships-logo.svg"/>
                        <h2 className="text-2xl">The world's most pasitive platform for brands to engage Gen Z.</h2>
                        <p>If you're a business, click below to learn more.</p>
                        <a className="rounded-full bg-white py-2 px-8 text-black">Learn more</a>
                    </div>
            </section>

            <section className="flex relative w-full md:h-[781.45px] overflow-b-visible items-center justify-center pt-32">
                <img src="/assets/wattpad-wall.png" className="absolute z-0 inset-0 m-auto"></img>
                <div className="flex flex-col relative items-center justify-center z-1 gap-4 text-white mt-8">
                    <h1 className="pt-6 pb-2 text-2xl font-bold">Take Wattpad With You</h1>
                    <p>Read and write anywhere, even offline.</p>
                    <div className="flex items-center mb-[50px] text-center gap-4">
                        <button className="bg-[#ff6122] px-6 py-1 rounded-md">Start Writing</button>
                        <button className="bg-[#ff6122] px-6 py-1 rounded-md">Start Reading</button>
                    </div>
                    <img alt="device" src="/assets/footer-devices.png" className="flex relative overflow-visible z-10 top-16 h-[500px]" />
                </div>
            </section>
        </div>
    )
}