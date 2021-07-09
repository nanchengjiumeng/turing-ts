import { Turing } from "../types/turing"

const turing = require('../dist/turing')

const TURING: Turing = turing.createTuring()


TURING.Pixel_FromScreen(0, 0, 200, 100)
TURING.Pixel_Preview()

