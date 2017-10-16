/*
* name;
*/
class LoadingRes{
    constructor(){

    }
    private static loginRes:Array<String>=[
        "res/data/ui.json"
    ]
    private static urls:Array<String>=[
        "res/data/ui.json"
    ]
    public static loadRes(type:number, onLoading:Function, onAssetLoaded:Function):void{
        switch (type) {
            case 1:
                Laya.loader.load(LoadingRes.loginRes, Handler.create(this, onAssetLoaded), Handler.create(this, onLoading, null, false));
                break;
            case 2:
                Laya.loader.load(LoadingRes.urls, Handler.create(this, onAssetLoaded), Handler.create(this, onLoading, null, false));
            default:
                break;
        }
    }
}