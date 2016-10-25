// add cita
$(document).ready(function() {
  $('button[type=submit]').on('click', function(evt) {
    evt.preventDefault();
    var data = {
      customer: $('input[name=customer]').val(),
      therapist: $('input[name=therapist]').val(),
      date: $('input[name=date]').val()
     };

    $.post('/citas', data, function() {
      console.log('success');
    }, 'json');
  });
});
