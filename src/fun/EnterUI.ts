/*
* name;
*/
class EnterUI extends GameUI {
    private mView: ui.enterui.EnterUIUI;
    constructor() {
        super();
    }
    init(...extraData: any[]) {

    }

    onAdd(uimgr:GameUiMgr) {
        this.mView = new ui.enterui.EnterUIUI();//这个地方是否用内存池，自行判断
        this.mView.mEnter.on(laya.events.Event.CLICK, this, () => {
            //this.showUI(UiType.UI_GameMain);
            this.showUI(UiType.UI_LoaderView);
            this.closeUI();

        });
        super.onAdd(uimgr, this.mView)
    }

    onRemove() {
        super.onRemove();
        this.mView.destroy();
    }
    onShow() {
    }
}