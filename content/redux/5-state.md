这一节来看看 redux 如何处理多类数据。


###添加点赞功能


目前 PostBody 组件中只显示评论，现在我们再添加一个点赞的按钮进来。


####Store 中存入多类数据


在去创建一个 Reducer／like ，然后 reducers/like.js 中这样写


```
export default function likeReducer(state = 0, action) {
  console.log(action)
  switch (action.type) {
    case 'x':
      return state + 1;
    default:
      return state;
  }
}
```


 在 reducers/index.js 中这样写


```
import likeReducer from './like'
import commentReducer from './comment'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  comments: commentReducer,
  likes: likeReducer
})

export default rootReducer
```



>上面的 comments 和 likes 最终对应了 store.getState() 输出的状态数的对象的两个 key 。





参考网址https://github.com/happypeter/redux-hello/commit/4a887c260613f21c144c14610c488d1c120cfb71






####显示“0赞”




修改PostBody.js中：



```
import React, { Component } from 'react';
import {connect} from "react-redux"
class PostBody extends Component {
  render() {
    return (
      <div className="post-body" style={{height:"80px",backgroundColor:"lightpink"}}>
       {this.props.comments.length}
       <div className="likes-num num">

       	 {this.props.likes} 赞
       </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
	comments:state.comments,
	likes:state.likes
});

export default connect(mapStateToProps)(PostBody);
```



参考https://github.com/happypeter/redux-hello/commit/0aaa99b7629de8d4ce68bba6bffc8dc9adde50e7



####显示评论


参考https://github.com/zhuangzz/redux-hello/commits/master


####点赞




思路：
* 数据存放到store.js 中（即在reducers/like.js中）


store.js：




```
import { createStore } from 'redux';
import rootReducer from "./reducers";
 
let store = createStore(rootReducer)
export default store
```




是之前写好的,不用改了。只需要去like.js中增加。

* 在PostBody.js增加onClick事件
* 在PostBody.js中写action
参考https://github.com/zhuangzz/redux-hello/commit/5d15c13e8a4c0cec685a0f3519ca58feae7808d0



####增加页面   

* 装包


```
npm i react-router-dom --save
```



* 引入


```
import {
	Switch,
	BrowserRouter as Router,
	Route} from "react-router-dom";
```


* 写路径



参考https://github.com/zhuangzz/redux-hello/commit/6608269b64894d384733ea7b007738cc0f1aa08c
#### 实现筛选，页面单独显示本页面state内容



>要实现根据ID就能实现在不同ID页面的不同state内容展示


* 将commit.js中state内改变


* 在CommentBox.js中实现筛选


参考https://github.com/zhuangzz/redux-hello/commit/6664d2497d32324d6e7fd4a5de08325c0996ea95

*增加赞

参考https://github.com/zhuangzz/redux-hello/commit/15ccb84392de6503c0e9d26818b856e42f34da2a


