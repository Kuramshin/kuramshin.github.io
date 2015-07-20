$(document).ready(function(){



	$(window).scroll(function() {
	if($(this).scrollTop() > 200) {
		$('.services__block').addClass('services__block_animated');
	}
	else {
		$('.services__block').removeClass('services__block_animated');
	}
	});


	// animated service block
		$(window).scroll(function() {
	if($(this).scrollTop() > 200) {
		$('.services__block').addClass('services__block_animated');
	}
	else {
		$('.services__block').removeClass('services__block_animated');
	}
	});
		// end animated service block


});
