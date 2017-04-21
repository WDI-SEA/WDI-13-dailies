console.log('Hello, front end');

document.addEventListener('DOMContentLoaded', function(){
  // ============ Default function removal ===========
  document.getElementById("tmp-input").addEventListener("enter", function(event){
    event.preventDefault();
  })
  document.getElementById("convert-btn").addEventListener("click", function(event){
    event.preventDefault();
  })
  document.getElementById("clear-btn").addEventListener("click", function(event){
    event.preventDefault();
  })

// -------------------------------------------------------------------------- //
//                        DONT MODIFY ABOVE                                   //
// -------------------------------------------------------------------------- //
// NOTE: -40F == -40C
// NOTE: 212F == 100C
  
  function convertTmp(){
    var input = document.getElementById('tmp-input').value;
    var fahrenheitSelected = document.getElementById('radioF').checked;
    var resultBox = document.getElementById('convertedTempBox');
    if(fahrenheitSelected && resultBox) {
      resultBox.innerText = (input - 32) * (5/9);
    } else {
      resultBox.innerHtml = (input * (9/5)) + 32;
    }
  }

  function clearTmp(){
    document.getElementById('tmp-input').value = "";
    convertTmp();
    document.getElementById('convertedTemp').innerText = "(input * (9/5)) + 32";
  }


  var convertButton = document.getElementById('convert-button');
  var clearButton = document.getElementById('clear-button');
  if (convertButton && clearButton) {
    convertButton.addEventListener('click', convertTmp);
    clearButton.addEventListener('click', clearTmp);
    convertTmp(); // This runs the conversion the FIRST time. So we have an example when the page loads.
  }
})


