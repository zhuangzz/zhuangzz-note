### shell两种语法类型：

- bourne: bash 、sh 、ksh 、zsh 、psh

- c: csh、tcsh

bourne和c不兼容，sh和bash兼容，现在使用linux就是使用bash作为用户的基本shell

```
 echo $SHELL //查看shell
```

```
vi /etc/shells //所有shell都可查询

sh  //进入sh

exit //退回

csh //进入csh
```

### 脚本的执行方式

##### echo输出命令

echo $PATH

-e 支持反斜杠(\b删除、\n换行、\x输出16进制)
  echo -e "a\nb"
  echo -e "\e[1;31m 红色 \e[0m"

##### hello world

`#`注释

```
vim hello.sh

#!/bin/bash //必须的说明

echo -e "s"

```
脚本的执行

- 赋予执行权限，直接执行

```
chmod 755 hello.sh
./hello.sh
```

- 通过bash调用执行版本

```
bash hello.sh //mac用zsh hello.sh
```

### bash 的基本功能

##### 命令别名和快捷键

##### 历史命令

##### 输出重定向

##### 多命令顺序执行

##### shell中特殊符号




- 命令别名和快捷键

`alias` 查看别名  

  `alias ls='ls -G'` 更改配置别名

别名永久生效
  `vi ~/.bashrc` 写入环境变量配置文件

  `source .bashrc`

  `unalias ls` 删除别名


- 历史命令

- 输出重定向

  ifgonfig > test.log 保存在日志中（ifgonfig >> test.log ）

  cat test.log

- 多命令顺序执行

- shell中特殊符号
