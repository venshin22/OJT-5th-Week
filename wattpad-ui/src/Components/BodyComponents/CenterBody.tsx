export default function CenterBody () {
    return (
        <div className="bg-gray-100 w-full h-[32.5rem] mt-12 py-10 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold py-8">How Wattpad Works</h1>
                <h4>Get your story discovered through the power of community and technology on Wattpad.</h4>
            </div>

            <div className="flex justify-center mt-16 gap-6">
                <div className="w-[22.5rem] flex gap-2">
                    <h1 className="text-7xl font-bold">1</h1>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">Create</h2>
                        <span className="text-md text-gray-600 mt-4">Share your unique voice and original story on Wattpad. Find the writing resources you need to craft a story only you can tell.</span>
                    </div>
                </div>

                <div className="w-[22.5rem] flex gap-2">
                    <h1 className="text-7xl font-bold">2</h1>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">Build</h2>
                        <span className="text-md text-gray-600 mt-4">Establish a global fan base as your story gains readership and momentum. Connect with other like-minded writers through storytelling.</span>
                    </div>
                </div>

                <div className="w-[22.5rem] flex gap-2">
                    <h1 className="text-7xl font-bold">3</h1>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">Amplify</h2>
                        <span className="text-md text-gray-600 mt-4">Get your story published or adapted into film or television with Wattpad WEBTOON Studios!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}