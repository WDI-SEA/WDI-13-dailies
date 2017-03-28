$( document ).ready(function () {

	// mouseenter and mouseleave
	$('#elvis button').on('mouseenter', function() { 
	  $('#elvis p').html('Elvis has entered the building!');
	  $('#elvis img').fadeIn(350);
	});


	$('#elvis button').on('mouseleave', function() { 
	  $('#elvis p').html('Elvis has left the building!');
	  $('#elvis img').fadeOut(350);
	});




	// keyup
	$('#cat input').on('keyup', function() { 
	  var userInput = $(this).val();
		if (userInput === "cat") {
			$('#cat img').fadeIn(350);
		}
	});



	// keydown and keypress
	var keydownCounter = 0;
	var keypressCounter = 0;

  $('#counter input').on('keydown', function () {
    $('#keydownCounter').html(++keydownCounter);
  });
    
  $('#counter input').on('keypress', function () {
    $('#keypressCounter').html(++keypressCounter);
  });


  // Submit
  $('#myForm').on('submit', function (e) {
  	e.preventDefault();

  	$('#formEvents p').html('Form has been submitted!');
  });


  // Focus
  $('#formEvents input').on('focus', function () {
  	$('#formEvents p').html('input is in focus!');
  });

  // Blur
  $('#formEvents input').on('blur', function () {
  	$('#formEvents p').html('input is no longer in focus.');
  });

  // Scroll
  $(window).on('scroll', function () {
  	if ($(window).scrollTop() > 300) {
  		$('body').css('background-color', 'yellow');
  	}
  });

  // Resize
  $( window ).on('resize', function() {
  	if ($(window).width() < 700) {
  		$('body').css('background-color', 'turquoise');
  	}
  });
 
});



