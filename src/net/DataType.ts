class DataType {
	static readonly STRING: number = 0;
	static readonly INT32: number = 1;
	static readonly UINT32: number = 2;
	static readonly BOOL: number = 3;
	static readonly INT8: number = 4;
	static readonly UINT8: number = 5;
	static readonly INT16: number = 6;
	static readonly UINT16: number = 7;
	static readonly INT64: number = 8;
	static readonly UINT64: number = 9;
	static readonly FLOAT: number = 10;
	static readonly DOUBLE: number = 11;
	static readonly CUSTOM: number = 12;
	static readonly ARRAY: number = 13;
	static readonly ENTITY: number = 14;
	static readonly USERDATA: number = 15;
	static readonly ARRAY8: number = 16;
	static readonly ARRAY16: number = 17;
	static readonly ARRAY64: number = 18;
	static readonly STRING8: number = 19;
	static readonly STRING16: number = 20;
	static readonly DT_MAX: number = 21;
	static readonly VECTOR: number = 22;

	//client use
	static ARRAY2:(string|number)[][];
}