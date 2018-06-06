### canvas 图片加载

```
image.src = "../res/background.png";
image.onload =()=> {
    this.ctx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        image.width,
        image.height
    )
}
```

```
/**
    * img 传入Image对象
    * srcX 要剪裁的起始X坐标
    * srcY 要剪裁的起始Y坐标
    * srcW 剪裁的宽度
    * srcH 剪裁的高度
    * x 放置的x坐标
    * y 放置的y坐标
    * width 要使用的宽度
    * height 要使用的高度
    */
```
