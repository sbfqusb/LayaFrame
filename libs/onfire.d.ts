declare class onfire {
    static fire(eventName:number,...arr:any[]);
    static fireSync(eventName:number,...arr:any[]);
    static on(eventName:number,...array:any[]);
    static one(eventName:number,...array:any[])
    static un(eventName:number|any);
}