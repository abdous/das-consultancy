import Link from "next/link";
import React from "react";
import { FC } from "react";

const Navigation: FC = () => {
    return (
        <nav className="flex items-center justify-between w-full max-w-4xl">
            <div className="text-lg font-bold">DAS Consultancy</div>
            <div className="flex space-x-4">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
