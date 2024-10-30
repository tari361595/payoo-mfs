// first step add eventlistener
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    // get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    // get the pin number
    const addPinInput = document.getElementById('input-pin-number').value;
    console.log(addPinInput);
    // verified pin
    if(addPinInput ==='1234'){
        console.log('adding money to your account');
        // get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        // add addMoneyInput with balance
        const addMoneyNmber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNmber + balanceNumber;
        console.log(newBalance);
    }
    else{
        alert('failed to add money!please try again');
    }

})