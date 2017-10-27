
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.dialog {
    export class mailDialogUI extends Dialog {
		public btnClose:ImageAsBtnRuntime;
		public yijinBtn:ImageAsBtnRuntime;
		public maillist:Laya.List;

        public static  uiView:any ={"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"y":536,"x":320,"width":562,"skin":"loading/img_dialog_bg.png","sizeGrid":"80,200,20,200","height":745,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":15,"x":535,"var":"btnClose","skin":"loading/img_btnClose.png","runtime":"ImageAsBtnRuntime","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":683,"x":16,"width":534,"skin":"async/img_dialog_diwen.png","height":55}},{"type":"Image","props":{"y":18,"skin":"loading/title_youjian.png","centerX":0}},{"type":"Image","props":{"y":75,"x":32,"width":500,"skin":"loading/img_wenzi_di.png","sizeGrid":"15,15,15,15","height":585}},{"type":"Image","props":{"y":696,"x":282,"width":160,"var":"yijinBtn","skin":"store/button_001.png","runtime":"ImageAsBtnRuntime","height":45,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":13,"x":39,"text":"一键领取","strokeColor":"#080808","stroke":2,"fontSize":20,"font":"SimHei","color":"#fff6cf","bold":true}}]}]},{"type":"List","props":{"y":248,"x":79,"width":490,"var":"maillist","height":565}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ImageAsBtnRuntime",ImageAsBtnRuntime);

            super.createChildren();
            this.createView(ui.dialog.mailDialogUI.uiView);
        }
    }
}

module ui.enterui {
    export class EnterUIUI extends View {
		public mEnter:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"skin":"enterui/beijing.jpg","centerX":0,"bottom":0}},{"type":"Image","props":{"var":"mEnter","skin":"enterui/H5_start_1.png","centerX":0,"bottom":150}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.enterui.EnterUIUI.uiView);
        }
    }
}

