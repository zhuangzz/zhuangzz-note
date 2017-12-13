取两位小数，排除非数字类型的情况下，直接使用.toFixed(n)

Number.toFixed(n) -- 保留n位小数点,多出的四舍五入

var num=123456.789;

var num1=num.toFixed(2)   // 123456.79

如果不要四舍五入，并且一定要去2位小数，即使是“12.1”这种要变成“12.10”可以保留3位小数，然后截取的方式，截取前面2位，那样又是保留2位小数，又不会四舍五入：

var num2=num.toFixed(3);

num2.substring(0,num2.lastIndexOf('.')+3) // 123456.78
