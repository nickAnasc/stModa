(function () {
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

                if (document.querySelector('.start-promotion') && document.querySelector('.end-promotion')) {
                    verificaVencimento(document.querySelector('.start-promotion').dataset.start, document.querySelector('.end-promotion').dataset.end);
                }
                console.log(prod);
            });
        });

    listVar.forEach(element => {
        element.addEventListener('click', function () {
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

                    if (prodVar.Variant.start_promotion != '0000-00-00' && prodVar.Variant.end_promotion != '0000-00-00') {
                        document.querySelector('.contador-promotion').style.display = "block";
                        startPromo.dataset.start = prodVar.Variant.start_promotion;
                        endPromo.dataset.end = prodVar.Variant.end_promotion;
                    }
                    else {
                        startPromo.dataset.start = prodVar.Variant.start_promotion;
                        endPromo.dataset.end = prodVar.Variant.end_promotion;
                        document.querySelector('.contador-promotion').style.display = "none";
                    }

                    verificaVencimento(prodVar.Variant.start_promotion, prodVar.Variant.end_promotion);
                    setInfoPrice(prodVar.Variant.price, prodVar.Variant.promotional_price, prodVar.Variant.payment_option);

                    console.log(prodVar);
                    document.querySelector('.content-image__full').setAttribute('src', prodVar.Variant.VariantImage[0].https);

                    imagesVar.forEach(imgs => {
                        arrImages.push(`<img class="thumb change-photo"  onClick="changeMainPhoto('${imgs.https}')" data-original="${imgs.https}" src="${imgs.thumbs['180'].https}">`)
                    });

                    document.querySelector('.thumb-carrossel .glider-track').innerHTML = arrImages.join(' ');

                    var glider = new Glider(document.querySelector('.thumb-carrossel'));
                    glider.refresh();
                });
            });

        setTimeout(function () {
            var secondVariation = document.querySelectorAll('.cor_variacao.passo2 .lista_cor_variacao li');

            secondVariation.forEach(secVar => {
                secVar.addEventListener('click', function () {
                    makeFetch(this.dataset.id);
                })
            });

            if (document.querySelector('.cor_variacao.passo2 select#second_dropdown')) {
                document.querySelector('.cor_variacao.passo2 select#second_dropdown').addEventListener('change', function () {
                    makeFetch(this.value)
                })
            }
        }, 1000);
    }

    if (document.querySelector('select#variation_first_select')) {
        document.querySelector('select#variation_first_select').addEventListener('change', function () {
            makeFetch(this.value)
        });
    }

    function verificaVencimento(startpromotion, endPromotion) {
        // IF DE VENCIMENTO
        if (new Date().getTime() > new Date(endPromotion.replace('-', '/')).getTime()) {
            document.querySelector('.contador-promotion').style.display = "none";
        }
        else if (new Date().getTime() < new Date(startpromotion.replace('-', '/')).getTime()) {
            document.querySelector('.contador-promotion').style.display = "none";
            document.querySelector('.price-content .price').classList.remove('preco-cut');
            document.querySelector('.price-content .price-promotion').style.display = "none";
        }
        else if (startPromo.dataset.start == '0000-00-00' && endPromo.dataset.end == '0000-00-00') {
            document.querySelector('.price-content .price').classList.remove('preco-cut');
            document.querySelector('.price-content .price-promotion').style.display = "none";
        }
        else {
            regressivePromotion();
            document.querySelector('.price-content .price').classList.add('preco-cut');
            document.querySelector('.price-content .price-promotion').style.display = "block";
        }
    }

    function setInfoPrice(price, pricecPromo, parcelamento) {
        var priceHtml = document.querySelector('.price');
        var pricePromoHtml = document.querySelector('.price-content .price-promotion');
        var parcelamentoHtml = document.querySelector('.parcelamento');

        if (price) {
            priceHtml.innerHTML = formatMoney.format(price);
            priceHtml.setAttribute('data-priceFull', price);
            if (pricecPromo == '0' || pricecPromo == '0.00') {
                priceHtml.classList.remove('preco-cut');
                pricePromoHtml.style.display = "none";
            }
            else {
                pricePromoHtml.innerHTML = formatMoney.format(pricecPromo);
                setPromotion(price, pricecPromo);
            }
        }

        if (parcelamento) {
            parcelamentoHtml.innerHTML = parcelamento;
        }
    }

    function setPromotion(precoFull, precoPromo) {
        var result = 100 - ((precoPromo * 100) / precoFull);
        var contentpromo = document.querySelector('.promotion-off-content span');

        contentpromo.innerHTML = result.toFixed(0) + '% de desconto';
    }

    document.querySelector('.btn-buy').addEventListener('click', function () {
        setTimeout(function () {
            document.querySelector('.botao-continuar-comprando').addEventListener('click', function () {
                window.location.href = '/';
            })
        }, 2000)
    })
})();