const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry: {
            app : [
                'react-hot-loader/patch',
                './server/index.js'
            ],
            vender : [
                'react',
                'react-dom',
                'react-router-dom'
            ]
        },
        output: {
            path: path.join(__dirname, 'dist'),
            // publicPath: path.join(__dirname, 'dist'),
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
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            'react-hot-loader/babel',
                            // ['module-resolver',{'root':['./']}]
                        ]
                    }
                }
            },{
                test: /\.css$/,
                loaders : [
                    'style-loader',
                    'css-loader'
                ]
            }
            ,{
                test: /\.(png|jpg)$/,
                loaders : [
                    'file-loader'
                ]
            },{
                test: /\.html$/,
                use : [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].html'
                        }
                    },{
                        loader: 'extract-loader'
                    },{
                        loader: 'html-loader'
                    }
                ]
            }]
        },
        plugins :[
            // new HtmlWebpackPlugin({
            //     template: './public/index.html'
            // })
        ],
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
        },
        mode: 'development',
        devtool: 'inline-source-map',
        devServer : {
            open: true,
            contentBase: './dist',
            inline: true,
            hot: true,
            historyApiFallback: true,
        }
    }
