import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
//import {updateDataInStorage, getDataFromStorage} from "./Api/storage";
import {startApp42} from "./Api/storage";
startApp42();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
/*

getDataFromStorage()
    .then((r, e) => {
      console.log(r);
      console.log(e);
    })
    .catch(e => console.log(e));

updateDataInStorage([{key: 1, label: 'React'}, {key: 2, label: 'Redux'}]);
*/
