const clock = document.getElementById("clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // 하지만 date.getHours 등으로 시,분,초를 들고오면 string이 character 1개짜리임
}

getClock(); // 브라우저 뜨자마자 getClock() 호출
setInterval(getClock, "1000") // 1초에 한 번씩 getClock함수 호출