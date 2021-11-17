"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFyl = exports.createTuring = exports.createDllBridge = exports.KeyCode = void 0;
/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */
/// <reference path="../types/winax.d.ts"/>
exports.KeyCode = require("./Keycode");
const { execSync } = require('child_process');
const winax = require("winax");
const path = require("path");
const fyl_1 = require("./Fly/fyl");
function createDllBridge(dllPath) {
    try {
        return new winax.Object('TURING.FISR');
    }
    catch (e) {
        execSync(`regsvr32 ${dllPath} /s`);
        return new winax.Object('TURING.FISR');
    }
}
exports.createDllBridge = createDllBridge;
// const dllPath: string = path.resolve(__dirname, '../helper/turing@3.1.0/TURING/TURING.dll')
const dllPath = path.resolve(__dirname, "../dll/3.0.7/TURING.dll");
function createTuring(path) {
    return createDllBridge(path || dllPath);
}
exports.createTuring = createTuring;
exports.createFyl = fyl_1.default;
//# sourceMappingURL=turing.js.map