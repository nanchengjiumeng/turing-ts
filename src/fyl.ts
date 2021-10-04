import ffi = require('ffi-napi')
import * as path from 'path'
const dllPath = path.resolve(__dirname, "../dll/msdk.dll");


export default function () {
	const lib = ffi.Library(dllPath, {
		'M_Open': ['int', ['int']],
		'M_LeftClick': ['void', ['int', 'int']],
		'M_RightClick': ['void', ['int', 'int']]
	})
	const r = lib.M_Open(1)

	return {
		LeftClick: (count: number = 1) => {
			return lib.M_LeftClick(r, count)
		},
		RightClick: (count: number = 1) => {
			return lib.M_RightClick(r, count)
		},
		lib
	}
}





