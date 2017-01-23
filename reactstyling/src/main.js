import React from "react";
import ReactDOM from "react-dom";


export default class Myapp extends React.Component {

  render(){

  	var letterStyle = {
        padding: 10,
        margin: 10,
        backgroundColor: this.props.bgcolor,
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "100",
        textAlign: "center"
      };

    return (
    <div style={letterStyle} >{this.props.children}</div>
  )
  }
}

ReactDOM.render(
  <div>
  <Myapp bgcolor="#58B3FF">A</Myapp>
  <Myapp bgcolor="#FF605F">E</Myapp>
  <Myapp bgcolor="#FFD52E">I</Myapp>
  <Myapp bgcolor="#49DD8E">O</Myapp>
  <Myapp bgcolor="#AE99FF">U</Myapp>
  </div>,
  document.getElementById('container')
)
