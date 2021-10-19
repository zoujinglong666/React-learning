import React from "react";
import ReactDOM from "react-dom";
class Parent extends React.Component{
  state={
    parentMsg:""
  }
  getChildMsg=(data)=>{
    console.log(data)

    this.setState({
      parentMsg:data

    })
  }


  render(){
    return(
      <div className="parent">
        父组件:{this.state.parentMsg}
        <Child getMsg={this.getChildMsg}/>      
      </div>
    )
  }
}

class Child extends React.Component{
  state={
    ChildMsg:'123'
  }

  handleClick=()=>{
    this.props.getMsg(this.state.ChildMsg)

  }
  render(){
    return(
      <div>
        子组件：<button onClick={this.handleClick}>
          点击向父组件传递数据

        </button>
      </div>
    )
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));
