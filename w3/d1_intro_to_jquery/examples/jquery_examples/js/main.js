$(document).ready(function() {
    
	// Part 1: text() vs. html() ===============================================
	
		$('h1').html('<a href="">jQuery</a> is <em>Awesome</em>!');
		// $('h1').text('<a href="">jQuery</a> is <em>Awesome</em>!');


	// Part 2: append(), prepend(), before(), after() ==========================

		// $('ul').append('<li>Appended content</li>');
		// $('ul').prepend('<li>Prepended content</li>');
		// $('ul').before('<li>Content inserted before</li>');
		// $('ul').after('<li>Content inserted after</li>');


	// Part 3: attr() =========================================================

		// $('img').attr('src', 'images/cold.gif');



	// Part 4: addClass(), removeClass() =======================================

	// $('body').addClass('sunshine');
	// $('.special').removeClass('special');


	// Part 5: slideUp(), fadeOut() ============================================

	// $('img').fadeOut(3000);
	// $('ul').slideUp('slow');

	// Part 5: on()  ===========================================================

	// $('button').on('click', function () {
	// 	$('body').toggleClass('sunshine');
	// });

});