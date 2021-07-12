/// <reference path="../types/winax.d.ts" />
/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */
export * as KeyCode from './Keycode';
import { Turing } from '../types/turing';
export declare function createDllBridge(dllPath: string): Turing;
export declare function createTuring(): Turing;
