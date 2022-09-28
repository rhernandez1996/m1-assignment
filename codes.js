var whichOption = document.getElementById("contacting");
whichOption.addEventListener("change", showHideDiv);

var checkPhone = document.getElementById("phone");
var phoneMe = document.getElementById("phoneMe");
var checkEmail = document.getElementById("email");
var emailMe = document.getElementById("emailMe");

function showHideDiv() {
  if (checkEmail.selected) {
    emailMe.style.display = "block";
    phoneMe.style.display = "none";
  } else if (checkPhone.selected) {
    emailMe.style.display = "none";
    phoneMe.style.display = "block";
  } else {
    emailMe.style.display = "none";
    phoneMe.style.display = "none";
  }
}