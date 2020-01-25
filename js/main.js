$(document).ready(function() {
    $(function() {
        $.scrollify({
            section: '.container',
            before: function(index, section) {
                $('.navigation li').on('click', function() {
                    $('.navigation li').removeClass('active');
                    $(this).addClass('active')
                })
            },
            after: function(index, section) {
                $('.navigation li').each(function(i, navItem){
                    i == index ? $(navItem).addClass('active') : $(navItem).removeClass('active')
                })
            }
        })
    });

    $('.navigation a').on('click', $.scrollify.move);

    const htmlBar = document.querySelector('.bar-html');
    const cssBar = document.querySelector('.bar-css');
    const jsBar = document.querySelector('.bar-javascript');
    const angularBar = document.querySelector('.bar-angular');

    var t1 = new TimelineLite()

    t1.fromTo(htmlBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(90% - 6px)', ease: Power4.easeOut })
        .fromTo(cssBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(95% - 6px)', ease: Power4.easeOut })
        .fromTo(jsBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(75% - 6px)', ease: Power4.easeOut })
        .fromTo(angularBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(70% - 6px)', ease: Power4.easeOut })

    const contoller = new ScrollMagic.Controller()
    const scene = new ScrollMagic.Scene({
        triggerElement: '.skills',
        triggerHook: 0
    })
        .setTween(t1)
        .addTo(contoller)


    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            
            navLinks.forEach((link, index) => {
                if(link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 1 }s`;
                }
            })
            burger.classList.toggle('toggle');

            //burger animation
        })

    }
    navSlide();
});
    const showRequiredCategory = event => {
        const getId = event.id
        const links = document.querySelectorAll('.works-category button')
        for(i=0; i < links.length; i++) {
            if(links[i].hasAttribute('class')) {
                links[i].classList.remove('active')
            }
        }

        event.classList.add('active')
        const getCategory = document.querySelector(`.category-${ getId }`)
        const categories = document.querySelectorAll('div[class ^= "category-"]')
        for (i = 0; i < categories.length; i++) {
            if (categories[i].hasAttribute('class')) {
                categories[i].classList.remove('showCategory')
                categories[i].classList.add('hideCategory')
            }
        }
        getCategory.classList.remove('hideCategory')
        getCategory.classList.add('showCategory')
    }