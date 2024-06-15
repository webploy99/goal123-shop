
function OpenNav() {
    document.getElementById("Nav").style.width = "100%";
}
  function CloseNav() {
    document.getElementById("Nav").style.width = "0";
}

// url
function url() {
    location.href = "https://www.hay88.one/?inviteCode=7780571";
  }

var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    breakpoints: {
        350: {
            slidesPerView: 1,
            resistanceRatio: 0.85
        },
        980: {
            slidesPerView: 3,
            resistanceRatio: 0.85
        },
    },


    on: {
        autoplayTimeLeft(s, time, progress) {
            const currentSlide = s.slides[s.activeIndex];
            const progressBar = currentSlide.querySelector(".progressBar");
            if (progressBar) {
                const widthPercentage = parseFloat(progress) * 100;
                progressBar.style.width = widthPercentage + "%";
            }
        }
    }
});
