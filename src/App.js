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
  yield await asyncNumber();
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      lines: []
    };
    this.runSomething();
  }
  async runSomething() {
    // Let's have a look...
    console.log('Running async...');
    while (true) {
      const numberGetter = getAsyncNumber();
      const a = await numberGetter.next();
      this.setState({ lines: [...this.state.lines, a.value] });
    };
  }
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
        </div>
        <ul>
          { this.state.lines.map((n, m) => <li key={ m }>{ n }</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
