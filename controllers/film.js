const dataFilm = require('../utils/film');

const getFilm = async (req, res) => {
    if(req.params.film){
        const data = await dataFilm.getFilmByName(req.params.film)
        
        if(data.Response == 'True'){
            res.render('film', {film: data})
        } else {
            res.render('error')
        }
    }else if(req.body.film) {
        const data = await dataFilm.getFilmByName(req.body.film)

        if(data.Response == 'True'){
            res.render('film', {film: data})
        } else {
            res.render('error')
        }
    }else {
        res.render('error')
    }
};

const film = {
    getFilm
};

module.exports = film;