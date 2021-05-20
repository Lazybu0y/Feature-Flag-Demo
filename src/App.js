import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import HelloWorld from './helloWorld';
import { withLDProvider } from 'launchdarkly-react-client-sdk';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! with Launch Darkly</h1>
        <h2>{<HelloWorld/>}</h2>
      </div>
    );
  }
}

const LDConfig ={
  clientSideID: "609ec142cfed410ce89ba2f7",
  user:{
    "key":"Santosh",
    custom:{
      groups:'beta_testers'
    }
  }
}

export default withLDProvider(LDConfig)(App);