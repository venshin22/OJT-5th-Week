import ImgCard from "./Components/ImgCard";

export default function Mid () {
    return (
        <div className="w-full h-full flex py-10 justify-center items-start">
            <div className="w-[75rem] flex flex-col text-white">
                <div className="w-full mt-10">
                    <h1 className="text-5xl font-semibold border-b border-b-cyan-400 pb-4">Boost your performance</h1>
                </div>

                <section className="w-full flex items-center justify-between mt-12">

                    <div className="flex flex-col w-full justify-center md:w-[35rem] h-[16.5rem] py-6 px-8 border border-cyan-600 bg-gray-600">
                        <h1 className="font-bold text-6xl">01.</h1>
                        <h2 className="font-semibold text-3xl my-3">Personalized <span className="text-cyan-400">growth plans.</span></h2>
                        <h3 className="text-lg">I create customized fitness plans tailored to your <span className="text-cyan-500">unique goals</span> and challenges, ensuring you achieve <span className="text-cyan-500">maximum results</span> and maintain your <span className="text-cyan-500">progress</span></h3>
                    </div>

                    <div className="flex flex-col w-full justify-center md:w-[35rem] h-[16.5rem] py-6 px-8 border border-cyan-600 bg-gray-600">
                        <h1 className="font-bold text-6xl">02.</h1>
                        <h2 className="font-semibold text-3xl my-3">Holistic <span className="text-cyan-400">development</span></h2>
                        <h3 className="text-lg">I help you develop <span className="text-cyan-500">mental resilience,</span> provide<span className="text-cyan-500"> ensuring you achieve,</span> and offerlifestyle coaching to build a  <span className="text-cyan-500">stronger,</span> more balanced <span className="text-cyan-500">you</span></h3>
                    </div>

                </section>

                <section className="w-full flex items-center justify-between mt-12">

                    <div className="flex flex-col w-full justify-center md:w-[35rem] h-[16.5rem] py-6 px-8 border border-cyan-600 bg-gray-600">
                        <h1 className="font-bold text-6xl">03.</h1>
                        <h2 className="font-semibold text-3xl my-3"><span className="text-cyan-400">Motivation</span> partner.</h2>
                        <h3 className="text-lg">I'm not just your trainer, I'm your <span className="text-cyan-500">commited partner,</span> keeping you<span className="text-cyan-500">motivated</span> and<span className="text-cyan-500">accountable,</span> even when the <span className="text-cyan-500">journey</span> gets tough</h3>
                    </div>

                    <div className="flex flex-col w-full justify-center md:w-[35rem] h-[16.5rem] py-6 px-8 border border-cyan-600 bg-gray-600">
                        <h1 className="font-bold text-6xl">04.</h1>
                        <h2 className="font-semibold text-3xl my-3"><span className="text-cyan-400">Cutting-edge</span> techniques</h2>
                        <h3 className="text-lg">I help you develop <span className="text-cyan-500">mental resilience,</span> provide<span className="text-cyan-500"> ensuring you achieve,</span> and offerlifestyle coaching to build a  <span className="text-cyan-500">stronger,</span> more balanced <span className="text-cyan-500">you</span></h3>
                    </div>

                </section>
                
                <section className="w-full mt-24">
                    <h1 className="text-5xl font-semibold border-b border-b-cyan-400 pb-4">Progress in every frame</h1>
                    <ImgCard/>
                </section>
                
            </div>
        </div>
    )
}