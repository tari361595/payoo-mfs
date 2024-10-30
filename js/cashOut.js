// console.log('cash out file connected');
document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    console.log('cash button clicked')
    const cashOut = document.getElementById('input-cash-out').value;
    console.log(cashOut);
    const cashOutPin = document.getElementById('input-cash-out-pin').value;
    console.log(cashOutPin);
    // cheaked pin
    if(cashOutPin==='1234'){
       const balance = document.getElementById('account-balance').innerText;
       console.log(balance);
       const cashOutAmount = parseFloat(cashOut);
       const totalBalance = parseFloat(balance);
       newBlance= totalBalance - cashOutAmount;
       console.log(newBlance);
       document.getElementById('account-balance').innerText=newBlance;
       

    console.log('cash out your money');
    }
    else{
        alert('wrong cash out pin! please try again');
    }

})