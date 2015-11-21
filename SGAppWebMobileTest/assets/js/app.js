//pathBase='http://localhost/superguest/project/SGAppWebMobileTest/';
pathBase='http://192.168.1.36/superguest/project/SGAppWebMobileTest/';

function targetModule(){
  $(function(){
    var src=pathBase+'app/system/module/moduleView.html';
    //$('<iframe id="targetURL" src="'+src+'" class="target-URL hidden"/>').appendTo('body');
    $('<iframe id="targetURL" src="'+src+'" class="target-URL hidden"/>').appendTo('body');
    $('.target-URL').animate({left: 1000}, 300, function() {});
  });
}

function openModule(link){
  $('.wrapper-aside').animate({left: "-=80%"}, 300, function() {
    $('#targetURL').removeClass("hidden");
    $('.target-URL').animate({left: 0}, 300, function() {});
  });

}

function closeModule(){
  $('.target-URL').animate({left: 1000}, 300, function() {
    $('#targetURL').addClass("hidden");
  });
}

function redefineTarget(){
  targetModule();
  
  $('a').on('click', function(event) {
    event.preventDefault();
    /*
      This function is used to open a link
      
      target:
        - modal   // open a modal with link 
            eg:
             <a href="reserve" target="modal"> 

        - module    // open a module
        - url   // open a url external


    */
    var link = $(this).attr('href'); 
    var target = $(this).attr('target');

    switch(target) {
      case 'modal':
        alert('abre MODAL '+link);
        break;
      case 'module':
        openModule(link);
        break;
      case 'url':
        var link=pathBase+"/app/components/"+link
        alert(link);
        window.open(link);
        break;
      default:
        window.open(link);
    }

  });
}

$(document).ready(function(){
  redefineTarget();

  $('.btn-icon-menu').on('click', function () {
    $('.wrapper-aside').animate({left: "+=80%"}, 300, function() {});
  });
  
  $('.wrapper-content').on('click', function () {
    $('.wrapper-aside').animate({left: "-=80%"}, 300, function() {});
  });

});
