export default function WheelsDropDown () {
    return (
        <div className="flex flex-col gap-4 py-4 bg-white rounded-md shadow-sm">
        <ul className="space-y-3">
            {['19" Wheels', '21" Wheels'].map((wheels) => (
                <li key={wheels} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input type="checkbox" id={wheels} name="wheels" />
                    <label htmlFor={wheels} className="cursor-pointer">
                        {wheels}
                    </label>
                </li>
            ))}
        </ul>
        </div>
    )
}