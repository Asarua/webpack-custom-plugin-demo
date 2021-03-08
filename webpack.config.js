const path = require('path')
const TestPlugin = require('./testPlugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  mode: 'development',
  plugins: [
    new TestPlugin({
      a: 123
    })
  ]
}