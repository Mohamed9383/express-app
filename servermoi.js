const express = require('express')
const hbs = require('hbs')
const app = express()
app.get('/', function(req, res) {
    if ( (hour_now>8)&&(hour_now<10) ) res.sendFile(__dirname + '/public/home.html');
    else res.sendFile(__dirname + '/public/outOfService.html');
  })

  app.use(express.static(__dirname + "/public"));
  
// app.set('view engine', hbs)

// app.get('/user_connected', (req, res)=>{
//     res.render('user.hbs', {name: 'anis'})
// })


// app.use(express.static(__dirname+'/public'))

// app.use(date = (req, res, next) => {
//     let requestAt = new Date()
//     console.log(requestAt)
//     next()
// })

// addRequestDate = (req, res, next) => {
//     let requestAt = new Date()
//     console.log(requestAt)
//     next()
// }

// app.get('/home', (req, res)=>{
//     res.sendFile(__dirname + '/public/index.html')
// })
// app.get('/contact', (req, res)=>{
//     res.sendFile(__dirname + '/public/coord.html')
// })

// app.get('/contact', addRequestDate, (req, res)=>{
//     res.send({
//         tel: 717171,
//         adresse: 'lac 1'
//     })
// })

// app.get('/users/:nom', (req, res)=>{
//     console.log(req.params.nom)
//     res.send(req.params.nom + ' is connected')
// })


app.listen(3000, (err)=>{
    if(err) console.log('server is not running')
    else console.log('server is running on port 3000')
})