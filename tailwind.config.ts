/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,tsx,ts,jsx}',
        './components/**/*{ts,tsx}'
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {},
    },
    plugins: [],
};