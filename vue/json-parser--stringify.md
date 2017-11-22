### JSON.parse()和JSON.stringify()

#### parse用于从一个字符串中解析出json对象,如

```
var str = '{"name":"huangxiaojian","age":"23"}'
JSON.parse(str)
```

结果：

```
Object

age: "23"
name: "huangxiaojian"
__proto__: Object
```

注意：单引号写在{}外，每个属性名都必须用双引号，否则会抛出异常。


#### stringify()用于从一个对象解析出字符串，如

```
var
 a = {a:1,b:2}
JSON.stringify(a)
```

结果：

```
"{"a":1,"b":2}"
```
