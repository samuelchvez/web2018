import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: 'lol',
    };
  }

  // onClick() {
  //   console.log("VALUE:", this.input.value);
  // }

  onClick() {
    
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          type="text"
          value={inputValue}
          // ref={node => this.input = node}
          onChange={
            e => this.setState({
              inputValue: e.target.value,
            })
          }
        />
        <button onClick={this.onClick.bind(this)}>{'Go!'}</button>
      </div>
    );
  }
}

export default App;
