/*
* name;
*/
class LoginUI extends GameUI {
    mView;
    constructor() {
        super();
    }
    init(...extraData:any[]) {

    }

    onAdd(uimgr, view?){
        this.mView = new ui.test.TestPageUI();//这个地方是否用内存池，自行判断
        this.mView.btn_close.on(laya.events.Event.CLICK, this, ()=> {
            this.closeUI();
            //onfire.fire(EventType.UI_SHOW, UiType.UI_LOGIN);
        });
        super.onAdd(uimgr,this.mView)
    }

    onRemove() {
        super.onRemove();
        this.mView = null;
    }
    onShow () {
    }
}