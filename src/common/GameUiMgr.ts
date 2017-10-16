/*
* name;
*/
enum eUIType {
    UI_ViEW = 1,
    UI_DIALOG,
    UI_TIPS
}

class GameUiMgr {
    public static readonly Instance: GameUiMgr = new GameUiMgr();//单例模式
    private GameUiMgr() { }
    private mUiDatas: Array<GameUI> = [];
    private mIsCanOpenNewUI = true;
    private mBottomLayer: Sprite;
    private mSecondLayer: Sprite;
    private mTopLayer: Sprite;
    private mCurUicfg:any;
    private mExtra:any;

    public init() {
        onfire.on(EventType.UI_SHOW, handler(this, this.showUI));
        onfire.on(EventType.UI_CLOSE, handler(this, this.closeUI));
        onfire.on(EventType.UI_HIDE, handler(this, this.hideUI));
        this.mBottomLayer = new Sprite();
        this.mSecondLayer = new Sprite();
        this.mTopLayer = new Sprite();
        Laya.stage.addChild(this.mBottomLayer);
        Laya.stage.addChild(this.mSecondLayer);
        Laya.stage.addChild(this.mTopLayer);
        Laya.timer.frameLoop(1, this, this.tick); //每帧调用一次
    }
    public showUI(defineid: number,...extraData:any[]): void {
        if (this.mIsCanOpenNewUI === false) {
            LOG("GameUI is opening:" + this.mCurUicfg.ClassName);
            return;
        }
        this.mIsCanOpenNewUI = false;
        let findIndex = this.findUiObjByType(defineid);
        let uiData = GameDataLoader.getDataById(GlobalVar.gUiCfg, defineid);
        if (this.mUiDatas[findIndex] && uiData.UIType !== eUIType.UI_TIPS) {
            if (findIndex !== this.mUiDatas.length - 1) {
                //index 以后的界面关掉
                for (let index = 0; index < this.mUiDatas.length; index++) {
                    if (index > findIndex) {
                        let element = this.mUiDatas[index];
                        element.onRemove();
                    }
                }
                this.mUiDatas.splice(findIndex + 1, 1);
            }
        }

        this.mExtra = extraData;
        this.mCurUicfg = uiData;
        let atlasTexture = this.mCurUicfg.Texture;
        Laya.loader.load([{ url: atlasTexture, type: Loader.ATLAS }], Handler.create(this, this.onLoaded));
    };
    onLoaded = function () {
        let UIType = this.mCurUicfg.UIType;
        let container;
        switch (UIType) {
            case eUIType.UI_ViEW:
                container = this.mBottomLayer;
                break;
            case eUIType.UI_DIALOG:
                container = this.mSecondLayer;
                break;
            case eUIType.UI_TIPS:
                container = this.mTopLayer;
                break;
            default:
                break;
        }
        if (container) {
            let obj:GameUI;
            let className = window[this.mCurUicfg.ClassName];
            if (!className) {
                LOG("ui.json can't find ui data :" + this.mCurUicfg.ClassName + ".ts");
                return;
            }
            //obj = new className();
            obj = Laya.Pool.getItemByClass("UIOBJ", className);
            obj.mCfg = this.mCurUicfg;
            this.processMutex();
            this.processHideOther();
            this.mUiDatas.push(obj);
            obj.init(this.mExtra);
            obj.onAdd(this);
            container.addChild(obj.mRootNode);
            obj.onShow();
        }
        this.mIsCanOpenNewUI = true;
    };
    private processMutex(): void {
        if (this.mCurUicfg.UIType !== eUIType.UI_ViEW) {
            return;
        }
        let findindex;
        for (let index = this.mUiDatas.length - 1; index > -1; index--) {
            let element = this.mUiDatas[index];
            if (this.mCurUicfg.Group !== 0 && this.mCurUicfg.Group === element.mCfg.Group) {
                element.onRemove();
                findindex = index;
                break;
            }
        }
        if (findindex) {
            this.mUiDatas.splice(findindex, 1);
        }
    };
    private processHideOther(): void {
        if (this.mCurUicfg.UIType !== eUIType.UI_ViEW) {
            return;
        }
        for (let index = this.mUiDatas.length - 1; index > -1; index--) {
            let element = this.mUiDatas[index];
            element.mRootNode.visible = false;
            element.onHide();
        }
    };
    private tick(): void {
        let len = arguments.length;
    };
    private hideUI(defineid: number): void {
        let findIndex = this.findUiObjByType(defineid);
        this.mUiDatas[findIndex].mRootNode.visible = false;
        this.mUiDatas[findIndex].onHide();
    };
    private removeUIByIndex(index: number): void {
        this.mUiDatas[index].onRemove();
        this.mUiDatas.splice(index, 1);
    };
    public closeUI(defineid: number): void {
        if (this.mUiDatas.length < 2) {
            LOG("only one view,do't closeUI");
            //return;
        }
        let findIndex = this.findUiObjByType(defineid);
        this.removeUIByIndex(findIndex);
        if (this.mCurUicfg.UIType !== eUIType.UI_ViEW) {
            return;
        }
        //查找上一个视图，并显示
        for (let index = this.mUiDatas.length - 1; index > -1; index--) {
            let element = this.mUiDatas[index];
            if (element.mCfg.UIType === eUIType.UI_ViEW) {
                this.showUI(index);
                break;
            }
        }
    };
    private findUiObjByType(defineid: number): number {
        let findIndex;
        for (let index = this.mUiDatas.length - 1; index > -1; index--) {
            let element = this.mUiDatas[index];
            if (element.mCfg.defineid === defineid) {
                findIndex = index;
                break;
            }
        }
        return findIndex;
    };
}