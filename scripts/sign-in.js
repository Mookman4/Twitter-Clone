const fireBaseURL =
  "https://twitter-clone-official-default-rtdb.firebaseio.com/";
const jsonEXT = ".json"; // .json is the extension for Firebase

document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginButton = document.querySelector("button[type='submit']");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    fetch(`${fireBaseURL}Users/${jsonEXT}`)
      .then((response) => response.json())
      .then((data) => {
        const user = Object.values(data).find(
          (user) => user.username === username
        );

        if (user && user.password === password) {
          window.location.href = "http://127.0.0.1:5500/Main-Feed/index.html";
        } else {
          alert("Incorrect username or password. Please try again.");
        }
      })
      .catch((err) => console.log(err));
  });
});
