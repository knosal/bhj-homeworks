const form = document.getElementById('form');
const progress = document.getElementById('progress'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form);  
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    xhr.upload.onprogress = (event) => {
        progress.value = event.loaded / event.total;
    };

    xhr.upload.oneerror = () => {
       console.log(`Ошибка во время отправки: ${xhr.status}`);
    };
    
    xhr.send(formData);
});