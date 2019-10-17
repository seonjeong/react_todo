import express from 'express';
import router from './routes/route';

const server = express();
const port = 3000;

const bodyParser = require('body-parser');

server.use(bodyParser.json());

server.use('/',router);

const webpack = require('webpack');
const config = require('../webpack.dev.js');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);
server.use(webpackDevMiddleware);

// const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
// server.use(webpackHotMiddleware);

const staticMiddleWare = express.static('dist');
server.use(staticMiddleWare);

server.listen(port,()=>{
    console.log('server is listening');
});
