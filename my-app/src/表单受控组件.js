
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    txt: "",
    content: 'zhuzhu',
    city: "sz",
    isChecked: false
  }
  handlechange = (e) => {

    //获取当前DOM对象
    const target = e.target
    const value = target.type === "checkbox"
      ? target.checked
      : target.value

    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <input type="text" name="txt" value={this.state.txt} onChange={this.handlechange}></input>
        <br />

        <textarea name="content" value={this.state.content} onChange={this.handlechange}>

        </textarea>

        <select name="city" value={this.state.city} onChange={this.handlechange}>
          <option value="sh">上海</option>
          <option value="bj">北京</option>
          <option value="sz">深圳</option>
        </select>

        <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handlechange}>
        </input>


      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))



