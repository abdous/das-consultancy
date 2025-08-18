export default function DasLogo() {
    return (
        <svg
            width="68"
            height="68"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-white text-blue-600 rounded-full"
        >
            {/* Outer circle */}
            <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="3" fill="none" />

            {/* Inner circle */}
            <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" fill="none" />

            {/* Stars */}
            <text x="15" y="105" fontSize="20" fill="currentColor">★</text>
            <text x="166" y="105" fontSize="20" fill="currentColor">★</text>

            {/* Top curved text: DAS */}
            <path id="curveTop" d="M 40 100 A 60 60 0 0 1 160 100" fill="none" />
            <text fontSize="18" fill="currentColor">
                <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
                    DAS
                </textPath>
            </text>

            {/* Bottom curved text: CONSULTANCY */}
            <path id="curveBottom" d="M 160 100 A 60 60 0 0 1 40 100" fill="none" />
            <text fontSize="18" fill="currentColor">
                <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
                    CONSULTANCY
                </textPath>
            </text>
        </svg>
    );
}
