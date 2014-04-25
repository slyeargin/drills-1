(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    loadDivs();
    $('.rectangle').click(selectSmallDiv);
    $('body').keydown(move);
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

  function selectSmallDiv() {
    event.stopPropagation();
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  }


  function move(event){
    if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
      event.preventDefault();
    }

    var moveTop;
    var moveLeft;
    var newTop;
    var newLeft;

    moveTop = $('.selected').css('top');
    moveLeft = $('.selected').css('left');

    moveTop = moveTop.replace('px', '');
    moveLeft = moveLeft.replace('px', '');

    moveTop *= 1;
    moveLeft *= 1;

    switch(event.keyCode){
      case 38:
        if (moveTop > 0) {
          newTop = moveTop - 1;
        }
        break;
      case 40:
        if (moveTop < ($('.selected').parent().innerHeight() - ($('.selected').innerHeight()))) {
          newTop = moveTop + 1;
        }
        break;
      case 37:
        if (moveLeft > 0){
          newLeft = moveLeft - 1;
        }
        break;
      case 39:
        if (moveLeft < ($('.selected').parent().innerWidth() - ($('.selected').innerWidth()))){
          newLeft = moveLeft + 1;
        }
        break;
    }

    $('.selected').css('top', newTop).css('left', newLeft);

  }

}) ();
