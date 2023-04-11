// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  form.submit();
});
// Import the functions you need from the SDKs you need
