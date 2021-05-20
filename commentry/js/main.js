let commentCollection = [] // array
$('#commentBox').keyup(function(e){
    let code = e.which
    if(code == 13){
        let newComment = $(this).val()
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        let newCommentObject = {} // object
        newCommentObject['time'] = time
        newCommentObject['comment'] = newComment
        commentCollection.push(newCommentObject)
        $(this).val('')
        displayComment()
    }
})

function displayComment(){
    $('.display-wrapper ul').html('')
    commentCollection.map(function(comment){
        let li = `<li> <span>`+ comment['time'] +`</span>` + comment['comment'] + `</li>`
        $('.display-wrapper ul').prepend(li)
    })
}