let fireBaseURL = "https://twitter-clone-official-default-rtdb.firebaseio.com/";
let jsonEXT = ".json"; // .json is the extension for Firebase

document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginButton = document.querySelector("button[type='submit']");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    let username = usernameInput.value;
    let password = passwordInput.value;

    fetch(`${fireBaseURL}Users/${jsonEXT}`, {
      method: "POST",
      body: JSON.stringify(username),
    })
      .then((res) => {
        if (user.password === password) {
          // Login successful, redirect to home page
          window.location.href = "http://127.0.0.1:5500/Main-Feed/index.html";
        } else {
          alert("Incorrect username or password. Please try again.");
        }
      })
      .catch((err) => console.log(err));
  });
});
