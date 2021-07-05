/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */
/// <reference path="./winax.d.ts" />
/// <reference path="./index.d.ts" />

const { execSync } = require('child_process');
const winax = require('winax');

export function createTuring(dllPath: string): Turing {
	try {
		return new winax.Object('TURING.FISR');
	} catch (e) {
		execSync(`regsvr32 ${dllPath} /s`);
		return new winax.Object('TURING.FISR');
	}
}