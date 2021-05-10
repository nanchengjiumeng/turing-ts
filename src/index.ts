/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */

type hwnd = number;
type mode = string;

interface WindowSize {
  left: number; // 窗口左上角X坐标
  top: number, // 窗口左上角Y坐标
  right: number, // 窗口右下角X坐标
  bottom: number // 窗口右下角Y坐标
}

export class Turing {
  private turing: any;
  constructor() {
    this.turing = {}
  }

  /**  窗口句柄 START */


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
  Link(hwnd: hwnd, mode: mode = "normal"): void {
    this.turing.Link(hwnd, mode)
  }

  /**
   * 解除指定窗口句柄的关联
   * @param mode 字符串型，可选，默认空（"km"取消后台键鼠模式）
   */
  UnLink(mode: mode = ""): void {
    this.turing.UnLink(mode)
  }


  /**
   * 查找窗口类名或者标题得到窗口句柄
   * @param iClass 字符串型，窗口类名(空填"")
   * @param iTitle 字符串型，窗口标题(空填"")
   * @returns 整数型，窗口句柄
   */
  Window_FindHwnd(iClass: string, iTitle: string): hwnd {
    return this.Window_FindHwnd(iClass, iTitle)
  }

  /**
   * 得到指定关联句柄的窗口屏幕位置区域
   * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
   * @returns {WindowSize} 
   */
  Window_GetSize(iHwnd: hwnd = 0): WindowSize {
    const winSize: string = this.turing.Window_GetSize(iHwnd)
    const [left, top, right, bottom] = winSize.split(',').map(s => Number(s))
    return {
      left,
      top,
      right,
      bottom
    }
  }

  /**
   * 指定任意窗口句柄即可得到窗口最顶级的祖父句柄
   * @param iHwnd 整数型，可选，窗口内任意元素句柄(默认0:使用关联窗口句柄)
   */
  Window_GetAncestor(iHwnd: hwnd = 0): hwnd {
    return this.turing.Window_GetAncestor(iHwnd)
  }

  /**
   * 获取指定屏幕坐标下的窗口句柄
   * @param x 整数型，屏幕X坐标
   * @param y 整数型，屏幕Y坐标
   * @returns 整数型，坐标下句柄
   */
  Window_GetPointHwnd(x: number, y: number): hwnd {
    return this.turing.Window_GetPointHwnd(x, y)
  }

  /**
   * 移动指定窗口句柄在屏幕上的位置
   * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
   * @param iLeft 整数型，可选，屏幕X坐标(默认0)
   * @param iTop 整数型，可选，屏幕Y坐标(默认0)
   * @param width 整数型，可选，窗口宽度(默认0)
   * @param height 整数型，可选，窗口高度(默认0)
   */
  Wndow_MoveTo(iHwnd: hwnd = 0, iLeft: number = 0, iTop: number = 0, width: number = 0, height: number = 0): void {
    this.turing.Window_MoveTo(iHwnd, iLeft, iTop, width, height)
  }

  /**
   * 锁定指定窗口句柄在屏幕上的位置
   * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
   * @param Flag 布尔型，可选，锁定状态(默认锁定True)
   */
  Window_Lock(iHwnd: hwnd = 0, Flag: boolean = true): void {
    this.turing.Window_Lock(iHwnd, Flag)
  }

  /**
   * 根据类名或者标题来枚举所有顶层窗口句柄
   * @param iClass 字符串型，模糊筛选条件：窗口类名(空填"")
   * @param iTitle 字符串型，模糊筛选条件：窗口标题(空填"")
   * @returns 字符串型，所有顶层窗口句柄(格式：句柄|句柄|…)
   */
  Window_Enum(iClass: string = "", iTitle: string = ""): hwnd {
    return this.turing.Window_Enum(iClass, iTitle)
  }

  /**
   * 根据类名或者标题来枚举指定窗口的所有子句柄
   * @param iHwnd 整数型，窗口句柄(默认0:使用关联窗口句柄)
   * @param iClass 字符串型，模糊筛选条件：窗口类名(空填"")
   * @param iTitle 字符串型，模糊筛选条件：窗口标题(空填"")
   * @returns 字符串型，所有顶层窗口句柄(格式：句柄|句柄|…)
   */
  Window_EnumChild(iHwnd: hwnd = 0, iClass: string = "", iTitle: string = ""): Array<hwnd> {
    return this.turing.Window_EnumChild(iHwnd, iClass, iTitle).split(',').map(s => Number(s));
  }

  /**
   * 对窗口进行假激活后并获得焦点（同鼠标点击窗口后的效果，但不会置前）
   * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
   */
  Window_FakeActive(iHwnd: hwnd = 0): void {
    this.Window_FakeActive(iHwnd)
  }

  /** 窗口句柄 END */



  /**
   * 获取当前已注册的插件完整路径
   * @returns 字符串型，插件完整路径
   */
  Path(): string {
    return this.turing.Path()
  }

  /**
   * 当前插件版本号
   * @returns  当前插件版本号
   */
  Version(): string {
    return this.turing.Version()
  }
}

