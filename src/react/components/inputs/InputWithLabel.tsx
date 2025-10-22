import type {InputHTMLAttributes} from "react";
import type {FieldValues, Path, UseFormRegister} from "react-hook-form";

interface CustomInputProps<TFormValues extends FieldValues>
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'required'> {
    name: Path<TFormValues>;
    register: UseFormRegister<TFormValues>;
    type: string;
    id: string;
    labelText: string;
    required?: boolean | string;
}

function InputWithLabel<TFormValues extends FieldValues>(
    {
        name,
        register,
        type,
        id,
        labelText,
        required = false,
        ...rest
    }: CustomInputProps<TFormValues>) {

    const validationRules = {
        required: required
            ? (typeof required === 'string' ? required : 'This field is required')
            : false,
        validate: (value: string) => {
            if (!value) return true;
            if (/^\s+$/.test(value)) {
                return 'Field cannot contain only spaces';
            }
            if (required && value.trim() === '') {
                return 'Field cannot be empty';
            }
            return true;
        }
    };

    return (
        <label htmlFor={id} className="flex flex-col grow">
            <span className="text-[14px] font-medium text-gray-700">
                {labelText}
                {required && <span className="text-red-500 ml-1">*</span>}
            </span>
            <input
                type={type}
                {...register(name, validationRules)}
                id={id}
                className="border border-[#28273533] rounded-[10px] h-[45px]
                    px-[20px] outline-0 transition focus:border-[#8653D4]"
                {...rest}
            />
        </label>
    );
}

export default InputWithLabel;