pathBase='http://192.168.1.35/superguest/project/SGAppWebMobileTest/';
//pathBase='http://hiresto.com/sg/';

function targetModule(){
  $(function(){
    var src=pathBase+'app/system/module/moduleView.html';
    $('<iframe id="targetURL" src="'+src+'" class="target-URL hidden"/>').appendTo('body');
    $('.target-URL').animate({left: 1000}, 300, function() {});
  });
}

function openModule(link){
  $('#wrapper-aside').animate({left: "-=80%"}, 300, function() {
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
    var link = $(this).attr('href'); 
    var target = $(this).attr('target');

    switch(target) {
      case 'modal':
        openModal(link);
        break;
      case 'module':
        openModule(link);
        break;
      default:
        window.open(link);
    }

  });
}

function openModal(link){
  if($('#modal-content').load(link)){
    $('#modal-wrapper').removeClass("hidden");
  }       
}

function closeModal(){
  $('#modal-content').html('');
  $('#modal-wrapper').attr('style','display:none;');
}

$(document).ready(function(){
  redefineTarget();

  $('.btn-icon-menu').on('click', function () {
    $('#wrapper-aside').animate({left: "+=80%"}, 300, function() {});
  });
  
  $('.wrapper-content').on('click', function () {
    $('#wrapper-aside').animate({left: "-=80%"}, 300, function() {});
  });

  $('#modal-header-close').click(function(){
    $('#modal-wrapper').addClass("hidden");
  });
    
});
