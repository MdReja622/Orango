(function ($) {
  "use strict";


  // Offcanvas Js
  $(".rs_header_menu_icon").on("click", function () {
    $(".rs_offcanvas_area").addClass("rs_offcanvas_open");
    $(".rs_body_overlay").addClass("opened");
  });

  $(".rs_offcanvas_close_btn").on("click", function () {
    $(".rs_offcanvas_area").removeClass("rs_offcanvas_open");
    $(".rs_body_overlay").removeClass("opened");
  });
  $(".rs_body_overlay").on("click", function () {
    $(".rs_offcanvas_area").removeClass("rs_offcanvas_open");
    $(".rs_body_overlay").removeClass("opened");
  });

  // mobile menu 
  // menu clone 
  var rsMenuWrap = $('.rs_header_menu nav > ul').clone();
  var rsSideMenu = $('.rs_mobile_menu_wrapper nav');
  rsSideMenu.append(rsMenuWrap);


  // Find submenus and add toggle button with icon
  if ($(rsSideMenu).find('.sub-menu, .rs_mega_menu').length != 0) {
    $(rsSideMenu).find('.sub-menu, .rs_mega_menu').parent().append('<button class="rs_menu_close"><i class="fas fa-chevron-right"></i></button>');
  }

  // Handle click on menu toggle buttons and links
  var sideMenuList = $('.rs_mobile_menu_wrapper nav > ul > li button.rs_menu_close, .rs_mobile_menu_wrapper nav > ul li.has-sub-menu > a');

  $(sideMenuList).on('click', function (e) {
    e.preventDefault();

    // Toggle active class and submenu
    var $parentLi = $(this).parent(); // Get parent li of clicked button or link
    var $submenu = $(this).siblings('.sub-menu, .rs_mega_menu'); // Get submenu

    if (!$parentLi.hasClass('active')) {
      $parentLi.addClass('active');
      $submenu.slideDown(); // Show submenu
    } else {
      $submenu.slideUp(); // Hide submenu
      $parentLi.removeClass('active');
    }
  });



})(jQuery);