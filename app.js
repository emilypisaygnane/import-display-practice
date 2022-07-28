import { candy } from './candies-data.js';
import { cats } from './cats-data.js';

import { renderCandyItem } from './render-candy.js';
import { renderCat } from './render-cats.js';

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
