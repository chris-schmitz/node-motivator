var Motivator = require('./index.js')
var motivator = new Motivator(4000)

motivator.duration.measure = 60
motivator.duration.unit = 'sec'

motivator.motivateMe()
