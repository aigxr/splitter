let buffer = 0;

function first() {
    buffer = 1.05
}
function second() {
    buffer = 1.10
}
function third() {
    buffer = 1.15
}
function fourth() {
    buffer = 1.25
}
function fifth() {
    buffer = 1.5
}

const tipPercentButtons = document.querySelectorAll(".tip-percent");
document.addEventListener("DOMContentLoaded", function() {
  
    function handleClick() {
      tipPercentButtons.forEach(function(button) {
        button.classList.remove("clicked");
      });
  
      this.classList.add("clicked");
    }
  
    tipPercentButtons.forEach(function(button) {
      button.addEventListener("click", handleClick);
    });
  });

  const billInput = document.querySelector("#bill-input")
  const amountInput = document.querySelector("#amount-input")
  const customInput = document.querySelector("#custom")
  
  function handleMath() {
    const billValue = parseFloat(billInput.value);
    const amountValue = parseFloat(amountInput.value);
    const customValue = parseFloat(customInput.value);
    let result = 0;
    let tip = 0;

    if (!this.classList.contains("clicked") && buffer == 0) {
      result = (billValue + customValue) / amountValue;
      tip = ((billValue + customValue) - billValue) / amountValue;
    } else {
      result = (billValue * buffer) / amountValue;
      tip = ((billValue * buffer) - billValue) / amountValue;
    }
  
    document.querySelector("#tip-amount").innerHTML = "$" + tip.toFixed(2);
    document.querySelector("#total").innerHTML = "$" + result.toFixed(2);
  }

  const resetBtn = document.querySelector("#reset-btn")
  const calcBtn = document.querySelector("#calc-btn")
  
  calcBtn.addEventListener("click", handleMath);
  resetBtn.addEventListener("click", function() {
    buffer = 0;
    document.querySelector("#tip-amount").innerHTML = "$0.00" 
    document.querySelector("#total").innerHTML = "$0.00" 
    billInput.value = null;
    amountInput.value = null;
    customInput.value = null;
    tipPercentButtons.forEach(function(button) {
      button.classList.remove("clicked");
    });
  })