
let unameNode, emailNode, passNode, c_passNode;
let errorNode1, errorNode2, errorNode3, errorNode4;

$(function(){
    unameNode = $("#email");
    emailNode = $("#pass");
    passNode = $("#pass1");
    c_passNode = $("#cpass");

    errorNode1 = $("#err1");
    errorNode2 = $("#err2");
    errorNode3 = $("#err3");
    errorNode4 = $("#err4");

    let array=[errorNode1,errorNode2,errorNode3,errorNode4];
    for(let node of array){
    node.css('color','red');
    //   node.css({color:"red"});
    }

    unameNode.blur(()=>validateUser());
    emailNode.blur(()=>validateEmail());
    passNode.blur(()=>validatePass());
    c_passNode.blur(()=>validateCPass());
    $("#submit").submit(()=>validate());
});

// function validateLogin(){
//     var username = document.getElementById("email").value;
//     var email = document.getElementById("pass").value;
//     var password = document.getElementById("pass1").value;
//     var c_password = document.getElementById("cpass").value;
//     if ( username  && email && password && c_password != null ){
//     window.alert ("Register successful!!!");
//     window.location = "../HTML/Login.html"; // Redirecting to other page.
//     }
// }

function validate(){
    let v1 = validateUser();
    let v2 = validateEmail();
    let v3 = validatePass();
    let v4 = validateCPass();
    return (v1 && v2 && v3 && v4);  
}


function validateUser(){
    let uname=unameNode.val();
    error1.html("")
    if(uname===''){
        error1.html("<small>User name is required</small>");
        unameNode.css('border','2px solid red');
        return false
    }
    else if(uname.length < 3 || uname.length > 10){
        error1.html("<small>Username should have length b/w 3 to 10</small>");
        unameNode.css('border','2px solid red');
        return false
    } 
    else{
        unameNode.css('border','2px solid green')
        return true;
    }
}

function validateEmail(){
    let mail=emailNode.val();
    error2.html("");
    if(mail===''){
        error2.html("<small>Email is required</small>");
        emailNode.css('border','2px solid red');
        return false;
    }
    else if(!mail.includes('@') || mail.endsWith('@')){
        error2.html('<small>Email is not valid</small>');
        emailNode.css('border','2px solid red');
        return false;
    }
    else{
        emailNode.css('border','2px solid green');
        return true;
    }   
}

function validatePass(){
    var pass=passNode.val();
    error3.html("");
    let pat3 = RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$")
    if(pass===''){
        error3.html("<small>Password is required</small>");
        passNode.css("2px solid red");
        return false;
    }
    else if(pat3.test(pass) == false){
        error3.html("<small>Password is invalid</small>");
        passNode.css('border','2px solid red');
        return false;
    }
    else{
        passNode.css('border','2px solid green');
        return true;
    }
}

function validateCPass(){
    let confirmpass=c_passNode.val();
    let pass = passNode.val();
    error4.html("");
    if(confirmpass===''){
        error4.html("<small>Confirm Password is required</small>");
        c_passNode.css('border',"2px solid red");
        return false;
    }
    else if(confirmpass != pass){
        error4.html("<small>Password not matching</small>");
        c_passNode.css('border','2px solid red');
        return false;
    }
    else{
        c_passNode.css('border',"2px solid green");
        return true;
    }   
}

function validate(){
    let v1 = validateUser();
    let v2 = validateEmail();
    let v3 = validatePass();
    let v4 = validateCPass();
    return (v1 && v2 && v3 && v4);  
}







