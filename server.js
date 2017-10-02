const express = require('express')
const app = express()
const path = require('path')
const Timer = require('timer.js')
var bodyParser = require('body-parser')
var port = 3000

app.listen(port, function () {
  console.log('We are listening on port ' + port)
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/num', function (req, res) {
  var num = req.body.value
  console.log('received: ' + num);  

  var xhrTimer = new Timer(); 

  xhrTimer.start(num).on('end', function() {
    console.log('timer ends');
    return res.end('done')
    
  })
})
