 var checkPhone = document.getElementById("phone");
var phoneMe = document.getElementById("phoneMe"); 
var checkEmail = document.getElementById("email");
var emailMe = document.getElementById("emailMe");

function showFunction1() {
 

  if (checkPhone.clicked) {
    phoneMe.style.display = "block";
  } else {
    emailMe.style.display = "none";
  }
}
function showFunction2() {
  if (checkEmail.checked) {
    emailMe.style.display = "block";
  } else {
    phoneMe.style.display = "none";
  }
}
