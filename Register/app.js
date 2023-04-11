const form = document.querySelector("form");
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const userData = {
    name: document.getElementById("name").value,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  fetch(
    "https://twitter-clone-official-default-rtdb.firebaseio.com/users.json",
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        alert("Your account has been created!");
        window.location.href = "http://127.0.0.1:5500/Sign-In/";
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
