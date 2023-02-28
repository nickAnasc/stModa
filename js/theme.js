// GLIDE JS INIT
document.addEventListener("DOMContentLoaded", function glideInit(event) {

    // MAIN BANNER DESKTOP
    if (document.querySelector('.banner-carrossel.desk')) {
        $('.banner-carrossel.desk .init').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
        });
    }

    // MAIN BANNER MOBILE
    if (document.querySelector('.banner-carrossel-mb')) {
        $('.banner-carrossel-mb .init').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
        });
    }

    // RÉGUA CARROSSEL 
    if (document.querySelector('.regua-carrossel')) {
        $('.regua-carrossel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    // BRANDS CARROSSEL
    if (document.querySelector('.brands-carrossel')) {
        $('.brands-carrossel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 430,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ]
        });
    }

    //REVIEWS - CARROSSEL
    if (document.querySelector('.reviews .dep_lista')) {
        $('.dep_lista li[style="display: none;"]').remove()
        $('.reviews .dep_lista').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    // CARROSSEL PRODUTO INTERNO
    if (document.querySelector('.thumb-carrossel')) {
        $('.thumb-carrossel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        duration: 1
                    }
                }
            ]
        })
    }

    //CARROSSEL - BANNER TRIPLO
    if (document.querySelector('.banner-triplo')) {
        $('.banner-triplo .carrossel-init').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        })
    }

    //CARROSSEL - PRODUTOS - DESTAQUE
    if (document.querySelector('.product-carrossel')) {
        $('.product-carrossel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    },
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});

// MENU MOBILE
document.addEventListener("DOMContentLoaded", function menuMobile(event) {
    var menuContent = document.querySelector('.menu.mobile');
    var btnMenu = document.querySelectorAll('.btn-menu');
    var dropItem = document.querySelectorAll('.link-item.drop-item');
    var dropThird = document.querySelectorAll('.link-item.drop-third');
    var cartAction = document.querySelectorAll('.cart-action');
    var cartContent = document.querySelector('.cart-resume');

    btnMenu.forEach(btn => {
        btn.addEventListener('click', function () {
            if (this.dataset.action == 'open') {
                menuContent.classList.add('open')
            }
            else if (this.dataset.action == 'close') {
                menuContent.classList.remove('open')
            }
        })
    });

    dropItem.forEach(firstItem => {
        firstItem.addEventListener('click', function () {
            var dropContent = this.closest('.first-lvl__item').querySelector('.second-lvl');
            dropContent.classList.toggle('open');
        })
    });

    dropThird.forEach(firstItem => {
        firstItem.addEventListener('click', function () {
            var dropContent = this.closest('.second-lvl__item').querySelector('.third-lvl');
            dropContent.classList.toggle('open');
        })
    });

    cartAction.forEach(element => {
        element.addEventListener('click', function () {
            cartContent.classList.toggle('open');
        })
    });
});

(function () {
    var e = document.querySelector(".header");
    document.querySelector("html").offsetHeight > 1320 &&
        window.addEventListener("scroll", function () {
            this.scrollY > 250 ? e.classList.add("fix") : e.classList.remove("fix");
            this.scrollY > 250 ? document.querySelector('.application').style.marginTop = "140px" : document.querySelector('.application').style.marginTop = "0";
        });
})();