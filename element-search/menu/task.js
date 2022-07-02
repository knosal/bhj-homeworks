const menuLinks = Array.from(document.querySelectorAll('.menu__link'));
const menuSub = Array.from(document.querySelectorAll('.menu_sub'));
let closeMenu = (item) => {item.classList.remove('menu_active')};


for(let i = 0; i < menuLinks.length; i++) {
    let link = menuLinks[i].closest('.menu__item');
    let sub = link.querySelector('.menu_sub');
  
    menuLinks[i].onclick = () => {
        if (sub === null) { return true; }
        if (sub.classList.contains('menu_active')) {  
            menuSub.forEach(closeMenu);
            return false;
        } else if (link && sub != null) {
            menuSub.forEach(closeMenu);
            sub.classList.add('menu_active');
            return false;
        }
    }
}