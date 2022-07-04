const divReveal = document.querySelectorAll('.reveal');

/*window.addEventListener('scroll', (event) => {
    divReveal.forEach( (item) => {
        const { top, bottom} = item.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) {
            item.classList('reveal_active');
        } else {
            item.classList.add('reveal_active');
        }
    });
});
*/

function scrolling() {
  divReveal.forEach(item => {
    const { top, bottom} = item.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
        item.classList.remove('reveal_active');
    } else {
        item.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', scrolling);