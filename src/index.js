import React from 'react';
import ReactDOM from 'react-dom';

import {App} from 'src/components'; // App 연결

import 'src/asset/css/ui_style.css'; // css 연결

import '@babel/polyfill'; // async / awaiat  - regeneratorRuntime 이슈 해결

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

module.hot.accept();
