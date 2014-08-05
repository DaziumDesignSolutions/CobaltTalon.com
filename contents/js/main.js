$(function() {

  if ($( window ).width() > 767)
    $('nav#site-map').equalize();

  $(".enlarge_image").fancybox({
      });
  
  $('a.back_one').click(function(){
//    console.log('sb');
//    alert ('sb');
//    parent.history.back();
    parent.history.go(-1);
    return false;
  });

  $('.methodology .description').hide();
  $('.methodology .boxes').click(function(e) {
    $descrip = $(this).parent().find('.description');
    $descrip.slideToggle('fast');
  });   
});
