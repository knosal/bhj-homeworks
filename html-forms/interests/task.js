const interestsCheck = Array.from(document.querySelectorAll('.interest__check'));

interestsCheck.forEach((item) => item.addEventListener('change', (event) => {
    event.preventDefault(); 
    const parentSelector = event.currentTarget.closest('.interest');
    const childSelector = Array.from(parentSelector.querySelectorAll('.interests > .interest'));

    const searchForChild = (bool) => {
        childSelector.forEach((i) => {
            const childCheck = i.querySelector('.interest__check');
            childCheck.checked = bool;
        });
    }
    
    if (event.currentTarget.checked) {
        searchForChild(true);
    } else if (event.currentTarget.checked === false) {
        searchForChild(false);
    }
}));