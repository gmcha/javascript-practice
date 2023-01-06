// input에 넣은 text가 어디 있는지 파악하기 (변수에 담으려고)

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// click을 하면 loginInput의 속성 들고오기

function onLoginBtnClick(){
    console.dir(loginInput);
}

loginButton.addEventListener("click", onLoginBtnClick);

// input에 뭘 넣어보고 다시 click 눌러보면 input 오브젝트의 value 속성이 바뀜을 알 수 있음