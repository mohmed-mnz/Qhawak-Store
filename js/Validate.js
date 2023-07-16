var Fname = document.getElementById("name");
var email = document.getElementById("email");
var Gender = document.getElementsByName("gender");
var country = document.getElementById("country");
var message = document.getElementById("message");
var submit = document.getElementById("submit");
var male = document.getElementById("male");
var female = document.getElementById("female");
var EmailPattern = /^[A-Za-z]{3}[@][A-Za-z]{3}(.com)$/;

male.addEventListener("change", function () {
  document.getElementById("Gpar").textContent = "";
});

female.addEventListener("change", function () {
  document.getElementById("Gpar").textContent = "";
});

Fname.addEventListener("input", function () {
  if (Fname.value.length === 0) {
    Fname.style.border = "3px solid red";
    document.getElementById("Npar").textContent = "Your Name is required";
  } else if (Fname.value.length >= 3) {
    Fname.style.border = "3px solid green";
    document.getElementById("Npar").textContent = "";
  } else {
    Fname.style.border = "3px solid red";
    document.getElementById("Npar").textContent =
      "Your Name must be more than 3 characters";
  }
});

email.addEventListener("input", function () {
  if (email.value.length === 0) {
    email.style.border = "3px solid red";
    document.getElementById("Epar").textContent = "Your Email is Required";
  } else if (EmailPattern.test(email.value) === false) {
    email.style.border = "3px solid red";
    document.getElementById("Epar").textContent = "Your Email is not Valid";
  } else {
    email.style.border = "3px solid green";
    document.getElementById("Epar").textContent = "";
  }
});

message.addEventListener("input", function () {
  if (message.value.length === 0) {
    message.style.border = "3px solid red";
    document.getElementById("Mpar").textContent = "Message cannot be empty";
  } else {
    message.style.border = "3px solid green";
    document.getElementById("Mpar").textContent = "";
  }
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (Fname.value.length === 0) {
    Fname.style.border = "3px solid red";
    document.getElementById("Npar").textContent = "Your Name is required";
  }
  if (email.value.length === 0) {
    email.style.border = "3px solid red";
    document.getElementById("Epar").textContent = "Your Email is Required";
  }

  if (!Gender[0].checked && !Gender[1].checked) {
    document.getElementById("Gpar").textContent = "You Must Select Gender";
  } else {
    document.getElementById("Gpar").textContent = "";
  }

  if (country.value == -1) {
    document.getElementById("Cpar").textContent = "You Must Select Country";
  } else {
    document.getElementById("Cpar").textContent = "";
  }

  if (message.value.length === 0) {
    message.style.border = "3px solid red";
    document.getElementById("Mpar").textContent = "Message cannot be empty";
  } else {
    message.style.border = "3px solid green";
    document.getElementById("Mpar").textContent = "";
  }
});

/**Up Button */
upbtn=document.getElementById('up')
upbtn.addEventListener('click',function(){
  window.scrollTo({left:0,top:0,behavior:'smooth'})
});