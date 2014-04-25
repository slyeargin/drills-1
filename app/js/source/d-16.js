(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  function getQuote() {
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      var $outerdiv = $('<div>').addClass('outerDiv');
      var $topdiv = $('<div>').text(data.Symbol);
      var $middlediv = $('<div>').text(data.Name);
      var $bottomdiv = $('<div>').addClass('price').text('$' + data.LastPrice);
      ($outerdiv).append($topdiv).append($middlediv).append($bottomdiv);
      $('#output').append($outerdiv);
    });

  }


}) ();
