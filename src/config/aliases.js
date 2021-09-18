const aliases = (prefix = `src`) => ({
  '@pages': `${prefix}/pages/`,
  '@components': `${prefix}/components/`,
  '@containers': `${prefix}/containers/`,
  '@reducers': `${prefix}/redux/reducers/`,
  '@actions': `${prefix}/redux/actions/`,
  '@utils': `${prefix}/utils/`,
  '@styles': `${prefix}/styles/`,
});

module.exports = aliases;