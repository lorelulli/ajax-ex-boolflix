$(document).ready(function () {

    var source = $('#film-template').html();              // clono il template messaggio
    var template = Handlebars.compile(source);
    var bandiere = ['it','en','es','de','fr','ja']
    console.log(bandiere);

    function creaFilm(tit, titOr, lan , vote, img, im, ov, errore) {
        var datiFilm = {                                 // Assemblo in un oggetto il contenuto del messaggio
            titolo: tit,
            titoloOriginale: titOr,
            lingua: lan,
            voto: vote,
            immagine: img,
            img: im,
            overview: ov,

        };

        var templateFilm = template(datiFilm);      // Popolo il template di handlebars con il contenuto del messaggio
        $('.film-card').append(templateFilm);// faccio l'append del template così popolato
    }

    $('button').click(function () {
        var query = $('input').val();
        console.log(query);
        $(".card").detach();
        $.ajax({
            url: 'https://api.themoviedb.org/3/search/movie',
            data:{
                api_key:'734d8a0c88efb186f6e792a1db6a0033',
                query: query,
                language:'it-IT'
            },
            method:'GET',
            success:function (data) {
                console.log(data);
                var films = data.results;
                console.log(films);

                for (var i = 0; i < films.length; i++) {
                    var film = films[i];


                    var titoloFilm = film.title;
                    var originaleFilm = film.original_title;
                    var linguaFilm = film.original_language;
                    switch (linguaFilm) {
                        case 'it':

                            break;
                        case 'en':

                            break;
                        case 'de':

                            break;
                        case 'es':

                            break;
                        case 'fr':

                            break;
                        case 'ja':

                            break;
                        case 'ko':

                            break;
                        case 'ru':

                            break;
                        case 'zh':

                            break;
                        default:
                        linguaFilm = 'df'

                    }
                    var urlImg = 'https://image.tmdb.org/t/p/w300/'
                    var overviewFilm = film.overview;
                    var immagineFilm = film.poster_path;
                    if (immagineFilm == null) {
                        urlImg = 'img/';
                        immagineFilm = 'error.jpg'

                    }
                    console.log(immagineFilm);

                    var votoFilm = Math.ceil(film.vote_average / 2);
                    switch (votoFilm) {
                        case 1:
                            votoFilm = '<i class="fas fa-star"></i> <i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'

                            break;
                        case 2:
                            votoFilm = '<i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'

                            break;
                        case 3:
                            votoFilm = '<i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fa fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'

                            break;
                        case 4:
                            votoFilm = '<i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
                            break;
                        case 5:
                            votoFilm = '<i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'

                            break;
                        case 0:
                            votoFilm = '<i class="far fa-star"></i> <i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'

                            break;
                        default:
                        '<i class="far fa-star"></i> <i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'

                    }

                    creaFilm(titoloFilm, originaleFilm, linguaFilm, votoFilm, immagineFilm, urlImg, overviewFilm)
                }

            },
            error: console.log('WARNING ')



        })
        $.ajax({
            url: 'https://api.themoviedb.org/3/search/tv',
            data:{
                api_key:'734d8a0c88efb186f6e792a1db6a0033',
                query: query,
                language:'it-IT'
            },
            method:'GET',
            success:function (data) {
                console.log(data);
                var tvFilms = data.results;


                for (var i = 0; i < tvFilms.length; i++) {
                    var tvFilm = tvFilms[i];


                    var titoloTvFilm = tvFilm.name;
                    var originaleTvFilm = tvFilm.original_name;
                    var linguaTvFilm = tvFilm.original_language;
                    switch (linguaTvFilm) {
                        case 'it':

                            break;
                        case 'en':

                            break;
                        case 'de':

                            break;
                        case 'es':

                            break;
                        case 'fr':

                            break;
                        case 'ja':

                            break;
                        case 'ko':

                            break;
                        case 'ru':

                            break;
                        case 'zh':

                            break;
                        default:
                        linguaTvFilm = 'df'

                    }
                    var urlImg = 'https://image.tmdb.org/t/p/w300/'
                    var immagineTvFilm = tvFilm.poster_path;
                    if (immagineTvFilm == null) {
                        urlImg = 'img/';
                        immagineTvFilm = 'error.jpg'

                    }
                    var overviewTvFilm = tvFilm.overview;
                    var votoTvFilm = Math.ceil(tvFilm.vote_average / 2);
                    switch (votoTvFilm) {
                        case 1:
                            votoTvFilm = '<i class="fas fa-star"></i> <i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'

                            break;
                        case 2:
                            votoTvFilm = '<i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'

                            break;
                        case 3:
                            votoTvFilm = '<i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fa fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'

                            break;
                        case 4:
                            votoTvFilm = '<i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
                            break;
                        case 5:
                            votoTvFilm = '<i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'

                            break;
                        case 0:
                            votoTvFilm = '<i class="far fa-star"></i> <i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'

                            break;
                        default:
                        '<i class="far fa-star"></i> <i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'

                    }

                    console.log(immagineTvFilm);

                    creaFilm(titoloTvFilm, originaleTvFilm, linguaTvFilm, votoTvFilm, immagineTvFilm, urlImg, overviewTvFilm)
                }

            },
            error: console.log('WARNING ')

        })


    })

    $('input').keyup(function () {
        if (event.keyCode === 13) {
            $("button").click();
        }

    })







})
