export default function TrimDropDown () {
    return (
        <>
        <div className="flex flex-col gap-4 py-4 bg-white rounded-md shadow-sm">
        <ul className="space-y-3">
            {['Performace All-Wheel Drive', 'Long Range All-Wheeled Drive', 'Long Range Rear-Wheel Drive'].map((trim) => (
                <li key={trim} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input type="checkbox" id={trim} name="trim" />
                    <label htmlFor={trim} className="cursor-pointer">
                        {trim}
                    </label>
                </li>
            ))}
        </ul>
        </div>
        </>
    )
}