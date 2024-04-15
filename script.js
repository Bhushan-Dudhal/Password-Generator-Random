const passwordBox = document.getElementById("password");

const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = " abcdefghijklmnopqrstuvwxyz";

const number = "123456789";

const symbol = "@#$%^&*()_+~|}{[]></-=";
const allChars = upperCase + lowerCase + number + symbol;

function CreatePassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];

    passwordBox.value = password;
  }
}

function CopyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
