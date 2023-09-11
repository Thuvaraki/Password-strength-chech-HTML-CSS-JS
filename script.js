let password = document.querySelector('.password');
let message = document.querySelector('.message');
let strength = document.querySelector('.strength');
let info = document.querySelector('.info');

password.addEventListener('input', () => {
    let passwordValue = password.value;
    let containsNumber = /[0-9]/.test(passwordValue);
    let containsSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(passwordValue);

    if (passwordValue.length > 0) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }

    if (passwordValue.length < 4) {
        strength.innerHTML = " weak. ";
        password.style.borderColor = "#ff5925";
        message.style.color = "#ff5925";
    } 

    else if (passwordValue.length >= 4 && passwordValue.length < 8) {
        if(containsNumber || containsSpecialChar){
            strength.innerHTML = " medium";
            password.style.borderColor = "yellow";
            message.style.color = "yellow";
        }
        else{
            info.innerHTML = "<br>Your password should contain at least a special character or a number";
        }
    }

    else if (passwordValue.length >= 8){
        if(containsNumber || containsSpecialChar){
            strength.innerHTML = " strong.";
        password.style.borderColor = "green";
        message.style.color = "green";
        }
        else{
            info.innerHTML = "<br>Your password should contain at least a special character or a number";
        }
        
    }
});
