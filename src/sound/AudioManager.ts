/*
* name;
*/
class AudioManager {
    static _isMute = false;
    static _isMuteBg = false;
    static _isMuteEffect = false;

    static _volumeBg = 1;
    static _volumeEffect = 1;

    /**
         * 获取初始音乐基础信息，存储在本地浏览器中
         */
    static initData() {
        var isMuteBg = Laya.LocalStorage.getItem("isMuteBg");
        this._isMuteBg = isMuteBg === "true" ? true : false;
        var isMuteEffect = Laya.LocalStorage.getItem("isMuteEffect");
        this._isMuteEffect = isMuteEffect === "true" ? true : false;
        var isMute = Laya.LocalStorage.getItem("isMute");
        this._isMute = isMute === "true" ? true : false;

        var volumeBg = Laya.LocalStorage.getItem("volumeBg");
        this._volumeBg = volumeBg ? parseFloat(volumeBg) : 1;
        var volumeEffect = Laya.LocalStorage.getItem("volumeEffect");
        this._volumeEffect = volumeEffect ? parseFloat(volumeEffect) : 1;

        Laya.SoundManager.musicMuted = this._isMuteBg;
        Laya.SoundManager.soundMuted = this._isMuteEffect;
        Laya.SoundManager.muted = this._isMute;
        Laya.SoundManager.musicVolume = this._volumeBg;
        Laya.SoundManager.soundVolume = this._volumeEffect;
    }

    /**
     * api方法 SoundManager
     */
    static addChannel(channel) {
        Laya.SoundManager.addChannel(channel);
    }
    static destroySound(url) {
        Laya.SoundManager.destroySound(url);
    }
    static playMusic(url, loops, complete, startTime) {
        (loops === void 0) && (loops = 0);
        (complete === void 0) && (complete = null);
        (startTime === void 0) && (startTime = 0);
        Laya.SoundManager.playMusic(url, loops, complete, startTime);
    }
    static playSound(url, loops, complete, soundClass, startTime) {
        (loops === void 0) && (loops = 1);
        (complete === void 0) && (complete = null);
        (soundClass === void 0) && (soundClass = null);
        (startTime === void 0) && (startTime = 0);
        Laya.SoundManager.playSound(url, loops, complete, soundClass, startTime);
    }
    static removeChannel(channel) {
        Laya.SoundManager.removeChannel(channel);
    }
    static setMusicVolume(volume) {
        Laya.SoundManager.setMusicVolume(volume);
    }
    static setSoundVolume(volume) {
        Laya.SoundManager.setSoundVolume(volume);
    }
    static stopAll() {
        Laya.SoundManager.stopAll();
    }
    static stopAllSound() {
        Laya.SoundManager.stopAllSound();
    }
    static stopMusic() {
        Laya.SoundManager.stopMusic();
    }
    static stopSound(url) {
        Laya.SoundManager.stopSound(url);
    }
    /**
     * 拓展api
     */
    static save() {
        Laya.LocalStorage.setItem("isMute", this._isMute.toString());
        Laya.LocalStorage.setItem("isMuteBg", this._isMuteBg.toString());
        Laya.LocalStorage.setItem("isMuteEffect", this._isMuteEffect.toString());
        Laya.LocalStorage.setItem("volumeBg", this._volumeBg.toString());
        Laya.LocalStorage.setItem("volumeEffect", this._volumeEffect.toString());
    }
}