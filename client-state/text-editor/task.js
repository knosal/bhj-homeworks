const textEditor = document.getElementById('editor');
const clearBtn = document.getElementById('clear');

let saveText = (e) => { localStorage.setItem('text', e.currentTarget.value); }

let clearText = () => {
    localStorage.removeItem('text');
    textEditor.value = '';
}

window.onload = () => { textEditor.value = localStorage.getItem('text'); }

textEditor.addEventListener('keyup', saveText);
clearBtn.addEventListener('click', clearText);

/*
text.value = localStorage.getItem('myText');

text.onkeyup = ((e) => {
  localStorage.setItem('myText', text.value);
});

clear.onclick = ((e) => {
  localStorage.removeItem('myText');
  text.value='';
});
*/