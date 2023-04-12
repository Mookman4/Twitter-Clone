let fireBaseURL = "https://twitter-clone-official-default-rtdb.firebaseio.com/";
let jsonEXT = ".json"; // .json is the extension for Firebase

function getData() {
  fetch(`${fireBaseURL}users${jsonEXT}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// Get the HTML elements for the form inputs and submit button
const fullNameInput = document.getElementById("name");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerButton = document.querySelector("button[type='submit']");

// Add an event listener for when the register button is clicked
registerButton.addEventListener("click", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the form inputs
  const fullName = fullNameInput.value;
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Create an object with the user data
  const userData = {
    fullName: fullName,
    username: username,
    email: email,
    password: password,
  };

  // Reset the form inputs
  fullNameInput.value = "";
  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";

  // Call the getData function to get the data from Firebase
  getData();

  // Redirect the user to the login page
  window.location.href = "http://127.0.0.1:5500/Sign-In/";
});
