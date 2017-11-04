/*
* name;
*/
class EnterUI extends GameUI {
    private mView: ui.enterui.EnterUIUI;
    constructor() {
        super();
    }
    init(...extraData: any[]) {

    }

    onAdd(uimgr: GameUiMgr) {
        this.mView = new ui.enterui.EnterUIUI();//这个地方是否用内存池，自行判断
        this.mView.mEnter.on(laya.events.Event.CLICK, this, () => {
            //this.showUI(UiType.UI_GameMain);
            this.login(1);
            //this.reg();
            //this.showUI(UiType.UI_LoaderView);
            //this.closeUI();

        });
        super.onAdd(uimgr, this.mView)
    }

    onRemove() {
        super.onRemove();
        this.mView.destroy();
    }
    onShow() {
    }

    login(isSearch: number = 1001) {
        let makeOrderLogin: Object = new Object();
        makeOrderLogin['imei'] = "abc123";
        makeOrderLogin['device'] = 1;
        makeOrderLogin['clientIp'] = "";
        makeOrderLogin['event'] = "login";
        makeOrderLogin['login'] = isSearch;
        makeOrderLogin['channel'] = 100;
        makeOrderLogin['dataJson'] = new Object();
        makeOrderLogin['dataJson']['userIdentity'] = "identityabc";
        makeOrderLogin['dataJson']['token'] = "e419b00717e6fb1413d21765a6dd49bb";
        makeOrderLogin['dataJson']['username'] = "lxb7uqn5";
        makeOrderLogin['dataJson']['userid'] = "7uqn5";
        makeOrderLogin['dataJson']['password'] = "e419b00717e6fb1413d21765a6dd49bb";
        makeOrderLogin['dataJson']['sid'] = "1121";
        makeOrderLogin['dataJson']['sdk'] = 0;//subchanel
        let loginSearch = (CS_LoginPacket as ICS_LoginPacket);
        loginSearch.LoginStr = JSON.stringify(makeOrderLogin);
        SocketMgr.getInstance().sendPacket(PacketEnum.CS_LoginPacket, loginSearch, PacketEnum.SC_LoginResultPacket);
    }
    reg() {
        let makeOrderLogin = new Object();
        makeOrderLogin['imei'] = "abc123";
        makeOrderLogin['device'] = 1;
        makeOrderLogin['clientIp'] = "";
        makeOrderLogin['event'] = "createUser";
        makeOrderLogin['login'] = 1;
        makeOrderLogin['channel'] = 100;
        makeOrderLogin['userid'] = '';
        makeOrderLogin['verifycode'] = '';
        makeOrderLogin['dataJson'] = new Object();
        makeOrderLogin['dataJson']['userIdentity'] = "identifyabc";
        makeOrderLogin['dataJson']['token'] = "aaaaa";
        makeOrderLogin['dataJson']['username'] = "random123";
        makeOrderLogin['dataJson']['userid'] = "abc123";
        makeOrderLogin['dataJson']['password'] = "random123";
        makeOrderLogin['dataJson']['sdk'] = 0;//subchanel
        makeOrderLogin['dataJson']['isReg'] = 1;
        let loginSearch = (CS_LoginPacket as ICS_LoginPacket);
        loginSearch.LoginStr = JSON.stringify(makeOrderLogin);
        SocketMgr.getInstance().sendPacket(PacketEnum.CS_LoginPacket, loginSearch, PacketEnum.SC_LoginResultPacket);
    }

    logingame(value: ICS_LoginGame) {
        SocketMgr.getInstance().sendPacket(PacketEnum.CS_LoginGame, value);
    }
}

ScriptPacketManager.register(PacketEnum.SC_LoginResultPacket, SC_LoginResultPacket, (packet: Object) => {
    let Data = packet as ISC_LoginResultPacket;
    LOG("SC_LoginResultPacket" + JSON.stringify(packet));
})

ScriptPacketManager.register(PacketEnum.SC_RegResult, SC_RegResult, (packet: Object) => {
    LOG("SC_RegResult" + JSON.stringify(packet));
})

ScriptPacketManager.register(PacketEnum.SC_LoginReply, SC_LoginReply, (packet: Object) => {
    LOG("SC_LoginReply" + JSON.stringify(packet));
    let Data = packet as ISC_LoginReply;
    //断开连接，连接游戏服
    GlobalVar.gGameServer.ip = Data.gameserverip;
    GlobalVar.gGameServer.port = Data.port;
    SocketMgr.getInstance().connnectGameSever();
    onfire.one(EventType.NETWORK_CON_OK, () => {
        let value = CS_LoginGame as ICS_LoginGame;
        value.appid = Data.appid;
        value.gameserverip = Data.gameserverip;
        value.port = Data.port;
        value.userid = Data.appid;
        value.username = Data.username;
        value.verifycode = Data.verifycode;
        SocketMgr.getInstance().sendPacket(PacketEnum.CS_LoginGame, value);
    });
    //
})

ScriptPacketManager.register(PacketEnum.SC_LoginGame, SC_LoginGame, (packet: Object) => {
    LOG("SC_RegResult" + JSON.stringify(packet));
    onfire.fire(EventType.UI_SHOW, UiType.UI_LoaderView);
})