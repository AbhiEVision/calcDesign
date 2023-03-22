$(document).ready(()=>{
    if(sessionStorage.getItem("validate") == undefined){
        RemoveValidationFormSession();
        location.href = "index.html";
    }else {
        const user = GetUsername();
        console.log(user)
        $("#write").text(`Hello ${user} !`);
    }
})