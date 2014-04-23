(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    loadDivs();
    $('#bigDiv:not(#smallDiv)').click(selectBigDiv);
    $('#smallDiv').click(selectSmallDiv);
    $('body').keydown(move);
  }

  var w = window.innerWidth;
  var h = window.innerHeight;
  var bigDivTop;
  var bigDivLeft;
  var smallDivTop;
  var smallDivLeft;

  function loadDivs(){
    bigDivTop = Math.ceil(Math.random() * (h - 500));
    bigDivLeft = Math.ceil(Math.random() * (w - 650));
    smallDivTop = Math.ceil(Math.random() * 445);
    smallDivLeft = Math.ceil(Math.random() * 585);

    $('#bigDiv').css('top', bigDivTop).css('left', bigDivLeft);
    $('#smallDiv').css('top', smallDivTop).css('left', smallDivLeft);
  }

  function selectSmallDiv() {
    event.stopPropagation();
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  }

  function selectBigDiv() {
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

    if (($('.selected')).is('#bigDiv')){
      moveTop = $('#bigDiv').css('top');
      moveLeft = $('#bigDiv').css('left');
    } else {
      moveTop = $('#smallDiv').css('top');
      moveLeft = $('#smallDiv').css('left');
    }

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
