const emailTextBox = document.getElementById("email");
const sendButton = document.getElementById("send");
const confirmMsg = document.getElementById("msg");

emailTextBox.addEventListener("keyup", validateEmail);


function validateEmail(){
    let email = emailTextBox.value;
    let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(emailRegEx.test(email)){
        emailTextBox.style.borderColor = "green";
        sendButton.disabled = false;
        sendButton.addEventListener("click", successMsg);
    }
    else{
        emailTextBox.style.borderColor = "red";
    }
}

function successMsg(){
    confirmMsg.style.display = "block";
    setTimeout(successMsgReset,5000);
}
function successMsgReset(){
    confirmMsg.style.display ="none";
}






