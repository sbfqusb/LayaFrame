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
    public static loadRes(fileName: string): any {
        var data = Laya.loader.getRes(fileName);
        this.dataSource[fileName] = data;
        return data;
    }

    public static getData(file: string): any {
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