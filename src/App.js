import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="calc-body">
          <div className="cell result-display">
            0.23
          </div>
          <div className="grid-holder">
            <div className="cell AC" style={{gridArea: "AC"}}>AC</div>
            <div className="cell operator" style={{gridArea: "divide"}}>/</div>
            <div className="cell operator" style={{gridArea: "mult"}}>x</div>
            <div className="cell number" style={{gridArea: "seven"}}>7</div>
            <div className="cell number" style={{gridArea: "eight"}}>8</div>
            <div className="cell number" style={{gridArea: "nine"}}>9</div>
            <div className="cell operator" style={{gridArea: "minus"}}>-</div>
            <div className="cell number" style={{gridArea: "four"}}>4</div>
            <div className="cell number" style={{gridArea: "five"}}>5</div>
            <div className="cell number" style={{gridArea: "six"}}>6</div>
            <div className="cell operator" style={{gridArea: "plus"}}>+</div>
            <div className="cell  number" style={{gridArea: "one"}}>1</div>
            <div className="cell number" style={{gridArea: "two"}}>2</div>
            <div className="cell number" style={{gridArea: "three"}}>3</div>
            <div className="cell number" style={{gridArea: "zero"}}>0</div>
            <div className="cell number" style={{gridArea: "dec"}}>.</div>
            <div className="cell equal" style={{gridArea: "equal"}}>=</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
