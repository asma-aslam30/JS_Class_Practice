// //  local storage

// var obj={
//     name:"hira",
//     no:"45"
// }
// // a=JSON.stringify(obj)
// localStorage.setItem("user",JSON.stringify(obj))

// console.log(localStorage.getItem("user"));

function register() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  // console.log(name.value);
  // console.log(email.value);
  // console.log(password.value);
  var users = localStorage.getItem("users");
  console.log(users);
  if (users) {
    users = JSON.parse(users);
    // users.push({
    //   name: name.value,
    //   email: email.value,
    //   password: password.value,
    // });
  } else {
    users = [];
  }
}
console.log(register());

var user = {
  name: name.value,
  email: email.value,
  password: password.value,
};


users.push(user)
localStorage.setItem("users", JSON.stringify(users));
// console.log(users);


function login() {
  var email = document.getElementById("lemail").value;
  var password = document.getElementById("lpassword").value;
  var users = localStorage.getItem("users");
  console.log(users);


}

// logout
// localStorage.clear()
// location.href="./index.html
// "
