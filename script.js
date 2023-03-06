//Pedirle al usuario una frase y decirle si es palíndromo o no.  Un palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
// Ejemplos de palíndromos para probar: "La ruta nos aporto otro paso natural", “reconocer”, "Atar a la rata", “Dábale arroz a la zorra el abad”, “Somos o no somos”, “A ti no, bonita”, “Allí ves a Sevilla”, “Amad a la dama”, “Amar da drama”, “Arriba la birra”.

const form = document.querySelector("form");
console.log(form);
const enterTextField = document.querySelector("#enter-text");
console.log(enterTextField);
const resultPara = document.querySelector("#result-para");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  printResult();
});

const isPalindrome = () => {
  const palindrome = enterTextField.value.trim();
  const cleanPalindrome = palindrome.replace(" ", "");
  const palindromeArray = Array.from(palindrome);
  const palindromeBackwardsArray = [];
  for (let i = palindromeArray.length - 1; i >= 0; i--) {
    palindromeBackwardsArray.push(palindromeArray[i]);
  }
  const palindromeBackwards = palindromeBackwardsArray.join("");
  cleanPalindromeBackwards = palindromeBackwards.replace(" ", "");
  console.log(cleanPalindrome, cleanPalindromeBackwards);
  if (cleanPalindrome == cleanPalindromeBackwards) {
    return true;
  } else {
    return false;
  }
};

const printResult = () => {
  let result = isPalindrome();
  console.log(result);
  if (result == true) {
    resultPara.textContent = "El texto que introdujo es un palindromo";
  } else {
    resultPara.textContent = "El texto que introdujo NO es un palindromo";
  }
};
