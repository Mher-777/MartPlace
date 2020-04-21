$(function () {
	let basketTutorial =  () => {
	 	const basketPrice = $('.dropdown-basket__price-text');
		basketPrice.each(function () {
			let dataPrice = $(this).attr('data-price')
			$(this).text(`$${+dataPrice}`)
		})

	}
	let formStyler = () => {
		$('select').styler({
			selectSearch: true,
			selectSmartPositioning: false,
			selectVisibleOptions: 5,
		});
	}
	let mainRated = () => {
		$('.rated').rateYo({
			starWidth: "15px",
			normalFill: "#ccc",
			ratedFill: "#ffc000"
		})
	}
	let featuredSlider = () => {
		$('.js-featured-product__slider').slick({
			appendArrows: '.featured-product__control',
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 400,
			cssEase: 'linear',
			nextArrow: '<button class="slider-arrow featured-product__arrow featured-product__arrow--right"><svg class="svg-sprite-icon icon-chevron-right"><use xlink:href="static/images/sprite/symbol/sprite.svg#chevron-right"></use></svg></button>',
			prevArrow: '<button class="slider-arrow featured-product__arrow featured-product__arrow--left"><svg class="svg-sprite-icon icon-chevron-left"><use xlink:href="static/images/sprite/symbol/sprite.svg#chevron-left"></use></svg></button>',
		})
	}
	let filterDropDown = () => {
		const trigger = $(".section-top__filter");
		trigger.on('click', function () {
			$('.section-top__filter-dropdown').addClass('section-top__filter-dropdown--open')
		})
		$(document).on('click', function(event){
			if(trigger !== event.target && !trigger.has(event.target).length){
				$(".section-top__filter-dropdown").removeClass("section-top__filter-dropdown--open");
			}
		});
	}
	let newestProductFilter = () => {
	mixitup('.newest-product__inner',  {
		"animation": {
			"duration": 600,
			"nudge": true,
			"reverseOut": false,
			"effects": "fade rotateX(70deg)"
		}
	});




	}

	formStyler()
	basketTutorial()
	mainRated()
	featuredSlider()
	filterDropDown()
	newestProductFilter()


})