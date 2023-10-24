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

const burgerButton = document.querySelector(".burger");
const menu = document.querySelector(".nav-link");

burgerButton.addEventListener("click", function () {
    menu.classList.toggle("active");
});


// regex
// function validateForm() {
//   const firstName = document.getElementById('firstName').value;
//   const lastName = document.getElementById('lastName').value;
//   const cin = document.getElementById('cin').value;
//   const email = document.getElementById('email').value;
//   const phoneNumber = document.getElementById('phoneNumber').value;

//   const nameRegex = /^[A-Za-z]{2,}$/;
//   const cinRegex = /^[A-Za-z]{2}\d{6}$/;
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
//   const phoneRegex = /^+212\d{9}$/;

//   if (nameRegex.test(firstName) && nameRegex.test(lastName) && cinRegex.test(cin) &&
//       emailRegex.test(email) && phoneRegex.test(phoneNumber)) {
//       alert('Thank you for your Submit!');// Form is valid, you can submit the data.
//       login.classList.toggle("close");
//   } else {
//       alert('Check your informations.'); // Form is not valid, display an error message.
//   }
// };