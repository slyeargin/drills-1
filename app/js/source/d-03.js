(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#input').on('click', '#process', findFourths);
  }

  function findFourths() {
    var stringArray = [];
    var stringInput = $('#textString').val();
    stringArray = stringInput.split(',');
    var output = stringArray.map(fourths).map(div);

    $('#output').append(output);
  }

  function fourths (x){
    return Math.pow((x * 1),4);
  }

  function div (x) {
    return $('<div>').addClass('littleSquare').text(x);
  }

}) ();
