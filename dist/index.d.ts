/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */
declare type hwnd = number;
declare type mode = string;
interface WindowSize {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
export declare class Turing {
    private turing;
    constructor();
    /** 窗口句柄 START */
    /**
     * 关联指定的窗口句柄
     * @param hwnd 整数型，窗口句柄(窗口不能最小化)
     * @param mode 字符串型，可选，关联模式。
    默认：普通窗口后台"normal"，
    普通前台窗口"window"，
    3D游戏窗口后台"gdi"(切换主题为Aero再试)，
    Aero主题缩略图后台"aero"，
    后台键鼠模式"km"。
     */
    Link(hwnd: hwnd, mode?: mode): void;
    /**
     * 解除指定窗口句柄的关联
     * @param mode 字符串型，可选，默认空（"km"取消后台键鼠模式）
     */
    UnLink(mode?: mode): void;
    /**
     * 查找窗口类名或者标题得到窗口句柄
     * @param iClass 字符串型，窗口类名(空填"")
     * @param iTitle 字符串型，窗口标题(空填"")
     * @returns 整数型，窗口句柄
     */
    Window_FindHwnd(iClass: string, iTitle: string): hwnd;
    /**
     * 得到指定关联句柄的窗口屏幕位置区域
     * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
     * @returns {WindowSize}
     */
    Window_GetSize(iHwnd?: hwnd): WindowSize;
    /**
     * 指定任意窗口句柄即可得到窗口最顶级的祖父句柄
     * @param iHwnd 整数型，可选，窗口内任意元素句柄(默认0:使用关联窗口句柄)
     */
    Window_GetAncestor(iHwnd?: hwnd): hwnd;
    /** 窗口句柄 END */
    /**
     * 获取当前已注册的插件完整路径
     * @returns 字符串型，插件完整路径
     */
    Path(): string;
    /**
     * 当前插件版本号
     * @returns  当前插件版本号
     */
    Version(): string;
}
export {};
