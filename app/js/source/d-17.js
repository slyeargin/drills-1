(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  function getQuote() {
    var symbol = $('#symbol').val().trim().toUpperCase();
    var shares = $('#shares').val() * 1;
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      var $outerdiv = $('<div>').addClass('outerDiv');
      var $topdiv = $('<div>').text('Shares: ' + shares);
      var $middlediv = $('<div>').addClass('price').text('Price: $' + data.LastPrice);
      var position = shares * data.LastPrice;
      var $bottomdiv = $('<div>').text('Position: $' + position.toFixed(2));
      ($outerdiv).append($topdiv).append($middlediv).append($bottomdiv);
      $('#output').append($outerdiv);
    });

  }


}) ();
