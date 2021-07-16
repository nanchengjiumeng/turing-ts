import path = require('path')
import { createTuring } from "../../src/turing";

export const TURING = createTuring()


export function loadLibSong() {
	TURING.Lib_Create('宋体', 9)
}

export function loadLibZhiHui() {
	TURING.Lib_Load(path.resolve(__dirname, '../../helper/tools/虹鱼图灵识别（字库工具）/识别库/电脑端/zhihui.lib'))
}