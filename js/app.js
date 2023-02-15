function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }else{
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    //display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculate').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-numbers');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if (number === 'C') {
            typeNumberField.value = '';
        }else{
            const digits = previousTypeNumber.split('');
            digits.pop();
            const reminingDigits = digits.join('');
            typeNumberField.value = reminingDigits;
        }
    }else{
        const newTypeNumber  = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})

document.getElementById('varify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    
    const typeNumberField = document.getElementById('type-numbers');
    const typeNumber = typeNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');


    if (currentPin === typeNumber) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})
