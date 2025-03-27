export default function ModeldropDown() {
    return (
        <div className="flex flex-col gap-4 py-4 bg-white rounded-md shadow-sm">
            <ul className="space-y-3">
                {['Model S', 'Model Y', 'Model Z', 'Model G'].map((model) => (
                    <li key={model} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <input type="radio" id={model} name="car-model" />
                        <label htmlFor={model} className="cursor-pointer">
                            {model}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}