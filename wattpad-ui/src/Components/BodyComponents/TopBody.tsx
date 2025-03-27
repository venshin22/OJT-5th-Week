

export default function TopBody () {
    return (
        <div className="w-full h-[38.144rem] flex items-center justify-center ">
            <img src="/assets/topright.png" className="absolute -z-10 right-0 top-10"/>
            <section className="flex justify-center w-full lg:h-[29.395rem] ">
                <div className="flex flex-col lg:w-[35.625rem] text-gray-600">
                    <h2 className="text-[#ff6122] font-bold text-6xl mt-4 mb-[2.25rem]">Hi, we're Wattpad.</h2>
                    <h3 className="text-2xl mt-4 mb-3 text-gray-800"> The world's largest storytelling community</h3>
                    <h4 className="mt-3.5 text-[20px] h-[75px]">Home to 89 million people' who love original stories, Wattpad has democratized storytelling for a new generation of diverse Gen Z writers and their fans.</h4>
                    <p className="mb-2.5rem text-sm mt-4 mb-12">As of th equarter ended June 30, 2024</p>

                    <div className="flex gap-4 text-white font-semibold items-center">
                        <button className="rounded-md bg-[#ff6122] px-10 py-3">
                            <a>Start Reading</a>
                        </button>
                        <button className="rounded-md bg-[#ff6122] px-10 py-3">
                            <a>Start Writing</a>
                        </button>
                    </div>
                </div>
                <div className="lg:w-[35.625rem] w-full pt-[6.875rem]">
                    <img src="/assets/hero-devices.png"/>
                </div>
            </section>
        </div>
    )
}