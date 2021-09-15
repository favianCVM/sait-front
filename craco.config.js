const aliases = require(`./src/config/aliases`);

const SRC = './src'

module.exports = {
  webpack: {
    resolve: { 
      alias: aliases(SRC)
    }    
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};