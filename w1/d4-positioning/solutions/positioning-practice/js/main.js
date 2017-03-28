var stickyNavOffset = $('.sticky-nav-wrapper').offset().top;

$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance from the top of the page to the nav is: ' + stickyNavOffset);
	console.log('The distance scrolled is: ' + distanceScrolled);


});