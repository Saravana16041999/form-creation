'use strict';

const formEl = document.getElementById('Form');
const usernameEl = document.getElementById('username');
const emilEl = document.getElementById('mail')
const numberEl = document.getElementById('number')
const passwordEl = document.getElementById('password')
const ConformPasswordel = document.getElementById('ConformPassword')

const elements = [formEl,usernameEl,emilEl,numberEl,passwordEl,ConformPasswordel]

function callEverything(elements){
    for(el of elements){
        if(el.value === ''){
            let formcontrolEl = el.parentElement;
            formcontrolEl.classList.add('error')
        }else{
            let formcontrolEl = el.parentElement;
            formcontrolEl.classList.add('sucess')}
        }
}



