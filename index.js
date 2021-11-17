/****************** Dependencies ******************/
const express = require('express')
var morgan = require('morgan')
const film = require('./controllers/film')

/****************** Enable Express ******************/
const app = express()
const port = 3000

app.use(express.json()); //Para habilitar envio de JSON al servidor
app.use(express.static('public')); //Habilitar los archivos para que sean estaticos
app.use(express.urlencoded());
app.use(morgan('combined'))

/****************** Enable Pug ******************/
app.set('view engine', 'pug');
app.set('views','./views');

/****************** Paths ******************/
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/film/:film?', film.getFilm )

app.post('/film', film.getFilmByName )

//Capture All 404 errors
app.use( (req,res,next) => {
    res.status(404).render('error');
});

/****************** Actice Server ******************/
app.listen(port, () => {
    console.log(`ServerOn http://localhost:${port}`)
})
