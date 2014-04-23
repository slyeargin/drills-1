(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#input').on('click', '#process', getInput);
  }

  function getInput() {
    var stringArray = [];
    var stringInput = $('#textString').val();
    stringArray = stringInput.split(',');
    var x = stringArray[0] * 1;
    var y = stringArray[1] * 1;

    var output = makeArray(x,y).slice(-3).map(div);

    $('#output').append(output);
  }

  function makeArray(x,y){
    var array = [];

    for (var i = x; i <= y; i++) {
      array.push(i);
    }
    console.log(array);
    return array;
  }

  function div (x) {
    return $('<div>').addClass('littleSquare').text(x);
  }

}) ();
