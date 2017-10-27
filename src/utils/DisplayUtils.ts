/*
* name;
*/
class DisplayUtils {

    /**创建一个Sprite
    * @param xPos x坐标     {number}
    * @param yPos y坐标     {number}
    * @param parent 父容器  {Sprite}
    * @return {Laya.Sprite}
    * */
    static createSprite(xPos: number, yPos: number, parent: Laya.Sprite | null): Laya.Sprite {
        (parent === void 0) && (parent = null);
        let sprite: Laya.Sprite = new Laya.Sprite();
        sprite.pos(xPos, yPos);
        if (parent) {
            parent.addChild(sprite);
        }
        return sprite;
    }

    /**创建一个文本
     * @param xPos x坐标     {number}
     * @param yPos y坐标     {number}
     * @param size 字号      {number}
     * @param width 文本宽度 {number}
     * @param parent 父容器  {Sprite}
     * @param color 颜色     {string}
     * @param align 字体对齐方式 {string}
     * @return {Laya.Text}
     * */
    static createText(xPos: number, yPos: number, size: number, width: number, parent: Laya.Sprite | null, color: string, align: string): Laya.Text {
        (width === void 0) && (width = 0);
        (parent === void 0) && (parent = null);
        (color === void 0) && (color = "#ffffff");
        (align === void 0) && (align = Laya.Stage.ALIGN_CENTER);
        let text: Laya.Text = new Laya.Text();
        text.font = "Microsoft YaHei";
        text.fontSize = size;
        text.pos(xPos, yPos);
        text.wordWrap = true;
        if (width != 0) {
            text.width = width;
        }
        text.align = align;
        text.color = color;
        if (parent) {
            parent.addChild(text);
        }
        return text;
    }

    /**创建一个位图
     * @param xPos x坐标    {number}
     * @param yPos y坐标    {number}
     * @param textureUrl 纹理地址  {string}
     * @param parent 父容器 {Sprite}
     * @return {Laya.Sprite}
     * */
    static createBitmap(xPos: number, yPos: number, textureUrl: string, parent: Laya.Sprite | null): Laya.Sprite {
        (parent === void 0) && (parent = null);
        let image: Laya.Sprite = new Laya.Sprite();
        if (textureUrl) {
            this.imageToTexture(textureUrl, image);
        }
        image.pos(xPos, yPos);
        if (image.texture) {
            image.size(image.texture.sourceWidth, image.texture.sourceHeight);
        }
        if (parent) {
            parent.addChild(image);
        }
        return image;
    }

    /**创建一个ui image
     * @param xPos x坐标          {number}
     * @param yPos y坐标          {number}
     * @param textureUrl 纹理地址 {string}
     * @param parent 父容器       {Sprite}
     * @return {Laya.Image}
     * */
    static createImage(xPos: number, yPos: number, textureUrl: string, parent: Laya.Sprite | null): Laya.Image {
        (parent === void 0) && (parent = null);
        let image: Laya.Image = new Laya.Image();
        if (textureUrl) {
            this.imageToTexture(textureUrl, image);
        }
        image.pos(xPos, yPos);
        if (image.source) {
            image.size(image.source.sourceWidth, image.source.sourceHeight);
        }
        if (parent) {
            parent.addChild(image);
        }
        return image;
    }

    /**创建一个位图文本
     * @param xPos x坐标           {number}
     * @param yPos y坐标           {number}
     * @param fontUrl配置文件      {string}
     * @param fontPngUrl纹理地址   {string}
     * @param fontName   {string}
     * @param parent 父容器        {Sprite}
     * @param width 文本宽度       {number}
     * @param textAlign 对齐方式   {string}
     * @return {Laya.Text}
     * */
    static createBitmapText(xPos: number, yPos: number, fontUrl: string, fontPngUrl: string, fontName: string, parent: Laya.Sprite | null, width: number, align: string): Laya.Text {
        (parent === void 0) && (parent = null);
        (width === void 0) && (width = 0);
        (align === void 0) && (align = Laya.Stage.ALIGN_CENTER);
        //注册font字体到Text中
        FontManager.register(fontUrl, fontPngUrl, fontName);

        let tx = new Laya.Text();
        tx.pos(xPos, yPos);
        if (parent) {
            parent.addChild(tx);
        }
        tx.wordWrap = true;
        tx.font = fontName;
        if (width != 0) {
            tx.width = width;
        }
        if (align) {
            tx.align = align;
        }
        return tx;
    }

    /**创建一个按钮
     * @param xPos x坐标     {number}
     * @param yPos y坐标     {number}
     * @param textureUrl 纹理地址  {string}
     * @param text 文本内容 {string}
     * @param labelSize 文本size  {number}
     * @param width 宽     {number}
     * @param height 高    {number}
     * @param parent 父容器   {Sprite}
     * @return {Laya.Button}
     * */
    static createButton(xPos: number, yPos: number, textureUrl: string, text: string, labelSize: number | null, width: number | null, height: number | null, parent: Laya.Sprite | null): Laya.Button {
        (parent === void 0) && (parent = null);
        (height === void 0) && (height = null);
        (width === void 0) && (width = null);
        (labelSize === void 0) && (labelSize = null);
        (text === void 0) && (text = "");
        let btn = new Laya.Button(textureUrl, text);
        (height != null) && (btn.height = height);
        (width != null) && (btn.width = width);
        (labelSize != null) && (btn.labelSize = labelSize);
        btn.label = text;
        btn.pos(xPos, yPos);
        if (parent) {
            parent.addChild(btn);
        }
        return btn;
    }

