
import React from "react";
import ReactDOM  from "react-dom";
import singleSpaReact from 'single-spa-react';
import Container from './components/Container'
import './index.css';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter: () => document.getElementById('container'),
  rootComponent: Container
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;


