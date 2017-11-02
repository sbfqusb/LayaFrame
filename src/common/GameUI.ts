/*
* name;游戏中所有界面都要继承该类
*/
class GameUI {
    private mUIMgr: GameUiMgr;
    private mEventArray: Array<any> = [];
    static MaxEventLen: number = 20;
    public mRootNode: Sprite;
    public mCfg: DataSet.UI;//当前UI配置
    constructor() {
    }
    init(...extraData: any[]) {

    }
    onAdd(uimgr: GameUiMgr, RootView?: Laya.View|Laya.Dialog) {
        this.mUIMgr = uimgr;
        if (RootView) {
            this.mRootNode = new Sprite();
            RootView.width = Laya.stage.width;
            RootView.height = Laya.stage.height;
            this.mRootNode.addChild(RootView);
            RootView.layoutEnabled = true;
        }

    }
    onRemove() {
        this.unRegistEvent();
        this.mRootNode.removeSelf();
        this.mRootNode.removeChildren();
        this.mRootNode.destroy(true);
        if (this.mCfg.Texture !== null) {
            for (let index = 0; index < this.mCfg.Texture.length; index++) {
                let element = this.mCfg.Texture[index];
                Loader.clearRes(element["url"]);
            }

        }
        Laya.timer.clearAll(this);
        //回收到对象池
        //obj = Laya.Pool.getItemByClass("UIOBJ", className);
        //Laya.Pool.recover("UIOBJ",this);
    }
    onShow() { }
    onHide() { }
    onTick() { }
    registEvent(event, obj, func) {
        if (this.mEventArray.length > GameUI.MaxEventLen) {
            LOG("GameUI mEventArray is too big");
            return;
        }
        let eventId = onfire.on(event, handler(obj, func));
        this.mEventArray.push(eventId);
        return eventId;
    }
    unRegistEvent() {
        for (var index = 0; index < this.mEventArray.length; index++) {
            let element = this.mEventArray[index];
            onfire.un(element);
        }
    }
    showUI(type: number, ...data: any[]) {
        onfire.fire(EventType.UI_SHOW, type, ...data);
    }
    closeUI() {
        onfire.fire(EventType.UI_CLOSE, this.mCfg.defineid);
    }


}