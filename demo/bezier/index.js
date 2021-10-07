const Bez = require('bezier-js')

const r = Bez.Bezier.cubicFromPoints(
	{
		x: 0,
		y: 0
	},
	{
		x: 5,
		y: 2
	},
	{
		x: 100,
		y: 0
	},
)

console.log(r)