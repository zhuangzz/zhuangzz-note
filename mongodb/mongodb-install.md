### MAC OSX 安装MongoDB

[参考]:(https://jockchou.gitbooks.io/getting-started-with-mongodb/content/book/import.html)

一、使用包管理器进行安装

1.更新 Homebrew的package数据库（macosx上的软件包管理工具）
$ brew update

2.安装MongoDb
$ brew install mongodb

3.启动MongoDb（安装成功后命令行有提示）
$ mongod --config /usr/local/etc/mongod.conf

4.连接到mongo
$mongo

二、使用二进制文件

1.下载 ［使用curl来下载二进制文件，也可以直接下载］
$curl -ohttps://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.2.4.tgz
注：以上命令下载的是Mac OS X64位版本，根据操作系统不同可以有不同选择

2.解压
$ tar -zxvf mongodb-osx-x86_64-3.2.4.tgz

3.简化命名
$mv mongodb-osx-x86_64-3.2.4 mongodb

4.指定MongoDb数据存储文件夹［默认路径为：/data/db］
$ mkdir-p /data/db
注：创建文件夹时肯能会出现权限问题，使用sudo或者超级用户来运行。

5.确保文件夹权限
$ chown-R $USER /data/db
注：创建的data db目录并不在home目录下面所以需要以上命令设置权限

6.启动服务［默认监听端口27017］
$ cdmongodb/bin
$ mongod
