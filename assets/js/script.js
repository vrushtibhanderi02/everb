

 // pre-loader
 $(document).ready(function(){
    setTimeout(function(){
      $('.pre-loader').fadeOut();
    },3000);
  });


// bottomtop 
var btn = $('.top-bottom');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// sticky header
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        dots:false,
        nav:true,
        navText:['<i class="las la-angle-left"></i>','<i class="las la-angle-right"></i>'],
        smartSpeed:3000,
    })
  });

// accordian faq

  // Clicking on the accordion header title
  
  $(".accordions").on("click", ".accordions_title", function() {
	// will (slide) toggle the related panel.
	$(this).toggleClass("active").next().slideToggle();
	});