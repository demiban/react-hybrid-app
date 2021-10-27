import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { makeServer } from "./server"
require('dotenv').config()

if (process.env.REACT_APP_ENV === "local") {
  makeServer()
}

ReactDom.render(<App />, document.getElementById("root"));