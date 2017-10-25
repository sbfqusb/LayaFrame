/*
* name;
*/
class GameDataLoader {
    constructor() {

    }
    public static dataSource = {};
    /**
     * name
     */
    public static loadRes(fileName: string): Object {
        var data = Laya.loader.getRes(fileName);
        this.dataSource[fileName] = data;
        return data;
    }

    public static getData(file: string): Object {
        var data = this.dataSource[file];
        if (data === undefined) {
            this.loadRes(file);
        }
        return this.dataSource[file]
    }

    public static getDataById(file: string, defineid) {
        var data = this.dataSource[file];
        if (data === undefined) {
            this.loadRes(file);
        }
        return this.dataSource[file][defineid];
    }
}