function check()
{
    var username = document.getElementById("inputUserName").value;
    var password = document.getElementById("inputPassword").value;

    if (username=="") {
        alert("Please input username");
        return false;
    }
    else if(password=="")
    {
        alert("Please input password");
        return false;
    }
    else if(username!="admin"||password!="123456")
    {
        alert("Username or password is false");
        return false;
    }
    else
    {
        self.location="contact_js.html";
    }
    return true;
}