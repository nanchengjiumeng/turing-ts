"use strict";
/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */
/// <reference path="./winax.d.ts" />
/// <reference path="./index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTuring = void 0;
const { execSync } = require('child_process');
const winax = require('winax');
function createTuring(dllPath) {
    try {
        return new winax.Object('TURING.FISR');
    }
    catch (e) {
        execSync(`regsvr32 ${dllPath} /s`);
        return new winax.Object('TURING.FISR');
    }
}
exports.createTuring = createTuring;
