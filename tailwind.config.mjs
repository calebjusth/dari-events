/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mavenGreen: '#004733',
				mavenMint: '#00D084',
				mavenCream: '#F9F7F2',
				mavenLightGreen: '#E6F4F1',
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
				serif: ['Georgia', 'serif'], // For the "family healthcare" italic look
			},
		},
	},
	plugins: [],
};