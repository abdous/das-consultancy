import React from "react";
import MainComponent from "../../components/MainComponent";

export const metadata = {
    title: "Contact DAS Consultancy",
    description:
        "Get in touch with DAS Consultancy to discuss your project and explore how data-driven design can bring your ideas to life.",
};

export default function Contact() {
    return (
        <MainComponent>
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-600">
                Reach out at abdous2004@yahoo.fr/contact@dasconsultancy.com or call us at +32 486 24 43 83.
            </p>
        </MainComponent>

    );
}
