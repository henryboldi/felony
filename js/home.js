$(function() {

  var canvas = document.querySelector('canvas');
  var cx = canvas.getContext('2d');

  $(window).on('resize', (function() {
    draw(cx);
  }).bind(this));

  function draw(cx) {
    var width = $(window).width();
    var height = $(window).height();
    var extraHeight = 200;

    cx.canvas.width = width;
    cx.canvas.height = height + extraHeight;

    cx.clearRect(0, 0, width, height);
    cx.strokeStyle = '#D52035';
    cx.beginPath();
    cx.moveTo(width / 10, -10);
    cx.lineTo(width + 10, height + extraHeight);
    cx.lineWidth = 6;
    cx.stroke();
    cx.closePath();
  }

  draw(cx);

});
