export default function InteriorDropDown () {
    return (
        <div className="flex gap-4 py-4 bg-white rounded-md shadow-sm">
        <ul className="space-y-3">
            {['Black Premium', 'Black & White Premium', 'Cream Premium'].map((interior) => (
                <li key={interior} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input type="checkbox" id={interior} name="interior" />
                    <label htmlFor={interior} className="cursor-pointer">
                        {interior}
                    </label>
                </li>
            ))}
        </ul>
        </div>
    )
}