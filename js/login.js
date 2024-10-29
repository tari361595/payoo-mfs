// console.log('button clicking file adeed');
document.getElementById('button-login').
addEventListener('click',function(event){
    event.preventDefault();
console.log('login button cliced');
const phoneNumber= document.getElementById('phone-number').value;
const pinNumber= document.getElementById('pin-number').value;


console.log(phoneNumber,pinNumber);
if(phoneNumber==='5'&& pinNumber==='1234'){
    window.location.href = '/home.html';
    console.log('you are logged in');
}
else{
    alert('wrong phone and pin number');
}

})