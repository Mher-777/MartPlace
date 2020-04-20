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
		$('.rated.rated--default').rateYo({
			rating: 4.5,
			starWidth: "15px",
			normalFill: "#ffc000",
			readOnly: true,
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
	formStyler()
	basketTutorial()
	mainRated()
	featuredSlider()
})