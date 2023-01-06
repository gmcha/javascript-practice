// 4.2를 임의의 <a>태그에 적용
const link = document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
}

link.addEventListener("click", handleLinkClick);