export function renderMusic(music) {
    const artistEl = document.createElement('h2');
    const albumEl = document.createElement('h3');
    const genresEl = document.createElement('ul');
    const publicationEl = document.createElement('p');

    const topEl = document.createElement('div');
    const rightEl = document.createElement('div');

    artistEl.textContent = music.artist;
    albumEl.textContent = music.album;
    publicationEl.textContent = `Album produced by ${music.publication.label} `
}