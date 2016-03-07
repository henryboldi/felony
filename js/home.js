$(function() {

  var canvas = document.querySelector('canvas');
  var cx = canvas.getContext('2d');

  var width = $(window).width();
  var height = width;

  cx.canvas.width = width;
  cx.canvas.height = height;

  cx.strokeStyle = '#D52035';
  cx.beginPath();
  cx.moveTo(40, -10);
  cx.lineTo(width + 10, width - 100);
  cx.lineWidth = 6;
  cx.stroke();
  cx.closePath();

});
