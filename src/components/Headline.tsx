import { ReactNode } from 'react';

const Headline = ({ children }: { children: ReactNode }) => (
    <div className="text-xl font-medium mb-2">{children}</div>
);

export default Headline;
