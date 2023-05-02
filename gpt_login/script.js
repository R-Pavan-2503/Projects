const loginForm = document.querySelector('#login-form'); // select the login form

loginForm.addEventListener('submit', function(event)  // add a submit event listener to the form
  event.preventDefault(); // prevent the default form submission behavior

  const username = document.querySelector('#username').value; // get the username input value
  const password = document.querySelector('#password').value; // get the password input value
  )
  // perform some validation on the username and password inputs
  if (username === 'myUsername' && password === 'myPassword') {
    // if the username and password are correct, redirect the user to the home page
    window.location.href = 'home.html';
  } else {
    // if the username and password are incorrect, display an error message
    alert('Incorrect username or password');}
