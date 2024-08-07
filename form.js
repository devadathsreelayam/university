function openForm(evt, formName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(formName).style.display = "flex";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

const loginForm = document.getElementById('login');
const loginRegNumber = document.getElementById('login-register-number');
const loginPassword = document.getElementById('login-password');
const loginReset = document.getElementById('login-reset');

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

loginForm.addEventListener('reset', e => {
    resetValidation();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = () => {
    const loginRegNumberValue = loginRegNumber.value.trim();
    const loginPasswordValue = loginPassword.value.trim();

    if (loginRegNumberValue === '') {
        setError(loginRegNumber, 'Register number is required')
    } else {
        setSuccess(loginRegNumber);
    }

    if (loginPasswordValue === '') {
        setError(loginPassword, 'Password is required')
    } else {
        setSuccess(loginPassword);
    }
}

const resetValidation = () => {
    const inputItems = document.querySelectorAll('.input-item');
    inputItems.forEach(item => {
        item.classList.remove('error');
        item.classList.remove('success');
        const errorDisplay = item.querySelector('.error');
        if (errorDisplay) {
            errorDisplay.innerText = '';
        }
    });
}

const registerForm = document.getElementById('register');
const registerName = document.getElementById('name');
const registerRegNumber = document.getElementById('register-number');
const registerDOB = document.getElementById('dob');
const registerGender = document.getElementById('');
const registerMobile = document.getElementById('mob-number');
const registerPassword = document.getElementById('password');

registerForm.addEventListener('submit', e => {
    e.preventDefault();
    validateRegistration();
});

registerForm.addEventListener('reset', e => {
    resetValidation();
});

const validateRegistration = () => {
    const registerNameValue = registerName.value;
    const registerRegNumberValue = registerRegNumber.value.trim();
    const registerDOBValue = registerDOB.value.trim();
    const registerMobileValue = registerMobile.value.trim();
    const registerPasswordValue = registerPassword.value.trim();

    if (registerNameValue === '') {
        setError(registerName, 'Name is required')
    } else {
        setSuccess(registerName);
    }

    if (registerRegNumberValue === '') {
        setError(registerRegNumber, 'Register number is required')
    } else {
        setSuccess(registerRegNumber);
    }

    if (registerDOBValue === '') {
        setError(registerDOB, 'DOB is required')
    } else {
        setSuccess(registerDOB);
    }

    if (registerMobileValue === '') {
        setError(registerMobile, 'Mobile number is required')
    } else {
        setSuccess(registerMobile);
    }

    if (registerPasswordValue === '') {
        setError(registerPassword, 'Password is required')
    } else {
        setSuccess(registerPassword);
    }
}