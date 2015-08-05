function main() {

(function () {
   'use strict';

   /*====================================
    Main Navigation Stick to Top when Scroll
    ======================================*/
    function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('#sticky-anchor').offset().top;
      if (window_top > div_top) {
          $('#tf-menu').addClass('stick');
      } else {
          $('#tf-menu').removeClass('stick');
      }
  }

  $(function () {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
  });

    
 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70
        }, 1000);
        return false;
      }
    }
  });
});

 


}());


}
main();
// mail ------------------------------------------------------------------
function sendMail() {
				 var name = $('.sign-up__name').val(),
         email = $('.sign-up__email').val(),
         title = $('.sign-up__title').val(),
									text = $('.sign-up__message').val();
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': '8dfcdqaLJK6oGbQNDwPdQQ',
        'message': {
          'from_email': email,
								  'to': [
              {
                'email': 'al_kuramshin@mail.ru',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': title,
          'html': text
        }
      }


     }).done(function(response) {
      			  alert("Спасибо. Ваше сообщение отправлено успешно.");
					$('form')[0].reset();


   });

}

// ------------------------------------------------------------------

