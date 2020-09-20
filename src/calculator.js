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
  }

  initializeState() {
    this.state = {
      entered: [],
      currentNumber: '',
      lastOperator: '',
      display: '0',
      lastNumber: ''
    }
  }



  cleanState() {
    this.setState({
      entered: [],
      currentNumber: '',
      lastOperator: '',
      display: '0',
      lastNumber: ''
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

  numberCompleted() {
    // check that number is valid
    if (this.state.currentNumber != '') {
      let len = this.state.entered.length;

      // if start of new expression, clear entered first.
      if (typeof this.state.entered[len - 1] == 'number') {
        this.setState((state) => {return {
          entered:  [parseFloat(state.currentNumber)]
        }});
      }
      // otherwise add number to end of entered
      else {
        this.setState((state) => {return {
          entered:  [...state.entered,
            parseFloat(state.currentNumber)]
        }});
      }

    }
  }

  evaluate(num1, op, num2) {
    // evaluate an expression given two numbers and an operator
    let val = 0;

    if (op === '-') {
      val = num1 - num2;
    }
    else if (op === '+') {
      val = num1 + num2;
    }
    else if (op === '*') {
      val = num1 * num2;
    }
    else if (op === '/') {
      val = num1 / num2;
    }

    return val;
  }

  evaluateTop() {
    // evaluate top expression from state.entered
    let length = this.state.entered.length;
    // check that expression exists
    if (length < 3) {
      return this.state.display;
    }
    let num1 = this.state.entered[length - 3];
    let op = this.state.entered[length - 2];
    let num2 = this.state.entered[length - 1];
    console.log(num1, op, num2);
    let val = this.evaluate(num1, op, num2);
    return val;
  }

  handleEquals(event) {
    this.setState((state) => {return {
        entered:  [...state.entered,
                  parseFloat(state.currentNumber)]
      }},
      () => {
        this.printState();
        let val = this.evaluateTop();
        let length = this.state.entered.length;
        this.setState((state) => {return {
          display: val + '',
          entered: [...state.entered.splice(0, length - 3), val],
          currentNumber: ''
        }})
      }
    );
  }

  handleAC(event) {
    this.cleanState();
  }

  handleOperator(event) {
    this.numberCompleted();
    let val = event.target.value;
    let len = this.state.entered.length;
    let lastEntered = this.state.entered[len];
    if (typeof lastEntered == 'number') {
      this.setState((state) => { return {
        lastOperator: val,
        currentNumber: '',
        entered: [val]
      }});
    } else {
      this.setState((state) => { return {
        lastOperator: val,
        currentNumber: '',
        entered: [...state.entered, val]
      }});
    }

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
    console.log('lastNumber', this.state.lastNumber);
  }
}



export default Calculator;
