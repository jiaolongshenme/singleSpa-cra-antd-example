import React from "react";

import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter: () => document.getElementById("container"),
  rootComponent: App,
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
