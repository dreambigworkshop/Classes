
generateObject()
let holeMovementInterval = setInterval(moveObjectDown, 200);

function generateObject(){
  let obj = '<div class="obj">X</div>'
  $('.wrapper').append(obj)
  let wrapperPosition = $('.wrapper').position()
  let wrapperWidth = $('.wrapper').width()
  let positionX = randomIntFromInterval(wrapperPosition.left, wrapperWidth);
  $(document).find(".obj").css("left", positionX);
  $(document).find(".obj").css("top", 0);
  moveObjectDown()
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(document).keyup(function (e) {
  let keyCode = e.which;
  if (keyCode === 39) {
    moveRight();
  }

  if (keyCode === 37) {
    moveLeft();
  }
});

function moveRight() {
  let blokcPosition = $(".block").position();
  if (blokcPosition.left < 280) {
    $(".block").css("left", blokcPosition.left + 20);
  }
}

function moveLeft() {
  let blokcPosition = $(".block").position();
  if (blokcPosition.left > 20) {
    $(".block").css("left", blokcPosition.left - 20);
  }
}

function moveObjectDown(){
  let obj = $('.obj')
  let position = obj.position()
  console.log(position)
  if (position.top > 520){
    $(document).find(".obj").remove();
    generateObject()
  }else{
    obj.css("top", position.top + 20);
  }
}

