import Byte = Laya.Byte;

class ScriptPacket {

	/////////////////////////////////////////////////////////////////////////////////////////
	//
	//序列化
	/////////////////////////////////////////////////////////////////////////////////////////
	static serialize(packet: BasePacket,byte: Byte): boolean {
		if (packet == null || byte == null) {
			LOG("serialize null error");
			return false;
		}
		let defines: Array<Object> = packet.defines;
		for (let i: number = 0; i < defines.length; ++i) {
			let member = defines[i];
			if (this.writeData(packet, member, byte) == false) {
				LOG("serialize writeData error");
				return false;
			}
		}

		return true;
	}

	//写数据
	private static writeData(packet: Object, define: any, byte: Byte): boolean {
		let keyName: string = define[0];
		let keyType = define[1];
		let isVector: boolean = define.length == 3 ? true : false;

		if (isVector) {
			let data = packet[keyName];
			let loopNum: number = (packet[keyName]).length;

			// 写数组长度
			byte.writeInt32(loopNum);
			for (let i: number = 0; i < loopNum; ++i) {
				let dataCell = data[i];
				this.writeDataCell(dataCell, keyType, byte);
			}
		}
		else {
			let data = packet[keyName];
			this.writeDataCell(data, keyType, byte);
		}

		return true;
	}

	//写元数据
	private static writeDataCell(data: any, keyType: Number | Object, byte: Byte): boolean {
		if (typeof keyType === 'number') {
			//直接写数据
			this.writeValue(data, keyType as number, byte);
		}
		else if (keyType instanceof Object) {
			//递归写Object
			this.serialize(data, byte);
		}
		else {
			LOG("doesn't exsist type:" + keyType);
			return false;
		}
		return true;
	}

	private static writeValue(data: any, dataType: number, byte: Byte): boolean {
		switch (dataType) {
			case DataType.BOOL:
				{
					let val: number = (data as boolean) == true ? 1 : 0;
					byte.writeUint8(val);
					break;
				}
			case DataType.INT8:
				{
					byte.writeByte(data);
					break;
				}
			case DataType.UINT8:
				{
					byte.writeUint8(data);
					break;
				}
			case DataType.INT16:
				{
					byte.writeInt16(data);
					break;
				}
			case DataType.UINT16:
				{
					byte.writeUint16(data);
					break;
				}
			case DataType.INT32:
				{
					byte.writeInt32(data);
					break;
				}
			case DataType.UINT32:
				{
					byte.writeUint32(data);
					break;
				}
			case DataType.FLOAT:
				{
					byte.writeFloat32(data);
					break;
				}
			case DataType.DOUBLE:
				{
					byte.writeFloat64(data);
					break;
				}
			case DataType.STRING:
				{
					let str: string = data as string;
					//					byte.writeUint32(str.length);
					//					byte.writeUTFBytes(str);
					let oldPos: number = byte.pos;
					byte.pos += 4;
					byte.writeUTFBytes(str);
					let newPos: number = byte.pos;
					byte.pos = oldPos;
					byte.writeUint32(newPos - oldPos - 4);
					byte.pos = newPos;

					break;
				}
			default:
				{
					//write nothing
					break;
				}
		}
		return true;
	}

	/////////////////////////////////////////////////////////////////////////////////////////
	//
	//反序列化
	/////////////////////////////////////////////////////////////////////////////////////////

	static deSerialize(byte: Byte, define: any, packet: Object): boolean {

		if (packet == null || define == null || byte == null)
			return false;

		let defines = define.defines;
		for (let i: number = 0; i < defines.length; ++i) {
			let member = defines[i];
			if (this.readData(byte, member, packet) == false)
				return false;
		}
		return true;
	}

	private static readData(byte: Byte, define: any, packet: Object): boolean {
		let keyName: string = define[0] as string;
		let keyType = define[1];
		let isVector: boolean = define.length == 3 ? true : false;
		if (isVector) {
			//数组长度
			let loopNum: number = byte.getInt32();
			let arr = new Array(loopNum);
			packet[keyName] = arr;
			for (let i: number = 0; i < loopNum; ++i) {
				this.readDataCell(byte, keyType, i, arr);
			}
		}
		else {
			this.readDataCell(byte, keyType, keyName, packet);
		}

		return true;
	}

	private static readDataCell(byte: Byte, keyType: Object | Number, keyName: number | string, packet: any): boolean {
		if (keyType instanceof Object) {
			let obj: Object = new Object();
			// if (typeof keyName === 'number') {
			// 	(packet)[(keyName as number)] = obj;
			// } else {
			// 	(packet as Object)[(keyName as string)] = obj;
			// }
			packet[keyName] = obj;
			this.deSerialize(byte, keyType, obj);
			return true;
		}

		switch (keyType as number) {
			case DataType.BOOL:
				{
					let val: number = byte.getUint8();
					let b: boolean = (val == 1) ? true : false;
					(packet as Object)[(keyName as string)] = b;
					break;
				}
			case DataType.INT8:
				{
					(packet as Object)[(keyName as string)] = byte.getByte();
					break;
				}
			case DataType.UINT8:
				{
					(packet as Object)[(keyName as string)] = byte.getUint8();
					break;
				}
			case DataType.INT16:
				{
					(packet as Object)[(keyName as string)] = byte.getInt16();
					break;
				}
			case DataType.UINT16:
				{
					(packet as Object)[(keyName as string)] = byte.getUint16();
					break;
				}
			case DataType.INT32:
				{
					(packet as Object)[(keyName as string)] = byte.getInt32();
					break;
				}
			case DataType.UINT32:
				{
					(packet as Object)[(keyName as string)] = byte.getUint32();
					break;
				}
			case DataType.FLOAT:
				{
					(packet as Object)[(keyName as string)] = byte.getFloat32();
					break;
				}
			case DataType.DOUBLE:
				{
					(packet as Object)[(keyName as string)] = byte.getFloat64();
					break;
				}
			case DataType.STRING:
				{
					let soocketByteslen: number = byte.getUint32();
					(packet as Object)[(keyName as string)] = byte.readUTFBytes(soocketByteslen);
					break;
				}

			default:
				{
					break;
				}
		}


		return true;
	}
}