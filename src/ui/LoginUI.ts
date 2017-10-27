/*
* name;
*/
class LoginUI extends GameUI {
    private mView:ui.test.TestPageUI;
    constructor() {
        super();
    }
    init(...extraData:any[]) {

    }

    onAdd(uimgr:GameUiMgr){
        this.mView = new ui.test.TestPageUI();//这个地方是否用内存池，自行判断
        this.mView.btn_close.on(laya.events.Event.CLICK, this, ()=> {
            this.closeUI();
            
        });
         this.mView.btn.on(laya.events.Event.CLICK, this, ()=> {
            this.showUI(UiType.UI_TIPS,"这是测试！");
        });
        super.onAdd(uimgr,this.mView)
    }

    onRemove() {
        super.onRemove();
        this.mView.destroy();
    }
    onShow () {
    }
}