
import React from "react";
import ReactDOM from 'react-dom'
import { Main } from "./components/Main.jsx";

window.onload = function(){
  console.log("webpack app started yo");
  ReactDOM.render(
    <Main></Main>,
    document.getElementById('app')
  );
};
