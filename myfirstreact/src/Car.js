import React from 'react';

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state={
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({color:"blue"});
    }

    render() {
      return (
          <div>
            <h1>My {this.state.brand}</h1>
            <p>모델명 : {this.state.model}</p>
            <p>색상 : {this.state.color}</p>
            <button
            type="button"
            onClick={this.changeColor}>Change Color</button>
          </div>
      )
    }
  }

export default Car;