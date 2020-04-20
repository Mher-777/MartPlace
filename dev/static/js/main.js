$(function () {
	let basketTutorial = function () {
	 	const basketPrice = $('.dropdown-basket__price-text');
		basketPrice.each(function () {
			let dataPrice = $(this).attr('data-price')
			$(this).text(`$${+dataPrice}`)
		})

	}
	let formStyler = function(){
		$('select').styler({
			selectSearch: true,
			selectSmartPositioning: false,
			selectVisibleOptions: 5,
		});
	}
	formStyler()
	basketTutorial()
})