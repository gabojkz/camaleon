$( document ).ready(function() {
  console.log( "ready!" );

  $('.alert__exit').click(function(ev) {
    ev.preventDefault();
    // finds the parent and remove it
    $(this).closest('.alert').fadeOut('400', function() {
      $(this).remove();
    });
  });

});

