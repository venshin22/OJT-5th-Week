import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ModeldropDown from "../DropdownMenu/ModelDropDown";
import PaymentDropDown from "../DropdownMenu/PaymentDropDown";
import TrimDropDown from "../DropdownMenu/TrimDropDown";
import PaintDropDown from "../DropdownMenu/PaintDropDown";
import WheelsDropDown from "../DropdownMenu/WheelsDropDown";
import InteriorDropDown from "../DropdownMenu/InteriorDropDown";
import SteeringDropDown from "../DropdownMenu/SteeringDropDown";
import AutopilotDropDown from "../DropdownMenu/AutopilotDropDown";

export default function SideNav() {
    const [selected, setSelected] = useState('New');

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <aside className="flex-col w-[15rem] overflow-y-hidden hidden md:flex">
            <div className="flex flex-shrink-0 bg-[#f2f2f2] p-1 rounded-sm items-center justify-center">
                <button 
                    className={`px-10 py-1 rounded-sm ${selected === 'New' ? 'bg-white' : ''}`}
                    onClick={() => setSelected('New')}
                >
                    New
                </button>
                <button 
                    className={`px-10 py-1 rounded-sm ${selected === 'Used' ? 'bg-white' : ''}`}
                    onClick={() => setSelected('Used')}
                >
                    Used
                </button>
            </div>

            <nav className="flex flex-col pt-8 gap-8 font-semibold text-lg cursor-pointer">
                {/*Model Dropdown*/}
                <div>
                    <div 
                        className="flex items-center justify-between"
                        onClick={() => toggleDropdown('model')}
                    >
                        <h1>Model</h1>
                        <ChevronDown color="gray" className={`transition-transform ${openDropdown === 'model' ? 'rotate-180' : ''}`} />
                    </div>
                    {openDropdown === 'model' && <ModeldropDown />}
                </div>

                {/*Payment Dropdown*/}
                <div>
                    <div 
                        className="flex items-center justify-between"
                        onClick={() => toggleDropdown('payment')}
                    >
                        <h1>Payment</h1>
                        <ChevronDown color="gray" className={`transition-transform ${openDropdown === 'payment' ? 'rotate-180' : ''}`} />
                    </div>
                    {openDropdown === 'payment' && <PaymentDropDown />}
                </div>

                {/*Trim Dropdown*/}
                <div>
                    <div 
                        className="flex items-center justify-between"
                        onClick={() => toggleDropdown('trim')}
                    >
                        <h1>Trim</h1>
                        <ChevronDown color="gray" className={`transition-transform ${openDropdown === 'trim' ? 'rotate-180' : ''}`} />
                    </div>
                    {openDropdown === 'trim' && <TrimDropDown />}
                </div>

                {/*Paint Dropdown*/}
                <div>
                    <div 
                        className="flex items-center justify-between"
                        onClick={() => toggleDropdown('paint')}
                    >
                        <h1>Paint</h1>
                        <ChevronDown color="gray" className={`transition-transform ${openDropdown === 'paint' ? 'rotate-180' : ''}`} />
                    </div>
                    {openDropdown === 'paint' && <PaintDropDown />}
                </div>

                {/*Wheels Dropdown*/}
                <div>
                    <div 
                        className="flex items-center justify-between"
                        onClick={() => toggleDropdown('wheels')}
                    >
                        <h1>Wheels</h1>
                        <ChevronDown color="gray" className={`transition-transform ${openDropdown === 'wheels' ? 'rotate-180' : ''}`} />
                    </div>
                    {openDropdown === 'wheels' && <WheelsDropDown />}
                </div>

                {/*Interior Dropdown*/}
                <div>
                    <div 
                        className="flex items-center justify-between"
                        onClick={() => toggleDropdown('interior')}
                    >
                        <h1>Interior</h1>
                        <ChevronDown color="gray" className={`transition-transform ${openDropdown === 'interior' ? 'rotate-180' : ''}`} />
                    </div>
                    {openDropdown === 'interior' && <InteriorDropDown />}
                </div>

                {/*Steering Control Dropdown*/}
                <div>
                    <div 
                        className="flex items-center justify-between"
                        onClick={() => toggleDropdown('steering')}
                    >
                        <h1>Steering Control</h1>
                        <ChevronDown color="gray" className={`transition-transform ${openDropdown === 'steering' ? 'rotate-180' : ''}`} />
                    </div>
                    {openDropdown === 'steering' && <SteeringDropDown />}
                </div>

                {/*Autopilot Dropdown*/}
                <div>
                    <div 
                        className="flex items-center justify-between"
                        onClick={() => toggleDropdown('autopilot')}
                    >
                        <h1>Autopilot</h1>
                        <ChevronDown color="gray" className={`transition-transform ${openDropdown === 'autopilot' ? 'rotate-180' : ''}`} />
                    </div>
                    {openDropdown === 'autopilot' && <AutopilotDropDown />}
                </div>

            </nav>
        </aside>
    );
}