var tapTempo = require('./')()

tapTempo.on('tempo', function(tempo){
  console.log(tempo)
})

setInterval(function(){
  tapTempo.tap()
}, 500)