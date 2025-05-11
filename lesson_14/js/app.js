const checkbox = document.getElementById('shipping-address');
const shipping = document.querySelector('.form__wrapper--shipping');

checkbox.addEventListener('change', function() {
    if (checkbox.checked){
        shipping.classList.add('open');
    } else {
        shipping.classList.remove('open');
    }
});
