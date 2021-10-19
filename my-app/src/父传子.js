import React from "react";
import ReactDOM from "react-dom";
class Parent extends React.Component{
  state={
    userName:'zou'
  }

  render(){
    return(
      <div className="parent">
        父组件
        <Child name={this.state.userName}/>      
      </div>
    )
  }
}

const Child=(props)=>{
  return(
    <div>
      <p>子组件，接收到父组件的数据是：{props.name}</p>
    </div>
  )
}

ReactDOM.render(<Parent />, document.getElementById("root"));
