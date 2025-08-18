import { BarChart3, Activity, Layout, Ticket, Bus, Map, Signpost } from "lucide-react";

export const skills = [
    { title: "Frontend Development", desc: "React, Next.js, Tailwind CSS" },
    { title: "Data Visualization", desc: "Charts, Dashboards, D3.js" },
    { title: "Statistical Analysis", desc: "R, Python, Data Modeling" },
    { title: "UI/UX Design", desc: "User flows, Prototyping, Accessibility" },
    { title: "Communication", desc: "Teaching, Technical Training, Cross-functional Collaboration" }
];

export const projects = [

    {
        title: "Sales Dashboard",
        desc: "Created an interactive sales dashboard using Power BI as part of a DataCamp project, visualizing regional sales trends and key performance metrics to support data-driven decisions.",
        icon: BarChart3,
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
        href: "https://www.datacamp.com/datalab/dashboard"
    },
    {
        title: "Data Analyst Professional Practical Exam Submission (DataCamp)",
        desc: "Completed DataCamp’s Data Analyst Professional certification practical exam, delivering insights from a real-world dataset through cleaning, analysis, visualization, and statistical interpretation using Python and Pandas.",
        icon: Activity,
        bgColor: "bg-red-100",
        iconColor: "text-red-600",
        href: "https://www.datacamp.com/datalab/dashboard"
    },
    {
        title: "UI Components Library",
        desc: "Developed a private UI components library for De Lijn to ensure consistent design and faster development across internal applications. The library includes reusable, accessible components built with modern frontend technologies, enabling teams to maintain a unified look and feel while reducing development time.",
        icon: Layout,
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
        href: "https://www.delijn.be"
    },
    {
        title: "Account-Based Ticketing (ABT) System - De Lijn",
        desc: "A smart ticketing system for De Lijn that lets passengers tap in and out using a transit card, mobile phone, or contactless bank card. The system automatically calculates fares based on the journey and links them to the passenger’s account, enabling a seamless, cash-free travel experience.",
        icon: Ticket,
        bgColor: "bg-yellow-100",
        iconColor: "text-yellow-600",
        href: "https://www.delijn.be/nl/tickets/"
    },
    {
        title: "De Lijn Flex",
        desc: "An on-demand transport service by De Lijn designed to connect rural and hard-to-reach areas with the main public transport network. It offers flexible scheduling and seamless integration with bus, tram, and train services.",
        icon: Bus,
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
        href: "https://www.delijn.be/nl/content/reisinfo/flex/"
    },
    {
        title: "De Lijn Routeplanner",
        desc: "An interactive journey planner for De Lijn that helps travelers combine train, metro, tram, and bus routes to reach their destination quickly and efficiently. It provides precise transfer points, multiple route options based on date and time, and allows users to save or print their chosen itinerary for a smooth, stress-free trip.",
        icon: Map,
        bgColor: "bg-cyan-100",
        iconColor: "text-cyan-600",
        href: "https://www.delijn.be/en/routeplanner/"
    },
    {
        title: "De Lijn Halteborden",
        desc: "Digital bus stop boards for De Lijn that provide real-time information about nearby stops, bus routes, and connections. The system integrates network maps, platform layouts, and stop-specific details, making it easy for passengers to navigate and plan their journey.",
        icon: Signpost,
        bgColor: "bg-pink-100",
        iconColor: "text-pink-600",
        href: "https://www.delijn.be"
    },
];
