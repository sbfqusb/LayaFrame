/*
* name;
*/
class ResourceUtils {
    /**
    * 加载资源
    * @param resource: [{type: , url: }] {Array}
    * @param onResourceLoadComplete      {function}
    * @param onResourceLoadProgress      {function}
    * @param onResourceLoadTarget        {any}
    */
    static loadResource(resource: Array<Object>, onResourceLoadComplete: Function, onResourceLoadProgress: Function | undefined, onResourceLoadTarget: any) {
        if (onResourceLoadProgress === undefined) {
            Laya.loader.load(resource, Laya.Handler.create(onResourceLoadTarget, onResourceLoadComplete));
        } else {
            Laya.loader.load(resource, Laya.Handler.create(onResourceLoadTarget, onResourceLoadComplete), Laya.Handler.create(onResourceLoadTarget, onResourceLoadProgress, undefined, false));
        }

    }

    /**
     * 获取资源加载地址
     * @param 一类型资源放置位置 {string}
     * @param 资源名字 {string}
     * @param 资源类型，默认png（png|jpg|） {string}
     */
    static getUrl(host, name, resType) {
        (resType === void 0) && (resType = "png");
        return host + "/" + name + "." + resType;
    }

    //获取后缀名
    static getExtName(url) {
        let arr = url.split('.');
        let len = arr.length;
        return arr[len - 1];
    }

    static getBaseName(url) {
        let arr = url.split('.');
        let len = arr.length;
        return arr[0];
    }

    static getFileNameNoExt(url) {
        let baseName: string = this.getBaseName(url);
        let index = baseName.lastIndexOf("/");
        let subStr = baseName.substr(index + 1);
        console.log(subStr);
        return subStr;
    }
}