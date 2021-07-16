const path = require('path')
const winax = require('winax')

const objdll = new winax.Object('msdk.dll')

const hdl = objdll.M_Open(1)
console.log("open handle = " + hdl)
// #键盘单击
const res = objdll.M_KeyPress(hdl, 4, 2)
// #打开
console.log(
	"M_KeyPress =  " + res)