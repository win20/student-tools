/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#1D3557',
				secondary: '#457B9D',
				secondaryHighlight: '#5488a8',
				lightText: '#F1FAEE',
			},
			fontFamily: {
				nunito: ['nunito', 'sans-serif'],
			},
			borderWidth: {
				1: '1px',
			},
			screens: {
				tablet: '640px',
				laptop: '1024px',
				desktop: '1280px',
			},
			keyframes: {
				shake: {
					'10%, 90%': {
						transform: 'translate3d(-1px, 0, 0)',
					},

					'20%, 80%': {
						transform: 'translate3d(2px, 0, 0)',
					},

					'30%, 50%, 70%': {
						transform: 'translate3d(-4px, 0, 0)',
					},

					'40%, 60%': {
						transform: 'translate3d(4px, 0, 0)',
					},
				},
			},
			animation: {
				shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97)',
			},
		},
	},
	plugins: [],
};
