/* global AmCharts:true */
/* jshint camelcase:false */

(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    makeGraph();
    $('#add').click(add);
  }

  function add() {
    var zip = $('#zip').val().trim().toUpperCase();
    var url = 'http://api.wunderground.com/api/259ccbf628d30983/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, weather);
  }

  function weather(conditions){
    var windSpeed = conditions.current_observation.wind_mph;
    gaugeChart.arrows[0].setValue(windSpeed);
    gaugeChart.axes[0].setBottomText(windSpeed + ' mph');
  }

  var gaugeChart;

  function makeGraph(){
    gaugeChart = AmCharts.makeChart('windGauge',{
        'type': 'gauge',
        'theme': 'light',
        'axes': [{
            'axisThickness':1,
            'axisAlpha':0.2,
            'tickAlpha':0.2,
            'valueInterval':5,
            'bands': [{
                'color': '#84b761',
                'endValue': 15,
                'startValue': 0
              }, {
                'color': '#fdd400',
                'endValue': 35,
                'startValue': 15
              }, {
                'color': '#cc4748',
                'endValue': 70,
                'innerRadius': '97%',
                'startValue': 35
              }],
              'bottomText': 'Wind Speed',
              'bottomTextYOffset': -20,
              'endValue': 70
            }],
            'arrows': [{}]
          });
  }
}) ();
