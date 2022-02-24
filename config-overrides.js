const { addBabelPlugin, override, disableChunk } = require('customize-cra')

const fileNamePlugin = () => (config) => {
  config.output.filename = 'static/js/[name].js'

  config.plugins[5].options.filename = 'static/css/[name].css'
  config.plugins[5].options.moduleFilename = () => 'static/css/main.css'
  return config
}

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src'
    }
  ]),
  addBabelPlugin([
    'module-resolver',
    {
      root: 'src',
      alias: {
        '~': '*',
        '@styles': 'styles'
      }
    }
  ]),
  disableChunk(),
  fileNamePlugin()
)
