tap-tempo
===

Estimates BPM from tap events. 

## Install

```bash
$ npm install tap-tempo
```

## Example

```js
var tapTempo = require('tap-tempo')()

// simulate tap at 120bpm
setTimeout(function(){
  tapTempo.tap()
}, 500)

tapTempo.on('tempo', function(tempo){
  console.log('estimated tempo:', tempo)
})
```