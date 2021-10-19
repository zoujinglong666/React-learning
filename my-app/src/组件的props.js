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

class App extends React.Component {

  constructor(props){
    super(props)
    console.log(props)
  }
  render() {
    console.log(this.props);
    this.props.fn()
    return (
      <div>
        <h1>props:{this.props.colors[1]}</h1>
      </div>
    );
  }
}
ReactDOM.render(
  <App name="liuqi" age={19} colors={["red", "blue"]} fn={()=>console.log('hanshu')}/>,
  document.getElementById("root")
);
