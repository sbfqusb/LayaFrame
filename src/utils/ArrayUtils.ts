/*
* name;
*/
class ArrayUtils{
/**
     * 遍历操作，目前浏览器基本上支持es6 数组自带forEach方法
     * @param arr  {Array}
     * @param callback {function}
     * @param thisObj {any}
     */
    static forEach(arr:Array<Object>, callback:Function, thisObj:any) {
        for (var i = 0, len = arr.length; i < len; i++) {
            callback.apply(thisObj, [arr[i], i]);
        }
    }

    /**
     * 打乱数组中的元素
     * @param arr  {Array}
     */
    static upset(arr:Array<Object>){
        var len = arr.length;
        var index;
        var tmp;
        for(var i=len-1; i >= 0; i--) {
            index = (Math.random() * i)|0;
            tmp = arr[i];
            arr[i] = arr[index];
            arr[index] = tmp;
        }
    }

}