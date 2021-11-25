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

	// Toggle menu

	$('.js-open-menu-btn').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-active');
		$('.js-menu').toggleClass('is-opened');
		$('html').toggleClass('is-fixed');
	});

	$('.js-close-menu-btn').on('click', function(e) {
		e.preventDefault();

		$('.js-open-menu-btn').removeClass('is-active');
		$('.js-menu').removeClass('is-opened');
		$('html').removeClass('is-fixed');
	});


	$('.js-open-search-form-btn').on('click', function(e) {
		e.preventDefault();
		$('.js-search-form').addClass('is-opened');
	});


	if ($('#fullpage').length > 0) {
		var anchorsArr = [];

		$('.page-nav__link').each(function() {
			anchorsArr.push($(this).attr('data-menuanchor'));
		});



		$('#fullpage').fullpage({
			licenseKey: '338CA11B-1E654BF4-BE710B3A-9F49D13A',
			menu: '#pageNav',
			lockAnchors: true,
			anchors: anchorsArr,
			responsiveHeight: true,
			loopBottom: true,
			loopTop: true
			
		});


	}





	$('[data-fancybox]').fancybox({
		loop: false,
		buttons: ['close'],
		btnTpl: {
			close: '<button data-fancybox-close class="fancybox-button btn-close-fancy" type="button"><svg  viewBox="0 0 36 36"  xmlns="http://www.w3.org/2000/svg"><path d="M35 35L1 0.999999"/><path d="M35 0.999997L1 35"/></svg></button>',
			arrowLeft:
      '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
      '<svg viewBox="0 0 23 42" xmlns="http://www.w3.org/2000/svg"><path d="M22 1L2 21L22 41"></path></svg>' +
      "</button>",

    arrowRight:
      '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
      '<svg viewBox="0 0 23 42" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L21 21L1 41"></path></svg>' +
      "</button>",
		}
	});


	// Sliders


	if ($('.js-promo-slider').length > 0) {
		var promoSlider = new Swiper('.js-promo-slider', {
			loop: true,
			speed: 1000,
			navigation: {
				nextEl: '.js-promo-slider-btn-next',
			},
		});
	}

	if ($('.js-includes-slider').length > 0) {
		var includesSlider = new Swiper('.js-includes-slider', {
			loop: true,
			speed: 400,
			slidesPerView: 'auto',
			spaceBetween: 30,
			navigation: {
				nextEl: '.js-includes-slider-btn-next',
				prevEl: '.js-includes-slider-btn-prev',
			},
		});
	}


});
