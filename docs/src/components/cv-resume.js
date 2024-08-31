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

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('rain-toggle-button');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const rainElement = document.querySelector('.rain');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeStylesheet.setAttribute('href', savedTheme);

        toggleButton.textContent = savedTheme === './src/styles/cv-resume-dark.css' ? 'Light mood' : 'Rain mood';

        if (savedTheme === './src/styles/cv-resume-dark.css') {
            rainElement.classList.remove('rain-hidden');
        } else {
            rainElement.classList.add('rain-hidden');
        }
    }

    toggleButton.addEventListener('click', function() {
        const currentHref = themeStylesheet.getAttribute('href');
        const newHref = currentHref === './src/styles/cv-resume.css' ? './src/styles/cv-resume-dark.css' : './src/styles/cv-resume.css';

        themeStylesheet.setAttribute('href', newHref);

        toggleButton.textContent = newHref === './src/styles/cv-resume-dark.css' ? 'Light mood' : 'Rain mood';

        if (rainElement.classList.contains('rain-hidden')) {
            rainElement.classList.remove('rain-hidden');
        } else {
            rainElement.classList.add('rain-hidden');
        }

        localStorage.setItem('theme', newHref);
    });
});
