let signUpBtn=document.querySelector('.signupbtn');
let signInBtn=document.querySelector('.signinbtn');
let nameField=document.querySelector('.name-field');
let title=document.querySelector('.title');
let underLine=document.querySelector('.underline');
let text=document.querySelector('.text');
signInBtn.addEventListener('click',()=>{
     nameField.style.maxHeight='0';
     title.innerHTML='Sign In';
     text.innerHTML='Forgot Password';
     signUpBtn.classList.add('disable');
     signInBtn.classList.remove('disable');
     underLine.style.transform='translateX(35px)';

})
signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='60px';
    title.innerHTML='Sign Up';
    text.innerHTML='Password Suggestion';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underLine.style.transform='translateX(0px)';
})


