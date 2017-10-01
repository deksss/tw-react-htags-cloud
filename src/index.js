import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
//import {sereachTweets} from "./Api/twitter";
//import {updateDataInStorage, getDataFromStorage} from "./Api/storage";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
/*
sereachTweets('Angular');

getDataFromStorage()
    .then((r, e) => {
      console.log(r);
      console.log(e);
    })
    .catch(e => console.log(e));

updateDataInStorage([{key: 1, name: 'React' + ~~(Math.random()*10)}, {key: 2, name: 'Redux'}]);
*/
