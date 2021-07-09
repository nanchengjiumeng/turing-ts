export type Version = string;
/**
 * 字符串型，可选，关联模式。
	 默认：普通窗口后台"normal"，
	 普通前台窗口"window"，
	 3D游戏窗口后台"gdi"(切换主题为Aero再试)，
	 Aero主题缩略图后台"aero"，
	后台键鼠模式"km"。
*/
export type mode = 'normal' | 'window' | 'gdi' | 'aero' | 'km';
export type WindowSize = string; // 左,上,右,下
export type Position = string; // x,y
export type ImageDataString = string; // 宽|高|图像数据(b,g,r,a,b,g,r,a,…)
export type ImageSize = string; // 宽,高
export type hwnd = number; // 整数型，窗口句柄(窗口不能最小化)
export type CharNum = number // 整数型，字符切割数量(最大下标值)
export type CharData = string // 字符串型，字符切割数据信息，格式：左,上,宽,高,点阵|左,上,宽,高,点阵|…）
