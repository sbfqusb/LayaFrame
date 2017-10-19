
import test = ui.test.TestPageUI;
import Label = laya.ui.Label;
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;

import Log = Laya.Log;
import Browser = Laya.Browser;
import Sprite = Laya.Sprite;
import Panel = Laya.Panel;
import Stage = Laya.Stage;
import Events = Laya.Event;
import Skeleton = Laya.Skeleton;
import Templet = Laya.Templet;
import WebGL = Laya.WebGL;
import Animation = Laya.Animation;
import MovieClip = Laya.MovieClip;

//import * as onfire from "libs/onfire.js";
// 程序入口
class EnterGame {
	//private configUrl: string = "manifest.json?" + Math.random();
	private modes: Array<string> = ["noscale", "exactfit", "showall", "noborder", "full", "fixedwidth", "fixedheight"];
	constructor() {
		Laya.init(640, 1136, Laya.WebGL);
		//Laya.ResourceVersion.enable(this.configUrl, Laya.Handler.create(this, this.completeHandler));
		//Laya.stage.frameRate = Laya.Stage.FRAME_MOUSE;
		Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;
		Laya.Stat.show();
		if (Browser.onPC) {
			Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
			//设置Laya提供的worker.js路径
			Laya.WorkerLoader.workerPath = "libs/worker.js";
			//开启worker线程
			Laya.WorkerLoader.enable = true;
		}
		else {
			Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
			
		}
		Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
		//
		//Laya.stage.bgColor = "#000000";
		Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
		Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;

		Laya.stage.bgColor = "#ffcccc";
		//Laya.Log.enable();
		//Laya.Log.toggle();
		NetWork.Instance.init();
		GameUiMgr.Instance.init();


		// var resArray:Array<any>=[
		//     {url:"res/atlas/ui.json",type:Laya.Loader.ATLAS},
		//     {url:"ui/back.png",type:Laya.Loader.IMAGE},
		//     {url:"ui/help.png",type:Laya.Loader.IMAGE}
		// ];
		// Laya.loader.load(resArray,Laya.Handler.create(this,this.onLoaded));

		NetWork.Instance.connect();

		LoadingRes.loadRes(1, function (params) {

		}, function (params) {
			onfire.fire(EventType.UI_SHOW, UiType.UI_LOGIN);
		})

		LOG(GlobalFun.getKey("usename"));
		GlobalFun.saveKey("usename", "lj11213");

		// for (let index = 0; index < 50; index++) {
		// 	let spine = GlobalFun.loadSpine("res/textureherosd1/textureherosd1.json",Handler.create(this, ()=>{
		// 		//spine.showSkinByName("skin_1");
		// 	}));
		// 	//
		// 	Laya.stage.addChild(spine);
		// 	spine.pos((Math.random()+0.1)*400, (Math.random()+0.1)*400+50);
		// }
		
		//spine.pos(320,480);
		LOG(GlobalFun.getKey("usename"));
		//this.createTestSpine();
	}
	private completeHandler(e: any): void {

	}

	public createTestSpine(): void {
		let mAniPath = "res/spine/22111.sk";
		let mFactory = new Templet();
		mFactory.on(Events.COMPLETE, this, () => {
			for (let index = 0; index < 20; index++) {

				let mArmature = mFactory.buildArmature(1);
				Laya.stage.addChild(mArmature);
				mArmature.pos((Math.random()+0.1)*400, (Math.random()+0.1)*400);
				//mArmature.on(Events.STOPPED, this, this.completeHandler);
				mArmature.play(0, true);
				mArmature.showSkinByName("skin_1");
			}
		});
		mFactory.on(Events.ERROR, this, () => { });
		mFactory.loadAni(mAniPath);
	}
}
new EnterGame();