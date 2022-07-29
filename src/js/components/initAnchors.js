export default () => {
    let html = document.querySelector('html');
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            document.querySelectorAll('a[href^="#"]').forEach(link => {
                link.closest('li')?.classList.remove('li-active')
            })
            e.preventDefault();
            html.classList.remove('open-menu');
            link.closest('li')?.classList.add('li-active')
            let href = this.getAttribute('href').substring(1)
            const scrollTarget = document.getElementById(href);
            const topOffset = document.querySelector('.header').offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}