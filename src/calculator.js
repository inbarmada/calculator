import React from 'react';

class Calculator extends React.Component{
  constructor(props) {
    super(props);
    this.initializeState();
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleAC = this.handleAC.bind(this);
    this.numberCompleted = this.numberCompleted.bind(this);
    this.addOperator = this.addOperator.bind(this);
  }

  initializeState() {
    this.state = {
      entered: '',
      currentNumber: '',
      lastOperator: '',
      display: '0',
      lastEntered: ''
    }
  }

  /* REPLACE lastOperator WITH
  lastEntered WHICH WILL HOLD 'NUM' OR 'OP'. REPLACE
  entered ARRAY WITH A STRING OF EVERYTHING ENTERED.
  EVALUATE USING EVAL */

  cleanState() {
    this.setState({
      entered: '',
      currentNumber: '',
      lastOperator: '',
      display: '0',
    });
  }

  handleNumbers(event) {
    let val = event.target.value;
    if (!(val == '.' && this.state.currentNumber.includes('.'))) {
      this.setState((state) => {return {
        currentNumber:  state.currentNumber + val,
        display: state.currentNumber + val
      }});
    }
    console.log(this.state.currentNumber);
  }

  numberCompleted(func, arg) {
    // check that number is valid
    console.log('num completed', this.state.currentNumber);

  }

  evaluate() {
    let val = eval(this.state.entered);
    return val;
  }

  handleEquals(event) {
    if (this.state.currentNumber != '') {
      this.setState((state) => {return {
          entered:  state.entered + state.currentNumber
        }},
        () => {
          this.printState();
          let val = this.evaluate();
          this.setState((state) => {return {
            display: val + '',
            entered: val,
            currentNumber: ''
          }})
        }
      );
    }
  }

  handleAC(event) {
    this.cleanState();
  }

  handleOperator(event) {
    if (this.state.lastEntered != 'NUMBER') {
      this.setState((state) => { return {
        lastOperator: state.currentNumber,
        currentNumber: '',
        entered: state.entered + state.currentNumber,
        lastEntered: 'NUMBER'
      }},
      this.addOperator(event));
    }

    else {
      let len = this.state.entered.length;
      this.setState((state) => { return {
        lastOperator: state.currentNumber,
        currentNumber: '',
        entered: state.currentNumber,
        lastEntered: 'NUMBER'
      }},
      this.addOperator(event));
    }

  }

  addOperator(event) {
    let val = event.target.value;
    console.log("last", this.state.lastEntered);
    if (this.state.lastEntered == 'NUMBER') {
      this.setState((state) => { return {
        lastOperator: val,
        currentNumber: '',
        entered: state.entered + val,
        lastEntered: 'OPERATOR'
      }});
    } else {
      let len = this.state.entered.length;
      this.setState((state) => { return {
        lastOperator: val,
        currentNumber: '',
        entered: state.entered.substring(0, len - 1) + val,
        lastEntered: 'OPERATOR'
      }});
    }

    console.log(this.state.entered);
  }

  render() {
    return <div className="calc-body">
      <div className="cell result-display">
        {this.state.entered}
      </div>
      <div className="grid-holder">
        <button className="cell AC" onClick={this.handleAC} style={{gridArea: "AC"}}>AC</button>

        <button className="cell operator" value={'/'} onClick={this.handleOperator} style={{gridArea: "divide"}}>/</button>
        <button className="cell operator" value={'*'} onClick={this.handleOperator} style={{gridArea: "mult"}}>x</button>
        <button className="cell operator" value={'-'} onClick={this.handleOperator} style={{gridArea: "minus"}}>-</button>
        <button className="cell operator" value={'+'} onClick={this.handleOperator} style={{gridArea: "plus"}}>+</button>

        <button className="cell number" value={'0'} onClick={this.handleNumbers} style={{gridArea: "zero"}}>0</button>
        <button className="cell number" value={'1'} onClick={this.handleNumbers} style={{gridArea: "one"}}>1</button>
        <button className="cell number" value={'2'} onClick={this.handleNumbers} style={{gridArea: "two"}}>2</button>
        <button className="cell number" value={'3'} onClick={this.handleNumbers} style={{gridArea: "three"}}>3</button>
        <button className="cell number" value={'4'} onClick={this.handleNumbers} style={{gridArea: "four"}}>4</button>
        <button className="cell number" value={'5'} onClick={this.handleNumbers} style={{gridArea: "five"}}>5</button>
        <button className="cell number" value={'6'} onClick={this.handleNumbers} style={{gridArea: "six"}}>6</button>
        <button className="cell number" value={'7'} onClick={this.handleNumbers} style={{gridArea: "seven"}}>7</button>
        <button className="cell number" value={'8'} onClick={this.handleNumbers} style={{gridArea: "eight"}}>8</button>
        <button className="cell number" value={'9'} onClick={this.handleNumbers} style={{gridArea: "nine"}}>9</button>
        <button className="cell number" value={'.'} onClick={this.handleNumbers} style={{gridArea: "dec"}}>.</button>

        <button className="cell equal" onClick={this.handleEquals} style={{gridArea: "equal"}}>=</button>
      </div>
      <button className="cell" onClick={this.printState.bind(this)}>print state</button>

    </div>;
  }

  printState() {
    console.log('entered', this.state.entered);
    console.log('currentNumber', this.state.currentNumber);
    console.log('lastOperator', this.state.lastOperator);
    console.log('display', this.state.display);
  }
}



export default Calculator;
