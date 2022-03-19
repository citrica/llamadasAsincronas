import axios from "axios";

/* Extraer información de los personajes */
function getCharacters() {
    return axios
        .get("https://www.breakingbadapi.com/api/characters")
        .then(response => {
            return response.data;
        });
}

function getQuoteByAuthor() {
    return axios
        .get("https://www.breakingbadapi.com/api/quotes")
        .then(response => {
            return response.data;
        });
}

export { getCharacters, getQuoteByAuthor };