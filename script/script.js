'use strict';

const formEl = document.getElementById('Form');
const usernameEl = document.getElementById('username');
const emilEl = document.getElementById('mail')
const numberEl = document.getElementById('number')
const passwordEl = document.getElementById('password')
const ConformPasswordel = document.getElementById('ConformPassword')

const elements = [usernameEl,emilEl,numberEl,passwordEl,ConformPasswordel]

const error = (el)=>{
    let formcontrolEl = el.parentElement;
    formcontrolEl.classList.add('error');
    }
    
const sucess = (el)=>{
    let formcontrolEl = el.parentElement;
    formcontrolEl.classList.add('sucess')

    }



function callEverything(elms){
    for(const el of elms){
        console.log(el)
        if(el.value === ''){
                error(el)
        }else{
                sucess(el)
        }
    }
    }



formEl.addEventListener('submit',(e)=>{
    e.preventDefault()
    callEverything(elements)

})

