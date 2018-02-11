function checkEdit()
{
    var name = document.getElementById("Name").value;
    var phoneNumber = document.getElementById("Phone number").value;
    var e_mail = document.getElementById("E-mail").value;
    var address = document.getElementById("Address").value;
    var qq = document.getElementById("QQ number").value;

    var atpos=e_mail.indexOf("@");
    var dotpos=e_mail.lastIndexOf(".");

    if (name=="") {
        alert("Please input username!");
        return false;
    }
    else if(phoneNumber=="")
    {
        alert("Please input phoneNumber!");
        return false;
    }
    else if(isNaN(phoneNumber) || (phoneNumber.length!=7 && phoneNumber.length!=11))
    {
        alert("Error!Please input phoneNumber again(numbers length7 or 11)!");
        return false;
    }
    else if(e_mail=="")
    {
        alert("Please input e-mail address!");
        return false;
    }
    else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=e_mail.length)
    {
        alert("Invalid e-mail address!Please input again!");
        return false;
    }
    else if(address=="")
    {
        alert("Please input address!");
        return false;
    }
    else if(qq=="")
    {
        alert("Please input QQ number!");
        return false;
    }
    else if(isNaN(qq) || qq.length<5 || qq.length>10)
    {
        alert("Error!Please input QQ Number again!");
        return false;
    }
    else
    {
        alert("Edit successful!");
        self.location="contact_js.html";
    }
    return true;
}