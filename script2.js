$(function(){
  $('.header-right-iphone').click(function(){
    var $list =$(this).find('.menu-list');
    if($list.hasClass('open')){
      $list.removeClass('open');
      $list.slideUp();
    }else{
      $list.addClass('open');
      $list.slideDown();
    }
  });
});



$(function(){
 $('.index').click(function(){
   $('.active').removeClass('active');
   var clickedIndex = $('.index').index($(this));
   $('.language-item').eq(clickedIndex).addClass('active');

   
  
 
});
});
  
 
