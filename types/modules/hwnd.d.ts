/** 窗口句柄  */
import { hwnd, mode, WindowSize } from './basic'
export default interface Hwnd {
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
	/**
	 * 获取指定屏幕坐标下的窗口句柄
	 * @param x 整数型，屏幕X坐标
	 * @param y 整数型，屏幕Y坐标
	 * @returns 整数型，坐标下句柄
	 */
	Window_GetPointHwnd(x: number, y: number): hwnd;
	/**
	 * 移动指定窗口句柄在屏幕上的位置
	 * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
	 * @param iLeft 整数型，可选，屏幕X坐标(默认0)
	 * @param iTop 整数型，可选，屏幕Y坐标(默认0)
	 * @param width 整数型，可选，窗口宽度(默认0)
	 * @param height 整数型，可选，窗口高度(默认0)
	 */
	Window_MoveTo(iHwnd?: hwnd, iLeft?: number, iTop?: number, width?: number, height?: number): void;
	/**
	 * 锁定指定窗口句柄在屏幕上的位置
	 * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
	 * @param Flag 布尔型，可选，锁定状态(默认锁定True)
	 */
	Window_Lock(iHwnd?: hwnd, Flag?: boolean): void;
	/**
	 * 根据类名或者标题来枚举所有顶层窗口句柄
	 * @param iClass 字符串型，模糊筛选条件：窗口类名(空填"")
	 * @param iTitle 字符串型，模糊筛选条件：窗口标题(空填"")
	 * @returns 字符串型，所有顶层窗口句柄(格式：句柄|句柄|…)
	 */
	Window_Enum(iClass?: string, iTitle?: string): hwnd;
	/**
	 * 根据类名或者标题来枚举指定窗口的所有子句柄
	 * @param iHwnd 整数型，窗口句柄(默认0:使用关联窗口句柄)
	 * @param iClass 字符串型，模糊筛选条件：窗口类名(空填"")
	 * @param iTitle 字符串型，模糊筛选条件：窗口标题(空填"")
	 * @returns 字符串型，所有顶层窗口句柄(格式：句柄|句柄|…)
	 */
	Window_EnumChild(iHwnd?: hwnd, iClass?: string, iTitle?: string): Array<hwnd>;
	/**
	 * 对窗口进行假激活后并获得焦点（同鼠标点击窗口后的效果，但不会置前）
	 * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
	 */
	Window_FakeActive(iHwnd?: hwnd): void;

}