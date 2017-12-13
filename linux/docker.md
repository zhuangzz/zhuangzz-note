### docker安装

brew cask install docker

鉴于国内网络问题，后续拉取docker镜像十分缓慢，所以，配置镜像可以解决
，常见的镜像

[阿里云]:(https://cr.console.aliyun.com/#/imageList)

[DaoClould]:(https://www.daocloud.io/mirror#accelerator-doc)

停止Nginx服务器并删除：

```
docker stop webserver
docker rm webserver

```
docker在容器中做的命令都是暂时的，不保存的。想要保存的话做出改变后，

```
docker commit -m "(qq)" (container-id) nginx-(qq)
```
查看image
```
docker images
```
删除image
```
docker rmi (image-id)
```
查看正在运行中的容器

```
docker ps
```
查看所有容器
```
docker ps -a
```

### 命令小结

```
docker pull  //获取image
docker build  //创建image
docker images  //列出image
docker run   //运行container
docker ps   //列出container

docker rm  //删除已经结束的container
docker rmi  //删除image
docker cp  //在host和container之间拷贝文件
docker commit  //保存改动为新的image,生成新镜像

docker exec  //在运行的容器中执行命令

docker inspect mango //检查
```
-t 创建标签


#!/bin/bash

set -e

status=0

# Run postgres container
docker run \
-v /tmp/postgresql:/tmp \
-p 5433:5432 \
--name "pg-test" \
-e DB_USER=trafficadm \
-e DB_PASS=zhu88jie \
-e DB_NAME=traffic \
-d sameersbn/postgresql:9.4-24 || status=1
# Run memcached container
docker run --name "memcached-test" -d -p 11210:11211 memcached || status=1

> -p是做端口映射的，将docker的11211端口映射到本地的host的11210端口

> -d允许这个程序直接返回（把container作为守护进程来执行）

# Run rabbitmq container
docker run --name "rabbitmq--test" -d -p 15672:15672 -p 5672:5672 rabbitmq:3.6.6-management || status=1

# Copy traffic api to /tmp dir
cp -r ../traffic-api /tmp/
mv /tmp/traffic-api/tests/test.yml /tmp/traffic-api/server.yml

cp initdb.sql /tmp/postgresql && cp tests/test-data.sql /tmp/postgresql

# Initialize Postgresql
cd /tmp/traffic-api/models && node initdb.js

# Run command to insert data to test pg

> 运行命令将数据插入到测试pg中 ,pg Postgresql

docker exec -d pg-test /bin/bash -c "psql -h localhost traffic trafficadm -f /tmp/initdb.sql > /dev/null"

> docker exec  在运行的容器中执行命令

> docker exec -d 分离模式在后台运行

> -f  根据条件返回

> -h 指定守护进程监听连接的网络接口。

sleep 5
docker exec -d pg-test /bin/bash -c "psql -h localhost traffic trafficadm -f /tmp/test-data.sql > /dev/null"


# Run test case
cd /tmp/traffic-api && mocha tests --recursive > /tmp/test_results &


> recursive 遍历，即每个文件都跑到了

> >输出到哪里，指明一个输出的路径

# Sleep to wait result
sleep 40

# Clean and exit
docker rm -f pg-test >> /dev/null && \
docker rm -f memcached-test >> /dev/null && \
docker rm -f rabbitmq--test>>/dev/null

rm -rf /tmp/traffic-api/
rm -rf /tmp/postgresql/

echo "test finished!"


> docker ps 可以看到当前正在运行的docker的container
