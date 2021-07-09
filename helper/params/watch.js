/*
 * @Author: your name
 * @Date: 2021-07-06 10:07:38
 * @LastEditTime: 2021-07-06 10:10:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-turing/helper/params/watch.js
 */
var watch = require('node-watch');
var { execSync } = require('child_process')

watch('./params.js', {}, () => {
	console.log(execSync('node ./params.js').toString())
})