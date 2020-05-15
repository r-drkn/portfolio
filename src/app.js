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

// TweenMax.to('#cactus-1', 1, {
//     attr: {
//       d: d="M252.5 523 V401 M252.79 401.49 l-90.14-89.13 M162.5 313v-68 v29 M162 245.5h37 M198.5 308v-63M198.35 307.64 l53.91 51.73M252.5 360V178 M253 178.5h46M298.5 178v128M298.14 306.15l35.01-35.01M333.5 271v-33M333 237.5h33M366.5 237.01l-1 52M366.02 288.35l-66.67 67M299.5 355l-1.1 168M252 522.5h47"
//     },
//     repeat: -1,
//     yoyo: true
//   })