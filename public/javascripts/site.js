function getRandomColor() {
  var colors = [
    'blue',
    'green',
    'red',
    'yellow',
    'purple',
    'black',
    'orange'
  ];
  
  return colors[Math.floor(Math.random() * colors.length)];
}

$(function () {
  $('#changeColor').click(function () {
    $('body').css('color', getRandomColor());
  });
});