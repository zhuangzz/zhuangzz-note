现在来提交表单相应事件，添加“handleSubmit”事件

```
<form  onSubmit={this.handleSubmit} className="comment-form ">
  <input className="input" type="tex/>
  <button className="submit-btn" type="submit" >提交</button>
</form>
```

然后定义handleSubmit

```
handleSubmit = (e)=>{
	e.preventDefault()
	console.log("hello")
}
``` 

由于使用了es6的胖箭头语法，所以使用中就不需要bind(this)了
‘e.preventDefault()’的作用
>在表单提交的时候阻止页面跳转

###拿到input的输入



首先添加ref

```
<input ref={value=>this.comment=value} className="input" type="text"/>
```

上面ref的字面意思是“指针”，后面大括号里

```
value=>this.comment=value
```

是一个胖箭头函数.其中value指代当前input节点对应的对象，

```
this.comment=value
```

就是把input对象，赋值给整个成员变量，目的可以随处访问。


如果想在handlessubmit中拿到用户输入的文本,就

```
handleSubmit = ()=>{
	console.log(this.comment.value)
 }
```

到这里如何从form 的输入框中拿到字符串，这个技巧就结束了，同时这也是最简单的方式。另外还可以通过“受控组件”的形式来取得，比较麻烦，暂时不用。

###修改state

先来讨论render函数的本性：
>一旦state变，render()自动被重新执行，所以界面上两条评论变成三条评论，不需要修改html，直接修改state


###清空input
最后需要在input 结束后清空字符串

handleSubmit中添加

```js
this.comment.value=""
```

但是如果，一个form的input比较多，下面方法较好
在handleSubmit中添加

```
this.myForm.reset()
```
```
<form  ref={value=>this.myForm=value} onSubmit={this.handleSubmit} className="comment-form ">
```












