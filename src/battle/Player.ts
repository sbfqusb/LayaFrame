/*
* name;
*/
class Player {
    constructor() {

    }
    private property: Object;
    public x: number = 0;
    public y: number = 0;
    public mIsDestroy: boolean = false;//对象摧毁
    public CastSkill(skillId: number): void { }
    public tick(dt) { }
}