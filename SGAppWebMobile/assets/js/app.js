$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {
        var link = $(this).attr('href');
        alert(link);
  /*      scrollToAnchor(aid);*/
    });
  
    $('.menu').on('click', function () {
      if ($('.l-site').hasClass('is-open')) {
          $('.menu').removeClass('is-active');
          $('.l-site').removeClass('is-open');
      } else {
          $('.menu').addClass('is-active');
          $('.l-site').addClass('is-open');
      }
    });
    
    $('.nav a').on('click', function () {
        if ($('.l-site').hasClass('is-open')) {
            $('.menu').removeClass('is-active');
            $('.l-site').removeClass('is-open');
        }
    });

});
