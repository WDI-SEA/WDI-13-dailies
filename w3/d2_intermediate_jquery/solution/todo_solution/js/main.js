

	// Global values ---------------
var count = 0;

// Events ----------------------

// When the user submits their to-do list item
$('#taskForm').on('submit', addNewItem);

// When an item's checkbox gets clicked, mark as complete or incomplete
$('#taskList').on('change', 'input[type="checkbox"]', toggleStatus);

// When the user clicks remove next to a todo list item
$('#taskList').on('click', '.remove', removeItem);

// When the user clicks the edit better next to a list item
$('#taskList').on('click', '.edit', editItem);

// When user hits enter in the edit form
$('#taskList').on('submit', '.editor', saveItem);

// When the user clicks the Delete Tasks button
$('#deleteTasks').on('click', deleteTasks);
	
// When the users clicks the Clear Completed button
$('#clearCompleted').on('click', clearCompleted)



// Functions ----------------------
function updateCount() {
	console.log(count);

	// Count the number of items
	count = $('#taskList li').not('.completed').length;

	// Print the new count
	$('.count').html(count + " todos");
}

function addNewItem(e) {
	e.preventDefault();
	// Select the input field the user has typed their to-do list info into
	// Get the value of the input field
	var itemText = $('#newItemDescription').val();

	$('#newItemDescription').val('');

	// Create a list item
	// Place the text inside of the list item
	var newListItem = '<li><input type="checkbox"><span class="item">' + itemText + '</span><a href="#" class="edit">Edit</a><a href="#" class="remove">Remove</a></li>';

	// Append the list item to our ordered to-do list
	$('#taskList').append(newListItem);

	// Update counter
	updateCount();
}

function toggleStatus() {
	console.log('switchStatus function is running!');
	console.log($(this)); // Just to confirm what "this" is

	// Get the to-do list item the user clicked on
	// Add a css line-through style to the item
	$(this).parent().toggleClass('completed');

	// Update counter
	updateCount();
}

function removeItem() {
	// Select the to-do list item the user wants to remove
	// Delete the selected item from the page
	$(this).parent().remove();

	// Update counter
	updateCount();
}

function editItem() {
	// Select the to-do list item the user wants to edit
	var listItem = $(this).parent();

	// Get the text from the task to pre-fill the input
	var itemText = $(this).siblings('.item').text();

	// Replace the text in the list item with an input whose value is the same as the existing text
	listItem.html('<form class="editor"><input type="text" value="' + itemText + '"><button type="submit" class="btn">Save</button></form>');

	// Focus the keyboard on the input that was just added
	listItem.find('input').focus();
}

function saveItem(e) {
	e.preventDefault();
	// Select the to-do list item the user wants to save
	var listItem = $(this).parent();
	// Get the value of the input inside of this item
	var itemText = listItem.find('input').val();
	// Replace the input in the list item with the value of the input field
	var newListItem = '<input type="checkbox"><span class="item">' + itemText + '</span><a href="#" class="edit">Edit</a><a href="#" class="remove">Remove</a>';
	// Append the list item to our ordered to-do list
	listItem.html(newListItem);	
}

function deleteTasks() {
	// Select the list
	// Empty the list
	$('#taskList').empty();

	// Update counter
	updateCount();
}

function clearCompleted() {
	// Select completed to-do list items
	$('.completed').remove();

	// Update counter
	updateCount();

}


updateCount();







//Feature Requirements ---------------

	// addToDoListItem
	// removeToDoListItem
	// editToDoListItem
	// saveEditedToDoListItem
	// markToDoListItemAsCompleted
	// Or switchCompletedStatusOfToDoListItem if students decide they want to be able to undo marking an item as complete.
	// emptyToDoList
	// removeCompletedToDoListItems
	// updateNumberOfToDoListItems


// Pseudocode ----------------------

// When the user submits their to-do list item
	// Select the input field the user has typed their to-do list info into
	// Get the value of the input field
	// Create a list item
	// Place the text inside of the list item
	// Append the list item to our ordered to-do list

// When the user clicks remove next to a to do list item
	// Select the to-do list item the user wants to remove
	// Delete the selected item from the page
	
// When the user clicks edit next to a list item
	// Select the to-do list item the user wants to edit
	// Replace the text in the list item with an input whose value is the same as the existing text
	// Show the save edit button and hide the edit button

// When user hits enter (submits) the edit form
	// Select the to-do list item the user wants to save
	// Get the value of the input inside of this item
	// Replace the input in the list item with the value of the input field

// When an item's checkbox gets clicked, mark as complete or incomplete
	// When the user clicks on the checkbox next to a list item
	// Get the to-do list item the user clicked on
	// Add a css line-through style to the item

// When the user clicks the Delete Tasks button
	// Select the list
	// Empty the list Optional: Store the emptied list to allow the user to go back.
	
// When the users clicks the Clear Completed button
	// Select each to-do list item
	// Check to see if it has been completed
	// If it has been completed, remove the to-do list item

// (in practice, select each to-do list item could be select completed to-do list items if you're using a class to style a completed item)
	// Select the to-do list counter element
	// Set the text inside the to-do list counter element to the number of items in the to-do list

