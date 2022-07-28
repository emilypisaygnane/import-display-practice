
export function renderCandyItem(pieceOfCandy) {
    const pTag = document.createElement('p');
    pTag.textContent = (pieceOfCandy);
    pTag.classList.add('candy-item');

    return pTag;
}

