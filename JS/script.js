// ### globals ######

// let customInput = document.getElementById("customID")

let billAmount = document.getElementById("bill-amount"),
  customTip = document.getElementById("custom-tip"),
  numOfPeople = document.getElementById("num-of-people"),
  tips = document.querySelectorAll(".tip"),
  tipValue = 0,
  billValue = 0,
  persons = 1,
  tipAmount = 0;

function calculateTip() {
  tips.forEach((tip) => {
    tip.addEventListener("click", () => {
      resetActive();
      tip.classList.add("active");
    });
  });

  let currentTipBtn = document.getElementsByClassName("active");

  // check if tip button is selected and custom tip is empty
  if (currentTipBtn[0] && customTip.value === "") {
    tipValue = Number(currentTipBtn[0].value.replace("%", "")) / 100;
    billValue = Number(billAmount.value);
    persons = Number(numOfPeople.value);
  } 

  else {
    customTip.addEventListener("keyup", () => {
      toggleActive()
    })


    Number(customTip.value) <= 0
      ? 1
      : (tipValue = Number(customTip.value) / 100);
    billValue = Number(billAmount.value);
    persons = Number(numOfPeople.value);
  }

// make sure person is not null or 0 to avoid zero division error or returnin an infinite value 
  if (persons !== null && persons !== 0) {
    tipAmount = (tipValue * billValue) / persons;
    let totalAmount = tipAmount + billValue;
    document.getElementById("amount-value").innerHTML = `$${tipAmount.toFixed(2)}`;
    document.getElementById("total-amount").innerHTML = `$${totalAmount}`;
  }

}

// remove active class from the tip button if not selected or clicked
function resetActive() {
  tips.forEach((tip) => {
    tip.classList.remove("active");
  });
}


// adds or remves the not-active class which, if added will set pointer events on tip btns to none
// allowing us to get the value of only the custom

function toggleActive(){
  customTip.value !== "" 
  ? 
  tips.forEach((tip) => {
    tip.classList.add("not-active");
    resetActive()
  })
  :
  tips.forEach(tip=>{
    tip.classList.remove('not-active')
})

}


function resetAll(){
  resetActive()
  billAmount.value = customTip.value = numOfPeople.value = ''
  document.getElementById("amount-value").innerHTML = `$0.00`;
  document.getElementById("total-amount").innerHTML = `$0.00`; 
}