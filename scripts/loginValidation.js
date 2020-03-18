const form  = document.getElementsByTagName('form')[0];

const userName = document.getElementById('username');
const userNameError = document.querySelector('#username + span.error');
const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

userName.addEventListener('input', function (event) {

  if (userName.validity.valid) {
    userNameError.innerHTML = ''; 
    userNameError.className = 'error'; 
  } else {
    if(JSON.parse(sessionStorage.isArabic)){
    showError(userName,userNameError, 'يرجى كتابت اسم المستخدم', `احروف ${ userName.minLength } اسم المستخدم يجب ان  لا يقل عن`, 'اسم المستخدم ليس متوافق مع الشروط' );
  }else{
    showError(userName,userNameError, 'Please type the username', `username should be at least ${ username.minLength } characters; you entered ${ username.value.length }.`, 'Username does not meet the requirements' );
  }
}
});
password.addEventListener('input', function (event) {
  
    if (password.validity.valid) {
      passwordError.innerHTML = ''; 
      passwordError.className = 'error'; 
    } else {
      if(JSON.parse(sessionStorage.isArabic)){
      showError(password,passwordError, 'يرجى كتابت كلمة المرور', `احروف ${password.minLength} كلمة المرور يجب ان لا تقل عن`, 'كلمت المرور ليست متوافقه مع الشروط');
    }else{
      showError(password,passwordError,'Please type the password', `password should be at least ${ password.minLength } characters; you entered ${ password.value.length }.`, 'password does not meet the requirements' );
    }
  }
  });

form.addEventListener('submit', function (event) {

  if(!userName.validity.valid) {
    if(JSON.parse(sessionStorage.isArabic)){
      showError(userName,userNameError, 'يرجى كتابت اسم المستخدم', `احروف ${ userName.minLength } اسم المستخدم يجب ان  لا يقل عن`, 'اسم المستخدم ليس متوافق مع الشروط' );
    }else{
      showError(userName,userNameError, 'Please type the username', `username should be at least ${ username.minLength } characters; you entered ${ username.value.length }.`, 'Username does not meet the requirements' );
    }
    event.preventDefault();
  }
  if(!password.validity.valid){
     if(JSON.parse(sessionStorage.isArabic)){
      showError(password,passwordError, 'يرجى كتابت كلمة المرور', `احروف ${password.minLength} كلمة المرور يجب ان لا تقل عن`, 'كلمت المرور ليست متوافقه مع الشروط');
    }else{
      showError(password,passwordError,'Please type the password', `password should be at least ${ password.minLength } characters; you entered ${ password.value.length }.`, 'password does not meet the requirements' );
    }
    event.preventDefault();
  }
});

function showError(element, elementError, errorMessage_valueMissing, errorMessage_tooShort, errorMessage_typeMismatch) {
  if(element.validity.valueMissing) {
    elementError.textContent = errorMessage_valueMissing;
  } else if(element.validity.typeMismatch) {
    elementError.textContent = errorMessage_typeMismatch;
  } else if(element.validity.tooShort) {
    elementError.textContent = errorMessage_tooShort;
  }
  elementError.className = 'error active';
}