const fs = require('fs')
const path = require('path')



function getTds(tagTr) {
	const match = tagTr.match(/<td>([\s\S]*?)<\/td>/g).map(tagTd => {
		return tagTd.replace('<td>', '').replace('</td>', '').replace('<br>', '')
	})
	return match[0]
}



function parseParam(str) {
	if (str.includes('无')) {
		return {
			name: '无',
			typeZh: '空',
			type: 'void',
			s: false // 可选
		}
	}
	const match = str.match(/([^：]+)：(.+)，/)
	if (match) {
		return {
			name: match[1],
			typeZh: match[2],
			type: match[2].includes('整数') ? 'number' : match[2].includes('字符串') ? 'string' : match[2].includes('布尔') ? 'boolean' : '1231231221312',
			s: str.includes('可选') // 可选
		}
	} else {
		return {
			name: str,
			typeZh: '字符串型',
			type: 'string'
		}
	}

}

function params(s) {
	const ps = []
	const c = s.split(`\n`).filter((s) => s !== '').map((sub, index) => {
		ps.push(parseParam(sub))
		return `* @param ${sub.replace('/t', '')}`
	}).join(`\n`)
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


function readDocProductDTS(name) {
	const filename = path.resolve(__dirname, '../turing@3.1.0/documentation/' + name)
	const str = fs.readFileSync(filename, {
		'encoding': 'utf-8'
	})
	return getCom(str)

}

const files = fs.readdirSync(path.resolve(__dirname, '../turing@3.1.0/documentation'))
	.filter(p => p.match('.html'))
	.filter(p => !p.includes('Index-Created-By-Easy-CHM')
		&& !p.includes('New')
		&& !p.includes('index')
		&& !p.includes('About')
		&& !p.includes('免责声')
		&& !p.includes('安卓键码表')
	)



const fd = fs.openSync('./TEST.d.ts', 'a+')
fs.writeSync(fd, 'interface a {\n')
files.forEach((fileName) => {
	try {
		fs.writeSync(fd, readDocProductDTS(fileName))

	} catch (e) {
		console.log(fileName)
	}
})
fs.writeSync(fd, '}')

