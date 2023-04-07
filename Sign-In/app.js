const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Add code here to validate the username and password

  // If the username and password are valid, submit the form
  form.submit();
});
