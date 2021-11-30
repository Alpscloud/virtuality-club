$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========



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


	$('.js-open-game-details-btn').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.js-game').find('.js-game-details').addClass('is-opened');
	});

	$('.js-close-game-details-btn').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.js-game-details').removeClass('is-opened');
	});


	

	//=============


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
			fitToSection: false,
			scrollOverflow: true
			
			
			
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

		$('.js-promo-slider').slick({
			infinite: true,
			nextArrow: $('.js-promo-slider-btn-next'),
			dots: false
		});

	}

	if ($('.js-includes-slider').length > 0) {

		$('.js-includes-slider').slick({
			infinite: true,
			slidesToShow: 4,
			variableWidth: true,
			nextArrow: $('.js-includes-slider-btn-next'),
			prevArrow: $('.js-includes-slider-btn-prev'),
			dots: false
		});

	}

	if ($('.js-top-games-slider').length > 0) {

		$('.js-top-games-slider').slick({
			centerMode: true,
			variableWidth: true,
			nextArrow: $('.js-top-games-slider-btn-next'),
			prevArrow: $('.js-top-games-slider-btn-prev'),
		});

	}




	if ($('.js-catalog-games-slider').length > 0) {
		
		$('.js-catalog-games-slider').each(function() {

			var self = $(this);

			self.slick({
				rows: 2,
				infinite: true,
				slidesToShow: 4,
				nextArrow: self.parents('.catalog-games__slider').find('.js-catalog-games-slider-btn-next'),
				prevArrow: self.parents('.catalog-games__slider').find('.js-catalog-games-slider-btn-prev'),
			});

		});

		$('.js-catalog-games-categories-slider').slick({
			infinite: true,
			slidesToShow: 8,
			nextArrow: $('.js-catalog-games-categories-slider-btn-next'),
			prevArrow: $('.js-catalog-games-categories-slider-btn-prev'),
		});


		function initCatalogGamesSlider() {
			$('.js-catalog-games-slider').slick({
				rows: 2,
				infinite: true,
				slidesToShow: 4,
				nextArrow: self.parents('.catalog-games__slider').find('.js-catalog-games-slider-btn-next'),
				prevArrow: self.parents('.catalog-games__slider').find('.js-catalog-games-slider-btn-prev'),
			});
		}



		$('.js-catalog-games-block').not(":first").hide();
	

		$('.js-catalog-category-btn').on('click', function(e) {
			e.preventDefault();

			$('.js-catalog-category-btn').removeClass('is-active');
			$(this).addClass('is-active');

			$('.js-catalog-games-block').hide();

			$('.js-catalog-games-block').eq($(this).attr('data-index')).fadeIn().addClass('is-active');

			$('.js-catalog-games-slider').slick('setPosition');

		});

	}


	if ($('.js-gallery-slider').length > 0) {
		$('.js-gallery-slider').slick({
			infinite: true,
			speed: 300,
			fade: true,
			cssEase: 'linear',
			asNavFor: '.js-gallery-slider-thumbnails'
		});

		$('.js-gallery-slider-thumbnails').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.js-gallery-slider',
			dots: false,
			nextArrow: $('.js-gallery-slider-thumbnails-btn-next'),
			prevArrow: $('.js-gallery-slider-thumbnails-btn-prev'),
			focusOnSelect: true
		});
	}

	if ($('.js-stocks-slider').length > 0) {
		$('.js-stocks-slider').slick({
			rows: 4,
			slidesToShow: 1,
			nextArrow: $('.js-stocks-slider-btn-next'),
			prevArrow: $('.js-stocks-slider-btn-prev'),
		});
	}

	if ($('.js-sertificates-slider').length > 0) {
		$('.js-sertificates-slider').slick({
			infinite: true,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 2,
			variableWidth: true,
			nextArrow: $('.js-sertificates-slider-btn-next'),
			prevArrow: $('.js-sertificates-slider-btn-prev'),
		});
	}

	if ($('.js-subscription-slider').length > 0) {
		$('.js-subscription-slider').slick({
			infinite: true,
			slidesToShow: 4,
			nextArrow: $('.js-subscription-slider-btn-next'),
			prevArrow: $('.js-subscription-slider-btn-prev'),
		});
	}

	if ($('.js-faq-slider').length > 0) {
		$('.js-faq-slider').slick({
			infinite: true,
			centerMode: false,
			slidesToShow: 8,
			nextArrow: $('.js-faq-slider-btn-next'),
			prevArrow: $('.js-faq-slider-btn-prev'),
		});
	}

	if ($('.js-feedbacks-slider').length > 0) {
		$('.js-feedbacks-slider').slick({
			infinite: true,
			centerMode: false,
			slidesToShow: 6,
			nextArrow: $('.js-feedbacks-slider-btn-next'),
			prevArrow: $('.js-feedbacks-slider-btn-prev'),
		});
	}
	
	


	


});
