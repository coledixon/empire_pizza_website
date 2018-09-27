// jquery for Materialize modal
  
$(document).ready(function(){
// href attribute for .modal-trigger specifies modal ID to be triggered
  $('.modal-trigger').leanModal({
    dismissible: false, // modal can be dismissed by clicking outside scope
    opacity: .5, 
    in_duration: 300, // transition in 
    out_duration: 200, // transition out 
  });

});

// remove item from ul
$('.collection').on('click', '.secondary-content', function() {
  
  var val = $(this).closest('div').html(); // get innerHTML value
  val = val.substring(0, val.indexOf('<')); // remove child elements from string

  recalcCost(val);

  $(this).closest('li').remove();
});

// Materialize Switch event
$(".switch").find("input[type=checkbox]").on("change", function() {
  
  var status = $(this).prop('checked');
  enabledCreditCardForm(status);

});