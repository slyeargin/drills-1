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
    var city = {};
    city.name = conditions.current_observation.observation_location.city;
    city.temp = conditions.current_observation.temp_f;

    chart.dataProvider.push(city); // pushes data to graph
    chart.validateData(); // redraws the graph
  }

  var chart;

  function makeGraph(){
    chart = AmCharts.makeChart('graph', {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': [],
      'valueAxes': [{
          'gridColor':'#FFFFFF',
          'gridAlpha': 0.2,
          'dashLength': 0
        }],
        'gridAboveGraphs': true,
        'startDuration': 1,
        'graphs': [{
          'balloonText': '[[category]]: <b>[[value]]</b>',
          'fillAlphas': 0.8,
          'lineAlpha': 0.2,
          'type': 'column',
          'valueField': 'temp'
        }],
        'chartCursor': {
          'categoryBalloonEnabled': false,
          'cursorAlpha': 0,
          'zoomable': false
        },
        'categoryField': 'name',
        'categoryAxis': {
          'gridPosition': 'start',
          'gridAlpha': 0
        },
        'exportConfig':{
          'menuTop': 0,
          'menuItems': [{
            'icon': '/lib/3/images/export.png',
            'format': 'png'
          }]
        }
      });
  }

}) ();
