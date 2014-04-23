(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#input').on('click', '#process', processText);
  }

  function processText() {
    var stringArray = [];
    var stringInput = $('#textString').val();
    stringArray = stringInput.split(',');
    var output = stringArray.map(div);

    $('#output').append(output);
  }

  function div (x) {
    return $('<div>').addClass('littleSquare').text(x);
  }

}) ();
