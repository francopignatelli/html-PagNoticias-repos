document.querySelector('.menu_btn').addEventListener('click', () => {
    document.querySelector('.nav_menu').classList.toggle('show')
});

ScrollReveal().reveal('.showcase');

ScrollReveal().reveal('.news_cards', {delay: 500});

ScrollReveal().reveal('cards_banner_1', {delay: 500});
ScrollReveal().reveal('cards_banner_2', {delay: 500});