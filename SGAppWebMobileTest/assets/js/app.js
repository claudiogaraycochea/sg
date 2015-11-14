$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {
        var link = $(this).attr('href');
        alert(link);
  /*      scrollToAnchor(aid);*/
    });

    $('.btn-icon-menu').on('click', function () {
      $('.wrapper-aside').animate({left: "+=80%"}, 300, function() {});
    });
    
    $('.wrapper-content').on('click', function () {
      $('.wrapper-aside').animate({left: "-=80%"}, 300, function() {});
    });
});
