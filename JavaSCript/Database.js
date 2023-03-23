function StoreData(data){
    let users = [];
    if(GetDataFromStorage() != null){
        users = GetDataFromStorage();  
    } 
    users.push(data);
    SetdataInStorage(users);
}

function GetDataFromStorage(){
    return JSON.parse(localStorage.getItem("USERS"));
}

function SetdataInStorage(data){
    localStorage.clear();
    localStorage.setItem("USERS",JSON.stringify(data));
}


function GetDataFromSessionStorege(){
    return JSON.parse(sessionStorage.getItem("USER"));
}

function SetDataInSessionStorage(data){
    sessionStorage.setItem("USER", JSON.stringify(data));
}

function ValidateUser(data){
    const users = GetDataFromStorage() == undefined ? [] : GetDataFromStorage();
    for(let i=0,len =users.length; i<len; i++){
        if(users[i].username == data.id || users[i].email == data.id && users[i].password == data.Password){
            return true;
        }
    }
    ShowToastWithMessag("Invalid credentials!")
    return false;
}

function StoreDetailsOfUserInSessionStorage(id){
    const users = GetDataFromStorage();
    
    for(let i=0,len =users.length; i<len; i++){
        if(users[i].username == id || users[i].email == id ){
            const data = { username: users[i].username, email: users[i].email, bddate: users[i].bddate, password: users[i].password, gender: users[i].gender }
            sessionStorage.setItem("UserData", JSON.stringify(data));
            break;
        }
    }
}

function GetUsername(){
    return JSON.parse(sessionStorage.getItem("UserData")).username;
}

function PutValidationThatComeFromLoginPage(){
    sessionStorage.setItem("validate",true);
}

function RemoveValidationFormSession(){
    sessionStorage.removeItem("validate");
}

function GetCurrentUserData(){
    return JSON.parse(sessionStorage.getItem("UserData"));
}

function UpdateProfile(data){
    const users = GetDataFromStorage();
    for(let i =0,len = users.length; i<len ; i++){
        if(users[i].email == data.email){
            users[i].username = data.user;
            users[i].bddate = data.bddate;
            users[i].password = data.pass;
            users[i].gender = data.gender;
            SetdataInStorage(users);
            sessionStorage.setItem("UserData", JSON.stringify(users[i]));
            if(GetDataFromSessionStorege() != null || GetDataFromSessionStorege() != undefined){
                const user = {id : data.email, Password : data.pass, remember : true};
                console.log(user);
                SetDataInSessionStorage(user);
            }
            break;
        }
    }
}