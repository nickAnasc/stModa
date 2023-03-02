 // MAIN BANNER DESKTOP
 (function () {
    $('.carrossel-init-desk').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          duration: 3,
          prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
          nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
        });
})();

 // MAIN BANNER MOBILE
 (function () {
    $('.carrossel-init-mb').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          duration: 3,
          prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
          nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
        });
})();

 // REGUA CARROSSEL
 (function () {
    $('.regua-carrossel-init').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          duration: 3,
          prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
          nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
          responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    duration: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    duration: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    duration: 1
                }
            }
        ]
        });
})();

// BRANDS CARROSSEL
(function () {
    $('.brands-carrossel-init').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          duration: 3,
          prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
          nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
          responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    duration: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    duration: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    duration: 1
                }
            }
        ]
        });
})();

// BANNER TRIPLO
(function () {
    $('.banner-triplo-carrossel-init').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          duration: 3,
          prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
          nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
          responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    duration: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    duration: 1
                }
            }
        ]
        });
})();

// REVIEWS
(function () {
    document.querySelectorAll('.reviews .dep_lista li[style="display: none;"]').forEach(element => {
        element.remove();
    });

    $('.dep_lista').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          duration: 3,
          prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
          nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
          responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    duration: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    duration: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    duration: 1
                }
            }
        ]
        });
})();

// GLIDE JS INIT
document.addEventListener("DOMContentLoaded", function glideInit(event) {

    
    // CARROSSEL PRODUTO INTERNO
    if(document.querySelector('.thumb-carrossel')) {
        new Glider(document.querySelector('.thumb-carrossel'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            duration: 1,
            arrows: {
                prev: document.querySelector('.content-image__carrossel.control-thumb .slider-prev'),
                next: document.querySelector('.content-image__carrossel.control-thumb .slider-next')
            },
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        duration: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        duration: 1
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        duration: 1
                    }
                }
            ]
        });
    }

    // CARROSSEL PRODUTOS
    if(document.querySelector('.showcase')) {
        var products = document.querySelectorAll('.product-carrossel.prod');

        products.forEach(element => {
            new Glider(element, {
                draggable: false,
                duration: 1,
                arrows: {
                    prev: element.closest('.control').querySelector('.slider-prev'),
                    next: element.closest('.control').querySelector('.slider-next')
                },
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            duration: 1
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            duration: 1
                        }
                    },
                    {
                        breakpoint: 430,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            duration: 1
                        }
                    }
                ]
            });
        });
    }

    // CARROSSEL BANNER PRODUTOS
    if(document.querySelector('.showcase.showcase-banner')) {
        var products = document.querySelectorAll('.product-carrossel-banner.prod');

        products.forEach(element => {
            new Glider(element, {
                draggable: false,
                duration: 1,
                arrows: {
                    prev: element.closest('.control').querySelector('.slider-prev'),
                    next: element.closest('.control').querySelector('.slider-next')
                },
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            duration: 1
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            duration: 1
                        }
                    }
                ]
            });
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
        btn.addEventListener('click', function(){
            if(this.dataset.action == 'open') {
                menuContent.classList.add('open')
            }
            else if(this.dataset.action == 'close') {
                menuContent.classList.remove('open')
            }
        })
    });

    dropItem.forEach(firstItem => {
        firstItem.addEventListener('click', function(){
            var dropContent = this.closest('.first-lvl__item').querySelector('.second-lvl');
            dropContent.classList.toggle('open');
        })
    });

    dropThird.forEach(firstItem => {
        firstItem.addEventListener('click', function(){
            var dropContent = this.closest('.second-lvl__item').querySelector('.third-lvl');
            dropContent.classList.toggle('open');
        })
    });

    cartAction.forEach(element => {
        element.addEventListener('click', function(){
            cartContent.classList.toggle('open');
        })
    });
});

(function () {
    var e = document.querySelector(".header__content");
    var miniHeader = document.querySelector('.mini-header');
    document.querySelector("html").offsetHeight > 1320 &&
        window.addEventListener("scroll", function () {
            this.scrollY > 250 ? e.classList.add("bg-color") : e.classList.remove("bg-color");
            this.scrollY > 250 ? miniHeader.classList.add("remove") : miniHeader.classList.remove("remove");
        });
})();

(function shareButton() {
    var shareBtn = document.querySelectorAll('.share-button');
    var shareName = document.querySelector('.share-itens').dataset.nome

    shareBtn.forEach(btn => {
        btn.addEventListener('click', function(){
            if(this.classList.contains('facebook')) {
                window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location);
            }
            else if(this.classList.contains('twitter')) {
                window.open("https://twitter.com/intent/tweet?text=" + shareName + "%0a%0a" + window.location);
            }
            else if(this.classList.contains('whatsapp')) {
                window.open("https://web.whatsapp.com/send?text=" + shareName + "%0a%0a" + window.location);
            }
            else if(this.classList.contains('whatsapp-mobile')) {
                window.open("whatsapp://send?text=" + shareName + "%0a%0a" + window.location);
            }
        }) 
    });
})()