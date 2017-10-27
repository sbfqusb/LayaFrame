/*
* name;
*/
class Math2d {
    private static pi_d_180:number = Math.PI / 180;
    private static pi_180_d:number = 180 / Math.PI;
    
    public static clampf(value, min_inclusive, max_inclusive) {
        let temp = 0
        if (min_inclusive > max_inclusive) {
            temp = min_inclusive
            min_inclusive = max_inclusive
            max_inclusive = temp
        }
        if (value < min_inclusive)
            return min_inclusive
        else if (value < max_inclusive)
            return value
        else
            return max_inclusive;
    }

    // 求两点间距离
    public static dist(ax: number, ay: number, bx: number, by: number): number {
        let dx = bx - ax;
        let dy = by - ay;
        return Math.sqrt(dx * dx + dy * dy)
    }

    // 求两点的夹角（弧度）
    public static radians4point(ax, ay, bx, by): number {
        return Math.atan2(ay - by, bx - ax)
    }

    // 求圆上一个点的位置
    public static pointAtCircle(px, py, radians, radius): number {
        return px + Math.cos(radians) * radius, py - Math.sin(radians) * radius
    }

    // 求线段上与指定点距离最近的点
    public static pointAtLineToPoint(px, py, ax, ay, bx, by):Object {
        let dx = bx - ax
        let dy = by - ay

        let som = dx * dx + dy * dy
        let u = ((px - ax) * dx + (py - ay) * dy) / som
        if (u > 1) {
            u = 1
        }
        else if (u < 0) {
            u = 0
        }

        return {x:ax + u * dx, y:ay + u * dy};
    }

    // 角度转换为弧度
    public static degrees2radians(degrees: number): number {
        return degrees * this.pi_d_180;
    }

    // 弧度转换为角度
    public static radians2degrees(radians: number): number {
        return radians * this.pi_180_d
    }
}