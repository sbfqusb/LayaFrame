/*
* name;
*/
class GlobalFun {
    constructor() {

    }
    /**
     * static name
     */
    public static GetServerList(): any {
        return GlobalVar.gServerList;
    }

    //存储
    public static saveKey(key: string, value: string): void {
        Laya.LocalStorage.setItem(key, value);
    }
    public static getKey(key: string): string {
        return Laya.LocalStorage.getItem(key);
    }

    public static loadSpine(file: string,complete?: Handler): Laya.Skeleton {
        let skeleton: Laya.Skeleton = new Laya.Skeleton();
        skeleton.load(file,complete);
        return skeleton;
    }

    public static createAni(aniFile: string, name?: string, start?: any, loop?: boolean,callback?:Function): Animation {
        var ani: Animation = new Animation();
        ani.loadAnimation(aniFile); // 加载图集动画 *.ani
        ani.play(start, loop, name);// 播放图集动画
        if (callback) {
            ani.on(Laya.Event.COMPLETE,null,callback);
        }
        return ani;
    }
}

//
function handler(obj, method) {
    return function (): any {
        return method.apply(obj, arguments);
    }
}

function LOG(s: string): void {
    console.log(s);
}

