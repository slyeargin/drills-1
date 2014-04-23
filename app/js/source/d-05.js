(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#input').on('click', '#process', evenSquares);
  }

  function evenSquares() {
    var stringArray = [];
    var stringInput = $('#textString').val();
    stringArray = stringInput.split(',');
    var x = stringArray[0] * 1;
    var y = stringArray[1] * 1;

    console.log(x);
    console.log(y);

    var output = makeArray(x,y).map(squared).filter(isEven).map(div);

    $('#output').append(output);
  }

  function makeArray(x,y){
    var array = [];
    for (var i = x; i <= y; i++) {
      array.push(i);
    }
    return array;
  }

  function squared (x){
    return Math.pow((x * 1),2);
  }

  function isEven (x) {
    if (x % 2 === 0) {
      return true;
    } else {
      return false;
    }

  }

  function div (x) {
    return $('<div>').addClass('littleSquare').text(x);
  }

}) ();
