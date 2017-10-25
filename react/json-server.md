作为前端和客户端开发人员，在后端还没有给出对应的api接口时，我们无法做测试。 这时，我们可以使用json-server快速搭建一个测试的api接口，能快速搭建好。

###创建db.json

在里面加入json格式的数据

```
{
  "post":[
{
  "id" :"13479587123",
  "title" :"标题一",
  "content":"nksdjnkj"
},
{
  "id":"264564123",
  "title":"标题二",
  "content":"nksdjnkj"
},
{
  "id":"37165756723",
  "title":"标题三",
  "content":"nksdjnkj"
},
{
  "id":"476571233224",
  "title":"标题四",
  "content":"nksdjnkj"
},
{
  "id":"5123dsd",
  "title":"标题五",
  "content":"nksdjnkj"
}]
}
```

###全局安装JSON-Server

```
npm install -g json-server
```

###运行JSON-Server

```
json-server --watch db.json -p 3008
```

###一些基本命令

```

GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
```
意思分别是

```
读取所有文章
读取 id 为 1 的文章
发布一篇文章
更新 id 为 1 的文章
删除 id 为 1 的文章
```

注意：启动了 json-server 之后，我们就拥有了一套 API ，包括上面几个。但是，其中不包括 / 这个 API 。也就是说访问 http://localhost:3008/ 这个位置是不会看到任何数据的。


### 视频

http://digicity-1253322599.costj.myqcloud.com/json-server.mp4
