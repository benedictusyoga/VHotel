function validateRegistration(){
    var name = document.getElementById("name");
    var phonenumber = document.getElementById("phonenumber");
    var email = document.getElementById("email");
    var people = document.getElementById("people");
    var checkin = document.getElementById("checkin");
    var password = document.getElementById("password");
    var agreement = document.getElementById("agreement");
    var errorMsg = document.getElementById("errormsg");
    var success = document.getElementById("success");


    if(name.value.length < 5){
        alert("Your name must consists of more than 5 character!")
        errorMsg.style.display = "inline";
        errorMsg.textContent = "Please Complete The Forms";
    }
    else if(phonenumber.value.length < 12){
        alert("Your phone number is INVALID! Please try again.")
        errorMsg.style.display = "inline";
        errorMsg.textContent = "Please Complete The Forms";
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Your E-Mail must ends with @gmail.com!")
        errorMsg.style.display = "inline";
        errorMsg.textContent = "Please Complete The Forms";
    }
    else if(people.value > 10){
        alert("Only a Maximum of 10 People can be reserved at the same time!")
        errorMsg.style.display = "inline";
        errorMsg.textContent = "Please Complete The Forms";
    }
    else if(people.value.length == 0){
        alert("Please fill in the Number of People Field")
        errorMsg.style.display = "inline";
        errorMsg.textContent = "Please Complete The Forms";
    }
    else if(checkin.value.length == 0){
        alert("Please fill the date picker");
        errorMsg.style.display = "inline";
        errorMsg.textContent = "Please Complete The Forms";
    }
    else if(password.value.length > 6){
        alert("That VhoTel member number is INVALID!");
    }
    else if(!agreement.checked){    
        errorMsg.style.display = "inline";
        errorMsg.textContent = "Please check the agreement box!";
    }
    else{
        success.style.display = "inline";
        errorMsg.style.display = "none";
    }
    
}
