const form = document.getElementById('form');
const username = document.getElementById('username');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

form.addEventListener('reset', e => {
    e.preventDefault(); // Prevent the default reset behavior
    clearValidation(); // Call the function to clear validations
    form.reset(); // Reset the form fields
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

function isValidMobile(number) {
    const re = /^[1-9][0-9]{9}$/;
    return re.test(String(number).toLocaleUpperCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const mobileValue = mobile.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue == '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    
    if (mobileValue == '') {
        setError(mobile, 'Username is required');
    } else if (String(mobileValue).charAt(0) == '0') {
        setError(mobile, 'Mobile number should not start with 0')
    } else if (!isValidMobile(mobileValue)) {
        setError(mobile, 'Mobile number should be 10-digits')
    } else {
        setSuccess(mobile);
    }

    if (passwordValue == '') {
        setError(password, 'Username is required');
    } else {
        setSuccess(password);
    }
}

const clearValidation = () => {
    const inputControls = document.querySelectorAll('.input-control');
    inputControls.forEach(inputControl => {
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = '';
        inputControl.classList.remove('error', 'success');
    });
}