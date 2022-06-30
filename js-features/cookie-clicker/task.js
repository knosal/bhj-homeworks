const count = document.getElementById("clicker__counter");
const cookieBtn = document.getElementById("cookie");

 let countspeed = document.getElementById('clicker__speed');
 let date_Before = new Date();

cookieBtn.onclick = () => {
//    let count_textContent = count.textContent;
//    count_textContent++;
//    count.textContent = count_textContent;
    count.textContent = +count.textContent + 1;
    if (+count.textContent % 2 === 1) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
  }

    let date_After = new Date();
    countspeed.textContent = (1000 / (date_After - date_Before)).toFixed(2);
    date_Before = date_After;
};