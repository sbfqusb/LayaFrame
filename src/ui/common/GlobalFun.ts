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

