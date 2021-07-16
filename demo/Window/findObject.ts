import { loadLibSong, loadLibZhiHui, TURING } from './t';

interface Position {
	x: number,
	y: number
}

export function str2Position(positionStr: string) {
	const ret = positionStr.split(',').map(Number)
	return ({
		x: ret[0],
		y: ret[1]
	});
}

export function findCharacterNameStart(): Position {
	loadLibSong()
	TURING.Pixel_FromScreen(0, 0, 800, 570)
	TURING.Filter_Binaryzation("255-255")
	TURING.Filter_Binaryzation("255-255")
	TURING.Incise_FixedLocation(0, 0, 105, 25, 105, 1)
	const ret = TURING.FindText("仗剑旧城梦", 100)
	return str2Position(ret)
}

export function findCharacterFootCenter(): Position {
	const characterNamePosition = findCharacterNameStart()
	// 276 485
	return {
		x: characterNamePosition.x + 16,
		y: characterNamePosition.y + 127
	}
}

export function findQianJinInZHYD(): Position {
	loadLibZhiHui()
	TURING.Pixel_FromScreen(566, 242, 800, 503)
	TURING.Filter_Posterization(6)
	TURING.Filter_Binaryzation("0-241")
	TURING.Incise_FixedLocation(118, 73, 22, 22, 13, 1)
	const ret = TURING.FindText("前|进", 85)
	const position = str2Position(ret)
	if (position.x >= 0, position.y > 0) {
		return {
			x: position.x + 566,
			y: position.y + 242
		}
	} else {
		return {
			x: -1,
			y: -1
		}
	}
}