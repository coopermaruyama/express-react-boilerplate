var nodeExternals = require('webpack-node-externals');

module.exports = [
    /**
     * Client
     */
    {
        entry: './src/client/index.js',
        output: {
            filename: './public/bundle.js'
        },
        module: {
            loaders: [
                {
                  test: /\.jsx?$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: 'babel-loader',
                  query: {
                    presets: ['es2015', 'react']
                  }
                }
            ]
        }
    },
    /**
     * Server
     *
     * This is used purely as a way to run the server code through babel, and not to bundle any
     * external dependencies.
     */
    {
        entry: './src/server/index.js',
        target: 'node', // Ignore built-in node modules like path, fs, etc.
        externals: [nodeExternals()], // Ignore anything in node_modules
        output: {
            filename: './server.js'
        },
        module: {
            loaders: [
                {
                  test: /\.js$/,
                  loader: 'babel-loader',
                  query: {
                    presets: ['es2015']
                  }
              }
            ]
        }
    }
]
