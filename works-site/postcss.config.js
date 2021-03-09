const purgecss = [
	'@fullhuman/postcss-purgecss',
	{
		//specify the paths to all the template files
	  content: [
	    './pages/**/*.{js,jsx,ts,tsx}',
	    './components/**/*.{js,jsx,ts,tsx}',
	  ],

	 function defaultExtractor(content){
	    const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || [];
            const innerMatches = content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || [];
            return broadMatches.concat(innerMatches);
	  },
	},
];


module.exports = {
	plugins: ['tailwindcss', process.env.NODE_ENV === 'production' ? purgecss : undefined, 'postcss-preset-env',]
}
