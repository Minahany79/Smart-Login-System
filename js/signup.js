var nemaInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password")
var signUpInput = document.getElementById("signup");
var mailValid = document.getElementById("mailValid");
var passwordValid = document.getElementById("passwordValid");

var records = [];

if(localStorage.getItem("users") != null)
{
    records = JSON.parse(localStorage.getItem("users"));
    
}

signUpInput.addEventListener("click", addToRecords);


function addToRecords()
{
    var record = {
        name : nemaInput.value,
        email : emailInput.value,
        password : passwordInput.value,
    }

    if(record.name == "" || record.email == "" || record.password == "")
    {
        document.getElementById("required").classList.remove("d-none");
        document.getElementById("notExist").classList.add("d-none");
        document.getElementById("exist").classList.add("d-none");

    }
    else if(!isRegsiter(record))
    {
        document.getElementById("required").classList.add("d-none");
        document.getElementById("notExist").classList.add("d-none");
        document.getElementById("exist").classList.remove("d-none");
        records.push(record);
        localStorage.setItem('users', JSON.stringify(records));
    }
    else
    {
        document.getElementById("required").classList.add("d-none");
        document.getElementById("exist").classList.add("d-none");
        document.getElementById("notExist").classList.remove("d-none");
    }


}


function isRegsiter(user)
{
    var usersArray = JSON.parse(localStorage.getItem("users"));
    var flag = false;

    if(usersArray != null)
    {
        for(var i = 0; i < usersArray.length; i++)
        {
            if(user.email == usersArray[i].email)
            {
                flag = true;
                break;
            }
        }
    }

    return flag;
}

nemaInput.addEventListener("focus", function()
{
    document.getElementById("required").classList.add("d-none");
    document.getElementById("exist").classList.add("d-none");
    document.getElementById("notExist").classList.add("d-none");

})

emailInput.addEventListener("keyup", isEmailValid);


function isEmailValid()
{
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regex.test(emailInput.value))
    {
        signUpInput.disabled="true";
        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");
        mailValid.classList.remove("d-none");

        return false;

    }
    else{
        signUpInput.removeAttribute("disabled");
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");
        mailValid.classList.add("d-none");



        return true

    }
}

passwordInput.addEventListener("keyup", isPasswordValid);


function isPasswordValid()
{
    var regex = /([0-9]|[A-Za-z])\w{7,14}$/;
    if(!regex.test(passwordInput.value))
    {
        signUpInput.disabled="true";
        passwordInput.classList.add("is-invalid");
        passwordInput.classList.remove("is-valid");
        passwordValid.classList.remove("d-none");

        return false;

    }
    else{
        signUpInput.removeAttribute("disabled");

        passwordInput.classList.add("is-valid");
        passwordInput.classList.remove("is-invalid");
        passwordValid.classList.add("d-none");
        signUpInput.removeAttribute("disabled");

        return true
    }
}


emailInput.addEventListener("focus", hidden);

passwordInput.addEventListener("focus", hidden)

function hidden()
{

    document.getElementById("required").classList.add("d-none");
    document.getElementById("exist").classList.add("d-none");
    document.getElementById("notExist").classList.add("d-none");
}








