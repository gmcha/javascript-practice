const clock = document.getElementById("clock");

function getClock(){
    const date = new Date();
    // date.getHours() 등은 num을 반환함. string으로 만들어주기
    // .padStart()으로 string의 총 character 2개이되 아니면 앞에 "0" 추가;
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 브라우저 뜨자마자 getClock() 호출
setInterval(getClock, "1000") // 1초에 한 번씩 getClock함수 호출