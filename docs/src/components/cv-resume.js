function checkOrientation() {
    const popup = document.getElementById('popup');
    const content = document.getElementById('content');
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width < height) {
        popup.style.display = 'flex';
    } else {
        popup.style.display = 'none';
    }
}

checkOrientation();

window.addEventListener('resize', checkOrientation);
