'use strict';

const formEl = document.getElementById('Form');
const usernameEl = document.getElementById('username');
const emilEl = document.getElementById('mail')
const numberEl = document.getElementById('number')
const passwordEl = document.getElementById('password')
const ConformPasswordel = document.getElementById('ConformPassword')


formEl.addEventListener('submit',function (event){
    event.preventDefault();
    if(usernameEl.value === ''){
        let formcontrolEl = usernameEl.parentElement;
        formcontrolEl.classList.add('error')
    }else{
        let formcontrolEl = usernameEl.parentElement;
        formcontrolEl.classList.add('sucess')
    }
    if(emilEl.value === ''){
        let formcontrolEl = emilEl.parentElement;
        formcontrolEl.classList.add('error')
    }else{
        let formcontrolEl = emilEl.parentElement;
        formcontrolEl.classList.add('sucess')
    }
    if(numberEl.value === ''){
        const formcontrolEl = numberEl.parentElement;
        formcontrolEl.class.add('error')
    }else{
        const formcontrolEl = numberEl.parentElement;
        formcontrolEl.classList.add('sucess')
    }
    if(passwordEl.value === ''){
        const formcontrolEl = passwordEl.parentElement;
        formcontrolEl.classList.add('error')
    }else{
        const formcontrolEl = passwordEl.parentElement;
        formcontrolEl.classList.add('sucess')
    }
    if(ConformPasswordel.value === ''){
        const formcontrolEl = ConformPasswordel.parentElement;
        formcontrolEl.classList.add('error')
    }else{
        const formcontrolEl = ConformPasswordel.parentElement;
        formcontrolEl.classList.add('sucess')
    }
})


