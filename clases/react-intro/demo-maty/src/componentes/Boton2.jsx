import React from "react";

class Boton2 extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <button>{this.props.text}</button>
      </div>
    )
  }

};
export default Boton2;