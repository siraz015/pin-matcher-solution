function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if(pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function() {
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event) {
    const numbers = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;

    if(isNaN(numbers)) {
        if(numbers === 'C') {
            typedNumberField.value = '';
        } else if(numbers === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');

            typedNumberField.value = remainingDigits;
        }
    } else {
        const newTypeNumber = previousTypedNumber + numbers;
        typedNumberField.value = newTypeNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function() {

    const displayPinField = document.getElementById('display-pin');
    const displayPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccess = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');

    console.log(displayPin, typedNumber)

    if(displayPin === typedNumber) {
        pinSuccess.style.display = 'block';
        pinFailure.style.display = 'none';
    } else {
        pinFailure.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})

