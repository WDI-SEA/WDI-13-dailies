document.addEventListener("DOMContentLoaded", function() {
  var checkoutBtn = document.createElement('div');
  checkoutBtn.innerText = 'Checkout Cart';
  checkoutBtn.classList.add('button');
  checkoutBtn.setAttribute('data-clicks', '0');

  document.body.appendChild(checkoutBtn);

  checkoutBtn.addEventListener('click', function() {
    var dataClicks = checkoutBtn.getAttribute('data-clicks');
    checkoutBtn.setAttribute('data-clicks', parseInt(dataClicks) + 1);
    dataClicks = parseInt(dataClicks) + 1;
    checkoutBtn.innerText = dataClicks;
  });


});