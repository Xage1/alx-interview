#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

if (!movieId || isNaN(movieId)) {
    console.log('Please provide a valid movie ID as the first argument.');
    process.exit(1);
}

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error('Unexpected status code:', response.statusCode);
    } else {
        const film = JSON.parse(body);
        const charactersUrls = film.characters;
        const charactersPromises = charactersUrls.map(characterUrl => {
            return new Promise((resolve, reject) => {
                request(characterUrl, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else if (response.statusCode !== 200) {
                        reject(new Error(`Unexpected status code: ${response.statusCode}`));
                    } else {
                        const character = JSON.parse(body);
                        resolve(character.name);
                    }
                });
            });
        });

        Promise.all(charactersPromises)
            .then(characters => {
                characters.forEach(character => console.log(character));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});
