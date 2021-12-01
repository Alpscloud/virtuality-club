$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========


	// Fancybox
	function fancyboxInit() {
		$('[data-fancybox]').fancybox({
			loop: false,
			buttons: ['close'],
			btnTpl: {
				close: '<button data-fancybox-close class="fancybox-button" type="button"><svg viewBox="0 0 36 36"  xmlns="http://www.w3.org/2000/svg"><path d="M35 35L1 0.999999"/><path d="M35 0.999997L1 35"/></svg></button>',
				arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
					'<svg  viewBox="0 0 12 20"  xmlns="http://www.w3.org/2000/svg"><path d="M2.65393 9.81978L10.881 1.59274C11.1654 1.30828 11.1654 0.847105 10.881 0.562646C10.5965 0.278272 10.1353 0.278272 9.85087 0.562646L1.10879 9.30473C0.824414 9.58919 0.824414 10.0504 1.10879 10.3348L9.85087 19.0769C10.1403 19.3564 10.6015 19.3484 10.881 19.059C11.1536 18.7767 11.1536 18.3291 10.881 18.0468L2.65393 9.81978Z" /></svg>' +
					"</button>",
				arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
					'<svg viewBox="0 0 12 20"  xmlns="http://www.w3.org/2000/svg"><path d="M9.34607 9.81978L1.11903 1.59274C0.834613 1.30828 0.834613 0.847105 1.11903 0.562646C1.40353 0.278272 1.86467 0.278272 2.14913 0.562646L10.8912 9.30473C11.1756 9.58919 11.1756 10.0504 10.8912 10.3348L2.14913 19.0769C1.85972 19.3564 1.39854 19.3484 1.11903 19.059C0.846394 18.7767 0.846394 18.3291 1.11903 18.0468L9.34607 9.81978Z" /></svg>' +
					"</button>",
			}
		});
	}

	fancyboxInit();



	// Toggle menu

	$('.js-open-menu-btn').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-active');
		$('.header').toggleClass('is-opened');
		$('.js-menu').toggleClass('is-opened');
		$('html').toggleClass('is-fixed');
	});

	$('.js-close-menu-btn').on('click', function(e) {
		e.preventDefault();

		$('.js-open-menu-btn').removeClass('is-active');
		$('.js-menu').removeClass('is-opened');
		$('.header').removeClass('is-opened');
		$('html').removeClass('is-fixed');
	});


	$('.js-open-search-form-btn').on('click', function(e) {
		e.preventDefault();
		$('.js-search-form').addClass('is-opened');
	});


	// Popups


	$('.js-popup').on('click', '.js-close-popup-btn', function() {
		$(this).parents('.js-popup').stop().fadeOut(300);
		$('html').removeClass('is-fixed');
		setTimeout(function() {
			$('.js-popup').removeClass('is-lightmode');
			$('.js-popup').removeClass('is-outer');
		}, 310);
		

	});



	$('.popup__overflow').on('click', function(e) {


		var content = $(this).find('.popup__body');

		if(!content.is(e.target) && content.has(e.target).length === 0) {
			$('html').removeClass('is-fixed');
			$('.js-popup').stop().fadeOut(300);
			setTimeout(function() {
				$('.js-popup').removeClass('is-lightmode');
				$('.js-popup').removeClass('is-outer');
			}, 310);
	
		}

	});




	$('.js-open-popup-template-btn').on('click', function(e) {
		e.preventDefault();
		var popupContentParent = $(this).parents('.js-popup-content-parent');
		var popupContent = popupContentParent.find('.js-popup-content .popup-content').clone();

		if ($(this).attr('data-popup-lightmode')) {
			$('.js-popup-template').addClass('is-lightmode');
		}

		if ($(this).attr('data-popup-outer')) {
			$('.js-popup-template').addClass('is-outer');
		}


		$('.js-popup-template .popup-content').empty().append(popupContent);
		$('.html').addClass('is-fixed');

		$('.js-popup-template').stop().fadeIn(300);

		fancyboxInit();
		
		
	});


	// custom scroll
	$('.js-custom-scroll').each(function() {


	$(this).niceScroll({
		cursorwidth: "4px",
		autohidemode: true,
		background: '#ADC9D6',
		cursorcolor: "#0095D9",
		cursorborder: "none", // css definition for cursor border
		cursorborderradius: "5px"
	});

		});
	//=============


	// Fullpage
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
