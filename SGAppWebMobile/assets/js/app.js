$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {
        var aid = $(this).attr('href');
        scrollToAnchor(aid);
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

    $('.js-modal-header-close').click(function(){
        $('.js-main-wrapper').attr('style','display:none;');
    });
    
    $('.js-sign-up-restorant-form').on('submit', function (e) {
        e.preventDefault();
        var postData=$(".js-sign-up-restorant-form").serialize();
        $.ajax({
            url: pathBase+'api/v1/signUpRestorant/',
            type: 'GET',
            dataType: "json",
            data: postData,
          })
          .success(function(data) {
            if(data.result == 'true'){
              $('.js-sign-up-restorant-form').load('modules/payment/index.html');
            }
            else {
              $('.js-sign-up-restorant-form .js-notification').html('<div class="notification error">Tu email ya se encuentra registrado.</div>');
            }
        }).fail(function(data) {
            $('.js-sign-up-form .js-notification').html('<div class="notification error">Error al ingresar los datos.</div>');
        });

    });

    $('.js-sign-up-restorant-free-form').on('submit', function (e) {
        e.preventDefault();
        var postData=$(".js-sign-up-restorant-free-form").serialize();
        $.ajax({
            url: pathBase+'api/v1/signUpRestorant/',
            type: 'GET',
            dataType: "json",
            data: postData,
          })
          .success(function(data) {
            if(data.result == 'true'){
              $('.js-sign-up-restorant-free-form').load('modules/sign_up_free/index.html');
            }
            else {
              $('.js-sign-up-restorant-free-form .js-notification').html('<div class="notification error">Tu email ya se encuentra registrado.</div>');
            }
        }).fail(function(data) {
            $('.js-sign-up-form .js-notification').html('<div class="notification error">Error al ingresar los datos.</div>');
        });

    });

    $('.js-sign-in-restorant-form').on('submit', function (e) {
        e.preventDefault();
        var postData=$(".js-sign-in-restorant-form").serialize();
        $.ajax({
            url: pathBase+'api/v1/loginRestorant/',
            type: 'GET',
            dataType: "json",
            data: postData,
          })
          .success(function(data) {
            if(data){
              if(data.restorant_payment == '1'){
                miresto.setLocalVar('restorant_id',data.restorant_id);
                miresto.setLocalVar('restorant_linkname',data.restorant_linkname);
                miresto.setLocalVar('restorant_name',data.restorant_name);
                miresto.setLocalVar('restorant_address',data.restorant_address);
                miresto.setLocalVar('restorant_tel',data.restorant_tel);
                miresto.setLocalVar('restorant_time',data.restorant_time);
                miresto.setLocalVar('restorant_map',data.restorant_map);
                miresto.setLocalVar('restorant_location_map',data.restorant_location_map);
                miresto.setLocalVar('restorant_country_code',data.restorant_country_code);
                miresto.setLocalVar('restorant_country_money',data.restorant_country_money);
                miresto.setLocalVar('restorant_country_price',data.restorant_country_price);
                miresto.setLocalVar('restorant_state_name',data.restorant_state_name);
                miresto.setLocalVar('restorant_token',data.restorant_token);

                $(location).attr("href",pathBase+"admin");
              }
              else {
                $('.js-sign-in-restorant-form .js-notification').html('<div class="notification error">Tu pago no ha sido registrado aÃºn, la confirmaciÃ³n puede demorar hasta 48hs, ante cualquier duda pÃ³ngase en contacto con nosotros.</div>');
                //alert('Tu pago no ha sido registrado, ante cualquier duda pongase en contacto con nosotros.');
              }
            }
            else {
               $('.js-sign-in-restorant-form .js-notification').html('<div class="notification error">Usuario o contraseÃ±a incorrecto.</div>');
               //alert('usuario o contraseÃ±a incorrecto');
            }

        }).fail(function(data) {
            //$('.js-sign-up-form .js-notification').html('<div class="notification error">Error al ingresar los datos.</div>');
            $('.js-sign-in-restorant-form .js-notification').html('<div class="notification error">Usuario o contraseÃ±a incorrecto.</div>');
        });

    });

    $('.js-btn-buy-now').click(function(){
        $('.js-sign-up-restorant-free-form').attr('style','display:block;'); 
        $('.js-btn-buy-now').attr('style','display:none;');         
    });

    $('.js-btn-contact-us').click(function(){
        if($('.js-modal-content').load('../modules/contact_us/index.html')){
            $('.js-main-wrapper').attr('style','display:block;');    
        }      
    });

    $('.js-restorant-country').on('change',function(){
        miresto.getStateData(this.value);
    });

    $('.js-link-app-demo').click(function(){
        window.open('http://hiresto.com/demo', '_blank');
    });

    
});
