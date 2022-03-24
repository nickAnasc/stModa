(function($){
    
    $(document).on("ready",  function(){

        document.getElementById("news-name").required;
        document.getElementById("news-email").required;
        
        // cart support class
        if($('.caixa-cupom').length){
            $('.caixa-cupom').parents('tr').addClass('cupom-wrapper');
        }
        
        if($('#calculoFrete').length){
            $('#calculoFrete').parents('tr').addClass('frete-wrapper');
        }
        
        // start slick on banner home
        if($.fn.jquery != '1.6.2'){
            $('.banner-home-slide').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="165.116 0 369.767 700" width="50" height="50" class="slick-arrow arrow-prev"><path d="M170.965,363.918l330.214,330.214c3.814,3.961,8.948,5.868,13.937,5.868c4.987,0,10.122-2.054,13.936-5.868c7.775-7.774,7.775-20.244,0-28.019L212.92,349.981L529.051,33.85c7.775-7.775,7.775-20.244,0-28.019	c-7.774-7.775-20.244-7.775-28.019,0L170.819,336.045C163.19,343.674,163.19,356.289,170.965,363.918z"/></svg>',
                nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="165.116 0 369.767 700" width="50" height="50" class="slick-arrow arrow-next"><path d="M529.18,336.045L198.966,5.831c-7.774-7.775-20.244-7.775-28.019,0c-7.775,7.775-7.775,20.244,0,28.019l316.131,316.131L170.948,666.113c-7.775,7.774-7.775,20.244,0,28.019c3.813,3.814,8.948,5.868,13.936,5.868c4.988,0,10.122-1.907,13.937-5.868l330.214-330.214C536.809,356.289,536.809,343.674,529.18,336.045z"/></svg>',
    
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }]
            });
        }
    
    });
	
    // 	gifts list fix
    if($(".page-lista, .page-print_lista").length){
        $(".lista-produtos").wrapAll("<div class='wrap-gifts'></div>");
    }
    
    $("img.lazy").lazyload({
        threshold : 200
    });

})(jQuery);

// menu mobile
(function(){
    var btnMenu = document.getElementsByClassName('trigger-menu')[0];
    var btnClose = document.getElementsByClassName('close-menu')[0];
    var html = document.getElementsByTagName('html')[0];
    var backdropMobile = document.getElementsByClassName('menu-mobile-backdrop')[0];
    
    btnMenu.addEventListener('touchend', function(){
        html.classList.add('menu-open');
    });
    
    html.addEventListener('touchend', function(e){
        if(e.target == backdropMobile){
            this.className = this.className.replace(new RegExp('(^|\\b)' + 'menu-open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
        
        if(e.target == btnClose){
            this.className = this.className.replace(new RegExp('(^|\\b)' + 'menu-open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    });
})();