const countDead = document.getElementById("dead");
const countLost = document.getElementById("lost");
let statusBtn = document.getElementsByClassName("hole");

function reset(message) {
    let report = message;
    alert(message);
    countDead.textContent = 0;
    countLost.textContent = 0;
}

for(let i = 0; i < statusBtn.length; i++) {
    statusBtn[i].onclick = () => {
        if (statusBtn[i].className.includes("hole_has-mole")) {
            countDead.textContent++;
        } else {
            countLost.textContent++;
        }

        if (countDead.textContent == 10) {
            reset("Вы победили!");
        } else if (countLost.textContent == 5) {
            reset("Поражение!");
        }
    }
}