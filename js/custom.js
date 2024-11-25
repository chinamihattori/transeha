'use strict';

// selectbox

  $(function(){
    $('.js-selectbox').click(function(){
      $(this).children('span.l-localNav__btn').toggleClass('is-open');
      $(this).toggleClass('is-open');
      $(this).children('ul').stop().slideToggle();
    }); 
    $('.js-selectbox ul li a').on('click', function() {
      $('.js-selectbox ul').slideToggle();
      $('span.l-localNav__btn').removeClass('is-open');
    });
  });

  $(function(){
    $('a[href^="#"]').click(function(){
      var adjust = 0;
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });



  $("a[href^='#']").click(function() {
    if ($(this).data("toggle")) {
        return true;
    }
    var navHeight = parseInt($("nav").css("height"));
    var toolbarHeight = parseInt($("#page-top").css("padding-top"));
    var headerHeight = navHeight + toolbarHeight;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHeight;
    $("html, body").scrollTop(position);
    return false;
  });

// sp menu

  $(function(){
    $(".openbtn").click(function () {
    $(this).toggleClass("active");
    $("#gnav").toggleClass("list_active");
    });

    $("#gnav a").click(function () {
    $(".openbtn").removeClass("active");
    $("#gnav").removeClass("list_active");
    });
  });

  // $(function(){
  //     $('.nav-open').click(function(){
  //         $(this).toggleClass('active');
  //         $(this).next('ul').slideToggle();
  //     });
  // });



// MV animetion

  function slideAnime(){
    $('.leftAnime').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
    }else{
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
    }
    });
  }

  $(window).on('load', function(){
      slideAnime();
  });

// smooth scroll

  var headerHeight = jQuery('header').outerHeight() + 20;

  jQuery('a[href*="#"]').click(function () {
    var target = jQuery(this.hash === '' ? 'html' : this.hash);
    var position = target.offset().top - headerHeight;
    if (target.length) {
      jQuery('html, body').animate({scrollTop:position}, 500, 'swing');
      return false;
    }
  });

  var urlHash = location.hash;
  if(urlHash) {
    var target = jQuery(urlHash);
    var position = target.offset().top - headerHeight;
    jQuery('body,html').stop().scrollTop(position - 200);
    setTimeout(function(){
      jQuery('body,html').stop().animate({scrollTop:position}, 500, 'swing');
    }, 100);
  }



// back-top btn

  $(function(){
        var topBtn = $('#back-top');
        topBtn.hide();
        $(window).scroll(function () {
            var w = $(window).width();
            if ($(this).scrollTop() > 100) {
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        });
        topBtn.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });


