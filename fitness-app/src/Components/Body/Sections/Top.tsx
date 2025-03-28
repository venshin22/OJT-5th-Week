export default function Top () {
    return (
        <div className="w-full h-[50rem] flex items-center justify-between">
            <div className="flex lg:w-[75rem] text-white items-center">
            <img src="/assets/bg.png" className="absolute h-[50rem] w-screen"></img>
                <div className="flex flex-col z-10 w-full lg:w-[40rem] text-xl mx-28">
                    <h1 className="text-8xl font-semibold my-14">Your Personal Path</h1>
                    <span className="text-gray-100">"As your personal trainer, I'll guide you with customized workouts and motivation to reach your fitness goals."</span>
                    <span className="text-cyan-400 font-semibold py-6">Get your first training for free</span>

                    <div>
                        <button className="bg-cyan-400 px-6 py-4 hover:bg-cyan-500 text-black">Book a trial session</button>
                    </div>
                </div>
            </div>
            <div className="flex z-10 pt-24 mr-20 h-full">
                    <img src="/assets/instructor.png" className="" />
            </div>
        </div>
    )
}