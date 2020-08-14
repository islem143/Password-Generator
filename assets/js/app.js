const generateButton = document.querySelector("button");

function generateCharacters() {
  const includes = document.querySelectorAll('input[name="includes"]:checked');
  let characters = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "¬¹{[|`^]}µ£§@#$%~,;:.",
  };
  let option = [];
  includes.forEach((e) => {
    if (e.value == "upperCase") {
      option.push(characters.upperCase);
    } else if (e.value == "lowerCase") {
      option.push(characters.lowerCase);
    } else if (e.value == "numbers") {
      option.push(characters.numbers);
    } else if (e.value == "symbols") {
      option.push(characters.symbols);
    }
  });
  return option;
}

function validateInput() {
  const includes = document.querySelectorAll('input[name="includes"]:checked');
  const passwordLenght = document.querySelector('input[type="number"]').value;
  const error = document.querySelector("#error");
  if (includes.length == 0) {
    error.classList.remove("display");
    error.textContent = "please check at least one option";
    return false;
  }
  if (passwordLenght < 5 || passwordLenght > 20) {
    error.classList.remove("display");
    error.textContent = "please enter the right number";
    return false;
  }
  error.classList.add("display");
  return true;
}

function generatePassword() {
  const passwordOutput = document.querySelector("#passwordOutput");
  const passwordLenght = parseInt(
    document.querySelector('input[type="number"]').value
  );
  let inputIsValid = validateInput();
  if (!inputIsValid) {
    return;
  }
  let generatedCharacters = generateCharacters();
  let password = [];
  let j = 0;
  for (let i = 0; i < passwordLenght; i++) {
    if (j >= generatedCharacters.length) {
      j = 0;
    }
    let randomCharacters = generatedCharacters[j].split("");
    let randomIndex = Math.floor(Math.random() * randomCharacters.length);
    password.push(randomCharacters[randomIndex]);
    j++;
  }
  password = password.join("");
  passwordOutput.textContent = password;
}

// start Here
generateButton.addEventListener("click", generatePassword);
