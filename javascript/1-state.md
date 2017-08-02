原声js  		ECMAscript   es6   es7   es8

node+express+mogondb

js严格区分大小写

###变量

存储数据的容器

写法  var(声明)  xx(变量名) ="值";

变量名只能以字母、$、_开头 ，可以包括字母、_、数字，不能以关键字和保留字命名

驼峰命名法

*变量声明提升*  只要声明了的变量都会把声明（例：var num）  提升到当前作用域的最顶端

```
var num;
console.log(num);
num=10//最后输出undefind
```

当变量没有赋值时，undefind就是它的值

无论声明了几个变量，变量声明是同步执行的

作用域，在哪里声明就在里面用，作用域外面是拿不到的，只有函数有作用域


标识符 ：  变量名   函数名   参数  对象的属性名


标志符只能以字母、$、_开头 ，可以包括字母、_、数字，不能以关键字和保留字命名


关键字

```

break do instanceof typeof case else new var
catch finally return void continue for switch 
while debugger function this with default if 
throw delete in try 
```


保留字

```
Keyword FutureReservedWord NullLiteral BooleanLiteral
class enum extends super const export import
```


###数据类型(6种)


数字number  字符串(加引号)string  布尔boolean(后面直接写true false不加引号)   undefined   null(空对象)  对象object(var box=(".box"))


数据类型的检测typeof


console.log(typeof  value)




数据类型的转换


字符串和数字之间的转换

* string->number   Number(string)   parseInt(string)  parseFloat(string)


Number ： 先看string整体是不是数字，是的话转换，不是的话转换成Nan(也是数字类型，通过不正当的转换过来的)

parseInt：转换成整数，先看第一个字符是不是数字，是就转换，直到不是数停止，假如第一个不是数字转换成Nan

parsefloat：转换成浮点型

```
var bool=true;
console.log(Number(bool))//布尔值转化数字
```

* number,boolean->string          String()


隐式转换:

> +运算符，只要加号左右出现字符串，会把其他值全部转化为字符串再进行运算（）

> - * / % 只要符号左右出现数字  会把其他值转换成数字再进行运算  %取余

>if语句  会直接将判断条件转化为布尔值


number、string、object、unfined、null->boolean  Boolean()

0、undefined、null、"" : false



###运算符

+ - * ／ % > < >= <= == != === !==  ||  ！  &&

== 比较的是值     ===比较的是值和数据类型

||或   ！非  &&且


a++ <=>  a=a+1 先取值再加

++a <=> a=a+1  先加后取值


a+=10 <=> a=a+10

a*= <=> a=a*10

a/= <=> a=a/10


###语句

顺序  分支  循环

三目运算符  ？   ：

```
var a=20
a==30 ?  console.log("haha") : console.log("aaa")
```

分支语句：

```
//判断分支
var a=50;
if(a>=80){
	console.log("sss")
}else if(a>=60){
	console.log("aaa")
}else{
	console.log("ccc")
}
```


```
//判断值
var num=5
switch(num){
	case 1:console.log("今天星期一");break;
	case 2:console.log("今天星期二");break;
	case 3:console.log("今天星期三");break;
	case 4:console.log("今天星期四");break;
	default:console.log("今天星期五");break;
}
```

for循环









































