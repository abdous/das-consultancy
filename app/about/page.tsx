import MainComponent from "../../components/MainComponent";
import React from "react";

export default function About() {
    return (
        <MainComponent>
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="mt-4 text-lg text-gray-600">
                We are DAS Consultancy, helping businesses grow with innovative solutions.
            </p>
        </MainComponent>
    );
}
