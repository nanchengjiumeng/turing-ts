import { createTuring } from "../src/turing";

const TURING = createTuring()

// const a = TURING.Window_FindHwnd('[风云盾]记忆合击01区=16号新服', '')
const a = TURING.Link(263018, 'km')

function abc() {
	setTimeout(() => {
		TURING.KM_MoveTo(62, 625)
		TURING.KM_LeftClick()
		abc()
	}, 2000)
}

abc()




