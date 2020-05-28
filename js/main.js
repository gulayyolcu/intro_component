function emailCorrection(emailInput){
    if(emailInput.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)===null)
    {
        return true;

    }else{

        return false;
    }
}

function showWarningMessage(inputName){    
    if(document.querySelector('#name')===inputName){
        let warning=document.querySelector('.warnName').querySelector('p');
        warning.innerHTML="First name can not be empty.";
        document.querySelector('.warnName').insertAdjacentElement('beforeend',warning);
        inputName.value="";
      
    }else if(document.querySelector('#lastname')===inputName){
        let warning=document.querySelector('.warnLast').querySelector('p');
        warning.innerHTML="Lastname can not be empty.";
        document.querySelector('.warnLast').insertAdjacentElement('beforeend',warning);
        inputName.value="";  
    }else if(document.querySelector('#email')===inputName){
        let warning=document.querySelector('.warnEmail').querySelector('p');
        warning.innerHTML="Looks like this is not an email.";
        document.querySelector('.warnEmail').insertAdjacentElement('beforeend',warning);
        inputName.value="";   
    }else if(document.querySelector('#password')===inputName){
        let warning=document.querySelector('.warnPass').querySelector('p');
        warning.innerHTML="Password can not be empty.";
        document.querySelector('.warnPass').insertAdjacentElement('beforeend',warning);
        inputName.value="";   
    }else{
        alert('Something goes wrong..');
    }

}

function putExcMark(inputName){
    inputName.style.width='350px';
    inputName.style.height='45px';
    inputName.style.backgroundImage='url(../images/icon-error.svg)';
    inputName.style.backgroundRepeat='no-repeat';
    inputName.style.backgroundPosition='90% 50%';
    inputName.style.backgroundSize='auto';  
}

function formFilling(e){
    e.preventDefault();
    let firstName=document.querySelector('#name');
    let lastName=document.querySelector('#lastname');
    let email=document.querySelector('#email');
    let password=document.querySelector('#password');

    if(firstName.value===""){
        showWarningMessage(firstName);
        putExcMark(firstName);
    }else{
        console.log('input correct');
    }

    if(lastName.value===""){
        showWarningMessage(lastName);
        putExcMark(lastName);
    }else{
        console.log('input correct');
    }
    if((email.value==="") || (emailCorrection(email))){
        showWarningMessage(email);
        putExcMark(email);
    }else{
        console.log('input correct');
    }
    if(password.value===""){
        showWarningMessage(password);
        putExcMark(password);
    }else{
        console.log('input correct');
    }
   
}


document.querySelector('.button-g').addEventListener('click',formFilling);