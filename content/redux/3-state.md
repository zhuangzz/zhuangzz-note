不用 Redux 如何实现组件间通信呢？

答案简单来说就一句话：

>通过子组件，修改父组件的 state ，然后把父组件的 state 作为所有子组件的 props 值传入各个子组件

这样就实现了各个兄弟组件间通信。

###子组件修改父组件的 state
下面先写一个例子，演示子组件去修改父组件的 state 值：
>(新建一个仓库creat-reac-app redux-share)

```
import React, { Component } from 'react';
class Child extends Component {
  handleClick = () => {
    this.props.changeColor('green')
  }

  render() {
    return (
      <div style={{ 'border' : '3px solid red' }}>
        <button onClick={this.handleClick}>Child button</button>
      </div>
    );
  }
}

class App extends Component {
  state = {
    bgColor: 'yellow'
  }

  changeBackground = (color) => {
    this.setState({
      bgColor: color
    })
  }

  render() {
    return (
      <div style={{ 'border' : '3px solid green',
                    'padding' : '20px',
                    'backgroundColor' : this.state.bgColor
      }}>
        <Child changeColor={this.changeBackground} />
      </div>
    );
  }
}

export default App
```
###redux-hello 项目中
实现评论效果：
*在App.js中
```
import React, { Component } from 'react'
import './App.css'
import PostBody from './PostBody'
import CommentBox from './CommentBox'

class App extends Component {
  state = {
    comments: [
      "第一条评论",
      "第二条评论"
    ]
  }

  addComment = (comment) => {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
  render() {
    return (
      <div>
        <div className="top  clearfix">
          <PostBody comments={this.state.comments}  />
        </div>
        <div className="bottom clearfix">
          <CommentBox comments={this.state.comments} addComment={this.addComment}/>
        </div>
      </div>
    );
  }
}

export default App;
```
*在CommentBox.js中
```
import React, { Component } from 'react'

class CommentBox extends Component {

  handleSubmit = (e) => {
    let newComment = this.commentInput.value
    this.props.addComment(newComment)
    e.preventDefault()
    this.commentForm.reset()
  }

  render() {
    return (
      <div className="comment-box">
        {
          this.props.comments.map(item => (
            <li className="comment" key={Math.random()}>{item}</li>
          ))
        }
        <form ref={value => this.commentForm = value}
          onSubmit={this.handleSubmit} className="comment-form">
          <input type="text" className="input" ref={value => this.commentInput = value} />
          <button type="submit" className="submit-btn">提交</button>
        </form>
        <div className="underline"></div>
      </div>
    );
  }
}

export default CommentBox
```
*在PostBody.js中
```
{this.props.comments.length}
```
这样，就可以实现 redux-hello中各组件的通信以及评论条数的显示。
