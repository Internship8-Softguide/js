let number = document.querySelector("#number");
let click = document.querySelector("#click");
let result = document.querySelector("#result");

let str = "Your enter number is ";

click.addEventListener("click", () => {
  result.innerText = 3 + parseInt(number.value);
});
