import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const asyncNumber = () => {
  return new Promise((resolve) => {
    // Send a number from [0..9].
    const resValue = Math.random() * 10 << 0;
    // Resolve in [500..1000)ms.
    const resDelay = 500 + (Math.random() * 500);
    setTimeout(() => resolve(resValue), resDelay);
  });
}

async function* getAsyncNumber() {
  yield await asyncNumber;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      lines: []
    };
    // Let's have a look...
    const numberGetter = getAsyncNumber();
    const a = numberGetter.next();
    console.log(a.value);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
