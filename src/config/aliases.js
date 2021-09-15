const aliases = (prefix = `src`) => ({
  '@pages': `${prefix}/pages`,
  '@components': `${prefix}/components`,
  '@reducers': `${prefix}/reducers`,
  '@utils': `${prefix}/utils`,
  '@actions': `${prefix}/actions`,
});

module.exports = aliases;