import Socket = Laya.Socket;
class SocketMgr {
	private static readonly _instance: SocketMgr = new SocketMgr();
	private socket: Socket;
	private output: Laya.Byte;
	private input: Laya.Byte;
	public socketStatus: number = 1;

	public readonly SocketClose: number = 1;
	public readonly SocketConnecting: number = 2;
	public readonly SocketOpen: number = 3;

	public static readonly noSever: number = 0;
	public static readonly LoginSever: number = 1;
	public static readonly GameSever: number = 2;

	private _nowSever: number = 0;
	private _reCmd: number = 0;
	public _isReconnect: boolean = false;

	private _reconnectTimes: number = 0;
	constructor() {
		this.output = new Laya.Byte();
		this.input = new Laya.Byte();
		this.socket = new Socket();
		this.socketStatus = this.SocketClose;
		this.socket.disableInput = true;
		//this.output.endian = Laya.Byte.LITTLE_ENDIAN;
		//this.output.endian = Laya.Byte.BIG_ENDIAN;
		this.socket.on(Laya.Event.OPEN, this, this.openHandler);
		this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
		this.socket.on(Laya.Event.CLOSE, this, this.closeHandler);
		this.socket.on(Laya.Event.ERROR, this, this.errorHandler);
	}
	public static getInstance(): SocketMgr {
		return this._instance;
	}
	public closeSocket(): void {
		this.socket.close();
	}
	/**
	 * 连接登陆服务器
	 * */
	public conectLoginSever(): void {
		if (this.socketStatus !== this.SocketClose)
			return;
		let serverAdd: string = GlobalVar.gCurSelectServer.ip;
		let serverPort: number = GlobalVar.gCurSelectServer.port;
		LOG(`start conectLoginSever :${serverAdd} , ${serverPort}`);
		this.socketStatus = this.SocketConnecting;
		this.socket.connect(serverAdd, serverPort);
	}
	/**
	 * 连接到游戏服务器
	 * */
	public connnectGameSever(): void {
		if (this.socketStatus !== this.SocketClose) {
			this.socket.close();
		}
		let serverAdd: string = GlobalVar.gGameServer.ip;
		let serverPort: number = GlobalVar.gGameServer.port;
		LOG(`start connnectGameSever :${serverAdd} ${serverPort}`)
		this.socketStatus = this.SocketConnecting;
		this.socket.connect(serverAdd, serverPort);
	}
	/**
	 * 重连
	 * */
	public reConnect(): void {
		if (this.socketStatus !== this.SocketClose) {
			return;
		}
		this.socketStatus = this.SocketConnecting;
		this._isReconnect = true;
		this._reconnectTimes++;
		if (this._reconnectTimes === 1) {
			this.startReConnect();
		}
		else if (this._reconnectTimes === 2) {
			LOG("%cwaitReConnect times:" + this._reconnectTimes + " 10000ms later");
			Laya.timer.once(10000, this, this.startReConnect);
		}
		else if (this._reconnectTimes === 3) {
			LOG("%cwaitReConnect times:" + this._reconnectTimes + " 30000ms later");
			Laya.timer.once(30000, this, this.startReConnect);
		}
		else {
			LOG("ReConnect failed please refresh");
			//PublicgetInstance().showTips("info","服务器连接失败，5秒后刷新");
			onfire.fire(EventType.UI_SHOW, UiType.UI_TIPS, "服务器连接失败，5秒后刷新");
			Laya.timer.once(5000, this, () => {
				CommonUtils.freshPage();
			})
		}
	}
	private startReConnect(): void {
		if (this._nowSever === SocketMgr.noSever) {
			this.conectLoginSever();
		}
		else {
			this.connnectGameSever();
		}
	}
	public isSocketConneted(): boolean {
		return this.socketStatus === this.SocketOpen;
	}
	private openHandler(e: any = null): void {
		this.socketStatus = this.SocketOpen;
		this.socket.output.endian = Laya.Byte.LITTLE_ENDIAN;
		this.socket.input.endian = Laya.Byte.LITTLE_ENDIAN;
		this.output = this.socket.output;
		this.input = this.socket.input;
		LOG("openHandler connect success");
		if (this._nowSever === SocketMgr.noSever) {
			this._nowSever = SocketMgr.LoginSever;
		}
		else if (this._nowSever === SocketMgr.LoginSever) {
			this._nowSever = SocketMgr.GameSever;
		}
		if (this._isReconnect) {
			this._reconnectTimes = 0;
			this._isReconnect = false;
			this.loginGameSever();
		}
		if (this._nowSever === SocketMgr.GameSever) {
			this.goPingPong();
		}
		onfire.fire(EventType.NETWORK_CON_OK, this._nowSever);
	}
	public loginGameSever(): void {
		this.sendPacket(PacketEnum.CS_LoginGame, CS_LoginGame);
	}
	private goPingPong(): void {
		Laya.timer.clear(this, this.sendPingPong);
		Laya.timer.loop(60 * 1000, this, this.sendPingPong);
	}
	private sendPingPong(): void {
		let ping = C2S_Ping as IC2S_Ping;
		ping.Ping = new Date().getTime();
		this.sendPacket(PacketEnum.C2S_Ping, ping);
	}
	private receiveHandler(message: any): void {
		/*获取数据，调用对应proxy 的setter方法 修改数据*/
		//H5.LOG(message);
		if (typeof message === 'string') {
			LOG("Receive Message:" + message);
		} else if (message instanceof ArrayBuffer) {
			let byte: Laya.Byte = new Laya.Byte(message);
			let len: number = byte.getUint32();
			let cmd: number = byte.getUint16();
			//丢包处理
			if (cmd === 0xa6b) {
				//debugger;
			}
			if (len !== byte.length) {
				this.input.clear();
				LOG("loss package need:" + len + ",Laya.bytelen:" + byte.length);
				return;
			}
			LOG("Receive Message:" + cmd.toString(16));
			this.dispatchMsg(cmd, byte);
			if (this._reCmd === cmd) {//关闭转圈

			}
		}

		//H5.Laya.receiveByteLen = H5.Laya.receiveByteLen + len;
		this.input.clear();
	}
	public sendPacket(cmd: number, packet: BasePacket, reCmd?: number): void {

		this.socket.output.endian = Laya.Byte.LITTLE_ENDIAN;
		this.socket.input.endian = Laya.Byte.LITTLE_ENDIAN;
		if (this.socketStatus !== this.SocketOpen) {
			LOG("this.socket Closed reconnect");
			if (this.socketStatus === this.SocketClose) {
				this.reConnect();
			}
			return;
		}
		if (cmd === 0 || packet === null)
			return;

		if (reCmd) {
			this._reCmd = reCmd;
		}

		let tempByte: Laya.Byte = new Laya.Byte();
		if (ScriptPacket.serialize(packet, tempByte)) {
			let len: number = tempByte.length;
			this.output.writeUint32(len + 6);
			this.output.writeUint16(cmd);
			this.output.writeArrayBuffer(tempByte.buffer, 0, len);
			this.socket.flush();
			//H5.LOG("%cSendover:",H5.INFO,"color:blue");
			//H5.Laya.sendByteLen = H5.Laya.sendByteLen + len;
		}
		LOG("sendPacket:[0x" + cmd.toString(16) + "]");

	}
	private dispatchMsg(cmd: number, byte: Laya.Byte): void {
		let proto = ScriptPacketManager.getProtocol(cmd);

		if (proto === null)
			return;

		let packet: Object = new Object();
		let boo: boolean = ScriptPacket.deSerialize(byte, proto, packet);

		if (boo) {
			let fun: Function | null = ScriptPacketManager.getProtocolFun(cmd);
			if (fun) {
				fun(packet);
			}
		}

	}
	private closeHandler(): void {
		LOG("closeHandler");
		if (this.socketStatus === this.SocketOpen) {
			this.socketStatus = this.SocketClose;
		}
		onfire.fire(EventType.UI_SHOW, UiType.UI_TIPS, "与服务器连接断开");
		Laya.timer.once(2000, this, () => {
			CommonUtils.freshPage();
		})
		//reConnect();
		onfire.fire(EventType.NETWORK_CON_OFF);
	}
	private errorHandler(e: Event): void {
		LOG("errorHandler");
		LOG("" + new Date().getTime());
		if (this.socketStatus === this.SocketOpen) {
			this.socketStatus = this.SocketClose;
		}

		this.reConnect();
		onfire.fire(EventType.NETWORK_CON_FAIL);
	}
}