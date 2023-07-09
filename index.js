let isScientificMode = false;

function appendToResult(value) {
  document.getElementById("result").value += value;
}

function calculateResult() {
  const result = eval(document.getElementById("result").value);
  document.getElementById("result").value = result;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function toggleScientificMode() {
  isScientificMode = !isScientificMode;
  const buttons = document.getElementsByClassName("calculator-button");
  const modeSwitch = document.getElementById("mode-switch");

  if (isScientificMode) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add("scientific");
    }
    modeSwitch.innerHTML = "Stan";
    modeSwitch.classList.remove(
      "bg-indigo-500",
      "dark:bg-indigo-500",
      "hover:bg-indigo-600",
      "dark:hover:bg-indigo-600"
    );
    modeSwitch.classList.add(
      "bg-yellow-400",
      "dark:bg-yellow-400",
      "hover:bg-yellow-500",
      "dark:hover:bg-yellow-500"
    );

    // Add scientific operators
    const scientificOperators = ["(", ")", "^", "√", "sin", "cos", "tan"];
    for (let i = 0; i < scientificOperators.length; i++) {
      const operator = scientificOperators[i];
      const operatorButton = document.createElement("button");
      operatorButton.className =
        "calculator-button bg-yellow-400 dark:bg-yellow-400 hover:bg-yellow-500 dark:hover:bg-yellow-500 text-gray-700 dark:text-gray-700 font-bold py-2 px-4 rounded";
      operatorButton.innerHTML = operator;
      operatorButton.onclick = function () {
        appendToResult(operator);
      };
      document.getElementsByClassName("grid")[0].appendChild(operatorButton);
    }
  } else {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("sci");
    }
    modeSwitch.innerHTML = "Sci";
    modeSwitch.classList.remove(
      "bg-yellow-400",
      "dark:bg-yellow-400",
      "hover:bg-yellow-500",
      "dark:hover:bg-yellow-500"
    );
    modeSwitch.classList.add(
      "bg-indigo-500",
      "dark:bg-indigo-500",
      "hover:bg-indigo-600",
      "dark:hover:bg-indigo-600"
    );

    // Remove scientific operators
    const scientificOperators = ["(", ")", "^", "√", "sin", "cos", "tan"];
    const grid = document.getElementsByClassName("grid")[0];
    const operatorButtons = grid.getElementsByClassName("calculator-button");
    for (let i = operatorButtons.length - 1; i >= 0; i--) {
      const operatorButton = operatorButtons[i];
      if (scientificOperators.includes(operatorButton.innerHTML)) {
        grid.removeChild(operatorButton);
      }
    }
  }
}
