/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */
import * as path from 'path'
import { Turing } from '../typings/turing'
import { createTuring } from './createTuring'
const dllPath: string = path.resolve(__dirname, '../helper/turing@3.1.0/TURING/TURING.dll')
export default function create(): Turing {
  return createTuring(dllPath)
}