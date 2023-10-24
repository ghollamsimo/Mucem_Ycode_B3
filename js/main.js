//nav bar
const burgerButton = document.querySelector(".burger");
const menu = document.querySelector(".nav-link");

burgerButton.addEventListener("click", function () {
    menu.classList.toggle("active");
});

// This script for DropDown Menu
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// Regex
document.getElementById("myForm").addEventListener("submit", function(event) {
  var fullname = document.getElementById("fullname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var cin = document.getElementById("cin").value;

  var nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  var phoneRegex = /^\d{10}$/;
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var cinRegex = /^\d{8}$/;

  if (!nameRegex.test(fullname)) {
      alert("Veuillez saisir un nom complet valide");
      event.preventDefault();
  }

  if (!phoneRegex.test(phone)) {
      alert("Veuillez saisir un numéro de téléphone valide (10 chiffres).");
      event.preventDefault();
  }

  if (!emailRegex.test(email)) {
      alert("Veuillez saisir une adresse e-mail valide");
      event.preventDefault();
  }

  if (!cinRegex.test(cin)) {
      alert("Veuillez saisir un CIN valide (8 chiffres).");
      event.preventDefault();
  }
});
