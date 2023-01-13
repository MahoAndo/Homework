//error message
const msg1 = "Canceled";
const msg2 = "I don't know you";
const msg3 = "Wrong password";
const msg4 = "Welcome!";

// check enter
function checkEnterText() {
    let enterText = document.getElementsByName("enterText")[0].value;
    let errorMsg = document.getElementById("errEnterMsg");
    
        if(enterText !== "Admin"){
            if(enterText !== ""){
                errorMsg.hidden = false;
                errorMsg.innerHTML = msg2;
            } 
            else{
                errorMsg.innerHTML = msg1;
            }
        }
        else{
            errorMsg.hidden = true;
            document.getElementById("hiddenText").hidden = false;
        }
}

// check password
function checkPassword() {
    let pass = document.getElementsByName("pass")[0].value;
    let message = document.getElementById("passMsg");
    if(pass !== "TheMaster"){
        if(pass !== "")
            message.innerHTML = msg3;
        else
            message.innerHTML = msg1;
    }else{
        message.innerHTML = msg4;
    }
}

// cancel button action
function cancel() {
    document.getElementById("passMsg").innerHTML = msg1;
}


