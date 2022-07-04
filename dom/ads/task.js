const rotator = Array.from(document.querySelectorAll('.rotator__case'));

let i = 0;

let rotatorTimeout = setTimeout(function timeFunc() {
    rotator.forEach((item) => item.classList.remove('rotator__case_active'));
    if (i >= rotator.length - 1) { i = 0; } 
    else { i++; }
    rotator[i].classList.add('rotator__case_active');
    rotatorTimeout = setTimeout(timeFunc, 500);
}, 500);