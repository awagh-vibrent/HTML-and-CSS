const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const passwordError = document.getElementById('password-error');
const submitError = document.getElementById('submit-error');
let inputs = document.querySelectorAll('input');


const validateName = () => {
    const name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.textContent = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.textContent = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;


}

const validatePhone = () =>{
    const phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.textContent = "Phone No is required";
        return false;
    }

    if(phone.length !== 10){
        phoneError.textContent = "Phone no should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.textContent = "Only Digits Please";
        return false ;

    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>' ;
    return true;
}

const validateEmail = () =>{
    const email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.textContent = "Email required";
        return false;
    } 

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.textContent = "Email invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>' ;
    return true;
}

const validateMessage = () =>{
    const message = document.getElementById('contact-message').value;
    const required = 30;
    const left = required - message.length;

    if(left > 0){
        messageError.textContent = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>' ;
    return true;
}

const validatePassword = () =>{
    const password = document.getElementById('contact-password').value;

    if(password.length == 0){
        passwordError.textContent = "Password is required";
        return false ;
    }

    if(password.length < 8 && password.length > 0 ){
        passwordError.innerHTML = " should be less than 20 chars";
        return false;
    }

    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)){
        passwordError.textContent ="enter password correctly";
        return false;
    }

    passwordError.innerHTML = '<i class="fas fa-check-circle"></i>' ;
    return true;
}

const validateForm = () =>{
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() || !validatePassword()){
        submitError.style.display = "block";
        submitError.textContent = "Please Fix the error";
        setTimeout(function(){submitError.style.display = "none";}, 3000);
        return false;
    }
}



const SignUp = () =>{
    const name = document.getElementById('contact-name').value;
    const phone = document.getElementById('contact-phone').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    const password = document.getElementById('contact-password').value;

   

    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() || !validatePassword()){
        alert("Enter Credentials");
      
        return false;
    }

    inputs.forEach(input => input.value = " ");


    localStorage.setItem("name1",name);
    localStorage.setItem("phone1",phone);
    localStorage.setItem("email1",email);
    localStorage.setItem("message1",message);
    localStorage.setItem("password1",password);
    

    alert("User Registered Successfully...!!");
}