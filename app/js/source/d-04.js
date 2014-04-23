(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#input').on('click', '#process', getStrings);
  }

  function getStrings() {
    var stringArray = [];
    var stringInput = $('#textString').val();

    stringArray = stringInput.split('-');
    var number = stringArray[0].split(',');
    var exponent = stringArray[1].split(',');

    var answer = findExponents(number,exponent);

    for (var i = 0; i < number.length; i++){
      generateDivs(number[i],exponent[i],answer[i]);
    }

  }

  function findExponents (number, exponent){
      var array = [];
      for (var i = 0; i < number.length; i++){
        array.push(Math.pow(number[i], exponent[i]));
      }
      return array;
    }

  function generateDivs(number, exponent, answer){
    var $outerDiv = $('<div>').addClass('outerDiv');
    var $topDiv = $('<div>').addClass('topDiv').append(number + '<sup>' + exponent);
    var $bottomDiv = $('<div>').addClass('bottomDiv').text(answer);

    $outerDiv.append($topDiv).append($bottomDiv);
    $('#output').append($outerDiv);
  }


}) ();
