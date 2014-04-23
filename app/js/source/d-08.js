(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('body').on('click', '#toggledButton', changeButton);
  }

  function changeButton() {
    $('#toggledButton').toggleClass('newColor');
  }


}) ();
