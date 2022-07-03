const tabNavigation = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabNavigation.length; i++) {
    const tabClick = () => {
        tabNavigation.forEach(item => item.classList.remove('tab_active'));
        tabContent.forEach(item => item.classList.remove('tab__content_active'));
        tabNavigation[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    }

    tabNavigation[i].addEventListener('click', tabClick);
}

