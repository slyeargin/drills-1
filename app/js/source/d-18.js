(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getSymbol);
  }

  function getSymbol() {
    var symbol = $('#symbol').val().trim().toUpperCase();
    var symbolArray = symbol.split(',');

    for (var i=0; i<symbolArray.length; i++){
      buildTable(symbolArray[i]);
    }

    setInterval(keepFresh(symbolArray),2000);

  }

  function keepFresh(symbol){
    for (var i = 0; i < symbol.length; i++){
      refreshPrice(symbol[i]);
    }

  }

  function refreshPrice(symbol){
    console.log('Getting quote for' + symbol);
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(data){
      var newPrice = data.LastPrice;
      $('.' + symbol).text(newPrice).css('color', 'red');
      console.log(newPrice);
    });
  }

  function buildTable(symbol){
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(data){
      var price = data.LastPrice;
      loadTable(symbol, price);
    });
  }

  function loadTable(symbol, price){
    var $tr = $('<tr>');
    var $symbolTd = $('<td>').text(symbol);
    var $priceTd = $('<td>').text(price).addClass('price').addClass(symbol);

    $tr.append($symbolTd, $priceTd);
    $('#output > tbody').append($tr);
  }


}) ();
