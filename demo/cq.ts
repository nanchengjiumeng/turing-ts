import { createTuring } from "../src/turing";

const TURING = createTuring()

// const a = TURING.Window_FindHwnd('[风云盾]记忆合击01区=16号新服', '')
TURING.Link(591266, 'km')

TURING.KM_MoveTo(15, 30)
setTimeout(() => {
	TURING.KM_LeftClick()
}, 1000)

