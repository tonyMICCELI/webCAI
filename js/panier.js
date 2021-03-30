$(function () {
  $('[data-toggle="popover"]').popover()
})
$('.popover-dismiss').popover({
  trigger: 'focus'
})
 $(function(){
    $('[rel="panier"]').popover({ 
      content: function() {
        return $('#popover_content_panier').html();
      }
    });
  });