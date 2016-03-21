var motivations = require('motivations')
var notifier = require('node-notifier')
var Repeat = require('repeat')

function Motivator(interval){
    this.interval = interval || 5000
}

Motivator.prototype.motivateMe = function (){
    Repeat(this.getMotivation).every(this.interval, 'ms').for(2, 'minutes').start.in(0, 'sec')
},

Motivator.prototype.getMotivation = function (){

    var motivation = motivations[Math.floor(Math.random() * motivations.length )]

    notifier.notify({
        title: 'You can do it!',
        message: motivation
    });
    return motivation
}

module.exports = Motivator
