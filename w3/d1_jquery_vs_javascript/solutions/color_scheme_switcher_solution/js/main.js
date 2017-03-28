$('#grayButton').on('click', switchGray);
$('#whiteButton').on('click', switchWhite);

function switchGray() {
  $('body').css('backgroundColor', 'gray');
  $('body').css('color', 'white');
}

function switchWhite() {
  $('body').css('backgroundColor', 'white'); 
  $('body').css('color', 'black'); 
}