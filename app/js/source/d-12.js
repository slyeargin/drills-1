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
    var output = stringArray.map(isOdd).map(div);

    $('#output').append(output);
  }

  function isOdd(x){
    return x % 2 ? cube(x) : square(x);
  }

  function square (x) {
    return Math.pow(x,2);
  }

  function cube (x) {
    return Math.pow(x,3);
  }

  function div (x) {
    return x % 2 ? $('<div>').addClass('littleOddSquare').text(x) : $('<div>').addClass('littleEvenSquare').text(x);
  }

}) ();
