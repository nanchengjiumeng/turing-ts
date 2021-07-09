import CR from './modules/cr/cr.d';
import Hwnd from './modules/hwnd.d'
export interface Turing extends Hwnd, CR {
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





