import * as React from 'react';
import Navbar from './components/Navbar';

export interface IAppShellProps {
    children: React.ReactNode;
}

const AppShell: React.FC<IAppShellProps> = ({ children }) => {
    return (
        <div className="bg-neutral-100 h-screen pb-8 overflow-y-auto">
            <Navbar />
            <div className="flex w-full justify-center">
                <div className="w-full max-w-[1600px]">{children}</div>
            </div>
        </div>
    );
};

export default AppShell;
