### go的下载

我用的是 mac

两种下载方法：

① 命令行下载：

```
brew install go
```
② 网站下载包

我试了官网，需要加载好长时间，所以推荐这个[go中文网](https://studygolang.com/dl)

### 环境变量的设置

```
cd ~
vim .bash_profile
```

在 .bash_profile 下设置环境变量

```
export PATH=/usr/local/go/bin
export GOPATH=$HOME/go
```

就下载好了

### 装包

go 语言使用不想自己去根目录下新建目录，可以直接下载一些包，如：

```
go get -v github.com/spf13/cobra/cobra
```

这样根目录下就自动创建了名为 go 的文件夹

### 遇到的错误

在装包时遇见以下提示

```
zsh:command not found: go
```
解决方法:在根目录的 .zshrc 中加入

```
export PATH=$PATH:/usr/local/go/bin

```
