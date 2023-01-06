const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// <img>태그를 js로 생성할거임
const bgImage = document.createElement("img");

// <img>태그에 .src 값 assignment
bgImage.src = `6.0/img/${chosenImage}`;

// 마무리
document.body.appendChild(bgImage);