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
    const users = GetDataFromStorage();
    for(let i=0,len =users.length; i<len; i++){
        if(users[i].username == data.id || users[i].email == data.id && users[i].password == data.Password){
            return true;
        }
    }
    return false;
}

function GetDataFormSessionStorage(){
    return JSON.parse(sessionStorage.getItem("USER"));
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
    return (JSON.parse(sessionStorage.getItem("UserData")).username);
}