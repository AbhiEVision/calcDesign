$(document).ready(()=>{
    // if(sessionStorage.getItem("validate") == undefined){
        
    //     location.href = "index.html";
    // }else {
        RemoveValidationFormSession();
        UpdateUserNameInPage();

        $("#logout").click(()=>{
            location.href = "index.html";
        });

        $("#edit-profile").click(()=>{
            ShowEditForm();
        });

        $("#editPass").click(()=>{
            $("#editPass:checked").val() == undefined ? $("#Password").attr("readonly",true) : $("#Password").attr("readonly",false);
        })

        $("#update-data").click(()=>{
            const data = TakeDataFromForm();
            UpdateProfile(data);
            CloseForm();
            UpdateUserNameInPage();
        })
    // }
})

function UpdateUserNameInPage(){
    $("#write").text(`Hello ${GetUsername()} !`);
}

function ShowEditForm(){
    FillForn();
    $("#main-section").addClass("blur");
    $("#edit-profile-form").removeClass("hide");
}

function FillForn(){
    const data = GetCurrentUserData();
    $("#Username").val(data.username);
    $("#E-mail").val(data.email);
    $("#Password").val(data.password);
    $("#BDdate").val(data.bddate);
    if(data.gender == "Male"){
        $("#radio1").attr("checked",true);
    } else {
        $("#radio2").attr("checked",true);
    }
}

function TakeDataFromForm(){
    const email = $("#E-mail").val();
    const username = $("#Username").val();
    const pass = $("#Password").val();
    const bddate =  $("#BDdate").val();
    const gender = $("#edit-profile-form input[type='radio']:checked").val();

    const data = { user : username, email : email, pass : pass, bddate : bddate, gender : gender };
    return data;
}

function CloseForm(){
    $("#main-section").removeClass("blur");
    $("#edit-profile-form").addClass("hide")
    ClearForm();
}

function ClearForm(){
    $("#E-mail").val(null);
    $("#Username").val(null);
    $("#Password").val(null);
    $("#BDdate").val(null);
    $("#edit-profile-form input[type='radio']:checked").prop('checked', false);
}