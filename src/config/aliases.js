const path = require(`path`);
const prefix =  path.join(path.resolve(__dirname, './src'))

const aliases = () => ({
  'pages': `${prefix}/pages`,
  'components': `${prefix}/components`,
  'reducers': `${prefix}/redux/reducers`,
  'actions': `${prefix}/redux/actions`,
  'utils': `${prefix}/utils`,
  'styles': `${prefix}/styles`,
});

module.exports = aliases;