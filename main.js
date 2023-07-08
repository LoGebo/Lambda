function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  
  $(document).ready(function () {
    setTimeout(function () {
      test();
    });
  });
  
  // Smooth scrolling animation
  $('a.nav-link').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
  
// Flag to know when the scroll event is triggered by a user action.
var userScroll = true;
var lastId;

$(window).scroll(function () {
    if (userScroll) {
        var scrollPos = $(window).scrollTop();
        var currLink;
        var refElement;
        
        // Store the nav-links in a variable to avoid querying the DOM multiple times
        var navLinks = $('a.nav-link');

        navLinks.each(function () {
            currLink = $(this);
            refElement = $(currLink.attr('href'));

            if (refElement.length > 0 && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                lastId = currLink; // If we are in a section, update the lastId variable
            }
        });
        
        // If the last active link is different than the current active link, update the navigation
        if (lastId && !lastId.parent().hasClass('active')) {
            navLinks.parent().removeClass('active');
            lastId.parent().addClass('active');

            var activeWidthHeight = lastId.parent().innerHeight();
            var activeWidthWidth = lastId.parent().innerWidth();
            var itemPosTop = lastId.parent().position();
            var itemPosLeft = lastId.parent().position();
            $(".hori-selector").css({
                "top": itemPosTop.top + "px",
                "left": itemPosLeft.left + "px",
                "height": activeWidthHeight + "px",
                "width": activeWidthWidth + "px"
            });
        }
    }
});

$('a.nav-link').on('click', function (event) {
    userScroll = false; // Disable the scroll event handler

    if (this.hash !== '') {
        userScroll = false;
        event.preventDefault();

        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
            userScroll = true; // Reset the flag at the end of the animation.
        });

        // Remove the active class from other nav items.
        $('a.nav-link').removeClass('active');

        // Add the active class to the current item.
        $(this).addClass('active');
        $('html, body').promise().done(function () {
            userScroll = true;
        });
    }
});


  
  $(window).on('resize', function () {
    setTimeout(function () {
      test();
    }, 500);
  });
  
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () {
      test();
    });
  });
  
  function updateHoriSelector() {
    var windowWidth = $(window).width();
    var horiSelector = $('.hori-selector');

    if (windowWidth <= 768) {
      horiSelector.find('.right, .left').css('background-color', '#0f3040');
      horiSelector.attr('style', 'border-bottom-left-radius: 15px !important; border-bottom-right-radius: 15px !important;');
    } else {
      horiSelector.find('.right, .left').css('background-color', '#f5f5f5');
      horiSelector.attr('style', 'border-bottom-left-radius: 0; border-bottom-right-radius: 0;');
    }
}

$(document).ready(updateHoriSelector); // Call on page load
$(window).on('resize', updateHoriSelector); // Call on window resize


  
 
  /*
    // Add active class on another page linked
    jQuery(document).ready(function ($) {
        // Get current path and find target link
        var path = window.location.pathname.split("/").pop();
      
        // Account for home page with empty path
        if (path == '') {
          path = 'index.html';
        }
      
        var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
        // Add active class to target link
        target.parent().addClass('active');
      });
    */