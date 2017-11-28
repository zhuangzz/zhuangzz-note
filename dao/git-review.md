### git-review

进行上传操作之前，将gerrit的ssh添加到本地`git remote add gerrit ssh://nan@10...`

大体上传流程：

```
git pull
git add .
git commit -m 'q'
git review
```

但有时候出现问题，解决方法有

```
gitdir=$(git rev-parse --git-dir); scp -p -P 29418 nan@10.0.1.184:hooks/commit-msg ${gitdir}/hooks/
```

再次提交

```
git commit amend
```
git clean -f package-lock.json

```
git review
git status
git log
git clean -f package-lock.json
git status
git commit -m 's' -a
git status
git review
```
