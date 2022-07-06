
const chatWidget = document.querySelector('.chat-widget');
const input = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );

const currentDate = new Date();
let time = currentDate.getHours() + ':' + currentDate.getMinutes();

const robotMessages = [
    'Кто тут?',
    'Где ваша совесть?',
    'Мы ничего не будем вам продавать!',
    'К сожалению, все операторы заняты. Не пишите нам больше!',
    'Добрый день! До свидания!',
    'Вы не купили ни одного товара для того, что бы так разговаривать!'
]
const elementIndex = () => {
    return Math.floor(Math.random() * robotMessages.length);
}

const showMessage = function(time, message, messageClient) {
    messages.innerHTML += `
            <div class="message ${messageClient}">
            <div class="message__time">${time}</div>
            <div class="message__text">${message}</div>
            </div>
        `;
}

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

input.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key === 'Enter' && input.value !== '') {
    showMessage(time, input.value, 'message_client');  
    input.value = '';
    setTimeout(() => {
      showMessage(time, robotMessages[elementIndex()]);
    }, 500);
  } 
});