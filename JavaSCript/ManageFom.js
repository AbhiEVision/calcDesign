$(document).ready(() => {
    ClearFrom();
    //Changing between forms
    $("#login-change").click(() => ShowSignIn());
    $("#sign-change").click(() => ShowLogin());

    //submit buttons
    $("#login-submit").click((e) => {
        e.preventDefault();
        $(".needs-validation").addClass("was-validated");
        const data = TakeDataFromLoginIn();
        //console.log(data);
        if(ValidateLogin(data) && ValidateUser(data)){
            SetDataInSessionStorage(data);
            StoreDetailsOfUserInSessionStorage(data.id);
            location.href = 'home.html';
        }
    })

    $("#signup-submit").click((e) => {
        e.preventDefault();
        $(".needs-validation").addClass("was-validated");
        const data = TakeDataFromSignUp();
        if (ValidateForm(data)) {
            delete data.password2;
            StoreData(data);
            ShowLogin();
        }
    })

    $(".toast > div > button").click(() => {
        $('.toast').removeClass('show');
    })
})

function ShowSignIn() {
    Ref.Login.addClass("hide");
    Ref.Signin.removeClass("hide");
    $('.toast').removeClass('show');
    $(".needs-validation").removeClass("was-validated");
    ClearFrom();
}

function ShowLogin() {
    Ref.Login.removeClass("hide");
    Ref.Signin.addClass("hide");
    $('.toast').removeClass('show');
    $(".needs-validation").removeClass("was-validated");
    ClearFrom();
}

function ShowToastWithMessag(msg) {
    console.log(msg);
    $(".toast-body").html(msg);
    $(".toast").addClass("show");
}

function TakeDataFromSignUp() {
    const name = SingninForm.Username.val();
    const email = SingninForm.Email.val();
    const bddate = SingninForm.BDDate.val();
    const pass = SingninForm.Password1.val();
    const pass2 = SingninForm.Password2.val();
    const gender = $(".SingnIn input[type='radio']:checked").val();
    
    const data = { username: name, email: email, bddate: bddate, password: pass, password2: pass2, gender: gender }
    return data;
}

function TakeDataFromLoginIn(){
    const id = LoginForm.Email.val();
    const pass = LoginForm.Password.val();
    const remember = $("#check:checked").val() == undefined ? false:true;
    const data = { id : id, Password : pass, remember : remember};
    return data;
}

function ValidateForm(data) {
    console.log(data);
    if (data.username == "" && data.email == "" && data.bddate == "" && data.password == "" && data.password2 == "") {
        ShowToastWithMessag("Please Fill Form");
        return false;
    } else if (data.username == "") {
        ShowToastWithMessag("Please Enter your name");
        return false;
    } else if (data.email == "") {
        ShowToastWithMessag("Please Enter email");
        return false;
    } else if (data.password == "") {
        ShowToastWithMessag("Please Enter Password");
        return false;
    } else if(data.password != ""){
        if(data.password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$")){
            // do nothing
        } else {
            ShowToastWithMessag("Please Enter Valid Password <br> &nbsp; Min 8 Character <br> &nbsp; Must contain Capital <br> &nbsp; Must contain lower <br> &nbsp; Must Contain Number <br> &nbsp; Must contain spacial Character");
            return false;
        }
    }
    if (data.password2 == "") {
        ShowToastWithMessag("Please Enter Password again");
        return false;
    } else if (data.password != data.password2) {
        ShowToastWithMessag("Please enter same Password");
        return false;
    } else if (data.gender == null || data.gender == undefined || data.gender == "") {
        ShowToastWithMessag("Please Select Gender");
        return false;
    } else if (data.bddate == "") {
        ShowToastWithMessag("Please Enter a Birth date");
        return false;
    } else if (Date.parse(data.bddate) > Date.now()) {
        ShowToastWithMessag("Please Enter Valid date");
        return false;
    }
    return true;
}

function ValidateLogin(data){
    if(data.id == "" && data.Password == ""){
        ShowToastWithMessag("Please fill data")
        return false;
    } else if(data.id == ""){
        ShowToastWithMessag("Please enter username or email id for login");
        return false;
    } else if(data.Password == ""){
        ShowToastWithMessag("Enter Password");
        return false;
    }
    return true;
}

function ClearFrom() {
    SingninForm.Username.val(null);
    SingninForm.BDDate.val(null);
    SingninForm.Email.val(null);
    SingninForm.Password1.val(null);
    SingninForm.Password2.val(null);
    $(".SingnIn input[type='radio']:checked").prop('checked', false);
    LoginForm.Email.val(null);
    LoginForm.Password.val(null);
    $("#check").prop('checked',false);
}
