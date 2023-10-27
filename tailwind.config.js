/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                blue: {
                    50: '#e4f7ff',
                    100: '#cfeeff',
                    200: '#a8deff',
                    300: '#74c5ff',
                    400: '#3e99ff',
                    500: '#136cff',
                    600: '#005aff',
                    700: '#005aff',
                    800: '#0050e4',
                    900: '#0038b0',
                    950: '#002172', // base
                },
                green: {
                    50: '#f8fee7',
                    100: '#edfccb',
                    200: '#dcf99d',
                    300: '#c2f264', // base
                    400: '#a8e635',
                    500: '#89cc16',
                    600: '#69a30d',
                    700: '#507c0f',
                    800: '#416212',
                    900: '#385314',
                    950: '#1b2e05',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
