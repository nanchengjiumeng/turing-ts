/*
 * @Author: your name
 * @Date: 2021-07-06 10:07:38
 * @LastEditTime: 2021-07-06 10:10:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-turing/helper/params/watch.js
 */
var watch = require('node-watch');
var path = require('path')
var { execSync } = require('child_process')
var _p = path.resolve(__dirname, './params.js')
watch(_p, {}, () => {
	console.log(execSync('node ' + _p).toString())
})