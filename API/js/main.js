$('#searchBtn').click(function(){
    let movieName = $('#searchInput').val()
    let movieList = []
    let url = 'http://api.tvmaze.com/search/shows?q=' + movieName
    $.ajax({
        method: 'GET',
        url: url,
        success: function(res){
            movieList = res
        },
        error: function(err){
            console.log('Got Error', err)
        }
    })
})

function displayMo