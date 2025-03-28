import PricingPage from "./Components/MembershipCard";

export default function Bottom () {
    return (
        <div className="w-full h-full flex flex-col py-10 justify-center items-center">
            <div className="w-full flex flex-col text-white justify-center items-center">
                <div className="w-full md:w-[75rem] mt-10">
                    <h1 className="text-5xl font-semibold border-b border-b-cyan-400 pb-4">Pick your plan</h1>
                </div>

                <section className="w-full md:w-[75rem] flex items-center justify-between mt-12 text-center">
                    <PricingPage/>
                </section>
            </div>

            <div className="w-full bg-[#343434] flex items-center justify-center mt-10">
                <div className="w-[75rem] flex flex-col items-center justify-center text-white py-14 gap-4 text-center">
                    <h1 className="text-6xl font-semibold">Unsure which option is right for you?</h1>
                    <button className="py-3 px-6 bg-cyan-400 hover:bg-cyan-200 text-black text-md mt-6 rounded-md">Book a trial session</button>
                </div>
            </div>
        </div>
    )
}