/* jshint camelcase:false */

(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
  }

  function add() {
    var zip = $('#zip').val().trim().toUpperCase();
    var url = 'http://api.wunderground.com/api/259ccbf628d30983/forecast10day/q/'+zip+'.json?callback=?';
    $.getJSON(url, weather);
  }

  function weather(conditions){
    var tenDayArray = conditions.forecast.simpleforecast.forecastday;
    for (var i = 0; i < tenDayArray.length; i++){
      var $icon = tenDayArray[i].icon_url;
      var $day = tenDayArray[i].date.weekday;

      printForecast($icon, $day);
    }
  }

  function printForecast(icon, day){
    var $img = $('<img>').attr('src', icon);
    var $outerdiv = $('<div>').addClass('forecastSquare');
    var $label = $('<div>').addClass('label').text(day);
    $($outerdiv).append($img, $label);
    $('#output').append($outerdiv);
  }

}) ();
