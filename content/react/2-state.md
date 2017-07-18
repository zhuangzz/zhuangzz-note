从github上克隆仓库网址
```bash
git clone git@github.com:zhuangzz/cnodeto.git
```
然后
```bash
rm -rf .git
npm i
git init
git add .
git commit -m "aa"
git remote add origin git@github.com:zhuangzz/cnodeto.git  #从网上新建的仓库里粘贴
git push -u origin master  #从网上新建的仓库里粘贴，若是输错了网址可以手动修改“vi config”"cd ....."
```
最后装包
```bash
npm i --save react-router-dom axios antd
npm i -D babel-plugin-import
```