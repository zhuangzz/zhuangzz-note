* 原生对象.className  *获取* 或 *修改* class名


document.getElementByClassName("box")[0].classname="box active"

* 原生对象.getAttribute("属性名") 获取属性值

document.getElementByClassName("box")[0].getAttribute("class")

* 原生对象.setAttribute("属性名",属性值) 设置该属性的属性值

document.getElementByClassName("box")[0].setAttribute("class","active")

* 原生对象.removeAttribute("属性名") 删除该属性

document.getElementByClassName("box")[0].setAttribute("href")


document.getElementById("button")//获取原生dom对象，通过id获取

document.getElementsByTagName("div")[0]//通过标签名获取（放在数组里面，获取数组中第一项）


document.getElementsByClassName("box")[0]

document.getElementsByName("password")[0]//通过name名获取，通常用于表单元素


document.querySelector(".box")//通过选择器获取，只获取第一个节点

document.querySelectorAll(".box")//通过选择器获取,获取所有节点

事件   原生对象.onclick=function(){}//小写

参考http://www.w3school.com.cn/jsref/dom_obj_all.asp


###dom

textarea标签的  name 属性为文本区规定名称。

resize:none; 不允许 <textarea>标签移动




* 原生对象.value  用于表单元素获取和修改内容（value是属性后面不能加括号，拿到的是字符串类型）

* 原生对象.innerHTML   标签获取文本内容（innerHTML是属性后面不能加括号）


* document.createElement("li")  创建标签(即文档创建元素)

* 原生对象.appendChild(li)将li放到原生对象内部最后面（作为最后一个子集）

* 原生对象(父级).insertBefore(添加的元素，子元素)将要添加的子元素添加到已存在的子元素前边

* 原生对象.parentNode  获取原生对象的父级元素（parentNode是属性）

* 原生对象(父级).removeChild(子级)  从父级中删除子级

* 原生对象.childNodes  获取原生对象下的所有子节点，包括空白节点（回车），返回数组

* 原生对象.cloneNode(true)复制一个原生对象，括号里加true完全复制，不加只复制空标签


* 原生对象.firstChild  获取第一个子节点，包括空白节点

* 原生对象.hasAttribute()  检测是否有该属性，返回true或false

* 原生对象.nodeName   返回元素的名称

* 原生对象.nodeType    返回元素的节点类型。1/2/3/4

* 原生对象.nodeValue    设置或返回元素值。

>节点  元素节点1   属性节点2   文本节点3   空白节点4


* 原生对象(父级).replaceChild(新元素，旧元素)


* 原生对象.tagName返回元素的标签名。大写


* 原生对象.textContent设置或返回节点及其后代的文本内容。IE9+



```
常用属性
1  element.id       设置或返回元素的 id。

2  element.innerHTML   设置或者返回元素的内容，可包含节点中的子标签以及内容

3  element.innerText  设置或者返回元素的内容，不包含节点中的子标签以及内容

4  element.className   设置或者 返回元素的类名

5  element.nodeName    返回该节点的大写字母标签名

6  element.nodeType   返回该结点的节点类型，1表示元素节点  2表示属性节点……

7  element.nodeValue  返回该节点的value值，元素节点的该值为null

8  element.childNodes  返回元素的子节点的nodeslist对象，nodelist类似于数组

，有length属性，可以使用方括号 [index] 访问指定索引的值(也可以使用item

(index)方法)。但nodelist并不是数组。

9  element.firstChild/element.lastChild  返回元素的第一个/最后一个子节点(包含

注释节点和文本节点)

10  element.parentNode  返回该结点的父节点

11  element.previousSibling  返回与当前节点同级的上一个节点(包含注释节点和文本节点)

12  element.nextSibling   返回与当前节点同级的下一个节点(包含注释节点和文本节点)

13  element.childElementCount :  返回子元素(不包括文本节点以及注释节点)的个数

14  element.firstElementChild /lastElementChild 返回第一个/最后一个子元素(不

包括文本节点以及注释节点)

15  element.previousElementSibling/nextElementSibling  返回前一个/后一个兄

弟元素(不包括文本节点以及注释节点)

16  element.clientHeight/clientWidth  返回内容的可视高度/宽度（不包括边框，

边距或滚动条）

17  element.offsetHeight/offsetWidth /offsetLeft/offsetTop 返回元素的高度/宽

度/相对于父元素的左偏移/上偏移(包括边框和填充,不包括边距)

18  element.scrollHeight/scrollWidth/scrollLeft/scrollTop返回整个元素的高度（

包括带滚动条的隐蔽的地方）/宽度/返回当前视图中的实际元素的左边缘和左边缘之

间的距离/上边缘的距离

19  element.style  设置或返回元素的行内样式属性。

element.style.backgroundColor  注意，与CSS不同，style的属性要去掉横杠，第

二个单词首字母要大写

20  element.tagName  返回元素的标签名(大写)



常用方法
1  element.appendChild(nodeName)   向元素添加新的子节点，作为最后一个子

节点，并返回该子节点。如需向 HTML DOM 添加新元素，您首先必须创建该元素

，然后把它追加到已有的元素上。


2  element.getAttribute(para)   返回元素节点的指定属性值。

3  element.getAttributeNode(para)   返回指定的属性节点。

4  element.getElementsByTagName(para) 返回拥有指定标签名的所有子元素的集

合。

5  element.hasAttribute(para)  如果元素拥有指定属性，则返回true，否则返回 false。

6  element.insertBefore(insertNode,appointedNode)  在指定的已有的子节点之前插入新节点。

js演示代码：
        var a=document.getElementById('first_form');
        var inputList=document.getElementsByTagName('input');
        var newNode=document.createElement('input');
        var newNode2=document.createTextNode('天马流星拳');
        var br=document.createElement('br');
        newNode.type='radio';
        newNode.name='gongfu';
        newNode.value='tmlxq';
        a.insertBefore(newNode,inputList[2]);
        a.insertBefore(newNode2,inputList[3]);
        a.insertBefore(br,inputList[3]);


7  element.removeAttribute() 从元素中移除指定属性。


8  element.removeChild()   从元素中移除子节点。

9  element.replaceChild(newNode,replaceNode)  把指定节点替换为新节点。

10  element.setAttribute(attrName,attrValue)  把指定属性设置或更改为指定值。

11  element.setAttributeNode()    修改指定属性节点

12  nodelist.item(0) 返回 NodeList 中位于指定下标的节点。
	nodelist[0]
```


###事件委托

事件捕获   事件触发    事件冒泡   

把子级的事件委托给上级，这个上级不是变化的

event.target 获取点击的目标对象(离鼠标最近的对象)


```js
		document.querySelector(".comment").onclick=function(){
			var  ele=event.target
			if(ele.tagName==="BUTTON"&&ele.innerHTML==="删除"){
				this.removeChild(ele.parentNode)
			}
		}
```





























>this.parentNode这个的父级

>document.querySelector('ul').getElementsByTagName("li")[0]

 
>css属性选择器input[type=button]
















































