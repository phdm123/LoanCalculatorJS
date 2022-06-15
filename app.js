const form = document.querySelector('#loan');

function Calculate(e) {
    const amount = parseFloat(document.querySelector('#amount').value);
    const interest = parseFloat(document.querySelector('#interest').value);
    const repayment = parseFloat(document.querySelector('#repayment').value);
    if(Number.isNaN(amount) || Number.isNaN(interest) || Number.isNaN(repayment)) {
        alert("Please insert valid values!");
        e.preventDefault();
        return;     
    }
    e.preventDefault();
}

form.addEventListener('submit', Calculate);