const touches = document.querySelectorAll(".digits");
const digits = Array.from(touches);
const screen = document.querySelector(".screen");
console.log(screen);
function calculator() {
  let currentInput = "";
  digits.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.textContent == "C") {
        screen.textContent = "0";
        currentInput = screen.textContent;
      } else if (e.target.textContent === "=") {
        const calcul = eval(currentInput);
        screen.textContent = calcul.toString();
        currentInput = calcul;
      } else {
        if (currentInput === "0") {
          currentInput = "";
        }
        currentInput += e.target.textContent;
        screen.textContent = currentInput;
      }
    });
  });
}
calculator();
