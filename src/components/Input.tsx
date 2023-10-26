import { HTMLInputTypeAttribute } from 'react';

type InputProps = {
    name: string;
    type: HTMLInputTypeAttribute;
    id?: string;
    label?: string;
};
const Input = ({ name, type, id = name, label }: InputProps) => {
    return (
        <div>
            <label
                htmlFor="orderId"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    name={name}
                    type={type}
                    className="block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    );
};

export default Input;
