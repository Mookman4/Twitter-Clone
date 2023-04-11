// Firebase REST API URL
const firebaseUrl =
  "https://twitter-clone-official-default-rtdb.firebaseio.com/";

// Get references to the form fields
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");

// Listen for the form submit event
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  // Build the authentication endpoint URL
  const authUrl = `${firebaseUrl}users.json?orderBy="username"&equalTo="${usernameField.value}"&print=pretty`;

  // Make a GET request to the authentication endpoint
  fetch(authUrl)
    .then((response) => response.json())
    .then((data) => {
      const userData = Object.values(data)[0]; // Get the first user object from the data

      // Check if the password matches
      if (userData.password === passwordField.value) {
        // Log the user in
        alert("Logged in successfully");
      } else {
        // Display an error message
        alert("Invalid username or password");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
