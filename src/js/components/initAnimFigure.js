import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const MorphSVGPlugin = require("./../libs/MorphSVGPlugin");

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export default () => {

    let allSvg = document.querySelectorAll('.svg-animation')

    allSvg?.forEach(svgItem => {
        let svgDefault = svgItem?.querySelector('.default')
        let svgClip1 = svgItem?.querySelector('.clip1')
        let svgClip2 = svgItem?.querySelector('.clip2')

        let tl = gsap.timeline({
            repeat: 1,
            yoyo: true,
            ease: 'bezier',
            type: "rotational",
            shapeIndex: 0,
            scrollTrigger: {
                trigger: svgDefault,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 2.5
            }
        });

        tl.to(svgDefault, {duration: 15, morphSVG: svgClip1})
            .to(svgDefault, {duration: 15, morphSVG: svgClip2});

    })

}