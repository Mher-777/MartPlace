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
	formStyler()
	basketTutorial()
})