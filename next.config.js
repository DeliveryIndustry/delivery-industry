const path = require('path')

module.exports = () => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,

    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
      prependData: '@import "config.sass"',
    },

    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        loader: '@svgr/webpack',
        options: {
          prettier: false,
          svgo: true,
          svgoConfig: {
            plugins: [{ removeViewBox: false }],
          },
        },
      })
      return config
    },
  }

  return nextConfig
}
