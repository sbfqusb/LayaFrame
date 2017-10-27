/*
* name;
*/
class TipsGameUI extends GameUI {
    private mView: ui.test.tipsUI;
    private mData:any;
    static index:number = 0;
    constructor() {
        super();
    }
    init(...extraData: any[]) {
        this.mData=extraData;
    }

    onAdd(uimgr:GameUiMgr, view?) {
        TipsGameUI.index++
        LOG("create:" + TipsGameUI.index)
        //this.mView = new ui.test.tipsUI();//这个地方是否用内存池，自行判断
        this.mView = Laya.Pool.getItemByClass("TipsGameUI", ui.test.tipsUI);
        //this.mView.mTips.innerHTML = "<p style='align-content: center'><span style = 'color:#ff0000;font:32px simHei;text-align: center;font-weight:bold'>" +  this.mData[0] + "</span></p>";
        //this.mView.mTips.autoSize = true;
        this.mView.mText.text = this.mData[0];
        this.mView.ani1.play(0,false);
        super.onAdd(uimgr, this.mView)
        Laya.timer.once(1500, this, ()=>{
             this.closeUI();
        });
    }

    onRemove() {
        TipsGameUI.index--
        LOG("create:" + TipsGameUI.index)
        var pool = Laya.Pool.getPoolBySign("TipsGameUI");
        LOG("pool length:" + pool.length)
        if (pool.length>10) {
            Laya.Pool.clearBySign("TipsGameUI")
        }else{
            Laya.Pool.recover("TipsGameUI",this.mView)
        }
        
        super.onRemove();
    }
    onShow() {
    }
}