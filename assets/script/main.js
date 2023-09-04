/*=============== LOADER ===============*/
document.addEventListener('DOMContentLoaded', function (eventObject) {
    $('.load').fadeIn();
})
window.addEventListener("load", function (eventObject) {
    $('.load').fadeOut("slow");

});

/*=============== Header Fixed ===============*/
if ($("#myHeader").length) {
    window.onscroll = function () {
        myFunction()
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

/*=============== PARTNERS | SWIPER ===============*/
if ($(".partnerSwiper").length) {
    let swiper = new Swiper(".partnerSwiper", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: true,
        breakpoints: {
            // when window width is >= 280px
            280: {
                slidesPerView: 1,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 575px
            575: {
                slidesPerView: 2,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 4,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 5,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 1440px
            1440: {
                slidesPerView: 6,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
        }
    });
}


/*=============== TESTIMONIAL | SWIPER ===============*/
if ($(".testimonial").length) {
    let swiper = new Swiper(".testimonial", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: true,
        breakpoints: {
            // when window width is >= 280px
            280: {
                slidesPerView: 1,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 575px
            575: {
                slidesPerView: 2,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 4,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 5,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 1440px
            1440: {
                slidesPerView: 6,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
        }
    });
}

/*=============== NEWS | SWIPER ===============*/
if ($(".news-section").length) {
    let swiper = new Swiper(".news-section", {
        grabCursor: true,
        slidesPerView: 3,
        // spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: {
            // when window width is >= 280px
            280: {
                slidesPerView: 1,
                spaceBetween: 15,
                // slideToClickedSlide: true,
            },
            // when window width is >= 575px
            575: {
                slidesPerView: 1,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 2,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                // spaceBetween: 0,
                // slideToClickedSlide: true,
            },
        },
        keyboard: true,
    });
}
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 300 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)