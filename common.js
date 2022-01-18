$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});


	// Popup
	$('.js-open-popup-form-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});


	$('.js-close-popup-btn').on('click',function(e) {
		e.preventDefault();
		$(this).parents('.js-popup').fadeOut(300);
		$('html').removeClass('is-fixed');
	});

	$('.popup__overflow').on('click', function(e) {
		e.stopPropagation();

		var content = $(this).find('.popup__body');

		if(!content.is(e.target) && content.has(e.target).length === 0) {
			$('html').removeClass('is-fixed');
			$('.js-popup').fadeOut(300);
		}

	});

	$('.js-smooth-scroll-link').on('click', function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;

		if ($('.js-open-mobile-menu-btn').hasClass('is-active')) {
			$('.js-nav').removeClass('is-opened');
			$('html').removeClass('is-fixed');
			$(this).removeClass('is-active');
		}

		$('html, body').animate({scrollTop: top}, 300);
	});

	$('.js-open-mobile-menu-btn').on('click', function(e) {
		e.preventDefault();
		$('html').toggleClass('is-fixed');
		$('.js-nav').toggleClass('is-opened');
		$(this).toggleClass('is-active');
	});

	position=0;
	var interval = setInterval(function () {
	position += 1;
	$(".running-anim").css({ "background-position":+ position +"px 0px" }) },9 );

	var gallerySlider = new Swiper('.js-gallery-slider', {
		loop: true,
		spaceBetween: 0,
		navigation: {
			nextEl: '.js-gallery-slider-btn-next',
			prevEl: '.js-gallery-slider-btn-prev',
		},
		
	});

	var gallerySliderSlides = parseInt($('.gallery-slider__pagination').attr('data-total-slides'));

	gallerySlider.on('slideChange', function () {
		var ind = gallerySlider.realIndex + 1;
		var current = $('.js-gallery-slider-pagination-current');

		if (current.length > 0) {
			if (ind == 0) {
				current.html('01');
			}
			if (gallerySliderSlides >= 10) {
				current.html(ind);
			} else {
				current.html('0'+ind);
			}
		}
	});


	// ========= Ajax form ===========

	$('form').on('submit', function(e) {
		e.preventDefault();

		var that = $(this);
		// 	inputs = that.find('.js-input'),
		// 	flag = true;

		// // Validate
		// $(inputs).each(function() {
		// 	if(!$(this).val() || $(this).val() == "") {
		// 		$(this).addClass('is-error');
		// 		flag = false;
		// 	}
		// });

		// if(!flag) {return false;}

		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: that.serialize()
		}).done(function() {
			that.trigger("reset");
			window.location.href = '/allon4/spasibo.html';
		});

	});
	// ========= =========== =========== ===========

	$('[data-fancybox]').fancybox();

	$("input[type=tel]").inputmask({"mask": "+38 (999) 999-9999","clearIncomplete": false});


});
