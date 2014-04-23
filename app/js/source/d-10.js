(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#container').on('click', '#startButton', startTimer);
    $('#container').on('click', '#stopButton', stopTimer);
  }

  var clock;
  var timer;

  function startTimer() {
    clearInterval(timer);
    clock = $('#clock').text()*1;
    timer = setInterval(updateClock,1000);
  }

  function updateClock(){
    clock++;
    $('#clock').text(clock);
  }

  function stopTimer(){
    clearInterval(timer);
  }

}) ();
