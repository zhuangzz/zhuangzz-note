这一集不涉及redux，只使用组件自己的state来达成基本的评论框效果
要求：不使用后台，直接把假数据设置到state变量里
###显示两条死的评论在页面上
方法1
```
this.state = {
  comment1: "第一条评论",
  comment2: "第二条评论"，
}
```
```
<div>{this.state.comment1}</div>
<div>{this.state.comment2}</div>
```
方法2
```
this.state={
	comments=["第一条评论","第二条评论"]
}
```
```
let newComment=this.state.comments.map(item=>(<li key={Math.random()}>{item}</li>))
```
###添加 form
```
<form>
	<input type="text">
	<button>提交</button>
</form>
```
###发布评论
当点击提交按钮时能发布输入的内容，过程：
*点一下 submit 这个按钮，浏览器发成的 event （事件）就是 “表单提交（ form submit ）”
*事件触发之后，我们如何来写对应的”事件处理函数“一般会叫 handleXXX ，意思是”处理XXX事件“
*如何把”事件处理函数“跟事件本身绑定起来呢？纯 html 中用 action 属性来处理。但是有了 React 就不用 action 。用 onSubmit （ on 的意思就是”当发生“ ) 。参考https://facebook.github.io/react/docs/forms.html
```
 <form onSubmit={this.handleSubmit}
```
*现在的问题是，每次提交，页面都会刷新，而我们写的是”单页面应用“，所以页面不允许刷新
```
handleSubmit=(e)=>{
	e.preventDefault()
}
```
*下一步就需要拿到用户填写的评论内容了
```
handleSubmit=(e)=>{
	e.preventDefault()
	let newComment=this.comment.value
	this.setState={
		comments:[...this.state.comments,nwComment]
}
<form ref={value => this.commentForm = value} onSubmit={this.handleSubmit}></form>
<input type="text" ref={value => this.commentInput = value} />
```

