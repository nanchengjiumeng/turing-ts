import { Turing } from './../../types/turing.d';
import turing = require('../../src/turing')

const TURING: Turing = turing.createTuring()

const version = TURING.Version()

console.log(version);

console.log(turing.KeyCode.KEYCODE_0);



