import classNames from "classnames";

// Reusable Section with bgColor prop
const Section = ({ bgColor = "", className = "", children }) => {
    const baseClass = classNames(
        "w-full text-center gap-3 md:gap-8 flex flex-col p-2 md:py-8 md:px-0",
        bgColor, // dynamically apply background color class
        className
    );
    return <section className={baseClass}>{children}</section>;
}

export default Section;