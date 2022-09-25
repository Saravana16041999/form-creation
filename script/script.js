'use strict';

const formEl = document.getElementById('Form');
const usernameEl = document.getElementById('username');
const emilEl = document.getElementById('mail')
const numberEl = document.getElementById('number')
const passwordEl = document.getElementById('password')
const ConformPasswordel = document.getElementById('ConformPassword')

const elements = [formEl,usernameEl,emilEl,numberEl,passwordEl,ConformPasswordel]

const error = (el)=>{
    let formcontrolEl = el.parentElement;
    formcontrolEl.classList.add('error');
}
const sucess = (el)=>{
    let formcontrolEl = el.parentElement;
    formcontrolEl.classList.add('sucess')
}

function callEverything(arr){
    for(const el of arr){
        console.log(el)
        if(el.value === ''){
            error(el)
        }else{
            sucess(el)
        }
}
}
function username(el,max,min){
        if (el.value < min){
            document.querySelector('small').textContent = `name should be min of ${min}`;
            error(el)
        }
        else if (el.value > max){
            document.querySelector('small').textContent = `name should be max of ${max}`;
            error(el)
        }else{
            error(el)
        }
    }



formEl.addEventListener('submit',(e)=>{
    e.preventDefault()
    callEverything(elements)
    username(usernameEl,13,5)
})

