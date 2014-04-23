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
    var sums = stringArray[0].split('+').filter(isOdd);
    var products = stringArray[1].split('*').filter(isOdd);

    var s = findSums(sums);
    var p = findProducts(products);

    $('#sums > .littleSquare').append(s);
    $('#products > .littleSquare').append(p);

  }

  function isOdd(x){
    return x % 2;
  }

  function findSums (x){
    var sumX = 0;
    for (var i = 0; i < x.length; i++){
      var a = x[i];
      sumX += (a * 1);
    }
    return sumX;
  }

  function findProducts (x){
    var productX = 1;
    for (var i = 0; i < x.length; i++){
      var a = x[i];
      productX *= (a * 1);
    }
    return productX;
  }


}) ();
