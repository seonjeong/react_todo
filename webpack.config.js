const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options)=> {
    const config = {
        entry: {
            app : [
                'react-hot-loader/patch',
                './src/index.js'
            ],
            vender : [
                'react',
                'react-dom',
                'react-router-dom'
            ]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            // publicPath: '',
            filename: 'bundle.[name].js',
            chunkFilename: "bundle.[name].[id]-[chunkhash].js"
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname,'src')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },{
                test: /\.css$/,
                loaders : [
                    'style-loader',
                    'css-loader'
                ]
            },{
                test: /\.(png|jpg)$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    // publicPath: './dist/',
                    name: '[name].[ext]?[hash]',
                  }
                }
            }]
        },
        resolve: {
            modules: [
                'node_modules',
                path.join(__dirname,'./')
            ],
            extensions: ['.js','.json','.jsx','.css']
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'chunk',
                            chunks: 'all'
                    }
                }
            }
        }
    }

    if(options.mode === 'development'){

        config.plugins = [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                // filename: __dirname + '/dist/index.html'
            })
        ];
        config.devtool = 'inline-source-map';
        config.devServer = {
            open: true,
            // contentBase: './dist',
            inline: true,
            hot: true,
            historyApiFallback: true,
        }
    }

    return config;
}
