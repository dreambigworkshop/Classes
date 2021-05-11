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
