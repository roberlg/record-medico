// add client
$(document).ready(function() {
  $('button[type=submit]').on('click', function(evt) {
    evt.preventDefault();
    var data = {
      name: $('input[name=first_name]').val(),
      phone: $('input[name=phone]').val(),
      email: $('input[name=email]').val(),
      address: $('input[name=address]').val(),
      state: $('input[name=state]').val(),
      zip_code: $('input[name=zip_code]').val()
      // is_hidden: $(false).val()
     };
    $.post('/add', data, function() {
      console.log('success');
    }, 'json');
  });
});
