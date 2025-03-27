export default function AutopilotDropDown () {
    return (
        <div className="flex flex-col gap-4 py-4 bg-white rounded-md shadow-sm">
        <ul className="space-y-3">
            {['Full Self Driving'].map((autopilot) => (
                <li key={autopilot} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input type="checkbox" id={autopilot} name="autopilot" />
                    <label htmlFor={autopilot} className="cursor-pointer">
                        {autopilot}
                    </label>
                </li>
            ))}
        </ul>
        </div>
    )
}