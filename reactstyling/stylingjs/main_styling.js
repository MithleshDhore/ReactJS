import React from "react";
import ReactDOM from "react-dom";


export default class Myapp extends React.Component {

  render(){
    return (
    <div className="letter" >{this.props.children}</div>
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
