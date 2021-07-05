/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */
/// <reference path="./createTuring/index.d.ts" />
import * as path from 'path'
import { createTuring } from './createTuring'
const dllPath: string = path.resolve(__dirname, '../helper/turing@3.1.0/TURING/TURING.dll')
export default function (): Turing {
  return createTuring(dllPath)
}