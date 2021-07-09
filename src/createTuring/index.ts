/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */
const { execSync } = require('child_process');
import winax = require('winax');
import { Turing } from '../../typings/turing';
export function createTuring(dllPath: string): Turing {
	try {
		return new winax.Object('TURING.FISR') as Turing;
	} catch (e) {
		execSync(`regsvr32 ${dllPath} /s`);
		return new winax.Object('TURING.FISR') as Turing;
	}
}