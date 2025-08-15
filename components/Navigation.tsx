import Link from "next/link";
import React from "react";
import { FC } from "react";

const Navigation: FC = () => {
    return (
        <nav className="flex items-center justify-between w-full bg-blue-600 shadow-blue text-white p-4 rounded-lg">
            <div className="text-lg font-bold">DAS Consultancy</div>{/* have to add a log in place of the tex */}
            <div className="flex space-x-4">
                <Link href="/" className=" hover:text-gray-900">
                    Home
                </Link>
                <Link href="/about" className=" hover:text-gray-900">
                    About
                </Link>
                <Link href="/contact" className=" hover:text-gray-900">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
