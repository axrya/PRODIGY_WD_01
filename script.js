const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const header = document.querySelector('.header');


hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
