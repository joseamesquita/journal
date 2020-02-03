import { journal } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    console.log(goal)
    var output = journal(goal);
    console.log(output)
    
    $('#solution').text(output);
  });
});