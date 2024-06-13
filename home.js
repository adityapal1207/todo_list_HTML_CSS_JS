console.log("connected!");
let signUpBTN = document.getElementById('signUpButtonId');
let signInBTN = document.getElementById('signInButtonId');
let userName = document.getElementById('userNameId');
let title = document.getElementById('titleId');
let isSignUpActive =true;
let isSignInActive =false;
signInBTN.onclick = function(){
   if(isSignInActive){
    console.log("signIn Submitted");
    let email=document.getElementById('emailId');
    let userPassword = document.getElementById('userPasswordId');
    console.log(`userPassword : ${userPassword.value} email : ${email.value}`);
    if (email.value == '' || userPassword.value == '') {
      alert("Input fields cannot be empty!");
  } else{
   alert("Login Successful")
   window.location.href = '/list.html';
  }
  
   }
   else{
    userName.style.maxHeight=0;
    title.innerHTML="Sign In"
    signUpBTN.classList.add('disable');
    signInBTN.classList.remove('disable');
    
    isSignUpActive =false;
    isSignInActive=true;

    signInBTN.classList.add('able');
    signUpBTN.classList.remove('able');
}
    
}
signUpBTN.onclick = function(){
     if(isSignUpActive){
        console.log("signUp submitted");
        
        // console.log(userName.value);
        let email=document.getElementById('emailId');
        let userName2= document.getElementById('userNameId2');
        let userPassword = document.getElementById('userPasswordId');
        console.log(`userPassword : ${userPassword.value} email : ${email.value} username : ${userName2.value}`);
        if (email.value == '' || userPassword.value == '' || userName2.value == '') {
         alert("Input fields cannot be empty!");
         
     } else{
      alert("account created sucessfully ! Please signIn to continue!")
     
      
      email.value='';
      userPassword.value='';
      userName2.value='';


     }
       
     }

     else{
     userName.style.maxHeight= '65px';
    
    title.innerHTML="Sign Up"
   
    signUpBTN.classList.remove('disable');
    signInBTN.classList.add('disable');
    isSignUpActive=true;
    isSignInActive=false;

    signInBTN.classList.remove('able');
    signUpBTN.classList.add('able');

     }
 
}



