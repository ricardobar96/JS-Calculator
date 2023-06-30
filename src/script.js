import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

class App extends React.Component {
  state = {
    result: 0
  };
  
  onClick = (e) => {
    if(e.target.id === "clear"){
      this.setState({
        result: 0
      });
    }
    
    if(e.target.id === "equals"){
      let current = this.state.result.toString();
      let numbers = current.split(/[\/\-\*\+]/);
      
      this.setState({
        result: eval ( this.state.result )
      });
    }
    
    if(e.target.innerText === "."){
      let current = this.state.result.toString();
      let numbers = current.split(/[\/\-\*\+]/);
      
      if(!numbers.at(-1).includes(".")){
       this.setState({
        result: this.state.result +       
          e.target.innerText
        }); 
      }
    }
    
    if(e.target.innerText >= 0 && 
       e.target.innerText <= 9){
      if(this.state.result === 0){
        this.setState({
          result: e.target.innerText
        });
      }
       if(this.state.result != 0 || 
         this.state.result === "0."){
        this.setState({
          result: this.state.result +       
          e.target.innerText
        });  
      }
    } 
    
    if(e.target.innerText === "+" || e.target.innerText === "/" || e.target.innerText === "*" || e.target.innerText === "-"){
      if (e.target.innerText != "-"){
        const lastChar = this.state.result[this.state.result.length - 1];
        const secondLastChar = this.state.result[this.state.result.length - 2];

        if(lastChar === "+" || lastChar === "/" || lastChar === "*" || lastChar === "-"){
          if (lastChar != "-"){
            this.setState({
             result: this.state.result.slice(0, -1) + e.target.innerText
            });
          }
          else{
            if (secondLastChar === "+" || secondLastChar === "/" || secondLastChar === "*" || secondLastChar === "-") {
               this.setState({
                  result: this.state.result.slice(0, -2) + e.target.innerText
               });
            }
            else{
             this.setState({
                result: this.state.result + e.target.innerText
             });    
            } 
          }
        }
        else{
          this.setState({
            result: this.state.result + e.target.innerText
          }); 
        }
      }
      if (e.target.innerText === "-"){
        const lastChar = this.state.result[this.state.result.length - 1];
        const secondLastChar = this.state.result[this.state.result.length - 2];

        if(lastChar === "+" || lastChar === "/" || lastChar === "*" || lastChar === "-"){
          if (lastChar != "-"){
            this.setState({
             result: this.state.result + e.target.innerText
            });
          }
          else{
            this.setState({
             result: this.state.result.slice(0, -1) + e.target.innerText
            });
          }
        }
        else{
         this.setState({
          result: this.state.result + e.target.innerText
         });  
        } 
      }
    }
  };
  
  render() {
    return (
      <div id="calculator">
        <h1>Calculator</h1>
        <p id="display">{this.state.result}</p>
        <div id="numbers-container">
          <button id="seven" class="number-button" onClick={this.onClick}>7</button>
          <button id="eight" class="number-button" onClick={this.onClick}>8</button>
          <button id="nine" class="number-button" onClick={this.onClick}>9</button>
          <button id="divide" class="operator-button" onClick={this.onClick}>/</button>
          <button id="four" class="number-button" onClick={this.onClick}>4</button>
          <button id="five" class="number-button" onClick={this.onClick}>5</button>
          <button id="six" class="number-button" onClick={this.onClick}>6</button>
          <button id="multiply" class="operator-button" onClick={this.onClick}>*</button>
          <button id="one" class="number-button" onClick={this.onClick}>1</button>
          <button id="two" class="number-button" onClick={this.onClick}>2</button>
          <button id="three" class="number-button" onClick={this.onClick}>3</button>
          <button id="subtract" class="operator-button" onClick={this.onClick}>-</button>
          <button id="zero" class="number-button" onClick={this.onClick}>0</button>
          <button id="decimal" class="number-button" onClick={this.onClick}>.</button>
          <button id="equals" onClick={this.onClick}>=</button>
          <button id="add" class="operator-button" onClick={this.onClick}>+</button>
          <button id="clear" onClick={this.onClick}>AC</button>
        </div>      
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));