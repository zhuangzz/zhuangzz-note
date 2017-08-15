* 原生对象.className  *获取* 或 *修改* class名


document.getElementByClassName("box")[0].classname="box active"

* 原生对象.getAttribute("属性名") 获取属性值

document.getElementByClassName("box")[0].getAttribute("class")

* 原生对象.setAttribute("属性名",属性值) 设置该属性的属性值

document.getElementByClassName("box")[0].setAttribute("class","active")

* 原生对象.removeAttribute("属性名") 删除该属性

document.getElementByClassName("box")[0].setAttribute("href")


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















































>this.parentNode这个的父级

>document.querySelector('ul').getElementByTagName("li")[0]

 
>css属性选择器input[type=button]
















































