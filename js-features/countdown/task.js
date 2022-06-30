const textElem = document.getElementById("timer");

let timer = setInterval(function changeNext() {
    let time = textElem.textContent;
    if (time > 0) {
     time--;
        textElem.textContent = time;
     } else if (time <= 0) {
        document.getElementById("timer").innerHTML = "Вы победили в конкурсе";
        //alert("Вы победили в конкурсе"); 
        clearInterval(changeNext);
    }
}, 500);

//const timerId = setInterval(changeNext, 500);
