/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'title': ["Space Grotesk", "sans-serif"],
			}
		},
	},
	plugins: [require("daisyui")],
}
