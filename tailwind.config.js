/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        extend: {
            fontFamily: {
                "custom-poppins": ["Poppins", "sans-serif"],
            },

            colors: {
                "primary-light": "#F6EBDA",
                "primary-medium": "#F9D9AA",
                primary: "#FF902B",

                secondary: "#2F2105",
            },
        },
    },
    plugins: [],
};
