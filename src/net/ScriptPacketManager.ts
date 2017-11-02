import Dictionary = laya.utils.Dictionary;

class BasePacket {
	defines: (string | number)[][];
	constructor(tmpdefines:(string | number)[][]){
		this.defines = tmpdefines;
	}
}


class ScriptPacketManager {
	public static m_defines: Dictionary = new Dictionary();

	public static register(cmd: number, define: Object, hander?: Function | null): boolean {
		this.m_defines.set(cmd, [define, hander])
		return true;
	}
	public static getProtocol(cmd: number): Object | null {
		let array = this.m_defines.get(cmd);
		if (array) {
			return array[0];
		}
		LOG("[0x" + cmd.toString(16) + "]:message not define");
		return null;
	}

	public static getProtocolFun(cmd: number): Function | null {
		let array = this.m_defines.get(cmd);
		if (array) {
			return array[1];
		}
		LOG("[0x" + cmd.toString(16) + "]:message not define");
		return null;
	}
}