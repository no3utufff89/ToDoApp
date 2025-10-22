import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface RadioBtnProps<T extends FieldValues> {
    name: Path<T>;
    register: UseFormRegister<T>;
    options: { value: string; label: string }[];
    label?: string;
    required?: boolean | string;
    orientation?: 'horizontal' | 'vertical';
    error?: string;
    variant?: 'default' | 'card';
}

const RadioBtn = <T extends FieldValues>(
    {name, register, options, label, required = false, orientation = 'vertical', error, variant = 'default'}: RadioBtnProps<T>) => {
    if (variant === 'card') {
        return (
            <div className="space-y-3">
                {label && (
                    <span className="block text-sm font-medium text-gray-700 mb-2">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </span>
                )}
                <div className={`grid gap-3 ${orientation === 'horizontal' ? 'grid-cols-3' : 'grid-cols-1'}`}>
                    {options.map((option) => (
                        <label
                            key={option.value}
                            className="relative cursor-pointer"
                        >
                            <input
                                type="radio"
                                value={option.value}
                                {...register(name, {
                                    required: required ? (typeof required === 'string' ? required : 'This field is required') : false
                                })}
                                className="sr-only peer"
                            />
                            <div className={`
                                p-3 rounded-lg border-2 text-center font-medium transition-all
                                bg-white hover:shadow-md
                                border-gray-200 text-gray-700
                                peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700
                                peer-checked:ring-2 peer-checked:ring-blue-200
                            `}>
                                {option.label}
                            </div>
                        </label>
                    ))}
                </div>
                {error && (
                    <p className="text-red-600 text-sm mt-1">{error}</p>
                )}
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {label && (
                <span className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </span>
            )}

            <div className={`${orientation === 'horizontal' ? 'flex flex-wrap gap-6' : 'space-y-3'}`}>
                {options.map((option) => (
                    <label
                        key={option.value}
                        className={`flex items-center space-x-3 cursor-pointer group ${
                            orientation === 'horizontal' ? 'flex-shrink-0' : ''
                        }`}
                    >
                        <div className="relative">
                            <input
                                type="radio"
                                value={option.value}
                                {...register(name, {
                                    required: required ? (typeof required === 'string' ? required : 'This field is required') : false
                                })}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 transition-colors group-hover:border-gray-400"
                            />
                        </div>
                        <span className="text-gray-700 text-sm font-medium select-none group-hover:text-gray-900">
                            {option.label}
                        </span>
                    </label>
                ))}
            </div>

            {error && (
                <p className="text-red-600 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export default RadioBtn;