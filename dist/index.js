"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */
/// <reference path="./createTuring/index.d.ts" />
const path = require("path");
const createTuring_1 = require("./createTuring");
const dllPath = path.resolve(__dirname, '../helper/turing@3.1.0/TURING/TURING.dll');
function default_1() {
    return createTuring_1.createTuring(dllPath);
}
exports.default = default_1;
