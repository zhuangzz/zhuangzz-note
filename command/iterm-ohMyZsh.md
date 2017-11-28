### iTerm2 安装和基本自定制

安装 iTerm2 是超级简单地，到 http://iterm2.com/downloads.html 找到合适自己的版本，下载解压缩，放到 Applications 里面就可以了。

使用 Cmd-D 来分屏操作。在这里 http://iterm2.com/features.html 可以看到 iTerm2 提供的各种功能，我觉得我最喜欢的就是这个分屏了。

新标签的工作目录。除了这些功能，iTerm2 的可自定制性也比 Terminal 丰富。比如默认情况下，你启动一个新的标签页，当前工作目录就是你的用户主目录。但是大部分时候，我发现保留前面的标签的工作目录比较干活方便。这样我就可以敲 Cmd+’ 呼叫出 iTerm2 的 preferences 页，profile，选择当前我的默认 profile，然后勾选 Reuse previous session’s directory 。

### iTerm2 颜色主题和字体样式

来 http://iterm2colorschemes.com/ 选择一款自己喜欢的颜色主题吧，我自己用的是 Misterioso 。到 preferences -> profile 新建一个 profile 叫 nan，设置为 default 。到 color -> preset 然后 import 进 Misterioso 就好了。

设置字体和行间距。 到我的默认 profile 下，text -> change font，字体设置为 menlo 18px 。更改 charater spacing -> vitical 的值为 1.5 。我的感觉是行间距设置的越大，看起来越清爽，尤其在有中文的时候。这一点我是参考了 laracasts 的风格，看看https://laracasts.com/series/how-to-be-awesome-in-phpstorm/episodes/2 5:30 处。


### zsh 配置框架 oh-my-zsh

安装过程参考这里的 README：https://github.com/robbyrussell/oh-my-zsh 。


```
curl -L http://install.ohmyz.sh | sh
```

oh-my-zsh 使用的是zsh 。zsh 用起来跟 bash 基本是一样的，只是比 bash 多一些很实用的功能。

比如，如果我进入一个 git 仓库，这时候就可以在命令提示符部分看到分支了。如果我敲

```
git co
commit        -- record changes to
commit-tree   -- create new commit
...
```

可以看到命令补齐和基本使用说明，方便吧？

### oh-my-zsh 更改主题

使用了 zsh 之后，原来 bash 的 .profile .bashrc 等都不加载了，没事，各种配置都直接写到 .zshrc 中就好了。 oh-my-zsh 的主题就是改变命令提示符的格式。在 .zshrc 文件中，我把默认的 robbyrussell 改成了 awesomepanda ，

在根目录下，`vim .zshrc`

修改如下，
```
# ZSH_THEME="robbyrussell"
ZSH_THEME="awesomepanda"
```
这样就完成了主题的修改。

挑选自己喜欢的主题到：https://github.com/robbyrussell/oh-my-zsh/wiki/Themes 。

oh-my-zsh 会经常提醒我要更新，挺讨厌的，所以 uncomment 这一行：

```
# DISABLE_AUTO_UPDATE="true"
```
设置完主题后，我发现背景透明度以及字体颜色都没什么变化，所以需要自己去调节，Preference －> Profiles -> Colors -> Basic Colors -> Foreground 修改字体颜色；在 Preferences ->Profiles->Window ->transparency 修改透明度。

### 结语

oh-my-zsh 的功能还很多，raiilcasts 上有一个 oh-my-zsh 的视频： http://railscasts.com/episodes/308-oh-my-zsh 。
