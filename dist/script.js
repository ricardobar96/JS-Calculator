function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      result: 0 });_defineProperty(this, "onClick",


    e => {
      if (e.target.id === "clear") {
        this.setState({
          result: 0 });

      }

      if (e.target.id === "equals") {
        let current = this.state.result.toString();
        let numbers = current.split(/[\/\-\*\+]/);

        this.setState({
          result: eval(this.state.result) });

      }

      if (e.target.innerText === ".") {
        let current = this.state.result.toString();
        let numbers = current.split(/[\/\-\*\+]/);

        if (!numbers.at(-1).includes(".")) {
          this.setState({
            result: this.state.result +
            e.target.innerText });

        }
      }

      if (e.target.innerText >= 0 &&
      e.target.innerText <= 9) {
        if (this.state.result === 0) {
          this.setState({
            result: e.target.innerText });

        }
        if (this.state.result != 0 ||
        this.state.result === "0.") {
          this.setState({
            result: this.state.result +
            e.target.innerText });

        }
      }

      if (e.target.innerText === "+" || e.target.innerText === "/" || e.target.innerText === "*" || e.target.innerText === "-") {
        if (e.target.innerText != "-") {
          const lastChar = this.state.result[this.state.result.length - 1];
          const secondLastChar = this.state.result[this.state.result.length - 2];

          if (lastChar === "+" || lastChar === "/" || lastChar === "*" || lastChar === "-") {
            if (lastChar != "-") {
              this.setState({
                result: this.state.result.slice(0, -1) + e.target.innerText });

            } else
            {
              if (secondLastChar === "+" || secondLastChar === "/" || secondLastChar === "*" || secondLastChar === "-") {
                this.setState({
                  result: this.state.result.slice(0, -2) + e.target.innerText });

              } else
              {
                this.setState({
                  result: this.state.result + e.target.innerText });

              }
            }
          } else
          {
            this.setState({
              result: this.state.result + e.target.innerText });

          }
        }
        if (e.target.innerText === "-") {
          const lastChar = this.state.result[this.state.result.length - 1];
          const secondLastChar = this.state.result[this.state.result.length - 2];

          if (lastChar === "+" || lastChar === "/" || lastChar === "*" || lastChar === "-") {
            if (lastChar != "-") {
              this.setState({
                result: this.state.result + e.target.innerText });

            } else
            {
              this.setState({
                result: this.state.result.slice(0, -1) + e.target.innerText });

            }
          } else
          {
            this.setState({
              result: this.state.result + e.target.innerText });

          }
        }
      }
    });}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "calculator" }, /*#__PURE__*/
      React.createElement("h1", null, "Calculator"), /*#__PURE__*/
      React.createElement("p", { id: "display" }, this.state.result), /*#__PURE__*/
      React.createElement("div", { id: "numbers-container" }, /*#__PURE__*/
      React.createElement("button", { id: "seven", class: "number-button", onClick: this.onClick }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "eight", class: "number-button", onClick: this.onClick }, "8"), /*#__PURE__*/
      React.createElement("button", { id: "nine", class: "number-button", onClick: this.onClick }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "divide", class: "operator-button", onClick: this.onClick }, "/"), /*#__PURE__*/
      React.createElement("button", { id: "four", class: "number-button", onClick: this.onClick }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "five", class: "number-button", onClick: this.onClick }, "5"), /*#__PURE__*/
      React.createElement("button", { id: "six", class: "number-button", onClick: this.onClick }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "multiply", class: "operator-button", onClick: this.onClick }, "*"), /*#__PURE__*/
      React.createElement("button", { id: "one", class: "number-button", onClick: this.onClick }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "two", class: "number-button", onClick: this.onClick }, "2"), /*#__PURE__*/
      React.createElement("button", { id: "three", class: "number-button", onClick: this.onClick }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", class: "operator-button", onClick: this.onClick }, "-"), /*#__PURE__*/
      React.createElement("button", { id: "zero", class: "number-button", onClick: this.onClick }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "decimal", class: "number-button", onClick: this.onClick }, "."), /*#__PURE__*/
      React.createElement("button", { id: "equals", onClick: this.onClick }, "="), /*#__PURE__*/
      React.createElement("button", { id: "add", class: "operator-button", onClick: this.onClick }, "+"), /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.onClick }, "AC"))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));