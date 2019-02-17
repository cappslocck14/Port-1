$( document ).ready(function() {
  $( '.contact-menu__item' ).each(function() {
    new Tooltip($(this), {
		title: $(this).attr('data-tooltip'),
        trigger: "hover",
      placement: 'top',
    });
  });
	
	
	$( '.footer-list__item').each(function() {
    new Tooltip($(this), {
		title: $(this).attr('data-tooltip'),
        trigger: "hover",
      placement: 'top',
    });
  });
	
	$('.footer-list:nth-child(1)').click(function(){
		event.preventDefault();
		$('.footer-hide').css('display','block');
		
	})
	
	
	$('.main-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
 arrows: true,
		responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
   ]
});
	
	var connectTabs = new Tabs();
	
	$('.showMenu').click(function(){
		var menu = $('.main-menu')
		if(menu.is(":visible") == true) {
			menu.animate({
				opacity: 0,
				height: 0
			}).hide(200);
		} else {
			menu.show().animate({
				opacity: 1,
				height: 235
			});
		}
		
	})
	
});

$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scroll-up').fadeIn();
} else {
$('.scroll-up').fadeOut();
}
});
 
$('.scroll-up').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
 
});