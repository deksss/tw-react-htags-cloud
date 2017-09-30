import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import {test} from "./Api/twitter";
import {pushData, getAllData} from "./Api/app42";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
test();
pushData({name: 'React' + ~~(Math.random()*10), type: 'publicHashtag'});
getAllData();
