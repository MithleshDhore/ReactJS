import React from "react";

export default class Myapp extends React.Component {

  render(){
    return (
    <div className="letter" > {this.props.children} </div>
  )
  }
}

/*const Myapp = () => <div className="letter" >Hello</div>
export default Myapp*/
