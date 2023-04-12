let fireBaseURL = "https://twitter-clone-official-default-rtdb.firebaseio.com/";
let jsonEXT = ".json"; // .json is the extension for firebase

document.addEventListener("DOMContentLoaded", () => {
  const fullname = document.getElementById("name");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (
      fullname.value === "" ||
      username.value === "" ||
      email.value === "" ||
      password.value === ""
    ) {
      alert("Please fill all the fields");
    } else {
      fetch(`${fireBaseURL}Users/${jsonEXT}`, {
        method: "POST",
        body: JSON.stringify({
          fullname: fullname.value,
          username: username.value,
          email: email.value,
          password: password.value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }

    fullname.value = "";
    username.value = "";
    email.value = "";
    password.value = "";

    window.location.href = "http://127.0.0.1:5500/Main-Feed/index.html";
  });
});
