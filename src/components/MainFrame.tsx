import { ReactNode } from 'react';

export default function MainFrame({ children }: { children: ReactNode }) {
    return (
        <div className="bg-gradient-to-b from-blue-200 to-blue-50 min-h-screen">
            <div className="mx-auto max-w-[1280px] p-0 sm:p-4">{children}</div>
        </div>
    );
}
