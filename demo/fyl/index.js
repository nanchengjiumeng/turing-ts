const { createFyl } = require('../../dist/turing')

const fyl = createFyl()
const a = fyl.M_ResolutionUsed(2560, 1440)
fyl.MoveTo3(100, 100)