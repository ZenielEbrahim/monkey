const path = require('path')
const express = require('express')
const hbs = require('hbs')

const PORT = process.env.PORT || 3000

const publicPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

const app= express()
app.use(express.static(publicPath))
app.set("view engine","hbs")
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)




app.get('',(req, res)=>{
    res.render('index')
})

app.get('/info', (req, res)=>{
    res.render('info')
})

app.listen(PORT, ()=>{console.log('up on port: '+PORT)})