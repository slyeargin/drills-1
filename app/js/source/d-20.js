(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getSymbol);
  }
  var symbolSum = 0;

  function getSymbol() {
    var symbol = $('#symbol').val().trim().toUpperCase();
    var symbolArray = symbol.split(',');

    for (var i=0;i<symbolArray.length;i++){
      getPrice(symbolArray[i]);
    }
  }

  function getPrice(symbol){
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(data){
      symbolSum += data.LastPrice;
      printSum(symbolSum);
    });
  }

  function printSum(symbolSum){

    $('#output > #sum').text('$' + symbolSum);
  }


}) ();
