
document.addEventListener("DOMContentLoaded", function() {
  // Get the loupe.png image element
  var loupeImage = document.querySelector(".nav-menu li:nth-child(1) img");

  // Add a click event listener to the loupe image
  loupeImage.addEventListener("click", function() {
    // Prompt the user for the person's name
    var personName = prompt("Please enter the person's name:");
    if (personName !== null) {
      // Do something with the entered name, e.g., display it
      alert("You entered: " + personName);
    }
  });
});

