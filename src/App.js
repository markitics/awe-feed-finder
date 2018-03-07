import React, { Component } from 'react';
import awesound from './awesound.png';
import './App.css';
import {SearchBar} from './SearchBar';
//import {Test} from './Test';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={awesound} className="App-logo" alt="awesound" />
          <h1 className="App-title">Podcast Feed Finder</h1>
        </header>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
