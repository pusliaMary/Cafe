
gsap.to ('h1', {
    text:"Lets split our bill",
    duration:3,
    repeat:-1,
    repeatDelay: .7,
    yoyo: true,

       
})

const button = document.querySelector('#btn');

button.addEventListener('click', calculate); 

const buttonTip = document.querySelector('#addTip');

buttonTip.addEventListener('click', showTip);

function showTip (e) {
    e.preventDefault();
    tip.style.display = 'block';
    
}

function calculate(e) {

    e.preventDefault();

    const bill = document.querySelector('#bill').value;
    
    const people = document.querySelector('#people').value;

    const tip = document.querySelector('#tip').value;

    if (bill=== "" || people === "" || people < 1 ) {

        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your information!",
        })
    }

    let billPerPerson = bill/people;
    let tipPerPerson = (bill*tip)/people;
    let totalPerPerson = billPerPerson + tipPerPerson;

    billPerPerson = billPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalPerPerson = totalPerPerson.toFixed(2);


    document.querySelector('#dividedBill').textContent = billPerPerson;
    document.querySelector('#dividedTip').textContent = tipPerPerson;
    document.querySelector('#dividedTotal').textContent = totalPerPerson;

    

}

