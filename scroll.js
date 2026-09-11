// Smooth come up

const btn = document.querySelector('.btn-scroll');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

});

// Scroll Reveal

const nav = document.querySelector('.btn-scroll');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        nav.classList.add('scroll');
    }
    else{
        nav.classList.remove('scroll');
    }
});