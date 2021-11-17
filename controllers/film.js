const dataFilm = require('../utils/film');

const getFilm = async (req, res) => {
    if(req.params.film){
        const data = await dataFilm.getFilmByName(req.params.film)
        
        if(data.Response == 'True'){
            res.render('film', {film: data})
        } else {
            res.render('error')
        }
    }else {
        res.render('error')
    }
};

const getFilmByName = async (req, res) => {
    if(req.body.film) {
        res.redirect(`/film/${req.body.film}`)
    }else {
        res.render('error')
    }
}

const film = {
    getFilm,
    getFilmByName
};

module.exports = film;