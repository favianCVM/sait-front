const aliases = (prefix = `src`) => ({
  '@pages': `${prefix}/pages/`,
  '@models': `${prefix}/models/`,
  '@config': `${prefix}/config/`,
  '@components': `${prefix}/components/`,
  '@containers': `${prefix}/containers/`,
  '@reducers': `${prefix}/redux/reducers/`,
  '@actions': `${prefix}/redux/actions/`,
  '@utils': `${prefix}/utils/`,
  '@styles': `${prefix}/styles/`,
  '@assets': `${prefix}/assets/`
});

module.exports = aliases;