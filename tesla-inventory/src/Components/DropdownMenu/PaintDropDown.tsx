export default function PaintDropDown () {
    return(
        <div className="flex gap-4 py-4 bg-white rounded-md shadow-sm">
        <ul className="space-y-3">
            {['White', 'Black', 'Red', 'Gray', 'Silver'].map((paint) => (
                <li key={paint} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input type="checkbox" id={paint} name="paint" />
                    <label htmlFor={paint} className="cursor-pointer">
                        {paint}
                    </label>
                </li>
            ))}
        </ul>
        </div>
    )
}