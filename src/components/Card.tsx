import { ReactNode } from 'react';
import { classNames } from '../utils/classNames';

export default function Card({
    className = '',
    children,
}: {
    className?: string;
    children: ReactNode;
}) {
    return (
        <div className={classNames(className, 'sm:mx-auto sm:w-full')}>
            <div className="bg-white px-6 py-8 shadow sm:rounded sm:px-12 h-full">
                {children}
            </div>
        </div>
    );
}
