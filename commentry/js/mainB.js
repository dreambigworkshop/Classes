$(function () {});
let commentCollection = [];
$("#commentBox").keyup(function (e) {
  let code = e.which;
  if (code == 13) {
    let newComment = $(this).val();
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    let newCommentObject = {};
    newCommentObject["time"] = time;
    newCommentObject["comment"] = newComment;
    commentCollection.push(newCommentObject);
    console.log(commentCollection)
    $(this).val("");
    displayData();
  }
});

function displayData() {
  $(".display-wrapper ul").html("");
  commentCollection.map(function (comment) {
      let li = `<li> <span>`+ comment['time'] +`</span>` + comment['comment'] + `</li>`
      $('.display-wrapper ul').prepend(li)
  });
}