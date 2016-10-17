import React from "react";
import ReactDOM from "react-dom";


export default class Myapp extends React.Component {

  render(){

  	var letterStyle = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
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
  <Myapp>A</Myapp>
  <Myapp>E</Myapp>
  <Myapp>I</Myapp>
  <Myapp>O</Myapp>
  <Myapp>U</Myapp>
  </div>,
  document.getElementById('container')
)
