var emailLoginInput = document.getElementById("emailLogin");
var passwordLoginInput = document.getElementById("passwordLogin");
var loginBtnInput = document.getElementById("loginBtn");


loginBtnInput.addEventListener("click", regsitiration);

var indexTemp = 0;
function regsitiration()
{
    user = {
        mail: emailLoginInput.value,
        password: passwordLoginInput.value,
    }
    var records = JSON.parse(localStorage.getItem("users"));

    var flag = false;

    if(user.mail == "" || user.password == "")
    {
        document.getElementById("required").classList.remove("d-none");
    }
    else
    {
        document.getElementById("required").classList.add("d-none");

        for(var i = 0; i < records.length; i++)
        {
                if((records[i].email.toUpperCase() == user.mail.toUpperCase() ) && (records[i].password == user.password))
                {   
                    indexTemp = i;
                    flag=true; 
                    break;           
                }
        }

        if(flag)
        {
            document.getElementById("loginBtn").setAttribute("href", "home.html");
            localStorage.setItem("session", records[indexTemp].name);
            
        }
        else
            document.getElementById("incorrect").classList.remove("d-none");
    }
}


emailLoginInput.addEventListener("focus", function(){
  
    document.getElementById("incorrect").classList.add("d-none");
    document.getElementById("required").classList.add("d-none");

});

passwordLoginInput.addEventListener("focus", function(){
  
    document.getElementById("incorrect").classList.add("d-none");
    document.getElementById("required").classList.add("d-none");

});