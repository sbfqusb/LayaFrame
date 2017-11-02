/*
* name;
*/
class LoaderViewUI extends GameUI {
    private mView: ui.LoaderViewUI;
    private mMapCell: Laya.View;
    constructor() {
        super();
    }
    init(...extraData: any[]) {

    }

    onAdd(uimgr: GameUiMgr) {
        this.mView = new ui.LoaderViewUI();//这个地方是否用内存池，自行判断
        super.onAdd(uimgr, this.mView)


        let res = [
            { "type": Laya.Loader.ATLAS, "url": "res/atlas/comp.json" },
            { "type": Laya.Loader.ATLAS, "url": "res/atlas/mojing.json" },
            { "type": Laya.Loader.ATLAS, "url": "res/atlas/mercenaries.json" },
            { "type": Laya.Loader.ATLAS, "url": "res/atlas/async.json" },
        ];
        Laya.timer.frameOnce(2,this,()=>{
            ResourceUtils.loadResource(res,this.onLoadComplete,this.onLoadProcess,this);
        })

        this.mView.freshTxt.once(Laya.Event.CLICK,this,()=>{//重读界面
            CommonUtils.freshPage();
        })

        
    }
    onLoadComplete(){
        this.showUI(UiType.UI_GameMain);
        //this.closeUI();
    }
    onLoadProcess(process:number){
        LOG("onLoadProcess:" + process.toFixed(2));
        let nowX = -577 + process * 570;
        this.mView.loadingbar.loadingBar.x = nowX
    }

    onRemove() {
        super.onRemove();
        this.mView.destroy();
    }
    onShow() {
    }
}