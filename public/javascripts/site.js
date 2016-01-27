var colors = [
  'blue',
  'green',
  'red',
  'yellow',
  'purple',
  'black',
  'orange'
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setBodyColor() {
  $('body').css('color', getRandomColor());
}

$(function () {
  $('#changeColor').click(function () {
    setBodyColor();
  });
});