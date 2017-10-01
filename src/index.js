import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { startApp42 } from "./Api/storage";
startApp42();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
