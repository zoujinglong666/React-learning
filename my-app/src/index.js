import React from "react";
import ReactDOM from "react-dom";

const { Provider, Consumer } = React.createContext();
class App extends React.Component {
  render() {
    return (
      <Provider value="pink">
        <div className="app">
          <Node />
        </div>
      </Provider>
    );
  }
}

const Node = () => {
  return (
    <div className="node">
      <SubNode />
    </div>
  );
};
const SubNode = () => {
  return (
    <div className="subnode">
      <Child />
    </div>
  );
};

const Child = () => {
  return (
    <div className="child">
      <Consumer>{(data) => <span>  我是子节点--{data}</span>}</Consumer>
    
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
