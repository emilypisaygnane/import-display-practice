import { candy } from './candies-data.js';
import { cats } from './cats-data.js';
import { movies } from './movies-data.js';
export { music } from './music-data.js';

import { renderCandyItem } from './render-candy.js';
import { renderCat } from './render-cats.js';
import { renderMovies } from './render-movies.js';

const candyListEl = document.getElementById('candy-list');

for (let item of candy) {
    const candyEl = renderCandyItem(item);

    candyListEl.append(candyEl);
}

const catListEl = document.getElementById('cats-list');

for (let aParticularCat of cats) {
    const catEl = renderCat(aParticularCat);

    catListEl.append(catEl);
}

const moviesListEl = document.getElementById('movies-list');

for (let movie of movies) {
    const moviesEl = renderMovies(movie);

    moviesListEl.append(moviesEl);
}
