class NetWork {
    public static readonly Instance: NetWork = new NetWork();//单例模式
    private NetWork() { }
    private socket: Laya.Socket;
    private mIsConect: boolean = false;
    private mOutPut: Laya.Byte;
    public init() {
        this.socket = new Laya.Socket();
        //这里我们采用小端
        this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
        //建立连接
        //this.socket.connectByUrl("ws://localhost:8989");
        this.mOutPut = this.socket.output;

        this.socket.on(Laya.Event.OPEN, this, this.openHandler);
        this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
        this.socket.on(Laya.Event.CLOSE, this, this.closeHandler);
        this.socket.on(Laya.Event.ERROR, this, this.errorHandler);
    }

    public connect(): void {
        //建立连接
        LOG("connect server:" + GlobalVar.gCurSelectServer.ip + "\t" + GlobalVar.gCurSelectServer.port)
        this.socket.connect(GlobalVar.gCurSelectServer.ip, GlobalVar.gCurSelectServer.port);
    }

    private reConnect(): void {

    }

    public isConnect(): boolean {
        return this.mIsConect;
    }

    public sendPacket(byte) {
        if (typeof byte === 'string') {
            this.socket.send(byte)
        }
        else {
            this.mOutPut.writeArrayBuffer(byte);
        }
        this.socket.flush();
    }
    private openHandler(event: any = null): void {
        //正确建立连接；
        LOG("connect server OK!");
        this.mIsConect = true;
        onfire.fire(EventType.NETWORK_CON_OK);
    }
    private receiveHandler(msg: any = null): void {
        ///接收到数据触发函数
        this.socket.input.clear();
    }
    private closeHandler(e: any = null): void {
        //关闭事件
        this.mIsConect = false;
        onfire.fire(EventType.NETWORK_CON_FAIL);
        LOG("connect server: close");
    }
    private errorHandler(e: any = null): void {
        //连接出错
        this.mIsConect = false;
        onfire.fire(EventType.NETWORK_CON_FAIL);
        LOG("connect server: error");
    }


}