const login_btn = document.querySelector('.login-nav');
const register_btn = document.querySelector('.register-nav');

const loginform = document.querySelector('.loginform');
const reisterform = document.querySelector('.reisterform');
const registerLink = document.querySelector('.registerLink');
const loginLink = document.querySelector('.loginLink');
const forms = document.querySelectorAll('.form');

function showRegisterForm(){
    loginform.classList.add('done');
    loginform.classList.remove('active');
    reisterform.classList.add('active');
    setTimeout(() => {
        loginform.classList.remove('done');
    }, 1000);
}

function showLoginForm(){
    loginform.classList.add('active');
    reisterform.classList.add('done');
    reisterform.classList.remove('active');
    setTimeout(() => {
        reisterform.classList.remove('done');
    }, 1000);
}

login_btn.addEventListener('click',showLoginForm);
loginLink.addEventListener('click',showLoginForm);
register_btn.addEventListener('click',showRegisterForm);
registerLink.addEventListener('click',showRegisterForm);