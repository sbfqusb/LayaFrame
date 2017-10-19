# LayaFrame
echo "# LayaFrame" >> README.md
git init
git add README.md
git commit -m "first commit"
$ git remote add origin https://github.com/sbfqusb/LayaFrame.git
$ git push -u origin master

美术资源命名原则：
https://ldc.layabox.com/doc/?nav=zh-ts-2-1-5

客户端优化：
https://ldc.layabox.com/doc/?nav=zh-ts-2-1-9
当游戏中有大量的UI，并且一个UI有多个节点，变化较小时，我们推荐使用cacheAs（大部分UI都可以使用）。
对于经常变化的复杂UI，可以把UI分成两层，较少变化的一层使用cacheAs，经常变化的层不使用
缓存组件，是否缓存为静态图像，合理作用能提高性能 。它有”none”，”normal”和”bitmap”三个值可选。

https://ldc.layabox.com/doc/?nav=zh-ts-2-1-11
在层级管理器中，组件图标前会有不同颜色的圆点。同样的颜色代表相同图集的节点，如果颜色值不同，如图3所示，则需要进行优化。