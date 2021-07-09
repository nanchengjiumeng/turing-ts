import create from '../dist/index'
import { Turing } from '../typings/turing';

const TURING: Turing = create()


TURING.Pixel_FromScreen(0, 0, 200, 100)
TURING.Pixel_Preview()