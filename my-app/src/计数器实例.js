
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  //简化语法
  state={
    count:0
  }

  //事件处理程序

  onIncrement=()=>{
    console.log(123)
    this.setState({
      count:this.state.count+1
    })
  }
  render(){
    return(
      <div>
        <h1>计数器:{this.state.count}</h1>
        {/* <button onClick={this.onIncrement}>+1</button> */}
        {/* <button onClick={()=>this.onIncrement()}>+1</button> */}
        <button onClick={this.onIncrement}>+1</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))



