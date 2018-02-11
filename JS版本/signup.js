function checkSignUp()
{
    var username = document.getElementById("inputUserName").value;
    var password1 = document.getElementById("inputPassword1").value;
    var password2 = document.getElementById("inputPassword2").value;
    if (username=="") {
        alert("Please input username");
        return false;
    }
    else if(password1=="")
    {
        alert("Please input password");
        return false;
    }
    else if(password1.length<5||password1.length>16)
    {
        alert("The length of password must be 5~16!");
        return false;
    }
    else if(password2=="")
    {
        alert("Please confirm password");
        return false;
    }
    else if(password1 != password2)
    {
        alert("Please confirm password again");
        return false;
    }
    else{
        alert("Create successful");
        self.location="signinpage_js.html";
    }
    return true;
}