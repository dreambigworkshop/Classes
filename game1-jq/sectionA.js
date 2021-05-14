// Variable Diclaratin
let play = true;
let objMoveSpeed = 500
let objMoveDistance = 20
let blockMoveDistance = 20

$(document).keyup(function (e) {
  let keyCode = e.which;
  if (keyCode === 39) {
    moveRight();
  }

  if (keyCode === 37) {
    moveLeft();
  }

//   if (keyCode === 32) {
//     if (play) {
//       clearInterval(objectMovementInterval);
//       play = false;
//     } else {
//       objectMovementInterval = setInterval(moveObjectDown, objMoveSpeed);
//       play = true;
//     }
//   }
});

function moveRight() {
  let blokcPosition = $(".block").position();
  if (blokcPosition.left < 280) {
    $(".block").css("left", blokcPosition.left + blockMoveDistance);
  }
}

function moveLeft() {
  let blokcPosition = $(".block").position();
  if (blokcPosition.left > 20) {
    $(".block").css("left", blokcPosition.left - blockMoveDistance);
  }
}

