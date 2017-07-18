>本文的前提是pc端和github端有“conde”仓库

在终端里进入仓库“cnode”，先

```
 npm run build
```

来生成静态文件。然后将生成的“dist”文件夹拖拽出来。通过

```
 git branch
``` 
查看当前分支
>看是不是在“master”分支里

###做版本
>切换分支前把当前修改做版本


```
git add .
git comment -m "aaa"
git status
git push
```

##建分支、切换到分支

```
git branch gh-pages
git checkout gh-pages
```
然后在“sublime”打开“cnode”仓库，除“node_modules”、“.gitignore”之外的都删去，再将“dist”中“js"、“style”、“index.html”拷贝到“cnode”仓库中，最后


```
git add .
git comment -m "aaa"
git push -set-upstrem...
```
只需要在浏览器中打开网址：http:zhuangzz.github.io/cnode
>zhuangzz是github上的用户名

###添加 ssh key
需要达成开发机和 github.com 的互信。

因为开发过程中，我们需要用本地机器向 github.com 的仓库中 写东西（ git push ），同时我们又不想每次都输入密码，所以我们就用 ssh key 的形式来达成互信，过程如下：

-在本地机器上生成一对 ssh key ，一个公钥，一个私钥
-把公钥添加到 github.com

具体操作如下：
-首先本地运行 ssh-keygen 命令，（三次回车）可以在 ~/.ssh 文件夹下生产 ssh key
>"~"是用户主目录
-到 ~/.ssh/id_rsa.pub >cd .ssh   cat id_rsa.pub 也就是公钥文件中，拷贝公钥字符串
-把字符串粘贴到 github.com -> setting -> ssh keys -> add(注意要删除公钥末尾的换行符)












