/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        "bluetresor":'#214579',
        "greentresor":'#019b5b',
        "yellowtresor":'#fae12f',
        "graytresor":'#c8c8c8',
      },
      fontFamily:{
        "Montserrat": ['Montserrat', 'century gothic', 'sans-serif', 'MyriadPro']
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/forms')
,require('@tailwindcss/line-clamp')
,require('@tailwindcss/typography')
],
};
