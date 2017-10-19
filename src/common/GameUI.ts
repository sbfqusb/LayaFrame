/*
* name;游戏中所有界面都要继承该类
*/
class GameUI {
    private mUIMgr;
    private mEventArray: Array<any> = [];
    static MaxEventLen: number = 20;
    public mRootNode: Sprite;
    public mViewRoot: View|Dialog;
    public mCfg;//当前UI配置
    constructor() {
    }
    init(...extraData:any[]) {

    }
    onAdd(uimgr,RootView?) {
        this.mUIMgr = uimgr;
        this.mRootNode = new Sprite();
        this.mRootNode.addChild(RootView);
        this.mViewRoot = RootView;
    }
    onRemove() {
        this.unRegistEvent();
        this.mRootNode.removeSelf();
        this.mRootNode.removeChildren();
        this.mRootNode.destroy(true);
        if (this.mCfg.Texture !== "") {
            Loader.clearRes(this.mCfg.Texture);   
        }
        this.mViewRoot.destroy();
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
    showUI(type:number, ...data:any[]) {
        onfire.fire(EventType.UI_SHOW,type, ...data);
    }
    closeUI() {
        onfire.fire(EventType.UI_CLOSE, this.mCfg.defineid);
    }


}