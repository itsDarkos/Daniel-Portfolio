/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		screens: {
			sm:	'64',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		fontFamily:{
			primary: 'var(--font-jetBrainsMono)',
		},
  	extend: {
  		colors: {
  			primary: '#1c1c22',
  			accent:{
					DEFAULT: '#00ff99',
					hover: '#00e187'
				}
			},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
