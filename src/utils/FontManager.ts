/*
* name;
*/
class FontManager {
    static _fontCache: object = {};
    /**
    * 注册纹理字体
    * @param fontUrl配置文件      {string}
    * @param fontPngUrl纹理地址   {string}
    * @param fontName   {string}
    */
    static register(fontUrl: string, fontPngUrl: string, fontName: string) {
        if (this._fontCache && this._fontCache[fontName]) {
            return;
        }

        var fontFntData = Laya.Loader.getRes(fontUrl);
        var fontPngData = Laya.Loader.getRes(fontPngUrl);
        if (!fontFntData || !fontPngData) {
            LOG("注册纹理字体文件未加载！" + fontUrl + "\t" + fontPngUrl);
        }

        var bitmapFont = new Laya.BitmapFont();
        bitmapFont.parseFont(fontFntData, fontPngData);
        Laya.Text.registerBitmapFont(fontName, bitmapFont);

        if (!this._fontCache) {
            this._fontCache = {};
        }
        this._fontCache[fontName] = true;
    }

    /**
     * 注销纹理字体
     * @param fontName   {string}
     */
    static unregister(fontName: string) {
        if (this._fontCache && this._fontCache[fontName]) {
            delete this._fontCache[fontName];
        }
    }

    /**
     * 查看是否已经注册该字体
     * @param fontName   {string}
     */
    static isRegister(fontName: string) {
        if (this._fontCache && this._fontCache[fontName]) {
            return true;
        }
        return null;
    }
}