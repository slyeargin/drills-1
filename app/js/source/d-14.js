(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    loadDivs();
  }

  var h = window.innerHeight;
  var w = window.innerWidth;

  function loadDivs(){
    var rectangles = $('.rectangle');

    console.log(rectangles);
    genDivs(rectangles);
  }

  function genDivs(x){
    for (var i = 0; i <= x.length; i++){
      var divHeight = Math.ceil(Math.random() * (h / 2));
      var divWidth = Math.ceil(Math.random() * (w / 2));
      var smallDivTop = Math.ceil(Math.random() * (h - divHeight));
      var smallDivLeft = Math.ceil(Math.random() * (w - divWidth));

      var r = Math.floor(Math.random()*256);
      var g = Math.floor(Math.random()*256);
      var b = Math.floor(Math.random()*256);
      var a = Math.random().toFixed(1);

      var randomColor = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

      x[i] = x.eq(i).css('height', divHeight).css('width', divWidth).css('top', smallDivTop).css('left', smallDivLeft).css('background-color', randomColor);
    }
  }


}) ();
