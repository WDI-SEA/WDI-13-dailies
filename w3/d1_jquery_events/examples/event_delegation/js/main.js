
// When the user submits the form
$('form').on('submit', function (e) {
	e.preventDefault(); // Prevent the page from reloading

	var newTask = $('input').val(); // Grab the value the user entered into the input
	$('#taskList').append('<li>' + newTask + '</li>'); // Add a new task to the #taskList

	$('input').val(''); // Empty out the input field
});

$('ul').on('click', 'li', function (e) {
	$(this).addClass('completed');
});