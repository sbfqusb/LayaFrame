/*
* name;
*/
class GlobalFun{
    constructor(){

    }
    /**
     * static name
     */
    public static GetServerList():any{
        return GlobalVar.gServerList;
    }

    //存储
    public static saveKey(key:string,value:string):void{
        Laya.LocalStorage.setItem(key,value);
    }
    public static getKey(key:string):string{
        return Laya.LocalStorage.getItem(key);
    }
}

//
function handler(obj,method) {
	return function ():any {
		return method.apply(obj,arguments);
	}
}

function LOG(s:string):void{
    console.log(s);
}

