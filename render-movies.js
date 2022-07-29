export function renderMovie(movies) {
    const moviesEl = document.createElement('div');
    const directorEl = document.createElement('p');
    const titleEl = document.createElement('h3');
    const publicationEl = document.createElement('p');

    const photoEl = document.createElement('img');

    const topEl = document.createElement('div');
    const bottomEl = document.createElement('div');
    const leftEl = document.createElement('div');
    const rightEl = document.createElement('div');

    titleEl.textContent = movies.title;
    directorEl.textContent = movies.director;
    publicationEl.textContent = `Produced by ${movies.publication.produced} in ${movies.publication.date}`;
    photoEl.src = movies.photo;

    movies.classList.add('movies');
    bottomEl.classList.add('bottom');
    leftEl.classList.add('left');
    rightEl.classList.add('right');

    moviesEl.append(topEl, bottomEl);
    topEl.append(titleEl, directorEl);
    bottomEl.append(leftEl, rightEl);
    rightEl.append(publicationEl);

    return moviesEl;             
}