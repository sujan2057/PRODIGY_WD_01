// script.js
window.onscroll = function () {
  const header = document.getElementById("navbar");
  if (window.pageYOffset > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!email || !message) {
      alert("Please fill in both the email and message fields.");
      return;
    }

    // Simple email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Here, you can add AJAX code to send the form data to the server without reloading the page
    console.log("Email:", email, "Message:", message); // Log to console for demonstration
    alert("Thank you for your message. We will get back to you soon!");
  });

// JavaScript to toggle navigation links
// document.addEventListener("DOMContentLoaded", function () {
//   const toggleBtn = document.getElementById("toggleBtn");
//   const navList = document.querySelector("header#navbar ul");

//   toggleBtn.addEventListener("click", function () {
//     navList.classList.toggle("show");
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const navList = document.querySelector("header#navbar ul");

  toggleBtn.addEventListener("click", function () {
    navList.classList.toggle("show");
  });

  // Function to hide the toggle button if window width > 774px
  function toggleButtonVisibility() {
    if (window.innerWidth > 774) {
      toggleBtn.style.display = "none";
    } else {
      toggleBtn.style.display = "block";
    }
  }

  // Call the function initially and add event listener for window resize
  toggleButtonVisibility();
  window.addEventListener("resize", toggleButtonVisibility);
});
