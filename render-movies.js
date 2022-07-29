export function renderMovies(movies) {
    const moviesEl = document.createElement('div');
    const directorEl = document.createElement('p');
    const titleEl = document.createElement('h3');
    const publicationEl = document.createElement('p');

    const topEl = document.createElement('div');
    const rightEl = document.createElement('div');

    titleEl.textContent = movies.title;
    directorEl.textContent = movies.director;
    publicationEl.textContent = `Produced by ${movies.publication.production} and released in Japan on ${movies.publication.date}`;

    moviesEl.classList.add('movies');
    topEl.classList.add('top');

    moviesEl.append(topEl, rightEl);
    topEl.append(titleEl, directorEl);
    rightEl.append(publicationEl);

    return moviesEl;             
}