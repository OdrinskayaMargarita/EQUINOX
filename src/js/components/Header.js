export default class {
  constructor() {
    this.header = document.getElementById('header');
    this.html = document.querySelector('html');
    this.body = document.querySelector('body');
    this.burger = document.getElementById('header-burger');
    this.nav = document.getElementById('header-nav');
    this.navClose = document.getElementById('header-nav--close');
  }

  init() {
    this.openMobileMenu()
    this.closeMobileMenu()
  }

  openMobileMenu() {
    this.burger.addEventListener('click', (e) => {
      e.preventDefault();
      this.html.classList.add('open-menu');
    });
  }

  closeMobileMenu() {
    this.navClose.addEventListener('click', (e) => {
      e.preventDefault();
      this.html.classList.remove('open-menu');
    });
  }

}
