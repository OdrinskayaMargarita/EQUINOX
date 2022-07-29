import gsap from "gsap";

export default () => {

    let windowWidth = document.documentElement.clientWidth;

    if (windowWidth > 1024) {
        let textInfoBlocks = document.querySelectorAll('.info-block--img')
        textInfoBlocks.forEach(textInfoBlock => {
            gsap.to(textInfoBlock, {
                scrollTrigger: {
                    trigger: textInfoBlock,
                    scrub: 1,
                    toggleActions: 'restart pause reverse none',
                    duration: 5,
                },
                yPercent: -100,
                duration: 5,
                ease: "none",
            })
        })

        let textImgBlocks = document.querySelectorAll('.info-block--text')
        textImgBlocks.forEach(textImgBlock => {
            gsap.to(textImgBlock, {
                scrollTrigger: {
                    trigger: textImgBlock,
                    scrub: 2,
                    toggleActions: 'restart pause reverse none'
                },
                yPercent: -155,
                duration: 1,
                ease: "none",
            })
        })

        let imgBlocks = document.querySelectorAll('.img-block')
        imgBlocks.forEach(imgBlock => {
            gsap.to(imgBlock, {
                scrollTrigger: {
                    trigger: imgBlock,
                    scrub: 2,
                    toggleActions: 'restart pause reverse none'
                },
                yPercent: -20,
                duration: 0.5,
                ease: "none",
            })
        })
    }

}