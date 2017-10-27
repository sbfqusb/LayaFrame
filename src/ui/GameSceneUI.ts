/*
* name;
*/
class GameSceneUI extends GameUI{
    private mView: ui.GameSceneUI;
    private mMapCell:Laya.View;
    constructor() {
        super();
    }
    init(...extraData: any[]) {

    }

    onAdd(uimgr:GameUiMgr) {
        this.mView = new ui.GameSceneUI();//这个地方是否用内存池，自行判断
        this.mMapCell = this.mView.mapcell;
        super.onAdd(uimgr, this.mView)
        let map:MapManager = new MapManager( this.mMapCell);

        let mailBtn:ImageAsBtnRuntime = this.mView.mailBtn as ImageAsBtnRuntime;
        mailBtn.showRed();
        //this.mView.mailBtn.setEnable(false);
        this.mView.mailBtn.on(laya.events.Event.CLICK,this,()=>{
            this.showUI(UiType.UI_MailDialog)
        })


    }

    onRemove() {
        super.onRemove();
        this.mView.destroy();
    }
    onShow() {
    }
}