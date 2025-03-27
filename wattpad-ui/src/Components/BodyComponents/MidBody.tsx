import { ArrowRight, Book, Film, Tv } from "lucide-react";

export default function MidBody () {
    return (
        <div className="w-full justify-center mt-2">
            <img src="/assets/bottomleft.png"  className="absolute -z-10 left-0 h-full"></img>
            <section className="flex flex-col justify-center gap-4">
                <div className="flex w-full items-center justify-center">
                    <h1 className="text-2xl font-semibold">See Your Story...</h1>
                </div>
                
                <div className="flex justify-center gap-6 py-8 text-lg">
                    <div className="flex flex-col items-center font-semibold w-[322px]">
                        <Tv/>
                        <h2>Get produced to movie or film</h2>
                    </div>
                    <div className="flex flex-col items-center font-semibold w-[322px]">
                        <Film/>
                        <h2>Get adapted to a TV series</h2>
                    </div>
                    <div className="flex flex-col items-center font-semibold w-[322px]">
                        <Book/>
                        <h2>Get published</h2>
                    </div>
                </div>
            </section>

            <section className="flex justify-center h-[287px] w-full my-10">
                <div className="w-[414px] h-full">
                    <img src="/assets/wattpadStudiosPoster.png"/>
                </div>

                <div className="flex flex-col w-[414px]">
                    <div className="flex gap-2">
                        <h1 className="text-xl font-semibold text-[#ff6122]">Wattpad Studios</h1>
                        <img src="/assets/wattpad-logo.png" />
                    </div>
                    <h2 className="font-bold text-xl my-8"> Your original story could be the next big hit</h2>
                    <span className="text-gray-500 text-lg my-4">Wattpad Studios discovers untapped, unsigned, and talented writers on Wattpad and connects them to global multi-media entertainment companies.</span>
                    <span className="text-gray-500 text-lg mb-5">Wattpad Studios works with partners such as:</span>
                    <div className="flex gap-10">
                        <img src="/assets/sony.svg"/>
                        <img src="/assets/hulu.svg"/>
                        <img src="/assets/syfy.svg"/>
                    </div>
                </div>
            </section>

            <section className="flex justify-center w-full py-[8rem]">
                <div className="flex flex-col w-[414px]">
                    <div className="flex gap-2">
                        <h1 className="text-xl font-semibold text-[#ff6122]">Wattpad Books</h1>
                        <img src="/assets/wattpad-logo.png" />
                    </div>
                    <h2 className="font-bold text-xl my-8"> Your voice belongs on bookshelves</h2>
                    <span className="text-gray-500 text-lg my-4">Wattpad Books aspires to recognize and reflect diverse voices by taking Wattpad stories to published book and onto bookshelves around the world.</span>
                    <span className="text-gray-500 text-lg mb-5">Wattpad Books works with partners such as:</span>
                    <div className="flex gap-6 w-full">
                        <img src="/assets/macmillan.png" className="h-7"/>
                        <img src="/assets/anvil.png" className="h-7"/>
                        <img src="/assets/penguin.png" className="h-9"/>
                    </div>
                </div>

                <div className="w-[414px] h-full pl-4">
                    <img src="/assets/wattpadBooksPoster.png"/>
                </div>
            </section>

            <div className="flex items-center justify-center">
                <h1 className="underline flex text-2xl items-center gap-2">Find out more about what we do for writers <ArrowRight size={20}/> </h1>
            </div>
        </div>
    )
}