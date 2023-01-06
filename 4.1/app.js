const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    console.log(loginInput.value);
    // form이 submit하는 동시에 뜨다가 사라짐
}

loginButton.addEventListener("click", onLoginBtnClick);

