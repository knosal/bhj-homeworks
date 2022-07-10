const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const progress = document.getElementById('progress');   
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    xhr.upload.onprogress = (event) => {
        let percent = event.loaded/event.total;
        progress.value = percent;
    }

    let formData = new FormData(form);
    xhr.send(formData);
});