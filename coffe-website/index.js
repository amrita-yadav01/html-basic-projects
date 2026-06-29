const menuopenbutton =document.querySelector("#menu-open-button");
const menuclosebutton =document.querySelector("#menu-close-button");

menuopenbutton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu");
});

menuclosebutton.addEventListener("click",()=>{
    menuopenbutton.click()

});

const swiper = new Swiper('.slider-container', {
  loop: true,
  grabCursor:true,
  spaceBetween:25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    },

  }
});