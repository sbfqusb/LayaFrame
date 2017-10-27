/*
* name;
*/
class MapManager {
    private mMapCell: View;
    private mMapView: Panel;
    private mMinMap: Sprite;
    private mCurID: number;
    private mCurMapResId: string;
    private mMaxRow = 8;
    private mMaxCell = 8;
    constructor(mapCell: View) {
        this.mCurID = 2;
        this.mCurMapResId = "map/2/"
        this.mMapCell = mapCell;
        this.mMapView = new Panel();
        this.mMinMap = new Sprite();
        this.mMapCell.addChild(this.mMinMap);
        this.mMapCell.addChild(this.mMapView);
        Laya.timer.callLater(this,this.initData)
        this.initData();
    }

    private initData() {
        this.mMinMap.width = 2048;
        this.mMinMap.height = 2048;
        let assets: Array<Object> = [];
        assets.push({ url: this.mCurMapResId + "mini.jpg", type: Loader.IMAGE });
        Laya.loader.load(assets, Handler.create(this, this.loadMiniMapOver));

    }

    private loadMiniMapOver() {
        this.mMinMap.graphics.drawTexture(Laya.loader.getRes(this.mCurMapResId + "mini.jpg"), 0, 0, 2048, 2048);
        this.LoadMap(1, 1);
    }
    private LoadMap(row: number, cell: number) {
        let assets: Array<Object> = [];
        assets.push({ url: this.mCurMapResId + "map_r" + row + "_c" + cell + ".jpg", type: Loader.IMAGE });
        Laya.loader.load(assets, Handler.create(this, this.loadMapOver, [row, cell]));
    }
    private loadMapOver(row: number, cell: number) {
        //LOG("load map x:" + row + "  y:"+cell);
        this.drawMap(row, cell);
        if (row < this.mMaxRow) {
            this.LoadMap(++row, cell);
        } else if (cell < this.mMaxCell) {
            row = 1;
            this.LoadMap(row, ++cell);
        } else {
            this.mMinMap.destroy();
        }

    }
    private drawMap(row: number, cell: number) {
        let px: number = (cell - 1) * 256;
        let py: number = (row - 1) * 256;
        this.mMapView.graphics.drawTexture(Laya.loader.getRes(this.mCurMapResId + "map_r" + row + "_c" + cell + ".jpg"), px, py, 256, 256);
    }
}