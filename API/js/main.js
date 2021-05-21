$('#searchBtn').click(function(){
    let movieName = $('#searchInput').val()
    let serachResult = []
    if(movieName){
        let url = `http://api.tvmaze.com/search/shows?q=` + movieName
        $.ajax({
            method: "GET",
            url: url,
            success: function(res){
                res.map(function(data){
                    let movieObj = {}
                    console.log(data.show)
                    movieObj['name'] = data.show.name
                    movieObj['image'] = data.show.image ? data.show.image.medium : 'img/sample.jpg'
                    serachResult.push(movieObj)
                })
                displayMovie(serachResult)
            },
            error: function(err){
                console.log('Got Error', err)
            }
        })
    }
})

function displayMovie(serachResult){
    let movieCard = ``;
    $('.result-wrapper').html('')
    serachResult.map(function(movie){
        movieCard = `<div class="movie-card">
        <img src="`+movie['image']+`"/>
        <p>`+movie['name']+`</p>
        </div>`;

        $('.result-wrapper').append(movieCard)
    })
}