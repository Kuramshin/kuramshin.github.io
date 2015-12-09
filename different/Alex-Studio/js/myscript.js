window.jQuery = window.$ = jQuery;


/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function () {
	//Preloader
	setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})",800);
	setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)",800);

});





/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
function calculateScroll() {
	var contentTop      =   [];
	var contentBottom   =   [];
	var winTop      =   $(window).scrollTop();
	var rangeTop    =   200;
	var rangeBottom =   500;
	$('.navmenu').find('.scroll_btn a').each(function(){
		contentTop.push( $( $(this).attr('href') ).offset().top);
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	})
	$.each( contentTop, function(i){
		if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
			$('.navmenu li.scroll_btn')
			.removeClass('active')
			.eq(i).addClass('active');			
		}
	})
};

jQuery(document).ready(function() {
	//MobileMenu
	if ($(window).width() < 768){
		jQuery('.menu_block .container').prepend('<a href="javascript:void(0)" class="menu_toggler"><span class="fa fa-align-justify"></span></a>');
		jQuery('header .navmenu').hide();
		jQuery('.menu_toggler, .navmenu ul li a').click(function(){
			jQuery('header .navmenu').slideToggle(300);
		});
	}
		
	// if single_page
	if (jQuery("#page").hasClass("single_page")) {			
	}
	else {
		$(window).scroll(function(event) {
			calculateScroll();
		});
		$('.navmenu ul li a, .mobile_menu ul li a').click(function() {  
			$('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);
			return false;
		});
	};
});





	


/*-----------------------------------------------------------------------------------*/
/*	FLEXSLIDER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function(){
	//Top Slider
	$('.flexslider.top_slider').flexslider({
		animation: "fade",
		controlNav: true,
		directionNav: true,
		prevText: "",
		nextText: ""
	});
	
	
	//Vision Slider
	$('.flexslider.blog_post_slider').flexslider({
		animation: "slide",
		controlNav: true,
		directionNav: true,
		prevText: "",
		nextText: ""
	});
	
	
	//Testimonials Slider
	$('.flexslider.testimonials_slider').flexslider({
		animation: "slide",
		controlNav: true,
		directionNav: false,
		direction: "vertical",
		prevText: "",
		nextText: ""
	});
	
	
	//Twitter Slider
	$('.flexslider.twitter_list').flexslider({
		animation: "fade",
		controlNav: true,
		directionNav: false,
		animationLoop: false,
		slideshow: true,
		prevText: "",
		nextText: ""
	});
	
	
});










/*-----------------------------------------------------------------------------------*/
/*	IFRAME TRANSPARENT
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
});







/*-----------------------------------------------------------------------------------*/
/*	TIMER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	$('.interesting_facts').appear(function() {
		$(".timer .count").each(function() {
			var counter = $(this).html();
			$(this).countTo({
				from: 0,
				to: counter,
				speed: 3500,
				refreshInterval: 20,
			});
		});
	});
});



/*-----------------------------------------------------------------------------------*/
/*	TWITTER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {	
	jQuery('.tweet_module').tweet({
		modpath: 'twitter/',
		count: 3,
		username : 'Evick Agency'
	});
});




/*-----------------------------------------------------------------------------------*/
/*	CONTACT FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	$("#ajax-contact-form").submit(function() {
		var str = $(this).serialize();		
		$.ajax({
			type: "POST",
			url: "contact_form/contact_process.php",
			data: str,
			success: function(msg) {
				// Message Sent - Show the 'Thank You' message and hide the form
				if(msg == 'OK') {
					result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
				} else {
					result = msg;
				}
				$('#note').html(result);
			}
		});
		return false;
	});
});


//Contact Height
jQuery(document).ready(function(){
	contactHeight();
	
});

jQuery(window).resize(function(){
	contactHeight();
	
});

function contactHeight(){
	var wh = $(window).height();
	var container_h = $('#contacts').height();
	
	$('#contacts').css('min-height', wh - 240);
}





/*-----------------------------------------------------------------------------------*/
/*	SCROLL TOP
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {	
	$("a.back_top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
});






/*-----------------------------------------------------------------------------------*/
/*	PRICE HOVER EFFECT
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	$(".price_item").hover(
		function () {
			$(this).addClass("price_active");
		}
	);
	$(".price_item").hover(
		function () {
			$('.price_item').removeClass("price_active");
				$(this).addClass("price_active");
			}
		);
});


















