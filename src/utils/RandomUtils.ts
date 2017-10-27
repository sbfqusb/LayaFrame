/*
* name;
*/
class RandomUtils{
/**
     * 获取一个区间的随机数 (from, end)
     * @param from 最小值 {number}
     * @param end 最大值 {number}
     * @returns {number}
     */
    static limit(from:number, end:number) {
        from = Math.min(from, end);
        end = Math.max(from, end);
        var range = end - from;
        return from + Math.random() * range;
    }

    /**
     * 在一个数组中随机获取一个元素
     * @param arr 数组 {Array} 
     * @returns 随机出来的结果 {any}
     */
    static randomArray(arr:Array<any>) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    }

}