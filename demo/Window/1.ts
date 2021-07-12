import path = require('path');
import { createTuring } from "../../src/turing";

const TURING = createTuring()

// const hwnd = TURING.Window_FindHwnd("地下城与勇士", "")

// TURING.Link(hwnd)

// TURING.Window_MoveTo(0, 0)

TURING.Lib_Create('宋体', 9)
function findCharName() {
	TURING.Pixel_FromScreen(0, 0, 800, 570)
	TURING.Filter_Binaryzation("255-255")
	TURING.Filter_Binaryzation("255-255")
	TURING.Incise_FixedLocation(0, 0, 105, 25, 105, 1)
	const ret = TURING.FindText("仗剑旧城梦", 100).split(',')
	console.log({
		x: ret[0],
		y: ret[1]
	});
}

function wh() {
	setTimeout(() => {
		findCharName()
		wh()
	}, 500)
}

wh()