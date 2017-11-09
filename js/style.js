  /**
   * ------------------------------------------------------------------------
   * Contact US
   * ------------------------------------------------------------------------
   */
function recheck(){
  if($('input[name="optin"]').is(':checked')){
    $('input[type="submit"]').prop('disabled', false);
  } else {
    $('input[type="submit"]').prop('disabled', true);
  }
}

$(function(){
  recheck();
  $('input[name="optin"]').click(function(){recheck();});
});



function myFunction() {
  alert("Kohwa Project is still work In Progress");
}

  /**
   * ------------------------------------------------------------------------
   * JS  http://jsbin.com/vajevemixu/edit?html,js,output 05:14 09-Nov-17
   * ------------------------------------------------------------------------
   */