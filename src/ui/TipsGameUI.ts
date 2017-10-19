/*
* name;
*/
class TipsGameUI extends GameUI {
    private mView: ui.test.tipsUI;
    private mData:any;
    constructor() {
        super();
    }
    init(...extraData: any[]) {
        this.mData=extraData;
    }

    onAdd(uimgr, view?) {
        LOG("create:" + this.toString())
        this.mView = new ui.test.tipsUI();//这个地方是否用内存池，自行判断
        //this.mView.mTips.innerHTML = "<p style='align-content: center'><span style = 'color:#ff0000;font:32px simHei;text-align: center;font-weight:bold'>" +  this.mData[0] + "</span></p>";
        //this.mView.mTips.autoSize = true;
        this.mView.mText.text = this.mData[0];
        this.mView.ani1.play(0,false);
        super.onAdd(uimgr, this.mView)
        Laya.timer.once(2000, this, ()=>{
             this.closeUI();
        });
    }

    onRemove() {
        LOG("delete:" + this.toString())
        super.onRemove();
    }
    onShow() {
    }
}