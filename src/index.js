import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'src/containers'; // App 연결

import 'src/asset/css/ui_style.css'; // css 연결

import '@babel/polyfill'; // async / awaiat  - regeneratorRuntime 이슈 해결

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

if( module.hot ){
     module.hot.accept();
}
