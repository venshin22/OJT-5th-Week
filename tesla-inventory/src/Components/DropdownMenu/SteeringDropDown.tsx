export default function SteeringDropDown () {
    return (
        <div className="flex flex-col gap-4 py-4 bg-white rounded-md shadow-sm">
        <ul className="space-y-3">
            {['Steering Wheel', 'Steering Yoke'].map((steering) => (
                <li key={steering} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input type="checkbox" id={steering} name="steering" />
                    <label htmlFor={steering} className="cursor-pointer">
                        {steering}
                    </label>
                </li>
            ))}
        </ul>
        </div>
    )
}