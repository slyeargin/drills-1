(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('body').on('click', '#randomizedButton', changeButton);
  }

  function changeButton() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var a = Math.random().toFixed(1);

    var randomColor = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

    $('#randomizedButton').css('background-color', randomColor);
  }


}) ();
