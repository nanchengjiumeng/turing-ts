/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */
/// <reference path="../types/winax.d.ts"/>
export * as KeyCode from './Keycode'
const { execSync } = require('child_process');
import winax = require('winax');
import * as path from 'path'
import { Turing } from '../types/turing';
import Fyl from './fyl'
export function createDllBridge(dllPath: string): Turing {
	try {
		return new winax.Object('TURING.FISR') as Turing;
	} catch (e) {
		execSync(`regsvr32 ${dllPath} /s`);
		return new winax.Object('TURING.FISR') as Turing;
	}
}

// const dllPath: string = path.resolve(__dirname, '../helper/turing@3.1.0/TURING/TURING.dll')
const dllPath: string = path.resolve(__dirname, "../dll/3.0.7/TURING.dll");
export function createTuring(path?: string): Turing {
	return createDllBridge(path || dllPath)
}

export const createFyl = Fyl
