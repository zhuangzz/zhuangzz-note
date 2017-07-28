* HTML:结构

* css:表现

* javaScript:行为

command+shift+d复制当前行

es3/5/6/7,从es6开始添加了类（.class）

有了node.js可以不只在网页中展示编的内容

推荐网址：知乎论坛、csdn、segmentfault

###引入js

* 从本地引入 

```
<script src="js/jquery-3.2.1.min.js"></script>
```

* bootstrap cdn 引入

```
<script src="https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap-grid.css"></script>
```

jquery: 选择器、事件、方法、动画

方法：

.css()改变样式

.attr()改变属性

.index()获取索引值

###找到button按钮，给它点击事件，背景色变色

```
$('button:first').click(function(){
		$(".box").css("background-color","red")
})
```
由代码：
* $：工具，后面的括号里放css选择器

* .click: 点击事件

* function: 键盘事件

* .css：里面放样式

###选择器（jquery选择器、css选择器）

* 标签名:1

* class名:10

* id:100

* 伪类选择器(:):10

* 后代、*

* 属性选择器（开始标签内部的是属性）



###添加动画效果

参考http://www.w3school.com.cn/css3/css3_animation.asp

```
@keyframes sss{
			0%{transform:rotate(0deg);}
			100%{transform:rotate(360deg);}
		}
```
```
$("button").click(funtion(){
	$(".yi").css("animation","sss 4s linear infinite")
})
```
如上代码：

* rotate:旋转

* linear:匀速（默认ease先慢后快）

* infinite:一直转

###过渡
 
```
transition:all 9s;
```
###轮播图

```
a[#]{}
```
>{}内容

>[]属性

filter模糊

```
<img src="images/1.jpg" alt="">
	<ul>
		<li><a href="#">1</a></li>
		<li><a href="#">2</a></li>
		<li><a href="#">3</a></li>
		<li><a href="#">4</a></li>
	</ul>
	<script src="js/jquery-3.2.1.min.js"></script>
	<script>
		$("ul li:nth-child(2) a").click(function(){
			$("img").attr("src","images/2.jpg")
			return false;
		})
		$("ul li:nth-child(1) a").click(function(){
			$("img").attr("src","images/1.jpg")
			return false;
		})
		$("ul li:nth-child(3) a").click(function(){
			$("img").attr("src","images/3.jpg")
			return false;
		})

		$("ul li:nth-child(4) a").click(function(){
			$("img").attr("src","images/4.jpg")
			return false;
		})	</script>
```

return false; 阻止跳转，一定写在最后面（即这句话后面的不执行）

```
alert($(this).parent().index());
```

$(this)指的是触发事件的一个元素

.parent()找父级


```
$("ul li a").click(function(){
			var index = $(this). parent().index()+1
			var imgsrc="images/"+index+".jpg"
			$("img").attr("src",imgsrc) 
		}) 
```

变量  声明

"images"+ind+".jpg":变量(ind)不能用引号引(变量的命名可以用下划线_,不能用-)

```
$(this).parent().siblings().find("a").css("color",black)
```

.siblings()其他的兄弟节点

.find(选择器)


###做一个tab

```
$("ul li a").click(function(){
	var ind=$(this).parent().index()+2
	$("div div:nth-child("+ind+")").css("display","block")
	$("div div:nth-child("+ind+")").siblings("div").css("display","none")
})
```
overflow:hidden;清浮动，写在浮动的父级

.siblings("div"):其他的div

display:none;消失

display:block;出现
































































