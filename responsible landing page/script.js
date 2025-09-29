// Toggle menu
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Reservation form submission
document.getElementById("reserveForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your reservation has been received.");
  this.reset();
});