// Отримуємо кнопку "Кошик"
let cartBtn = document.getElementById('cartBtn')

// Навішуємо обробник подій на клік кнопки "Кошик"
cartBtn.addEventListener("click", function () {
    // Переходимо на сторінку кошика
    window.location.assign('cart.html')
})
