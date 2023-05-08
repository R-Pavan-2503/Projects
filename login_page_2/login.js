var email = document.forms["form"]["email"];
var pass = document.forms["form"]["password"];

var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("pass_error");

email.addEventListener("textInput", email_error);
password.addEventListener("textInput", pass_error);

function validate() {
  if (email.value.length < 10) {
    email_error.innerHTML = "Email is too short";
    email_error.style.color = "red";
    email.focus();
    return false;
  }
  if (password.value.length < 6) {
    pass_error.innerHTML = "Email is too short";
    pass_error.style.color = "red";
    password.focus();
    return false;
  }
}
function email_verify() {
  if (email.value.length > 8) {
    email_error.innerHTML = "";
    email_error.style.display = "none";
    return true;
  }
}
function pass_verify() {
  if (pass.value.length > 8) {
    pass_error.innerHTML = "";
    pass_error.style.display = "none";
    return true;
  }
}
function done() {
  window.alert("Successfully logged in!");
  window.location.href = "../index.html";
}
