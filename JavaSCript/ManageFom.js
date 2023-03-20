function ChnageForm(x){
    if(x){
        //Ref.LogIN.style.display = "flex";
        Ref.LogIN.classList.remove("hide");
        Ref.SingnIn.classList.add("hide");
    } else {
        Ref.LogIN.classList.add("hide");
        Ref.SingnIn.classList.remove("hide");;
    }
}

ChnageForm(true)