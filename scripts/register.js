let fireBaseURL = "https://twitter-clone-official-default-rtdb.firebaseio.com/";
let jsonEXT = ".json"; // .json is the extension for Firebase

// Wait for the HTML to finish loading
document.addEventListener("DOMContentLoaded", function () {
  // Get the form elements

  const fullNameInput = document.getElementById("name");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const registerButton = document.getElementById("submit");

  registerButton.addEventListener("click", function (event) {
    event.preventDefault();

    const userData = {
      fullName: fullNameInput.value,
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    fetch(`${fireBaseURL}Users/${jsonEXT}`, {
      method: "POST",
      body: JSON.stringify(userData),
    })
      .then((res) => {
        // Reset the form inputs
        fullNameInput.value = "";
        usernameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";

        window.location.href = "http://127.0.0.1:5500/Sign-In/";
      })
      .catch((err) => console.log(err));
  });
});