module ui {
    export class GameSceneUI extends View {
		public mapcell:View;
		public win:View;
		public bottomfuncell:View;
		public rolebtn:Laya.Image;
		public buttom_btn_select_2:Laya.Image;
		public bagBtn:Laya.Image;
		public wingBtn:Laya.Image;
		public strengthenBtn:Laya.Image;
		public progress_exp:Laya.Image;
		public shopBtn:Laya.Image;
		public explabel:Laya.Label;
		public otherfuncell:View;
		public headPanel:Laya.Sprite;
		public staticsprite:Laya.Sprite;
		public btnHeadIcon:Laya.Image;
		public lb_level:Laya.Label;
		public lb_roleName:Laya.Label;
		public lb_goldVal:Laya.Label;
		public addGold:Laya.Image;
		public lb_diamondVal:Laya.Label;
		public addGem:Laya.Image;
		public img_power:Laya.Image;
		public btn_vip:Laya.Image;
		public img_vipLevel:Laya.Image;
		public btn_Month:Laya.Image;
		public fontClip_power:Laya.FontClip;
		public goldget:Laya.Label;
		public expget:Laya.Label;
		public operaPanel:Laya.Sprite;
		public lefttoppanel:Laya.Sprite;
		public shenbingBtn:Laya.Image;
		public htmlbg:Laya.Image;
		public charTxt:laya.html.dom.HTMLDivElement;
		public mailBtn:ImageAsBtnRuntime;
		public talkingBtn:Laya.Image;
		public rightbottompanel:Laya.Sprite;
		public btn_huoban:Laya.Image;
		public btn_zhanmeng:Laya.Image;
		public btn_jingjichang:Laya.Image;
		public btn_xiulian:Laya.Image;
		public btn_chengjiu:Laya.Image;
		public btn_fuben:Laya.Image;
		public btn_wanfa:Laya.Image;
		public btn_huanhua:Laya.Image;
		public btn_auto:Laya.Image;
		public btn_guanqia:Laya.Image;
		public pro_guanqia:Laya.Image;
		public lab_guanqia:Laya.Label;
		public btn_ciseyaosai:Laya.Image;
		public btn_mojing:Laya.Image;
		public btn_saodang:Laya.Image;
		public taskPanel:Laya.Image;
		public sp_task:Laya.Sprite;
		public labtask:Laya.Label;
		public labtasktar:Laya.Label;
		public lab_taskpro:Laya.Label;
		public btn_richang:Laya.Image;
		public img_richang:Laya.Image;
		public ani_richang:Laya.Animation;
		public lab_richang:Laya.Label;
		public btn_jingying:Laya.Image;
		public mskill:Laya.Image;
		public mskillmask:Laya.Sprite;
		public mdi:Laya.Image;
		public mhead:Laya.Image;
		public systembg:Laya.Image;
		public lb_rollInfo:laya.html.dom.HTMLDivElement;
		public sp_boss:Laya.Sprite;
		public powerupsp:Laya.Sprite;
		public poweranidi:Laya.Animation;
		public powerup:Laya.Animation;
		public addPowerNum:Laya.FontClip;
		public sp_mzrq:Laya.Sprite;
		public sp_factiondup:Laya.Sprite;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1136},"child":[{"type":"View","props":{"width":640,"var":"mapcell","scaleY":1.4,"scaleX":1.4,"name":"地图层","height":1136}},{"type":"View","props":{"var":"win"}},{"type":"View","props":{"y":1136,"x":0,"width":640,"var":"bottomfuncell","name":"功能层","mouseThrough":true,"mouseEnabled":true,"height":48,"cacheAs":"bitmap","anchorY":1},"child":[{"type":"Image","props":{"y":-59,"x":0,"skin":"comp/bg_zjm_001.png"}},{"type":"Panel","props":{"y":-67,"x":1,"width":543,"name":"static","mouseThrough":true,"height":103,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":53,"x":187,"width":94,"var":"rolebtn","runtime":"","name":"juese","height":94,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":8,"skin":"comp/icon_juese.png"}},{"type":"Image","props":{"y":0,"x":-7,"visible":false,"var":"buttom_btn_select_2","skin":"comp/zhujiemian_0018_xuanzhong.png","name":"buttom_btn_select_2"}}]},{"type":"Image","props":{"y":53,"x":281,"width":94,"var":"bagBtn","runtime":"","height":94,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":8,"skin":"comp/icon_beibao.png"}},{"type":"Image","props":{"y":0,"x":-7,"visible":false,"skin":"comp/zhujiemian_0018_xuanzhong.png","name":"buttom_btn_select_3"}}]},{"type":"Image","props":{"y":53,"x":375,"width":94,"var":"wingBtn","runtime":"","height":94,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":8,"skin":"comp/icon_yuyi.png"}},{"type":"Image","props":{"y":0,"x":-7,"visible":false,"skin":"comp/zhujiemian_0018_xuanzhong.png","name":"buttom_btn_select_4"}}]},{"type":"Image","props":{"y":53,"x":469,"width":94,"var":"strengthenBtn","runtime":"","height":94,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":8,"skin":"comp/icon_duanzao.png"}},{"type":"Image","props":{"y":0,"x":-7,"visible":false,"skin":"comp/zhujiemian_0018_xuanzhong.png","name":"buttom_btn_select_5"}}]}]},{"type":"Image","props":{"y":33,"x":116,"width":420,"skin":"comp/exp_progress.png","sizeGrid":"2,2,0,2","height":15}},{"type":"Image","props":{"y":-116,"x":0,"skin":"comp/img_zjm_zhuangshi.png","mouseThrough":true,"layoutEnabled":true}},{"type":"Image","props":{"y":34,"x":118,"width":416,"skin":"comp/exp_progress_bar.png","height":14},"child":[{"type":"Image","props":{"width":200,"var":"progress_exp","skin":"comp/exp_progress.png","renderType":"mask","height":14}}]},{"type":"Image","props":{"y":-10,"x":577,"width":100,"var":"shopBtn","runtime":"","height":100,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-5,"x":-480}},{"type":"Image","props":{"y":-19,"x":-5,"skin":"comp/icon_shangcheng.png"}}]},{"type":"Label","props":{"y":32,"x":116,"width":420,"var":"explabel","text":"1000/20000","strokeColor":"#000000","stroke":2,"height":18,"fontSize":18,"font":"SimHei","color":"#fff6cf","bold":true,"align":"center"}}]},{"type":"View","props":{"y":0,"x":0,"var":"otherfuncell","mouseThrough":true},"child":[{"type":"Sprite","props":{"var":"headPanel"},"child":[{"type":"Sprite","props":{"var":"staticsprite","name":"static","cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/bg_zjm_002.png","sizeGrid":"0,0,0,500"}},{"type":"Image","props":{"y":82,"x":79,"width":112,"var":"btnHeadIcon","skin":"comp/touxiang3.png","height":112,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":25,"x":131,"width":33,"var":"lb_level","text":"1","strokeColor":"#000000","stroke":2,"height":20,"fontSize":20,"color":"#FFFADA","bold":true,"align":"center"}},{"type":"Label","props":{"y":14,"x":180,"width":125,"var":"lb_roleName","text":"希尔瓦娜斯斯","strokeColor":"#000000","stroke":2,"height":20,"fontSize":20,"color":"#FFFADA","cacheAs":"bitmap","bold":true,"align":"center"}},{"type":"Image","props":{"y":9,"x":307,"width":37,"skin":"comp/100000.png","height":37}},{"type":"Label","props":{"y":15,"x":430,"width":85,"var":"lb_goldVal","text":"000000万","strokeColor":"#000000","stroke":2,"height":20,"fontSize":20,"color":"#FFFADA","cacheAs":"bitmap","bold":true,"anchorX":1,"align":"right"}},{"type":"Image","props":{"y":13,"x":430,"var":"addGold","skin":"comp/common_btn_plus.png","scaleY":0.7,"scaleX":0.7}},{"type":"Image","props":{"y":9,"x":460,"width":37,"skin":"comp/100001.png","height":37}},{"type":"Label","props":{"y":16,"x":601,"width":104,"var":"lb_diamondVal","text":"000000万","strokeColor":"#000000","stroke":2,"height":20,"fontSize":20,"color":"#FFFADA","cacheAs":"bitmap","bold":true,"anchorX":1,"align":"right"}},{"type":"Image","props":{"y":13,"x":607,"var":"addGem","skin":"comp/common_btn_plus.png","scaleY":0.7,"scaleX":0.7}},{"type":"Image","props":{"y":51,"x":155,"width":81,"var":"img_power","height":43}},{"type":"Image","props":{"y":59,"x":461,"var":"btn_vip","skin":"comp/icon_guizu.png","runtime":""},"child":[{"type":"Image","props":{"y":33,"x":40,"var":"img_vipLevel","skin":"comp/n_00.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":48,"x":12,"skin":"comp/txt_vip.png"}}]},{"type":"Image","props":{"y":54,"x":547,"width":86,"var":"btn_Month","skin":"comp/icon_yueka.png","runtime":"","height":86},"child":[{"type":"Image","props":{"y":51,"x":12,"skin":"comp/txt_yueka.png"}}]},{"type":"Image","props":{"y":0,"x":0,"skin":"comp/bg_zjm_003.png"}},{"type":"Image","props":{"y":113,"x":281,"width":34,"skin":"comp/icon_exp.png","height":33}},{"type":"Image","props":{"y":108,"x":132,"width":41,"skin":"comp/100000.png","height":37}},{"type":"FontClip","props":{"y":67,"x":249,"var":"fontClip_power","value":"12345678","staticCache":true,"skin":"comp/fontclip_power.png","sheet":"+-0123456789","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":64,"x":164,"skin":"comp/zhandouli1.png"}}]},{"type":"Label","props":{"y":119,"x":169,"width":98,"var":"goldget","text":"1234万/时","strokeColor":"#000000","stroke":2,"height":19,"fontSize":19,"font":"SimHei","color":"#FFFADA","bold":true}},{"type":"Label","props":{"y":119,"x":317,"width":90,"var":"expget","text":"1234万/时","strokeColor":"#000000","stroke":2,"height":19,"fontSize":19,"font":"SimHei","color":"#FFFADA","bold":true}}]},{"type":"Sprite","props":{"y":154,"x":0,"width":639,"var":"operaPanel","height":96}},{"type":"Sprite","props":{"y":241,"x":0,"var":"lefttoppanel"},"child":[{"type":"Image","props":{"y":329,"x":55,"var":"shenbingBtn","skin":"comp/btn_lingqushenqi.png","runtime":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-6,"x":-5,"skin":"comp/btn_lingqushenqi_l.png"}},{"type":"Image","props":{"y":84,"x":2,"width":97,"skin":"comp/wenzi_lingqushenqi.png","height":33}}]},{"type":"Image","props":{"y":9,"x":66,"width":570,"visible":false,"var":"htmlbg","skin":"comp/di.png","sizeGrid":"10,10,10,10","height":50},"child":[{"type":"HTMLDivElement","props":{"y":14,"x":19,"width":552,"var":"charTxt","height":40}}]},{"type":"Sprite","props":{"y":98,"x":3,"name":"static","cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":37,"x":46,"var":"mailBtn","skin":"comp/icon_youjian_n.png","runtime":"ImageAsBtnRuntime","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":123,"x":46,"var":"talkingBtn","skin":"comp/img_chat.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Sprite","props":{"y":881,"x":0,"width":677,"var":"rightbottompanel","scaleY":0.95,"scaleX":0.95,"height":104,"cacheAs":"bitmap"},"child":[{"type":"Sprite","props":{"y":0,"x":0,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":58,"x":49,"var":"btn_huoban","skin":"comp/icon_0002_huoban.png","runtime":"","name":"0","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":61,"x":627,"var":"btn_zhanmeng","skin":"comp/icon_0001_zhanmeng.png","runtime":"","name":"0","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":59,"x":132,"var":"btn_jingjichang","skin":"comp/icon_0003_dingzhi.png","runtime":"","name":"0","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":60,"x":379,"var":"btn_xiulian","skin":"comp/icon_xiulian.png","runtime":"","name":"0","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":59,"x":214,"var":"btn_chengjiu","skin":"comp/icon_0005_chengjiu.png","runtime":"","name":"0","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":59,"x":462,"var":"btn_fuben","skin":"comp/icon_fuben.png","runtime":"","name":"0","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":60,"x":544,"var":"btn_wanfa","skin":"comp/icon_0008_wanfa.png","runtime":"","name":"0","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":59,"x":297,"var":"btn_huanhua","skin":"comp/icon_huanhua.png","runtime":"","name":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":-27,"x":602,"var":"btn_auto","skin":"comp/btn_zidongtiaozhan_d.png","runtime":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":37,"x":64,"text":"自动闯关","stroke":2,"fontSize":18,"color":"#FEFFDA","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":-129,"x":601,"var":"btn_guanqia","skin":"comp/icon_guanqia.png","pivotY":82.5,"pivotX":67},"child":[{"type":"Image","props":{"y":144,"x":21,"width":95,"var":"pro_guanqia","skin":"comp/boolGreen.png","height":7}},{"type":"Label","props":{"y":139,"x":21,"width":98,"var":"lab_guanqia","text":"100/100","strokeColor":"#000000","stroke":2,"height":16,"fontSize":16,"font":"SimHei","color":"#fff6cf","align":"center"}}]},{"type":"Image","props":{"y":-373,"x":543,"var":"btn_ciseyaosai","skin":"comp/icon_0010_chiseyaosai.png","runtime":""}},{"type":"Image","props":{"y":-77,"x":416,"var":"btn_mojing","skin":"mojing/icon_juese_mojing.png"}},{"type":"Image","props":{"y":-69,"x":331,"var":"btn_saodang","skin":"comp/icon_zjm_0021_saodang.png"}},{"type":"Image","props":{"y":-49,"x":164,"var":"taskPanel","skin":"comp/img_zjm_renwu.png","pivotY":43,"pivotX":160.5,"mouseThrough":false}},{"type":"Sprite","props":{"y":-94,"x":4,"var":"sp_task"},"child":[{"type":"Label","props":{"y":14,"x":85,"var":"labtask","text":"(1）狡诈的联盟","stroke":2,"fontSize":20,"color":"#F6D233","bold":true,"align":"left"}},{"type":"Label","props":{"y":45,"x":88,"width":229,"var":"labtasktar","underline":false,"text":"再次击败丛林树精灵(999/999)","stroke":2,"height":18,"fontSize":20,"color":"#FFF6CF","bold":true,"anchorX":0,"align":"left"}},{"type":"Label","props":{"y":14,"x":224,"var":"lab_taskpro","text":"(已完成)","stroke":2,"fontSize":20,"color":"#98e446","bold":true,"align":"left"}}]},{"type":"Image","props":{"y":-239,"x":10,"width":97,"var":"btn_richang","height":104},"child":[{"type":"Image","props":{"y":57,"x":-4,"var":"img_richang"}},{"type":"Animation","props":{"y":52,"x":48,"var":"ani_richang"}},{"type":"Image","props":{"y":96,"x":6,"width":81,"skin":"comp/mozuruqin_daojishi.png","height":28},"child":[{"type":"Label","props":{"y":4,"x":-9,"width":98,"var":"lab_richang","text":"00:00","strokeColor":"#000000","stroke":2,"fontSize":20,"font":"SimHei","color":"#98e446","align":"center"}}]}]},{"type":"Image","props":{"y":-510,"x":543,"var":"btn_jingying","skin":"comp/icon_zjm_0020_jyboss.png","runtime":""},"child":[{"type":"Image","props":{"y":93,"x":4,"skin":"comp/icon_zjm_0020_jyboss0.png"}}]},{"type":"Image","props":{"y":-237,"x":2,"var":"mskill","skin":"mercenaries/bg_yongbingshifang.png","name":"佣兵技能CD"},"child":[{"type":"Sprite","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"mercenaries/img_yongbingshifang2.png"}},{"type":"Sprite","props":{"y":74,"x":74,"var":"mskillmask","renderType":"mask"},"child":[{"type":"Pie","props":{"startAngle":-90,"radius":100,"lineWidth":1,"fillColor":"#ff0000","endAngle":90}}]}]},{"type":"Image","props":{"y":28,"x":30,"var":"mdi","skin":"mercenaries/yongbing_card01_blue.png","scaleY":0.6,"scaleX":0.62}},{"type":"Image","props":{"y":30,"x":35,"var":"mhead","skin":"mercenaries/442001.png","scaleY":0.6,"scaleX":0.6}},{"type":"Image","props":{"y":-1,"x":-1,"skin":"mercenaries/img_yongbingshifang1.png"}}]}]}]},{"type":"Image","props":{"y":159,"x":3,"width":642,"visible":false,"var":"systembg","skin":"async/bg_duanzao_gradient_001.png","height":50},"child":[{"type":"HTMLDivElement","props":{"y":16,"x":11,"width":620,"var":"lb_rollInfo","innerHTML":"htmlText","height":40}}]},{"type":"Sprite","props":{"y":158,"x":49,"width":531,"var":"sp_boss","height":117}},{"type":"Sprite","props":{"y":768,"x":126,"visible":false,"var":"powerupsp"},"child":[{"type":"Animation","props":{"y":-81,"x":54,"width":220,"var":"poweranidi","height":300}},{"type":"Image","props":{"y":44,"x":-21,"width":378,"skin":"async/bg.png","height":60}},{"type":"Animation","props":{"y":-3,"x":20,"width":180,"var":"powerup","height":108}},{"type":"FontClip","props":{"y":60,"x":185,"var":"addPowerNum","value":"+1234567","skin":"comp/fontclip_power.png","sheet":"+-0123456789"}}]},{"type":"Sprite","props":{"y":830,"x":56,"width":527,"var":"sp_mzrq","height":149}},{"type":"Sprite","props":{"y":830,"x":158,"width":430,"var":"sp_factiondup","height":149}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("HTMLDivElement",laya.html.dom.HTMLDivElement);
			View.regComponent("ImageAsBtnRuntime",ImageAsBtnRuntime);

            super.createChildren();
            this.createView(ui.GameSceneUI.uiView);
        }
    }
}

