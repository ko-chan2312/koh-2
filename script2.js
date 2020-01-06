$(function(){
 $('.index').click(function(){
   $('.active').removeClass('active');
   var clickedIndex = $('.index').index($(this));
   $('.language-item').eq(clickedIndex).addClass('active');

   
  
 
});
});
