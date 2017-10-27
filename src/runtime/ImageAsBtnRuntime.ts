/*
* name;
*/


class ImageAsBtnRuntime extends Laya.Image {
	private initScaleX: number = 0;
	private initScaleY: number = 0;
	private isMouseUp: boolean = true;

	private _enable: boolean = false;
	private _redImg: Laya.Image = new Laya.Image();
	constructor(skin: string) {

		super(skin);
		this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDwon);
		this.on(laya.events.Event.MOUSE_UP, this, this.onMouseUp);
		this._redImg.skin = "comp/redpoint.png";
		this.autoSize = true;
		this._redImg.visible = false;
		this._redImg.zOrder = 999;
		this.addChild(this._redImg);
	}
	/**
	 * 是否为不可点击状态
	 * */
	public setEnable(b: boolean): void {
		this._enable = b;
		if (this._enable) {
			this.on(laya.events.Event.MOUSE_DOWN, this, this.onMouseDwon);
			this.on(laya.events.Event.MOUSE_UP, this, this.onMouseUp);
			this.gray = true;
			this.mouseEnabled = true;
		}
		else {
			this.off(laya.events.Event.MOUSE_DOWN, this, this.onMouseDwon);
			this.off(laya.events.Event.MOUSE_UP, this, this.onMouseUp);
			this.gray = true;
			this.mouseEnabled = false;
		}
	}

	private onMouseDwon(): void {
		if (this.initScaleX == 0) {
			this.initScaleX = this.scaleX;
			this.initScaleY = this.scaleY;
		}
		this.scale(this.initScaleX, this.initScaleY);
		Laya.Tween.to(this, { scaleX: 0.95 * this.initScaleX, scaleY: 0.95 * this.initScaleY }, 200, Laya.Ease.linearIn, Handler.create(this, this.onMouseUp));
	}

	private onMouseUp(): void {
		if (this.initScaleX != 0) {
			this.scale(this.initScaleX, this.initScaleY);
			this.isMouseUp = true;
		}
	}
	public settext(s: string): void {
		if (this.getChildAt(0) instanceof Label) {
			(this.getChildAt(0) as Label).text = s;
		}
	}
	/**显示红点*/
	public showRed(): void {
		this._redImg.visible = true;
		this._redImg.x = this.width - 20;
		this._redImg.y = -5;
	}
	/**关闭红点*/
	public closeRed(): void {
		this._redImg.visible = false;
	}
}