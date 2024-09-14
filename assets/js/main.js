
(function ($) {
	"use strict";

	var windowOn = $(window);

	////////////////////////////////////////////////////
	// 01. PreLoader Js	

	$('.preloader__logo img').addClass('logo-blink');

	(function () {
		function id(v) { return document.getElementById(v); }
		function loadbar() {
			var ovrl = id("loading"),
				prog = id("tp-loading-line"),
				img = document.images,
				c = 0,
				tot = img.length;
			if (tot == 0) return doneLoading();

			function imgLoaded() {
				c += 1;
				var perc = ((100 / tot * c) << 0) + "%";
				prog.style.width = perc;

				if (c === tot) return doneLoading();
			}
			function doneLoading() {

				setTimeout(function () {
					$("#loading").fadeOut(500);
				}, 100);
			}
			for (var i = 0; i < tot; i++) {
				var tImg = new Image();
				tImg.onload = imgLoaded;
				tImg.onerror = imgLoaded;
				tImg.src = img[i].src;
			}
		}
		document.addEventListener('DOMContentLoaded', loadbar, false);
	}());





	$('.newsletter-popups, .newsletter-overlays').addClass('opened');

	$(".newsletter-close-btn").on("click", function () {
		$(".newsletter-popup").removeClass("opened");
		$(".newsletter-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 03. Offcanvas Js
	$(".rs_header_menu_icon").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		// $(".offcanvas__full").addClass("offcanvas-full-opened");
		$(".body-overlay").addClass("opened");
	});

	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		// $(".offcanvas__full").removeClass("offcanvas-full-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 03. Offcanvas Js
	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("opened");
	});


	$(".cartmini-close-btn").on("click", function () {
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});




	////////////////////////////////////////////////////
	// 03. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
	});


	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
	});

	$(".job-form-open-btn").on("click", function () {
		$(".job__form").slideToggle("job__form");
	});


	// for header
	if ($("#tp-header-lang-toggle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('tp-header-lang-toggle').contains(e.target)) {
				$(".tp-lang-list").toggleClass("tp-lang-list-open");
			}
			else {
				$(".tp-lang-list").removeClass("tp-lang-list-open");
			}
		});
	}

	// for footer
	if ($("#tp-footer-lang-toggle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('tp-footer-lang-toggle').contains(e.target)) {
				$(".tp-lang-list-2").toggleClass("tp-lang-list-open-2");
			}
			else {
				$(".tp-lang-list-2").removeClass("tp-lang-list-open-2");
			}
		});
	}

	////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".offcanvas__full").removeClass("offcanvas-full-opened");
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});



	function smoothSctollTop() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 150
				}, 1000);
			}
		});
	}
	smoothSctollTop();



	////////////////////////////////////////////////////
	// 06. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	var btn = $('#back_to_top');
	var btn_wrapper = $('.back-to-top-wrapper');

	windowOn.scroll(function () {
		if (windowOn.scrollTop() > 300) {
			btn_wrapper.addClass('back-to-top-btn-show');
		} else {
			btn_wrapper.removeClass('back-to-top-btn-show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
	});




	////////////////////////////////////////////////////
	// 07. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});
	$("[data-color]").each(function () {
		$(this).css("color", $(this).attr("data-color"));
	});




	var tp_rtl = localStorage.getItem('tp_dir');
	let rtl_setting = tp_rtl == 'rtl' ? true : false;











	////////////////////////////////////////////////////
	// 08.  Slider Js
	// Initialize Swiper
	var swiper = new Swiper('.product_slider_active', {
		slidesPerView: 7,
		loop: true,
	});




	var swiper = new Swiper('.filter_slider', {
		slidesPerView: 3, // Show 3 slides at a time
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.rs_filter_next',
			prevEl: '.rs_filter_prev',
		},
		watchOverflow: false,
	});

	// Function to filter slides
	function filterSwiper(filterValue) {
		var allSlides = document.querySelectorAll('.filter_slider .swiper-slide');

		// If filterValue contains multiple classes, split them
		var filterClasses = filterValue.split(' ');

		allSlides.forEach(function (slide) {
			// Show/hide slides based on the filter
			var hasClass = filterClasses.some(function (cls) {
				return slide.classList.contains(cls.substring(1)); // Remove '.' from class name
			});

			if (filterValue === '*' || hasClass) {
				slide.classList.remove('is-hidden'); // Show slide
			} else {
				slide.classList.add('is-hidden'); // Hide slide
			}
		});

		// Update Swiper after hiding or showing slides
		swiper.update();
	}

	// Filter items on button click
	var filtersElem = document.querySelector('.rs_filter_tabs');
	filtersElem.addEventListener('click', function (event) {
		if (!event.target.matches('button')) {
			return;
		}
		var filterValue = event.target.getAttribute('data-filter');
		filterSwiper(filterValue);
	});

	// Initial Swiper setup
	swiper.update();











	/////////////////////////////////////////
	// counterUp //////////////////////

	$(document).ready(function () {
		$('.counter').counterUp({
			delay: 1,
			time: 300
		});
	});

	// Initialize WOW.js for on-scroll animations
	new WOW({
		boxClass: 'wow',
		animateClass: 'animate__animated',
	}).init();

	// /////////////////////////////
	// niceSelect 

	$('.rs_portfolio_sort-select').niceSelect();


	////////////////////////////////////
	// Initialize MixItUp 

	var mixer = mixitup('.rs_portfolio_grid', {
		selectors: {
			target: '.rs_portfolio_item'
		},
		// Add other configuration options if needed
	});

	// Handle the change event on the select element
	$('.rs_portfolio_sort-select').on('change', function () {
		var sortValue = $(this).find('option:selected').data('sort');

		// Apply sorting based on the selected option
		mixer.sort(sortValue);
	});





	////////////////////////////////////
	// Initialize Swiper slider for all tabs
	const initSwiper = () => {
		const sliders = document.querySelectorAll('.mySwiper');
		sliders.forEach(slider => {
			new Swiper(slider, {
				loop: true,
				slidesPerView: 2,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		});
	};

	// Initialize Swiper when the document is ready
	document.addEventListener('DOMContentLoaded', initSwiper);

	// Reinitialize Swiper when tabs are clicked
	document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
		tab.addEventListener('shown.bs.tab', () => {
			initSwiper();  // Reinitialize swiper to ensure it works on each tab
		});
	});






























})(jQuery);