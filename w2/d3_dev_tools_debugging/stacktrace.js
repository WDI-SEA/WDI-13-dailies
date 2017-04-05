var myName = "Juan";
var myAge = 32;
new User(myName, myAge);

function User(name, age){
  var user = this;
  user.name = name;
  user.age = age;
  getFirstAndLastName();

  function getFirstAndLastName(){
    var names = user.name.split(" ");
    user.first_name = names[0];
    user.last_name = names[1];
    greetEnthusiastically();
  }
  function greetEnthusiastically(){
    console.log(user);
    console.dir(user);
    alert("HI THERE, " + user.first_name.toUpperCase() + " " + user.last_name.toUpperCase() + "!!!");
  }
}