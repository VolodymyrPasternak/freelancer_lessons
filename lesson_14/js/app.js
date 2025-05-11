const checkbox = document.querySelector('.form__check');
const shipping = document.querySelector('.form__wrapper--shipping');

checkbox.addEventListener('check', function() {
    if (checkbox.checked){
        shipping.style.display = 'flex';
    } else {
        shipping.style.display = 'none'
    }
});
