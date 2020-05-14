const navSlide = () => {
    const toggle = document.querySelector('#toggle');
    const nav = document.querySelector('.nav-items');

    toggle.addEventListener('click',()=>{
        nav.classList.toggle('open');
    });
}

navSlide()

const footerSlide = () => {
    const icon = document.querySelector('#info-icon');
    const bar = document.querySelector('.info-bar');

    icon.addEventListener('click',()=>{
        bar.classList.toggle('info-open');
    });
}

footerSlide()