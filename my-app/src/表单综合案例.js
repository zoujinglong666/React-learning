import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    comments: [
      { id: 1, name: "刘琪", content: "大笨猪" },
      { id: 2, name: "认真琪琪", content: "大笨猪" },
      { id: 3, name: "小啊琪琪", content: "大笨猪" },
    ],
    userName: "",
    userContent: "",
  };
  returnList() {
    if (this.state.comments.length === 0) return <div>暂无评论</div>;
    else {
      return (
        <ul>
          {this.state.comments.map((item) => (
            <li key={item.id}>
              <h3>评论人:{item.name}</h3>
              <p>评论内容:{item.content}</p>
            </li>
          ))}
        </ul>
      );
    }
  }
  addComment = () => {
    const { comments, userContent, userName } = this.state;
    if(userName.trim()===''||userContent.trim()===''){
      alert("请输入评论人或评论内容")
      //防止下面代码运行
      return
    }
    const newComments = [
      {
        id: Math.random(),
        name: userName,
        content: userContent,
      },
      ...comments,
    ];
    this.setState({
      comments:newComments,
      userName:"",
      userContent:""
    })
    console.log(newComments)
  };
  handleForm = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { userName, userContent } = this.state;

    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="请输入评论人"
            value={userName}
            name="userName"
            onChange={this.handleForm}
          ></input>
        </div>

        <textarea
          placeholder="请输入评论内容"
          value={userContent}
          name="userContent"
          onChange={this.handleForm}
        ></textarea>
        <br />
        <button onClick={this.addComment}>发表评论</button>

        {this.returnList()}
        {/* {this.state.comments.length === 0 ? (
          <div>暂无评论</div>
        ) : (
          <ul>
            {this.state.comments.map((item) => (
              <li key={item.id}>
                <h3>评论人:{item.name}</h3>
                <p>评论内容:{item.content}</p>
              </li>
            ))}
          </ul>
        )} */}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
