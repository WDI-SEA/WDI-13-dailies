$(document).ready(function () {

	$('form').on('submit', function (evt) {
		// Prevent the default action
		evt.preventDefault();

		// Get the value the user entered
		var comment = $('#comment').val();

		// If the comment field is not blank
		if (comment !== '') {

			var newComment = '<li>' + comment + ' <a href="" class="delete">Delete</a></li>'

			$('#commentList').append(newComment);

			$('#comment').val('');
		}
	});

	$('#commentList').on('click', '.delete', function (evt) {
		evt.preventDefault();

		$(this).parent().remove();
	});

});
