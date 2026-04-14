/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#21231F',
                gold: '#D3A72C',
                'gold-light': '#E8C04A',
                'gold-dark': '#B8891A',
                muted: '#A1A1A1',
                surface: '#2A2C27',
                'surface-2': '#32352E',
                border: '#3A3D35',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
                display: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-gold': 'pulseGold 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseGold: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(211, 167, 44, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(211, 167, 44, 0.6)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gold-gradient': 'linear-gradient(135deg, #D3A72C 0%, #E8C04A 50%, #B8891A 100%)',
            },
            screens: {
                xs: '475px',
            },
        },
    },
    plugins: [],
};
