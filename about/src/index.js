import React from "react";
import ReactDOM, { unmountComponentAtNode }  from "react-dom";
import App from './App';

export const bootstrap = async () => {

}
export const mount = async () => {
  ReactDOM.render(
    <div>
      <h1>About</h1>
      <App/>
    </div>,
    document.getElementById('container'),
  );

}
export const unmount = async () => {
  const e = document.getElementById('container')
  if (e) {
    unmountComponentAtNode(e)
  }
  
}
