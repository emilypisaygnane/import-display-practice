export function renderMusic(music) {
    const musicEl = document.createElement('div');
    const artistEl = document.createElement('h2');
    const albumEl = document.createElement('h3');
    const genresEl = document.createElement('ul');
    const publicationEl = document.createElement('p');

    const topEl = document.createElement('div');
    const rightEl = document.createElement('div');

    artistEl.textContent = music.artist;
    albumEl.textContent = music.album;
    publicationEl.textContent = `Album produced by ${music.publication.label} and released in ${music.publication.released}. `;

    for (let genre of music.genres) {
        const genreEl = document.createElement('li');

        genreEl.textContent = `${genre}`;

        genresEl.append(genreEl);
    }

    musicEl.classList.add('music');
    topEl.classList.add('top');

    musicEl.append(topEl, rightEl);
    topEl.append.add(artistEl, albumEl);
    rightEl.append(genresEl, publicationEl);

    return musicEl;
}