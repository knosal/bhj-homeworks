const modalMain = document.querySelector('#modal_main');
const closeModal = document.querySelectorAll('.modal__close_times');
const showModal = document.querySelector('.show-success');
const showModalActive = document.querySelector('#modal_success');

const closeWindow = () => {
  for(let i = 0; i < closeModal.length; i++) {
    closeModal[i].onclick = () => {
      modalMain.classList.remove('modal_active');
      showModalActive.classList.remove('modal_active')
    }
  }
}
closeWindow()

modalMain.classList.add('modal_active');

showModal.onclick = () => { 
   modalMain.classList.remove('modal_active');
   showModalActive.classList.add('modal_active');
}