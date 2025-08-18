import Link from "next/link";
import classNames from "classnames";

const ButtonLink = ({
    href,
    children,
    bg = "blue-600", // Tailwind bg color
    text = "white",   // Tailwind text color
    hoverBg,          // Tailwind hover bg (optional, auto-calculated if not set)
    fullWidthOnMobile = false,
    ariaLabel,
    extraClasses = "",
}) => {
    const baseClasses = "px-6 py-2 rounded-lg transition-colors duration-200";

    const widthClasses = fullWidthOnMobile ? "w-full md:w-auto mx-auto" : "";

    const bgClass = `bg-${bg}`;
    const textClass = `text-${text}`;
    const hoverClass = hoverBg
        ? `hover:bg-${hoverBg}`
        : `hover:bg-${bg.replace(/\d+$/, match => String(Math.min(900, +match + 100)))}`;

    return (
        <Link
            aria-label={ariaLabel}
            href={href}
            className={classNames(baseClasses, bgClass, textClass, hoverClass, widthClasses, extraClasses)}
        >
            {children}
        </Link>
    );
}
export default ButtonLink;