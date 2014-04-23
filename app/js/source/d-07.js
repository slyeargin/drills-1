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


    var output = makeArray(x,y).map(div);

    $('#output').append(output);
  }

  function makeArray(x,y){
    var array = [];
    var sortedArray = [];

    for (var i = x; i <= y; i++) {
      array.push(i);
    }

    for (var j = 0; array.length !== 0; j++){
      var a = array.shift();
      var b = array.length ? array.pop() : 0;

      sortedArray[j] = (a*1) + (b*1);
    }

    return sortedArray;
  }

  function div (x) {
    return $('<div>').addClass('littleSquare').text(x);
  }

}) ();
