// MENU MOBILE
document.addEventListener("DOMContentLoaded", function (event) {
    regressivePromotion();
    setInterval(regressivePromotion, 1000);
});

function regressivePromotion() {
    var dias = 0, horas = 0, minutos = 0, segundos = 0;    
    var target_date = new Date(document.querySelector('.end-promotion').dataset.end.replace('-', '/')).getTime();

    var current_date = new Date().getTime();
    var segundos_f = (target_date - current_date) / 1000;
    dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;

    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;

    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    if(!isNaN(dias) && !isNaN(horas) && !isNaN(minutos) && !isNaN(segundos)) {
        var arrElements = [
            '<div class="message-promo-flex">' +
                '<h6>Essa promoção termina em: </h6>' +
                '<div class="contador-flex">' +
                    '<p class="promo-item" id="dia"> <span>' + dias + ' dias </span> </p>' +
                    '<p class="promo-item" id="hora"> <span>' + horas + ' h </span> </p>' +
                    '<p class="promo-item" id="minuto"> <span>' + minutos + ' min </span> </p>' +
                    '<p class="promo-item" id="segundo"> <span>' + segundos + ' seg </span> </p>' +
                '</div>' +
            '</div>'
        ]

        document.querySelector('.contador-promotion .content').innerHTML = arrElements.join(' ');
    }
    else {
        document.querySelector('.contador-promotion').style.display = 'none';
    }
}