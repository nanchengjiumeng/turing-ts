"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTuring = void 0;
/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */
const { execSync } = require('child_process');
const winax = require("winax");
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
//# sourceMappingURL=index.js.map