// $(document).ready(function() {
//   function submitButtonHandler (evt) {
//      //var testForm = document.getElementById('testForm');
//       //prevent form submission
//       evt.preventDefault();
//       evt.stopPropagation();
//
//       // $('#post-results-container').fadeOut();
//       $('.ajaxLoader').css('display', 'inline-block');
//
//       //make the AJAX call
//       $.ajax({
//         url: '/form',
//         type: 'POST',
//         data: {
//           first_name: $('input[name=first_name]').val(),
//           last_name: $('input[name=last_name]').val(),
//           born: $('input[name=born]').val(),
//           age: $('input[name=age]').val(),
//           phone: $('input[name=phone]').val(),
//           email: $('input[name=email]').val(),
//           address: $('input[name=address]').val(),
//           city: $('input[name=city]').val(),
//           state: $('input[name=state]').val(),
//           zipcode: $('input[name=zipcode]').val(),
//           marital_status: $('input[name=marital_status]').val(),
//           occupation: $('input[name=occupation]').val(),
//           place_work: $('input[name=place_work]').val(),
//           contact_person: $('input[name=contact_person]').val(),
//           relation: $('input[name=relation]').val(),
//           contactPerson_phone: $('input[name=contactPerson_phone]').val()
//         },
//         success: function() {
//           console.log('Post was sucessful');
//         }
//       });
//   }
//
//
//
//   init();
// });

// add client
$(document).ready(function() {
  $('button[type=submit]').on('click', function(evt) {
    evt.preventDefault();
    var data = {
      first_name: $('input[name=first_name]').val(),
      last_name: $('input[name=last_name]').val(),
      phone: $('input[name=phone]').val(),
      email: $('input[name=email]').val(),
      address: $('input[name=address]').val(),
      city: $('input[name=city]').val(),
      state: $('input[name=state]').val(),
      zip_code: $('input[name=zip_code]').val()
      // is_hidden: $(false).val()
     };
    $.post('/form', data, function() {
      console.log('success');
    }, 'json');
  });
});

// (function () {
//
//   function init(){
//     $('#submitButton').click(submitButtonHandler);
//   }
//
//   function submitButtonHandler (evt) {
//      var testForm = document.getElementById('testForm');
//       //prevent form submission
//       evt.preventDefault();
//       evt.stopPropagation();
//
//       $('#post-results-container').fadeOut();
//       $('.ajaxLoader').css('display', 'inline-block');
//
//
//       $('input[name=first_name]').val();
//       //make the AJAX call
//       $.ajax({
//         url: '/form',
//         type: 'POST',
//         data: {
//           firstName: testForm.firstName.value,
//           lastName: testForm.lastName.value,
//           born: testForm.born.value,
//           age: testForm.age.value,
//           phone: testForm.phone.value,
//           email: testForm.email.value,
//           address: testForm.address.value,
//           city: testForm.city.value,
//           state: testForm.state.value,
//           zipcode: testForm.zipcode.value,
//           marital_status: testForm.marital_status.value,
//           occupation: testForm.occupation.value,
//           place_work: testForm.place_work.value,
//           contact_person: testForm.contact_person.value,
//           relation: testForm.relation.value,
//           contactPerson_phone: testForm.contactPerson_phone.value
//         },
//         success: postSuccessHandler
//       });
//   }

  // function postSuccessHandler (jsonData) {
  //   var $data = $('#post-results-container .data');
  //
  //   //reset the UI
  //   $data.html('');
  //   $('.ajaxLoader').hide();
  //
  //   //update the UI with the data returned from the AJAX call
  //   $.each(jsonData, function (key, val) {
  //     $data.append('<li><b>' +  key + '</b>' + val + '</li><b>');
  //   });
  //
  //   $('#post-results-container').fadeIn();
  // };
