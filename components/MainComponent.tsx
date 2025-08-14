import React from "react";
import Navigation from "./Navigation";
import { ReactNode, JSX } from "react";

type MainComponentProps = {
    children: ReactNode;
};

const MainComponent = ({ children }: MainComponentProps): JSX.Element => {
    return (
        <main className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <Navigation />
            {children}
        </main>
    );
};

export default MainComponent;
