import { AudioLines, Globe, Globe2, Lightbulb, Plus } from "lucide-react";

export default function Body1 () {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-r ">
            <div className="text-3xl font-bold py-8 text-amber-600">
                <h1>What can I help with?</h1>
            </div>
            <div className="flex flex-col rounded-3xl shadow-xl p-4 border-t bg-white w-1/2 gap-2">
                <input type="text" placeholder="Ask Anything" className="w-full text-md p-2 outline-none focus:border-transparent"></input>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-2 text-gray-500">
                        <Plus size={35} className="rounded-full border p-2 hover:bg-gray-100 cursor-pointer"/>
                        <div className="flex rounded-full px-2 py-1.5 border items-center gap-2 hover:bg-gray-100 cursor-pointer">
                            <Globe size={20}/>
                            <span className="text-sm">Search</span>
                        </div>
                        <div className="flex rounded-full px-2 py-1.5 border items-center gap-2 hover:bg-gray-100 cursor-pointer">
                            <Lightbulb size={20}/>
                            <span className="text-sm">Reason</span>
                        </div>
                    </div>
                    <div className="rounded-full bg-amber-600 p-2 hover:bg-gray-700 cursor-pointer">
                        <AudioLines color="white" strokeWidth={3}/>
                    </div>
                </div>
            </div>
        </div>
    )
}