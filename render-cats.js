export function renderCat(cat) {
    const catEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const ageEl = document.createElement('p');

    catEl.classList.add('cat');
    nameEl.textContent = cat.name;
    ageEl.textContent = `is ${cat.age} years old`;

    catEl.append(nameEl, ageEl);

    return catEl;
}


