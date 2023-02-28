(function noticias() {
    setTimeout(function () {
        var dataStore = document.querySelector('html').dataset.store;
        var url = "busca_noticias.php?loja=" + dataStore
        var stringHtml = '';
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'text/plain; charset=UTF-8');

        const newsHeader = {
            method: 'GET',
            mode: 'cors',
            charset: 'UTF-8',
            headers: myHeaders,
        }

        console.log(url)

        fetch(url, newsHeader)
            .then(function (respNews) {
                return respNews.arrayBuffer();
            })
            .then(function (buffer) {
                const decoder = new TextDecoder('iso-8859-1');
                const text = decoder.decode(buffer);

                for (i = text.search('<ul class="noticias">'); i < text.search('</li></ul>        </div>'); i++) {
                    stringHtml = stringHtml + text[i]
                }
                document.querySelector('.news__content').innerHTML = stringHtml + '</li></ul>';
            })
    }, 300)
    setTimeout(function () {
        if (document.querySelectorAll('.news__content li').length > 3) {
            var total = document.querySelectorAll('.news__content li');
            var max = 3;

            for (i = max; i < total.length; i++) {
                total[i].remove();
            }
        }
    }, 1500)
})()