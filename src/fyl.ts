import ffi = require('ffi-napi')
import * as path from 'path'
const dllPath = path.resolve(__dirname, "../dll/msdk.dll");


export default function (path?: string) {
	const lib = ffi.Library(path || dllPath, {
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
	})
	const r = lib.M_Open(1)

	return {
		LeftClick: (count: number = 1) => {
			return lib.M_LeftClick(r, count)
		},
		RightClick: (count: number = 1) => {
			return lib.M_RightClick(r, count)
		},
		MoveTo2: (x: number, y: number) => {
			return lib.M_MoveTo2(r, x, y)
		},
		MoveTo3: (x: number, y: number) => {
			return lib.M_MoveTo3(r, x, y)
		},
		M_ResolutionUsed: (x: number, y: number) => {
			return lib.M_ResolutionUsed(r, x, y)
		},
		KeyPress: (keycode: number, num: number) => {
			return lib.M_KeyPress(r, keycode, num)
		},
		KeyDown: (keycode: number) => {
			return lib.M_KeyDown(r, keycode)
		},
		KeyUp: (keycode: number) => {
			return lib.M_KeyUp(r, keycode,)
		},
		KeyState: (keycode: number) => {
			return lib.M_KeyState(r, keycode)
		},
	}
}





