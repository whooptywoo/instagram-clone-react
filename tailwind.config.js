/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				defaultBlack: "#262626",
        defaultGrey: "#8E8E8E",
        defaultWhite: "#fff",
        defaultBlue: "#0095F6"
			},
		},
	},
	plugins: [],
};
