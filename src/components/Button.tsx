import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from '../utils/classNames';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children: ReactNode;
};

export default function Button({
    className = '',
    children,
    ...rest
}: ButtonProps) {
    return (
        <button
            {...rest}
            className={classNames(
                className,
                'flex w-full justify-center rounded bg-blue-950 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors'
            )}
        >
            {children}
        </button>
    );
}
