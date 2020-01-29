const withSass = require('@zeit/next-sass')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = withSass({
  poweredByHeader: false,
  webpack(config) {
    config.optimization.minimizer = []
    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
    return config
  },
  devIndicators: {
    autoPrerender: false
  }
})
