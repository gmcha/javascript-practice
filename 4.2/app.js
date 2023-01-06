const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){ // submit하면 함수 호출 동시에 무언가를 불러옴
    event.preventDefault(); // 브라우자 default하는 것을 멈춤
    console.log(event);
}

// form이 submit을 하면 onLoginSubmit을 한다
loginForm.addEventListener("submit", onLoginSubmit);