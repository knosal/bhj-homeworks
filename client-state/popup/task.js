const modalContent = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('div.modal__close')

const getCookie = (name) => {
    const pairs = document.cookie.split('; ');
    return pairs.includes(name);
}

if (!getCookie('id = 1')) {
    modalContent.classList.add('modal_active');
}

modalClose.onclick = () => {
    modalContent.classList.remove('modal_active');
    document.cookie = 'id = 1';
};