module ui {
    export class LoaderViewUI extends View {
		public loadingbar:ui.loadingbarUI;
		public ladingTxt:Laya.Label;
		public firstSpt:Laya.Sprite;
		public freshTxt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1136},"child":[{"type":"loadingbar","props":{"y":978,"x":8,"var":"loadingbar","runtime":"ui.loadingbarUI"}},{"type":"Label","props":{"y":998,"x":44,"width":557,"var":"ladingTxt","text":"加载界面","strokeColor":"#000000","stroke":2,"height":30,"fontSize":24,"font":"SimHei","color":"#fff6cf","bold":true,"align":"center"}},{"type":"Sprite","props":{"y":915,"x":150,"var":"firstSpt"},"child":[{"type":"Label","props":{"y":0,"x":0,"text":"首次加载时间稍长，请耐心等待","stroke":2,"fontSize":24,"font":"SimHei","color":"#e1aa3e","bold":true}},{"type":"Label","props":{"y":39,"x":0,"text":"如果无法进入游戏，","stroke":2,"fontSize":24,"font":"SimHei","color":"#fff6cf","bold":true}},{"type":"Label","props":{"y":39,"x":221,"var":"freshTxt","underlineColor":"#98e448","underline":true,"text":"请点击刷新","stroke":2,"fontSize":24,"font":"SimHei","color":"#98e448","bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.loadingbarUI",ui.loadingbarUI);

            super.createChildren();
            this.createView(ui.LoaderViewUI.uiView);
        }
    }
}

module ui {
    export class loadingbarUI extends View {
		public loadingBar:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":640,"skin":"login/jindutiao1.png","height":62},"child":[{"type":"Image","props":{"y":17,"x":37,"width":556,"skin":"loading/pbar_loading_di.png","height":35}},{"type":"Sprite","props":{"y":0,"x":43},"child":[{"type":"Image","props":{"y":3,"x":-10,"renderType":"mask"},"child":[{"type":"Rect","props":{"y":0,"x":-22,"width":607,"lineWidth":1,"height":57,"fillColor":"#ff0000"}}]},{"type":"Image","props":{"y":25,"x":0,"var":"loadingBar","skin":"loading/pbar_loading.png"},"child":[{"type":"Animation","props":{"y":9,"x":276,"source":"uieffect/loadingbarani.ani","interval":60,"autoPlay":true}},{"type":"Animation","props":{"y":6,"x":509,"source":"uieffect/loadingpoint.ani","interval":60,"autoPlay":true}}]}]},{"type":"Image","props":{"y":7,"x":8,"skin":"loading/pbar_common_yellow0.png","sizeGrid":"0,50,0,50"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.loadingbarUI.uiView);
        }
    }
}

module ui {
    export class mailDetailModleUI extends View {
		public mailDetail:Laya.Image;
		public youjianImg:Laya.Image;
		public fujianImg:Laya.Image;
		public titleTxt:Laya.Label;
		public timeTxt:Laya.Label;
		public yilingqu:Laya.Image;
		public lingquBtn:ImageAsBtnRuntime;

