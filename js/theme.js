$(".carrossel-init-desk").slick({
    infinite: !0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !0,
    duration: 3,
    prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
}),
    $(".carrossel-init-mb").slick({
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        duration: 3,
        prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
    }),
    $(".regua-carrossel-init").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        duration: 3,
        prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, duration: 1 } },
            { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1, duration: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, duration: 1 } },
        ],
    }),
    $(".brands-carrossel-init").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        duration: 3,
        prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1, duration: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, duration: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, duration: 1 } },
        ],
    }),
    $(".banner-triplo-carrossel-init").slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !0,
        duration: 3,
        prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1, duration: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, duration: 1 } },
        ],
    }),
    document.querySelectorAll('.reviews .dep_lista li[style="display: none;"]').forEach((s) => {
        s.remove();
    }),
    $(".dep_lista").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        duration: 3,
        prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, duration: 1 } },
            { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1, duration: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, duration: 1 } },
        ],
    }),
    $(".product-carrossel.prod").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        duration: 3,
        prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1, duration: 1 } },
            { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1, duration: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, duration: 1 } },
            { breakpoint: 430, settings: { slidesToShow: 1, slidesToScroll: 1, duration: 1 } },
        ],
    }),
    $(".thumb-carrossel-init").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        duration: 3,
        prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            { breakpoint: 1400, settings: { slidesToShow: 3, slidesToScroll: 1, duration: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, duration: 1 } },
        ],
    }),
    $(".showcase-banner-init").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        duration: 3,
        prevArrow: '<button class="slider-prev" style="z-index: 1;"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slider-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, duration: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, duration: 1 } },
            { breakpoint: 430, settings: { slidesToShow: 1, slidesToScroll: 1, duration: 1 } },
        ],
    }),
    document.addEventListener("DOMContentLoaded", function s(e) {
        var t = document.querySelector(".menu.mobile"),
            o = document.querySelectorAll(".btn-menu"),
            i = document.querySelectorAll(".link-item.drop-item"),
            l = document.querySelectorAll(".link-item.drop-third"),
            n = document.querySelectorAll(".cart-action"),
            r = document.querySelector(".cart-resume");
        o.forEach((s) => {
            s.addEventListener("click", function () {
                "open" == this.dataset.action ? t.classList.add("open") : "close" == this.dataset.action && t.classList.remove("open");
            });
        }),
            i.forEach((s) => {
                s.addEventListener("click", function () {
                    this.closest(".first-lvl__item").querySelector(".second-lvl").classList.toggle("open");
                });
            }),
            l.forEach((s) => {
                s.addEventListener("click", function () {
                    this.closest(".second-lvl__item").querySelector(".third-lvl").classList.toggle("open");
                });
            }),
            n.forEach((s) => {
                s.addEventListener("click", function () {
                    r.classList.toggle("open");
                });
            });
    }),
    (function () {
        var s = document.querySelector(".header__content"),
            e = document.querySelector(".mini-header");
        document.querySelector("html").offsetHeight > 1320 &&
            window.addEventListener("scroll", function () {
                this.scrollY > 250 ? s.classList.add("bg-color") : s.classList.remove("bg-color"), this.scrollY > 250 ? e.classList.add("remove") : e.classList.remove("remove");
            });
    })(),
    (function s() {
        var e = document.querySelectorAll(".share-button"),
            t = document.querySelector(".share-itens").dataset.nome;
        e.forEach((s) => {
            s.addEventListener("click", function () {
                this.classList.contains("facebook")
                    ? window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location)
                    : this.classList.contains("twitter")
                    ? window.open("https://twitter.com/intent/tweet?text=" + t + "%0a%0a" + window.location)
                    : this.classList.contains("whatsapp")
                    ? window.open("https://web.whatsapp.com/send?text=" + t + "%0a%0a" + window.location)
                    : this.classList.contains("whatsapp-mobile") && window.open("whatsapp://send?text=" + t + "%0a%0a" + window.location);
            });
        });
    })();
