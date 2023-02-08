(function(){
    var prodId = document.querySelector('.prod-id').value;
    var listVar = document.querySelectorAll('.lista_cor_variacao li');
    var startPromo = document.querySelector('.start-promotion');
    var endPromo = document.querySelector('.end-promotion');
    var formatMoney = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    var url = "/web_api/products/" + prodId;
    const prodHeader = {
        method: 'GET',
        contentType: "application/json; charset=utf-8",
    }

    fetch(url, prodHeader)
        .then(function (response) {
            response.json().then(function (prod) {
                setInfoPrice(prod.Product.price, prod.Product.promotional_price, prod.Product.payment_option);
            });
        });

    listVar.forEach(element => {
        element.addEventListener('click', function(){
            makeFetch(this.dataset.id);
        });
    });

    function makeFetch(id) {
        var url = "/web_api/variants/" + id;

        fetch(url, prodHeader)
            .then(function (response) {
                response.json().then(function (prodVar) {
                    var imagesVar = prodVar.Variant.VariantImage;
                    var arrImages = [];

                    setInfoPrice(prodVar.Variant.price, prodVar.Variant.promotional_price, prodVar.Variant.payment_option);

                    console.log(prodVar);
                    document.querySelector('.content-image__full').setAttribute('src', prodVar.Variant.VariantImage[0].https);

                    imagesVar.forEach(imgs => {
                        arrImages.push(`<div class="thumb-content" onClick="changeMainPhoto('${imgs.https}')" data-original="${imgs.https}"><img class="thumb change-photo" src="${imgs.thumbs['180'].https}"></div>`)
                    });

                    document.querySelector('.thumb-carrossel .glider-track').innerHTML = arrImages.join(' ');

                    var glider = new Glider(document.querySelector('.thumb-carrossel'));
                    glider.refresh();
                });
            });

        setTimeout(function(){
            var secondVariation = document.querySelectorAll('.cor_variacao.passo2 .lista_cor_variacao li');
            
            secondVariation.forEach(secVar => {
                secVar.addEventListener('click', function(){
                    makeFetch(this.dataset.id);
                })
            });

            if(document.querySelector('.cor_variacao.passo2 select#second_dropdown')) {
                document.querySelector('.cor_variacao.passo2 select#second_dropdown').addEventListener('change', function(){
                    makeFetch(this.value)
                })
            }
        }, 1000);
    }

    if(document.querySelector('select#variation_first_select')) {
        document.querySelector('select#variation_first_select').addEventListener('change', function(){
            makeFetch(this.value)
        });
    }

    function setInfoPrice(price, pricecPromo, parcelamento) {
        var priceHtml = document.querySelector('.price');
        var pricePromoHtml = document.querySelector('.price-promotion');
        var parcelamentoHtml = document.querySelector('.parcelamento');

        if(price) {
            priceHtml.innerHTML = formatMoney.format(price);
            console.log(pricecPromo)
            if(pricecPromo == '0' || pricecPromo == '0.00') {
                priceHtml.classList.add('price-promotion');
                pricePromoHtml.style.display = "none";
            }
            else {
                pricePromoHtml.innerHTML = formatMoney.format(pricecPromo);
                priceHtml.classList.add('preco-cut');
            }
        }

        if(parcelamento) {
            parcelamentoHtml.innerHTML = parcelamento;
        }
    }

    document.querySelector('.btn-buy').addEventListener('click', function(){
        setTimeout(function(){
            document.querySelector('.botao-continuar-comprando').addEventListener('click', function(){
                window.location.href = '/';
            })
        }, 2000)
    })
})();