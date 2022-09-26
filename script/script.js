'use strict';

const formEl = document.getElementById('Form');
const usernameEl = document.getElementById('username');
const emilEl = document.getElementById('mail')
const numberEl = document.getElementById('number')
const passwordEl = document.getElementById('password')
const ConformPasswordel = document.getElementById('ConformPassword')

const elements = [usernameEl,emilEl,numberEl,passwordEl,ConformPasswordel]

const error = (el,message)=>{
    const formControlEl = el.parentElement;
        formControlEl.className = 'form-control error';
        const smallEl = formControlEl.querySelector('small');
        smallEl.textContent = message;
    }
    
const sucess = (el)=>{
    const formControlEl = el.parentElement;
    formControlEl.className = 'form-control sucess';

    }



function callEverything(elms){
    for(const el of elms){
        if(el.value === ``){
                error(el,`${el.name} is required`)
        }else{
                sucess(el)
        }
    }
    }

    const checkLength = function (el, min, max) {
        if (el.value.length < min){
                error(el, `${el.name}should have ${min} characters`);
        }else if(el.value.length > max){
                error(el, `${el.name} should not be more than ${max} characters`);
    
        }else{
                sucess(el);
        }
    };
    const passwordMatch = function (elOne, elTwo) {
        if(elOne.value === '' || elTwo.value === '') {
            error(elOne, 'new password is mandatory');
            error(elTwo, 'confirm password is mandatory')
        }else{
            if(elOne.value === elTwo.value){
                sucess(elOne);
                sucess(elTwo);
        }else{
            error(elOne, 'password do not match');
            
        }
        }
            
    };
    

formEl.addEventListener('submit',(e)=>{
    e.preventDefault()
    callEverything(elements)
    checkLength(usernameEl, 5, 12);
    checkLength(emailEl,5,25);
    checkLength(numberEl,10,10);
    checkLength(passwordEl,8,15);
    passwordMatch(newpasswordEl, ConformPasswordel);

})

