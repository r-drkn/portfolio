
const navSlide = () => {
  const menu = document.querySelector("#menu");
  const nav = document.querySelector(".nav-items");
  let clicks = 0;
  
  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
    if (clicks === 0){
      const flip = () => {(menu.classList.add('menu-flip'))}; 
      const open = () => {(menu.src = 'https://rdrkn-portfolio-bucket.s3-ap-southeast-2.amazonaws.com/close.svg')};
      setTimeout(open, 575);
      setTimeout(flip, 350);
      clicks++;
    } else {
      const flipback = () => {(menu.classList.remove("menu-flip"))};
      const close = () => {(menu.src = 'https://rdrkn-portfolio-bucket.s3-ap-southeast-2.amazonaws.com/MENU.svg')};
      setTimeout(close, 425);
      setTimeout(flipback, 300);
      clicks--;
    }
  })
  

}

navSlide();


// const navSlide = () => {
//   const menu = document.querySelector("#menu");
//   const nav = document.querySelector(".nav-items");
//   let otherclicks = 0;
//   let clicks = 0;
  
  
//   menu.addEventListener("click", () => {
//     if (otherclicks === 0){
//       menu.classList.add('menu-flip'); 
//       otherclicks++;
//     } else {
//       menu.classList.remove("menu-flip");
//       otherclicks--;
//     }
//   })

//   menu.addEventListener("click", () => {
//     nav.classList.toggle("open");
//     if (clicks === 0){ 
//       const open = () => {(menu.src = 'https://rdrkn-portfolio-bucket.s3-ap-southeast-2.amazonaws.com/close.svg')};
//       setTimeout(open, 225);
//       clicks++;
//     } else {
//       const close = () => {(menu.src = 'https://rdrkn-portfolio-bucket.s3-ap-southeast-2.amazonaws.com/MENU.svg')};
//       setTimeout(close, 125);
//       clicks--;
//     }
//   })
  
  

}

navSlide();

const footerSlide = () => {
  const icon = document.querySelector(".info");
  const bar = document.querySelector(".info-bar");

  icon.addEventListener("click", () => {
    bar.classList.toggle("info-open");
  });
};

footerSlide();

// TweenMax.to('#cactus-1', 1, {
//     attr: {
//       d: d="M252.5 523 V401 M252.79 401.49 l-90.14-89.13 M162.5 313v-68 v29 M162 245.5h37 M198.5 308v-63M198.35 307.64 l53.91 51.73M252.5 360V178 M253 178.5h46M298.5 178v128M298.14 306.15l35.01-35.01M333.5 271v-33M333 237.5h33M366.5 237.01l-1 52M366.02 288.35l-66.67 67M299.5 355l-1.1 168M252 522.5h47"
//     },
//     repeat: -1,
//     yoyo: true
//   })
