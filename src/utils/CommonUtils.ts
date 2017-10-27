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
        let str:string = "";
        if (num < 10000) {
            str = num + "";
        } else if (num < 10000 * 1000) {
            str = Math.floor(num / 10000).toString() + "万";
        } else {
            str = Math.floor(num / 10000000).toString() + "千万";
        }
        lable.text = str;
    }
}