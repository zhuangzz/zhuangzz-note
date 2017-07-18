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

###建分支、切换到分支

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












