$(function() {

  if ($( window ).width() > 767)
    $('nav#site-map').equalize();

  $(".enlarge_image").fancybox({
      });
  
  $('a.solutions_back').click(function(){
//    console.log('sb');
//    alert ('sb');
//    parent.history.back();
    parent.history.go(-1);
    return false;
  });
});
