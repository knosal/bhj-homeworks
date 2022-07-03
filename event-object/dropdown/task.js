const dropValue = document.querySelector('.dropdown__value');
const dropList = document.querySelector('.dropdown__list');
const dropItem = Array.from(document.querySelectorAll('.dropdown__item'));
let cask = 'dropdown__list_active';

let onClickActive = () => {
    dropList.classList.contains(cask) ? dropList.classList.remove(cask) : dropList.classList.add(cask);
    return false;
}

for (let i = 0; i < dropItem.length; i++) {
     dropItem[i].onclick = () => {
        dropValue.textContent = dropItem[i].textContent;
        dropList.classList.remove(cask);
        return false;
    }
}

dropValue.addEventListener('click', onClickActive);