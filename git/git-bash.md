### 2.通过 git bash 配置和使用 git

先去自行创建账号和 仓库， 下面仅仅是解释如何用 git 命令行配置 github


##### 2.1 生成ssh key

输入下面的命令，如果有文件id_rsa.pub 或 id_dsa.pub，则直接进入步骤3将SSH key添加到GitHub中，否则进入第二步生成SSH key
```
ssh-keygen -t rsa -C "zhukejin@zhukejin.com" //这里是gitlab的邮箱
```
路径选择：使用该命令之后, 会出现提示选择ssh-key生成路径,选择在根目录下

密码确认：这里我们不使用密码进行登录, 用密码太麻烦，直接回车。当然，如果你想使用密码登录，那就输入密码之后回车。

##### 2.2 在根目录下找到 ssh-key

##### 2.3 配置个人信息，键入指令

```
git config --global user.name "primo" //这里是使用gitlab的用户名
git config --global user.email "zhukejin@zhukejin.com" //这里是gitlab的邮箱
```

在根目录下输入ssh-
