import Header from './components/Header';
import Splitting from "splitting";
import initHeaderFixed from "./components/initHeaderFixed";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export default () => {

    Splitting();

    const header = new Header();
    header.init();

    initHeaderFixed()

    let year = document.getElementById('year');
    year.innerHTML = (new Date()).getFullYear();


    let sectionsAll = document.querySelectorAll('section')

    sectionsAll.forEach(section => {
        let sectionId = section.getAttribute('id')
        let links = document.querySelectorAll('a[data-href]')

        ScrollTrigger.create({
            trigger: section,
            onEnter: () => {
                if (sectionId) {
                    links.forEach(link => {
                        link?.closest('li')?.classList.remove('li-active')
                    })
                    let link = document.querySelector(`a[data-href="${sectionId}"]`)
                    link.closest('li')?.classList.add('li-active')
                }
            },
            onEnterBack: () => {
                if (sectionId) {
                    links.forEach(link => {
                        link?.closest('li')?.classList.remove('li-active')
                    })
                    let link = document.querySelector(`a[data-href="${sectionId}"]`)
                    link.closest('li')?.classList.add('li-active')
                }
            },
        });
    })

    const iframe = document.querySelector('iframe');



}
