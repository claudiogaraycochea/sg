//var pathBase='http://localhost/superguest/project/SGAppWebMobileTest/platforms/android/assets/www/site/';
pathBase='http://hiresto.com/sg/site/';

var sg = {

  init: function(){
      sg.redefineTargetLink();
      sg.bindEvents();
      sg.onDeviceReady();
  },

  /* Functions for module */

  moduleConstructor: function(){
    $(function(){
      var src=pathBase+'app/system/module/moduleView.html';
      $('<iframe id="module-iframe" src="'+src+'" class="module-iframe"/>').appendTo('body');
    });
  },

  moduleOpen: function(link){
    sg.mainMenuClose();
    $('#module-iframe').addClass('move-left');
    var link=sg.setLocalVar('linkPostData',link);
    $('#module-iframe').attr('src',pathBase+'app/system/module/moduleView.html');
  },

  moduleClose: function(){
    $('#module-iframe').removeClass('move-left');
  },

  /* Functions for modal */
  modalOpen: function(link){
    if($('#modal-content').load(link)){
      $('#modal-wrapper').removeClass('hidden');
    }       
  },

  modalClose: function(){
    $('#modal-content').html('');
    $('#modal-wrapper').addClass('hidden');
  },

  redefineTargetLink: function(){
    sg.moduleConstructor();
    
    $('a').on('click', function(event) {
      event.preventDefault();
      var link = $(this).attr('href'); 
      var target = $(this).attr('target');

      switch(target) {
        case 'modal':
          sg.modalOpen(link);
          break;
        case 'module':
          sg.moduleOpen(link);
          break;
        default:
          window.open(link);
      }

    });
  },

  mainMenuOpen: function(){
    $('#wrapper-aside').addClass('move-right');
  },

  mainMenuClose: function(){
    $('#wrapper-aside').removeClass('move-right');
  },
      
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  onDeviceReady: function() {
    new FastClick(document.body); // Execute FastClick, eliminate the 300ms of delay with a click
  },

  /* Set cookie */
  setLocalVar: function(name,value){
      sessionStorage.setItem(name,value);
  },

  /* Get cookie */
  getLocalVar: function(name){
      return sessionStorage.getItem(name);
  },

  /* Codifica cadena */
  encodeString: function(string){
      var encodedString = btoa(string);
      return encodedString;
  },

  /* Decodifica cadena */
  decodeString: function(encodedString){
      var decodedString = atob(encodedString);
      return decodedString;
  },
};

$(document).ready(function(){
 
  $('.btn-icon-menu').on('click', function () {
    sg.mainMenuOpen();
  });
  
  $('.wrapper-content').on('click', function () {
    sg.mainMenuClose();
  });

  $('#modal-header-close').click(function(){
    sg.modalClose();
  });

  sg.init();
});
