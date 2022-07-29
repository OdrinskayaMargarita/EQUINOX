export default () => {

    let header = document.querySelector('header');
    let html = document.querySelector('html');
    header.classList.add('header-show')

    window.onscroll = function(e) {
        let windowWidth = document.documentElement.clientWidth;

        if (windowWidth < 1024 && scrollY > 250) {
            if (this.oldScroll > this.scrollY) {
                header.classList.add('header-show')
                header.classList.remove('header-hidden')
            } else {
                header.classList.remove('header-show')
                header.classList.add('header-hidden')
            }
            this.oldScroll = this.scrollY;
        }
    }
}