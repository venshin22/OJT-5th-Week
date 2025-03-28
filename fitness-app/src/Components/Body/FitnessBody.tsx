import Bottom from "./Sections/Bottom";
import Mid from "./Sections/Mid";
import Top from "./Sections/Top";

export default function FitnessBody () {
    return (
        <div className="w-full h-full bg-[#0f1624] flex flex-col justify-center">
           <Top/>
           <Mid />
           <Bottom/>
        </div>
    )
}