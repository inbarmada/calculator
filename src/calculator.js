import React from 'react';

class Calculator extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: '',
      lastOperator: '',
      display: '0',
      lastNumber: ''
    }
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleAC = this.handleAC.bind(this);
  }

  handleNumbers(event) {
    let val = event.target.value;
    this.setState((state, props) => {return {
      currentNumber:  state.currentNumber + val,
      display: state.currentNumber + val
    }});

    console.log(this.state.currentNumber);
  }

  handleEquals(event) {
    let num1 = parseFloat(this.state.lastNumber);
    let num2 = parseFloat(this.state.currentNumber);
    console.log(num1);
    console.log(num2);
    // if ( some condition ) {
    //   this.setState((state) => { return {
    //     display: 'Error'
    //   }});
    // }
    let val = 0
    if (this.state.lastOperator === '-') {
      val = num1 - num2;
    }
    else if (this.state.lastOperator === '+') {
      val = num1 + num2;
    }
    else if (this.state.lastOperator === '*') {
      val = num1 * num2;
    }
    else if (this.state.lastOperator === '/') {
      val = num1 / num2;
    }

    this.setState((state) => { return {
      display: val + '',
      lastNumber: val + '',
      currentNumber: ''
    }});
  }

  handleAC(event) {
    this.setState({
      currentNumber:  '',
      display: '0'
    })
  }

  handleOperator(event) {
    let val = event.target.value;
    this.setState((state) => { return {
      lastOperator: val,
      currentNumber: '',
      lastNumber: state.currentNumber
    }});

    console.log(this.state.lastOperator);
  }

  render() {
    return <div className="calc-body">
      <div className="cell result-display">
        {this.state.display}
      </div>
      <div className="grid-holder">
        <button className="cell AC" onClick={this.handleAC} style={{gridArea: "AC"}}>AC</button>
        <button className="cell operator" value={'/'} onClick={this.handleOperator} style={{gridArea: "divide"}}>/</button>
        <button className="cell operator" value={'*'} onClick={this.handleOperator} style={{gridArea: "mult"}}>x</button>
        <button className="cell number" value={'7'} onClick={this.handleNumbers} style={{gridArea: "seven"}}>7</button>
        <button className="cell number" value={'8'} onClick={this.handleNumbers} style={{gridArea: "eight"}}>8</button>
        <button className="cell number" value={'9'} onClick={this.handleNumbers} style={{gridArea: "nine"}}>9</button>
        <button className="cell operator" value={'-'} onClick={this.handleOperator} style={{gridArea: "minus"}}>-</button>
        <button className="cell number" value={'4'} onClick={this.handleNumbers} style={{gridArea: "four"}}>4</button>
        <button className="cell number" value={'5'} onClick={this.handleNumbers} style={{gridArea: "five"}}>5</button>
        <button className="cell number" value={'6'} onClick={this.handleNumbers} style={{gridArea: "six"}}>6</button>
        <button className="cell operator" value={'+'} onClick={this.handleOperator} style={{gridArea: "plus"}}>+</button>
        <button className="cell  number" value={'1'} onClick={this.handleNumbers} style={{gridArea: "one"}}>1</button>
        <button className="cell number" value={'2'} onClick={this.handleNumbers} style={{gridArea: "two"}}>2</button>
        <button className="cell number" value={'3'} onClick={this.handleNumbers} style={{gridArea: "three"}}>3</button>
        <button className="cell number" value={'0'} onClick={this.handleNumbers} style={{gridArea: "zero"}}>0</button>
        <button className="cell number" value={'.'} onClick={this.handleNumbers} style={{gridArea: "dec"}}>.</button>
        <button className="cell equal" onClick={this.handleEquals} style={{gridArea: "equal"}}>=</button>
      </div>
    </div>;
  }
}

export default Calculator;
