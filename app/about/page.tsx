import MainComponent from "../../components/MainComponent";
import React from "react";
import ButtonLink from "../../components/ButtonLink";

export default function About() {
    return (
        <MainComponent mainClassName=" gap-3 md:gap-6">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className=" ">
                With over a decade of experience in statistical analysis and more than seven years in modern front-end web development, I specialize in transforming complex data into clear, engaging, and user-friendly digital experiences.

                My background in statistics enables me to understand, model, and interpret data with precision, while my frontend expertise ensures that insights are delivered through intuitive, responsive, and visually compelling interfaces.

                Over the years, I’ve worked with diverse teams and industries, blending analytical thinking with creative problem-solving to deliver solutions that are both data-driven and user-focused.

                Whether it’s building a high-performance web application, creating interactive dashboards, or optimizing a user journey, my goal is the same: to make technology work seamlessly for people and to turn information into action.
            </p>
            <ButtonLink
                href="/files/DOurhamane_Abdou_Sanda_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                bg="blue-600"
                text="white"
                hoverBg="blue-700"
                ariaLabel="Contact DAS Consultancy"
                extraClasses="w-full md:w-auto text-center"
            >
                You can view my CV
            </ButtonLink>
        </MainComponent>
    );
}
