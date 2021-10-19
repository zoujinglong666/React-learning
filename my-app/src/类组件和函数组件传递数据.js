
import React from "react";
import ReactDOM from "react-dom";

// const App=(props)=>{
//   console.log(props)
//   return(
//     <div>
//       <h1>
//         props:{props.name}--{props.age}
//       </h1>
//     </div>
//   )
// }

class App extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <h1>
          props:{this.props.name}
        </h1>
      </div>
    )
  }
}
ReactDOM.render(<App name="liuqi" age={19}/>, document.getElementById("root"));
