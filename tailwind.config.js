/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				'bg-tab': '#2a1e22',
				'bg-filter': '#15161a',
			},
		},
	},
	plugins: [],
};
