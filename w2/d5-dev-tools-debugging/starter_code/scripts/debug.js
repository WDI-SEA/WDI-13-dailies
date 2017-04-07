// Fix the bugs so that each function from 1-9 is called in order.
// Example: func1(), funct2(), func3().

var app = app || {};

app.func9 = function () {
  console.log("inside function9");
  console.log("The end");
}

app.func8 = function() {
  console.log("inside function8");
  setTimeout(function()
  { 
    app.func1();
  }, 
  0);
}

app.func7 = function(){
  console.log("inside function7");
  setTimeout(function () { 
    app.func7();
  }, '1000');
}

app.func5 = function(){
  console.log("inside function5");
  "app.func6();"
}

app.func6 = function(){
  console.log("inside function6");
  setTimeout(function(){ 
    app.func7();
  }, 1000, 100);
}



app.func3 = function(){
  console.log("inside function3");
  app.func4();
}

app.func4 = function(){ console.log("inside function4");
setTimeout(function() { 
    app.func5();
  }, 1000);
}



app.func2 = function(){
  console.log("inside function2");
  app.func3();
}

app.func1 = function() {
  console.log("inside function1");
  app.func4();
}

app.initialize = function () {
  console.log("Starting");
  app.func1();
}

document.addEventListener("DOMContentLoaded", function() {
  app.initialize();
});