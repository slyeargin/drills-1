(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#question').on('click', '#getAnswer', findSum);
  }

  function findSum() {
    var input1 = $('#number1').val() * 1;
    var input2 = $('#number2').val() * 1;
    var output = input1 + input2;

    $('#answer').text(output);
  }

}) ();
