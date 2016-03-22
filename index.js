var motivations = require('motivations')
var notifier = require('node-notifier')
var Repeat = require('repeat')

function Motivator(timeSpanMeasure, timeSpanUnit){
    // The span of time between motivational messages
    this.timeSpan = {}
    this.timeSpan.measure = timeSpanMeasure || 5
    this.timeSpan.unit = timeSpanUnit || 'mins' // 'ms', 'sec', 'min', 'hours', etc.
    // See the unitsMap in the repeat library for all of the options: https://github.com/bjoerge/repeat.js/blob/master/lib/repeat.js
    this.duration = {}
    this.duration.measure = 2
    this.duration.unit = 'mins'
}

Motivator.prototype.motivateMe = function (){
    Repeat(this.getMotivation)
        .every(this.timeSpan.measure, this.timeSpan.Unit)
        .for(this.duration.measure, this.duration.unit)
        .start()
},

Motivator.prototype.getMotivation = function (){

    var motivation = motivations[Math.floor(Math.random() * motivations.length )]

    notifier.notify({
        title: 'You can do it!',
        message: motivation,
        open: 'https://github.com/NodeTogether/motivations'
    });
    return motivation
}


module.exports = Motivator
