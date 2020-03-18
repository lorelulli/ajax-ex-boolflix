$(document).ready(function () {

    var source = $('#film-template').html();              // clono il template messaggio
    var template = Handlebars.compile(source);

    function creaFilm(tit, titOr, lan , vote) {
        var datiFilm = {                                 // Assemblo in un oggetto il contenuto del messaggio
            titolo: tit,
            titoloOriginale: titOr,
            lingua: lan,
            voto: vote
        };

        var templateFilm = template(datiFilm);      // Popolo il template di handlebars con il contenuto del messaggio
        $('.film-card').append(templateFilm);// faccio l'append del template così popolato
    }

    $('button').click(function () {
        var query = $('input').val();
        console.log(query);
        $(".card").hide();
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

                    console.log(film.title);
                    console.log(film.original_title);
                    console.log(film.original_language);
                    console.log(film.vote_average);
                    var titoloFilm = film.title;
                    var originaleFilm = film.original_title;
                    var linguaFilm = film.original_language;
                    var votoFilm = film.vote_average;

                    creaFilm(titoloFilm, originaleFilm, linguaFilm, votoFilm)
                }

            },
            error: console.log('WARNING ')

        })

    })





})
