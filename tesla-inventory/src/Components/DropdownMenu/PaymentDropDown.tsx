import { useState } from "react";

export default function PaymentDropDown() {
    const paymentOptions = ['Cash', 'Lease', 'Finance'];
    const [selectedOption, setSelectedOption] = useState('');
    const [budget, setBudget] = useState(65000); // Default value in dollars

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(parseInt(e.target.value));
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className="flex flex-col gap-4 py-4 bg-white rounded-md shadow-sm">
            <ul className="space-y-3">
                {paymentOptions.map((option) => (
                    <li key={option} className="flex items-center gap-3">
                        <input
                            type="radio"
                            id={`payment-${option}`}
                            name="payment-method"
                            checked={selectedOption === option}
                            onChange={() => handleOptionChange(option)}
                            className="h-4 w-4 text-gray-700 focus:ring-gray-900"
                        />
                        <label 
                            htmlFor={`payment-${option}`}
                            className="block text-sm font-medium text-gray-700 cursor-pointer"
                        >
                            {option}
                        </label>
                    </li>
                ))}
            </ul>

            {selectedOption && selectedOption === 'Cash' && (
                <div className="mt-4">
                    <div className="flex gap-2 mb-2">
                        <span className="text-sm font-medium text-gray-700">Up to</span>
                        <span className="text-sm font-semibold text-gray-900">
                            {formatCurrency(budget)}
                        </span>
                    </div>
                    <div className="relative w-full">
                        <input
                            type="range"
                            min="15000"
                            max="60000"
                            step="1000"
                            value={budget}
                            onChange={handleBudgetChange}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{formatCurrency(15000)}</span>
                            <span>{formatCurrency(60000)}</span>
                        </div>
                    </div>
                </div>
            )}

            {selectedOption && selectedOption === 'Lease' && (
                <div className="mt-4">
                    <div className="flex gap-2 mb-2 text-sm text-gray-700 font-medium">
                        <span>Up to </span>
                        <span className="font-semibold text-gray-900">
                            {formatCurrency(budget)}
                        </span>
                        <span> /mo </span>
                    </div>
                    <div className="relative w-full">
                        <input
                            type="range"
                            min="250"
                            max="800"
                            step="50"
                            value={budget}
                            onChange={handleBudgetChange}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{formatCurrency(250)}</span>
                            <span>{formatCurrency(800)}</span>
                        </div>
                    </div>
                </div>
            )}

            {selectedOption && selectedOption === 'Finance' && (
                <div className="mt-4">
                    <div className="flex gap-2 mb-2 text-sm text-gray-700 font-medium">
                        <span>Up to </span>
                        <span className="font-semibold text-gray-900">
                            {formatCurrency(budget)}
                        </span>
                        <span> /mo </span>
                    </div>
                    <div className="relative w-full">
                        <input
                            type="range"
                            min="200"
                            max="1200"
                            step="50"
                            value={budget}
                            onChange={handleBudgetChange}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{formatCurrency(200)}</span>
                            <span>{formatCurrency(1200)}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}