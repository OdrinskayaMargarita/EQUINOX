import gsap from "gsap";
import scrollTrigger from 'gsap/scrollTrigger'

gsap.registerPlugin(scrollTrigger)


export default () => {
    let scroll_tl = gsap.timeline();
    const scrollProgress = document.getElementById('custom-pagination__progressbar')
    const slides = document.querySelectorAll('.custom-slide-type');
    const container = document.querySelector('.types-slider__container');
    const SCENE_MULTIPLIER = 2; // change to increase/decrease scene scroll
    let offset = slides[slides.length-1].offsetLeft + slides[slides.length-1].offsetWidth - container.offsetWidth;

    scroll_tl.to(slides, {
        x: -offset,
        scrollTrigger: {
            trigger: ".custom-wrapper-type",
            start: "center center",
            end: "+=" + offset*SCENE_MULTIPLIER,
            ease: 'none',
            scrub: 0.5,
            pin: true,
            onUpdate: (self => {
                let normalizedProgress = Math.max(0.02, self.progress);
                scrollProgress.style.transform = `scaleX(${normalizedProgress})`;
            })
        }
    });
}
