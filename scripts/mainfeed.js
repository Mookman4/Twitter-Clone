// Get all the delete buttons
const deleteButtons = document.querySelectorAll(".delete-btn");

// Loop through each delete button
deleteButtons.forEach((button) => {
  // Add a click event listener to each delete button
  button.addEventListener("click", () => {
    // Get the parent post element
    const post = button.closest(".post");

    // Get the author of the post
    const author = post.querySelector(".post-author").textContent;

    // Get the current user's username
    const currentUser = "username"; // Replace with the current user's username

    // Check if the current user is the author of the post
    if (author === currentUser) {
      // If the current user is the author, remove the post
      post.remove();
    } else {
      // If the current user is not the author, show an error message
      alert("You can only delete your own posts.");
    }
  });
});
