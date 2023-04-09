const form = document.querySelector("#signup-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  // Send an AJAX request to the server to handle the form submission
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/register.php");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.send(formData);
});
