AOS.init({
    delay: 200,
    duration: 1200,
    once: true
});

const collapseButton = document.getElementById('collapseButton');

function toggleNavbar() {
    document.getElementById('collapseNavbar').classList.toggle('hidden');
    document.getElementById('collapseNavbar').classList.toggle('block');
}

collapseButton.addEventListener('click', toggleNavbar, false);