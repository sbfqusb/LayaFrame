/*
* name;
*/
enum EventType {
    UI_SHOW = 1,//ui 显示
    UI_HIDE,//ui 隐藏
    UI_CLOSE,//ui 关闭

    NETWORK_CON_OFF,//掉线
    NETWORK_CON_OK,//连接成功
    NETWORK_CON_FAIL,//连接失败
}

enum UiType{
    UI_LOGIN=1
}