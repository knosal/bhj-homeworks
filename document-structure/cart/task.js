const product = Array.from(document.querySelectorAll('.product'));
const cartProducts = document.querySelector('.cart__products');
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const productImage = Array.from(document.querySelectorAll('.product__image'));

productAdd.forEach(item => item.addEventListener('click', (e) => {
  let id = e.currentTarget.closest('.product').dataset.id;
  const quantityValue = e.currentTarget.closest('.product').querySelector('.product__quantity-value');
  const cartProduct = Array.from(cartProducts.querySelectorAll('.cart__product'));
  const cartProductCount = Array.from(cartProducts.querySelectorAll('.cart__product-count'));
  
  if (!cartProduct[id - 1]) {
    cartProducts.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${productImage[id - 1].currentSrc}">
            <div class="cart__product-count">${quantityValue.textContent}</div>
            <a href="#" class="cart__product-remove">&times;</a>
        </div>
        `);
  } else {
    cartProductCount[id - 1].textContent = Number(cartProductCount[id - 1].textContent) + Number(quantityValue.textContent);
  }
/*
    const removeButtom = cartProducts.querySelector('.cart__product-remove');
    removeButtom.addEventListener('click', (event) => {
        event.currentTarget.closest('.cart__product').remove();
    });*/
}));

product.forEach(item => {
    const productQuantityControl = Array.from(item.querySelectorAll('.product__quantity-control'));
    const productQuantityValue = item.querySelector('.product__quantity-value');

    productQuantityControl.forEach(quantity => {
        const quantityControl = () => {
            if (quantity.classList.contains('product__quantity-control_inc')) {
                productQuantityValue.textContent = +productQuantityValue.textContent + 1;
            } else if (quantity.classList.contains('product__quantity-control_dec')) {
                productQuantityValue.textContent = +productQuantityValue.textContent - 1;
            }
            if (productQuantityValue.textContent <= 1) {
                productQuantityValue.textContent = 1;
            } 
        }
        quantity.addEventListener('click', quantityControl);
    });
});