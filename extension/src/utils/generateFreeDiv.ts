function generateFreeDiv() {
    const newDiv = document.createElement('div');
    const body = document.querySelector('body');

    if (body) {
        body.appendChild(newDiv);
    }

    return newDiv;
}

export default generateFreeDiv;
