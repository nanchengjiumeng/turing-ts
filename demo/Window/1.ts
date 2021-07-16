import { TURING } from './t';
import { findCharacterFootCenter, findQianJinInZHYD } from "./findObject";
import * as KeyCodes from '@wordpress/keycodes'
const h = TURING.Window_FindHwnd('地下城与勇士', '')
console.log(h);

TURING.Link(h, 'window')

function wh() {
	const characterFootPosition = findCharacterFootCenter()
	const qianJinPoistion = findQianJinInZHYD()


	console.log('人物:', characterFootPosition);
	console.log('前进:', qianJinPoistion);
	if (qianJinPoistion.x > characterFootPosition.x) {
		TURING.KM_KeyDown(96)
		setTimeout(() => {
			TURING.KM_KeyUp(96)
			wh()
		}, 1999)
	}

}
wh()