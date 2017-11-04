/*
* name;
*/
class CommonUtils {
    /**
     * 给字体添加描边
     * @param lable  文字 {Laya.Lable|Laya.Text}
     * @param color  表示文本的描边颜色 {string}
     * @param width  描边宽度 {number}
     */
    static addLableStrokeColor(lable: Laya.Label, color: string, width: number) {
        lable.strokeColor = color;
        lable.stroke = width;
    }
    /**
     * 万字的显示
     * @param label {Laya.Lable|Laya.Text}
     * @param num {number}
     */
    static labelIsOverLenght(lable: Laya.Label, num: number) {
        let str: string = "";
        if (num < 10000) {
            str = num + "";
        } else if (num < 10000 * 1000) {
            str = Math.floor(num / 10000).toString() + "万";
        } else {
            str = Math.floor(num / 10000000).toString() + "千万";
        }
        lable.text = str;
    }

    /**
     * 刷新界面
     * @argument
     * 
     */
    static freshPage() {
        window.location.reload();
    }

    /**
     * 验证身份证信息
     */
    static checkID(num: string): boolean {
        let reg: RegExp = new RegExp("^[0-9]{15,18}$");
        if (reg.test(num)) {
            return true;
        }
        return false;
    }

    /**
     * 验证电话号码
     */
    static checkPhoneNumber(num: string): boolean {
        let reg: RegExp = new RegExp("^1[0-9]{10}$");
        if (reg.test(num)) {
            return true;
        }
        return false;
    }

    static clone(src: Object): Object | null {
        if (!src) {
            return null;
        }

        let obj = {};
        for (let f in src) {
            if (src.hasOwnProperty(f)) {
                obj[f] = src[f];
            }
        }
        return obj;
    }

  /**
  * calculate the direction
  * if move, x1, y1 are the startPosition, x2, y2 are the endPosotion
  * else, x1, y1 are the curNode position, x2, y2 are the target position
  */
    static calculateDirection(x1: number, y1: number, x2: number, y2: number) {
        let distX:number = x2 - x1 , distY:number = y2 - y1, orientation;
        if (distX >= 0 && distY < 0) {//quadrant 1
            orientation = AniOrientation.RIGHT_UP;
        } else if (distX < 0 && distY < 0) {//quadrant 2
            orientation = AniOrientation.LEFT_UP;
        } else if (distX < 0 && distY >= 0) {//quadrant 3
            orientation = AniOrientation.LEFT_DOWN;
        } else {//quadrant 4
            orientation = AniOrientation.RIGHT_DOWN;
        }
        return orientation;
    };
}