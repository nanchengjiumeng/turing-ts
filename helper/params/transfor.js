const fs = require('fs')
const path = require('path')

const filename = path.resolve(__dirname, process.argv[2])
const str = fs.readFileSync(filename, {
	'encoding': 'utf-8'
})


function getTds(tagTr) {
	const match = tagTr.match(/<td>([\s\S]*?)<\/td>/g).map(tagTd => {
		return tagTd.replace('<td>', '').replace('</td>', '').replace('<br>', '')
	})
	return match[0]
}



function parseParam(str) {
	const match = str.match(/([^：]+)：(.+)，/)
	return {
		name: match[1],
		typeZh: match[2],
		type: match[2].includes('整数') ? 'number' : 'void',
		s: str.includes('可选') // 可选
	}
}

function params(s) {
	const ps = []
	const c = s.split(`\n`).map((sub, index) => {
		ps.push(parseParam(sub))
		return `* @param ${sub.replace('/t', '')}`
	}).filter((s) => s !== '').join(`\n`)
	return {
		c,
		ps
	}
}

function formatYfgs(yfgs, ps) {
	ps.forEach(tt => {
		yfgs = yfgs.replace(tt.name, `${tt.name}${tt.s ? '?' : ''}: ${tt.type}`)
	})
	return yfgs
}

function getCom(str) {
	const tagTRs = str.match(/<tr>([\s\S]*?)<\/tr>/g)
	const gnml = tagTRs.find(tagTr => tagTr.includes('命令功能'))
	const cssm = tagTRs.find(tagTr => tagTr.includes('参数说明'))
	const fhz = getTds(tagTRs.find(tagTr => tagTr.includes('返回值')))
	const yfgs = tagTRs.find(tagTr => tagTr.includes('语法格式')).match(/TURING.([^<]+)/)[1]
	const fhzType = parseParam(fhz)
	const paramsType = params(getTds(cssm))
	return `/**
	* ${getTds(gnml)}
	${paramsType.c}
	* @returns ${fhz}
 */
${formatYfgs(yfgs, paramsType.ps)}: ${fhzType.type};
`
}
console.log(getCom(str))


