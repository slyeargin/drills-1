/* global AmCharts:true */
/* jshint camelcase:false */

(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    makeGraph();
    $('#add').click(add);
  }

  var numShares;

  function add() {
    var symbol = $('#symbol').val().trim().toUpperCase();
    numShares = $('#numShares').val().trim();

    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, getPrice);
  }

  function getPrice(quote){
    var stock = {};
    stock.company = quote.Name;
    stock.quote = quote.LastPrice;
    stock.shares = stock.quote * (numShares * 1);

    chart.dataProvider.push(stock); // pushes data to graph
    chart.validateData(); // redraws the graph
  }

  var chart;

  function makeGraph(){
    chart = AmCharts.makeChart('chartdiv', {
      'type': 'pie',
      'theme': 'light',
      'titles': [{
        'text': 'My Portfolio',
        'size': 16
      }],
      'dataProvider': [],
      'valueField': 'shares',
      'titleField': 'company',
      'startEffect': 'elastic',
      'startDuration': 2,
      'labelRadius': 15,
      'innerRadius': '50%',
      'depth3D': 10,
      'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
      'angle': 15,
      'exportConfig':{
        menuItems: [{
          icon: '/lib/3/images/export.png',
          format: 'png'
        }]
      }
    });
  }
}) ();
