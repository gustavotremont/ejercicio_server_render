const fetch = require('node-fetch');

const API_KEY = '9fd5cced';

const getFilmByName = async (name) => {
    const formatName = name.replace(' ','+');
    const data = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${formatName}`);
    const product = await data.json();
    return product;
};

const film = {
    getFilmByName
};

module.exports = film;

// getFilmByName('ghost rider').then(data => console.log(data)) //Funciona