        public static  uiView:any ={"type":"View","props":{"width":490,"height":90},"child":[{"type":"Image","props":{"y":0,"x":5,"width":480,"var":"mailDetail","skin":"loading/common_list_0001.png","sizeGrid":"7,8,6,12","height":90},"child":[{"type":"Image","props":{"y":2,"x":13,"skin":"mail/icon_border_youjian.png"}},{"type":"Image","props":{"y":28,"x":56,"var":"youjianImg","skin":"mail/icon_youjian_n.png","anchorY":0.3,"anchorX":0.5}},{"type":"Image","props":{"y":46,"x":67,"var":"fujianImg","skin":"mail/icon_fujian.png"}},{"type":"Label","props":{"y":18,"x":111,"width":238,"var":"titleTxt","text":"消费返利","height":24,"fontSize":24,"font":"SimHei","color":"#fff6cf"}},{"type":"Label","props":{"y":53,"x":112,"width":238,"var":"timeTxt","text":"2017-7-24 15:20","height":24,"fontSize":16,"font":"SimHei","color":"#fff6cf"}},{"type":"Image","props":{"y":14,"x":362,"var":"yilingqu","skin":"async/img_yilingqu.png"}}]},{"type":"Image","props":{"y":45,"x":423,"width":106,"var":"lingquBtn","skin":"store/button_001.png","runtime":"ImageAsBtnRuntime","height":52,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":14,"x":35,"text":"领取","stroke":2,"fontSize":20,"font":"SimHei","color":"#fff6cf"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ImageAsBtnRuntime",ImageAsBtnRuntime);

            super.createChildren();
            this.createView(ui.mailDetailModleUI.uiView);
        }
    }
}

module ui.test {
    export class alphaoutUI extends laya.display.EffectAnimation {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Image","props":{"y":-130,"x":-88,"skin":"comp/image.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super();this.effectData =ui.test.alphaoutUI.uiView;}
    }
}

module ui.test {
    export class registerUI extends Dialog {

