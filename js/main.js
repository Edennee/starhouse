const menuBtn = document.querySelector('.header_btn'),
      menu = document.querySelector('.header_menu_burger'),
      menuClouseBtn = document.querySelector('.header_clouse_btn');
const MenuFunction = ()=>{
    menu.classList.add('open');
};
const ClouseFunction = ()=>{
    menu.classList.remove('open');
};
menuBtn.addEventListener('click', MenuFunction),
menuClouseBtn.addEventListener('click', ClouseFunction);
const animItems = document.querySelectorAll(`._anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffSet = offset(animItem).top
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`)
            } else {
                if (!(animItem.classList.contains(`_anim-no-hide`))) {
                    animItem.classList.remove(`_active`)
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
};


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


function scaleImgOnMain(e) {
    e.querySelector('a').querySelector('img').style.cssText += 'transform: scale(1.05);transition-duration: .4s;transition-timing-function: ease-out;'
}
function scaleImgOnMainOff(e) {
    e.querySelector('a').querySelector('img').style.cssText = ''
}
document.addEventListener("DOMContentLoaded", function(){
    if (screen.width <= 400) {
        document.getElementsByClassName('burger_search_input')[0].placeholder = 'Поиск'
    }
});
