// ### globals ######


// let customInput = document.getElementById("customID")

let billAmount = document.getElementById('bill-amount')
let customTip = document.getElementById('custom-tip');
let numOfPeople = document.getElementById('num-of-people');
let tips = document.querySelectorAll('.tip')
let tipValue = 0;
let billValue = 0;
let persons = 1;
let tipAmount = 0;

function calculateTip(){
    tips.forEach(tip=>{
        tip.addEventListener('click', ()=>{
            resetActive()
            tip.classList.add('active')
        })

    })


    let current = document.getElementsByClassName('active')

    if(current[0]){
        tipValue = Number(current[0].value.replace('%', ''))/100
        billValue = Number(billAmount.value)
        persons = Number(numOfPeople.value)
    }

    if(persons !== null && persons !== 0){
        tipAmount = (tipValue*billValue)/persons
        document.getElementById('amount-value').innerHTML = `$${tipAmount.toFixed(2)}`
    }

}


function resetActive(){
    tips.forEach(tip=>{
        tip.classList.remove('active')
    })
}