        public static  uiView:any ={"type":"Dialog","props":{"width":640,"height":1136}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.registerUI.uiView);
        }
    }
}

module ui.test {
    export class TestPageUI extends View {
		public btn:Laya.Button;
		public clip:Laya.Clip;
		public combobox:Laya.ComboBox;
		public tab:Laya.Tab;
		public list:Laya.List;
		public btn_close:Laya.Button;
		public btn2:Laya.Button;
		public check:Laya.CheckBox;
		public radio:Laya.RadioGroup;
		public box:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":640,"height":960,"anchorY":0,"anchorX":0},"child":[{"type":"Panel","props":{"width":600,"height":400,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","mouseEnabled":true,"height":400}},{"type":"Button","props":{"y":56,"x":41,"width":150,"var":"btn","skin":"comp/button.png","sizeGrid":"4,4,4,4","label":"点我赋值","height":37}},{"type":"Clip","props":{"y":56,"x":401,"var":"clip","skin":"comp/clip_num.png","index":1,"clipX":10}},{"type":"ComboBox","props":{"y":143,"x":220,"width":200,"var":"combobox","skin":"comp/combobox.png","sizeGrid":"4,20,4,4","selectedIndex":1,"labels":"select1,select2,selecte3","height":23}},{"type":"Tab","props":{"y":96,"x":220,"var":"tab","skin":"comp/tab.png","labels":"tab1,tab2,tab3"}},{"type":"VScrollBar","props":{"y":223,"x":259,"skin":"comp/vscroll.png","height":150}},{"type":"VSlider","props":{"y":223,"x":224,"skin":"comp/vslider.png","height":150}},{"type":"List","props":{"y":68,"x":452,"width":128,"var":"list","vScrollBarSkin":"comp/vscroll.png","repeatX":1,"height":299},"child":[{"type":"Box","props":{"y":0,"x":0,"width":112,"name":"render","height":30},"child":[{"type":"Label","props":{"y":5,"x":26,"width":78,"text":"this is a list","skin":"comp/label.png","name":"label","height":20,"fontSize":14}},{"type":"Clip","props":{"y":2,"x":0,"skin":"comp/clip_num.png","name":"clip","clipX":10}}]}]},{"type":"Button","props":{"y":4,"x":563,"var":"btn_close","skin":"comp/btn_close.png","name":"close"}},{"type":"Button","props":{"y":112,"x":41,"width":150,"var":"btn2","skin":"comp/button.png","sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"label":"点我赋值","height":66}},{"type":"CheckBox","props":{"y":188,"x":220,"var":"check","skin":"comp/checkbox.png","label":"checkBox1"}},{"type":"RadioGroup","props":{"y":61,"x":220,"var":"radio","skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3"}},{"type":"Panel","props":{"y":223,"x":299,"width":127,"vScrollBarSkin":"comp/vscroll.png","height":150},"child":[{"type":"Image","props":{"skin":"comp/image.png"}}]},{"type":"CheckBox","props":{"y":188,"x":326,"skin":"comp/checkbox.png","labelColors":"#ff0000","label":"checkBox2"}},{"type":"Box","props":{"y":197,"x":41,"var":"box"},"child":[{"type":"ProgressBar","props":{"y":70,"width":150,"skin":"comp/progress.png","sizeGrid":"4,4,4,4","name":"progress","height":14}},{"type":"Label","props":{"y":103,"width":137,"text":"This is a Label","skin":"comp/label.png","name":"label","height":26,"fontSize":20,"font":"Microsoft YaHei"}},{"type":"TextInput","props":{"y":148,"width":150,"text":"textinput","skin":"comp/textinput.png","name":"input"}},{"type":"HSlider","props":{"width":150,"skin":"comp/hslider.png","name":"slider"}},{"type":"HScrollBar","props":{"y":34,"width":150,"skin":"comp/hscroll.png","name":"scroll"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.TestPageUI.uiView);
        }
    }
}

module ui.test {
    export class tipsUI extends View {
		public ani1:Laya.FrameAnimation;
		public mText:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1136},"child":[{"type":"Panel","props":{"width":640,"mouseThrough":true,"mouseEnabled":false,"height":300,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"var":"mText","text":"label","fontSize":32,"font":"SimHei","color":"#af312f","centerY":0,"centerX":0,"bold":true},"compId":10}]}],"animations":[{"nodes":[{"target":10,"keyframes":{"centerY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"centerY","index":0},{"value":-100,"tweenMethod":"linearNone","tween":true,"target":10,"key":"centerY","index":30}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.tipsUI.uiView);
        }
    }
}
