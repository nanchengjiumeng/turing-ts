const fs = require("fs")

const str = require('./keystr_a')

function splitSentence() {
	const sentences = str.split('\n')
	const ret = []
	sentences.forEach((sentence, idx) => {
		const match = sentence.match(/'([^ ]+) +(.+) +(\d+)/)
		if (match) {
			ret.push(`// ${match[2]}\nexport const ${match[1]}: number = ${match[3]}; \n`)
		} else {
			ret.push('\n')
		}
	})
	return ret
}


const ret = splitSentence()

const fd = fs.openSync('./Keycode.ts', 'a+')
ret.map(r => {
	fs.writeSync(fd, r)
})