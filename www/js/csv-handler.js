$(document).ready(function() {
  $('button[type=submit]').on('click', function(evt) {
    evt.preventDefault();
    var data = {
      name: $('input[name=name]').val(),
      phone: $('input[name=phone]').val(),
      email: $('input[name=email]').val(),
      address: $('input[name=address]').val(),
      state: $('input[name=state]').val(),
      zip_code: $('input[name=zip_code]').val()
      // is_hidden: $(false).val()
     };
    $.post('/csv', data, function() {
      console.log('success');
    }, 'json');
  });

  
});

// $(document).ready(function() {
//     $('#datatable').dataTable();
//     $('#datatable-keytable').DataTable( { keys: true } );
//     $('#datatable-responsive').DataTable();
//     $('#datatable-scroller').DataTable( { ajax: "assets/datatables/json/scroller-demo.json", deferRender: true, scrollY: 380, scrollCollapse: true, scroller: true } );
//     var table = $('#datatable-fixed-header').DataTable( { fixedHeader: true } );
// } );
// TableManageButtons.init();
