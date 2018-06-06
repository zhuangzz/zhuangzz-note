game.js 全局文件入口
main.js 程序主类，初始化canvas 和一些全局对象、各个精灵和绑定点击事件
director.js 程序导演类，用来控制游戏的逻辑，精灵的创建与销毁，控制游戏主循环
dataStore.js 储存游戏中需要长期保存的变量，和需要定期销毁的变量
resources.js 游戏资源的数组
resourceLoader.js 资源加载器，保证游戏加载完canvas开始渲染，开始主循环
sprite.js 精灵的基类
background.js 背景
land.js 陆地
upPencil.js
downPencil.js
birds.js
score.js 计分器
startButton.js

### base 存放基本工具：

```
dataStore.js 储存游戏中需要长期保存的变量，和需要定期销毁的变量
resources.js 游戏资源的数组
resourceLoader.js 资源加载器，保证游戏加载完canvas开始渲染，开始主循环
sprite.js 精灵的基类
```

### player 玩家交互、不断变化的类

```
birds.js
score.js 计分器
startButton.js
```

### runtime 游戏场景环境的资源

```
background.js 背景
land.js 陆地
upPencil.js
downPencil.js
```

### 全局介绍

全局变量的管理放到 dataStore.js 中，director.js统管所有进程
