//!Resizing to fit on mobile websites

const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };

  resizeOps();
  window.addEventListener("resize", resizeOps);
  
//!

const form = document.querySelector("form");

const email= document.querySelector("#E-mail");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zipCode");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");


form.addEventListener('submit',(e)=>{
    if(valueCheckerForPrevent()== false || isPasswordSame()== false || regularExp() == false ){
        e.preventDefault();
        console.log(regularExp());
    }
    
    
    checkInputs()
    passwordValidation();
        
        
    
})

function checkInputs(){
    // get the values of the inputs
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();
    const zipCodeValue = zipCode.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(emailValue == ""){
        //show error
        //add error class
        setErrorFor(email,"Email cannot be blank");
    }else{
        setSuccessFor(email);
    }

    if(countryValue == "Country"){
        setErrorForCountry(country,"Please Select a Country");
    }else{
        setSuccessFor(country);
    }

    if(zipCodeValue == ""){
        setErrorFor(zipCode,"Zip Code cannot be blank")
    }else{
        setSuccessFor(zipCode);
    }

    if(passwordValue == ""){
        setErrorFor(password,"Cannot be blank");
    }else if(confirmPasswordValue !== passwordValue){
        setErrorFor(password,"Passwords dont match");
    }else if(regularExp() == false){
        setErrorFor(password,"Password does not contain the following");
    }

    else{
        setSuccessFor(password);
    }

    if(confirmPasswordValue == ""){
        setErrorFor(confirmPassword,"Cannot be blank");
    }else if(confirmPasswordValue !== passwordValue){
        setErrorFor(confirmPassword,"Passwords do not match");
    }else if(regularExp() == false){
        setErrorFor(confirmPassword,"");
    }
    else{
        setSuccessFor(confirmPassword);
    }

    

}

function setErrorFor(input,message){
    // accessing .form-control
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message
    small.innerText = message;

    //add error className adding error to form at desired input .... if the input was email.... it would look like this... E-mail.parentElement = form control... then we would add error to the email form control
    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    //adding succes className
    formControl.className = "form-control success";

}

function setSuccessForCountry(select){
    const formControl = select.parentElement;
    formControl.className = "form-control success";
}
function setErrorForCountry(input,message){
    // accessing .form-control
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message
    small.innerText = message;

    //adding succes className
    formControl.className = "form-control Cerror";
}



//functions to use e.prevent 

function valueCheckerForPrevent(){
    if(email.value == "" || country.value == "Country" || zipCode.value == "" || password.value == "" || confirmPassword.value == ""){
        return false;
    }
}

function regularExp(){
   if(lowerCase.className != 'li valid' || upperCase.className != 'li valid' || number.className != 'li valid' || special.className != 'li valid' || length.className != 'li valid') {
    
    return false;
   }
}
function isPasswordSame(){
    if(confirmPassword.value !== password.value ){
        return false;
    }
}


//password validation stuff

let lowerCase = document.querySelector('#lower');
let upperCase = document.querySelector('#upper');
let number = document.querySelector('#number');
let special = document.querySelector('#special');
let length = document.querySelector('#length');

function checkPassword(data){
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const needNum = new RegExp('(?=.*[0-9])');
    const needSpecial = new RegExp('(?=.*[-+_!@#$%^&*., ?])');
    const needLength = new RegExp('(?=.{8,})');

    if(lower.test(data)){
        lowerCase.classList.remove('wrong');
        lowerCase.classList.add('valid');
    }else{
        lowerCase.classList.remove('valid');
    }

    if(upper.test(data)){
        upperCase.classList.remove('wrong');
        upperCase.classList.add('valid');
    }else{
        upperCase.classList.remove('valid');
    }

    if(needNum.test(data)){
        number.classList.remove('wrong');
        number.classList.add('valid');
    }else{
        number.classList.remove('valid');
    }

    if(needSpecial.test(data)){
        special.classList.remove('wrong');
        special.classList.add('valid');
    }else{
        special.classList.remove('valid');
    }


    //length validation
    if(needLength.test(data)){
        length.classList.remove('wrong');
        length.classList.add('valid');
    }else{
        length.classList.remove('valid');
    }
}

function passwordValidation(){
    if(lowerCase.className != 'li valid'){
        lowerCase.classList.add('wrong');
    }
    if(upperCase.className != 'li valid'){
        upperCase.classList.add('wrong');
    }

    if(number.className != 'li valid'){
        number.classList.add('wrong');
    }
    if(special.className != 'li valid'){
        special.classList.add('wrong');
    }
    if(length.className != 'li valid'){
        length.classList.add('wrong');
    }
}



//Show/Hide password
let toggleBtn = document.querySelector('#toggleBtn');
toggleBtn.addEventListener('click',()=>{
    if(password.type == "password"){
        password.setAttribute('type','text');
        toggleBtn.classList.add('hide');
    }else{
        password.setAttribute('type','password');
        toggleBtn.classList.remove('hide');
    }
})


//zipCode validation
function zipValidation(data){
    const zipper = new RegExp(('(^[0-9]{4})'));
    if(zipper.test(data)){
        setSuccessFor(zipCode);
    }else{
        setErrorFor(zipCode,"Has to be 5 number characters");
        
    }
}