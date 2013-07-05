var EventEmitter = require('events').EventEmitter

module.exports = function(){
  var tapTempo = new EventEmitter()

  var timeout = 2000

  var times = []
  var lastTime = null
  var lastDifference = null

  tapTempo.tap = function(){
    var time = Date.now()
    if (lastTime){
      lastDifference = time - lastTime
      times.push(lastDifference)
      refresh()
    }
    lastTime = time
    beginTimeout()
  }

  function refresh(){
    if (times.length > 2){
      var average = times.reduce(function(result, t){ return result += t }) / times.length
      var bpm = (1 / (average / 1000)) * 60
      tapTempo.emit('tempo', bpm)
    }
  }

  var timer = null
  function beginTimeout(){
    clearTimeout(timer)
    timer = setTimeout(function(){
      times = [lastDifference]
      lastTime = null
    }, timeout)
  }

  return tapTempo
}