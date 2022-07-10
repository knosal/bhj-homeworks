window.addEventListener('load', () => {
    const xhr = new XMLHttpRequest();
    //open(method, URL, async)
    xhr.open('GET','https://netology-slow-rest.herokuapp.com', true);

    xhr.send();
    /* Событие onreadystatechange происходит каждый раз, когда свойство readyState
(состояние готовности) изменяется.*/
    xhr.onreadystatechange = () => {
        //4 — запрос завершён, и ответ готов (xhr.DONE)
        if (xhr.readyState === 4) { 
            const items = document.getElementById('items');
            const loader = document.getElementById('loader');
            //свойство responseText возвращает текст ответа.
            const json = JSON.parse(xhr.responseText); 
            const data = json.response.Valute;

            loader.classList.remove('loader_active');

            for(let item in data) {
                const {CharCode, Value} = data[item];
                items.insertAdjacentHTML('beforeend',`
                    <div class="item">
                        <div class="item__code">
                            ${CharCode}
                        </div>
                        <div class="item__value">
                            ${Value}
                        </div>
                        <div class="item__currency">
                            руб.
                        </div>
                    </div>    
                `);
            };
        }
    }
})
