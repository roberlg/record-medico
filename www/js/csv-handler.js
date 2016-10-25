function getCsv(){


$('#datatable').DataTable( {
      "ajax": '/csv',
      "columns": [
                  { "data": "name" },
                  { "data": "phone" },
                  { "data": "email" },
                  { "data": "address" },
                  { "data": "state" },
                  { "data": "zip_code" }
              ]
    });

}

// $(document).ready(function() {
//     $('#datatable').dataTable();
//     $('#datatable-keytable').DataTable( { keys: true } );
//     $('#datatable-responsive').DataTable();
//     $('#datatable-scroller').DataTable( { ajax: "assets/datatables/json/scroller-demo.json", deferRender: true, scrollY: 380, scrollCollapse: true, scroller: true } );
//     var table = $('#datatable-fixed-header').DataTable( { fixedHeader: true } );
// } );
// TableManageButtons.init();
