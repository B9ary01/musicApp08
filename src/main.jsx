
import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
//const root1 = document.getElementById("root");
//root1.appendChild(App());

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App name="Sabin"/>
);


/*import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)*/
