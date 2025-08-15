import React from "react";
import Navigation from "./Navigation";
import { ReactNode, JSX } from "react";

type MainComponentProps = {
    children: ReactNode;
    mainClassName?: string;
    navClassName?: string;
};

const MainComponent = ({ children, mainClassName }: MainComponentProps): JSX.Element => {
    return (
        <main className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <Navigation />
            <div className={`bg-neutral-100 w-full p-4 pb-6 rounded-2xl lg:p-10 lg:overflow-hidden md:shadow-[0_7px_14px_rgba(138,149,158,0.15)] flex flex-col items-center justify-center ${mainClassName}`}>
                {children}
            </div>
        </main>
    );
};

export default MainComponent;
