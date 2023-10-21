
const personal_details = document.querySelector(".personal-details");
const account_details = document.querySelector(".account-details");

const detailsbtn = document.querySelector('.details');
const accountstn = document.querySelector('.accounts');

const updateForm = document.querySelector('.updatedetails');
const accountForm = document.querySelector('.account-form-conatiner')

const edit_btn = document.querySelector('.edit-btn');
const add_btn = document.querySelector('.addaccount');

const setactive = document.querySelectorAll('.setactive');

function showDetails(){
    setactive.forEach(active => {
        active.classList.remove('active');
    });

    personal_details.classList.add('active');
}

function showAccounts(){
    setactive.forEach(active => {
        active.classList.remove('active');
    });

    account_details.classList.add('active');
}

function showEditform(){

    setactive.forEach(active => {
        active.classList.remove('active');
    });

    updateForm.classList.add('active');
}

function showAccountForm(){
    setactive.forEach(active => {
        active.classList.remove('active');
    });
    accountForm.classList.add('active');
}

function cancelFunc(){
   
}

detailsbtn.addEventListener('click',showDetails);
accountstn.addEventListener('click',showAccounts);

edit_btn.addEventListener('click',showEditform);
add_btn.addEventListener('click',showAccountForm);

const delbtn = document.querySelectorAll('.del');

delbtn.forEach(del => {
    del.addEventListener('click',function(){
        var confirmTest = confirm(`do you want to delete "${del.previousElementSibling.innerHTML}" account`);
        if (confirmTest) {
            del.parentElement.remove();
        }
        del.preventDefault();
    })
});

