// Carrinho de Compra
(function cartQtde() {
    setTimeout(function () {
        var formatPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
        var dataSession = '/web_api/cart/' + document.querySelector('html').dataset.session;
        var arrProducts = [];
        var cartResumeContent = document.querySelector('.cart-content');
        var totalPrice = document.querySelector('.total-content .total');
        var total = 0;

        fetch(dataSession)
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (resp) {
                        resp.forEach(element => {
                            total = total + (element.Cart.price * element.Cart.quantity);
                            var itemArray = [
                                '<article class="cart-item" data-valueTotal="' + element.Cart.price * element.Cart.quantity + '">' +
                                '<i class="fas fa-trash-alt delete-prod" onclick="deleteProduct(' + element.Cart.product_id + ',' + element.Cart.variant_id + ',' + element.Cart.price * element.Cart.quantity + ',' + element.Cart.quantity + ',' + 'this' + ')"></i>' +
                                '<img class="img-cart-resume" src="' + element.Cart.product_image.https + '">' +
                                '<div class="width-space">' +
                                '<p class="nome-product"><a href="' + element.Cart.product_url.https + '">' + element.Cart.product_name + '</a></p>' +
                                '<div class="cart-item__flex">' +
                                '<span class="price-cart-resume">' + formatPrice.format(element.Cart.price) + '</span>' +
                                '<span class="qtde-cart-resume">Quantidade <strong class="qtde">' + element.Cart.quantity + '</strong></span>' +
                                '</div>' +
                                '</div>' +
                                '</article>'
                            ];

                            arrProducts.push(itemArray);
                        });

                        cartResumeContent.innerHTML = arrProducts.join('');
                        totalPrice.innerHTML = formatPrice.format(total);
                        totalPrice.dataset.fullTotal = total;
                    });
                }
            });
    }, 1000)
})()

function deleteProduct(idProd, idVarProd, total, qtde, e) {
    var formatPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    var dataSession = document.querySelector('html').dataset.session;
    var deleteURL = idVarProd != 0 ? '/web_api/carts/' + dataSession + '/' + idProd + '/' + idVarProd : '/web_api/carts/' + dataSession + '/' + idProd;

    const deleteHeader = {
        method: 'DELETE',
        contentType: "application/json; charset=utf-8",
    }

    fetch(deleteURL, deleteHeader)
        .then(function (response) {
            var totalPrice = document.querySelector('.total-content .total');
            var newValue = totalPrice.dataset.fullTotal = totalPrice.dataset.fullTotal - total;
            var countCart = document.querySelector('.cart-amount span[data-cart="amount"]')

            totalPrice.innerHTML = formatPrice.format(newValue);
            countCart.innerHTML = countCart.textContent - qtde
            e.closest('.cart-item').style.opacity = "0";

            setTimeout(function () {
                e.closest('.cart-item').remove();
            }, 300);

            if (countCart.textContent == 0) {
                document.querySelector('.cart-content').innerHTML = '<p class="empty-cart">Carrinho Vazio.</p>';
            }
        });
}