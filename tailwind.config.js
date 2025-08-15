/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'blue': '0 4px 6px rgba(37, 99, 235, 0.5)', // matches Tailwind blue-600
                'blue-xl': '0 8px 20px rgba(37, 99, 235, 0.5)',
            },
        },
    },
    plugins: [],
};
