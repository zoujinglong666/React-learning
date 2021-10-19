
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

  constructor(){
    super()
    //创建ref
    this.txtRef=React.createRef()
  }

  handleClick=()=>{
      console.log("文本款的值:"+this.txtRef.current.value)
  }

  render(){
    return(
      <div>
        <input type="text" ref={this.txtRef}/>
        <button onClick={this.handleClick}>
          获取文本值
        </button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))



