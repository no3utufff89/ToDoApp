import type {InputHTMLAttributes} from "react";
import type {FieldValues, Path, UseFormRegister} from "react-hook-form";

interface CustomInputProps<TFormValues extends FieldValues>
    extends InputHTMLAttributes<HTMLInputElement> {
    name: Path<TFormValues>;
    register: UseFormRegister<TFormValues>;
    id: string;
    labelText: string;
}
function TextareaWithLabel<TFormValues extends FieldValues>(
    {name, register, id, labelText,}: CustomInputProps<TFormValues>) {
    return (
        <label htmlFor={id} className="flex flex-col grow">
            <span>
                <span className="text-[14px]">{labelText}</span>
            </span>
            <textarea
                {...register(name)}
                id={id}
                className="border border-[#28273533] rounded-[10px] h-[45px]
            px-[20px] outline-0 transition focus:border-[#8653D4]"
            />
        </label>
    );
}

export default TextareaWithLabel;
