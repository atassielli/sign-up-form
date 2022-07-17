const password=document.querySelector('.password1');
const confirmPassword=document.querySelector('.password2');
const passContainer=document.querySelector('.password');
const confirmContainer=document.querySelector('.confirmpassword');
let a;
let b;
const notify = document.createElement('div')
notify.classList.add('notify')

password.addEventListener('input', function getA() {
    a = password.value;
    validateNumber();
    validateLower();
    validateUpper();
})

confirmPassword.addEventListener('input', function getB() {
    b = confirmPassword.value;
    check();
})

function check() {
        if (a !== b) {
            notify.textContent = 'Passwords do not match';
            notify.style.color = 'red';
            notify.style.fontSize = '8px';
            notify.style.marginTop = '2px';
            confirmContainer.appendChild(notify);
        } else if (a === b) {
            notify.textContent = 'Passwords match';
            notify.style.color = '#596D48';
            notify.style.fontSize = '8px';
            notify.style.marginTop = '2px';
            confirmPassword.style.cssText = "border-color: #596D48; border-style: solid; border-width: 3px; border-radius: 2px";
            confirmContainer.appendChild(notify);
        }
}

const regex = new RegExp (/[0-9]/);
const containNumber = document.createElement('div');

function validateNumber() {
    console.log(a);
    if (regex.test(a) == false) {
        containNumber.textContent = 'Password must contain a number';
        containNumber.style.color = 'red';
        containNumber.style.fontSize = '8px';
        containNumber.style.marginTop = '2px';
        passContainer.appendChild(containNumber)
    } else if (regex.test(a) == true) {
        containNumber.textContent = "";
    }
}

const regexLower = new RegExp (/[a-z]/);
const containLower = document.createElement('div');

function validateLower() {
    console.log(regexLower.test(a))
    if (regexLower.test(a) == false) {
        containLower.textContent = 'Password must contain a lowercase';
        containLower.style.color = 'red';
        containLower.style.fontSize = '8px';
        containLower.style.marginTop = '2px';
        passContainer.appendChild(containLower)
    } else if (regexLower.test(a) == true) {
        containLower.textContent = "";
    }
}

const regexUpper = new RegExp (/[A-Z]/);
const containUpper = document.createElement('div');

function validateUpper() {
    if (regexUpper.test(a) == false) {
        containUpper.textContent = 'Password must contain an uppercase';
        containUpper.style.color = 'red';
        containUpper.style.fontSize = '8px';
        containUpper.style.marginTop = '2px';
        passContainer.appendChild(containUpper);
    } else if (regexUpper.test(a) == true) {
        containUpper.textContent = '';
    }
}