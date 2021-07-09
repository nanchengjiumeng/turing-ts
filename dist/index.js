"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */
const path = require("path");
const createTuring_1 = require("./createTuring");
const dllPath = path.resolve(__dirname, '../helper/turing@3.1.0/TURING/TURING.dll');
function create() {
    return createTuring_1.createTuring(dllPath);
}
exports.default = create;
//# sourceMappingURL=index.js.map