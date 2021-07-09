/*
 * @Author: your name
 * @Date: 2021-07-06 09:37:52
 * @LastEditTime: 2021-07-06 10:07:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-turing/helper/params.js
 */
function p(s) {
	return s.split(`
	`).map((sub, index) => {
		return `${index === 0 ? '' : ' * '}@param ${sub.replace('/t', '')}`
	}).join(` 
	`)
}


const str =
	`Font：字符串型，系统中的字体名称|字体样式(默认0。数值：0正常，1粗体，2斜体。其他依次叠加数字)
	Size：整数型，字体的字号大小
	Text：字符串型，可选，设置字库内容，默认含有3500个汉字和英文数字符号。`

console.log(
	`/**
	 *
	 * ${p(str)}
	 * @returns 
	*/`
)

