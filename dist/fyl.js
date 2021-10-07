"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi = require("ffi-napi");
const path = require("path");
const dllPath = path.resolve(__dirname, "../dll/msdk.dll");
function default_1() {
    const lib = ffi.Library(dllPath, {
        'M_Open': ['int', ['int']],
        'M_LeftClick': ['int', ['int', 'int']],
        'M_RightClick': ['int', ['int', 'int']],
        'M_MoveTo2': ['int', ['int', 'int', 'int']],
        'M_MoveTo3': ['int', ['int', 'int', 'int']],
        'M_ResolutionUsed': ['int', ['int', 'int', 'int']],
        'M_KeyPress': ['int', ['int', 'int', 'int']],
        'M_KeyDown': ['int', ['int', 'int']],
        'M_KeyUp': ['int', ['int', 'int']],
        'M_KeyState': ['int', ['int', 'int']],
    });
    const r = lib.M_Open(1);
    return {
        LeftClick: (count = 1) => {
            return lib.M_LeftClick(r, count);
        },
        RightClick: (count = 1) => {
            return lib.M_RightClick(r, count);
        },
        MoveTo2: (x, y) => {
            return lib.M_MoveTo2(r, x, y);
        },
        MoveTo3: (x, y) => {
            return lib.M_MoveTo3(r, x, y);
        },
        M_ResolutionUsed: (x, y) => {
            return lib.M_ResolutionUsed(r, x, y);
        },
        KeyPress: (keycode, num) => {
            return lib.M_KeyPress(r, keycode, num);
        },
        KeyDown: (keycode) => {
            return lib.M_KeyDown(r, keycode);
        },
        KeyUp: (keycode) => {
            return lib.M_KeyUp(r, keycode);
        },
        KeyState: (keycode) => {
            return lib.M_KeyState(r, keycode);
        },
    };
}
exports.default = default_1;
//# sourceMappingURL=fyl.js.map