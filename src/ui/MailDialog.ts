/*
* name;
*/
class MailDialog extends GameUI {
    private mMailDialog: ui.dialog.mailDialogUI;
    private mMapCell: Laya.View;
    constructor() {
        super();
    }
    init(...extraData: any[]) {

    }

    onAdd(uimgr:GameUiMgr) {
        this.mMailDialog = new ui.dialog.mailDialogUI;//这个地方是否用内存池，自行判断
        super.onAdd(uimgr, this.mMailDialog)
        this.mMailDialog.popup();
        this.mMailDialog.closeHandler = Handler.create(this, () => {
            this.closeUI();
        });
        this.mMailDialog.btnClose.once(laya.events.Event.CLICK, this, () => {
            this.mMailDialog.close();
            //
        })
        this.initList();

    }

    initList() {
        this.mMailDialog.maillist.renderHandler = new Handler(this, this.updateItem);
        this.mMailDialog.maillist.itemRender = ui.mailDetailModleUI;
        this.mMailDialog.maillist.repeatX = 1;
        this.mMailDialog.maillist.repeatY = 10;
        this.mMailDialog.maillist.vScrollBarSkin = "";
        this.mMailDialog.maillist.array = ["123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123"]
    }
    updateItem(cell: ui.mailDetailModleUI, index: number) {
        LOG(cell.dataSource)
    }

    onRemove() {
        super.onRemove();
        this.mMailDialog.destroy();
    }
    onShow() {
    }
}