    /**
     * 创建骨骼动画
     * @param xPos x坐标     {number}
     * @param yPos y坐标     {number}
     * @param png图片集地址
     * @param sk文件地址
     * @param 骨骼类型是否换装：1：换装、0：不换装
     * @param parent 父容器   {Sprite}
     */
    static createSkeleton(xPos: number, yPos: number, pngUrl: string, skUrl: string, type: number, parent: Laya.Sprite | null) {
        let templet = new Laya.Templet();
        let skeleton = new Laya.Skeleton();

        let pngData = Laya.loader.getRes(pngUrl);
        let skData = Laya.loader.getRes(skUrl);
        if (pngData && skData) {
            templet.parseData(pngData, skData);
            skeleton = templet.buildArmature(type);
            skeleton.pos(xPos, yPos);
            if (parent) {
                parent.addChild(skeleton);
            }
            return skeleton;
        }
        else {
            console.warn("动画资源未提前加载！");
        }
        return null;
    }

    /**
     * 创建骨骼动画
     * @param png图片集地址
     * @param sk文件地址
     * @param 骨骼类型是否换装：1：换装、0：不换装
     * @param 回调函数
     * @param 回调函数this对象
     */
    static createAsynSkeleton(pngUrl: string, skUrl: string, type: number, callback: Function, thisObj: any) {
        (thisObj === void 0) && (thisObj = null);
        let templet = new Laya.Templet();
        let skeleton = new Laya.Skeleton();

        let pngData = Laya.loader.getRes(pngUrl);
        let skData = Laya.loader.getRes(skUrl);
        if (pngData && skData) {
            compleSk();
        } else {
            let res = [
                { "type": Laya.Loader.BUFFER, "url": skUrl },
                { "type": Laya.Loader.IMAGE, "url": pngUrl }
            ];
            ResourceUtils.loadResource(res, compleSk, undefined, null);
        }

        function compleSk() {
            pngData = Laya.loader.getRes(pngUrl);
            skData = Laya.loader.getRes(skUrl);
            templet.parseData(pngData, skData);
            skeleton = templet.buildArmature(type);
            (callback) && (callback.apply(thisObj, [skeleton]));
        }
    }
    /**
     * 创建序列帧动画 加载并解析由LayaAir IDE制作的动画文件
     * @param 图集动画 *.ani
     * @param 回调函数
     * @param 回调函数this对象
     */
    static createAnimation1(filename: string, name?: string, start?: any, loop?: boolean, caller?: any, callback?: Function): Animation {
        var ani: Animation = new Animation();
        ani.loadAnimation(filename); // 加载图集动画 *.ani
        ani.play(start, loop, name);// 播放图集动画
        if (callback) {
            ani.on(Laya.Event.COMPLETE, caller, callback);
        }
        return ani;
    }

    /**
 * 创建序列帧动画 加载并解析.json
 * @param 图集动画 *.json
 * @param 回调函数
 * @param 回调函数this对象
 */
    static createAnimation2(filename: string, name: string, start?: any, loop?: boolean, caller?: any, callback?: Function): Animation {
        let ani: Animation = new Animation();
        ani.loadAtlas(filename); // 加载图集动画 .json
        //Laya.Animation.createFrames(this.aniUrls(filename,name,6),name);
        ani.play(start, loop, name);// 播放图集动画
        if (callback) {
            ani.on(Laya.Event.COMPLETE, caller, callback);
        }
        return ani;
    }

    private static aniUrls(filename,aniName:string,length:number):any{
        var urls:any = [];
        for(var i:number = 0;i<length;i++){
            //动画资源路径要和动画图集打包前的资源命名对应起来
            urls.push(ResourceUtils.getFileNameNoExt(filename)+"/"+aniName+i+".png");
        }
        return urls;
    }

    /**
     * 地址加载纹理图片
     * @param 纹理地址     {string}
     * @param 回调函数     {function}
     * @param 回调函数对象 {any}
     */
    static imageUrlLoad(url: string, callback: Function, thisObj: any) {
        let res = [{ "url": url, "type": Laya.Loader.IMAGE }];
        ResourceUtils.loadResource(res, callback, undefined, thisObj);
    }

    /**
     * 给image赋值纹理
     * @param 纹理地址
     * @param 赋值纹理对象
     * @param image对象（显示纹理容器）
     */
    static imageToTexture(textureUrl: string, image: Laya.Sprite | Laya.Image) {
        if (image instanceof Laya.Image) {
            image.source = Laya.loader.getRes(textureUrl);
            if (!image.source) {
                this.imageUrlLoad(textureUrl, function () {
                    image.source = Laya.loader.getRes(textureUrl);
                    if (!image.destroyed && image.source) {
                        image.size(image.source.sourceWidth, image.source.sourceHeight);
                    }
                }, null);
            }
        }
        else if (image instanceof Laya.Sprite) {
            image.texture = Laya.loader.getRes(textureUrl);
            if (!image.texture) {
                this.imageUrlLoad(textureUrl, function () {
                    image.texture = Laya.loader.getRes(textureUrl);
                    if (!image.destroyed && image.texture) {
                        image.size(image.texture.sourceWidth, image.texture.sourceHeight);
                    }
                }, null);
            }
        }
    }
}