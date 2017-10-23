/*
* name;
*/
class BattleMgr{
    public static readonly Instance: BattleMgr = new BattleMgr();//单例模式
    private BattleMgr() {
        Laya.timer.frameLoop(1, this, this.tick);//每帧执行一次
     }
    private mBullets:Array<BulletBase>=[];
    public CastSkill(src,des):void{}
    public addBullet(bullet:BulletBase){
        this.mBullets.push(bullet);
    }
    public tick(){
        let detal = Laya.timer.delta;
        //处理子弹
        for (var index = this.mBullets.length-1; index >=0; index--) {
            var Bullet = this.mBullets[index];
            Bullet.tick(detal); 
            if (Bullet.isOver()) {
                if (Bullet.checkHit()) {
                    
                } else {
                    
                }
                Bullet.removeView();
                this.mBullets.splice(index,1);
            }
            
        }
    }
    public clearData(){
        this.mBullets.splice(0,this.mBullets.length)
    }
}