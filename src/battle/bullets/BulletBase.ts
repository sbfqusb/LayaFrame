/*
* name;
*/
class BulletBase{
    private mSprite:Sprite;
    private mTarget:Player;
    private mSource:Player;
    private mDelay:number;
    private mFlag:number = 0;
    private mStartX:number;
    private mStartY:number;
    private mPrevX:number;
    private mPrevY:number;
    private mTime:number = 0;
    private mOver:boolean = false;
    private mIsBegin:boolean = false;
    private mHit:boolean = false;
    constructor(source:Player,target:Player,delay:number){
        this.mSource = source;
        this.mTarget = target;
        this.mDelay = delay;
    }
    public getView(){
        return this.mSprite;
    }
    public removeView(){
        this.mSprite.removeSelf();
    }
    public tick(dt:number){
        if (!this.mIsBegin) {
            if (this.mDelay<=0) {
                this.fireBegin();
            }else{
                this.mDelay = this.mDelay-dt;
            }
        }
        this.mTime = this.mTime-dt;
        this.tickBullet(dt);
    }
    public fireBegin(){
        if (this.mSource.mIsDestroy) {
            this.mTime = 0;
            this.mOver = true;
            this.mIsBegin = false;
            return;
        }
        this.mIsBegin = true;
    }
    public tickBullet(dt){

    }
    public checkHit():boolean{
        if (!this.mHit) {
            this.miss();
            return false;
        }
        let target = this.mTarget;
        if (target && target.mIsDestroy) {
            this.miss();
            return false;
        }
        let x = this.mSprite.x;
        let y = this.mSprite.y;
        if (Math2d.dist(x,y,target.x,target.y)<1) {
            
        }
        return false;
    }
    public hit(){

    }
    public miss(){

    }
    public isOver(){
        return this.mOver;
    }
}