(function noticias(){
    setTimeout(function(){
        var dataStore = document.querySelector('html').dataset.store;
        var url = "busca_noticias.php?loja=" + dataStore

        const newsHeader = {
            method: 'GET',
            mode: 'cors'
        }

        fetch(url, newsHeader)
            .then(function (respNews) {
                respNews.text().then( resp => {
                    var stringHtml = '';

                    for(i = resp.search('<ul class="noticias">'); i < resp.search('</li></ul>        </div>'); i++) {
                        stringHtml = stringHtml + resp[i]
                    }

                    document.querySelector('.news__content').innerHTML = stringHtml + '</li></ul>';
                })
            })
    }, 300)
    setTimeout(function(){
        if(document.querySelectorAll('.news__content li').length > 3) {
            var total = document.querySelectorAll('.news__content li');
            var max = 3;
    
            for( i = max; i < total.length; i++ ) {
                total[i].remove();
            }
        }
    }, 1500)
})()