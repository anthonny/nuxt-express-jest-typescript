export default function typescript (moduleOptions) {
  // Extends Webpack Configuration
  this.extendBuild(config => {
    // Add typescript extension to resolve list
    config.resolve.extensions.push('ts', 'tsx')
    // Add rule for typescript loader
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    })
  })
}
