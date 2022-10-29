// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    externals: {
      jQuery: 'jquery', 
    },
    node: {
      fs: 'empty',
    },
    resolve: {
      fallback: {
        "crypto": false,
        "http": false,
        "https": false,
        "zlib": false,
        "os": false,
        "stream": false,
        "tls": false,
        "buffer": false,
        "child_process": false,
        "perf_hooks": false,
        "canvas": false,
        "fs": false,
        "assert": false,
        "path": false,
        "net": false,
        "fs": false
      },
    },
  })
}